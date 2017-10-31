import React from 'react';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default class TemperatureCalculator extends React.Component {
  constructor(props){
    super(props)

    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);

    this.state = {
      celsius: 0,
      fahrenheit: 32
    }
  }
  
  handleFahrenheitChange(value){
    this.setState({
      fahrenheit: value,
      celsius: tryConvert(value, toCelsius)
    })
  }

  handleCelsiusChange(value){
    this.setState({
      fahrenheit: tryConvert(value, toFahrenheit),
      celsius: value
    })
  }
  
  render() {
    const celsius = this.state.celsius;
    const fahrenheit = this.state.fahrenheit;

    
    return (
      <div>
        <TemperatureInput scale="c" onTemperatureChange={this.handleCelsiusChange} temperature={celsius} />
        <TemperatureInput scale="f" onTemperatureChange={this.handleFahrenheitChange} temperature={fahrenheit}/>
        <BoilingVerdict celsius={celsius}/>
      </div>
    );
  }
}