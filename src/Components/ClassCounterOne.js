import React, { Component } from "react";

class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      input: "",
    };
  }
  componentDidMount() {
    console.log("initial stage");
    document.title = `clicked ${this.state.count} times`;
  }

  //must go through this link -https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      //jar he condition barobar asan t document ch title update kar nahi t nako karu.bagha ata count ani prevcount equal nahi mhanun condition execute nahi zali. jar te equal naste t condition execute zali asti.
      console.log("updating document title");
      document.title = `clicked ${this.state.count} times prajwal`;
    }
    // console.log(prevProps);
    // console.log(this.state.count);
    // console.log(prevState.count);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={(e) => {
            this.setState({ input: e.target.value });
          }}
        />
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
