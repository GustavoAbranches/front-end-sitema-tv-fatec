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
        { start: "07:40", end: "09:30", label: "7:40" },
        { start: "09:30", end: "11:20", label: "9:30" },
        { start: "11:20", end: "13:00", label: "11:20" },
      ];
    }
    if (period === "Tarde") {
      return [
        { start: "13:00", end: "14:50", label: "13:00" },
        { start: "14:50", end: "16:40", label: "14:50" },
        { start: "16:40", end: "18:30", label: "16:40" },
      ];
    }
    return [
      { start: "19:00", end: "20:40", label: "19:00" },
      { start: "20:40", end: "22:20", label: "20:40" },
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
      <div className="flex items-center justify-center h-full bg-gray-50">
        <div className="text-xl text-red-600">Erro ao carregar dados</div>
      </div>
    );
  }

  if (!currentCourse) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-50">
        <div className="text-xl text-gray-600">Nenhum curso encontrado</div>
      </div>
    );
  }

  // Renderização
  return (
    <div className="h-full bg-gray-50 p-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-800 text-white px-4 py-2 rounded-l-lg text-2xl font-bold">
            {currentCourse.name.match(/[A-Z]/g)?.join("") || ""}
          </div>
          <div className="bg-orange-400 w-2 h-12"></div>
          <div className="bg-white px-6 py-2 shadow-md rounded-r-lg">
            <h1 className="text-2xl font-bold text-gray-700">
              {currentCourse.name}
            </h1>
          </div>
        </div>
      </div>

      {/* Grid Unificada - Header dos Horários + Disciplinas */}
      <div className="2xl:h-[800px] space-y-3">
        {/* Linha do cabeçalho com horários */}
        <div className="grid grid-cols-4 gap-4 mr-6">
          <div className="flex justify-center items-center 2xl:w-36 lg:w-28 text-right ">
            <span className="2xl:text-4xl 2xl:font-bold lg:text-lg lg:font-semibold text-primaryBlue">
              Horários
            </span>
          </div>
          {timeSlots.map((slot, index) => (
            <div
              key={index}
              className="2xl:h-[100px] 2xl:w-[400px] lg:h-[50px] lg:w-[290px] flex flex-col items-start justify-center text-primaryBlue"
            >
              <div className="relative 2xl:w-[40px] 2xl:h-[40px] lg:w-[20px] lg:h-[20px] bg-orange-400 rounded-md mb-1"></div>
              <div className="absolute z-10 2xl:mb-[30px] lg:mb-[10px] 2xl:w-[400px] 2xl:h-[10px] lg:w-[300px] lg:h-[5px] bg-orange-400"></div>
              <span className="2xl:text-lg lg:text-sm 2xl:font-bold lg:font-semibold">
                {slot.label}
              </span>
            </div>
          ))}
        </div>

        {/* Linhas dos semestres */}
        {semesters.map((semester) => (
          <div key={semester} className="grid grid-cols-4 gap-2">
            <div className="flex justify-center items-center 2xl:w-[300px] lg:w-[150px] text-right">
              <span className="2xl:text-3xl lg:text-lg 2xl:font-bold lg:font-semibold text-primaryBlue">
                {semester}° Semestre
              </span>
            </div>

            {timeSlots.map((timeSlot, index) => {
              const discipline = getDisciplineForSlot(semester, timeSlot);
              return (
                <div
                  key={index}
                  className={`lg:p-3 rounded-lg shadow-md 2xl:h-[105px] 2xl:w-[350px] lg:h-[60px] lg:w-[290px] flex items-center justify-center ${getCardColor(
                    discipline,
                  )}`}
                >
                  {discipline ? (
                    <div className="text-center">
                      <div className="2xl:text-xl 2xl:font-bold lg:font-semibold text-sm mb-1">
                        {discipline.disciplina}
                      </div>
                      {discipline.sala !== "Sem Professor" && (
                        <div className="2xl:text-lg 2xl:font-semibold lg:text-xs opacity-80">
                          {discipline.docente} - Sala {discipline.sala}
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
