import { Link } from "react-router";

const CadastroButton = ({ rota, text }) => {
  return (
    <div className="flex justify-end w-full px-8">
      <div className="flex justify-center items-center rounded-md shadow-md mb-4 w-44 h-10 bg-mediumOrange text-white font-verdana">
        <Link to={rota}>{text}</Link>
      </div>
    </div>
  );
};

export default CadastroButton;
