import {
  Box,
  Table,
  TableContainer,
  Paper,
  TableFooter,
  TableRow,
  TableCell,
} from "@mui/material";
import {
  useEffect,
  useState,
  useRef,
  memo,
  useMemo,
} from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { FilterInputs } from "./FilterInputs";
import { TableHeader } from "./TableHeader";
import { CustomTableBody } from "./TableBody";

export const DataTable = memo(
  ({
    data,
    columns,
    sorting,
    setSorting,
    columnFilters,
    setColumnFilters,
    renderActions,
    showFilters = true,
  }) => {
    const [visibleData, setVisibleData] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(30);
    const observerRef = useRef(null);

    // Atualiza os dados visíveis sempre que os dados ou o limite mudam
    useEffect(() => {
      setVisibleData(data.slice(0, itemsToShow));
    }, [data, itemsToShow]);

    // Setup IntersectionObserver para detectar fim da lista e carregar mais dados
    useEffect(() => {
      if (observerRef.current) observerRef.current.disconnect();

      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setItemsToShow(prev => Math.min(prev + 30, data.length));
        }
      });

      const sentinel = document.getElementById("lazy-sentinel");
      if (sentinel) observer.observe(sentinel);

      observerRef.current = observer;

      return () => observer.disconnect();
    }, [data.length]);

    const memoizedData = useMemo(() => visibleData, [visibleData]);
    const memoizedColumns = useMemo(() => columns, [columns]);

    const tableConfig = useMemo(
      () => ({
        data: memoizedData,
        columns: memoizedColumns,
        state: { sorting, columnFilters },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        // PAGINAÇÃO REMOVIDA PARA SCROLL INFINITO
        enableRowSelection: false,
        enableColumnResizing: false,
        enableColumnReordering: false,
        debugTable: false,
      }),
      [
        memoizedData,
        memoizedColumns,
        sorting,
        columnFilters,
        setSorting,
        setColumnFilters,
      ]
    );

    const table = useReactTable(tableConfig);

    const containerStyle = useMemo(
      () => ({
        borderRadius: 2,
        boxShadow: 3,
        contain: "layout style paint",
      }),
      []
    );

    const boxStyle = useMemo(() => ({ padding: 2 }), []);

    return (
      <Box sx={boxStyle}>
        {showFilters && <FilterInputs table={table} />}
        <TableContainer component={Paper} sx={containerStyle}>
          <Table stickyHeader>
            <TableHeader table={table} showActions={!!renderActions} />
            <CustomTableBody table={table} renderActions={renderActions} />
            <TableFooter>
              <TableRow>
                <TableCell
                  colSpan={columns.length + (renderActions ? 1 : 0)}
                  style={{ padding: 0 }}
                >
                  {/* Sentinel para detectar scroll no final */}
                  <div id="lazy-sentinel" style={{ height: 1 }} />
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        {/* PAGINAÇÃO REMOVIDA */}
      </Box>
    );
  }
);

DataTable.displayName = "DataTable";
