import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CadastroMateria from "./pages/CadastroMateria";
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
import { RequireRole } from "./components/RequireRole";

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

        {/* rotas protegidas por role */}
        <Route
          path="/cadastro-usuario"
          element={
            <RequireRole allowedRoles={["superadmin"]}>
              <CadastroUsuario />
            </RequireRole>
          }
        />

        <Route
          path="/cadastro-materia"
          element={
            <RequireRole allowedRoles={["superadmin", "admin"]}>
              <CadastroMateria />
            </RequireRole>
          }
        />
        <Route
          path="/noticias"
          element={
            <RequireRole allowedRoles={["superadmin", "admin", "editor"]}>
              <Noticias />
            </RequireRole>
          }
        />
        <Route
          path="/cadastro-noticia"
          element={
            <RequireRole allowedRoles={["superadmin", "admin", "editor"]}>
              <CadastroNoticias />
            </RequireRole>
          }
        />
        <Route
          path="/avisos"
          element={
            <RequireRole allowedRoles={["superadmin", "admin", "editor"]}>
              <Avisos />
            </RequireRole>
          }
        />
        <Route
          path="/cadastro-avisos"
          element={
            <RequireRole allowedRoles={["superadmin", "admin", "editor"]}>
              <CadastroAviso />
            </RequireRole>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
