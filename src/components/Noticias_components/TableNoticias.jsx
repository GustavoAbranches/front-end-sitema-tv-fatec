import { useCallback } from "react";
import { useState } from "react";

import { useNoticias } from "../../hooks/useNoticias";
import { useTableState } from "../../hooks/useTableState";
import { useNoticiasColumns } from "../../hooks/useNoticiasColumns";
import { LoadingSpinner } from "../Table_components/LoadingSpinner";
import { ErrorMessage } from "../Table_components/ErrorMessage";
import { DataTable } from "../Table_components/DataTable";
import { DeleteButton } from "../Table_components/DeleteButton";

const TableNoticias = () => {
  const { noticias, loading, error, removeNoticia } = useNoticias();

  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);

  const columns = useNoticiasColumns();

  const handleDelete = useCallback(
    async (id) => {
      if (!window.confirm("Tem certeza que deseja excluir?")) return;

      try {
        await removeNoticia(id);
      } catch (err) {
        alert("Erro ao excluir: " + err.message);
      }
    },
    [removeNoticia],
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
      data={noticias}
      columns={columns}
      sorting={sorting}
      setSorting={setSorting}
      columnFilters={columnFilters}
      setColumnFilters={setColumnFilters}
      renderActions={renderActions}
    />
  );
};

export default TableNoticias;
