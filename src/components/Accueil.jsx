import React from 'react';

import './css/accueil.css'
import {Button, makeStyles} from '@material-ui/core';
import {Link} from "react-router-dom";

export function Accueil(props) {

    const classes = useStyles();

    return (
        <div id="accueil" className="accueil">
            <div className="left">
                <div className="maintext">
                    Petite phrase stylée ou qui vend nos produits
                </div>
                <div className="subtext">
                    <div className="text">
                        <p className="textvendeur">Petit texte ventant un peu la marque</p>
                        <p className="bioetc">100% bio // Home made // Made in France etc</p> 
                    </div>
                    <div className="buttons">
                    <Link to="/shop"><Button variant="contained" className={classes.btnprd} > Nos produits </Button></Link>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="topright">
                
                </div>
                <div className="bottomright">

                </div>
                <div className="floatimg">
                    
                </div>
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    btnprd: {
      backgroundColor : "#3e75f1",
      color: "#FFF"
      ,'&:hover': {
        backgroundColor: "#537fe4",
      },
    },
}));