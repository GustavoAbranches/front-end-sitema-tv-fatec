import { useNoticias } from "../../hooks/useNoticias";
import BgImage from "../../assets/fatec-arcos.jpg";

const DivNoticias = () => {
  const { noticias, loading, error } = useNoticias();

  // Get the latest news (first item) or show default message
  const latestNoticia = noticias.length > 0 ? noticias[0] : null;

  if (loading) {
    return (
      <div
        className="px-6 py-6 text-white bg-cover bg-center relative 2xl:h-[250px] lg:h-[125px] flex items-center justify-center"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="absolute inset-0 bg-primaryBlue bg-opacity-90 2xl:h-[250px] lg:h-[125px]" />
        <div className="relative z-10">
          <p className="2xl:text-2xl lg:text-lg">Carregando notícias...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="px-6 py-6 text-white bg-cover bg-center relative 2xl:h-[250px] lg:h-[125px] flex items-center justify-center"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="absolute inset-0 bg-primaryBlue bg-opacity-90 2xl:h-[250px] lg:h-[125px]" />
        <div className="relative z-10">
          <p className="2xl:text-2xl lg:text-lg text-red-300">
            Erro ao carregar notícias
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="px-6 py-6 text-white bg-cover bg-center relative 2xl:h-[250px] lg:h-[125px]"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="absolute inset-0 bg-primaryBlue bg-opacity-90 2xl:h-[250px] lg:h-[125px]" />
      <div className="relative z-10">
        {latestNoticia ? (
          <>
            <p className="font-bold 2xl:text-4xl lg:text-lg mb-1">
              {latestNoticia.titulo}
            </p>
            <p className="2xl:text-2xl lg:text-lg leading-tight">
              {latestNoticia.descricao}
            </p>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="2xl:text-2xl lg:text-lg text-center">
              Nenhuma notícia disponível no momento
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DivNoticias;
