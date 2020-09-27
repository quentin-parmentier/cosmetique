import React, {useState} from 'react';
import {Accueil} from './Accueil';
import {Differences} from './Differences';
import {TopBar} from './TopBar';
import {Footer} from './Footer';
import {Newsletter} from './Newsletter';

import './css/onepage.css'
import logo from '../logo.svg';

export function OnePage(props) {

    const topMenu = [{name:"Accueil",link:"#accueil"},{name:"Nos valeurs", link:"#differences"},{name:"Nos produits",link:"/shop"}]
    const differences = [
        {text:"Consigne, ipsum dolor sit amet consectetur adipisicing elit. Laudantium delectus amet reiciendis qui iusto ad veritatis sit perferendis nihil assumenda quas voluptatem quaerat perspiciatis eius praesentium nam reprehenderit, modi neque?"
        ,logo:"logo.svg"},
        {text:"Bio//Conservateur, ipsum dolor sit amet consectetur adipisicing elit. Laudantium delectus amet reiciendis qui iusto ad veritatis sit perferendis nihil assumenda quas voluptatem quaerat perspiciatis eius praesentium nam reprehenderit, modi neque?"
        ,logo:"logo.svg"},
        {text:"Homemade/Local, ipsum dolor sit amet consectetur adipisicing elit. Laudantium delectus amet reiciendis qui iusto ad veritatis sit perferendis nihil assumenda quas voluptatem quaerat perspiciatis eius praesentium nam reprehenderit, modi neque?"
        ,logo:"logo.svg"}
    ]
    const [activeScreen,setActiveScreen] = useState("Accueil")

    return (
        <div>
            <TopBar logo={logo} logopath="#accueil" menu={topMenu} effectFunction={scrollingTopBar} activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
            <Accueil />
            <Differences differences={differences} size={200}/>
            <Newsletter />
            <Footer />
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