import Sidebar from "../components/Sidebar";
import MainTable from "../components/Table_components/MainTable";

const Materias = () => {
  return (
    <div className="flex h-screen items-center">
      <Sidebar />
      <div className="ml-20">
        <MainTable />
      </div>
    </div>
  );
};

export default Materias;
