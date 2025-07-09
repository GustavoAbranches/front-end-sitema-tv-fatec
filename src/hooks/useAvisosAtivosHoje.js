import { useState, useEffect } from "react";
import { useAvisos } from "./useAvisos";

export function useAvisosAtivosHoje() {
  const { avisos, loading, error } = useAvisos();
  const [currentIndex, setCurrentIndex] = useState(0);
  const hoje = new Date().toISOString().substring(0, 10);

  const avisosDeHoje = avisos.filter((aviso) => aviso.data === hoje);

  useEffect(() => {
    if (avisosDeHoje.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === avisosDeHoje.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [avisosDeHoje]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [avisosDeHoje.length]);

  return {
    avisosDeHoje,
    currentIndex,
    currentAviso: avisosDeHoje[currentIndex],
    loading,
    error,
  };
}
