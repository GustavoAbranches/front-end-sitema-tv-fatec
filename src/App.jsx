import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import da telas
import Login from "./pages/Login";
import Horario from "./pages/Horario";
import Tela from "./pages/Tela";
import Vinheta from "./pages/Vinheta";
import Materias from "./pages/Materias";
import Cadastro from "./pages/Cadastro";
import Noticias from "./pages/Noticias";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tela />} />
        <Route path="/" element={<Login />} />
        <Route path="/vinheta" element={<Vinheta />} />
        <Route path="/horario" element={<Horario />} />
        <Route path="/materias" element={<Materias />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/noticias" element={<Noticias />} />
      </Routes>
    </Router>
  );
}

export default App;
