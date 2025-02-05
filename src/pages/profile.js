import cookie from 'js-cookie';
import axios from 'axios';
import { useEffect } from 'react';
function Profile(){


useEffect(()=>{
    
})

const handleLogout = async() =>{
    axios.post("http://localhost:3001/logout").then((res) => {console.log(res)});
}
    return(
        <div>
            <title>Profil</title>

            <button onClick={handleLogout}>Se déconnecter</button>
        </div>
    );
}


export default Profile;