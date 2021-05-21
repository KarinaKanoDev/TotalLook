import React from 'react';
import zapatohombremodelo2 from "../../Assets/productsMan/zapatohombremodelo2.png"
import zapatohombremodelo3 from "../../Assets/productsMan/zapatohombremodelo3.png"

import { Icon, InlineIcon } from '@iconify/react';
import trashCan from '@iconify-icons/akar-icons/trash-can';
import circleMinus from '@iconify-icons/akar-icons/circle-minus';
import circlePlus from '@iconify-icons/akar-icons/circle-plus';


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
            <div className='container-product'>
        <img className='container-img' src={zapatohombremodelo3} alt="" />
        <div className='container-description'>
        <p>Zapato de hombre</p>
        <p>Talla Grande</p>
        <p>Color</p>
        <p>$250.00</p>
        <div className='container-cantidad'>
        <p>cantidad</p>
        <div>
        <Icon icon={circlePlus} color="#FF9F1C" />
        <input className='numbers' type="number"/>
        <Icon icon={circleMinus} color="#FF9F1C" />
        </div>
        </div>
        </div>
        <Icon className='trash' icon={trashCan} color="#FF9F1C" />
        </div>
        
        <div className='container-product'>
        <img className='container-img' src={zapatohombremodelo2} alt="" />
        <div className='container-description'>
        <p>Zapato de hombre</p>
        <p>Talla Grande</p>
        <p>Color</p>
        <p>$250.00</p>
        <div className='container-cantidad'>
        <p>cantidad</p>
        <div>
        <Icon icon={circlePlus} color="#FF9F1C" />
        <input className='numbers' type="number"/>
        <Icon icon={circleMinus} color="#FF9F1C" />
        </div>
        </div>
        </div>
        <Icon className='trash' icon={trashCan} color="#FF9F1C" />
        </div>

        <div className='container-total'>
            <p className='PTotal'>Total</p>
            <p className='PTotal'>$500.00</p>
        </div>

        <button className='boton-comprar'>Comprar</button>
        </div>
            <Footer />
        </div>

    )
    
}