import { Link } from 'react-router-dom';
import './css/register.css';

function register(){
return(
    <div className='mainRegister'>
        <title>Inscription</title>
        <div className="registerZone">
            <form action="">
                <label htmlFor="">Nom d'utilisateur:</label>
                <input className='formInput' type="text" name='username' required />
                <label htmlFor="">Adresse E-mail:</label>
                <input className='formInput' type="mail" name="mail" id="" required />
                <label htmlFor="">Mot de passe:</label>
                <input className='formInput' type="password" name="password" id="" required />
                <label htmlFor="">Re-taper votre Mot de passe:</label>
                <input className='formInput' type="password" name="Repassword" id="" required />
                <button id='submit'>S'inscrire</button>

            </form>
            
        </div>
        <p className='link'>Déjà inscrit ? <Link className='toLogin' to="/login">Se connecter</Link></p>
    </div>
    
);
}

export default register;