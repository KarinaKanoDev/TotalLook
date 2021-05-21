import React from 'react';

import {Footer} from '../generalComponents/Footer'
import {Header} from '../generalComponents/Header'
import {Modal} from '../productPage/Modal'

// import { Icon, InlineIcon } from '@iconify/react';
// import searchIcon from '@iconify-icons/fa-solid/search';


export const Product = ({product}) => {

    return(

        <div className="productsContainer">
            <Header />
            <Modal />
            <div className='productsTitle'> 
                <p> Productos </p>
                <input type='text' className='searchBar' placeholder='buscar'></input>
            </div>
        <div className='productsElementContainer'>
            <div className='productCard'>
            <div className='productsElementImage'>
                <img className='productImg' src='./sampleImage/ropamujermodelo1.png' alt='ropa'/>
                <div className='productsElementName'>Blusa </div>
                <div className='productsElementPrice'> $400 </div>
            </div>
            </div>

            <div className='productCard'>
            <div className='productsElementImage'>
                <img className='productImg' src='./sampleImage/ropamujermodelo2.png' alt='ropa'/>
                <div className='productsElementName'>Blusa </div>
                <div className='productsElementPrice'> $400 </div>
            </div>
            </div>

            <div className='productCard'>
            <div className='productsElementImage'>
                <img className='productImg' src='./sampleImage/ropamujermodelo3.png' alt='ropa'/>
                <div className='productsElementName'>Blusa </div>
                <div className='productsElementPrice'> $400 </div>
            </div>
            </div>
            <div className='productCard'>
            <div className='productsElementImage'>
                <img className='productImg' src='./sampleImage/ropamujermodelo1.png' alt='ropa'/>
                <div className='productsElementName'>Blusa </div>
                <div className='productsElementPrice'> $400 </div>
            </div>
            </div>

            <div className='productCard'>
            <div className='productsElementImage'>
                <img className='productImg' src='./sampleImage/ropamujermodelo2.png' alt='ropa'/>
                <div className='productsElementName'>Blusa </div>
                <div className='productsElementPrice'> $400 </div>
            </div>
            </div>

            <div className='productCard'>
            <div className='productsElementImage'>
                <img className='productImg' src='./sampleImage/ropamujermodelo3.png' alt='ropa'/>
                <div className='productsElementName'>Blusa </div>
                <div className='productsElementPrice'> $400 </div>
            </div>
            </div>
            <div className='productCard'>
            <div className='productsElementImage'>
                <img className='productImg' src='./sampleImage/ropamujermodelo1.png' alt='ropa'/>
                <div className='productsElementName'>Blusa </div>
                <div className='productsElementPrice'> $400 </div>
            </div>
            </div>

            <div className='productCard'>
            <div className='productsElementImage'>
                <img className='productImg' src='./sampleImage/ropamujermodelo2.png' alt='ropa'/>
                <div className='productsElementName'>Blusa </div>
                <div className='productsElementPrice'> $400 </div>
            </div>
            </div>

            <div className='productCard'>
            <div className='productsElementImage'>
                <img className='productImg' src='./sampleImage/ropamujermodelo3.png' alt='ropa'/>
                <div className='productsElementName'>Blusa </div>
                <div className='productsElementPrice'> $400 </div>
            </div>
            </div>
        </div>
            <Footer />

        </div>

    )
    
}