import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  flexRender,
} from '@tanstack/react-table';

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
} from '@mui/material';

import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

// Dados de exemplo
const defaultData = [
  { id: 1, materia: 'Matemática', curso: 'Engenharia', horario: '08:00 - 09:30' },
  { id: 2, materia: 'História', curso: 'Direito', horario: '10:00 - 11:30' },
  { id: 3, materia: 'Física', curso: 'Engenharia', horario: '13:00 - 14:30' },
  { id: 4, materia: 'Biologia', curso: 'Medicina', horario: '15:00 - 16:30' },
  { id: 5, materia: 'Química', curso: 'Farmácia', horario: '09:00 - 10:30' },
  { id: 6, materia: 'Português', curso: 'Letras', horario: '11:00 - 12:30' },
  { id: 7, materia: 'Inglês', curso: 'Letras', horario: '13:30 - 15:00' },
];

// Colunas com suporte a filtro
const columns = [
  {
    accessorKey: 'materia',
    header: 'Matéria',
    filterFn: 'includesString',
  },
  {
    accessorKey: 'id',
    header: 'ID',
    filterFn: 'includesString',
  },
  {
    accessorKey: 'curso',
    header: 'Curso',
    filterFn: 'includesString',
  },
  {
    accessorKey: 'horario',
    header: 'Horário',
    filterFn: 'includesString',
  },
];

export default function TableComponent() {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);

  const table = useReactTable({
    data: defaultData,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
    <Box sx={{ padding: 2 }}>
      {/* Filtros por coluna */}
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 2, flexWrap: 'wrap' }}>
        {table.getAllLeafColumns().map(column => {
          const filterValue = column.getFilterValue();
          return column.getCanFilter() ? (
            <TextField
              key={column.id}
              label={`Filtrar ${column.columnDef.header}`}
              variant="outlined"
              size="small"
              value={filterValue ?? ''}
              onChange={e =>
                column.setFilterValue(e.target.value || undefined)
              }
            />
          ) : null;
        })}
      </Box>

      {/* Tabela */}
      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  const isSorted = header.column.getIsSorted();
                  return (
                    <TableCell
                      key={header.id}
                      sortDirection={isSorted === false ? false : isSorted}
                      sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}
                    >
                      <TableSortLabel
                        active={!!isSorted}
                        direction={isSorted || 'asc'}
                        onClick={header.column.getToggleSortingHandler()}
                        IconComponent={
                          isSorted === 'asc'
                            ? ArrowUpward
                            : isSorted === 'desc'
                            ? ArrowDownward
                            : undefined
                        }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </TableSortLabel>
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableHead>

          <TableBody>
            {table.getRowModel().rows.map(row => (
              <TableRow key={row.id} hover>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Paginação */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Pagination
          count={table.getPageCount()}
          page={table.getState().pagination.pageIndex + 1}
          onChange={(_, page) => table.setPageIndex(page - 1)}
          color="primary"
          shape="rounded"
        />
      </Box>
    </Box>
    </div>
  );
}
