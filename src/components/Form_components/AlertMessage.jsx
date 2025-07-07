const AlertMessage = ({ type = "info", message }) => {
  if (!message) return null;

  const typeStyles = {
    error: "text-red-600 border-red-600 bg-red-100",
    success: "text-green-600 border-green-600 bg-green-100",
    warning: "text-yellow-600 border-yellow-600 bg-yellow-100",
    info: "text-blue-600 border-blue-600 bg-blue-100",
  };

  return (
    <div
      className={`flex justify-center items-center w-full min-h-10 px-4 py-2 border-l-4 rounded-md font-verdana text-sm sm:text-base ${typeStyles[type] || typeStyles.info} mb-2`}
    >
      {message}
    </div>
  );
};

export default AlertMessage;
