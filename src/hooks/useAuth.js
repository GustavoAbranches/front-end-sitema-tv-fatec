import { useState, useEffect, useCallback } from "react";
import {
  loginUser,
  registerUser,
  logoutUser,
  isAuthenticated,
  getCurrentUser,
  listUsers,
} from "../services/authService";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Buscar usuarios se for superadmin
  const fetchUsuarios = useCallback(async () => {
    try {
      const data = await listUsers();
      setList(data);
    } catch (err) {
      console.error("Erro ao buscar usuários:", err);
      setError(err.message || "Erro ao buscar usuários");
    }
  }, []);

  // Verifica a autenticação
  useEffect(() => {
    const checkAuth = () => {
      const authenticated = isAuthenticated();
      setIsLoggedIn(authenticated);

      if (authenticated) {
        const userData = getCurrentUser();
        setUser(userData);

        if (userData?.role === "superadmin") {
          fetchUsuarios();
        }
      }
    };

    checkAuth();
  }, [fetchUsuarios]);


  // Função de login
  const login = useCallback(async (email, senha) => {
    setLoading(true);
    setError(null);

    try {
      const data = await loginUser(email, senha);
      setUser(data.user);
      setIsLoggedIn(true);

      //Busca usuarios se for superadmin
      if (data.user?.role === "superadmin") {
        fetchUsuarios();
      }

      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [fetchUsuarios]);

  // Função de registro
  const register = useCallback(async (nome, email, senha, setor, role = "editor") => {
    setLoading(true);
    setError(null);

    try {
      const data = await registerUser(nome, email, senha, setor, role);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Função de logout
  const logout = useCallback(() => {
    logoutUser();
    setUser(null);
    setIsLoggedIn(false);
    setError(null);
    setList([]);
  }, []);

  // Limpar erro
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    user,
    list,
    loading,
    error,
    isLoggedIn,
    login,
    register,
    logout,
    clearError,
  };
}
