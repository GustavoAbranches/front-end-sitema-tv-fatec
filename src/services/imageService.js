import apiImage from "./apiImage";

const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;

const imageService = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", UPLOAD_PRESET);

    const response = await apiImage.post("", formData);
    return response.data.secure_url; // url da imagem
  } catch (error) {
    console.error("Erro ao fazer upload:", error);
    throw new Error("Falha no upload da imagem.");
  }
};

export default imageService;
