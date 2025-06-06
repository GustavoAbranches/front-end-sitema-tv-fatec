const AlertMessage = ({ type = "info", message, className = "" }) => {
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
      className={`alert-message ${className}`}
      style={{ ...getAlertStyles(), marginBottom: "10px" }}
    >
      {message}
    </div>
  );
};

export default AlertMessage;
