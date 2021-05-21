import React from 'react';

export function Navar(){
    
    return(

        <div className='navar'>
            <div className='bottons'>
                <p className='buttonElement'>Hombre</p>
                <p className='buttonElement'>Mujer</p> 
                <p className='buttonElement'>Ver Todos</p>
            </div>

            <div className='search'>
                <input type="search" name="busqueda" placeholder="..." />
            </div>
        </div>

    )

}