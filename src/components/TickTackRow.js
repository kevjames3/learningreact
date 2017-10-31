import React from 'react';
import TickTackToeCell from './TickTackToeCell';

export default class TickTackRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: props.values
    }
  }

  render() {
    const values = this.state.values.map((val, index) => {
      return <TickTackToeCell value={val} key={index} />
    })
    return <div>
      {values}
    </div>
  }
}