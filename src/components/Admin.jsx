import React, { useState } from 'react';
import {TopBar} from './TopBar';
import {Products} from './Products';
import {SetProducts} from './SetProducts';
import {Differences} from './Differences';

import logo from '../logo.svg';

export function Admin() {
    
    const adminMenu = [{name:"Produits"},{name:"Commandes"}]
    const [activeScreen,setActiveScreen] = useState("Produits")
    const [focusedProduct, setFocusedProduct] = useState(null)

    return (
      <div>
          <TopBar logo={logo} logopath="/" menu={adminMenu} effectFunction={colorBar} activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
          {renderComponent()}
      </div>
    );

    function colorBar(){
      const navbar = document.querySelector('.leftop');
      navbar.classList.add('colored');
    }

    function renderComponent(){
      switch (activeScreen) {
        case "Produits":
          return(<Products setScreen={setScreen} />)

        case "SetProduit":
          return(<SetProducts product={focusedProduct} setScreen={setScreen} />)

        default:
          return(<Differences setScreen={setScreen} />)
      }
    }

    function setScreen(product,screen){
      setFocusedProduct(product)
      setActiveScreen(screen)
    }

}