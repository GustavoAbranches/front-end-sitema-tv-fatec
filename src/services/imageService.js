import api from "./api";

// const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;

const imageService = async (imageFile) => {
<<<<<<< HEAD
    try {
        const formData = new FormData();
        formData.append("imagem", imageFile); // nome esperado no Flask

        const response = await api.post("/api/upload-imagem", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        // retorna a URL da imagem como salvo no backend
        return response.data.imagem;
    } catch (error) {
        console.error("Erro ao fazer upload da imagem:", error);
        throw new Error("Falha no upload da imagem.");
    }
=======
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
>>>>>>> 2568743ba22588bb5dd6142f6e8b0186b4f13a06
};

export default imageService;