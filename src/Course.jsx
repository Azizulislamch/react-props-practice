import React, { Component } from "react";

class Course extends Component {
  state = {
    name: "React Course",
    duration: "2 hours",
    price: "200",
  };

  render() {
    return (
      <div className="Course">
        <Details
          name={this.state.name}
          duration={this.state.duration}
        />
        <Fee price={this.state.price} />
      </div>
    );
  }
}

function Details(props) {
  return (
    <div className="Details">
      Course Name: {props.name}
      <Duration time={props.duration} />
    </div>
  );
}

function Duration(props) {
  return (
    <p className="Duration">
      Course Duration: {props.time}
    </p>
  );
}

function Fee(props) {
  return (
    <div className="Fee">
      Course Fee: {props.price} Tk
    </div>
  );
}

export default Course;