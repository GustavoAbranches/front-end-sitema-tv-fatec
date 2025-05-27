import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PainelMaterias from "./pages/PainelMaterias";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Horario from "./pages/Horario";
import Tela from "./pages/Tela";
import Vinheta from "./pages/Vinheta";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tela />} />
        <Route path="/vinheta" element={<Vinheta />} />
        <Route path="/horario" element={<Horario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/painel-materias" element={<PainelMaterias />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
