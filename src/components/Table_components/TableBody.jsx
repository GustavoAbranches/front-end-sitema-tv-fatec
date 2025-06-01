import { TableBody, TableRow, TableCell } from "@mui/material";
import { flexRender } from "@tanstack/react-table";

export const CustomTableBody = ({ table, renderActions }) => (
  <TableBody>
    {table.getRowModel().rows.map((row) => (
      <TableRow key={row.id} hover>
        {row.getVisibleCells().map((cell) => (
          <TableCell key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
        {renderActions && <TableCell>{renderActions(row.original)}</TableCell>}
      </TableRow>
    ))}
  </TableBody>
);
