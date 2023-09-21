import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import textArea from './textArea';
import Form from 'react-bootstrap/Form';
import { Button } from 'bootstrap';
import React, {useState} from 'react'



function TextArea1(props) {

    const handleUpClick = ()=>{

      window.confirm("Convert it to Uppercase")
        let newText = text.toUpperCase();
        setText(newText);

    }

    const handleLoClick = ()=>{

      window.confirm("Convert it to Lowercase")
        let newText = text.toLowerCase();
        setText(newText);

    }

    const handleOnChange = (event)=>{
        
        setText(event.target.value)
 
    }

    const handleClear = (event)=>{
        
      if (window.confirm("Do You want to clear the text?"))
      {
        setText("")
      }
        
 
    }

    const [isTextVisible, setTextVisibility] = useState(false);

    const handlePreview = ()=>{
        
      setTextVisibility(!isTextVisible);
 
    }

    const [text, setText] = useState("Enter text here...!")
  return (
    <>
      <div className="container mt-5">
        <h2>{props.heading}</h2>
        <textarea className="form-control mt-4" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <div><button className='btn btn-primary mt-4' onClick={handleUpClick}>{props.Up}</button>
        <button className='btn mx-2 btn-primary mt-4' onClick={handleLoClick}>{props.Lo}</button>
        <button className='btn btn-primary mt-4 ' onClick={handleClear}>{props.clearbtn}</button>
        <button className='btn btn-primary mt-4 mx-2' onClick={handlePreview}>{props.preview}</button></div>
      </div>
      <div className="container my-4">
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters </p>
        <p>{0.008*text.split(" ").length} mins required to read this text</p>
        {isTextVisible  && (
        <div>
          <h2 className='mt-4'>Text Preview</h2>
          {/* Display the text when isTextVisible is true */}
          <p>{text}</p>
        </div>
      )}
      </div>
    </>
  );
}

export default TextArea1;