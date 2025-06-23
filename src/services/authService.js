import api from "./api";

// Função para fazer login
export const loginUser = async (email, senha) => {
  try {
    const response = await api.post("/auth/login", { email, senha });

    const data = response.data;

    // Salvar token no localStorage
    if (data.access_token) {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));
    }

    return data;
  } catch (error) {
    console.error("Erro no login:", error);
    throw new Error(error.response?.data?.message || "Erro na requisição");

  }
};

// Função para registrar usuário
export const registerUser = async (nome, email, senha, setor, role = "editor") => {
  try {
    const response = await api.post("/auth/register", {
      nome,
      email,
      senha,
      setor,
      role,
    });

    const data = response.data;

    return data;
  } catch (error) {
    console.error("Erro no registro:", error);
    throw new Error(error.response?.data?.message || "Erro na requisição");
  }
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user");
};

// Verificar se está autenticado
export const isAuthenticated = () => {
  const token = localStorage.getItem("access_token");
  return !!token;
};

// Obter dados do usuário
export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Obter token
export const getToken = () => {
  return localStorage.getItem("access_token");
};

//busca todos os usuarios cadastrados
export const listUsers = async () => {
  const response = await api.get("/auth/usuarios");
  return response.data;
}
