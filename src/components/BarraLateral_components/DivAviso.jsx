import { useState } from "react";
import { useAvisos } from "../../hooks/useAvisos";

const DivAviso = () => {
  const { avisos, loading, error } = useAvisos();

  // Verifica se há avisos e se carregou com sucesso
  const latestAviso = avisos.length > 0 ? avisos[0] : null;

  const hoje = new Date().toISOString().split("T")[0]; // Pega 'YYYY-MM-DD'

  // Filtra os avisos que são para hoje
  const avisosDeHoje = avisos.filter((aviso) => aviso.data === hoje);

  if (loading) {
    return (
      <div className="bg-mediumOrange text-center text-primaryBlue py-2 px-1">
        Carregando avisos...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-mediumOrange text-center text-primaryBlue py-2 px-1">
        Erro ao carregar os avisos: {error}
      </div>
    );
  }

  return (
    <div className="m-4 2xl:w-[29rem] lg:w-[13rem]">
      {avisosDeHoje.length > 0 ? (
        avisosDeHoje.map((aviso) => (
          <div
            key={aviso.id}
            className="bg-mediumOrange text-center text-primaryBlue py-2 px-1 "
          >
            <h2 className="2xl:text-3xl lg:text-lg font-bold">
              {aviso.titulo}
            </h2>
            <p className="2xl:text-3xl lg:text-lg font-verdana">
              {aviso.descricao}
            </p>
          </div>
        ))
      ) : (
        <div className="bg-mediumOrange text-center text-primaryBlue py-2 px-1">
          <p>Não há avisos para hoje.</p>
        </div>
      )}
    </div>
  );
};

export default DivAviso;
