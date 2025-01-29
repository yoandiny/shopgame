import './css/home.css'
import Playstation from './img/playstation.jpg';
import Google from './img/google.jpg';
import vbuck from './img/vbucks.jpeg';
import cod from './img/cod.jpg';
import netflix from './img/netflix.jpg';
import psn10e from './img/psn/10e.jpg';
import gCard from './img/google/gCard.jpg';
import Banner from './img/adBanner/test.png';
import cod6 from './img/games/bo6.jpg';
import { useNavigate } from 'react-router-dom';
import cookie from 'js-cookie';


function Home(){
    //initiate part//
    const navigate = useNavigate();
    const loggedIn = cookie.get('loggedIn');

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
        <div className="allItem">
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
                <h3 className='itemText'>Carte Playstation</h3>
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
             
            <div className="googlePart">
            <h3 className='itemText'>Carte Google Play</h3>

            <div className="itemContainer">
                <div className="itemModel">
                    <img id='google' className='itemImg' src={gCard} alt="" />
                    <h3 className='itemName'>Carte Google Play - 10€</h3>
                    <p className='itemDesc'>Code digital</p>
                    <p className='itemPrice'><b>50.000Ar</b></p> 
                    <button onClick={onBuy} className='buyButton'>Acheter</button>
                </div>
                <div className="itemModel">
                    <img id='google' className='itemImg' src={gCard} alt="" />
                    <h3 className='itemName'>Carte Google Play - 15€</h3>
                    <p className='itemDesc'>Code digital</p>
                    <p className='itemPrice'><b>50.000Ar</b></p> 
                    <button onClick={onBuy} className='buyButton'>Acheter</button>
                </div>
                <div className="itemModel">
                    <img id='google' className='itemImg' src={gCard} alt="" />
                    <h3 className='itemName'>Carte Google Play - 25€</h3>
                    <p className='itemDesc'>Code digital</p>
                    <p className='itemPrice'><b>50.000Ar</b></p> 
                    <button onClick={onBuy} className='buyButton'>Acheter</button>
                </div>
                <div className="itemModel">
                    <img id='google' className='itemImg' src={gCard} alt="" />
                    <h3 className='itemName'>Carte Google Play - 50€</h3>
                    <p className='itemDesc'>Code digital</p>
                    <p className='itemPrice'><b>50.000Ar</b></p> 
                    <button onClick={onBuy} className='buyButton'>Acheter</button>
                </div>
                <div className="itemModel">
                    <img id='google' className='itemImg' src={gCard} alt="" />
                    <h3 className='itemName'>Carte Google Play - 100€</h3>
                    <p className='itemDesc'>Code digital</p>
                    <p className='itemPrice'><b>50.000Ar</b></p> 
                    <button onClick={onBuy} className='buyButton'>Acheter</button>
                </div>
            </div>
            <div className="adBanner">
                <img src={Banner} alt="" />
            </div>
            <div className="gamePart">
                <h3 className='itemText'>
                    Jeux tendances
                </h3>
                <div className="gameContainer">
                <div className="gameModel">
                    <img src={cod6} alt="Game" />
                    <h3 className='gameName'>Call of Duty Black Ops 6</h3>
                    <p className='platform'> PC</p>
                    <p className='gamePrice'><b>100.000Ar</b></p>
                    <button className='gameBuy'>Acheter</button>
                </div>
                <div className="gameModel">
                    <img src={cod6} alt="Game" />
                    <h3 className='gameName'>Call of Duty Black Ops 6</h3>
                    <p className='platform'> PC</p>
                    <p className='gamePrice'><b>100.000Ar</b></p>
                    <button className='gameBuy'>Acheter</button>
                </div>
                <div className="gameModel">
                    <img src={cod6} alt="Game" />
                    <h3 className='gameName'>Call of Duty Black Ops 6</h3>
                    <p className='platform'> PC</p>
                    <p className='gamePrice'><b>100.000Ar</b></p>
                    <button className='gameBuy'>Acheter</button>
                </div>
                <div className="gameModel">
                    <img src={cod6} alt="Game" />
                    <h3 className='gameName'>Call of Duty Black Ops 6</h3>
                    <p className='platform'> PC</p>
                    <p className='gamePrice'><b>100.000Ar</b></p>
                    <button className='gameBuy'>Acheter</button>
                </div>
                </div>
            </div>

        </div>
            
                
            </div>

        
        
        
        </div>
        
    </div>
    );
}

export default Home;