import { useEffect } from "react";
import { useNavigate } from "react-router";

const navegacao = (caminho) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/vinheta", { state: { next: caminho } }); // caminho da próxima tela
    }, 60000); // 1000ms = 1 segundo

    return () => clearTimeout(timeout);
  }, [navigate]);
};

export default navegacao;
