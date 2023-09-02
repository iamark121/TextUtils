import React, { useState } from "react";

function Textform(props) {
    const [inputText, setInputText] = useState("");
    const [isTrue, setTrue] = useState(false);
    return (
        <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
            <div className="mb-3">
                <h3 className="heading">Enter text below to analyze</h3>
                <textarea
                    style={{
                        backgroundColor:
                            props.mode === "dark" ? "rgb(82 113 130)" : "white",
                        color: props.mode === "dark" ? "white" : "black",
                    }}
                    value={inputText}
                    id="myBox"
                    rows="6"
                    className="form-control"
                    onChange={(e) => {
                        setInputText(e.target.value);
                    }}
                ></textarea>
            </div>
            <button
                className="btn btn-primary mx-1"
                onClick={() => {
                    setInputText(inputText.toUpperCase());
                    props.showAlert("Converted to uppercase", "success");
                }}
                
            >
                To Uppercase
            </button>
            <button
                className="btn btn-primary mx-1"
                onClick={() => {
                    setInputText(inputText.toLowerCase());
                    props.showAlert("Converted to lowercase", "success");
                }}
                
            >
                To Lowercase
            </button>
            <button
                className="btn btn-primary mx-1"
                onClick={() => {
                    var text = document.getElementById("myBox");
                    text.select();
                    text.setSelectionRange(0, text.length);
                    navigator.clipboard.writeText(text.value);
                    props.showAlert("Copied to clipboard", "success");
                }}
                
            >
                Copy to Clipboard
            </button>
            <button
                className="btn btn-primary mx-1"
                onClick={() => {
                    const myBox = document.getElementById("myBox");
                    if (myBox) {
                        if (!isTrue) {
                            myBox.style.textDecoration = "line-through";
                            props.showAlert("Text set to line-through", "success");
                        } else {
                            myBox.style.textDecoration = "none";
                            props.showAlert("Text set to normal", "success");
                        }
                        setTrue(!isTrue);
                    }
                }}
            >
                {isTrue ? "Normal" : "Line-through"}
            </button>
            <button
                className="btn btn-primary mx-1"
                onClick={() => {
                    if(inputText.length>0){
                    setInputText("");
                    props.showAlert("Cleared text", "success");
                    }else {
                        props.showAlert("No text to clear", "warning");
                    }
                }}
            >
                Clear text
            </button>
            <div className="container my-3">
                <h3 className="heading3">Your text summary</h3>
                <p>
                    {inputText.split(" ").length} Words, {inputText.length} Characters
                </p>
            </div>
            <div className="container my-3">
                <h3>Preview</h3>
                <p>{inputText === "" ? "Enter text to preview" : inputText}</p>
            </div>
        </div>
    );
}

export default Textform;
