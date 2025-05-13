import Data from "./Footer_components/Data.jsx";
import Hora from "./Footer_components/Hora.jsx";
import Clima from "./Footer_components/Clima.jsx";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full h-16 flex">
      <Data />
      <Hora />
      <Clima day={0} text={"Hoje"} />
      <div className="relative z-10 flex flex-row h-full">
        <div className="w-[20px] h-[64px] bg-red-600" />
        <div className="w-[20px] h-[64px] bg-orange-500" />
        <div className="w-[20px] h-[64px] bg-yellow-400" />
      </div>
      <Clima day={1} text={"Amanhã"} />
    </div>
  );
};

export default Footer;
