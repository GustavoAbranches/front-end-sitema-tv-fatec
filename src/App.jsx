import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarraLateral from "./BarraLateral";
import TelaPrincipal from "./TelaPrincipal";
import Login from "./pages/Login";
import Aviso from "./Notice_components/Aviso";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <div className="flex h-screen w-screen">
              <div className="relative flex-1 flex flex-col">
                <TelaPrincipal />
                <Aviso />
              </div>
              <BarraLateral />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
