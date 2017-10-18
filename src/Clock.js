import React from 'react';

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

export default class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  tick(){
    this.setState((prevState) => {
      return {
        date: new Date()
      }
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  render(){
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date}/>
      </div>
    );
  }
}