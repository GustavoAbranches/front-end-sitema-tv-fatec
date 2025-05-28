import React, { useState, useEffect } from "react";
import { useHorario } from "../../hooks/useHorarios";

const HorarioQuadro = () => {
  const [currentCourse, setCurrentCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  const { horarios, loading, error } = useHorario();

  // Função para pegar o dia atual
  const getCurrentDay = () => {
    const days = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];
    return days[new Date().getDay()];
  };

  // Função para pegar o período atual
  const getCurrentPeriod = () => {
    const hour = new Date().getHours();
    if (hour >= 7 && hour < 13) return "Manhã";
    if (hour >= 13 && hour < 18) return "Tarde";
    return "Noite";
  };

  // Função para pegar os horários de acordo com o período
  const getTimeSlots = () => {
    const period = getCurrentPeriod();
    if (period === "Manhã") {
      return [
        { start: "07:40", end: "09:30", label: "7:40 - 9:30" },
        { start: "09:30", end: "11:20", label: "9:30 - 11:20" },
        { start: "11:20", end: "13:00", label: "11:20 - 13:00" },
      ];
    }
    if (period === "Tarde") {
      return [
        { start: "13:00", end: "14:50", label: "13:00 - 14:50" },
        { start: "14:50", end: "16:40", label: "14:50 - 16:40" },
        { start: "16:40", end: "18:30", label: "16:40 - 18:30" },
      ];
    }
    return [
      { start: "19:00", end: "20:40", label: "19:00 - 20:40" },
      { start: "20:40", end: "22:20", label: "20:40 - 22:20" },
    ];
  };

  const timeSlots = getTimeSlots();
  const semesters = [1, 2, 3, 4, 5, 6];

  // Organiza os dados por curso e aplica filtros por dia e turno
  useEffect(() => {
    if (horarios.length > 0) {
      const currentDay = getCurrentDay();
      const currentPeriod = getCurrentPeriod();

      const filteredHorarios = horarios.filter(
        (item) =>
          item.dia_semana.toLowerCase().includes(currentDay.toLowerCase()) &&
          item.turno.toLowerCase() === currentPeriod.toLowerCase(),
      );

      const groupedByCourse = filteredHorarios.reduce((acc, item) => {
        if (!acc[item.curso]) acc[item.curso] = [];
        acc[item.curso].push(item);
        return acc;
      }, {});

      const courseList = Object.keys(groupedByCourse).map((courseName) => ({
        name: courseName,
        disciplines: groupedByCourse[courseName],
      }));

      setCourses(courseList);
      setCurrentCourse(courseList[0]);
    }
  }, [horarios]);

  // Faz a rotação automática dos cursos a cada 30 segundos
  useEffect(() => {
    if (courses.length === 0) return;

    const interval = setInterval(() => {
      setCurrentCourseIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % courses.length;
        setCurrentCourse(courses[nextIndex]);
        return nextIndex;
      });
    }, 30000);

    return () => clearInterval(interval);
  }, [courses]);

  // Busca disciplina do semestre e horário
  const getDisciplineForSlot = (semester, timeSlot) => {
    if (!currentCourse) return null;

    return currentCourse.disciplines.find(
      (discipline) =>
        discipline.semestre === semester &&
        discipline.horario_inicial <= timeSlot.start + ":00" &&
        discipline.horario_final >= timeSlot.end + ":00",
    );
  };

  // Define a cor do card
  const getCardColor = (discipline) => {
    if (!discipline) return "bg-gray-100";
    if (
      discipline.sala === "Sem Professor" ||
      discipline.docente === "Sem Professor"
    ) {
      return "bg-red-500 text-white";
    }
    return "bg-blue-800 text-white";
  };

  // Tratamento de loading e erro
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-xl text-gray-600">Carregando...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-xl text-red-600">Erro ao carregar dados</div>
      </div>
    );
  }

  if (!currentCourse) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-xl text-gray-600">Nenhum curso encontrado</div>
      </div>
    );
  }

  // Renderização
  return (
    <div className="h-full bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <div className="bg-blue-800 text-white px-4 py-2 rounded-l-lg text-2xl font-bold">
            {currentCourse.name
              .split(" ")
              .map((word) => word.charAt(0))
              .join("")}
          </div>
          <div className="bg-orange-400 w-2 h-12"></div>
          <div className="bg-white px-6 py-2 shadow-md rounded-r-lg">
            <h1 className="text-2xl font-bold text-gray-700">
              {currentCourse.name}
            </h1>
          </div>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-4 gap-4 mb-3">
          <div></div> {/* Espaço do semestre */}
          {timeSlots.map((slot, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-4 h-4 bg-red-500 mb-2"></div>
              <span className="text-sm font-semibold text-gray-600">
                {slot.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Grade */}
      <div className="space-y-4">
        {semesters.map((semester) => (
          <div key={semester} className="grid grid-cols-4 gap-4">
            <div className="w-28 text-right">
              <span className="text-lg font-semibold text-gray-600">
                {semester}° Semestre
              </span>
            </div>

            {timeSlots.map((timeSlot, index) => {
              const discipline = getDisciplineForSlot(semester, timeSlot);
              return (
                <div
                  key={index}
                  className={`p-3 rounded-lg shadow-md h-[60px] w-[290px] flex items-center justify-center ${getCardColor(
                    discipline,
                  )}`}
                >
                  {discipline ? (
                    <div className="text-center">
                      <div className="font-semibold text-sm mb-1">
                        {discipline.disciplina}
                      </div>
                      {discipline.sala !== "Sem Professor" && (
                        <div className="text-xs opacity-80">
                          Sala {discipline.sala}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-gray-400 text-sm">-</div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorarioQuadro;
