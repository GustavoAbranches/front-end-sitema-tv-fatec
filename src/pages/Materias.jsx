import Sidebar from "../components/Sidebar";
import MainTable from "../components/Table_components/MainTable";

const Materias = () => {
  return (
    <>
      <div className="flex flex-row ">
        <div className="2xl:w-8 lg:w-4 bg-carmineRed" />
        <div className="2xl:w-8 lg:w-4 bg-tangerine" />
        <div className="2xl:w-8 lg:w-4 bg-mediumOrange" />
        <div className="flex h-screen items-center">
          <Sidebar />
        </div>
        <MainTable />
      </div>
    </>
  );
};

export default Materias;
