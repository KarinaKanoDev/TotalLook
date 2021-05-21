import React from "react";
import totallook from '../../Assets/logo/totalLook.png'
// npm install --save-dev @iconify/react @iconify-icons/heroicons-outline
import { Icon, InlineIcon } from '@iconify/react';
import shoppingCart from '@iconify-icons/heroicons-outline/shopping-cart';


export function Header() {

    return(

        <div className="header">
            <div className="header-content">
                <img src={totallook} alt="totallook" />
                <Icon icon={shoppingCart} color="#ff9f1c" width="30px" height="30px" />
            </div>
        </div>

    )
    
}