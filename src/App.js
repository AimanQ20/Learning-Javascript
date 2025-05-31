import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode,setMode]=useState('dark'); 
  const toggleMode= ()=>{
    if(mode==='light')
    {
    setMode('dark')
    }
    else{
      setMode('light')
    }
  }
  return (
    <>
<Navbar title="TextUtils" mode={mode} aboutText="About us" toggleMode={toggleMode}></Navbar>
<div className="container my-2">
<TextForm heading = "Enter your text:"></TextForm>
{/*<About></About>*/}
</div>
      </>
  );
}
export default App;
