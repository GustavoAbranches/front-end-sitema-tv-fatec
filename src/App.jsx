import "./App.css";
import Footer from "./Footer";
import BarraLateral from "./BarraLateral";
import TelaPrincipal from "./TelaPrincipal"

function App() {
  return (
     <div className="flex h-screen">
      <TelaPrincipal />
      <BarraLateral />
    </div>
  );
}

export default App;
