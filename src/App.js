import React, { Component } from 'react';
import './App.css';
import { Title } from './components/Title';
import { Calculator } from './components/Calculator/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Title />
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
