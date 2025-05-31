import { useState } from "react";
import { useHorario } from "../hooks/useHorarios";

const CadastroHorario = () => {
  const [sucess, setSuccess] = useState();
  const [horarioData, setHorarioData] = useState({
    curso: "",
    dia_semana: "",
    disciplina: "",
    docente: "",
    sala: "",
    horario_inicial: "",
    horario_final: "",
    descricao: "",
    turno: "",
  });
  const { addHorario, horarios, loading, error } = useHorario();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHorarioData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addHorario(horarioData);

      setSuccess(true);
      setHorarioData({
        curso: "",
        dia_semana: "",
        disciplina: "",
        docente: "",
        sala: "",
        horario_inicial: "",
        horario_final: "",
        semestre: "",
        turno: "",
      });
      alert("Horario registrado com sucesso");
    } catch (err) {
      alert("Erro no registro");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen w-full bg-primaryBlue text-white">
      <div className="w-full p-6">
        <h2 className="font-verdana text-2xl font-bold mb-5">
          Cadastro Disciplina
        </h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-around items-start h-[250px] w-[350px]"
      >
        {/* select curso */}
        <div className="flex w-full flex-col text-white font-verdana">
          <label htmlFor="curso">Curso:</label>
          <select
            type="text"
            id="curso"
            name="curso"
            value={horarioData.curso}
            onChange={handleChange}
            required
            disabled={loading}
            className="text-black font-verdana w-full rounded-full px-4 py-1"
          >
            {[...new Set(horarios.map((h) => h.curso))].map((curso) => (
              <option key={curso} value={curso}>
                {curso}
              </option>
            ))}
          </select>
        </div>
        {/* fim select curso */}

        {/* Select dia da semana */}
        <div className="flex w-full flex-col text-white font-verdana">
          <label htmlFor="dia">Dia:</label>
          <select
            id="dia"
            name="dia_semana"
            value={horarioData.dia_semana}
            onChange={handleChange}
            required
            disabled={loading}
            className="text-black font-verdana w-full rounded-full px-4 py-1"
          >
            <option value="" disabled>
              Selecione...
            </option>

            {[...new Set(horarios.map((h) => h.dia_semana))].map((dia) => (
              <option key={dia} value={dia}>
                {dia}
              </option>
            ))}
          </select>
        </div>
        {/* fim select dia semana */}

        {/* input disciplina */}
        <div className="flex w-full flex-col text-white font-verdana">
          <label htmlFor="disciplina">Disciplina:</label>
          <input
            type="text"
            id="disciplina"
            name="disciplina"
            value={horarioData.disciplina}
            onChange={handleChange}
            required
            disabled={loading}
            className="text-black font-verdana w-full rounded-full px-4 py-1"
          />
        </div>
        {/*fim input disciplina */}

        {/* input docente */}
        <div className="flex w-full flex-col text-white font-verdana">
          <label htmlFor="docente">Docente:</label>
          <input
            type="text"
            id="docente"
            name="docente"
            value={horarioData.docente}
            onChange={handleChange}
            required
            disabled={loading}
            className="text-black font-verdana w-full rounded-full px-4 py-1"
          />
        </div>
        {/*fim input docente */}

        {/* input sala */}
        <div className="flex w-full flex-col text-white font-verdana">
          <label htmlFor="sala">sala:</label>
          <input
            type="text"
            id="sala"
            name="sala"
            value={horarioData.sala}
            onChange={handleChange}
            required
            disabled={loading}
            className="text-black font-verdana w-full rounded-full px-4 py-1"
          />
        </div>
        {/* fim input sala */}

        {/* select horario inicial */}
        <div className="flex w-full flex-col text-white font-verdana">
          <label htmlFor="horario_inicial">Horário inicial:</label>
          <select
            type="text"
            id="horario_inicial"
            name="horario_inicial"
            value={horarioData.horario_inicial}
            onChange={handleChange}
            required
            disabled={loading}
            className="text-black font-verdana w-full rounded-full px-4 py-1"
          >
            <option value="" disabled>
              Selecione...
            </option>

            {[...new Set(horarios.map((h) => h.horario_inicial))].map(
              (inicial) => (
                <option key={inicial} value={inicial}>
                  {inicial}
                </option>
              ),
            )}
          </select>
        </div>
        {/* fim select horario inicial */}

        {/* select horario final */}
        <div className="flex w-full flex-col text-white font-verdana">
          <label htmlFor="horario_final">Horário final:</label>
          <select
            type="text"
            id="horario_final"
            name="horario_final"
            value={horarioData.horario_final}
            onChange={handleChange}
            required
            disabled={loading}
            className="text-black font-verdana w-full rounded-full px-4 py-1"
          >
            <option value="" disabled>
              Selecione...
            </option>

            {[...new Set(horarios.map((h) => h.horario_final))].map((final) => (
              <option key={final} value={final}>
                {final}
              </option>
            ))}
          </select>
        </div>
        {/* fim select horario final */}

        {/* select semastre */}
        <div className="flex w-full flex-col text-white font-verdana">
          <label htmlFor="semestre">Semestre:</label>
          <select
            type="text"
            id="semestre"
            name="semestre"
            value={horarioData.semestre}
            onChange={handleChange}
            required
            disabled={loading}
            className="text-black font-verdana w-full rounded-full px-4 py-1"
          >
            <option value="" disabled>
              Selecione...
            </option>

            {[...new Set(horarios.map((h) => h.semestre))].map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        {/* fim select semestre*/}

        {/* select turno */}
        <div className="flex w-full flex-col text-white font-verdana">
          <label htmlFor="turno">Turno:</label>
          <select
            type="text"
            id="turno"
            name="turno"
            value={horarioData.turno}
            onChange={handleChange}
            required
            disabled={loading}
            className="text-black font-verdana w-full rounded-full px-4 py-1"
          >
            <option value="" disabled>
              Selecione...
            </option>

            {[...new Set(horarios.map((h) => h.turno))].map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        {/* fim select semestre*/}

        {/* botão de envio */}
        <div className="flex justify-center w-full ">
          <button
            type="submit"
            disabled={loading}
            className="bg-mediumOrange w-24 h-8 font-semibold rounded-md mt-3"
          >
            {loading ? "Registrando..." : "Registrar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CadastroHorario;
