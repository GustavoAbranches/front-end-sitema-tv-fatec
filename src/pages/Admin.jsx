import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#002f87] h-screen flex items-center justify-center text-white">
      <div className="bg-[#001c57] p-10 rounded-2xl shadow-lg w-full max-w-sm text-center">
        <h1 className="text-3xl font-bold mb-8">Painel do Administrador</h1>

        <div className="space-y-4">
          <button
            onClick={() => navigate("/materias")}
            className="w-full bg-white text-blue-900 p-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Painel de Matérias
          </button>

          <button
            onClick={() => navigate("/cadastro")}
            className="w-full bg-white text-blue-900 p-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Cadastros de Usuário
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
