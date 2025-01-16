import './App.css';
import { Routes,Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './components/LoginPopUp/LoginPopup';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home/Home';
import PlaceOrder from './components/Pages/PlaceOrder/PlaceOrder'
import Cart from './components/Pages/Cart/Cart'
import Verify from './components/Pages/Verify/Verify';
import MyOrder from './components/Pages/MyOrder/MyOrder';

function App() {

    const [showLogin,setShowLogin] = useState(false);

return(<>
        {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      <div className='app'>
          <Navbar setShowLogin={setShowLogin}/>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/order' element={<PlaceOrder/>}></Route>
              <Route path='/verify' element={<Verify/>}></Route>
              <Route path='/myorders' element={<MyOrder/>}></Route>
          </Routes>
      </div>
      <Footer/>
  </>
  )
}

export default App;
