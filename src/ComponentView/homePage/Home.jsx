import React, { useEffect, useState } from 'react';


import {Footer} from '../generalComponents/Footer'
import {Header} from '../generalComponents/Header'
import {Promo} from './Promo'
import {Navar} from './Navar'
import {Carrousel} from '../homePage/Carrousel'

export function Home() {

    const [product, setProduct] = useState()

    const handleGetData = async () => {

        let url = 'http://localhost:3000/product';
        let getFetchData = await fetch(url).then(resul => resul.json())
        setProduct(getFetchData)
    }

    useEffect(() => {

        handleGetData()

    }, [])
    
    return(
        <div>
            <Header />
            <Navar />

            <Carrousel/>
            <h1>I am Home P.</h1>
            <div>
                {product && product.map(item =>
                    
                    <Promo 
                        item={item}
                        key={item._id}
                    />

                )}
            </div>
            <Footer />
        </div>

    )
    
};
