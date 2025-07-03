import { useState, useEffect } from "react";
import {
  getAvisos,
  postAvisos,
  deleteAvisos,
  putAvisos,
} from "../services/avisoService";

export function useAvisos() {
  const [avisos, setAvisos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAvisos = async () => {
    try {
      const data = await getAvisos();
      setAvisos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Função para adicionar uma aviso
  const addAviso = async (novoAviso) => {
    setLoading(true);
    setError(null);
    try {
      const data = await postAvisos(novoAviso);
      setAvisos((prev) => [...prev, data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateAviso = async (id, dadosAtualizados) => {
    setLoading(true);
    setError(null);
    try {
      const data = await putAvisos(id, dadosAtualizados);
      setAvisos((prev) =>
        prev.map((aviso) => (aviso.id === id ? data : aviso)),
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Função para remover uma notícia
  const removeAvisos = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deleteAvisos(id);
      setAvisos((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
    }finally {
      setLoading(false);
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
    updateAviso,
    removeAvisos,
  };
}
