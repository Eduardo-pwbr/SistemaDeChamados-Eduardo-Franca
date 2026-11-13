import "./header.css";
import avatarImg from "../../assets/avatar.png";
import { Link} from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../contexts/auth";
import {FiHome, FiUser, FiSettings} from "react-icons/fi";

export default function Header() {  
  const { user } = useContext(AuthContext)!;

  return (
    <header>
      <div className="sidebar">
        <div>
          { /*user?.avatarUrl === null ? avatarImg : user?.avatarUrl*/}
          
          <img src={user?.avatarUrl || avatarImg} alt="Foto do usuário" />
        </div>
        <Link to="/dashboard">
          <FiHome color="#fff" size={24} />
          Chamados
        </Link>
        <Link to="/customers">
          <FiUser color="#fff" size={24} />
          Clientes
        </Link>
        <Link to="/profile">
          <FiSettings color="#fff" size={24} />
          Perfil
        </Link>
      </div>
    </header>
  );
  
  }