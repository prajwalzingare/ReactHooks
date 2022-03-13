import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0, //state variable
    };
  }
  increse = () => {
    let count = this.state.count + 1;
    //we cannot declear this.state in setstate function.it can end up with infinity loop.
    this.setState({ count: count });
  };

  render() {
    return (
      <div>
        <h1>counter {this.state.count}</h1>
        <button onClick={this.increse}>click to increse</button>
      </div>
    );
  }
}

export default ClassCounter;
