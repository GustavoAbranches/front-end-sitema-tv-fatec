import Sidebar from "../components/Sidebar";
import TableComponent from "../components/Materias_components/TableComponent";
import DivSection from "../components/DivSection";

const Materias = () => {
  return (
    <>
      <div className="flex flex-row ">
        <div className="flex h-screen items-center">
          <Sidebar />
        </div>
        <div>
          <TableComponent />
          <DivSection />
        </div>
      </div>
    </>
  );
};

export default Materias;
