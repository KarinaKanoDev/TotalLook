import React from 'react';

import {Footer} from '../generalComponents/Footer'
import {Header} from '../generalComponents/Header'
import {Carrousel} from '../homePage/Carrousel'

export function Home() {

    return(

        <div>
            <Header />
            <Carrousel/>
            <h1>I am Home P.</h1>
            <Footer />
        </div>

    )
    
}