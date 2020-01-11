import React, { Component } from 'react';
import './App.css';
import Landing from '../Landing/Landing';
import { Switch, Route } from 'react-router-dom';
class App extends Component {

  // componentDidMount() {
  //   fetch()
  // }

  render() {
    return (
      <main className="App">
        <Switch>
          <Route exact path='/' component={Landing} />

        </Switch>
      </main>
    );
  }
}

export default App;
