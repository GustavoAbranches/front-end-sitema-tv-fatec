import { Link } from "react-router";

const NavigateButton = ({ rota, text }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <Link
        to={rota}
        className="flex justify-center items-center text-white bg-mediumOrange w-24 h-8 font-semibold rounded-md"
      >
        {text}
      </Link>
    </div>
  );
};

export default NavigateButton;
