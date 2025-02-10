import { useEffect, useState } from 'react';
import pdp from '../img/pdp.jpg';
import '../css/overview.css'


function Overview (){
    //Initiate part//
    const [username, setUserName] = useState("");


    //Logic part//
    
    useEffect(()=>{
        handleUserName();
    })

    const handleUserName = () =>{
        const stockedUserName = localStorage.getItem("username")
        setUserName(stockedUserName);
    }

    

    //Return part//

return(
    <section className='overview'>
                <div className="profilePic">
                    <img className='pdp' src={pdp} alt="" />
                    <h3>Nom d'Utilisateur: {username} </h3>
                </div>
                <div className="orderView">
                    <span className='proccedOrder'>
                        <h3>Commandes reçu</h3>
                    </span>
                    <span className='waitingOrder'>
                        <h3>Commandes en attente</h3>
                    </span>
                </div>
               </section>
);
}

export default Overview;