import DivNoticias from "./DivNoticias";
import QrCodeDiv from "./QrCodeDiv";
import { useNoticiasAtivasHoje } from "../../hooks/useNoticiasAtivasHoje";

const NoticiasImagem = () => {
  const { noticiasAtivasHoje, currentIndex, currentNoticia } =
    useNoticiasAtivasHoje();

  if (!currentNoticia) {
    return <p>Nenhuma notícia ativa para hoje</p>;
  }

  // Se a imagem de destaque estiver disponível, pegue a primeira
  const imagemUrl = currentNoticia?.imagem || currentNoticia?.imagem_path;

  return (
    <div>
      <div className="relative">
        {imagemUrl ? (
          <img
            src={imagemUrl}
            alt={currentNoticia.titulo}
            className="2xl:h-[702px] 2xl:w-[1264px] lg:h-[495px] "
          />
        ) : (
          <p>Imagem não disponível</p>
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
