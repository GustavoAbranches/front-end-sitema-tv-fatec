import Sidebar from "../components/Sidebar";
import TableNoticias from "../components/Noticias_components/TableNoticias";
import NavigateButton from "../components/NavigateButton";
import DivSection from "../components/DivSection";

const Avisos = () => {
  return (
    <div className="flex">
      <div className="h-screen">
        <Sidebar />
      </div>
      <div className="w-full">
        <TableNoticias />
        <NavigateButton rota="/cadastro-noticia" text="Cadastrar" />
      </div>
      <DivSection />
    </div>
  );
};

export default Avisos;
