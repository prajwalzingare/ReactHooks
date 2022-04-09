import React, { Component } from "react";

export class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMousePosition = (e) => {
    console.log("function trigered");
    this.setState({ x: e.clientX, y: e.clientY });
  };
  componentDidMount() {
    console.log("prajwal");
    window.addEventListener("mousemove", this.logMousePosition);
  }
  //class component me ye cleanup ka kam karega component ko unmount karega.event ko remove kardega.but isko useefect me kaise kare. how to do that.
  componentWillUnmount() {
    console.log("removed");
    window.removeEventListener("mousemove", this.logMousePosition);
  }
  render() {
    return (
      <div>
        x-{this.state.x} Y-{this.state.y}
      </div>
    );
  }
}

export default ClassMouse;
