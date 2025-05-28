import { useHorario } from "../../hooks/useHorarios";

const TableComponent = ({ data, handleSort, sortColumn, sortDirection }) => {
  const { horarios, error, loading } = useHorario();

  return (
    <table className="table-auto w-[900px] border border-gray-400">
      <thead>
        <tr className="bg-gray-200">
          <th
            className="border px-4 py-2 cursor-pointer"
            onClick={() => handleSort("id")}
          >
            ID {sortColumn === "id" && (sortDirection === "asc" ? "🔼" : "🔽")}
          </th>
          <th
            className="border px-4 py-2 cursor-pointer"
            onClick={() => handleSort("materia")}
          >
            Matéria{" "}
            {sortColumn === "materia" &&
              (sortDirection === "asc" ? "🔼" : "🔽")}
          </th>
          <th
            className="border px-4 py-2 cursor-pointer"
            onClick={() => handleSort("curso")}
          >
            Curso{" "}
            {sortColumn === "curso" && (sortDirection === "asc" ? "🔼" : "🔽")}
          </th>
          <th className="border px-4 py-2">Horário</th>
        </tr>
      </thead>
      <tbody>
        {horarios.map((item) => (
          <tr key={item.id} className="hover:bg-gray-100">
            <td className="border px-4 py-2">{item.id}</td>
            <td className="border px-4 py-2">{item.curso}</td>
            <td className="border px-4 py-2">{item.diciplina}</td>
            <td className="border px-4 py-2">
              {item.horario_inicial} - {item.horario_final}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
