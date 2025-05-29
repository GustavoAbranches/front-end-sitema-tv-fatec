import Sidebar from "../components/Sidebar";
import CadastroNoticias from "../components/Noticias_components/CadastroNoticias";

const Noticias = () => {
  return (
    <div className="flex flex-row ">
      <div className="2xl:w-8 lg:w-4 bg-carmineRed" />
      <div className="2xl:w-8 lg:w-4 bg-tangerine" />
      <div className="2xl:w-8 lg:w-4 bg-mediumOrange" />
      <div className="h-screen">
        <Sidebar />
      </div>
      <CadastroNoticias />
    </div>
  );
};

export default Noticias;
