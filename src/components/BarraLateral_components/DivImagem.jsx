import imgDefault from "../../assets/avisos_fatec.png";

const DivImagem = ({ currentAviso }) => {
  if (!currentAviso || !currentAviso.imagem)
    return (
      <div className="relative 2xl:w-[450px] lg:w-[200px] lg:h-[200px] 2xl:h-[450px] mb-8">
        <div className="absolute bottom-3 right-3 w-full h-full bg-red-500 z-0 rounded-sm" />
        <div className="absolute bottom-2 right-2 w-full h-full bg-orange-400 z-10 rounded-sm" />
        <div className="absolute bottom-1 right-1 w-full h-full bg-yellow-400 z-20 rounded-sm" />
        <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full bg-white z-30 rounded-sm">
          <img src={imgDefault} alt="Imagem padrão" />
        </div>
      </div>
    );

  const baseUrl = "http://localhost:5000";

  const imagemUrl = currentAviso?.imagem
    ? currentAviso.imagem.startsWith("http")
      ? currentAviso.imagem
      : `${baseUrl}${currentAviso.imagem.startsWith("/") ? "" : "/"}${currentAviso.imagem}`
    : currentAviso?.imagem_path || null;

  console.log("currentAviso:", currentAviso);
  console.log("imagemUrl:", imagemUrl);
  console.log("URL da imagem do aviso:", imagemUrl);

  return (
    <div className="relative 2xl:w-[450px] lg:w-[200px] lg:h-[200px] 2xl:h-[450px] mb-8">
      {/* Fundo e imagem */}
      <div className="absolute bottom-3 right-3 w-full h-full bg-red-500 z-0 rounded-sm" />
      <div className="absolute bottom-2 right-2 w-full h-full bg-orange-400 z-10 rounded-sm" />
      <div className="absolute bottom-1 right-1 w-full h-full bg-yellow-400 z-20 rounded-sm" />
      <div className="absolute top-0 left-0 w-full h-full bg-white z-30 rounded-sm">
        <img
          src={imagemUrl}
          alt={currentAviso.titulo}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default DivImagem;
