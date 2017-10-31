import TickTackToeGame from './components/TickTackToeGame';
import TickTackToeCell from './components/TickTackToeCell';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/output/index.css';
import registerServiceWorker from './registerServiceWorker';
import TickTackRow from './components/TickTackRow';

const mountNode = document.getElementById('root');

ReactDOM.render(
  <TickTackToeGame />,
  mountNode
);

registerServiceWorker();
