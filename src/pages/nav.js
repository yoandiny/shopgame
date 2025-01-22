import './css/nav.css';
import { Link } from 'react-router-dom';
import logo  from './img/logo.jpg';
import pdp from './img/pdp.jpg';





function Nav({loggedIn}) {

//Initiate Part


// Logic part


  const change = {
    display: loggedIn ?'block':'none'
  };

  const reChange = {
    display: loggedIn ?'none':'block'
  };

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
        
        <li style={change}><Link to="/cart"><i id='cart' class='bx bx-cart'></i></Link></li>
        <li><Link to="/profile"><img style={change} className='profilePicture' src={pdp} alt="" /> </Link> <Link style={reChange} to="/register">Se connecter/S'inscrire</Link></li>
        
        </section>
      </nav>

      <nav className='miniNav'>
      <ul className='upMenu'>
        <li ><p>Gaming <i class='bx bxs-down-arrow'></i></p>
          <ul id='underGaming' className='sousMenu'>
            <li><Link to="/giftCard">Cartes cadeaux</Link></li>
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

