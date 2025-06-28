import { useState, useEffect } from "react";

import {
  getImagemDestaque,
  postImagemDestaque,
  putImagemDestaque,
  deleteImagemDestaque,
} from "../services/imagemDestaqueService";

export function useImagemDestaque() {
  const [imagemDestaque, setImagemDestaque] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //busca as imagens do destaque
  const fetchImagemDestaque = async () => {
    setLoading(true);
    try {
      const data = await getImagemDestaque();
      setImagemDestaque(data);
    } catch (err) {
      console.error("Erro na API:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  //adiciona uma nova imagem destaque
  const addImagemDestaque = async (novaImagemDestaque) => {
    try {
      const data = await postImagemDestaque(novaImagemDestaque);
      setImagemDestaque((prev) => [...prev, data]);
    } catch (err) {
      setError(err);
    }
  };

  const removeImagemDestaque = async (id) => {
    try {
      await deleteImagemDestaque(id);
      setImagemDestaque((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err);
    }
  };

  //atualiza a imagem destaque
  const updateImagemDestaque = async (id, dadosAtualizados) => {
    try {
      const data = await putImagemDestaque(id, dadosAtualizados);
      setImagemDestaque((prev) =>
        prev.map((imagemDestaque) =>
          imagemDestaque.id === id ? data : imagemDestaque,
        ),
      );
    } catch (err) {
      setError(err.message);
    }
  };

  // Chama fetchImagemDestaque uma vez quando o hook é montado
  useEffect(() => {
    fetchImagemDestaque();
  }, []);

  return {
    imagemDestaque,
    loading,
    error,
    fetchImagemDestaque,
    addImagemDestaque,
    removeImagemDestaque,
    updateImagemDestaque
  };
}
