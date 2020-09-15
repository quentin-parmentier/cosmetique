import React from 'react';
import {ArrowBack} from '@material-ui/icons';
import { Button,Select, MenuItem } from '@material-ui/core';


import './css/watchproduct.css';

export function WatchProduct(props) {

    const {product,setScreen} = props
    const images = require.context("../img/products", true);
    let productImg = images('./' + product.img);
    const [qte, setQte] = React.useState(1);

    return (
        <div id="product">
            <div onClick={(e) => goBack(e)} id="back">  <ArrowBack />  <p id="backtxt">Retour</p></div>
            <div id="divproduit">
                <div id="leftproduit">
                    <img alt={"photo"+product.name} className="imgwatchProduct" src={productImg} />
                </div>
                <div id="rightproduit">
                    <div id="nomproduit">{product.name} - {product.volume} ml</div>
                    <div id="prixproduit">{product.price} €</div>
                    <div id="descriptionproduit">{product.description}</div>
                    <div id="compoproduit"><span className="medium">Ingrédient :</span> {product.composition}</div>
                    <div id="compoproduit">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={qte}
                            onChange={(e) => setQte(e.target.value)}
                            renderValue={(value) => `Quantité : ${value}`}
                            >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                        </Select>
                    </div>
                    <div id="addtocartproduit"><Button fullWidth={true} variant="contained" className="addTocart">Ajouter au panier</Button></div>
                </div>
            </div>
        </div>
    )

    function goBack(e){
        e.stopPropagation();
        setScreen(null,"Produits")
    }

    function addToCart(e){
        e.stopPropagation();
    }
}