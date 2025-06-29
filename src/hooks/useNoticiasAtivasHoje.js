import { useState, useEffect } from "react";
import { useNoticias } from "./useNoticias";

export function useNoticiasAtivasHoje() {
    const { noticias } = useNoticias();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Pega só a data (sem hora) em ISO para hoje
    const hojeStr = new Date().toISOString().substring(0, 10);

    // converte string 'YYYY-MM-DD' para objeto Date só com essa data (hora 00:00:00)
    const toDate = (str) => new Date(str + "T00:00:00");

    const hojeDate = toDate(hojeStr);

    const noticiasAtivasHoje = noticias.filter((noticia) => {
        const inicio = toDate(noticia.data_publicacao);
        const fim = toDate(noticia.data_expiracao);

        // Inclui o dia inteiro para a data de fim, assim a notícia fica ativa até o fim do dia_expiracao
        return hojeDate >= inicio && hojeDate <= fim;
    });

    useEffect(() => {
        if (noticiasAtivasHoje.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === noticiasAtivasHoje.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [noticiasAtivasHoje.length]); // atenção aqui: só quando muda o length

    useEffect(() => {
        setCurrentIndex(0);
    }, [noticiasAtivasHoje.length]);

    return {
        noticiasAtivasHoje,
        currentIndex,
        currentNoticia: noticiasAtivasHoje[currentIndex],
    };
}
