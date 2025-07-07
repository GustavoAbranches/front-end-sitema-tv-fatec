import BgImage from "../../assets/fatec-arcos.jpg";

const DivNoticias = ({ noticia }) => {
  if (!noticia || !noticia.titulo || !noticia.descricao) {
    return (
      <div
        className="px-6 py-6 text-white bg-cover bg-center relative 2xl:h-[250px] h-[125px]"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="absolute inset-0 bg-primaryBlue bg-opacity-90 2xl:h-[250px] h-[125px]" />
        <div className="relative z-10">
          <p className="font-bold 2xl:text-4xl text-lg mb-1">
            Nenhuma notícia hoje.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="px-6 py-6 text-white bg-cover bg-center relative 2xl:h-[250px] h-[125px]"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="absolute inset-0 bg-primaryBlue bg-opacity-90 2xl:h-[250px] h-[125px]" />
      <div className="relative z-10">
        <p className="font-bold 2xl:text-4xl text-lg mb-1">{noticia.titulo}</p>
        <p className="2xl:text-2xl text-lg leading-tight">
          {noticia.descricao}
        </p>
      </div>
    </div>
  );
};

export default DivNoticias;
