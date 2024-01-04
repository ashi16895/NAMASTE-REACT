import React from "react"; 
import ReactDOM from "react-dom/client";


//React.createElement =>React Element - JS Object => HTMLElement(render)
//JSX => JavaScript Syntax to create React element, HTML like syntax;
//JSX (transpiled before it reaches to JS Engine) - PARCEL(manager) - Babel transpiler(JSX to React Code)
//JSX =>babel transpiles it to React.createElement => React Element - JS Object => HTMLElement(render)



const title =  (
<h1>
    
    Namaste React using JSX
</h1>
)

//React Component
//Class based components - OLD
//functional components - NEW
//React Functional Component = javascript functions


//Component Composition
const HeadingComponent = () => (

    <div id="container">
        {title}
        {/* <Title/> */}
    <h2 className="heading">Namaste React Functional Components</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);