import React from 'react';
import TickTackRow from './TickTackRow';

function tryConvert(value) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  return Math.ceil(input);
}

function updateStateWithValue(field, value){
  let number = tryConvert(value);
  let newValue = {};
  newValue[field] = number;
  this.setState(newValue)
}

export default class TickTackToeGame extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      size: 3,
      width: 30,
      height: 18,
      grid: []
    }

    this.updateHeight = this.updateHeight.bind(this);
    this.updateWidth = this.updateWidth.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.initValues = this.initValues.bind(this);
  }

  componentDidMount() {
    this.initValues(this.state.size);
  }
  
  updateHeight(event){
    updateStateWithValue.call(this, "height", event.target.value);
  }

  updateWidth(event){
    updateStateWithValue.call(this, "width", event.target.value);
  }

  updateSize(event){
    let size = tryConvert(event.target.value);
    if(size <= -1){
      size = 0;
    } else if (size > 75){
      size = 75;
    }
    this.initValues(size);
    this.setState({
        size: size
    });
  }

  initValues(size){
    let values = [];
    for(let i = 0; i < size; i++){
      values[i] = [];
      for(let j = 0; j < size; j++){
        values[i].push("X");
      }
    }

    this.setState({
      grid: values
    })
  }

  render(){
    return (
      <div>
        <div>
          <div>Size: <input value={this.state.size} onChange={this.updateSize} /></div>
          <div>Width: <input value={this.state.width} onChange={this.updateWidth} /></div>
          <div>Height: <input value={this.state.height} onChange={this.updateHeight} /></div>
        </div>
        <div>
          {this.state.grid.map((row, index) => {
            return <TickTackRow values={row} key={(index + 1) * row.length}/> //We need the index to be unique or the row looks off
          })}
        </div>
      </div>
    )
  }
}