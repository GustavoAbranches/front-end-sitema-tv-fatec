import Data from "./Footer_components/Data.jsx";
import Hora from "./Footer_components/Hora.jsx";
import Clima from "./Footer_components/Clima.jsx";
import DivSection from "./DivSection.jsx";

const Footer = () => {
  return (
    <div className="w-full flex 2xl:h-32 lg:h-16">
      <Data />
      <Hora />
      <Clima day={0} text={"Hoje"} />
      <DivSection />
      <Clima day={1} text={"Amanhã"} />
    </div>
  );
};

export default Footer;
