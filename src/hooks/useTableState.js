import { useState } from "react";

export const useTableState = () => {
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);

    return {
        sorting,
        setSorting,
        columnFilters,
        setColumnFilters,
    };
};
