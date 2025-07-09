import { useState, useEffect } from "react";
import { useNoticias } from "../hooks/useNoticias";

import { useParams, useNavigate } from "react-router-dom";
import imageService from "../services/imageService";

import InputCad from "../components/Form_components/InputCad";
import ButtonCad from "../components/Form_components/ButtonCad";
import AlertMessage from "../components/Form_components/AlertMessage";
import FormContainer from "../components/Form_components/FormContainer";
import NavigateButton from "../components/NavigateButton";
import DivSection from "../components/DivSection";
import ImageInput from "../components/Form_components/ImageInput";

const CadastroNoticias = () => {
  const [success, setSuccess] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const [noticiaData, setNoticiaData] = useState({
    titulo: "",
    descricao: "",
    imagem: "", // campo para URL da imagem
    urlqr: "", // link para o qrcode
    data_publicacao: "",
    data_expiracao: "",
  });

  const [imageFile, setImageFile] = useState(null); // controle do arquivo

  const { addNoticia, updateNoticia, noticias, loading, error } = useNoticias();

  useEffect(() => {
    if (id) {
      setIsEditing(true);
      if (noticias.length > 0) {
        const noticiasEditar = noticias.find(
          (noticia) => noticia.id === parseInt(id),
        );
        if (noticiasEditar) {
          setNoticiaData({
            titulo: noticiasEditar.titulo || "",
            descricao: noticiasEditar.descricao || "",
            imagem: noticiasEditar.imagem || "",
            urlqr: noticiasEditar.urlqr || "",
            data_publicacao: noticiasEditar.data_publicacao || "",
            data_expiracao: noticiasEditar.data_expiracao || "",
          });
        } else {
          console.error("Notícia não encontrada para o ID:", id);
        }
      }
    } else {
      setIsEditing(false);
    }
  }, [id, noticias]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoticiaData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Novo handler para o input file
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imagemUrl = imageFile
        ? await imageService(imageFile)
        : noticiaData.imagem;

      if (isEditing) {
        await updateNoticia(parseInt(id), {
          ...noticiaData,
          imagem: imagemUrl,
        });
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          navigate("/noticias");
        }, 2000);
      } else {
        await addNoticia({ ...noticiaData, imagem: imagemUrl });

        setSuccess(true);
        setNoticiaData({
          titulo: "",
          descricao: "",
          data_publicacao: "",
          data_expiracao: "",
          imagem: "",
          urlqr: "",
        });
        setImageFile(null);
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      setSuccess(false);
      console.error(err);
    }
  };

  return (
    <div className="flex">
      <DivSection />
      <FormContainer
        title={isEditing ? "Editar Notícia" : "Cadastro Notícia"}
        onSubmit={handleSubmit}
      >
        <AlertMessage type="error" message={error ? error : ""} />

        <AlertMessage
          type="success"
          message={success ? "Notícia registrada com sucesso!" : ""}
        />

        <div className="flex flex-row w-full justify-start items-start">
          <InputCad
            label="Título"
            name="titulo"
            value={noticiaData.titulo}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-96 mr-10"
          />
          <InputCad
            label="Descrição"
            name="descricao"
            value={noticiaData.descricao}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-96"
          />
        </div>

        <div className="flex flex-row">
          <InputCad
            label="Qr Code"
            name="urlqr"
            value={noticiaData.urlqr}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-96 mr-10"
          />
          <InputCad
            type="date"
            label="Data Publicação"
            name="data_publicacao"
            value={noticiaData.data_publicacao}
            onChange={handleChange}
            required
            disabled={loading}
            className="mr-10"
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
        </div>

        {/*input para imagens */}
        <ImageInput onImageSelect={setImageFile} disabled={loading} />

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
          <NavigateButton rota="/noticias" text="Voltar" />
        </div>
      </FormContainer>
    </div>
  );
};

export default CadastroNoticias;
