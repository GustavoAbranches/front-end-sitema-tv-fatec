import Footer from "../Footer.jsx";
import Sidediv from "../Horario_components/Sidediv.jsx";
import HorarioQuadro from "../Horario_components/HorarioQuadro";

const Horario = () => {
  return (
    <div>
      <div className="bg-blue-900 w-full h-8"></div>
      <div className="flex justify-end items-end">
        {/* <Sidediv /> */}
        <HorarioQuadro />
      </div>
      <Footer />
    </div>
  );
};

export default Horario;
