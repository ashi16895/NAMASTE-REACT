import React from "react";
import Shimmer from './Shimmer';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo:{}
    }
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
        userInfo: json,
    })
  }

  component
  render() {
    if(!this.state.userInfo){
        return <Shimmer/>
    }
    const { name, location, avatar_url } = this.state.userInfo;
    
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;
