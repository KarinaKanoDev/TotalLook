import React, { useState }from 'react';
import Contador from './Contador'

import {Footer} from '../generalComponents/Footer'
import {Header} from '../generalComponents/Header'

export function ShoppingCar() {
    
    return(
        
        <div className='main-container'>
            
            <div className='main-container2'>
            <Header />
            <div className="container-categorias">
            <p className='categories'>Hombre</p>
            <p className='categories'>Mujer</p>
            </div>
            <div className='container-compras'>
            <p className=''>TU CARRITO DE COMPRAS</p>
            </div>
           
        
       <Contador/>

        <div className='container-total'>
            <p className='PTotal'>Total</p>
            {/* <p className='PTotal'>${
             numero * 250 
            }.00 </p> */}
        </div>

        <button className='boton-comprar'>Comprar</button>
        </div>
            <Footer />
        </div>

    )
    
}