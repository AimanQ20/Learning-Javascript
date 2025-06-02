import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light'); 
  const [alert, setAlert]= useState(null);

  const showAlert = (message,type)=> 
  {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode= ()=>{
    if(mode==='light')
    {
    setMode('dark')
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode set","success");
    }
    else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode set","success");
    }
  }
 const toggleBarbieMode = () => {
  if (mode !== 'barbie') {
    setMode('barbie');
    document.body.style.backgroundColor = '#aa0f58';
    showAlert("Barbie mode enabled", "success");
  } else {
    setMode('light'); // or 'dark' based on your preference
    document.body.style.backgroundColor = 'white'; // or 'midnightblue'
    showAlert("Barbie mode disabled", "success");
  }
};


  return (
    <>
  <Router>
  <Navbar title="TextUtils" mode={mode} aboutText="About us" toggleMode={toggleMode} toggleBarbieMode={toggleBarbieMode} />
  <Alert alert={alert} />
  <div className="container my-2">
    <Routes>
      <Route exact path="/about" element={<About mode={mode}/>} />
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text:" mode={mode} />} />
    </Routes>
  </div>
</Router>

      </>
  );
}
export default App;
