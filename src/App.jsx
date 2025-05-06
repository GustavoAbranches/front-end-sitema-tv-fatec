import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import BarraLateral from "./components/BarraLateral";
import TelaPrincipal from "./pages/TelaPrincipal";
import Login from "./pages/Login";
import Horario from "./pages/Horario.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/horario" element={<Horario />} />
        <Route
          path="*"
          element={
            <div>
              <div className="flex">
                <TelaPrincipal />
                <BarraLateral />
              </div>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
