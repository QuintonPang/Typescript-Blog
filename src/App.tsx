import React, { useState } from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const App =():JSX.Element=> {

  const [darkMode, setDarkMode] = useState(false);

  const myTheme = createTheme({

    palette: {
      mode: (darkMode?'dark':'light'),
      primary:{
        main:"#ffffff",
      }
    }
  });

  const callback =  () =>{
      setDarkMode(!darkMode);
  }

  return (
        <ThemeProvider theme={myTheme}>
          <div style={{backgroundColor:(darkMode?"#3a3b3d":"#ffffff")}}>
          <Navbar callback={callback} darkMode={darkMode}/>
          <HomePage/>
          <Footer darkMode={darkMode}/>
          </div>
       </ThemeProvider>
  );
}

export default App;
