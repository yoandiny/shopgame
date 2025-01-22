import './css/login.css';
import { Link } from 'react-router-dom';

function login(){
return(<div className='mainLogin'>
    <title>Connexion</title>
    <div className="loginZone">
        <form action="">

            <label htmlFor="">Adresse E-mail:</label>
            <input className='loginInput' type="mail" name="mail" id="" required />
            <label htmlFor="">Mot de passe:</label>
            <input className='loginInput' type="password" name="password" id="" required />
            <button id='loginButton'>Se Connecter</button>

        </form>
        
    </div>
    <p className='registerLink'>Pas encore inscrit ? <Link className='toRegister' to="/register">S'inscrire</Link></p>
</div>
);
}

export default login;