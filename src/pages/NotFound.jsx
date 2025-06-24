import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      className="flex flex-col justify-center items-center text-center"
      sx={{
        backgroundColor: '#002f7a',
        height: '100vh',
        width: '100%',
        color: '#ffffff',
        px: 2,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold' }}>
        404
      </Typography>
      <Typography variant="h5" className="mb-2">
        Página não encontrada
      </Typography>
      <Typography variant="body1" className="mb-6 max-w-md">
        O endereço que você tentou acessar não existe ou foi removido.
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate('/login')}
        sx={{
          backgroundColor: '#f7a600',
          color: '#ffffff',
          fontWeight: 'bold',
          paddingX: 4,
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#e38e00',
          },
        }}
      >
        Voltar ao Login
      </Button>
    </Box>
  );
}
