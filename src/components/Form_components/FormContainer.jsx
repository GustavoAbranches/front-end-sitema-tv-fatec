const FormContainer = ({
  title,
  onSubmit,
  children,
  className = "",
  formClassName = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center h-screen w-full bg-primaryBlue text-white ${className}`}
    >
      <div className="w-full p-6">
        <h2 className="font-verdana text-2xl font-bold mb-5">{title}</h2>
      </div>

      <form
        onSubmit={onSubmit}
        className={`flex flex-col items-start px-36 justify-around h-full w-full ${formClassName}`}
      >
        {children}
      </form>
    </div>
  );
};

export default FormContainer;
