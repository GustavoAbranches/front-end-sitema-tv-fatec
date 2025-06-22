import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

import InputCad from "../components/Form_components/InputCad";
import SelectCad from "../components/Form_components/SelectCad";
import ButtonCad from "../components/Form_components/ButtonCad";
import AlertMessage from "../components/Form_components/AlertMessage";
import FormContainer from "../components/Form_components/FormContainer";
import DivSection from "../components/DivSection";
import NavigateButton from "../components/NavigateButton";

const CadastroUsuario = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    setor: "",
    role: "editor",
  });

  const [success, setSuccess] = useState(false);
  const { register, loading, error, clearError } = useAuth();

  const tipoUsuarioOptions = [
    { value: "editor", label: "Editor" },
    { value: "admin", label: "Admin" },
    { value: "superadmin", label: "Superadmin" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpar erro e sucesso quando usuário começar a digitar
    if (error) clearError();
    if (success) setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(
        formData.nome,
        formData.email,
        formData.senha,
        formData.role,
        formData.setor,
      );

      setSuccess(true);
      setFormData({
        nome: "",
        email: "",
        senha: "",
        setor: "",
        role: "editor",
      });

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setSuccess(false);
    }
  };

  return (
    <div className="flex">
      <DivSection />
      <FormContainer title="Cadastro Usuário" onSubmit={handleSubmit}>
        <AlertMessage type="error" message={error ? error : ""} />

        <AlertMessage
          type="success"
          message={success ? "Usuário registrado com sucesso!" : ""}
        />

        <InputCad
          label="Nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <InputCad
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <InputCad
          label="Senha"
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <InputCad
          label="Setor"
          name="setor"
          value={formData.setor}
          onChange={handleChange}
          disabled={loading}
        />

        <SelectCad
          label="Função"
          name="role"
          value={formData.role}
          onChange={handleChange}
          options={tipoUsuarioOptions}
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

          <NavigateButton rota="/materias" text="Voltar" />
        </div>
      </FormContainer>
    </div>
  );
};

export default CadastroUsuario;
