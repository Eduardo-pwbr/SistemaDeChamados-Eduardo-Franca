import {useContext, type JSX} from "react";
import { AuthContext } from "../contexts/auth";
import { Navigate } from "react-router-dom";


export function Private({ children }: { children: JSX.Element }) {
  const { signed, loading } = useContext(AuthContext)!;

  /*Evento de loading com botão quando vai logar */
  if (loading) {
    return <div className="loading">Carregando...</div>;
  }


  /*Se o usuário não estiver logado, redireciona para a página de login */
  if (!signed) {
    return <Navigate to="/" />;
  }

  return children;


   console.log(signed);
}