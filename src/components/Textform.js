import React, { useState } from 'react'



export default function Textform(props) {


    const changeUpperCase = () => {
        // console.log("btn clicked"); 
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const changeLowerCase = () => {
        // console.log("btn clicked"); 
        let newtext = text.toLowerCase();
        setText(newtext);
    } 
    const clearText = () => {
        // console.log("btn clicked"); 
        let newtext = "";
        setText(newtext);
    }   

const handleCopy=()=>{
    var text1=document.getElementById('myBox');
    text1.select();
text1.setSelectionRange(0,9999);
navigator.clipboard.writeText(text.value);
}

    const handleOnChange = (event) => {
        //  console.log("on change"); 
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className='container my-3'>
                <form>



                    <div className="form-group">
                        <label htmlFor="myBox"><h2>{props.heading}</h2></label>
                        <textarea className="form-control" id="myBox" rows="9" value={text} onChange={handleOnChange}></textarea>
                    </div>
                </form>
                <button className="btn btn-primary my-3 mx-2" onClick={changeUpperCase}>Convert to upper case</button>
                <button className="btn btn-primary my-3 mx-2" onClick={changeLowerCase}>Convert to lower case</button>
                <button className="btn btn-primary my-3 mx-2" onClick={clearText}>Clear text</button> 
                <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3">
                <h1> Your Text Summary</h1>
                <p>
                    no of characters:{text.length}
                    <br />
                    no of words:{text.split(" ").length}
                </p>
                
                    <h3> Preview:</h3>
                    <p> {text}</p>

                
            </div>
        </>
    )
}
