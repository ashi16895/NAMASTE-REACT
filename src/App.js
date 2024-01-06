import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//React.createElement =>React Element - JS Object => HTMLElement(render)
//JSX => JavaScript Syntax to create React element, HTML like syntax;
//JSX (transpiled before it reaches to JS Engine) - PARCEL(manager) - Babel transpiler(JSX to React Code)
//JSX =>babel transpiles it to React.createElement => React Element - JS Object => HTMLElement(render)

//React Component
//Class based components - OLD
//functional components - NEW
//React Functional Component = javascript functions

//Component Composition
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
