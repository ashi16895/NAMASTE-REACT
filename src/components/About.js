import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props){
        super(props);

        
    }
    render() {
        return (
            <div>
            <h1>About</h1>
            <div>
                loggedInUser
                <UserContext.Consumer>
                    {({loggedInUser})=><h1>{loggedInUser}</h1>}
                </UserContext.Consumer>

            </div>

            <h2>This is Namaste React Series</h2>
            {/* <User name={"Akshay Saini (function)"}/> */}
            <UserClass name={"Akshay Saini (class)"} location={"Dehradun class"}/>
        </div>
        )
    }
}

export default About;