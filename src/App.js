import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Product from './Components/Product';
import About from './Components/About';
import Header from './Components/Header';
import ProductIndex from './Components/ProductIndex';
import ProductDetails from './Components/ProductDetails';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Signin from './Components/Signin';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/home" element = {<Home/>}></Route>
        <Route path = "/about" element = {<About/>}></Route>
        <Route path = "/Product" element = {<Product/>}>
            <Route path ="/" element = {<ProductIndex/>}></Route>
            <Route path = "/:shoes_key" element = {<ProductDetails/>}></Route>
        </Route>
        <Route path = "/contact" element = {<Contact/>}></Route>
        <Route path = "/signin" element = {<Signin/>}></Route>
        <Route path = "*" element ={<NotFound/>}></Route>
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  );  
}

export default App;
