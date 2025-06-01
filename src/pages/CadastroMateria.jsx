import { useState } from "react";
import { useHorario } from "../hooks/useHorarios";

import InputCad from "../components/Form_components/InputCad";
import ButtonCad from "../components/Form_components/ButtonCad";
import SelectCad from "../components/Form_components/SelectCad";
import AlertMessage from "../components/Form_components/AlertMessage";
import FormContainer from "../components/Form_components/FormContainer";
import NavigateButton from "../components/NavigateButton";
import DivSection from "../components/DivSection";

const CadastroHorario = () => {
  const [success, setSuccess] = useState();
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

  const gerarOptions = (campo) => [
    { label: "Selecione...", value: "" },
    ...[...new Set(horarios.map((h) => h[campo]))]
      .filter((item) => item) // remove nulos/vazios
      .map((item) => ({ label: item, value: item })),
  ];

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
    <div className="flex">
      <DivSection />
      <FormContainer title="Cadastro Disciplina" onSubmit={handleSubmit}>
        <AlertMessage type="error" message={error} />

        <AlertMessage
          type="success"
          message={success ? "Usuário registrado com sucesso!" : ""}
        />

        <SelectCad
          label="Curso"
          name="curso"
          value={horarioData.curso}
          onChange={handleChange}
          options={gerarOptions("curso")}
          disabled={loading}
        />

        <SelectCad
          label="Dia"
          name="dia_semana"
          value={horarioData.dia_semana}
          onChange={handleChange}
          options={gerarOptions("dia_semana")}
          disabled={loading}
        />

        <InputCad
          label="Disciplina"
          name="disciplina"
          value={horarioData.disciplina}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <InputCad
          label="Docente"
          name="docente"
          value={horarioData.docente}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <InputCad
          label="Sala"
          name="sala"
          value={horarioData.sala}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <SelectCad
          label="Horário inicial"
          name="horario_inicial"
          value={horarioData.horario_inicial}
          onChange={handleChange}
          options={gerarOptions("horario_inicial")}
          disabled={loading}
        />

        <SelectCad
          label="Horário final"
          name="horario_final"
          value={horarioData.horario_final}
          onChange={handleChange}
          options={gerarOptions("horario_final")}
          disabled={loading}
        />

        <SelectCad
          label="Semestre"
          name="semestre"
          value={horarioData.semestre}
          onChange={handleChange}
          options={gerarOptions("semestre")}
          disabled={loading}
        />

        <SelectCad
          label="Turno"
          name="turno"
          value={horarioData.turno}
          onChange={handleChange}
          options={gerarOptions("turno")}
          disabled={loading}
        />

        <div className="flex flex-row w-full">
          <ButtonCad
            type="submit"
            disabled={loading}
            loading={loading}
            loadingText="Registrando..."
          >
            Registrar
          </ButtonCad>
          <NavigateButton rota="/noticias" text="Voltar" />
        </div>
      </FormContainer>
    </div>
  );
};

export default CadastroHorario;
