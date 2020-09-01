import './Main.css';
import React from 'react';
// import Logo from '../template/Logo'

export default props => 
    <React.Fragment>
        {/* <Logo {...props}/> */}
    <main className="content container-fluid">
        <div className="p-3 mt-1">
            {props.children}
        </div>
    </main>
    </React.Fragment>
    


