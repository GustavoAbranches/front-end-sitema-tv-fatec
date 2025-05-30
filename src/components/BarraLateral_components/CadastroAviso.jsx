import { useState } from "react";
import { useAvisos } from "../../hooks/useAvisos";

const CadastroAviso = () => {
    const [success, setSuccess] = useState();
    const [avisoData, setAvisoData] = useState({
        titulo: '',
        data: '',
        descricao: '',
        publico_destino: ''
    });
    const {addAvisos, avisos, loading, error} = useAvisos();

    const handleChange = (e) => {
    const { name, value } = e.target;
    setAvisoData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addAvisos(avisoData);

      setSuccess(true);
      setAvisoData({
        titulo: "",
        descricao: "",
      });
      alert("Notícia registrada com sucesso");
    } catch (err) {
      alert("Erro no registro");
    }
  };

    return(

         <div className="flex flex-col items-center w-full bg-primaryBlue text-white">
      <div className="w-full p-6">
        <h2 className="font-verdana text-2xl font-bold mb-5">
          Cadastro Aviso
        </h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-around items-start h-[250px] w-[350px]"
      >
        <div className="flex w-full flex-col text-white font-verdana">
          <label htmlFor="titulo">Titulo:</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={avisoData.titulo}
            onChange={handleChange}
            required
            disabled={loading}
            className="text-black font-verdana w-full rounded-full px-4 py-1"
          />
        </div>

        <div className="flex w-full flex-col text-white font-verdana">
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            type="text"
            id="descricao"
            name="descricao"
            value={avisoData.descricao}
            onChange={handleChange}
            required
            disabled={loading}
            className="text-black font-verdana w-full rounded-md px-4 py-1"
          />
        </div>
        <div className="flex w-full flex-col text-white font-verdana">
          <label htmlFor="data">Data:</label>
          <input
            type="date"
            id="data"
            name="data"
            value={avisoData.data}
            onChange={handleChange}
            required
            disabled={loading}
            className="text-black font-verdana w-full rounded-md px-4 py-1"
          />
        </div>

        <div className="flex w-full flex-col text-white font-verdana">
          <label htmlFor="publico_destino">Publico Destino:</label>
          <input
            type="text"
            id="publico_destino"
            name="publico_destino"
            value={avisoData.publico_destino}
            onChange={handleChange}
            required
            disabled={loading}
            className="text-black font-verdana w-full rounded-md px-4 py-1"
          />
        </div>

        <div className="flex justify-center w-full ">
          <button
            type="submit"
            disabled={loading}
            className="bg-mediumOrange w-24 h-8 font-semibold rounded-md"
          >
            {loading ? "Registrando..." : "Registrar"}
          </button>
        </div>
      </form>
    </div>
    )
};

export default CadastroAviso;