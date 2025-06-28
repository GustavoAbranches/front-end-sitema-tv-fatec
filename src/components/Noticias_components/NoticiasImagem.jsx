import DivNoticias from "./DivNoticias";
import { useImagemDestaque } from "../../hooks/useImagemDestaque";

const NoticiasImagem = () => {
  const { imagemDestaque, loading, error } = useImagemDestaque();

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  // Se a imagem de destaque estiver disponível, pegue a primeira
  const imagemUrl = imagemDestaque[0]?.imagem_path;

  return (
    <div>
      <div >
        {imagemUrl ? (
          <img src={imagemUrl} alt="Imagem de destaque" className="2xl:h-[702px] 2xl:w-[1264px] lg:h-[495px]"/>
        ) : (
          <p>Imagem não disponível</p>
        )}
      </div>
      <DivNoticias />
    </div>
  );
};

export default NoticiasImagem;
