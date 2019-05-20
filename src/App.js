import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    result: 0,
    weight: 'kg',
    input: '',
  };
  render() {
    return (
      <div className="App">
        <div>
          <h1>Weight Calculator</h1>
          <div>
            {this.state.result} {this.state.weight}
          </div>
          <div>{this.state.input}</div>
          <div>
            <button onClick={this.handlePoundsToKilos}>kg</button>
            <button onClick={this.handleKilosToPounds}>lbs</button>
          </div>
          <div>
            <button onClick={this.handleClick} value="7">
              7
            </button>
            <button onClick={this.handleClick} value="8">
              8
            </button>
            <button onClick={this.handleClick} value="9">
              9
            </button>
            <button onClick={this.handleClick} value="/">
              /
            </button>
          </div>
          <div>
            <button onClick={this.handleClick} value="4">
              4
            </button>
            <button onClick={this.handleClick} value="5">
              5
            </button>
            <button onClick={this.handleClick} value="6">
              6
            </button>
            <button onClick={this.handleClick} value="*">
              *
            </button>
          </div>
          <div>
            <button onClick={this.handleClick} value="1">
              1
            </button>
            <button onClick={this.handleClick} value="2">
              2
            </button>
            <button onClick={this.handleClick} value="3">
              3
            </button>
            <button onClick={this.handleClick} value="-">
              -
            </button>
          </div>
          <div>
            <button onClick={this.handleClick} value="0">
              0
            </button>
            <button onClick={this.handleClick} value=".">
              .
            </button>
            <button onClick={this.handleSubmit} value={this.state.input}>
              =
            </button>
            <button onClick={this.handleClick} value="+">
              +
            </button>
          </div>
          <div>
            <button onClick={this.handleClear} value="clear">
              clear
            </button>
          </div>
          <div>
            <button onClick={this.handleDivision} value="2.5">
              2.5
            </button>
            <button onClick={this.handleDivision} value="5">
              5
            </button>
            <button onClick={this.handleDivision} value="10">
              10
            </button>
            <button onClick={this.handleDivision} value="12">
              12
            </button>
            <button onClick={this.handleDivision} value="15">
              15
            </button>
          </div>
        </div>
      </div>
    );
  }
  handleClick = (event) => {
    console.log(event.target.value);
    this.setState({
      input: this.state.input + event.target.value,
    });
  };

  handleSubmit = (e) => {
    console.log(e.target.value);
    const result = eval(e.target.value);
    this.setState({ result: result, input: '' });
  };
  handleClear = (e) => {
    this.setState({ result: 0, input: '' });
  };

  handlePoundsToKilos = (e) => {
    const poundConversion = (this.state.result / 2.2046).toFixed(1);
    this.setState({ result: poundConversion, weight: 'kg' });
  };
  handleKilosToPounds = (e) => {
    const kiloConversion = (this.state.result * 2.2046).toFixed(1);
    this.setState({ result: kiloConversion, weight: 'lbs' });
  };
  handleDivision = (e) => {
    const dividedResult = this.state.result / e.target.value;
    this.setState({ result: dividedResult });
  };
}

export default App;
