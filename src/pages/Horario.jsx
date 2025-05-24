import Footer from "../components/Footer.jsx";
import Sidediv from "../components/Horario_components/Sidediv.jsx";
import HorarioQuadro from "../components/Horario_components/HorarioQuadro.jsx";
import DivSection from "../components/DivSection.jsx";

import navegacao from "../util/navegacao.js";

const Horario = () => {
  // navegacao("/"); //Tirar comentario depois

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-primaryBlue w-full 2xl:h-12 lg:h-6"></div>
      <div className="flex flex-1">
        <Sidediv />
        <HorarioQuadro />
        <DivSection />
      </div>
      <Footer />
    </div>
  );
};

export default Horario;
