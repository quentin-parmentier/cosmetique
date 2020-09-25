import React from 'react';
import {ArrowBack} from '@material-ui/icons';
import { Button } from '@material-ui/core';
import {Differences} from './Differences';
import {NumberSelect} from './reusablecomponents/NumberSelect';


import './css/watchproduct.css';

export function WatchProduct(props) {

    const {product,setScreen} = props
    const images = require.context("../img/products", true);
    let productImg = images('./' + product.img);
    const [qte, setQte] = React.useState(1);
    const rangeqte = [{val:1,txt:"1"},{val:2,txt:"2"},{val:3,txt:"3"},{val:4,txt:"4"},{val:5,txt:"5"},{val:6,txt:"6"},{val:7,txt:"7"},{val:8,txt:"8"},{val:9,txt:"9"}]

    const differences = [
        {text:""
        ,logo:"logo.svg"},
        {text:""
        ,logo:"logo.svg"},
        {text:""
        ,logo:"logo.svg"}
    ]

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
                    <div id="quantiteproduit">
                        <NumberSelect 
                            tabrange= {rangeqte}
                            textrender= "Quantité : "
                            defaultValue= {qte}
                            setValue={setQte}
                        />
                    </div>
                    <div id="addtocartproduit"><Button fullWidth={true} variant="contained" className="addTocart">Ajouter au panier</Button></div>
                </div>
            </div>
            <div id="reassurance">
                <Differences differences={differences} size={150}/>
            </div>
            <div id="msgrappel">
                <h2 id="consignetitle"> Nos engagements </h2>
                <div id="consigne">
                    Notre engagement ecoresponsable est complet et fonctionne sur <b>TOUS</b> nos articles ! 
                    <br/>
                    <p className="subtitleproduct">Consigne :</p>
                    En nous ramenant votre flacon, vous aurez une réduction de <b>{product.consigne} €</b> pour votre prochaine commande et ainsi ne payer que le produit.
                    <br/>
                    <p className="subtitleproduct">Pas de surplus :</p>
                    Pour éviter tous surplus de production, nous créons sur place vos produits à l'arrivée de votre commande.
                    <br />
                    <p className="subtitleproduct">Bio et responsable :</p>
                    Et pour respecter votre corps et la planète, nous n'utilisons que des ingrédients BIO et non "contreversés" ni "pas terrible" selon l'<a href="https://incibeauty.com/ingredients" target="_blank">INCI Beauty</a>.
                </div>
            </div>
            {/*<div id="ventecomplementaire"></div>*/}
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