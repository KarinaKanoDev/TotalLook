import React, { useState }from 'react';
import Contador from './Contador'

import {Footer} from '../generalComponents/Footer'
import {Header} from '../generalComponents/Header'

export function ShoppingCar() {
    
    const productsCar = [
        {
          "_id": 1,
          "name": "Blusa",
          "category":  "Clothes",
          "gender": "Women",
          "colors": ["verde"],
          "size":{"sizeS": "s", "sizeM":"m", "sizel":"l"},
          "img": {"modelo":"https://raw.githubusercontent.com/KarinaKanoDev/TotalLook/master/src/Assets/productsWoman/ropamujermodelo1.png",
          "detalle":"https://raw.githubusercontent.com/KarinaKanoDev/TotalLook/master/src/Assets/productsWoman/ropamujerdetalle1.png"}, 
          "price": 250.00,
          "quantity": 1
        },
        {
          "_id": 2,
          "name": "Vestido",
          "category":  "Clothes",
          "gender": "Women",
          "colors": ["white"],
          "size":{"sizeS": "s", "sizeM":"m", "sizel":"l"},
          "img": {"modelo":"https://raw.githubusercontent.com/KarinaKanoDev/TotalLook/master/src/Assets/productsWoman/ropamujermodelo2.png",
            "detalle":"https://raw.githubusercontent.com/KarinaKanoDev/TotalLook/master/src/Assets/productsWoman/ropamujerdetalle2.png"}, 
          "price": 350.00,
          "quantity": 1
        }
    ]


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

            {productsCar.map(item => <Contador item={item} key={item._id}/>)}
           

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