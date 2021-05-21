import React from 'react';

import {Link} from 'react-router-dom'

export function Navar(){
    
    return(

        <div className='navar'>
            <div className='bottons'>
                
                <Link to="/MenCategory">
                <p className='buttonElement'>Hombre</p>
                </Link>

                <Link to="/WomenCategory">
                <p className='buttonElement'>Mujer</p> 
                </Link>

                <Link to="/AllCategory">
                <p className='buttonElement'>Ver Todos</p>
                </Link>
                
            </div>

            <div className='search'>
                <input type="search" name="busqueda" placeholder="..." />
            </div>
        </div>

    )

}