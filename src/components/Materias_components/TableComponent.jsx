import { useCallback } from "react";
import { useState } from "react";

import { useHorario } from "../../hooks/useHorarios";
import { useTableState } from "../../hooks/useTableState";
import { useHorarioColumns } from "../../hooks/useHorarioColumns";
import { LoadingSpinner } from "../Table_components/LoadingSpinner";
import { ErrorMessage } from "../Table_components/ErrorMessage";
import { DataTable } from "../Table_components/DataTable";
import { DeleteButton } from "../Table_components/DeleteButton";

export default function TableComponent() {
  const { horarios, loading, error, removeHorario } = useHorario();

  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);

  const columns = useHorarioColumns();

  const handleDelete = useCallback(
    async (id) => {
      if (!window.confirm("Tem certeza que deseja excluir?")) return;

      try {
        await removeHorario(id);
      } catch (err) {
        alert("Erro ao excluir: " + err.message);
      }
    },
    [removeHorario],
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
      data={horarios}
      columns={columns}
      sorting={sorting}
      setSorting={setSorting}
      columnFilters={columnFilters}
      setColumnFilters={setColumnFilters}
      renderActions={renderActions}
    />
  );
}
