const SearchInput = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Pesquisar matéria ou curso"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border px-2 py-1 mb-4"
    />
  );
};

export default SearchInput;
