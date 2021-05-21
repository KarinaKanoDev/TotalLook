/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

// import promoImage from '../../Assets/logo/promotion.png'

export function Promo({item}){

    return(
        <div>
            <img src={item.img} />
        </div>
        

        
        // <div className= 'promoComponent'>
        //     {/* <hi>{item.name}</hi> */}
        //     <div className='promoImage'>
        //         <img src={item.img.modelo} />
        //     </div>
        //     <div className='promoImage1'>
        //         <img className='imagePromo' src={promoImage} />
        //     </div>
        // </div>

    )

}