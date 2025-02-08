import './css/profile.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pdp from './img/pdp.jpg';
function Profile(){
//Initiate part//

const decodedToken = localStorage.getItem("token");
const navigate = useNavigate();
const [username, setUserName] = useState("");

useEffect(()=>{
    if(!localStorage.getItem("isLogged")){
        navigate('/login');
    }
    handleUserName();
})

const handleUserName = () =>{
    const stockedUserName = localStorage.getItem("username")
    setUserName(stockedUserName);
}

const handleLogout = async() =>{
    localStorage.removeItem("isLogged");
    window.location.reload();
}
    return(
        <div>
            <title>Profil</title>
            <div className="mainProfile">
               <section className='lateralMenu'>
               <ul className='lateralUp'>
                    <li><i id='lateralIcon' class='bx bx-clipboard'></i> <Link>Aperçu</Link></li>
                    <li><i id='lateralIcon' class='bx bx-money-withdraw'></i> <Link>Mes commandes</Link></li>
                    <li><i id='lateralIcon' class='bx bx-info-circle' ></i> <Link>Informations</Link></li>
                    <li><i id='lateralIcon' class='bx bx-lock-alt'></i><Link>Mot de passe</Link> </li>
                    <li> <i id='lateralIcon' class='bx bx-wallet-alt'></i> <Link>Modes de paiements</Link></li>
                </ul>
                <ul className='lateralDown'>
                <button onClick={handleLogout}>Se déconnecter</button>
                </ul>
               </section>
               <section className='overview'>
                <div className="profilePic">
                    <img className='pdp' src={pdp} alt="" />
                    <h3>Nom d'Utilisateur: {username} </h3>
                </div>
               </section>
            
            </div>
                
            
        </div>
    );
}


export default Profile;