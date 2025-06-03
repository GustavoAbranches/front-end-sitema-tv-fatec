import { TableHead, TableRow, TableCell, TableSortLabel } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { flexRender } from "@tanstack/react-table";
import { memo, useMemo, useCallback } from "react";

// Componente de célula do header memoizado
const HeaderCell = memo(({ header, onSort }) => {
  const isSorted = header.column.getIsSorted();

  // Memoiza o estilo da célula
  const cellStyle = useMemo(
    () => ({
      fontWeight: "bold",
      backgroundColor: "#f5f5f5",
      // Otimização CSS
      willChange: "auto",
    }),
    [],
  );

  // Memoiza o ícone baseado na ordenação
  const IconComponent = useMemo(() => {
    if (isSorted === "asc") return ArrowUpward;
    if (isSorted === "desc") return ArrowDownward;
    return undefined;
  }, [isSorted]);

  // Memoiza o handler de clique
  const handleSort = useCallback(() => {
    const sortHandler = header.column.getToggleSortingHandler();
    if (sortHandler) sortHandler();
  }, [header.column]);

  // Memoiza o conteúdo renderizado
  const renderedHeader = useMemo(
    () => flexRender(header.column.columnDef.header, header.getContext()),
    [header],
  );

  return (
    <TableCell key={header.id} sortDirection={isSorted || false} sx={cellStyle}>
      <TableSortLabel
        active={!!isSorted}
        direction={isSorted || "asc"}
        onClick={handleSort}
        IconComponent={IconComponent}
      >
        {renderedHeader}
      </TableSortLabel>
    </TableCell>
  );
});

HeaderCell.displayName = "HeaderCell";

// Componente principal memoizado
export const TableHeader = memo(({ table, showActions = false }) => {
  // Memoiza o estilo da célula de ações
  const actionsCellStyle = useMemo(
    () => ({
      fontWeight: "bold",
      backgroundColor: "#f5f5f5",
    }),
    [],
  );

  // Memoiza os grupos de header
  const headerGroups = useMemo(() => table.getHeaderGroups(), [table]);

  return (
    <TableHead>
      {headerGroups.map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <HeaderCell key={header.id} header={header} />
          ))}
          {showActions && <TableCell sx={actionsCellStyle}>Ações</TableCell>}
        </TableRow>
      ))}
    </TableHead>
  );
});

TableHeader.displayName = "TableHeader";
