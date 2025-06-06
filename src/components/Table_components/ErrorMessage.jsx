import { Box, Typography } from "@mui/material";

export const ErrorMessage = ({ error }) => (
  <Box sx={{ textAlign: "center", mt: 4 }}>
    <Typography color="error">Erro: {error?.message || error}</Typography>
  </Box>
);
