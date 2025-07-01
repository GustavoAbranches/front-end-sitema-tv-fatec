import { useState, useEffect } from "react";
import { useHorario } from "../../hooks/useHorarios";

const HorarioQuadro = () => {
  const [currentCourse, setCurrentCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  const { horarios, loading, error } = useHorario();

  // Função para converter horário string em minutos para comparação
  const timeToMinutes = (timeStr) => {
    if (!timeStr) return 0;
    const cleanTime = timeStr.replace(":00", ""); // Remove :00 se presente
    const [hours, minutes] = cleanTime.split(":").map(Number);
    return hours * 60 + (minutes || 0);
  };

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
        { start: "11:20", end: "13:00", label: "11:20", endLabel: "13:00" },
      ];
    }
    if (period === "Tarde") {
      return [
        { start: "13:00", end: "14:50", label: "13:00" },
        { start: "14:50", end: "16:40", label: "14:50" },
        { start: "16:40", end: "18:30", label: "16:40", endLabel: "18:30" },
      ];
    }
    return [
      { start: "19:00", end: "20:40", label: "19:00" },
      { start: "20:40", end: "22:20", label: "20:40", endLabel: "22:20" },
      { start: "", end: "", label: "-", isEmpty: true },
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

  // Busca disciplina do semestre e horário - CORRIGIDA
  const getDisciplineForSlot = (semester, timeSlot) => {
    if (!currentCourse || timeSlot.isEmpty) return null;

    const slotStart = timeToMinutes(timeSlot.start);
    const slotEnd = timeToMinutes(timeSlot.end);

    return currentCourse.disciplines.find((discipline) => {
      if (discipline.semestre !== semester) return false;

      const disciplineStart = timeToMinutes(discipline.horario_inicial);
      const disciplineEnd = timeToMinutes(discipline.horario_final);

      // Verifica se há sobreposição entre os horários
      // A disciplina se encaixa no slot se:
      // - Começa antes ou no início do slot E termina depois do início do slot
      // OU
      // - Começa antes do fim do slot E termina depois ou no fim do slot
      return (
        (disciplineStart <= slotStart && disciplineEnd > slotStart) ||
        (disciplineStart < slotEnd && disciplineEnd >= slotEnd) ||
        (disciplineStart >= slotStart && disciplineEnd <= slotEnd)
      );
    });
  };

  // Função para calcular células mescladas por semestre
  const getMergedCellsForSemester = (semester) => {
    const cells = [];
    let i = 0;

    while (i < timeSlots.length) {
      const currentSlot = timeSlots[i];
      const currentDiscipline = getDisciplineForSlot(semester, currentSlot);

      if (!currentDiscipline) {
        // Sem disciplina neste slot
        cells.push({
          discipline: null,
          colspan: 1,
          timeSlotIndex: i,
        });
        i++;
        continue;
      }

      // Encontrou uma disciplina, agora verifica quantos slots ela ocupa
      let colspan = 1;
      let j = i + 1;

      // Verifica slots subsequentes para a mesma disciplina
      while (j < timeSlots.length) {
        const nextSlot = timeSlots[j];
        const nextDiscipline = getDisciplineForSlot(semester, nextSlot);

        if (
          nextDiscipline &&
          currentDiscipline.disciplina === nextDiscipline.disciplina &&
          currentDiscipline.docente === nextDiscipline.docente &&
          currentDiscipline.sala === nextDiscipline.sala &&
          currentDiscipline.horario_inicial ===
            nextDiscipline.horario_inicial &&
          currentDiscipline.horario_final === nextDiscipline.horario_final
        ) {
          colspan++;
          j++;
        } else {
          break;
        }
      }

      cells.push({
        discipline: currentDiscipline,
        colspan: colspan,
        timeSlotIndex: i,
      });

      i = j; // Pula os slots já processados
    }

    return cells;
  };

  // Define a cor do card
  const getCardColor = (discipline) => {
    if (!discipline) return "bg-gray-100";
    if (
      discipline.sala === "SEM DOCENTE" ||
      discipline.docente === "SEM DOCENTE" ||
      discipline.sala === "Sem Professor"
    ) {
      return "bg-red-500 text-white";
    }
    return "bg-blue-800 text-white";
  };

  // Calcula a largura baseada no colspan
  const getCellWidth = (colspan) => {
    const baseWidth = "2xl:w-[390px] lg:w-[290px]";
    if (colspan === 2) {
      return "2xl:w-[790px] lg:w-[590px]";
    }
    if (colspan === 3) {
      return "2xl:w-[1190px] lg:w-[890px]";
    }
    return baseWidth;
  };

  // Tratamento de loading e erro
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
        <div className="text-xl text-gray-600">Carregando...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full w-full bg-gray-50">
        <div className="text-xl text-red-600">Erro ao carregar dados</div>
      </div>
    );
  }

  if (!currentCourse) {
    return (
      <div className="flex items-center justify-center h-full w-full bg-gray-50">
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
          {timeSlots.map((slot, index) => {
            const isLast = index === timeSlots.length;
            const showEndTime = slot.endLabel && !slot.isEmpty;

            return (
              <div
                key={index}
                className="2xl:h-[100px] 2xl:w-[400px] lg:h-[50px] lg:w-[290px] flex flex-col items-start justify-center text-primaryBlue"
              >
                {!slot.isEmpty ? (
                  <>
                    <div className="relative 2xl:w-[30px] 2xl:h-[30px] lg:w-[20px] lg:h-[20px] bg-orange-400 rounded-md mb-1"></div>
                    {!isLast && (
                      <div className="absolute z-10 2xl:mb-[30px] lg:mb-[25px] 2xl:w-[400px] 2xl:h-[10px] lg:w-[300px] lg:h-[5px] bg-orange-400"></div>
                    )}
                    <div className="flex items-center gap-2">
                      <span className="2xl:text-lg lg:text-sm 2xl:font-bold lg:font-semibold">
                        {slot.label}
                      </span>
                      {/* {showEndTime && (
                        <>
                          <span className="2xl:text-lg lg:text-sm 2xl:font-bold lg:font-semibold opacity-60">
                            às
                          </span>
                          <span className="2xl:text-lg lg:text-sm 2xl:font-bold lg:font-semibold">
                            {slot.endLabel}
                          </span>
                        </>
                      )} */}
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-start justify-center">
                    <div className="relative 2xl:w-[40px] 2xl:h-[40px] lg:w-[20px] lg:h-[20px] bg-gray-300 rounded-md mb-1"></div>
                    <span className="2xl:text-lg lg:text-sm 2xl:font-bold lg:font-semibold text-gray-400">
                      {slot.label}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Linhas dos semestres */}
        {semesters.map((semester) => {
          const mergedCells = getMergedCellsForSemester(semester);

          return (
            <div key={semester} className="grid grid-cols-4 gap-2">
              <div className="flex justify-center items-center 2xl:w-[300px] lg:w-[150px] text-right">
                <span className="2xl:text-3xl lg:text-lg 2xl:font-bold lg:font-semibold text-primaryBlue">
                  {semester}° Semestre
                </span>
              </div>

              {mergedCells.map((cell, index) => {
                const { discipline, colspan } = cell;
                return (
                  <div
                    key={index}
                    className={`lg:p-3 rounded-lg shadow-md 2xl:h-[105px] lg:h-[60px] ${getCellWidth(colspan)} flex items-center justify-center ${getCardColor(discipline)}`}
                    style={{ gridColumn: `span ${colspan}` }}
                  >
                    {discipline ? (
                      <div className="text-center">
                        <div className="2xl:text-xl 2xl:font-bold lg:font-semibold text-sm mb-1">
                          {discipline.disciplina}
                        </div>
                        {discipline.sala !== "Sem Professor" &&
                          discipline.docente !== "SEM DOCENTE" && (
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
          );
        })}
      </div>
    </div>
  );
};

export default HorarioQuadro;
