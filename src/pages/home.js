import './css/home.css'
import Playstation from './img/playstation.jpg';
import Google from './img/google.jpg';
import vbuck from './img/vbucks.jpeg';
import cod from './img/cod.jpg';
import netflix from './img/netflix.jpg';
import psn10e from './img/psn/10e.jpg';
import { useNavigate } from 'react-router-dom';


function Home({loggedIn}){
    //initiate part//
    const navigate = useNavigate();

    //Logic Part
    function onBuy(){
        if(loggedIn){
            alert("Ajouté au panier")
        }else{
            navigate('/register');
            alert("Veuillez vous connectez");
        }
    }

    //Visual part
    return(
    <div className='main'>
        <title>ShopGame Madagascar</title>
       <div className='promo'>
        <img src={cod} alt="" />
       </div>
        <div className="popular">
        <h2 >Catégories populaire</h2>
        <div className="categContainer">

            <div className="categModel">
                <img src={Playstation} alt="" />
            </div>
            <div className="categModel">
                <img src={Google} alt="" />
            </div>
            <div className="categModel">
                <img src={vbuck} alt="" />
            </div>
            <div className="categModel">
                <img src={netflix} alt="" />
            </div>
            

        </div>
        <div className="psnLine">
                <h3>Carte Playstation</h3>
        <div className="itemContainer">
        <div className="itemModel">
                    <img className='itemImg' src={psn10e} alt="" />
                    <h3 className='itemName'>Carte PSN - 10€</h3>
                    <p className='itemDesc'>Code digital</p>
                    <p className='itemPrice'><b>50.000Ar</b></p> 
                    <button onClick={onBuy} className='buyButton'>Acheter</button>
                </div>
                <div className="itemModel">
                    <img className='itemImg' src={psn10e} alt="" />
                    <h3 className='itemName'>Carte PSN - 10€</h3>
                    <p className='itemDesc'>Code digital</p>
                    <p className='itemPrice'><b>50.000Ar</b></p> 
                    <button onClick={onBuy} className='buyButton'>Acheter</button>
                </div>
                <div className="itemModel">
                    <img className='itemImg' src={psn10e} alt="" />
                    <h3 className='itemName'>Carte PSN - 10€</h3>
                    <p className='itemDesc'>Code digital</p>
                    <p className='itemPrice'><b>50.000Ar</b></p> 
                    <button onClick={onBuy} className='buyButton'>Acheter</button>
                </div>
                <div className="itemModel">
                    <img className='itemImg' src={psn10e} alt="" />
                    <h3 className='itemName'>Carte PSN - 10€</h3>
                    <p className='itemDesc'>Code digital</p>
                    <p className='itemPrice'><b>50.000Ar</b></p> 
                    <button onClick={onBuy} className='buyButton'>Acheter</button>
                </div>
                <div className="itemModel">
                    <img className='itemImg' src={psn10e} alt="" />
                    <h3 className='itemName'>Carte PSN - 10€</h3>
                    <p className='itemDesc'>Code digital</p>
                    <p className='itemPrice'><b>50.000Ar</b></p> 
                    <button onClick={onBuy} className='buyButton'>Acheter</button>
                </div>
        </div>
                
            </div>

        
        
        
        </div>
        
    </div>
    );
}

export default Home;