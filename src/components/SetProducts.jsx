import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import './css/setproducts.css';
import { useState } from 'react';


export function SetProducts(props) {

    const classes = useStyles();
    const {product,setScreen} = props
    const [productControll, setProduct] = useState(product)

    return (
        <div className="setproducts">
            <h2 className="h2product"> Modifier le produit : {product.name}</h2>
            <form className="formProducts"> 
                <TextField onChange={(e) => setProduct({...productControll, name:e.target.value})} required className={classes.textField} variant="outlined" id="name" label="Name" value={productControll.name} margin="normal" />
                <TextField onChange={(e) => setProduct({...productControll, price:e.target.value})} className={classes.textField} label="Prix" id="prix" type="number" value={productControll.price} InputProps={{endAdornment: <InputAdornment position="end">€</InputAdornment> }} variant="outlined" margin="normal" />
                <TextField onChange={(e) => setProduct({...productControll, composition:e.target.value})} className={classes.textField} variant="outlined" id="composition" multiline rows={2} label="Composition" value={productControll.composition} fullWidth margin="normal" />
                <TextField onChange={(e) => setProduct({...productControll, description:e.target.value})} className={classes.textField} variant="outlined" id="description" multiline rows={4} label="Description" value={productControll.description} fullWidth margin="normal" />
                <Button variant="contained" className={classes.btnprd} onClick={() => enregistrer()}> Modifier </Button>
            </form>
            
        </div>
    )

    function enregistrer(){
        //Ajax update

        setScreen(null,"Produits")
    }
}

const useStyles = makeStyles((theme) => ({
    textField: {
      marginRight: 16
    },
    btnprd: {
        backgroundColor : "#3e75f1",
        height: 36,
        color: "#FFF"
        ,'&:hover': {
          backgroundColor: "#537fe4",
        },
    },
}));