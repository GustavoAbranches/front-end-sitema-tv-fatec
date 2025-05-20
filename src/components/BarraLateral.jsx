import DivImagem from "./BarraLateral_components/DivImagem";
import DivAviso from "./BarraLateral_components/DivAviso";
import LogoFatec from "../assets/fatec-logo.png";
import BgImage from "../assets/fatec-arcos.jpg";

export default function BarraLateral() {
  return (
    <div
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
      }}
      className="bg-cover bg-center relative h-full w-full"
    >
      <div className="absolute inset-0 bg-primaryBlue bg-opacity-90">
        <div className="relative z-10 h-full">
          <DivImagem />
          <DivAviso />
          <div className="flex justify-center items-center">
            <img src={LogoFatec} alt="Logo Fatec" className="h-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}
