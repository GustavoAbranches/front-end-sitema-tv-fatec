import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarraLateral from "./components/BarraLateral";
import TelaPrincipal from "./pages/TelaPrincipal";
import Login from "./pages/Login";
import Horario from "./pages/Horario";
import Footer from "./components/Footer"; // Certifique-se de importar o Footer

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/horario" element={<Horario />} />
        <Route
          path="*"
          element={
            <div className="flex h-screen flex-col">
              <div className="flex flex-1">
                <TelaPrincipal />
                <BarraLateral />
              </div>
              <Footer /> {/* Adicionando o Footer aqui */}
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
