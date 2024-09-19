import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Prent Constructor");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>Lorem Ipsum</h2>

        <UserClass name={"Mike (class)"} location={"Windsor (class)"} />
      </div>
    );
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }
}

export default About;
