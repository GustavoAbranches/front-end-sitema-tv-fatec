import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AccessDenied() {
  const navigate = useNavigate();

  return (
    <Box
      className="flex flex-col justify-center items-center text-center"
      sx={{
        backgroundColor: "#002f7a",
        height: "100vh",
        width: "100%",
        color: "#ffffff",
        px: 2,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "4rem", fontWeight: "bold" }}>
        403
      </Typography>
      <Typography variant="h5" className="mb-2">
        Acesso Negado
      </Typography>
      <Typography variant="body1" className="mb-6 max-w-md">
        Você não tem permissão para visualizar esta página. Entre em contato com
        o administrador ou volte para o início.
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate("/materias")}
        sx={{
          backgroundColor: "#f7a600",
          color: "#ffffff",
          fontWeight: "bold",
          paddingX: 4,
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#e38e00",
          },
        }}
      >
        Voltar para Matérias
      </Button>
    </Box>
  );
}
