import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './css/register.css';
import axios from 'axios';


function Register(){

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        mail: '',
        password: '',
    });

    const sendData = async(e) =>{
        try {
            const response = await axios.post("http://localhost:3001/register", e);
            alert(response.data);
        } catch (error) {
            alert(error);
        }
    }
    
    const HandleSubmit = async(e) => {
        e.preventDefault();
        if(formData.password === document.getElementById('rePassword').value){
            if(formData.password.length >= 6){
                sendData(formData);
                alert("Inscription confirmée");
                navigate('/login');
               
                
                
            }else{
                alert("Mot de passe trop court")
            }
        }else{
            alert('Les mots de passes ne sont pas identiques');
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


return(
    <div className='mainRegister'>
        <title>Inscription</title>
        <div className="registerZone">
            <form action="POST" onSubmit={HandleSubmit} onChange={handleChange} >
                <label htmlFor="username">Nom d'utilisateur:</label>
                <input className='formInput' type="text" name='username' value={formData.username} required />
                <label htmlFor="mail">Adresse E-mail:</label>
                <input className='formInput' type="mail" name="mail" id="mail" value={formData.mail} required />
                <label htmlFor="password">Mot de passe:</label>
                <input className='formInput' type="password" name="password" id="password" value={formData.password} required />
                <label htmlFor="rePassword">Re-taper votre Mot de passe:</label>
                <input className='formInput' type="password" name="rePassword" id="rePassword" required />
                <button id='submit' type='submit'  >S'inscrire</button>

            </form>
            
        </div>
        <p className='link'>Déjà inscrit ? <Link className='toLogin' to="/login">Se connecter</Link></p>
    </div>
    
);
}

export default Register;