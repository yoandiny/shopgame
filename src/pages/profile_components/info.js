import pdp from '../img/pdp.jpg';
import '../css/info.css'
import { useEffect, useState } from 'react';


function Info(){

     const [userInfo, setUserInfo] = useState({
        username: localStorage.getItem('username'),
        mail: localStorage.getItem('mail'),
        phone: localStorage.getItem("phone")
     });

     //Logic part//
         
         useEffect(()=>{

         })
    

    return(
        <section className='info'>
                        <div className="profilePic">
                            <img className='pdp' src={pdp} alt="" />

                        </div>
                        <div className="infoPart">
                            <form className='infoForm' action="">
                                <section className='usernameForm'>
                                    <input type="text" name="profileUsername" id="profileUsername" value={userInfo.username} />
                                </section>
                                <section className='mailForm'>
                                <input type="email" name="profileMail" id="profileMail" value={userInfo.mail} />
                                </section>
                                <section className='phoneForm'>
                                    <input type="tel" name="profileNum" id="profileNum" value={userInfo.phone} />
                                </section>
                            </form>
                        </div>
                       
                       </section>
    );
}

export default Info;