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
import CadastroNoticias from "./pages/CadastroNoticias";
import Avisos from "./pages/Avisos";
import CadastroAviso from "./components/BarraLateral_components/CadastroAviso";

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
        <Route path="/cadastro-noticia" element={<CadastroNoticias />} />
        <Route path="/avisos" element={<Avisos />} />
        <Route path="/cadastro-avisos" element={<CadastroAviso />} />
      </Routes>
    </Router>
  );
}

export default App;
