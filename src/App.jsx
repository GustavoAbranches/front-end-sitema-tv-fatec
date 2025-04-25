import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import BarraLateral from "./BarraLateral";
import TelaPrincipal from "./TelaPrincipal";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <div className="flex h-screen">
              <TelaPrincipal />
              <BarraLateral />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
