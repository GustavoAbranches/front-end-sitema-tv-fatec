import { QRCodeSVG } from "qrcode.react";

const QrCodeDiv = ({ currentNoticia, className }) => {
  if (!currentNoticia) return null;

  return (
    <div className={className}>
      <QRCodeSVG
        value={currentNoticia.urlqr}
        className="2xl:w-52 2xl:h-52 lg:w-32 lg:h-32"
      />
    </div>
  );
};

export default QrCodeDiv;
