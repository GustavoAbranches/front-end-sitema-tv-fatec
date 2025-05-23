import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Horario from "./pages/Horario";
import Tela from "./pages/Tela";
import Vinheta from "./pages/Vinheta";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/vinheta" element={<Vinheta />} />
        <Route path="/horario" element={<Horario />} />
        <Route path="/" element={<Tela />} />
      </Routes>
    </Router>
  );
}

export default App;
