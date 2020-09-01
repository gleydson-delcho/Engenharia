import React, {Component} from 'react';
import Main from '../template/Main';
import Logo from '../template/Logo';

const headerProps = {
    icon: 'book',
    title: 'Concreto',
    subtitle: 'Apresentação de controle tecnológico de concreto.'
}

export default class Concrete extends Component {
    render() {
        return(
            <div>
                <Main  >
                    <Logo {...headerProps} />
                    <div className="display-4">Concreto</div> 
                </Main>
            </div>
        )
    }
}

