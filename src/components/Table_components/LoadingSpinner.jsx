import { Box, CircularProgress } from "@mui/material";

export const LoadingSpinner = () => (
  <Box sx={{ textAlign: "center", mt: 4 }}>
    <CircularProgress />
  </Box>
);
