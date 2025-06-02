import React , {use, useState} from 'react'

export default function About(props) {
    
let myStyle = {
  color: props.mode === 'barbie' ? 'white' : props.mode === 'dark' ? 'white' : '#042743',
  backgroundColor: props.mode === 'barbie' ? '#aa0f58' : props.mode === 'dark' ? '#042743' : 'white'
};


  return (
    <div classNameName="container" style={myStyle}>
        <h1 className="my-4 mx-2">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyze your text</strong>      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
TextUtils provides powerful tools to analyze your text in seconds. Whether you need to count words and characters, remove extra spaces, or convert text to uppercase or lowercase — it’s all just a click away. Simplify your workflow and save time with our easy-to-use interface.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
My tool is completely free for everyone — no sign-ups, no hidden charges. Whether you're a student, professional, or casual user, you can access all features instantly. Enjoy seamless text analysis without any limitations.      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Created by</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
This project was created by Aiman Qureshi as part of a web development learning journey. It reflects a passion for building useful, user-friendly tools that make everyday tasks easier. More features will be added soon — stay tuned!
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
