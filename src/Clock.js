import React from 'react';

function FormattedDate(props) {
  return <h2>It is {props.date}.</h2>;
}

export default class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {date: 1};
  }

  tick(){
    this.setState((prevState) => {
      return {
        date: prevState.date + 1
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