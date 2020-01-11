import React, { Component } from 'react';
import './App.css';
import Landing from '../Landing/Landing';

class App extends Component {

  // componentDidMount() {
  //   fetch()
  // }

  render() {
    return (
      <main className="App">
        <Landing />
      </main>
    );
  }
}

export default App;
