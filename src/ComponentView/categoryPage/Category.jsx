// Vista de la pagina de categorias
import React, { Fragment } from 'react';
import {MenCategory} from './MenCategory'
import {WomenCategory} from './WomenCategory'
import {AllCategories} from './AllCategories'
import {Footer} from '../generalComponents/Footer'
import {Header} from '../generalComponents/Header'

export function Category() {

    return(
        <Fragment>
            <Header />
            <body>
            {/* <MenCategory/>
            <WomenCategory/>
            <AllCategories/> */}
            </body>
            <Footer/>
        </Fragment>
    );
    
}
