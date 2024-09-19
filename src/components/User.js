const User = (props) => {
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: Windsor</h3>
      <h4>Contact: @shane.json</h4>
    </div>
  );
};

export default User;
