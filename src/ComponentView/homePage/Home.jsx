import React, { useEffect, useState } from 'react';


import {Footer} from '../generalComponents/Footer'
import {Header} from '../generalComponents/Header'
import {Promo} from './Promo'
import {Navar} from './Navar'
// import {Carrousel} from '../homePage/Carrousel'

export function Home() {

    const [product, setProduct] = useState()
    const [productPromo, setProductPromo] = useState()

    const handleGetData = async () => {
        let url = 'http://localhost:3000/product';
        let getFetchData = await fetch(url).then(resul => resul.json())
        setProduct(getFetchData)
    }

    const handleGetPromoData = async () => {
        let url = 'http://localhost:3000/promotions';
        let getFetchData = await fetch(url).then(resul => resul.json())
        setProductPromo(getFetchData)

    }
    console.log(product)

    useEffect(() => {

        handleGetData()
        handleGetPromoData()

    }, [])
    
    return(
        <div>
            <Header />
            <Navar />

            {/* <Carrousel/> */}
            <div>

                <Promo />
                {productPromo && productPromo.map(item =>
                    
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
