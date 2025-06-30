import DivImagem from "./BarraLateral_components/DivImagem";
import DivAviso from "./BarraLateral_components/DivAviso";
import LogoFatec from "../assets/fatec-logo.svg";
import BgImage from "../assets/fatec-arcos.jpg";
import { useAvisosAtivosHoje } from "../hooks/useAvisosAtivosHoje";

export default function BarraLateral() {
  const { currentAviso } = useAvisosAtivosHoje();

  return (
    <div
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
      }}
      className="bg-cover bg-center relative h-full 2xl:w-[35rem] lg:w-[20rem]"
    >
      <div className="absolute inset-0 bg-primaryBlue bg-opacity-90">
        <div className="flex flex-col justify-center items-center relative z-10 pt-8 h-full pb-80">
          <DivImagem currentAviso={currentAviso} />
          <DivAviso currentAviso={currentAviso} />
          <img
            src={LogoFatec}
            alt="Logo Fatec"
            className="2xl:h-52 lg:h-32 absolute inset-x-0 bottom-0 2xl:ml-28 lg:ml-14"
          />
        </div>
      </div>
    </div>
  );
}
