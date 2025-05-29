import { useState } from "react";
import { useNoticias } from "../../hooks/useNoticias";

const CadastroNoticias = () => {
  const [success, setSuccess] = useState();
  const [noticiaData, setNoticiaData] = useState({
    titulo: "",
    descricao: "",
  });
  const { addNoticia, noticias, loading, error } = useNoticias();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoticiaData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addNoticia(noticiaData);

      setSuccess(true);
      setNoticiaData({
        titulo: "",
        descricao: "",
      });
      alert("Notícia registrada com sucesso");
    } catch (err) {
      alert("Erro no registro");
    }
  };

  return (
    <div className="flex flex-col items-center w-full bg-primaryBlue text-white">
      <div className="w-full p-6">
        <h2 className="font-verdana text-2xl font-bold mb-5">
          Cadastro Notícia
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
            value={noticiaData.titulo}
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
            value={noticiaData.descricao}
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
  );
};

export default CadastroNoticias;
