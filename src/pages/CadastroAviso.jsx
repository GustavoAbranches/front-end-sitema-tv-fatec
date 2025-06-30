import { useState, useEffect } from "react";
import { useAvisos } from "../hooks/useAvisos";

import { useParams, useNavigate } from "react-router-dom";
import imageService from "../services/imageService";

import InputCad from "../components/Form_components/InputCad";
import ButtonCad from "../components/Form_components/ButtonCad";
import AlertMessage from "../components/Form_components/AlertMessage";
import FormContainer from "../components/Form_components/FormContainer";
import NavigateButton from "../components/NavigateButton";
import DivSection from "../components/DivSection";
import ImageInput from "../components/Form_components/ImageInput";

const CadastroAviso = () => {
  const [success, setSuccess] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const [avisoData, setAvisoData] = useState({
    titulo: "",
    data: "",
    descricao: "",
    imagem: "",
    publico_destino: "",
  });

  const [imageFile, setImageFile] = useState(null);
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
            data: avisosEditar.data || "",
            imagem: avisosEditar.imagem || "",
            publico_destino: avisosEditar.publico_destino || "",
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
      const imagemUrl = imageFile
        ? await imageService(imageFile)
        : avisoData.imagem;

      if (isEditing) {
        await updateAviso(parseInt(id), { ...avisoData, imagem: imagemUrl });
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          navigate("/avisos");
        }, 2000);
      } else {
        await addAviso({ ...avisoData, imagem: imagemUrl });

        setSuccess(true);
        setAvisoData({
          titulo: "",
          data: "",
          descricao: "",
          imagem: "",
          publico_destino: "",
        });
        setImageFile(null);
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
        <AlertMessage
          type="error"
          message={error ? error.message || JSON.stringify(error) : ""}
        />

        <AlertMessage
          type="success"
          message={success ? "Aviso registrada com sucesso!" : ""}
        />

        <div className="flex flex-row w-full justify-start items-start">
          <InputCad
            label="Título"
            name="titulo"
            value={avisoData.titulo}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-96 mr-10"
          />
          <InputCad
            label="Descrição"
            name="descricao"
            value={avisoData.descricao}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-96"
          />
        </div>

        <div className="flex flex-row w-full justify-start items-start">
          <InputCad
            type="date"
            label="Data"
            name="data"
            value={avisoData.data}
            onChange={handleChange}
            required
            disabled={loading}
            className="mr-10"
          />
          <InputCad
            label="Publico Destino"
            name="publico_destino"
            value={avisoData.publico_destino}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <ImageInput onImageSelect={setImageFile} />

        <div className="flex flex-row w-full justify-end items-end">
          <ButtonCad
            type="submit"
            disabled={loading}
            loading={loading}
            loadingText={isEditing ? "Atualizando..." : "Registrando..."}
            className="mr-10"
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
