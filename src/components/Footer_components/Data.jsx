const Data = () => {
  const date = new Date();
  const formatDate = date.toLocaleDateString("pt-BR");

  return (
    <div className="flex items-center justify-center flex-1 bg-carmineRed">
      <span className="font-bold text-white text-5xl">{formatDate}</span>
    </div>
  );
};

export default Data;
