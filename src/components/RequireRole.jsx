import { useAuth } from "../hooks/useAuth";

export function RequireRole({ allowedRoles, children }) {
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <div className="flex justify-center items-center w-screen h-screen text-white font-bold">
        Você precisa estar logado para acessar essa área.
      </div>
    );
  }

  if (!user || !allowedRoles.includes(user.role)) {
    return <div>Você não tem permissão para acessar essa área.</div>;
  }

  return children;
}
