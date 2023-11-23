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

    const removeSpace=()=>{
        let text1=text;  
    let textarr=text1.split(" ");
let i=0;
for(i=0;i<textarr.length;i++){
    if(textarr[i]===""){
       textarr.splice(i,1);
       i=i-1;
    } 
}  
text1=textarr.join(" "); 
setText(text1);
    } 
    const titleCase=()=>{ 
        let text2=[];
        let text1=text;  
    let textarr=text1.split(" ");
let i=0;
for(i=0;i<textarr.length;i++){
    if(textarr[i]===""){
       textarr.splice(i,1);
       i=i-1;
    } 
}    


 for(i=0;i<textarr.length;i++){ 
    let bww=textarr[i];
     text2[i]=bww.charAt(0).toUpperCase()+bww.slice(1);
 }
text1=text2.join(" "); 
setText(text1);
    }

    const handleOnChange = (event) => {
        //  console.log("on change"); 
        setText(event.target.value);
    }


    const [text, setText] = useState("");  

    let text1=text;  
    let textarr=text1.split(" ");
let i=0;
for(i=0;i<textarr.length;i++){
    if(textarr[i]===""){
       textarr.splice(i,1);
       i=i-1;
    } 
}   
text1=textarr.join(" "); 
let textsen=text1.split(".");
let count=0;
for(i=0;i<textsen.length;i++){ 
    let nummp=textsen[i]; 
    let bcnummp=nummp.charAt(0).toUpperCase();
    if(textsen[i][0]===bcnummp){
        count=count+1;
    }
}
//let text2=text1.join(']');

    return (
        <>
            <div className='container my-3'>
                <form>



                    <div className="form-group">
                        <label htmlFor="myBox"><h2>{props.heading}</h2></label>
                        <textarea className="form-control" id="myBox" rows="9" value={text} onChange={handleOnChange}></textarea>
                    </div>
                </form>
                <button className="btn btn-primary my-3 mx-2 my-2" onClick={changeUpperCase}>Convert to upper case</button>
                <button className="btn btn-primary my-3 mx-2 my-2" onClick={changeLowerCase}>Convert to lower case</button>
                <button className="btn btn-primary my-3 mx-2 my-2" onClick={clearText}>Clear text</button> 
                {/* <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text</button> */} 
                <button className="btn btn-primary my-3 mx-2 my-2" onClick={removeSpace}>Remove Extra Spaces</button>  
                <button className="btn btn-primary my-3 mx-2 my-2" onClick={titleCase}>Title Case</button> 
            </div>
            <div className="container my-3">
                <h1> Your Text Summary</h1>
                <p>
                    no of characters:{text.length}
                    <br />
                    no of words:{text1.split(" ").length} 
                    <br/>
                    no of sentences:{count}
                </p>
                
                    <h3> Preview:</h3>
                    <p> {text}</p>

                
            </div>
        </>
    )
}
