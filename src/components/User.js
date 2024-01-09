import { useState } from "react";

export default User = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    return(
        <div className="user-card">
          <h2>Name: {props.name}</h2>
          <h3>Count: {count}</h3>
          <h3>Count2: {count2}</h3>
          <h3>Location: Dehradun</h3>
          <h4>Contact: @akshaymarch7</h4>
        </div>
    )
}