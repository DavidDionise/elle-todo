import React from "react";

class CounterDisplay extends React.Component {
  render() {
    return (
      //takes a number as a prop
      <p>{this.props.number}</p>
    );
  }
}

export default CounterDisplay;
