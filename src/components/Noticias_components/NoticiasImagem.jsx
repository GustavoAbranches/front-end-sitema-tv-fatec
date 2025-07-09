import DivNoticias from "./DivNoticias";
import QrCodeDiv from "./QrCodeDiv";
import imgDefault from "../../assets/FATEC_CARAPICUIBA.png";
import { useNoticiasAtivasHoje } from "../../hooks/useNoticiasAtivasHoje";

const NoticiasImagem = () => {
  const { noticiasAtivasHoje, currentIndex, currentNoticia } =
    useNoticiasAtivasHoje();

  const baseUrl = "http://localhost:5000";

  const imagemUrl = currentNoticia?.imagem
    ? currentNoticia.imagem.startsWith("http")
      ? currentNoticia.imagem
      : `${baseUrl}${currentNoticia.imagem.startsWith("/") ? "" : "/"}${currentNoticia.imagem}`
    : currentNoticia?.imagem_path || null;

  return (
    <div className="h-full w-full">
      <div className="relative">
        {imagemUrl ? (
          <img
            src={imagemUrl}
            alt={currentNoticia.titulo}
            className="2xl:h-[700px] 2xl:w-[1264px] h-[494px] w-[998px]"
          />
        ) : (
          <img
            src={imgDefault}
            alt="Imagem padrão"
            className="2xl:h-[700px] 2xl:w-[1264px] lg:h-[494px] lg:w-[998px]"
          />
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
