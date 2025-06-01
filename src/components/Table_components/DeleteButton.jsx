import { Button } from "@mui/material";

export const DeleteButton = ({
  onDelete,
  confirmMessage = "Tem certeza que deseja excluir?",
}) => (
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
