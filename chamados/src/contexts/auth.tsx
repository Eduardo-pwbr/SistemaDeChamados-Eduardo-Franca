import { useState, createContext, type ReactNode } from "react";
import type { AuthContextType } from "../interfaces/AuthContextType";

export const AuthContext = createContext<AuthContextType | null>(null);

interface unico {
  children: ReactNode;
}
function AuthProvider({ children }:unico) {

  const [user, setUser] = useState(null);

  function signIn(email:string, password:string) {
    console.log(email);
    console.log(password);
    alert("Logado com sucesso");
    
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user /* conver para boleano no caso falso*/,
        user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
