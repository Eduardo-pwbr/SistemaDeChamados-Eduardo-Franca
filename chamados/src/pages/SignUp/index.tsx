
import React from "react";
import "./singnUp.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function SignUp() {



  const [name, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name !== "" && email !== "" && password !== "")
    {
      alert("Pode fazer o novo cadastro")
    }
    
  }
  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Logo do sistema" />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Nova Conta</h1>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setNome(e.target.value)}
          />

          <input
            type="email"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </form>
        <Link to="/">Já tenho uma conta</Link>
      </div>
    </div>
  );
}
