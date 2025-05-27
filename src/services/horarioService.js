import api from './api';

export const getHorarios = async () => {
    const response = await api.get('/api/horarios');
    return response.data;
};

export const postHorario = async (horario) => {
    const response = await api.post('/api/horarios', horario);
    return response.data;
}

export const deleteHorario = async (id) => {
    const response = await api.delete(`/api/horario/${id}`);
    return response.data;
}