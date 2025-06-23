import Sidebar from "../components/Sidebar";
import UsuarioTable from "../components/UsuarioComponents/UsuarioTable";
import NavigateButton from "../components/NavigateButton";
import DivSection from "../components/DivSection";

const Usuarios = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <div>
          <Sidebar />
        </div>
        <div className="w-full">
          <UsuarioTable />
          <div className="mb-10">
            <NavigateButton rota="/cadastro-usuario" text="Cadastrar" />
          </div>
        </div>
        <DivSection />
      </div>
    </>
  );
};

export default Usuarios;
