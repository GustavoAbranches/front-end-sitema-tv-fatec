import { useState } from "react";

import { useAuth } from "../../hooks/useAuth";
import { useTableState } from "../../hooks/useTableState";
import { useUsuarioColumns } from "../../hooks/useUsuarioColumns";
import { LoadingSpinner } from "../Table_components/LoadingSpinner";
import { ErrorMessage } from "../Table_components/ErrorMessage";
import { DataTable } from "../Table_components/DataTable";

export default function TableComponent() {
  const { list, loading, error } = useAuth();

  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);

  const columns = useUsuarioColumns();

  if (loading) return <LoadingSpinner />;

  if (error) return <ErrorMessage error={error} />;

  return (
    <DataTable
      data={list}
      columns={columns}
      sorting={sorting}
      setSorting={setSorting}
      columnFilters={columnFilters}
      setColumnFilters={setColumnFilters}
    />
  );
}
