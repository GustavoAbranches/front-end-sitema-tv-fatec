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
                accessorKey: "titulo",
                header: "Título",
                filterFn: "includesString",
            },
            {
                accessorKey: "descricao",
                header: "Descrição",
                filterFn: "includesString",
            },
            {
                accessorKey: "data",
                header: "Data",
                filterFn: "includesString",
            },
        ],
        [],
    );
};