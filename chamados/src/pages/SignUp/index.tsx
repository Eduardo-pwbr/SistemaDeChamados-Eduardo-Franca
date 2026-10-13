
import React, { useContext } from "react";

//import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
//import "./singnUp.css";
import { AuthContext } from "../../contexts/auth"; // chamando Context
//import type { Firestore } from "firebase/firestore";
//import type firebase from "firebase/compat/app";

function Logo() {
  return (
    <svg
      className="logo"
      viewBox="0 0 120 64"
      fill="none"
      aria-hidden="true"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <path d="M44 12H24L9 32l15 20h20" stroke="#2aa0ff" strokeWidth="9" />

      <path d="M76 12h20l15 20-15 20H76" stroke="#16b0ff" strokeWidth="9" />

      <path d="M66 4 48 60" stroke="#fff" strokeWidth="8" />
    </svg>
  );
}

export default function SignUp() {
  const [name, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, loadingAuth } = useContext(AuthContext)!;

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name !== "" && email !== "" && password !== "") {
      signUp(name, email, password);
    }
  }
  return (
    <div className="page">
      <aside className="art" aria-hidden="true">
        <div className="art-in">
          <Logo />

          <div className="hero-copy">
            <h2>Crie sua conta e comece a construir.</h2>

            <p>Um cadastro rápido e você já pode entrar.</p>
          </div>
        </div>
      </aside>

      <main>
        <form onSubmit={handleSubmit}>
          <h1>Cadastrar</h1>

          <p className="sub">Preencha os dados para se autenticar.</p>

          <div className="field">
            <label htmlFor="nome">Nome</label>

            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Como você se chama"
              autoComplete="name"
              minLength={2}
              required
              onChange={(e) => setNome(e.target.value)}
            />

            <span className="msg">Informe seu nome.</span>
          </div>

          <div className="field">
            <label htmlFor="email">E-mail</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="email@email.com"
              autoComplete="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <span className="msg">
              Digite um e-mail válido, como nome@email.com.
            </span>
          </div>

          <div className="field">
            <label htmlFor="senha">Senha</label>

            <input
              id="senha"
              name="senha"
              type="password"
              placeholder="Mínimo de 8 caracteres"
              autoComplete="new-password"
              minLength={8}
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <span className="msg">
              A senha precisa ter pelo menos 8 caracteres.
            </span>
          </div>

          <button className="btn" type="submit">
            {loadingAuth ? "Carregando..." : "Cadastrar"}
          </button>

          <p className="alt">
            <Link to="/">Já tenho uma conta</Link>
          </p>
        </form>
      </main>
    </div>
  );
}
