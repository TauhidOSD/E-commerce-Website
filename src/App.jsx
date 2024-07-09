import Navber from './Components/Navber/Navber'
import Hero from './Components/Hero/Hero'
import Product from './Components/Products/Product'
import AOS from "aos";
import "aos/dist/aos.css";

import React from 'react';
import TopProducts from './Components/TopProducts/TopProducts';
const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navber></Navber>
      <Hero></Hero>
      <Product></Product>
      <TopProducts></TopProducts>
    </div>
  )
}

export default App