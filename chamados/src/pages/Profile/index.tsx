import "./profile.css";
import { useContext, useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";

import { FiSettings, FiUpload } from "react-icons/fi";
import avatar from "../../assets/avatar.png";
import { AuthContext } from "../../contexts/auth";

import { db,storage} from "../../services/firebaseConnectionFirebase";
import {doc, updateDoc} from "firebase/firestore";


export default function Profile() {

  //const { user, storageUser, setUser, logout } = useContext(AuthContext);
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Profile deve estar dentro de AuthProvider");
  }

  const { user, storageUser, setUser, Logout } = context;
  const [avatarUrl, setAvatarUrl] = useState(
    user && user.avatarUrl ? user.avatarUrl : avatar,
  );
  const [imageAvatar, setImageAvatar] = useState(null);
  const [nome, setNome] = useState(user && user.nome ? user.nome : "");
  const [email, setEmail] = useState(user && user.email ? user.email : "");


  function handleFile(e: any) {
    console.log(e.target.files);
    if (e.target.files[0]) {
      const image = e.target.files[0];
     
      if (image.type === "image/jpeg" || image.type === "image/png") {
        setAvatarUrl(URL.createObjectURL(image));
        setImageAvatar(image);
        //Aqui vai salvar a imagem no firebase
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatar(null);
        return ;
      }
    }
  }

 async function handleSubmit(e: any) {
    e.preventDefault();
    if (imageAvatar === null && nome !== "") {
      const docref = doc(db, "users", user.uid);
     await  updateDoc(docref, {
        nome: nome,
     })
       .then(() => {
         let data = {
           ...user,
           nome: nome,
         };
         setUser(data);
         storageUser(data);
         alert("Nome alterado com sucesso!");
       })
       .catch((error) => {
         console.log("Erro ao atualizar o nome: ", error);
       });
    }
  }

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Minha conta">
          <FiSettings size={25} color="#000" />
        </Title>

        <div className="container">
          <form className="form-profile" onSubmit={handleSubmit}>
            <label className="label-avatar">
              <span>
                <FiUpload size={25} color="#fff" />
              </span>
              <input type="file" accept="image/*" onChange={handleFile} />
              <br />
              {avatarUrl === null ? (
                <img
                  src={avatar}
                  width="250"
                  height="250"
                  alt="Foto de perfil do usuário"
                />
              ) : (
                <img
                  src={avatarUrl}
                  width="250"
                  height="250"
                  alt="Foto de perfil do usuário"
                />
              )}
            </label>
            <label>Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
         
    
            />
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            
            />
            <button type="submit">Salvar</button>
          </form>
        </div>
        <div className="container">
          <button className="logout-btn" onClick={Logout} type="submit">
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
