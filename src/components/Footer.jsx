import Data from "./Footer_components/Data.jsx";
import Hora from "./Footer_components/Hora.jsx";
import Clima from "./Footer_components/Clima.jsx";
import DivSection from "./DivSection.jsx";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full h-16 flex">
      <Data />
      <Hora />
      <Clima day={0} text={"Hoje"} />
      <div className="h-full w-[65px] bg-white">
        <DivSection />
      </div>
      <Clima day={1} text={"Amanhã"} />
    </div>
  );
};

export default Footer;
