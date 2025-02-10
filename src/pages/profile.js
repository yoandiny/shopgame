import './css/profile.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Overview from './profile_components/overview'
import MyOrder from './profile_components/myOrder';
import Info from './profile_components/info';
import Password from './profile_components/password';
import Payment from './profile_components/payment';


function Profile(){
//Initiate part//
const [profileCase, SetProfileCase] = useState("");
const [profileContent, setProfileContent] = useState(<Overview/>);

const navigate = useNavigate();

useEffect(()=>{
    if(!localStorage.getItem("isLogged")){
        navigate('/login');
    }else{
        handleProfile();
    }
   

})

    const changeCase = (e) =>{
        SetProfileCase(e);
    }

    const handleProfile = () =>{
           switch (profileCase) {
            case "order":
                setProfileContent(<MyOrder/>)
                break;
            case "informations":
                setProfileContent(<Info/>);
                break;
            case "password":
                setProfileContent(<Password/>);
                break;
            case "payment":
                setProfileContent(<Payment/>);
                break;
            case "default": 
                setProfileContent(<Overview/>)
                break;
            default: 
                setProfileContent(<Overview/>)
                break;
            
           
           }
        }

const handleLogout = async() =>{
    localStorage.removeItem("isLogged");
    navigate('/');
}
    //Render Part//
    return(
        <div>
            <title>Profil</title>
            <div className="mainProfile">
               <section className='lateralMenu'>
               <ul onSubmit={handleProfile} className='lateralUp'>
                    <li onClick={()=>{changeCase("default")}}> <i id='lateralIcon' class='bx bx-clipboard'></i> <Link>Aperçu</Link></li>
                    <li onClick={()=>{changeCase("order")}}><i id='lateralIcon' class='bx bx-money-withdraw'></i> <Link>Mes commandes</Link></li>
                    <li onClick={()=>{changeCase("informations")}}><i id='lateralIcon' class='bx bx-info-circle' ></i> <Link>Informations</Link></li>
                    <li onClick={()=>{changeCase("password")}}><i id='lateralIcon' class='bx bx-lock-alt'></i><Link>Mot de passe</Link> </li>
                    <li onClick={()=>{changeCase("payment")}}> <i id='lateralIcon' class='bx bx-wallet-alt'></i> <Link>Modes de paiements</Link></li>
                </ul>
                <ul className='lateralDown'>
                <li className='logout' onClick={handleLogout}><i id='lateralIcon' class='bx bx-log-out'></i> Se déconnecter</li>
                </ul>
               </section>
                {profileContent}
            </div>
                
            
        </div>
    );
}


export default Profile;