import React from 'react';
import TickTackRow from './TickTackRow';

function tryConvert(value) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  return Math.ceil(input);
}

export default class TickTackToeGame extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      size: 3,
      width: 30,
      height: 18
    }

    this.updateHeight = this.updateHeight.bind(this);
    this.updateWidth = this.updateWidth.bind(this);
    this.updateSize = this.updateSize.bind(this);
  }
  
  updateHeight(event){

  }

  updateWidth(event){

  }

  updateSize(event){
    this.setState({
        size: tryConvert(event.target.value)
    })
  }

  render(){
    const dummyValues = this.state
    
    return <div>
              <div>
                <TickTackRow values={["X", "O", "X"]}/>
                <TickTackRow values={["X", "O", "X"]}/>
                <TickTackRow values={["X", "O", "X"]}/>
              </div>
              <div>
                <div>Size: <input value={this.state.size} onChange={this.updateSize} /></div>
                <div>Width: <input onChange={this.updateWidth} /></div>
                <div>Height: <input onChange={this.updateHeight} /></div>
              </div>
          </div>
  }
}