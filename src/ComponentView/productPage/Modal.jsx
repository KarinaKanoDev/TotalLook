import React from "react";
// npm install --save-dev @iconify/react @iconify-icons/gg
// eslint-disable-next-line no-unused-vars
import { Icon, InlineIcon } from '@iconify/react';
import closeO from '@iconify-icons/gg/close-o';
import mujer from '../../Assets/productsWoman/ropamujermodelo2.png'

export const Modal = () => {

    return (

        <div className="modal">

            <div className="modal-content">
                <div className="header-blue">
                    <div className="icon">
                    <Icon icon={closeO} color="#ff9f1c" width="30px" height="30px" />
                    </div>
               
                </div>

                <div className="modal-content-description">
                    <img src={mujer} alt="clothes" />
                    <div className="elements">
                        <p>Nombre</p>
                        <p>Codigo </p>
                        <p>Tallas </p>
                        <p>Colores </p>
                        <p>Precio </p>
                        <button className="Add">Añadir</button>

                    </div>

                </div>

             <div className="header-blue"></div>
            </div>
        </div>

    );
};