import { useContext,useState } from "react";
import { AuthContext } from "../../contexts/auth";
import type { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import "./singnin.css";

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

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //const { signIn } = useContext(AuthContext);
    const { signIn } = useContext(AuthContext)!;

  async function handleSigin(e: SyntheticEvent<HTMLFormElement>) {
      e.preventDefault();

    if (email !== "" && password !== "") {
          await signIn(email, password);
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
        <form onSubmit={handleSigin}>
          <h1>Entrar</h1>

          <p className="sub">Preencha os dados para se autenticar.</p>

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
              placeholder="Mínimo de 8 caracteres "
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
            Entrar
          </button>

          <p className="alt">
            {/*Já tem uma conta? <a href="#entrar">Entrar</a>*/}
            Não tem conta?<Link to="/register"> Cadastrar </Link>
          </p>
        </form>
      </main>
    </div>
  );
}
