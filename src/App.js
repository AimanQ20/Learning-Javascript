import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

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
    document.body.style.backgroundColor = 'midnightblue';
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
    document.body.style.backgroundColor = 'pink';
    showAlert("Barbie mode enabled", "success");
  } else {
    setMode('light'); // or 'dark' based on your preference
    document.body.style.backgroundColor = 'white'; // or 'midnightblue'
    showAlert("Barbie mode disabled", "success");
  }
};


  return (
    <>
<Navbar title="TextUtils" mode={mode} aboutText="About us" toggleMode={toggleMode} toggleBarbieMode={toggleBarbieMode}></Navbar>
<Alert alert={alert}/>
<div className="container my-2">
<TextForm showAlert={showAlert} heading = "Enter your text:" mode={mode}></TextForm>
{/*<About></About>*/}
</div>
      </>
  );
}
export default App;
