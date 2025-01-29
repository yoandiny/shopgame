import './css/nav.css';
import { Link } from 'react-router-dom';
import logo  from './img/logo.jpg';
import pdp from './img/pdp.jpg';
import cookie from 'js-cookie';
import { useEffect } from 'react';





function Nav() {

//Initiate Part
const loggedIn = cookie.get('loggedIn');
let userSection;


// Logic part

useEffect(() => {
  alert(loggedIn);
})

if(loggedIn === 'true'){
  userSection= (
    <li id='userConnected' >
      <Link to="/cart"><i id='cart' class='bx bx-cart'></i></Link>
      <Link to="/profile"><img id='profilePicture' className='profilePicture' src={pdp} alt="" /> </Link>
    </li>
  );
}else{
  userSection= (
    <li id='notConnected' ><Link to="/register">Se connecter/S'inscrire</Link></li>
  );
}

  

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
          {userSection}
        </section>
      </nav>

      <nav className='miniNav'>
      <ul className='upMenu'>
        <li ><p>Gaming <i class='bx bxs-down-arrow'></i></p>
          <ul id='underGaming' className='sousMenu'>
            <li><Link to="/gamePoints"> Monnaie InGame</Link></li>
            <li><Link to="/Games">Jeux</Link></li>
          </ul>
        
        </li>
        <li><p>Divertissement <i class='bx bxs-down-arrow'></i></p>
          <ul className='sousMenu'>
            <li><Link to="/Netflix">Cartes Netflix</Link></li>
            <li><Link to="/Crunchyroll">Cartes Crunchyroll</Link></li>
            <li><Link to="/DisneyP">Cartes Disney+</Link></li>
          </ul>
        
        </li>
        <li><Link to="/News">Actualité</Link></li>
      </ul>
      </nav>
    </div>

  
  );
}

export default Nav;

