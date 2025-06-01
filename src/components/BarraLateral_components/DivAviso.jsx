import { useState } from "react";
import { useAvisos } from "../../hooks/useAvisos";

const DivAviso = () => {
  const { avisos, loading, error } = useAvisos();

  // Verifica se há avisos e se carregou com sucesso
  const latestAviso = avisos.length > 0 ? avisos[0] : null;

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

  if (!latestAviso) {
    return (
      <div className="bg-mediumOrange text-center text-primaryBlue py-2 px-1">
        Nenhum aviso disponível.
      </div>
    );
  }

  return (
    <div className="m-4 2xl:w-[29rem] lg:w-[13rem]">
      <div className="bg-mediumOrange text-center text-primaryBlue py-2 px-1">
        <p className="2xl:text-3xl lg:text-lg font-bold">{latestAviso.data}</p>
        <p className="2xl:text-3xl lg:text-lg font-semibold font-verdana">
          {latestAviso.titulo}
        </p>
        <p className="2xl:text-3xl lg:text-lg font-verdana">
          {latestAviso.descricao}
        </p>
      </div>
    </div>
  );
};

export default DivAviso;
