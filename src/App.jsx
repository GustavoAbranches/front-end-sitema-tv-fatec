import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarraLateral from "./components/BarraLateral";
import TelaPrincipal from "./pages/TelaPrincipal";
import Login from "./pages/Login";
import Horario from "./pages/Horario";

import Aviso from "./components/Noticias_components/Aviso.jsx";
import Footer from "./components/Footer";
import DivSection from "./components/DivSection.jsx";

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
              <div className="flex">
                <div className="w-screen">
                  <TelaPrincipal />
                  <Aviso />
                </div>
                <DivSection />
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
