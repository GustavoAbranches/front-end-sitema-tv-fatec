import { useState, useEffect } from "react";
import { getAvisos, postAvisos, deleteAvisos } from "../services/avisoService";

export function useAvisos() {
  const [avisos, setAvisos] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const fetchAvisos = async () => {
    try {
      const data = await getAvisos();
      console.log("Aviso recebidos da API:", data);
      setAvisos(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Função para adicionar uma aviso
  const addAviso = async (novoAviso) => {
    try {
      const data = await postAvisos(novoAviso);
      setAvisos((prev) => [...prev, data]);
    } catch (err) {
      setError(err);
    }
  };

  // Função para remover uma notícia
  const removeAvisos = async (id) => {
    try {
      await deleteAvisos(id);
      setAvisos((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err);
    }
  };

  // Chama fetchAvisos uma vez quando o hook é montado
  useEffect(() => {
    fetchAvisos();
  }, []);

  // Retorna tudo que pode ser usado em outros componentes
  return {
    avisos,
    loading,
    error,
    fetchAvisos,
    addAviso,
    removeAvisos,
  };
}
