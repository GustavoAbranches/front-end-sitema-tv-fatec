import Aviso from "../components/Noticias_components/Aviso";
import BarraLateral from "../components/BarraLateral";
import DivSection from "../components/DivSection";
import Footer from "../components/Footer";
import TelaPrincipal from "./TelaPrincipal";

const Tela = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row flex-1">
        <div className="flex flex-col w-2/3">
          <TelaPrincipal />
          <Aviso />
        </div>
        <div className="flex flex-row w-1/3">
          <DivSection />
          <BarraLateral />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tela;
