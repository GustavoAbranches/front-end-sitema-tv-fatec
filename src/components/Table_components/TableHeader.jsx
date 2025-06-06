import { TableHead, TableRow, TableCell, TableSortLabel } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { flexRender } from "@tanstack/react-table";

export const TableHeader = ({ table, showActions = false }) => (
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

        {showActions && (
          <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}>
            Ações
          </TableCell>
        )}
      </TableRow>
    ))}
  </TableHead>
);
