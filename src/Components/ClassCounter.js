import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0, //state variable
    };
  }
  increse = () => {
    this.setState((e) => {
      return { count: e.count + 1 };
    });
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
