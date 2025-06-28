import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CadastroMateria from "./pages/CadastroMateria";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Horario from "./pages/Horario";
import Tela from "./pages/Tela";
import Vinheta from "./pages/Vinheta";
import Materias from "./pages/Materias";
import Noticias from "./pages/Noticias";
import Usuarios from "./pages/Usarios";
import CadastroUsuario from "./pages/CadastroUsuario";
import CadastroNoticias from "./pages/CadastroNoticias";
import CadastroAviso from "./pages/CadastroAviso";
import Avisos from "./pages/Avisos";
import NotFound from "./pages/NotFound";
import AccessDenied from "./pages/AccessDenied";
import { RequireRole } from "./components/RequireRole";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/acesso-negado" element={<AccessDenied />} />
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
          path="/usuarios"
          element={
            <RequireRole allowedRoles={["superadmin"]}>
              <Usuarios />
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

        {/* rotas de edição */}

        <Route
          path="/cadastro-materia/:id"
          element={
            <RequireRole allowedRoles={["superadmin", "admin"]}>
              <CadastroMateria />
            </RequireRole>
          }
        />
        <Route
          path="/cadastro-noticia/:id"
          element={
            <RequireRole allowedRoles={["superadmin", "admin", "editor"]}>
              <CadastroNoticias />
            </RequireRole>
          }
        />
        <Route
          path="/cadastro-avisos/:id"
          element={
            <RequireRole allowedRoles={["superadmin", "admin", "editor"]}>
              <CadastroAviso />
            </RequireRole>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
