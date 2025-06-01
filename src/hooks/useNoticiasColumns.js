import { useMemo } from "react";

export const useNoticiasColumns = () => {
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
                accessorKey: "data_publicacao",
                header: "Data Publicação",
                filterFn: "includesString",
            },
            {
                accessorKey: "data_expiracao",
                header: "Data Expiração",
                filterFn: "includesString",
            },
        ],
        [],
    );
};