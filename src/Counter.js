import React from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  // this.state =
  state = {
    count: 0
  };

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.handleClick}>Click Me!</button>
        <CounterDisplay number={this.state.count} />
      </div>
    );
  }
}

export default Counter;
