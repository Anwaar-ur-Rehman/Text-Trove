import React, { useState } from 'react';
import Alert from './Alert';

export default function Textform(props) {

    const handleUpClick = () => {
        console.log("Upper case was clicked");
        let textUp = text.toUpperCase();
        setText(textUp);
        props.showAlert("Upper case has been enabled", "success");
    }

    const handleDownClick = () => {
        console.log("Lower case was clicked");
        let textDown = text.toLowerCase();
        setText(textDown);
        props.showAlert("Lower case has been enabled", "success");
    }

    const handleCopyClick = () => {
        console.log("Text was copied");
        let textCopy = document.getElementById("myBox");
        navigator.clipboard.writeText(textCopy.value);
        props.showAlert("Copied successfully", "success");
    }

    const handleExtraSpacesClick = () => {
        let spaceFreeText = text.split(/[ ]+/).join(" ");
        setText(spaceFreeText);
        props.showAlert("Successfully removed extra spaces", "success");
    }

    const handleClearClick = () => {
        console.log("Clear was clicked");
        setText("");
        props.showAlert("Successfully cleared", "success");
    }

    const handleOnChange = (event) => {
        console.log("Text was changed");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <div>
            <div className="mb-3" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h1>{props.heading}</h1>
                <label htmlFor="myBox" className="form-label">Textarea</label>
                <textarea 
                    placeholder="Enter text here" 
                    className="form-control" 
                    value={text} 
                    onChange={handleOnChange} 
                    style={{ backgroundColor: props.mode === 'light' ? 'white' : '#808080', color: props.mode === 'light' ? '#042743' : 'white' }} 
                    id="myBox" 
                    rows="10">
                </textarea>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
                <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to lower case</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpacesClick}>Extra spaces Free Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter(word => word.length > 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter(word => word.length > 0).length} minutes taken to read this</p>
                <h3>Preview your text</h3>
                <p>{text.length > 0 ? text : "ENTER TEXT IN TEXTBOX TO PREVIEW YOUR TEXT"}</p>
            </div>
        </div>
    )
}
