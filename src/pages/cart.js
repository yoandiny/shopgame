import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Cart(){
//Initiate PArt//
const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem("isLogged")){
            navigate('/login');
        }
    })

    return(
        <div>
            <title>Panier</title>
        </div>
    );
}

export default Cart;
