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
        <Route exact path='/home' component={Home} />
        <Route path='/home/:id' render={({ match }) => {
          const { id } = match.params;
          return <PetPage id={id} />
        }} />
        <Redirect to='/home' />
      </Switch>
    </main>
  );
}

export default App;
