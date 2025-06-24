import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export function RequireRole({ allowedRoles, children }) {
  const { user, isLoggedIn, authLoaded } = useAuth();

  // Aguarda o carregamento da autenticação
  if (!authLoaded) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Carregando...
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/acesso-negado" replace />;
  }

  return children;
}
