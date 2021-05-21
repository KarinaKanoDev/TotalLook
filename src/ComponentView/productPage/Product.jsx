import React from 'react';

import {Footer} from '../generalComponents/Footer'
import {Header} from '../generalComponents/Header'
import {Modal} from '../productPage/Modal'
import { ProductContainer } from './ProductContainer';


// import { Icon, InlineIcon } from '@iconify/react';
// import searchIcon from '@iconify-icons/fa-solid/search';


export const Product = ({product}) => {

    return(

        <div className="productsContainer">
            <Header />
            <Modal />
            <h1>I am Product</h1>
            <div className='productsTitle'> 
                <p> Productos </p>
                <input type='text' className='searchBar' placeholder='buscar'></input>
            </div>
            <div className='productComponents'>
            <ProductContainer/>
            <ProductContainer/>
            <ProductContainer/>
            </div>
            <Footer />

        </div>

    )
    
}