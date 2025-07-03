import { useState, useEffect } from "react";
import {
  getNoticias,
  postNoticias,
  putNoticias,
  deleteNoticias,
} from "../services/noticiaServices";

export function useNoticias() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Função para buscar notícias
  const fetchNoticias = async () => {
    try {
      const data = await getNoticias();
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
    setLoading(true);
    setError(null);
    try {
      const data = await postNoticias(novaNoticia);
      setNoticias((prev) => [...prev, data]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Função para remover uma notícia
  const removeNoticia = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deleteNoticias(id);
      setNoticias((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const updateNoticia = async (id, dadosAtualizados) => {
    setLoading(true);
    setError(null);
    try {
      const data = await putNoticias(id, dadosAtualizados);
      setNoticias((prev) =>
        prev.map((noticia) => (noticia.id === id ? data : noticia)),
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
    updateNoticia,
    removeNoticia,
  };
}
