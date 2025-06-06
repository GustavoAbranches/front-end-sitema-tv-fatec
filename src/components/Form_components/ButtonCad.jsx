const ButtonCad = ({
  children,
  type = "button",
  disabled = false,
  loading = false,
  loadingText = "Carregando...",
  onClick,
  className = "",
}) => {
  return (
    <div className="flex justify-center w-full">
      <button
        type={type}
        disabled={disabled || loading}
        onClick={onClick}
        className={`bg-mediumOrange w-24 h-8 font-semibold rounded-md ${className} ${
          disabled || loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? loadingText : children}
      </button>
    </div>
  );
};

export default ButtonCad;
