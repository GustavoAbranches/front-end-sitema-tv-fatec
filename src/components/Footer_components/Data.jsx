const Data = () => {
  const date = new Date();
  const formatDate = date.toLocaleDateString("pt-BR");

  return (
    <div className="flex items-center justify-center h-16 w-[489px] bg-carmineRed">
      <span className="font-bold text-white text-4xl">{formatDate}</span>
    </div>
  );
};

export default Data;
