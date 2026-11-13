import './profile.css';
import { useContext, useState } from 'react';
import Header from '../../components/Header';
import Title from '../../components/Title';

import { FiSettings,FiUpload } from "react-icons/fi";
import avatar from '../../assets/avatar.png';
import { AuthContext } from '../../contexts/auth';

export default function Profile() {

  const { user } = useContext(AuthContext);
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl ? user.avatarUrl : avatar);

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Minha conta">
          <FiSettings size={25} color="#000" />
        </Title>
        
        <div className="container">
          <form className="form-profile">
            <label className="label-avatar">

              <span>
                <FiUpload size={25} color="#fff" />
              </span>
              <input type="file" accept="image/*" /><br />
              {avatarUrl === null ? (
                <img src={avatar} width="250" height="250" alt="Foto de perfil do usuário" />
              ) : (
                <img src={avatarUrl} width="250" height="250" alt="Foto de perfil do usuário" />
              )}
            </label>
            <label>Nome</label>
            <input type="text" placeholder="Seu nome" disabled />
            <label>Email</label>
            <input type="text" placeholder="teste@teste.com" disabled={true} />
            <button type="submit">Salvar</button>
      
          </form>
          
        </div>
        <div className="container">
          <button className="logout-btn" type="submit">Sair</button>
        </div>
      </div>
     

   
     
    </div>
  )
}