
import type { SyntheticEvent } from "react";
import "./singnIn.css";
import logo from "../../assets/logo.png";
import { useState, useContext} from "react";
import { Link } from "react-router-dom";



import { AuthContext } from "../../contexts/auth";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const { signIn } = useContext(AuthContext);
  const { signIn } = useContext(AuthContext)!;

  function handleSigin(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (email !== "" && password !== "") signIn(email, password);
  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Logo do sistema" />
        </div>
        <form onSubmit={handleSigin}>
          <h1>Entrar</h1>
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
          <button type="submit">Acessar</button>
        </form>
        <Link to="/register">Criar uma conta</Link>
      </div>
    </div>
  );
}
