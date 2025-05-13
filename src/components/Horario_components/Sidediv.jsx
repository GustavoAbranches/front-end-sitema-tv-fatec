const Sidediv = () => {
  return (
    <div
      className=" bg-cover w-[130px] h-[540px] mr-8"
      style={{ backgroundImage: "url('/src/assets/Fatec.jpg')" }}
    >

      <div className="flex justify-center items-center bg-primaryBlue bg-opacity-90 w-[130px] h-[515px] mt-[32px]">
      <p className="pl-[50px] text-4xl font-bold -rotate-90 text-white w-96 whitespace-nowrap">
        Horário Acadêmico
      </p>
      </div>
    </div>
  );
};

export default Sidediv;
