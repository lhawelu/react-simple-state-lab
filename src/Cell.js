import React, { Component } from 'react';

export default class Cell extends Component {

  state = {
    color: this.props.value,
    index: this.props.id
  }

  colorChange = (e) => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div key={this.state.index} className='cell' onClick={this.colorChange} style={{backgroundColor: this.state.color}}></div>
    )
  }

}