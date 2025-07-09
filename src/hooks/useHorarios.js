import { useEffect, useState } from "react";
import {
  getHorarios,
  postHorario,
  putHorario,
  deleteHorario,
} from "../services/horarioService";

export function useHorario() {
  const [horarios, setHorarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHorarios = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getHorarios();
      setHorarios(data);
    } catch (err) {
      setError(err.message || "Erro ao buscar horários");
    } finally {
      setLoading(false);
    }
  };

  const addHorario = async (novoHorario) => {
    setLoading(true);
    setError(null);
    try {
      const data = await postHorario(novoHorario);
      setHorarios((prev) => [...prev, data]);
    } catch (err) {
      setError(err.message || "Erro ao adicionar horário");
    } finally {
      setLoading(false);
    } 
  };

  const updateHorario = async (id, dadosAtualizados) => {
    setLoading(true);
    setError(null);
    try {
      const data = await putHorario(id, dadosAtualizados);
      setHorarios((prev) =>
        prev.map((horario) => (horario.id === id ? data : horario)),
      );
    } catch (err) {
      setError(err.message || "Erro ao atualizar horário");
    } finally {
      setLoading(false);
    }
  };

  const removeHorario = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deleteHorario(id);
      setHorarios((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message || "Erro ao remover horário");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHorarios();
  }, []);

  return {
    horarios,
    loading,
    error,
    fetchHorarios,
    addHorario,
    updateHorario,
    removeHorario,
  };
}
