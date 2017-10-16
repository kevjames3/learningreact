"use strict";
import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/output/App.css';

class App extends Component {  
  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  getGreeting(user) {
    if (user) {
      return `Hello, ${this.formatName(user)}!`;
    }
    return "Hello, Stranger";
  }
  
  render() {
    const user = {
      firstName: 'Harper',
      lastName: 'Perez'
    };
    
    const element = 
    React.createElement(
      'h1',
      {className: 'greeting'},
      this.getGreeting()
    );
    
    return element;
  }
}

export default App;
