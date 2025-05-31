import { useEffect, useState } from "react";
import {
  getHorarios,
  postHorario,
  deleteHorario,
} from "../services/horarioService";

export function useHorario() {
  const [horarios, setHorarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHorarios = async () => {
    setLoading(true);
    try {
      const data = await getHorarios();
      setHorarios(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const addHorario = async (novoHorario) => {
    try {
      const data = await postHorario(novoHorario);
      setHorarios((prev) => [...prev, data]);
    } catch (err) {
      setError(err);
    }
  };

  const removeHorario = async (id) => {
    try {
      await deleteHorario(id);
      setHorarios((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err);
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
    removeHorario,
  };
}
