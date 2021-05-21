/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export function Promo({item}){
    
    return(

        <div>
             <h1>Ya duermanse!!</h1>
            <h2>{item.name}</h2>
            <img src={item.img.modelo} />
        </div>

    )

}