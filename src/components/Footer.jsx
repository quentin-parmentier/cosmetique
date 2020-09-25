import React from 'react';
//import { HashLink as Link } from 'react-router-hash-link';

import './css/footer.css'

export function Footer(props) {

    return (
        <div className="footer">
            <div className="footerpart" id="entreprise"> Logo + blabla SEO + description entreprise </div>
            <div className="footerpart" id="lienuser">Produits // Support ou nous contacter // Prix // FAQ </div>
            <div className="footerpart" id="lienentreprise">CGV // About us ou Mention legales // Nos engagements </div>
            <div className="footerpart" id="contact"> icon + val : Nancy//email//Tel ? // Réseau sociaux icons</div>
        </div>
    );
}





/**
<Link to={logopath}> 
    <img src={logo} alt="Logo" className="logo" onClick={() => setActiveScreen({activeScreen})}/>
</Link>
**/