export default function Aviso() {
  return (
    <div
      className="w-full px-6 py-6 text-white bg-cover bg-center relative"
      style={{ backgroundImage: "url('/src/images/Fatec.jpg')" }}
    >
      <div className="absolute inset-0 bg-blue-950 bg-opacity-90" />
      <div className="relative z-10">
        <p className="font-bold text-sm mb-1">AMS | 10/04 - 11/04</p>
        <p className="text-sm leading-tight">
          Pedido de recurso com (re)envio de documentos da matrícula da 2ª lista
          de convocados do Vestibulinho
        </p>
      </div>
    </div>
  );
}
