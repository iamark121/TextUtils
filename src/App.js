// import logo from './logo.svg';
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import Textform from "./components/Textform";
import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  // console.log("first");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    // <Router>
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={() => {
          // setMode(mode === 'light'? 'dark' : 'light');
          if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#526D82";
            showAlert("Dark mode enabled", "success");
          } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("Light mode enabled", "success");
          }
        }}
      />
      <Alert alert={alert} show />
      <div className="container my-3">
        
        {/* <Switch> */}
          {/* <Route path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
          <Textform
          mode={mode}
          showAlert={showAlert}
          toggleMode={() => {
            setMode(mode === "light" ? "dark" : "light");
          }}
        />
          {/* </Route> */}
        {/* </Switch> */}

      </div>

      {/* // <Navbar /> */}
    </>
    // </Router>
  );
  
}

export default App;
