
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CheckoutForm from "./pages/CheckoutForm";
import Success from "./pages/Success";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";



import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  redirect,
  Navigate,
  useNavigate,
} from "react-router-dom";



const App = () => {
  const user = true;
  //const navigate = useNavigate();


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login />}/>
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register />}/>

        
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkoutform" element={<CheckoutForm />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;