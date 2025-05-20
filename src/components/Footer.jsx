import Data from "./Footer_components/Data.jsx";
import Hora from "./Footer_components/Hora.jsx";
import Clima from "./Footer_components/Clima.jsx";

const Footer = () => {
  return (
    <div className="w-full h-16 flex">
      <Data />
      <Hora />
      <Clima day={0} text={"Hoje"} />
      <div className="flex flex-row h-full">
        <div className="w-[20px] h-[64px] bg-carmineRed" />
        <div className="w-[20px] h-[64px] bg-tangerine" />
        <div className="w-[20px] h-[64px] bg-mediumOrange" />
      </div>
      <Clima day={1} text={"Amanhã"} />
    </div>
  );
};

export default Footer;
