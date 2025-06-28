import api from "./api";

export const getImagemDestaque = async () => {
  const response = await api.get("/api/imagemDestaque/");
  return response.data;
};

export const postImagemDestaque = async (imagem) => {
  const response = await api.post("/api/imagemDestaque/", imagem);
  return response.data;
};

export const putImagemDestaque = async (id, imagemAtualizada) => {
  const response = await api.put(`/api/imagemDestaque/${id}`, imagemAtualizada);
  return response.data;
};

export const deleteImagemDestaque = async (id) => {
  const response = await api.delete(`/api/imagemDestaque/${id}`);
  return response.data;
};
