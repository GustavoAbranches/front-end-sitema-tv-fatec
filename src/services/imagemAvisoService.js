import api from "./api";

export const getImagemAviso = async () => {
  const response = await api.get("/api/imagemAviso/");
  return response.data;
};

export const postImagemAviso = async (imagem) => {
  const response = await api.post("/api/imagemAviso/", imagem);
  return response.data;
};

export const putImagemAviso = async (id, imagemAtualizada) => {
  const response = await api.put(`/api/imagemAviso/${id}`, imagemAtualizada);
  return response.data;
};

export const deleteImagemAviso = async (id) => {
  const response = await api.delete(`/api/imagemAviso/${id}`);
  return response.data;
};
