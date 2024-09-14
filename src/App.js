import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
// import About from './Components/About'; // Keeping About commented
import { useState } from 'react';
import Alert from './Components/Alert';
import React from "react";
/* 
// Commenting out the Router imports
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from "react-router-dom";
*/

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextTrove" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* 
          <Routes> 
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes> 
          */}
          
          {/* Directly rendering the Textform component */}
          <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
