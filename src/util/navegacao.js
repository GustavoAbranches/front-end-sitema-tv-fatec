import { useEffect } from "react";
import { useNavigate } from "react-router";

const navegacao = (caminho) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/vinheta", { state: { next: caminho } }); // caminho da próxima tela
    }, 5000); // 5000ms = 5 segundos

    return () => clearTimeout(timeout);
  }, [navigate]);
};

export default navegacao;
