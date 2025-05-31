import Sidebar from "../components/Sidebar";
import TableComponent from "../components/Materias_components/TableComponent";
import CadastroButton from "../components/CadastroButton";
import DivSection from "../components/DivSection";

const Materias = () => {
  return (
    <>
      <div className="flex flex-row ">
        <div className="flex items-start">
          <Sidebar />
        </div>
        <div>
          <TableComponent />
          <CadastroButton
            rota="/cadastro-materia"
            text="Cadastrar disciplina"
          />
        </div>
        <div className="w-40">
          <DivSection />
        </div>
      </div>
    </>
  );
};

export default Materias;
