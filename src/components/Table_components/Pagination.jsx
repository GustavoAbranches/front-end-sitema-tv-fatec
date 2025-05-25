const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="flex gap-4 mt-4">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p) => p - 1)}
        className="border px-2 py-1 disabled:opacity-50"
      >
        Anterior
      </button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((p) => p + 1)}
        className="border px-2 py-1 disabled:opacity-50"
      >
        Próxima
      </button>
    </div>
  );
};

export default Pagination;
