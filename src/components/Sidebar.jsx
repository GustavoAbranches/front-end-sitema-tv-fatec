import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className="h-full w-48 pb-96 pt-32 text-lg font-verdana border-r-2 border-solid bg-mediumOrange text-primaryBlue">
      <div className="flex flex-col justify-between h-52 items-center">
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
          to="/cadastro-usuario"
          className="hover:bg-tangerine p-2 rounded-md"
        >
          Cadastro Usuário
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
