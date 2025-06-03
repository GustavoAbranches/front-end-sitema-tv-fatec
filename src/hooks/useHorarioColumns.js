import { useMemo } from "react";

export const useHorarioColumns = () => {
  return useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        filterFn: "includesString",
      },
      {
        accessorKey: "disciplina",
        header: "Disciplina",
        filterFn: "includesString",
      },
      {
        accessorKey: "curso",
        header: "Curso",
        filterFn: "includesString",
      },
      {
        accessorKey: "horario_inicial",
        header: "Horário",
        filterFn: "includesString",
      },
    ],
    [],
  );
};
