import './css/login.css';
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';



function Login(){
    //Initiate Part//

    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({
        mail: '',
        password: '',
    })

    //Logic Part//
    useEffect(() => {
     
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginForm({ ...loginForm, [name]: value });
      };

      const handleLogin = async(e) => {
        e.preventDefault();
        try {
          const res = await axios.post("http://localhost:3001/login", loginForm, { withCredentials: true });
      
          if (res.status === 200) {
           localStorage.setItem("isLogged", "true");
           const token = res.data.token;
           const decodedToken = jwtDecode(token);

           if(token){
            localStorage.setItem("username", decodedToken.username);
            localStorage.setItem("mail", decodedToken.mail);
            localStorage.setItem("phone", decodedToken.phone)
           }
            navigate('/profile');
            
          
          } else {
            alert('Échec de la connexion');
          }
        } catch (error) {
          alert('Une erreur est survenue : ' + error.message);
        }
      };
      

    //Visual Part//
return(<div className='mainLogin'>
    <title>Connexion</title>
    <div className="loginZone">
        <form action="" onChange={handleChange} onSubmit={handleLogin} >

            <label htmlFor="">Adresse E-mail:</label>
            <input className='loginInput' type="mail" name="mail" id="mail" required />
            <label htmlFor="">Mot de passe:</label>
            <input className='loginInput' type="password" name="password" id="password" required />
            <button id='loginButton'>Se Connecter</button>

        </form>
        
    </div>
    <p className='registerLink'>Pas encore inscrit ? <Link className='toRegister' to="/register">S'inscrire</Link></p>
</div>
);
}

export default Login;