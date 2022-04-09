import React, { Component } from "react";

export class IntervalClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.Interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    console.log("unmount");
    clearInterval(this.Interval);
  }
  tick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default IntervalClassCounter;
