const Data = () => {
  const date = new Date();
  const formatDate = date.toLocaleDateString("pt-BR");

  return (
    <div className="flex items-center justify-center h-full w-1/3 bg-orange-600">
      <span className="font-bold text-white text-4xl">{formatDate}</span>
    </div>
  );
};

export default Data;
