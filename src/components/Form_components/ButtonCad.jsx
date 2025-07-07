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
    <div className="flex">
      <button
        type={type}
        disabled={disabled || loading}
        onClick={onClick}
        className={`bg-mediumOrange text-white font-semibold rounded-md 
          px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base 
          transition-opacity duration-200 
          ${className} 
          ${disabled || loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"}
        `}
      >
        {loading ? loadingText : children}
      </button>
    </div>
  );
};

export default ButtonCad;
