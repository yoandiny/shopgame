import './css/login.css';
import { Link, useNavigate } from 'react-router-dom';
import cookie from 'js-cookie';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Login(){
    //Initiate Part//
    const loggedIn = cookie.get('loggedIn');
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({
        mail: '',
        password: '',
    })

    //Logic Part//
    useEffect(() => {
        if(loggedIn === 'true'){
            navigate('/profile');
        }
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginForm({ ...loginForm, [name]: value });
      };

    const handleLogin = () =>{
        axios.post("http://localhost:3001/login", loginForm)
        .then((response) => {
            if(response.data === true){
                alert("Connected")
            }
        })
    }

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