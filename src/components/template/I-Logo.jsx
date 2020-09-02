import './I-Logo.css';
import React from 'react';

import Logo from '../../assets/images/logo1.png';


export default props =>
    // Terei que separar o componente Logo em outro componente! Para que a responsividade da página fique boa!
    // O componente Header não poderá ficar junto do componente Logo

    <aside className="logo">
        <a href="/" className="logo">
            <img src={Logo} alt="logo" />           
        </a>
        <div id="text" className="display-4">
            Engenharia Civil
        </div>
    </aside>


