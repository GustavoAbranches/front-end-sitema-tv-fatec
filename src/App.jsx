import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarraLateral from "./BarraLateral";
import TelaPrincipal from "./TelaPrincipal";
import Login from "./pages/Login";
<<<<<<< HEAD
import Aviso from "./Notice_components/Aviso";
=======
import Horario from "./pages/Horario.jsx";
>>>>>>> 2000a26c2495007f9cfec0e5a72406e8f05a3bce

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/horario" element={<Horario />} />
        <Route
          path="*"
          element={
<<<<<<< HEAD
            <div className="flex h-screen w-screen">
              <div className="relative flex-1 flex flex-col">
                <TelaPrincipal />
                <Aviso />
              </div>
              <BarraLateral />
=======
            <div>
              <div className="flex">
                <TelaPrincipal />
                <BarraLateral />
              </div>
              <Footer />
>>>>>>> 2000a26c2495007f9cfec0e5a72406e8f05a3bce
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
