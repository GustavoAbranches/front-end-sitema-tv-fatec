import { Link } from "react-router";

const NavigateButton = ({ rota, text }) => {
  return (
    <div className="flex justify-center items-center">
      <Link
        to={rota}
        className="bg-mediumOrange text-white font-semibold rounded-md 
          px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base 
          transition-opacity duration-200"
      >
        {text}
      </Link>
    </div>
  );
};

export default NavigateButton;
