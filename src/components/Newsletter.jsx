import React, { useRef, useState } from 'react';

import { Button, makeStyles } from '@material-ui/core';
import {validateEmail} from '../functions/validateEmail.js';

import './css/newsletter.css'

export function Newsletter() {

    const classes = useStyles();
    const refMail = useRef("");
    const [error,setError] = useState("")

    return (
      <div id="newsletter" className="newsletter">
        <div className="textnewsletter flexcol flexcenter">
            <p className="titlenewsletter">Inscription à notre newsletter</p>
            <p className="subtxtnewsletter">Promotions, nouveaux produits et soldes. Directement dans votre boîte de réception.</p>
            <hr className="separator" />
        </div>
        <div id="inputnewsletter">
            <input type="text" className="newsletterinput" placeholder="Votre e-mail" ref={refMail} />
            <Button variant="contained" className={classes.btnprd} onClick={() => register()}> S'inscrire </Button>
        </div>
        {error !== "" ? <div className="error">
            {error}
        </div> : null}
      </div>
    );

    function register(){
        let isvalid = validateEmail(refMail.current.value)
        isvalid ? setError("") : setError("Veuillez renseigner un e-mail valide !")
    }
}

const useStyles = makeStyles((theme) => ({
    btnprd: {
      backgroundColor : "#3e75f1",
      color: "#FFF"
      ,'&:hover': {
        backgroundColor: "#537fe4",
        padding: '0px 20px'
      },
    },
}));