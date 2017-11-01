import TickTackToeGame from './components/TickTackToeGame';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/output/index.css';
import registerServiceWorker from './registerServiceWorker';

const mountNode = document.getElementById('root');

ReactDOM.render(
  <TickTackToeGame />,
  mountNode
);

registerServiceWorker();
