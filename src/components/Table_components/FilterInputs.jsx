import { Box, TextField } from "@mui/material";

export const FilterInputs = ({ table }) => {
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
