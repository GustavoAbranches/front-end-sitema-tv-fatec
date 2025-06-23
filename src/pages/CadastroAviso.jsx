import { useState, useEffect } from "react";
import { useAvisos } from "../hooks/useAvisos";

import { useParams, useNavigate } from "react-router-dom";

import InputCad from "../components/Form_components/InputCad";
import ButtonCad from "../components/Form_components/ButtonCad";
import AlertMessage from "../components/Form_components/AlertMessage";
import FormContainer from "../components/Form_components/FormContainer";
import NavigateButton from "../components/NavigateButton";
import DivSection from "../components/DivSection";

const CadastroAviso = () => {
  const [success, setSuccess] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [avisoData, setAvisoData] = useState({
    titulo: "",
    data: "",
    descricao: "",
    publico_destino: "",
  });
  const { addAviso, updateAviso, avisos, loading, error } = useAvisos();

  useEffect(() => {
    if (id) {
      setIsEditing(true);
      if (avisos.length > 0) {
        const avisosEditar = avisos.find((aviso) => aviso.id === parseInt(id));
        if (avisosEditar) {
          setAvisoData({
            titulo: avisosEditar.titulo || "",
            descricao: avisosEditar.descricao || "",
            data_publicacao: avisosEditar.data || "",
            data_expiracao: avisosEditar.publico_destino || "",
          });
        } else {
          console.error("Aviso não encontrada para o ID:", id);
        }
      }
    } else {
      setIsEditing(false);
    }
  }, [id, avisos]);

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
      if (isEditing) {
        await updateAviso(parseInt(id), avisoData);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          navigate("/avisos");
        }, 2000);
      } else {
        await addAviso(noticiaData);

        setSuccess(true);
        setNoticiaData({
          titulo: "",
          data: "",
          descricao: "",
          publico_destino: "",
        });
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      setSuccess(false);
    }
  };

  return (
    <div className="flex">
      <DivSection />
      <FormContainer title="Cadastro Aviso" onSubmit={handleSubmit}>
        <AlertMessage type="error" message={error ? error : ""} />

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
            loadingText={isEditing ? "Atualizando..." : "Registrando..."}
          >
            {isEditing ? "Atualizar" : "Registrar"}
          </ButtonCad>
          <NavigateButton rota="/avisos" text="Voltar" />
        </div>
      </FormContainer>
    </div>
  );
};

export default CadastroAviso;
