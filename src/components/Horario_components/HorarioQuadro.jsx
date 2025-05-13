import DivSection from "../DivSection";

const HorarioQuadro = () => {
  return (
    <div className="flex">
      <div className="h-[500px] w-[1057px] mt-8">
        <div className="flex items-center h-16">
          <span className="font-bold mr-16 text-6xl text-gray-500">ADS</span>
          <span className="pl-40 font-bold text-3xl text-gray-500">
            Analise e desenvolvimento de Sistemas
          </span>
        </div>
        <div>
          <div className="flex-row h-full w-24 justify-around">
            <div className="block px-2 py-[22px] w-32 font-semibold text-xl text-gray-500">
              1° Semestre
            </div>
            <div className="block px-2 py-[22px] w-32 font-semibold text-xl text-gray-500">
              2° Semestre
            </div>
            <div className="block px-2 py-[22px] w-32 font-semibold text-xl text-gray-500">
              3° Semestre
            </div>
            <div className="block px-2 py-[22px] w-32 font-semibold text-xl text-gray-500">
              4° Semestre
            </div>
            <div className="block px-2 py-[22px] w-32 font-semibold text-xl text-gray-500">
              5° Semestre
            </div>
            <div className="block px-2 py-[22px] w-32 font-semibold text-xl text-gray-500">
              6° Semestre
            </div>
          </div>
        </div>
      </div>
      <DivSection />
    </div>
  );
};

export default HorarioQuadro;
