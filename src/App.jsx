import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CadastroMateria from "./pages/CadastroMateria";
import CadastroCurso from "./pages/CadastroCurso";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Horario from "./pages/Horario";
import Tela from "./pages/Tela";
import Vinheta from "./pages/Vinheta";
import Materias from "./pages/Materias";
import CadastroUsuario from "./pages/CadastroUsuario";
import Noticias from "./pages/Noticias";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tela />} />
        <Route path="/vinheta" element={<Vinheta />} />
        <Route path="/horario" element={<Horario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/materias" element={<Materias />} />
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/cadastro-materia" element={<CadastroMateria />} />
        <Route path="/cadastro-curso" element={<CadastroCurso />} />
      </Routes>
    </Router>
  );
}

export default App;
