const CadastroMateria = () => {
  return (
    <div className="flex h-screen bg-[#002f87] text-white">
      <div className="flex flex-row">
        <div className="2xl:w-8 lg:w-4 bg-carmineRed" />
        <div className="2xl:w-8 lg:w-4 bg-tangerine" />
        <div className="2xl:w-8 lg:w-4 bg-mediumOrange" />
      </div>

      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Painel de Matérias</h1>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-4 rounded-full">
            SALVAR
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-1">Adicionar Matéria:</label>
            <input
              className="w-full rounded-full px-4 py-1 text-black"
              type="text"
            />
          </div>

          <div>
            <label className="block mb-1">Sala:</label>
            <input
              className="w-full rounded-full px-4 py-1 text-black"
              type="text"
            />
          </div>

          <div>
            <label className="block mb-1">Curso:</label>
            <input
              className="w-full rounded-full px-4 py-1 text-black"
              type="text"
            />
          </div>

          <div>
            <label className="block mb-1">Semestre:</label>
            <input
              className="w-full rounded-full px-4 py-1 text-black"
              type="text"
            />
          </div>

          <div className="col-span-2">
            <label className="block mb-1">Professor (a):</label>
            <input
              className="w-full rounded-full px-4 py-1 text-black"
              type="text"
            />
          </div>

          <div>
            <label className="block mb-1">Período:</label>
            <input
              className="w-full rounded-full px-4 py-1 text-black"
              type="text"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block mb-1">Horário - De:</label>
              <input
                className="w-full rounded-full px-4 py-1 text-black"
                type="time"
              />
            </div>
            <div>
              <label className="block mb-1">Até:</label>
              <input
                className="w-full rounded-full px-4 py-1 text-black"
                type="time"
              />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroMateria;
