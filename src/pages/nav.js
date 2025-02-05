import './css/nav.css';
import { Link } from 'react-router-dom';
import logo  from './img/logo.jpg';
import pdp from './img/pdp.jpg';
import cookie from 'js-cookie';
import { useEffect } from 'react';
import {useAppContext} from '../Appcontext';





function Nav() {

//Initiate Part



// Logic part

useEffect(() => {
  
})



  

//Visual PArt
  return (
      <div className='mainNav'>
      
      <link href="https://unpkg.com/boxicons/css/boxicons.min.css" rel="stylesheet"/>

    
      <nav className="topMenu">
        <section className ="navLeft">
        <li className="logoContainer"><Link to="/"><img className="logo" src={logo} alt='' /> </Link> <h3>ShopGame MG</h3></li>

        </section>
        <section className ="middle">
        <input className='searchBar' type="text" placeholder='Votre recherche' />
        <i id='loupe' className='bx bx-search-alt-2'></i>
        </section>
        <section className ="navRight">
         <li></li>
         <li> <Link to="/cart"><i id='cart' class='bx bxs-cart'></i></Link></li>
         <li> <Link to="/profile"><i id='profile' class='bx bxs-user'></i></Link></li>
        </section>
      </nav>

    </div>

  
  );
}

export default Nav;

