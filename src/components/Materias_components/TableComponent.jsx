import { useState, useMemo, useCallback } from "react";
import { useHorario } from "../../hooks/useHorarios";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  TextField,
  Pagination,
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";

import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const FilterInputs = ({ table }) => {
  return (
    <Box sx={{ display: "flex", gap: 2, marginBottom: 2, flexWrap: "wrap" }}>
      {table.getAllLeafColumns().map((column) => {
        if (!column.getCanFilter()) return null;
        const filterValue = column.getFilterValue() ?? "";
        return (
          <TextField
            key={column.id}
            label={`Filtrar ${column.columnDef.header}`}
            variant="outlined"
            size="small"
            value={filterValue}
            onChange={(e) => column.setFilterValue(e.target.value || undefined)}
          />
        );
      })}
    </Box>
  );
};

export default function TableComponent() {
  const { horarios, loading, error, removeHorario } = useHorario();

  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);

  const columns = useMemo(
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
      {
        id: "actions",
        header: "Ações",
        cell: () => null,
        enableSorting: false,
        enableColumnFilter: false,
      },
    ],
    [],
  );

  const table = useReactTable({
    data: horarios,
    columns,
    state: { sorting, columnFilters },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const handleDelete = useCallback(
    async (id) => {
      if (!window.confirm("Tem certeza que deseja excluir?")) return;

      try {
        await removeHorario(id);
      } catch (err) {
        alert("Erro ao excluir: " + err.message);
      }
    },
    [removeHorario],
  );

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography color="error">Erro: {error.message || error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 2 }}>
      <FilterInputs table={table} />

      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const isSorted = header.column.getIsSorted();
                  return (
                    <TableCell
                      key={header.id}
                      sortDirection={isSorted || false}
                      sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}
                    >
                      <TableSortLabel
                        active={!!isSorted}
                        direction={isSorted || "asc"}
                        onClick={header.column.getToggleSortingHandler()}
                        IconComponent={
                          isSorted === "asc"
                            ? ArrowUpward
                            : isSorted === "desc"
                              ? ArrowDownward
                              : undefined
                        }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </TableSortLabel>
                    </TableCell>
                  );
                })}
                <TableCell
                  sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}
                >
                  Ações
                </TableCell>
              </TableRow>
            ))}
          </TableHead>

          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} hover>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(row.original.id)}
                  >
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Pagination
          count={table.getPageCount()}
          page={table.getState().pagination.pageIndex + 1}
          onChange={(_, page) => table.setPageIndex(page - 1)}
          color="primary"
          shape="rounded"
        />
      </Box>
    </Box>
  );
}
