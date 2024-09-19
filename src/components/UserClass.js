import React from "react";
import { useState } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.name + " Child Constructor");
    //console.log("Props: ", props);

    this.state = {
      //count: 0,
    };
  }

  render() {
    //console.log(this.props.name + " Child Render");
    const { name, location } = this.props;
    //const { count } = this.state;

    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({
              //count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>

        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @shane.json</h4>
      </div>
    );
  }

  componentDidMount() {
    //console.log(this.props.name + " Child Component Did Mount");
  }
}

export default UserClass;
