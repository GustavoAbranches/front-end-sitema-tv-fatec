import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

import Sidebar from "../components/Sidebar";

const CadastroUsuario = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    tipo_usuario: "editor",
  });

  const [success, setSuccess] = useState(false);
  const { register, loading, error, clearError } = useAuth();

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
        formData.tipo_usuario,
      );

      setSuccess(true);
      setFormData({
        nome: "",
        email: "",
        senha: "",
        tipo_usuario: "editor",
      });

      console.log("Usuário registrado com sucesso!");
    } catch (err) {
      console.log("Erro no registro:", err.message);
    }
  };

  return (
    <div className="flex flex-row ">
      <div className="2xl:w-8 lg:w-4 bg-carmineRed" />
      <div className="2xl:w-8 lg:w-4 bg-tangerine" />
      <div className="2xl:w-8 lg:w-4 bg-mediumOrange" />

      <div className="h-screen">
        <Sidebar />
      </div>
      <div className="flex flex-col justify-center items-center h-screen w-full bg-primaryBlue text-white">
        <div className="w-full p-6">
          <h2 className="font-verdana text-2xl font-bold mb-5">
            Registrar Usuário
          </h2>
        </div>

        {error && (
          <div
            className="error-message"
            style={{ color: "red", marginBottom: "10px" }}
          >
            {error}
          </div>
        )}

        {success && (
          <div
            className="success-message"
            style={{ color: "green", marginBottom: "10px" }}
          >
            Usuário registrado com sucesso!
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-around items-start h-[500px] w-[350px]"
        >
          <div className="flex w-full flex-col text-white font-verdana">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              disabled={loading}
              className="text-black font-verdana w-full rounded-full px-4 py-1"
            />
          </div>

          <div className="flex w-full flex-col text-white font-verdana">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
              className="text-black font-verdana w-full rounded-full px-4 py-1"
            />
          </div>

          <div className="flex w-full flex-col text-white font-verdana">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
              disabled={loading}
              className="text-black font-verdana w-full rounded-full px-4 py-1"
            />
          </div>

          <div className="flex flex-col text-white font-verdana">
            <label htmlFor="tipo_usuario">Função:</label>
            <select
              id="tipo_usuario"
              name="tipo_usuario"
              value={formData.tipo_usuario}
              onChange={handleChange}
              disabled={loading}
              className="text-black font-verdana w-full rounded-full px-4 py-1"
            >
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
              <option value="viewer">Visualizador</option>
            </select>
          </div>

          <div className="flex justify-center w-full ">
            <button
              type="submit"
              disabled={loading}
              className="bg-mediumOrange w-24 h-8 font-semibold rounded-md"
            >
              {loading ? "Registrando..." : "Registrar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroUsuario;
