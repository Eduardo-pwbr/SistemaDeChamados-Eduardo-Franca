import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../components/Header";
import "./dastboard.css";

export default function Dashboard() {
  const { logout } = useContext(AuthContext)!;

  async function handleLogout() {
    await logout();
  }

  return (
    <div>
   
      <Header />

      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}