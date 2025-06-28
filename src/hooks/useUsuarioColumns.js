import { useMemo } from "react";

export const useUsuarioColumns = () => {
  return useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        filterFn: "includesString",
      },
      {
        accessorKey: "nome",
        header: "Nome",
        filterFn: "includesString",
      },
      {
        accessorKey: "email",
        header: "E-mail",
        filterFn: "includesString",
      },
      {
        accessorKey: "setor",
        header: "Setor",
        filterFn: "includesString",
      },
      {
        accessorKey: "role",
        header: "Role",
        filterFn: "includesString",
      },
    ],
    [],
  );
};
