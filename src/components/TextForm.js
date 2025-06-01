import React, {useState} from 'react'
export default function TextForm(props) 
{
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase :)", "success");
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked");
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase :)", "success");
    }
    const handleOnChange = (event)=>{
        console.log("change was clicked");
        setText(event.target.value);
    }
    const handleClClick = (event)=>{
        console.log("clear was clicked");
        setText(" ");
        props.showAlert("Your text has been cleared :(", "success");

    }
    const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
    }

const [text,setText]= useState('Enter text here');

    return (
        <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 >{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'grey':'white'}}id="mybox" rows="8"/>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-danger mx-2" onClick={handleClClick}>Clear</button>



    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
<p>{text.trim().split(/\s+/).filter((word) => word.length !== 0).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Average minutes it will take a person to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    
    </div>
    </>
  )
}
