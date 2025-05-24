const Sidediv = () => {
  return (
    <div
      className=" bg-cover"
      style={{ backgroundImage: "url('/src/assets/Fatec.jpg')" }}
    >
      <div className="flex justify-center items-center bg-primaryBlue bg-opacity-90 2xl:w-48 lg:w-24 h-full">
        <p className="2xl:text-7xl lg:text-4xl font-bold -rotate-90 text-white w-[70rem] whitespace-nowrap">
          Horário Acadêmico
        </p>
      </div>
    </div>
  );
};

export default Sidediv;
