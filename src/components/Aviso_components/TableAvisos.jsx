import { useCallback } from "react";
import { useState } from "react";

import { useAvisos } from "../../hooks/useAvisos";
import { useTableState } from "../../hooks/useTableState";
import { useNoticiasColumns } from "../../hooks/useNoticiasColumns";
import { LoadingSpinner } from "../Table_components/LoadingSpinner";
import { ErrorMessage } from "../Table_components/ErrorMessage";
import { DataTable } from "../Table_components/DataTable";
import { DeleteButton } from "../Table_components/DeleteButton";

const TableAvisos = () => {
  const { avisos, loading, error, removeAvisos } = useAvisos();

  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);

  const columns = useNoticiasColumns();

  const handleDelete = useCallback(
    async (id) => {
      if (!window.confirm("Tem certeza que deseja excluir?")) return;

      try {
        await removeAvisos(id);
      } catch (err) {
        alert("Erro ao excluir: " + err.message);
      }
    },
    [removeAvisos],
  );

  const renderActions = useCallback(
    (row) => (
      <DeleteButton
        onDelete={() => handleDelete(row.id)}
        confirmMessage="Tem certeza que deseja excluir este horário?"
      />
    ),
    [handleDelete],
  );

  if (loading) return <LoadingSpinner />;

  if (error) return <ErrorMessage error={error} />;

  return (
    <DataTable
      data={avisos}
      columns={columns}
      sorting={sorting}
      setSorting={setSorting}
      columnFilters={columnFilters}
      setColumnFilters={setColumnFilters}
      renderActions={renderActions}
    />
  );
};

export default TableAvisos;
