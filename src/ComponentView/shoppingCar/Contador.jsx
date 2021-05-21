import React, { useState } from 'react'

import { Icon, InlineIcon } from '@iconify/react';
import trashCan from '@iconify-icons/akar-icons/trash-can';
import circleMinus from '@iconify-icons/akar-icons/circle-minus';
import circlePlus from '@iconify-icons/akar-icons/circle-plus';

import zapatohombremodelo2 from "../../Assets/productsMan/zapatohombremodelo2.png"


const Contador = () =>{
    const [numero, setNumero] = useState(1);
    const Aumentar = () =>{
        setNumero(numero + 1)
    }
    const Reducir = () =>{
        setNumero(numero - 1)
    }
    return (
        <div>
             <div className='container-product'>
        <img className='container-img' src={zapatohombremodelo2} alt="" />
        <div className='container-description'>
        <p>Zapato de hombre</p>
        <p>Talla Grande</p>
        <p>Color</p>
        <p>$250.00</p>
        <div className='container-cantidad'>
        <p className='numbers'>cantidad</p>
        <div>
        <Icon icon={circlePlus} onClick={Aumentar} color="#FF9F1C" />
        <p>{numero}</p>
        <Icon icon={circleMinus} onClick={Reducir} color="#FF9F1C" />
        </div>
        </div>
        </div>
        <Icon className='trash' icon={trashCan} color="#FF9F1C" />
        </div>
        </div>
    )
}

export default Contador