import BarraLateral from "../components/BarraLateral";
import DivSection from "../components/DivSection";
import Footer from "../components/Footer";
import NoticiasImagem from "../components/Noticias_components/NoticiasImagem";

const Tela = () => {
  return (
    <div className="flex flex-col min-h-screen">
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
