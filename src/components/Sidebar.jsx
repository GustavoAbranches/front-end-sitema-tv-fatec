import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className="h-full w-48 flex flex-col justify-between items-center pb-96 pt-32 text-lg font-verdana border-r-2 border-solid">
      <Link to="/materias" className="hover:bg-slate-200 p-2 rounded-md">
        Matérias
      </Link>
      <Link to="/noticias" className="hover:bg-slate-200 p-2 rounded-md">
        Notícias
      </Link>
      <Link
        to="/cadastro-usuario"
        className="hover:bg-slate-200 p-2 rounded-md"
      >
        Cadastro Usuário
      </Link>
    </div>
  );
};

export default Sidebar;
