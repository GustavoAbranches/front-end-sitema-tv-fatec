import { useState, useEffect } from "react";
import {
  getNoticias,
  postNoticias,
  deleteNoticias,
} from "../services/noticiaServices";

export function useNoticias() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Função para buscar notícias
  const fetchNoticias = async () => {
    setLoading(true);
    try {
      const data = await getNoticias();
      console.log("Noticias recebidas da API:", data);
      setNoticias(data);
    } catch (err) {
      console.error("Erro na API:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Função para adicionar uma notícia
  const addNoticia = async (novaNoticia) => {
    try {
      const data = await postNoticias(novaNoticia);
      setNoticias((prev) => [...prev, data]);
    } catch (err) {
      setError(err);
    }
  };

  // Função para remover uma notícia
  const removeNoticia = async (id) => {
    try {
      await deleteNoticias(id);
      setNoticias((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err);
    }
  };

  // Chama fetchNoticias uma vez quando o hook é montado
  useEffect(() => {
    fetchNoticias();
  }, []);

  // Retorna tudo que pode ser usado em outros componentes
  return {
    noticias,
    loading,
    error,
    fetchNoticias,
    addNoticia,
    removeNoticia,
  };
}
