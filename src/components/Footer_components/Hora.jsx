import { useState, useEffect } from "react";

const Hora = () => {
  const [hour, setHour] = useState();

  function updateTime() {
    const hour = new Date();
    const formatHour = hour.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setHour(formatHour);
  }

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center flex-1 bg-tangerine">
      <span className="font-bold text-white 2xl:text-5xl lg:text-3xl">
        {hour}
      </span>
    </div>
  );
};

export default Hora;
