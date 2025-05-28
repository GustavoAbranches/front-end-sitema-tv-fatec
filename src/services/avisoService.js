import api from "./api";

export const getAvisos = async () => {
  const response = await api.get("/api/avisos");
  return response.data;
};

export const postAvisos = async (aviso) => {
  const response = await api.post("/api/avisos", aviso);
  return response.data;
};

export const deleteHorario = async (id) => {
  const response = await api.delete(`/api/avisos/${id}`);
  return response.data;
};
