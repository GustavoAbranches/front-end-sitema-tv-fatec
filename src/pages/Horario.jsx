import Footer from "../components/Footer.jsx";
import Sidediv from "../components/Horario_components/Sidediv.jsx";
import HorarioQuadro from "../components/Horario_components/HorarioQuadro.jsx";
import DivSection from "../components/DivSection.jsx";

const Horario = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-primaryBlue w-full h-12"></div>
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
