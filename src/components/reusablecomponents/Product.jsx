import React from 'react';

import '../css/product.css';
import {Button, makeStyles} from '@material-ui/core';

export function Product(props) {

    const {product,setScreen} = props
    const images = require.context("../../img/products", true);
    let img = images('./' + product.img);

    const classes = useStyles();

    return (
        <div className="product" onClick={() => setScreen(product,"Produit")}>
            <div className="rectoProduct">
                <div className="divImgProduct">
                    <img alt={"phto"+product.name} className="imgProduct" src={img} />
                </div>
                <div className="divBottomProduct">
                    <div className="presentation">
                        <div className="name">
                            {product.name}
                        </div>
                        <div className="price">
                            {product.price} €
                        </div>
                    </div>
                    <div className="buyit">
                        {renderButton()}
                    </div>
                </div>
            </div>

            <div className="versoProduct">
                <p className="descriptionProduct" >{product.description}</p>
                <p className="compositionProduct" > <b>Ingrédients</b> : {product.composition}</p>
            </div>
        </div>
    )

    function renderButton(){
        const admin = true;

        switch (admin) {
            case true:
                return <Button variant="contained" className={classes.btnprd} onClick={(e) => modifier(e)}> Modifier </Button>
        
            default:
                return <Button variant="contained" className={classes.btnprd} onClick={(e) => addToCart(e)}> Ajouter au panier </Button>
        }
    }

    function modifier(e){
        e.stopPropagation();
        setScreen(product,"SetProduit")
    }

    function addToCart(e){
        e.stopPropagation();
    }
}

const useStyles = makeStyles((theme) => ({
    btnprd: {
      backgroundColor : "#3e75f1",
      height: 36,
      color: "#FFF"
      ,'&:hover': {
        backgroundColor: "#537fe4",
      },
    },
}));