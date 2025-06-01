import { useAuth } from "../../hooks/useAuth";
import { Button } from "@mui/material";

export const DeleteButton = ({
  onDelete,
  confirmMessage = "Tem certeza que deseja excluir?",
}) => {
  const { user } = useAuth();

  if (!user || user.role === "editor") {
    // Esconde o botão para usuários com role editor
    return null;
  }

  return (
    <Button
      variant="contained"
      color="error"
      size="small"
      onClick={() => {
        if (window.confirm(confirmMessage)) {
          onDelete();
        }
      }}
    >
      Excluir
    </Button>
  );
};
