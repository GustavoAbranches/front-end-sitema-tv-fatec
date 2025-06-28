import { useState, useEffect } from "react";

import {
  getImagemAviso,
  postImagemAviso,
  putImagemAviso,
  deleteImagemAviso,
} from "../services/imagemAvisoService";

export function useImagemAviso() {
  const [imagemAviso, setImagemAviso] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //busca as imagens do Aviso
  const fetchImagemAviso = async () => {
    setLoading(true);
    try {
      const data = await getImagemAviso();
      setImagemAviso(data);
    } catch (err) {
      console.error("Erro na API:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  //adiciona uma nova imagem Aviso
  const addImagemAviso = async (novaImagemAviso) => {
    try {
      const data = await postImagemAviso(novaImagemAviso);
      setImagemAviso((prev) => [...prev, data]);
    } catch (err) {
      setError(err);
    }
  };

  const removeImagemAviso = async (id) => {
    try {
      await deleteImagemAviso(id);
      setImagemAviso((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err);
    }
  };

  //atualiza a imagem Aviso
  const updateImagemAviso = async (id, dadosAtualizados) => {
    try {
      const data = await putImagemAviso(id, dadosAtualizados);
      setImagemAviso((prev) =>
        prev.map((imagemAviso) =>
          imagemAviso.id === id ? data : imagemAviso,
        ),
      );
    } catch (err) {
      setError(err.message);
    }
  };

  // Chama fetchImagemAviso uma vez quando o hook é montado
  useEffect(() => {
    fetchImagemAviso();
  }, []);

  return {
    imagemAviso,
    loading,
    error,
    fetchImagemAviso,
    addImagemAviso,
    removeImagemAviso,
    updateImagemAviso
  };
}
