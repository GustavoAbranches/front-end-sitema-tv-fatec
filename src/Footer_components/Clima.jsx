import { useState, useEffect } from "react";
import axios from "axios";

const Clima = ({ day, text }) => {
  const [clima, setClima] = useState(null);
  const [loading, setLoading] = useState(true);

  const cidade = "carapicuiba";
  const apiKey = "9c14b65fc9c84bdcb7b191508252204";
  const urlForecast = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cidade}&days=2`;

  const fetchClima = async () => {
    try {
      const response = await axios.get(urlForecast);
      setClima(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClima();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-evenly items-center h-full w-1/4">
        <span className="text-gray-400">Carregando clima...</span>
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <div className="flex justify-evenly items-center h-full w-1/4">
      <span className="font-bold text-gray-400 text-2xl">{text}</span>
=======
    <div className="flex p-8 items-center h-full w-1/4">
      <span className="font-bold text-gray-400 text-2xl mr-6">{text}</span>
>>>>>>> 2000a26c2495007f9cfec0e5a72406e8f05a3bce
      <span className="font-bold text-gray-400 text-2xl">
        {Math.round(clima.forecast.forecastday[day].day.mintemp_c)}° /
        {Math.round(clima.forecast.forecastday[day].day.maxtemp_c)}°
      </span>
    </div>
  );
};

export default Clima;
