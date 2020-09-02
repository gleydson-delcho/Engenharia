import React from 'react';
import {Switch, Route, Redirect} from 'react-router';

import Home from '../components/home/Home';
import Pathology from '../components/subjects/Pathology';
import Concrete from '../components/subjects/Concrete';
import Geotechnics from '../components/subjects/Geotechnics';
import Mortar from '../components/subjects/Mortar';
import Aggregates from '../components/subjects/Aggregates';

export default props =>

    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Patologia' component={Pathology} />
        <Route path='/Concreto' component={Concrete} />
        <Route path='/Argamassa' component={Mortar} />
        <Route path='/Agregados' component={Aggregates} />
        <Route path='/Geotecnia' component={Geotechnics} />
        <Redirect from='*' to='/' />
    </Switch>