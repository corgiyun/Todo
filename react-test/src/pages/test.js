import React, { Component } from 'react';
export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      showMask: false,
    };
  }
  
  render() {
    console.log('render 触发~~~');
    return (
      <div>
        <button onClick={()=>this.setState({ showMask: true })}>Click</button>
      </div>
    );
  }
}









