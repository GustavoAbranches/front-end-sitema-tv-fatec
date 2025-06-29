import { QRCodeSVG } from "qrcode.react";

const QrCodeDiv = ({ currentNoticia, className }) => {
  if (!currentNoticia) return <p>Nenhuma notícia disponível</p>;

  return (
    <div className={className}>
      <QRCodeSVG value={currentNoticia.urlQr} size={128} />
    </div>
  );
};

export default QrCodeDiv;
