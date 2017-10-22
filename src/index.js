import React from 'react';
import ReactDOM from 'react-dom';
import './styles/output/index.css';
import Clock from './Clock.js';
import Login from './Login.js';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

const numbers = [1, 2, 3, 4, 5];
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);

registerServiceWorker();
