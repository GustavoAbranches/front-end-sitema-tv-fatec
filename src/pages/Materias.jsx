import Sidebar from "../components/Sidebar";
import TableComponent from "../components/Materias_components/TableComponent";
import NavigateButton from "../components/NavigateButton";
import DivSection from "../components/DivSection";

const Materias = () => {
  return (
    <>
      <div className="flex">
        <div className="flex items-start">
          <Sidebar />
        </div>
        <div className="w-full">
          <TableComponent />
          <NavigateButton rota="/cadastro-materia" text="Cadastrar" />
        </div>
        <DivSection />
      </div>
    </>
  );
};

export default Materias;
