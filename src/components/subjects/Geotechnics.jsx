import React, {Component} from 'react';
import Main from '../template/Main';
import Logo from '../template/Logo';

const headerProps = {
    icon: 'book',
    title: 'Geotecnia',
    subtitle: 'Estudos realizados em solos'
}

export default class Geotechnics extends Component {
    render() {
        return(
            <div>
                <Main  >
                    <Logo {...headerProps}/>
                    <div className="display-4">Geotecnia</div>
                    <hr/>
                    <p>
                        A geotecnia é a área da engenharia civil responsável pelo estudo do solo e suas 
                        características. O objetivo deste espaço é apresentar alguns dos testes que são necessários
                        para a caracterização e classificação dos solos.
                    </p>
                </Main>
            </div>            
        )
    }
}