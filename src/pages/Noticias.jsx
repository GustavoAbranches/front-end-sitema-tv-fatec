import Sidebar from "../components/Sidebar";
import TableNoticias from "../components/Noticias_components/TableNoticias";
import NavigateButton from "../components/NavigateButton";
import DivSection from "../components/DivSection";

const Noticias = () => {
  return (
    <div className="flex min-h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <TableNoticias />

        <div className="mb-10">
          <NavigateButton rota="/cadastro-noticia" text="Cadastrar" />
        </div>
      </div>
      <DivSection />
    </div>
  );
};

export default Noticias;
