import React from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

const App =():JSX.Element=> {



  return (
        <>
            <Navbar/>
            <HomePage/>
            <Banner/>
       </>
  );
}

export default App;
