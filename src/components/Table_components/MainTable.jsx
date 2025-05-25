import { useState } from "react";
import SearchInput from "./SearchInput";
import TableComponent from "./TableComponent";
import Pagination from "./Pagination";

import data from "../../util/materialData";

const MainTable = () => {
  const [search, setSearch] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 7;

  // 🔍 Filtragem
  const filteredData = data.filter(
    (item) =>
      item.materia.toLowerCase().includes(search.toLowerCase()) ||
      item.curso.toLowerCase().includes(search.toLowerCase()),
  );

  // ⬆️ Ordenação
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;

    const valueA = a[sortColumn].toString().toLowerCase();
    const valueB = b[sortColumn].toString().toLowerCase();

    if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
    if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  // 📄 Paginação
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // 🔄 Alterna ordenação
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Matérias</h1>

      <SearchInput search={search} setSearch={setSearch} />

      <TableComponent
        data={paginatedData}
        handleSort={handleSort}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default MainTable;
