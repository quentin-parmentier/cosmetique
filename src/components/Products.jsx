import React, { useState, useEffect } from 'react';
import {Product} from './reusablecomponents/Product';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';

import './css/products.css';
import search from '../img/svg/search.svg';

export function Products(props) {

    const classes = useStyles();

    const {setScreen} = props
    const [products,setProducts] = useState([])
    const [research, setResearch] = useState("")
    
    useEffect(function(){
        //fake getting data
        setProducts( [{  id: 1
                        ,name:"Masque couille"
                        ,price:"12"
                        ,img:"devantFlyer.jpg"
                        ,description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quas temporibus numquam labore nemo dolorem omnis porro animi qui corrupti accusantium, soluta doloremque et assumenda doloribus aperiam libero. Vitae, soluta."
                        ,composition:"Lorem, ipsum, dolor, sit, amet, consectetur"
                    },{   id: 2
                        ,name:"Masque Bite"
                        ,price:"12"
                        ,img:"devantFlyer.jpg"
                        ,description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quas temporibus numquam labore nemo dolorem omnis porro animi qui corrupti accusantium, soluta doloremque et assumenda doloribus aperiam libero. Vitae, soluta."
                        ,composition:"Lorem, ipsum, dolor, sit, amet, consectetur"
                    },{   id: 3
                        ,name:"Masque Oreille"
                        ,price:"12"
                        ,img:"devantFlyer.jpg"
                        ,description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quas temporibus numquam labore nemo dolorem omnis porro animi qui corrupti accusantium, soluta doloremque et assumenda doloribus aperiam libero. Vitae, soluta."
                        ,composition:"Lorem, ipsum, dolor, sit, amet, consectetur"
                    },{   id: 4
                        ,name:"Masque nez"
                        ,price:"12"
                        ,img:"devantFlyer.jpg"
                        ,description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quas temporibus numquam labore nemo dolorem omnis porro animi qui corrupti accusantium, soluta doloremque et assumenda doloribus aperiam libero. Vitae, soluta."
                        ,composition:"Lorem, ipsum, dolor, sit, amet, consectetur"
                    },{   id: 5
                        ,name:"Masque ViSaGe"
                        ,price:"12"
                        ,img:"devantFlyer.jpg"
                        ,description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quas temporibus numquam labore nemo dolorem omnis porro animi qui corrupti accusantium, soluta doloremque et assumenda doloribus aperiam libero. Vitae, soluta."
                        ,composition:"Lorem, ipsum, dolor, sit, amet, consectetur"
                    },{   id: 6
                        ,name:"Masque Pénis"
                        ,price:"12"
                        ,img:"devantFlyer.jpg"
                        ,description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quas temporibus numquam labore nemo dolorem omnis porro animi qui corrupti accusantium, soluta doloremque et assumenda doloribus aperiam libero. Vitae, soluta."
                        ,composition:"Lorem, ipsum, dolor, sit, amet, consectetur"
                    },{   id: 7
                        ,name:"Masque Suce"
                        ,price:"12"
                        ,img:"devantFlyer.jpg"
                        ,description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quas temporibus numquam labore nemo dolorem omnis porro animi qui corrupti accusantium, soluta doloremque et assumenda doloribus aperiam libero. Vitae, soluta."
                        ,composition:"Lorem, ipsum, dolor, sit, amet, consectetur"
                    }])
    },[])
        
    return (
        <>  
            <div className="searchbar">
                <TextField size="medium"  className={classes.searchBar} onChange={(e) => setResearch(e.target.value)} fullWidth variant="outlined" id="searchbar" value={research} margin="normal" InputProps={{endAdornment: <InputAdornment position="end"> <img src={search} alt="search" className="searchicon" /> </InputAdornment>, className: classes.searchInput }} />
            </div>
            <div className="products">
                {renderProducts()}
            </div>
        </>
    )

    function renderProducts(){
        
        return products.map((product) => normalizeString(product.name).search(normalizeString(research)) !== -1 ?<Product product={product} key={product.id} setScreen={setScreen} /> : null)
    }

    function normalizeString(str){
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    }
}

const useStyles = makeStyles((theme) => ({
    searchBar: {
      width: "50%",
      maxWidth: 500
    },
    searchInput: {
        height: 42
    }
}));