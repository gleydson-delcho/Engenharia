import React, {Component} from 'react';
import Main from '../template/Main';
import Logo from '../template/Logo';

const headerProps = {
    icon: 'book',
    title: 'Argamassa',
    subtitle: 'Controle tecnológico de argamassa de uso geral.'
}


export default class Mortar extends Component {
    render() {
        return (
            <div>
                <Main >
                    <Logo {...headerProps}/>
                    <div className="display-4">Argamassas</div>
                    <hr/>
                    <p>
                        Para começarmos vamos definir o que é uma argamassa: Argamassa é uma mistura de agregados
                        água e aglomerante podendo conter aditivos.
                    </p>
                </Main>
            </div>
            
        )
    }
}