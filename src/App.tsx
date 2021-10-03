import React from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";


const App =():JSX.Element=> {



  return (
        <>
          <Navbar/>
          <HomePage/>
           
       </>
  );
}

export default App;
