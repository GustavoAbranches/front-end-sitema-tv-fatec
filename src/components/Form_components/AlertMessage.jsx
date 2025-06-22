const AlertMessage = ({ type = "info", message }) => {
  const getAlertStyles = () => {
    switch (type) {
      case "error":
        return { color: "red" };
      case "success":
        return { color: "green" };
      case "warning":
        return { color: "orange" };
      default:
        return { color: "blue" };
    }
  };

  if (!message) return null;

  return (
    <div
      className="flex justify-center items-center w-full h-10 bg-white rounded-md"
      style={{ ...getAlertStyles(), marginBottom: "10px" }}
    >
      {message}
    </div>
  );
};

export default AlertMessage;
