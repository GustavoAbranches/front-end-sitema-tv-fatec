import { useCallback, useState } from "react";

import { useNavigate } from "react-router";

import { useHorario } from "../../hooks/useHorarios";
import { useTableState } from "../../hooks/useTableState";
import { useHorarioColumns } from "../../hooks/useHorarioColumns";
import { LoadingSpinner } from "../Table_components/LoadingSpinner";
import { ErrorMessage } from "../Table_components/ErrorMessage";
import { DataTable } from "../Table_components/DataTable";
import { DeleteButton } from "../Table_components/DeleteButton";
import { EditButton } from "../EditButton";

export default function TableComponent() {
  const { horarios, loading, error, removeHorario } = useHorario();

  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);

  const navigate = useNavigate();
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

  const handleEdit = useCallback(
    (id) => {
      navigate(`/cadastro-materia/${id}`);
    },
    [navigate],
  );

  const renderActions = useCallback(
    (row) => (
      <div className="flex space-x-2">
        <EditButton onEdit={() => handleEdit(row.id)} title="Editar horário" />
        <DeleteButton
          onDelete={() => handleDelete(row.id)}
          confirmMessage="Tem certeza que deseja excluir este horário?"
        />
      </div>
    ),
    [handleDelete, handleEdit],
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
