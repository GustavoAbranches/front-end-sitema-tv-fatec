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
      className="bg-cover bg-center relative h-full 2xl:w-[35rem] lg:w-[23rem]"
    >
      <div className="absolute inset-0 bg-primaryBlue bg-opacity-90">
        <div className="flex flex-col justify-center items-center relative z-10 pt-8">
          <DivImagem />
          <DivAviso />
          <img src={LogoFatec} alt="Logo Fatec"/>
        </div>
      </div>
    </div>
  );
}
