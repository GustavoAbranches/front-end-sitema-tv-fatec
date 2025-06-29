const DivAviso = ({ currentAviso }) => {
  if (!currentAviso) {
    return (
      <div className="bg-mediumOrange text-center text-primaryBlue py-2 px-1">
        Não há avisos para hoje.
      </div>
    );
  }

  return (
    <div className="m-4 2xl:w-[29rem] lg:w-[13rem]">
      <div className="bg-mediumOrange text-center text-primaryBlue py-2 px-1">
        <h2 className="2xl:text-3xl lg:text-lg font-bold">
          {currentAviso.titulo}
        </h2>
        <p className="2xl:text-3xl lg:text-lg font-verdana">
          {currentAviso.descricao}
        </p>
      </div>
    </div>
  );
};

export default DivAviso;
