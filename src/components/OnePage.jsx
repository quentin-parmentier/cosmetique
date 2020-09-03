import React, {useState} from 'react';
import {Accueil} from './Accueil';
import {Differences} from './Differences';
import {TopBar} from './TopBar';
import {Newsletter} from './Newsletter';

import './css/onepage.css'
import logo from '../logo.svg';

export function OnePage(props) {

    const topMenu = [{name:"Accueil",link:"#accueil"},{name:"Nos valeurs", link:"#differences"},{name:"Nos produits",link:"/shop"}]
    const [activeScreen,setActiveScreen] = useState("Accueil")

    return (
        <div>
            <TopBar logo={logo} logopath="#accueil" menu={topMenu} effectFunction={scrollingTopBar} activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
            <Accueil />
            <Differences />
            <Newsletter />
        </div>
    );

    function scrollingTopBar(){
        const navbar = document.querySelector('.leftop');
        const heigth = window.getComputedStyle(document.querySelector(".maintext")).height;
        const integerHeight = parseInt(heigth.substr(0,heigth.length-2))
    
        window.onscroll = () => {
            if (window.scrollY > integerHeight ) {
                navbar.classList.add('colored');
            } else {
                navbar.classList.remove('colored');
            }
        };
    }
}