import React from "react";
import totallook from '../../Assets/logo/totalLook.png'
// npm install --save-dev @iconify/react @iconify-icons/heroicons-outline
import { Icon } from '@iconify/react';
import shoppingCart from '@iconify-icons/heroicons-outline/shopping-cart';


export function Header() {

    return(

        <div className="header">
            
                <img className='logoImage' src={totallook} alt="totallook" />
                <Icon className='iconShoppingCar' icon={shoppingCart} color="#ff9f1c" width="50px" height="50px" />
            
        </div>

    )
    
}