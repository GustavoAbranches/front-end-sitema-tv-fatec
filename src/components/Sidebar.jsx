import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <div className="h-full w-48 pb-96 pt-32 text-lg font-verdana border-r-2 border-solid bg-mediumOrange text-primaryBlue">
      <div className="flex flex-col justify-between items-center">
        <Link to="/materias" className="hover:bg-tangerine p-2 rounded-md">
          Matérias
        </Link>
        <Link to="/noticias" className="hover:bg-tangerine p-2 rounded-md">
          Notícias
        </Link>
        <Link to="/avisos" className="hover:bg-tangerine p-2 rounded-md">
          Avisos
        </Link>
        <Link
          to="/usuarios"
          className={`hover:bg-tangerine p-2 rounded-md ${
            user?.role !== "superadmin" ? "pointer-events-none opacity-50" : ""
          }`}
        >
          Cadastro Usuário
        </Link>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
