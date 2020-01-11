import React from 'react';
import './App.css';
import Landing from '../Landing/Landing';
import Home from '../Home/Home';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <main className="App">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/home' component={Home} />
      </Switch>
    </main>
  );
}

export default App;
