import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import vinheta from "../assets/vinhetas/vinheta.mp4";

function Vinheta() {
  const navigate = useNavigate();
  const location = useLocation();

  const destino = location.state?.next || "/";

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate(destino);
    }, 5000); // 5000ms = 5 segundos

    return () => clearTimeout(timeout);
  }, [navigate, location]);

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <video
        autoPlay
        muted
        width="100%"
        height="100%"
        style={{ objectFit: "cover" }}
      >
        <source src={vinheta} type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>
    </div>
  );
}

export default Vinheta;
