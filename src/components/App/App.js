import React from 'react';
import './App.css';
import Landing from '../Landing/Landing';
import Home from '../Home/Home';
import PetPage from '../../containers/PetPage/PetPage';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <main className="App">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/home' component={Home} />
        <Route path='/:{id}' component={PetPage} />
        <Redirect to='/home' />
      </Switch>
    </main>
  );
}

export default App;
