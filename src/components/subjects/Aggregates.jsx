import React, { Component } from 'react';
import Main from '../template/Main';
import Logo from '../template/Logo';

const headerProps = {
    icon: 'book',
    title: 'Agregados',
    subtitle: 'Ensaios de caracterização de agregados para concreto.'
}


export default class Aggregates extends Component {
    render() {
        return (
            <div>                
                <Main >
                    <Logo {...headerProps}/>
                        <div className="display-4">Agregados</div> 
                    </Main>
            </div>
        )
    }
}
