import { useState, useEffect } from "react";
import { useHorario } from "../hooks/useHorarios";

import { useParams, useNavigate } from "react-router-dom";

import InputCad from "../components/Form_components/InputCad";
import ButtonCad from "../components/Form_components/ButtonCad";
import SelectCad from "../components/Form_components/SelectCad";
import AlertMessage from "../components/Form_components/AlertMessage";
import FormContainer from "../components/Form_components/FormContainer";
import NavigateButton from "../components/NavigateButton";
import DivSection from "../components/DivSection";

const CadastroHorario = () => {
  const [success, setSuccess] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams(); // Para capturar o ID da URL
  const navigate = useNavigate();
  const [horarioData, setHorarioData] = useState({
    curso: "",
    dia_semana: "",
    disciplina: "",
    docente: "",
    sala: "",
    horario_inicial: "",
    horario_final: "",
    descricao: "",
    semestre: "",
    turno: "",
  });
  const { addHorario, updateHorario, horarios, loading, error } = useHorario();

  useEffect(() => {
    if (id) {
      setIsEditing(true);
      if (horarios.length > 0) {
        const horarioParaEditar = horarios.find(
          (horario) => horario.id === parseInt(id),
        );
        if (horarioParaEditar) {
          setHorarioData({
            curso: horarioParaEditar.curso || "",
            dia_semana: horarioParaEditar.dia_semana || "",
            disciplina: horarioParaEditar.disciplina || "",
            docente: horarioParaEditar.docente || "",
            sala: horarioParaEditar.sala || "",
            horario_inicial: horarioParaEditar.horario_inicial || "",
            horario_final: horarioParaEditar.horario_final || "",
            descricao: horarioParaEditar.descricao || "",
            semestre: horarioParaEditar.semestre || "",
            turno: horarioParaEditar.turno || "",
          });
        } else {
          console.error("Horário não encontrado para o ID:", id);
        }
      }
    } else {
      setIsEditing(false);
    }
  }, [id, horarios]);

  const optionsCurso = [
    { label: "Selecione...", value: "" },
    {
      label: "Análise e Desenvolvimento de Sistemas",
      value: "Análise e Desenvolvimento de Sistemas",
    },
    { label: "Design de Midias Digitais", value: "Design de Midias Digitais" },
    { label: "Logistica", value: "Logistica" },
    { label: "Secretariado", value: "Secretariado" },
    { label: "Articulado Médio Superior", value: "Articulado Médio Superior" },
    { label: "Jogos Digitais", value: "Jogos Digitais" },
  ];

  const optionsTurno = [
    { label: "Selecione...", value: "" },
    { label: "Manhã", value: "Manhã" },
    { label: "Tarde", value: "Tarde" },
    { label: "Noite", value: "Noite" },
  ];

  const optionsDia = [
    { label: "Selecione...", value: "" },
    { label: "Segunda", value: "Segunda" },
    { label: "Terça", value: "Terça" },
    { label: "Quarta", value: "Quarta" },
    { label: "Quinta", value: "Quinta" },
    { label: "Sexta", value: "Sexta" },
    { label: "Sábado", value: "Sábado" },
  ];

  const optionsSemestre = [
    { label: "Selecione...", value: "" },
    { label: "1º Semestre", value: "1" },
    { label: "2º Semestre", value: "2" },
    { label: "3º Semestre", value: "3" },
    { label: "4º Semestre", value: "4" },
    { label: "5º Semestre", value: "5" },
    { label: "6º Semestre", value: "6" },
  ];

  const horarioInicialOptions = [
    { label: "Selecione...", value: "" },
    { label: "07:40", value: "07:40:00" },
    { label: "09:30", value: "09:30:00" },
    { label: "11:10", value: "11:10:00" },
    { label: "11:20", value: "11:20:00" },
    { label: "13:50", value: "13:50:00" },
    { label: "15:40", value: "15:40:00" },
    { label: "19:00", value: "19:00:00" },
    { label: "20:50", value: "20:50:00" },
  ];

  const horarioFinalOptions = [
    { label: "Selecione...", value: "" },
    { label: "09:20", value: "09:20:00" },
    { label: "11:10", value: "11:10:00" },
    { label: "13:00", value: "13:00:00" },
    { label: "15:40", value: "15:40:00" },
    { label: "17:20", value: "17:20:00" },
    { label: "20:40", value: "20:40:00" },
    { label: "22:30", value: "22:30:00" },
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
      if (isEditing) {
        await updateHorario(parseInt(id), horarioData);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          navigate("/materias"); // Redireciona para a lista de horários após editar
        }, 2000);
      } else {
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
          descricao: "",
          semestre: "",
          turno: "",
        });
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      setSuccess(false);
    }
  };

  return (
    <div className="flex">
      <DivSection />
      <FormContainer
        title={isEditing ? "Editar Disciplina" : "Cadastro Disciplina"}
        onSubmit={handleSubmit}
      >
        <AlertMessage type="error" message={error ? error : ""} />

        <AlertMessage
          type="success"
          message={success ? "Matéria registrada com sucesso!" : ""}
        />

        <SelectCad
          label="Curso"
          name="curso"
          value={horarioData.curso}
          onChange={handleChange}
          options={optionsCurso}
          disabled={loading}
        />

        <SelectCad
          label="Dia"
          name="dia_semana"
          value={horarioData.dia_semana}
          onChange={handleChange}
          options={optionsDia}
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
          options={horarioInicialOptions}
          disabled={loading}
        />

        <SelectCad
          label="Horário final"
          name="horario_final"
          value={horarioData.horario_final}
          onChange={handleChange}
          options={horarioFinalOptions}
          disabled={loading}
        />

        <SelectCad
          label="Semestre"
          name="semestre"
          value={horarioData.semestre}
          onChange={handleChange}
          options={optionsSemestre}
          disabled={loading}
        />

        <SelectCad
          label="Turno"
          name="turno"
          value={horarioData.turno}
          onChange={handleChange}
          options={optionsTurno}
          disabled={loading}
        />

        <div className="flex flex-row w-full">
          <ButtonCad
            type="submit"
            disabled={loading}
            loading={loading}
            loadingText={isEditing ? "Atualizando..." : "Registrando..."}
          >
            {isEditing ? "Atualizar" : "Registrar"}
          </ButtonCad>
          <NavigateButton rota="/noticias" text="Voltar" />
        </div>
      </FormContainer>
    </div>
  );
};

export default CadastroHorario;
