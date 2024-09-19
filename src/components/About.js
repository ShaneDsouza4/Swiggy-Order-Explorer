import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>Lorem Ipsum</h2>
      <User name="Seth" />
      <UserClass name="Mike" location="Windosor" />
    </div>
  );
};

export default About;
