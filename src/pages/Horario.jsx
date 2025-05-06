import Footer from "../components/Footer.jsx";
import Sidediv from "../components/Horario_components/Sidediv.jsx";
import HorarioQuadro from "../components/Horario_components/HorarioQuadro.jsx";

const Horario = () => {
  return (
    <div>
      <div className="bg-blue-900 w-[1219px] h-8"></div>
      <div className="flex">
        <Sidediv />
        <HorarioQuadro />
      </div>
      <Footer />
    </div>
  );
};

export default Horario;
