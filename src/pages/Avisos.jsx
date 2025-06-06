import Sidebar from "../components/Sidebar";
import TableAvisos from "../components/Aviso_components/TableAvisos";
import NavigateButton from "../components/NavigateButton";
import DivSection from "../components/DivSection";

const Avisos = () => {
  return (
    <div className="flex">
      <div className="h-screen">
        <Sidebar />
      </div>
      <div className="w-full">
        <TableAvisos />
        <div className="mb-10">
          <NavigateButton rota="/cadastro-avisos" text="Cadastrar" />
        </div>
      </div>
      <DivSection />
    </div>
  );
};

export default Avisos;
