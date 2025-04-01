import React from "react";
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import { Switch } from 'wouter';
import Home from './pages/Home/Home';
import Hair from './pages/Hair/Hair';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Header from "./component/Header/HeaderComponent";
import Footer from './component/Footer/FooterComponent';
import ProductDetail from './pages/Product/ProductDetail';

function App()  {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about-us' component={AboutUs}/>
        <Route path='/hair' component={Hair}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/hair/:id' component={ProductDetail}/>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;