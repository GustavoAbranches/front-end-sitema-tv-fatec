import { Box, Pagination } from "@mui/material";

export const TablePagination = ({ table }) => (
  <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
    <Pagination
      count={table.getPageCount()}
      page={table.getState().pagination.pageIndex + 1}
      onChange={(_, page) => table.setPageIndex(page - 1)}
      color="primary"
      shape="rounded"
    />
  </Box>
);
