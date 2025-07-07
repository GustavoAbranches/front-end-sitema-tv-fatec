import DivNoticias from "./DivNoticias";
import QrCodeDiv from "./QrCodeDiv";
import { useNoticiasAtivasHoje } from "../../hooks/useNoticiasAtivasHoje";

const NoticiasImagem = () => {
  const { noticiasAtivasHoje, currentIndex, currentNoticia } =
    useNoticiasAtivasHoje();

  // Se a imagem de destaque estiver disponível, pegue a primeira
  const baseUrl = "http://localhost:5000";

  const imagemUrl = currentNoticia?.imagem
    ? currentNoticia.imagem.startsWith("http")
      ? currentNoticia.imagem
      : `${baseUrl}${currentNoticia.imagem.startsWith("/") ? "" : "/"}${currentNoticia.imagem}`
    : currentNoticia?.imagem_path || null;

  return (
    <div className="h-90% w-full">
      <div className="relative">
        {imagemUrl ? (
          <img
            src={imagemUrl}
            alt={currentNoticia.titulo}
            className="2xl:h-[700px] 2xl:w-[1264px] h-[494px] w-[998px]"
          />
        ) : (
          <div className="flex justify-center items-center font-bold text-xl 2xl:h-[700px] 2xl:w-[1264px] h-[494px] w-[998px]">
            <p>Imagem não disponível</p>
          </div>
        )}
        <QrCodeDiv
          currentNoticia={currentNoticia}
          className="absolute bottom-0 right-0"
        />
      </div>
      <DivNoticias noticia={currentNoticia} />
    </div>
  );
};

export default NoticiasImagem;
