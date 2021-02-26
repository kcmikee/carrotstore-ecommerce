import React from "react";
import { useSelector } from "react-redux";
import {BrowserRouter, Route,Link} from 'react-router-dom'
import CartScreen from "./screens/CartScreen";
import HomeScreen from './screens/Homescreen'
import ProductScreen from './screens/Productscreen'

function App() {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/" className="brand">
              CarrrotStore
            </Link>
          </div>
          <div>
            <Link to="/cart">
                Cart
                {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}    
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
            <Route path='/' component={HomeScreen} exact/>
            <Route path='/product/:id' component={ProductScreen}/>
            <Route path='/cart/:id?' component={CartScreen}/>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
