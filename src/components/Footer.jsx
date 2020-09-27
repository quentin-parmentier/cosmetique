import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {RoomTwoTone,EmailTwoTone,Instagram,Facebook,Twitter} from '@material-ui/icons';

import './css/footer.css'
import logosociety from '../img/svg/logo1.svg';


export function Footer(props) {

    return (
        <div className="footer">
            <div className="footerpart" id="entreprise">
                <div id="logofooter"><img src={logosociety} alt="logo entreprise" id="logoentreprise"/></div>
                <div id="entreprisetextfooter"> description entreprise Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit laborum voluptate alias excepturi possimus, in vel repudiandae, expedita sed, rem quidem. </div>
            </div>
            <div className="footerpart" id="lienuser">
                <h2 className="titlefooter">E-shop :</h2>
                <ul>
                    <li className="listefooter">
                        <Link to='/shop'> 
                            Nos produits
                        </Link>
                    </li>
                    <li className="listefooter">
                        <Link to='/nouscontacter'> 
                            Nous contacter
                        </Link>
                    </li>
                    <li className="listefooter">
                        <Link to='nosprix'> 
                            Nos prix
                        </Link>
                    </li>
                    <li className="listefooter">
                        <Link to='/faq'> 
                            FAQ
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="footerpart" id="lienentreprise">
                <h2 className="titlefooter">Nous :</h2>
                <ul>
                    <li className="listefooter">
                        <Link to="/cgv">CGV</Link>
                    </li>
                    <li className="listefooter">
                        <Link to="/mentionlegale">Mention legales</Link>
                    </li>
                    <li className="listefooter">
                        <Link to="/nosengagements">Nos engagements</Link>
                    </li>
                </ul> 
            </div>
            <div className="footerpart" id="contact">
                <ul>
                    <li className="listefooter iconfooter flexcenter flexcol"><RoomTwoTone  className="p3" color="primary"/> Nancy</li>
                    <li className="listefooter iconfooter flexcenter flexcol"><EmailTwoTone className="p3"  /> cosmetic@gmail.com</li>
                    <li className="listefooter iconfooter socialicons flex">
                        <a href="" target='_blank'><Facebook /></a>
                        <a href="" target='_blank'><Twitter /></a>
                        <a href="" target='_blank'><Instagram /></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}





/**
<Link to={logopath}> 
    <img src={logo} alt="Logo" className="logo" onClick={() => setActiveScreen({activeScreen})}/>
</Link>
**/