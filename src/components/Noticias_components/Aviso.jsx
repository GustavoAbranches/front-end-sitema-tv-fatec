import { useState } from "react";
import { useNoticias } from "../../hooks/useNoticias";

import BgImage from "../../assets/fatec-arcos.jpg";

const Aviso = () => {
  const [aviso, setAviso] = useState();
  const { noticias, loading, erro } = useNoticias();
  return (
    <div
      className="px-6 py-6 text-white bg-cover bg-center relative 2xl:h-[250px] lg:h-[125px]"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="absolute inset-0 bg-primaryBlue bg-opacity-90 2xl:h-[250px] lg:h-[125px]" />
      <div className="relative z-10">
        <p className="font-bold 2xl:text-4xl lg:text-lg mb-1">
          {noticias.titulo}
        </p>
        <p className="2xl:text-2xl lg:text-lg leading-tight">
          {noticias.descricao}
        </p>
      </div>
    </div>
  );
};

export default Aviso;
