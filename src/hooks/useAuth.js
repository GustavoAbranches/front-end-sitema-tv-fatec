import { useState, useEffect, useCallback } from "react";
import {
  loginUser,
  registerUser,
  logoutUser,
  isAuthenticated,
  getCurrentUser,
} from "../services/authService";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Verificar autenticação ao inicializar
  useEffect(() => {
    const checkAuth = () => {
      const authenticated = isAuthenticated();
      setIsLoggedIn(authenticated);

      if (authenticated) {
        const userData = getCurrentUser();
        setUser(userData);
      }
    };

    checkAuth();
  }, []);

  // Função de login
  const login = useCallback(async (email, senha) => {
    setLoading(true);
    setError(null);

    try {
      const data = await loginUser(email, senha);
      setUser(data.user);
      setIsLoggedIn(true);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Função de registro
  const register = useCallback(
    async (nome, email, senha, role = "editor") => {
      setLoading(true);
      setError(null);

      try {
        const data = await registerUser(nome, email, senha, role);
        return data;
      } catch (err) {
        setError(err.message);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  // Função de logout
  const logout = useCallback(() => {
    logoutUser();
    setUser(null);
    setIsLoggedIn(false);
    setError(null);
  }, []);

  // Limpar erro
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    user,
    loading,
    error,
    isLoggedIn,
    login,
    register,
    logout,
    clearError,
  };
}
