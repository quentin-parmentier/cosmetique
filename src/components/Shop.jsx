import React, { useState } from 'react';
import {Products} from './Products';
import {TopBar} from './TopBar';
import {Footer} from './Footer';
import {WatchProduct} from './WatchProduct';

import logo from '../logo.svg';

export function Shop(props) {
    const shopmenu = [{name:"Produits"},{name:"Commandes"}]
    const [activeScreen,setActiveScreen] = useState("Produits")
    const [focusedProduct, setFocusedProduct] = useState(null)

    return (
      <div>
          <TopBar logo={logo} logopath="/" menu={shopmenu} effectFunction={colorBar} activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
          {renderComponent()}
          <Footer />
      </div>
    );

    function renderComponent(){
      switch (activeScreen) {
        case "Produits":
          return(<Products setScreen={setScreen} />)

        case "WatchProduct":
          return(<WatchProduct product={focusedProduct} setScreen={setScreen} />)

        default:
          return(<Products setScreen={setScreen} />)
      }
    }

    function setScreen(product,screen){
      setFocusedProduct(product)
      setActiveScreen(screen)
    }

    function colorBar(){
      const navbar = document.querySelector('.leftop');
      navbar.classList.add('colored');
    }
}