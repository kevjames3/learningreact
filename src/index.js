import React from 'react';
import ReactDOM from 'react-dom';
import './styles/output/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, 
//   document.getElementById('root')
// );

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;

registerServiceWorker();
