import { useState } from "react";
import { useNoticias } from "../hooks/useNoticias";

import InputCad from "../components/Form_components/InputCad";
import ButtonCad from "../components/Form_components/ButtonCad";
import AlertMessage from "../components/Form_components/AlertMessage";
import FormContainer from "../components/Form_components/FormContainer";
import NavigateButton from "../components/NavigateButton";
import DivSection from "../components/DivSection";

const CadastroNoticias = () => {
  const [success, setSuccess] = useState();
  const [noticiaData, setNoticiaData] = useState({
    titulo: "",
    descricao: "",
    data_publicacao: "",
    data_expiracao: "",
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
        data_publicacao: "",
        data_expiracao: "",
      });
      alert("Notícia registrada com sucesso");
    } catch (err) {
      alert("Erro no registro");
    }
  };

  return (
    <div className="flex">
      <DivSection />
      <FormContainer title="Cadastro Notícias" onSubmit={handleSubmit}>
        <AlertMessage type="error" message={error} />

        <AlertMessage
          type="success"
          message={success ? "Notícia registrada com sucesso!" : ""}
        />

        <InputCad
          label="Título"
          name="titulo"
          value={noticiaData.titulo}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <InputCad
          label="Descrição"
          name="descricao"
          value={noticiaData.descricao}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <InputCad
          type="date"
          label="Data Publicação"
          name="data_publicacao"
          value={noticiaData.data_publicacao}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <InputCad
          type="date"
          label="Data Expiração"
          name="data_expiracao"
          value={noticiaData.data_expiracao}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <div className="flex flex-row w-full">
          <ButtonCad
            type="submit"
            disabled={loading}
            loading={loading}
            loadingText="Registrando..."
          >
            Registrar
          </ButtonCad>
          <NavigateButton rota="/noticias" text="Voltar" />
        </div>
      </FormContainer>
    </div>
  );
};

export default CadastroNoticias;
