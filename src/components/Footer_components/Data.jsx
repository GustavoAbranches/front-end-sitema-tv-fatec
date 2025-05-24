const Data = () => {
  const date = new Date();
  const formatDate = date.toLocaleDateString("pt-BR");

  return (
    <div className="flex items-center justify-center flex-1 bg-carmineRed">
      <span className="font-bold text-white 2xl:text-5xl lg:text-3xl">
        {formatDate}
      </span>
    </div>
  );
};

export default Data;
