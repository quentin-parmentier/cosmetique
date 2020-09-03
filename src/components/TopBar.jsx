import React, { useEffect } from 'react';

import {Rubrique} from './Rubrique';
import { HashLink as Link } from 'react-router-hash-link';

import './css/top.css'

export function TopBar(props) {

    const {logo, logopath, menu, effectFunction, activeScreen, setActiveScreen} = props
    
    useEffect(function(){

        effectFunction();
        
    },[effectFunction])

    return (
        <div className="topbar">
            <div className="leftop">
            <Link to={logopath}> 
                <img src={logo} alt="Logo" className="logo" onClick={() => setActiveScreen({activeScreen})}/>
            </Link>
            </div>
            <div className="rightop colored">
                {
                    menu.map((title,key) => <Rubrique onClick={() => setActiveScreen(title.name)} key={key} title={title.name} link={title.link} active={title.name === activeScreen ? true : false} />)
                }   
            </div>
        </div>
    );
}