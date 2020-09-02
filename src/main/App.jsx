import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import {HashRouter} from 'react-router-dom';

import Routes from './Routes';
import Nav from '../components/template/Nav';
import Footer from '../components/template/Footer';
import ILogo from '../components/template/I-Logo';

export default props =>

    <HashRouter>
        <div className="app">            
            <ILogo />                        
            <Nav />
            <Routes />
            <Footer />
        </div>
    </HashRouter>
