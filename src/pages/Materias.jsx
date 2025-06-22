import Sidebar from "../components/Sidebar";
import TableComponent from "../components/Materias_components/TableComponent";
import NavigateButton from "../components/NavigateButton";
import DivSection from "../components/DivSection";

const Materias = () => {
  return (
    <>
      <div className="flex">
        <div className="h-screen">
          <Sidebar />
        </div>
        <div className="w-full">
          <TableComponent />
          <div className="mb-10">
            <NavigateButton rota="/cadastro-materia" text="Cadastrar" />
          </div>
        </div>
        <DivSection />
      </div>
    </>
  );
};

export default Materias;
