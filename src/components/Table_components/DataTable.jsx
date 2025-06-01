import { Box, Table, TableContainer, Paper } from "@mui/material";
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

export const DataTable = ({
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
  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnFilters },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <Box sx={{ padding: 2 }}>
      {showFilters && <FilterInputs table={table} />}

      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
        <Table>
          <TableHeader table={table} showActions={!!renderActions} />
          <CustomTableBody table={table} renderActions={renderActions} />
        </Table>
      </TableContainer>

      {showPagination && <TablePagination table={table} />}
    </Box>
  );
};
