import { Box, Table, TableContainer, Paper } from "@mui/material";
import { memo, useMemo, useCallback } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { FilterInputs } from "./FilterInputs";
import { TableHeader } from "./TableHeader";
import { CustomTableBody } from "./TableBody";
import { TablePagination } from "./TablePagination";

// Memoiza o componente principal
export const DataTable = memo(
  ({
    data,
    columns,
    sorting,
    setSorting,
    columnFilters,
    setColumnFilters,
    renderActions,
    showFilters = true,
    showPagination = true,
  }) => {
    // Memoiza os dados para evitar recriações desnecessárias
    const memoizedData = useMemo(() => data, [data]);

    // Memoiza as colunas caso não venham memoizadas
    const memoizedColumns = useMemo(() => columns, [columns]);

    // Memoiza a configuração da tabela
    const tableConfig = useMemo(
      () => ({
        data: memoizedData,
        columns: memoizedColumns,
        state: { sorting, columnFilters },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        // Otimizações importantes
        enableRowSelection: false, // desabilita se não usar
        enableColumnResizing: false, // desabilita se não usar
        enableColumnReordering: false, // desabilita se não usar
        debugTable: false, // desabilita debug em produção
      }),
      [
        memoizedData,
        memoizedColumns,
        sorting,
        columnFilters,
        setSorting,
        setColumnFilters,
      ],
    );

    const table = useReactTable(tableConfig);

    // Memoiza o estilo do container
    const containerStyle = useMemo(
      () => ({
        borderRadius: 2,
        boxShadow: 3,
        // Adiciona otimização CSS
        contain: "layout style paint",
      }),
      [],
    );

    const boxStyle = useMemo(() => ({ padding: 2 }), []);

    return (
      <Box sx={boxStyle}>
        {showFilters && <FilterInputs table={table} />}
        <TableContainer component={Paper} sx={containerStyle}>
          <Table stickyHeader>
            <TableHeader table={table} showActions={!!renderActions} />
            <CustomTableBody table={table} renderActions={renderActions} />
          </Table>
        </TableContainer>
        {showPagination && <TablePagination table={table} />}
      </Box>
    );
  },
);

DataTable.displayName = "DataTable";
