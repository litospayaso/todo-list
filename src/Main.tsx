import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Detail from './detail/Detail';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/detail/:id' component={Detail}/>
    </Switch>
  </main>
)

export default Main