import React from 'react';

export default class TickTackToeCell extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: props.value
    } 
  }

  render(){
    return <span style={{
      "border": "black solid 1px",
      "minWidth": "12px",
      "display": "inline-block"
    }}>{this.state.value}</span>;
  }
}