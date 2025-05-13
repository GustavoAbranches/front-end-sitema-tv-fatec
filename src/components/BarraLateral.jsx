export default function BarraLateral() {
  return (
    <div className="relative h-full flex">
      <div
        className="relative w-[30vw] h-[570px] flex flex-col justify-between text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/fatec-arcos.jpg')" }}
      >
        <div className="absolute inset-0 bg-primaryBlue bg-opacity-90" />

        <div className="relative z-10 p-4">
          <div className="bg-gradient-to-br from-red-500 to-amber-400 p-[6px]">
            <div className="bg-white w-full h-48" />
          </div>
        </div>

        <div className="relative z-10 p-4">
          <div className="bg-amber-400 text-center text-[#00224D] py-2 px-1 mb-4 ">
            <p className="text-sm font-bold">03.02</p>
            <p className="text-sm font-bold">Aniversário</p>
            <p className="text-sm font-bold">FATEC Carapicuíba</p>
            <p className="text-sm font-bold">Parabéns!</p>
          </div>
        </div>

        <div className="relative z-10 flex justify-center object-cover mb-8">
          <img src="../src/assets/Fateclogo.png" alt="Fatec Carapicuíba" />
        </div>
      </div>
    </div>
  );
}
