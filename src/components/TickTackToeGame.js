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

  }

  updateWidth(event){

  }

  updateSize(event){
    let size = tryConvert(event.target.value);
    this.setState({
        size: size
    });
    this.initValues(size);
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
          <div>Width: <input onChange={this.updateWidth} /></div>
          <div>Height: <input onChange={this.updateHeight} /></div>
        </div>
        <div>
          {this.state.grid.map((row, index) => {
            return <TickTackRow values={row} key={index}/>
          })}
        </div>
      </div>
    )
  }
}