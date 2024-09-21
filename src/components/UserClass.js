import React from "react";
import { useState } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.name + " Child Constructor");
    //console.log("Props: ", props);

    this.state = {
      //count: 0,
      userInfo: {
        name: "Dummy User",
        location: "Default",
        avatar_url: "https://dummyurl.com",
      },
    };
  }

  async componentDidMount() {
    //console.log(this.props.name + " Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/ShaneDsouza4");
    const json = await data.json();

    console.log("Data: ", json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    //console.log(this.props.name + " Child Render");
    const { name, location } = this.props;
    //const { count } = this.state;

    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Location: {this.state.userInfo.location}</h3>
        <h4>Contact: @shane.json</h4>
      </div>
    );
  }

  componentDidUpdate() {
    console.log("Component Did Update  ");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }
}

export default UserClass;
