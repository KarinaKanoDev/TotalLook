import React from 'react';
import {Link} from 'react-router-dom'

export function Navar(){
    
    return(

        <div className='navar'>
            <div className='bottons'>
                <Link to="/Category">
                <p onClick={() =>{
                    
                }} className='buttonElement'>Hombre</p>
                </Link>
                <p className='buttonElement'>Mujer</p> 
                <p className='buttonElement'>Ver Todos</p>
            </div>

            <div className='search'>
                <input type="search" name="busqueda" placeholder="..." />
            </div>
        </div>

    )

}