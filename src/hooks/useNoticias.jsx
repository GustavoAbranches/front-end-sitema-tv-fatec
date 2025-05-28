import { useState, useEffect } from "react";
import {
  getNoticias,
  postNoticias,
  deleteNoticias,
} from "../services/noticiaServices";

export function useNoticias () {
    const [noticias, setNoticias] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

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
            const addNoticia = async (novaNoticias) => {
                try {
                  const data = await postHorario(novaNoticias);
                  setNoticias((prev) => [...prev, data]);
                } catch (err) {
                  setError(err);
                }
              };
            
              const removeNoticia = async (id) => {
                try {
                  await deleteNoticias(id);
                  setNoticias((prev) => prev.filter((item) => item.id !== id));
                } catch (err) {
                  setError(err);
                }
              };
            
              useEffect(() => {
                fetchNoticias();
              }, []);
            
              return {
                noticias,
                loading,
                error,
                fetchNoticias,
                addNoticia,
                removeNoticia,
              };
    }
}