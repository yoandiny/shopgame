import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './pages/nav';
import Home from './pages/home';
import Cart from './pages/cart';
import Profile from './pages/profile';
import Register from './pages/register';
import Login from './pages/login';
import { useState } from 'react';


function App() {
  const [loggedIn, setLoggedIn] = useState(()=> {
    const initialLoginState = localStorage.getItem("isLoggedIn") === "true";

  })

  return (

    <Router>
      <div className='body'>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
