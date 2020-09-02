import React from 'react';
import Main from '../template/Main';
import Logo from '../template/Logo';


export default props =>
<React.Fragment>
    <Main >
        <Logo icon="home" title="Início" subtitle="Projeto de implantação do laboratório virtual de engenharia."/>
        <div className="display-4">Bem-Vindo!</div>
        <hr />
        <p className="mb-0">Sabe-se que a engenharia civil é uma necessidade essencial para a sobrevivência, uma
            vez que com ela podemos construir: moradias, gerar empregos, melhorar a qualidade de vida da população,
            para que tudo isso seja possível são necessários muitoas estudos. Muitas pessoas podem não saber, porém
            por trás de uma construção seja ela de uma casa, edificação, estradas, ferrovias, etc... existem estudos
            como se fossem os exames médicos que devem ser feitos para averiguar diversas situações e condições.
            Por isso este site tem o objetivo de auxiliar e dar acessibilidade para alguns estudos realizados na
            área da engenharia civil!
            Nos Menus acima você poderá escolher a área que melhor se adequa a sua necessidade. <hr />
            Para a área de <a href="#/Patologias">Patologias</a> você encontrará conteúdos referêntes aos mais comuns
            problemas encontrados nas contruções de concreto armado e alvenarias. <br />
            Para a área de <a href="#/Concreto">Concreto</a>  você encontrará informações sobre produção, aplicação,
            uso e testes do concreto armado. <br />
            Para a área de <a href="#/Argamassas">Argamassas</a> você encontrará informações sobre produção, aplicação,
            uso e testes realizados em argamassas para uso geral <br />
            Para a área de <a href="#/Agregados">Agregados</a> você encontrará informações sobre uso e aplicação de
            agregados na construção civil. <br />
            Para a área de <a href="#/Geotecnia">Geotecnia</a> você encontrará conteúdo sobre solos e estudos geotecnicos.
        </p>
    </Main>
</React.Fragment>
   