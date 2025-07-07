import api from "./api";

// const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;

const imageService = async (imageFile) => {
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
};

export default imageService;