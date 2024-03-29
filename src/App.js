import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";

//Chunking
//Code Splitting
//Dynamic Bundling
//On Demand loading
//lazy loading
//dynamic import

const Grocery = lazy(()=>
  import("./components/Grocery")
)

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
  const [userName, setUserName] = useState();

  //authentication
  useEffect(()=>{
   //Make an APi call and send username and password
   const data = {
    name :"Ashi Bajpai"
   }
   setUserName(data.name)
  },[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="app">
      <Header />
      <Outlet/>
      
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path:"/",
        element: <Body/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/grocery",
        element: (<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>)
      },
      {
        path:"/cart",
        element: (<Cart/>)
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <ErrorComponent/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
