//componentes
import BarraLateral from "../components/BarraLateral";
import DivSection from "../components/DivSection";
import Footer from "../components/Footer";
import NoticiasImagem from "../components/Noticias_components/NoticiasImagem";

//funções
import navegacao from "../util/navegacao";

const Tela = () => {
  // navegacao("/horario");

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-row flex-1">
        <div className="h-full w-full">
          <NoticiasImagem />
        </div>
        <div className="flex flex-row">
          <DivSection />
          <BarraLateral />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tela;
