import { useState, createContext, type ReactNode } from "react";
import type { AuthContextType,UserData } from "../interfaces/AuthContextType";
import { auth, db } from "../services/firebaseConnectionFirebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


export const AuthContext = createContext<AuthContextType | null>(null);

interface unico {
  children: ReactNode;
}

function AuthProvider({ children }: unico) {

  const [loadingAuth, setLoadingAuth] = useState(false); /*Evento de loading com botão quando vai cadastrar */
  const [user, setUser] = useState<UserData | null>(null);
  const navigate = useNavigate();




 async function signIn( email: string, password: string) {
     setLoadingAuth(true); /*Evento de loading com botão quando vai logar */

   await signInWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        let uid = value.user.uid; /*pegar o id do usuário logado */

        const docRef = doc(db, "users", uid);/*pegar o caminho do usuário logado */
        const docSnap = await getDoc(docRef);/*pegar o documento do usuário logado */

        let data = {
          uid: uid,
          nome: docSnap.data()?.nome,
          email: value.user.email,
         avatarUrl: docSnap.data()?.avatarUrl,
        };
        setUser(data);/*setar o usuário logado */
        storageUser(data);/*armazenar o usuário logado no localStorage */
        setLoadingAuth(false);
        toast.success("Bem-vindo de volta");
        navigate("/dashboard");
   

      })
      .catch((error) => {
        console.log(error);
        
        setLoadingAuth(false);
        toast.error("Ops, algo deu errado, tente novamente mais tarde!");
      });
  }



  async function signUp(name: string, email: string, password: string) {
  
    setLoadingAuth(true);



    // cadadtrar novo usuário user,email,password
   await createUserWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        await setDoc(doc(db, "users", uid), {/*uid chamei de caminho */
          nome: name,
          avatarUrl: null,
        })
          .then(() => {

            let data = {
              uid: uid,
              nome: name,
              email: value.user.email,
              avatarUrl: null,
          
            };
            setUser(data);
            storageUser(data);
            //console.log("cadastrado com sucesso")
            setLoadingAuth(false);        
            toast.success("Seja bem-vindo " + name);
           navigate("/dashboard");
          })
      })
      .catch((error) => {
        console.log(error);
        setLoadingAuth(false);
      
     
  
      });
  
  }

  function storageUser(data: UserData) {
    localStorage.setItem("@ticketsPro", JSON.stringify(data));
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user /* conver para boleano no caso falso*/,
        user,
        signIn,
        signUp,
        loadingAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
