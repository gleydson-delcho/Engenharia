import React, {Component} from 'react';
import Main from '../template/Main';
import Logo from '../template/Logo';

const headerProps = {
    icon: 'book',
    title: 'Patologia',
    subtitle: 'Conteúdo de Patologia nas construções.'
}

export default class Pathology extends Component {
    render(){
        return (
            <div>
                <Main  >
                    <Logo {...headerProps} />
                    <div className="display-4">Patologia</div> 
                </Main>
            </div>           
        )
    }
}

