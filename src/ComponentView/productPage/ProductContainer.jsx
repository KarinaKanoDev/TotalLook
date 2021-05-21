import React from 'react';

export const ProductContainer = () =>  {

    return(
        <div className='productsContainer'>
            <div className='productsElementContainer'>
            {/* <div className='productCard'> */}
            <div className='productsElementImage'>
                <img className='productImg' src='./sampleImage/ropamujermodelo1.png' alt='ropa'/>
                <div className='productsElementName'>Blusa </div>
                <div className='productsElementPrice'> $400 </div>
            </div>
            {/* </div> */}
            </div>
        </div>

)
}