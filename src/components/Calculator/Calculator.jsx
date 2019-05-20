import React from 'react';
import { ResultScreen } from './ResultScreen';
import { CalculationScreen } from './CalculationScreen';
import { WeightConverter } from './WeightConverter';
import { Keypad } from './Keypad';
import { Division } from './Division';
import * as math from 'mathjs';

export class Calculator extends React.Component {
  state = {
    result: 0,
    weight: 'kg',
    input: '',
  };
  render() {
    const { result, weight, input } = this.state;
    return (
      <div className="calculator">
        <ResultScreen result={result} weight={weight} />
        <CalculationScreen input={input} />
        <WeightConverter
          pounds={this.handlePoundsToKilos}
          kilos={this.handleKilosToPounds}
          weight={weight}
        />
        <Keypad
          onClick={this.handleClick}
          onSubmit={this.handleSubmit}
          onClear={this.handleClear}
          input={input}
        />
        <Division onClick={this.handleDivision} />
      </div>
    );
  }
  handleSubmit = (e) => {
    const result = math.eval(e.target.value);
    this.setState({ result: result });
  };
  handleClick = (e) => {
    this.setState({
      input: this.state.input + e.target.value,
    });
  };
  handleClear = () => {
    this.setState({ result: 0, input: '' });
  };
  handlePoundsToKilos = () => {
    const poundConversion = (this.state.result / 2.2046).toFixed(1);
    this.setState({ result: poundConversion, weight: 'kg' });
  };
  handleKilosToPounds = () => {
    const kiloConversion = (this.state.result * 2.2046).toFixed(1);
    this.setState({ result: kiloConversion, weight: 'lbs' });
  };
  handleDivision = (e) => {
    const dividedResult = (this.state.result / e.target.value).toFixed(1);
    this.setState({ result: dividedResult });
  };
}
