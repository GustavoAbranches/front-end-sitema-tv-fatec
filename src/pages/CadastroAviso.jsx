import { useState } from "react";
import { useAvisos } from "../hooks/useAvisos";

import InputCad from "../components/Form_components/InputCad";
import ButtonCad from "../components/Form_components/ButtonCad";
import AlertMessage from "../components/Form_components/AlertMessage";
import FormContainer from "../components/Form_components/FormContainer";
import NavigateButton from "../components/NavigateButton";
import DivSection from "../components/DivSection";

const CadastroAviso = () => {
  const [success, setSuccess] = useState();
  const [avisoData, setAvisoData] = useState({
    titulo: "",
    data: "",
    descricao: "",
    publico_destino: "",
  });
  const { addAviso, avisos, loading, error } = useAvisos();

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
      await addAviso(avisoData);

      setSuccess(true);
      setAvisoData({
        titulo: "",
        descricao: "",
        data: "",
        publico_destino: "",
      });
      alert("Aviso registrada com sucesso");
    } catch (err) {
      alert("Erro no registro");
    }
  };

  return (
    <div className="flex">
      <DivSection />
      <FormContainer title="Cadastro Avisos" onSubmit={handleSubmit}>
        <AlertMessage type="error" message={error} />

        <AlertMessage
          type="success"
          message={success ? "Aviso registrada com sucesso!" : ""}
        />

        <InputCad
          label="Título"
          name="titulo"
          value={avisoData.titulo}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <InputCad
          label="Descrição"
          name="descricao"
          value={avisoData.descricao}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <InputCad
          type="date"
          label="Data"
          name="data"
          value={avisoData.data}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <InputCad
          label="Publico Destino"
          name="publico_destino"
          value={avisoData.publico_destino}
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
          <NavigateButton rota="/avisos" text="Voltar" />
        </div>
      </FormContainer>
    </div>
  );
};

export default CadastroAviso;
