import './Logo.css';
import React from 'react';

// import Logo from '../../assets/images/logo.png';
import Header from './Header';


export default props =>
// Terei que separar o componente Logo em outro componente! Para que a responsividade da página fique boa!
// O componente Header não poderá ficar junto do componente Logo
    <React.Fragment>
        <aside className="subHeader">        
            <Header {...props} /> 
        </aside>
    </React.Fragment>
            
