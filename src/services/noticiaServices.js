import api from "./api";

export const getNoticias = async () => {
  const response = await api.get("/api/noticias/");
  return response.data;
};

export const postNoticias = async (noticia) => {
  const response = await api.post("/api/noticias/", noticia);
  return response.data;
};

export const putNoticias = async (id, noticiaAtualizada) => {
  const response = await api.put(`/api/noticias/${id}`, noticiaAtualizada);
  return response.data;
};


export const deleteNoticias = async (id) => {
  const response = await api.delete(`/api/noticias/${id}`);
  return response.data;
};
