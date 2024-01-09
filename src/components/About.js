import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props){
        super(props);

        
    }
    render() {
        return (
            <div>
            <h1>About</h1>
            <h2>This is Namaste React Series</h2>
            {/* <User name={"Akshay Saini (function)"}/> */}
            <UserClass name={"Akshay Saini (class)"} location={"Dehradun class"}/>
        </div>
        )
    }
}

export default About;