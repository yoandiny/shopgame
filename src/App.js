import {BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './pages/nav';
import Home from './pages/home';
import Cart from './pages/cart';
import Profile from './pages/profile';
import Register from './pages/register';
import Login from './pages/login';
import { useEffect } from 'react';
import cookie from 'js-cookie';




function App() {

//Initiate Part
cookie.set('loggedIn', false);

useEffect(() => {
 
})

// Logic part

//Visual PArt
  return (
    <Router>
      <div className='body'>
        <link href="https://unpkg.com/boxicons/css/boxicons.min.css" rel="stylesheet"/>
       <Nav />

     </div>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/profile' element={<Profile/>}/>
     <Route path='/register' element={<Register/>} />
     <Route path='/login' element={<Login/>} />
   </Routes>

    </Router>
      
     

  );
}

export default App;
