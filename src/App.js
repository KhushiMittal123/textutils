//import logo from './logo.svg';
import './App.css'; 
import Navbar from './components/Navbar'; 
import Textform from './components/Textform'; 
import About from './components/About';
import { useState } from 'react';
//let name="harry"
function App() {  

  const [mode,setDarkMode]=useState('light');

const togglemode=()=>{
  if(mode==='dark'){
    setDarkMode('light'); 
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
  } 
  else{
    setDarkMode('dark'); 
    document.body.style.backgroundColor='grey';
    document.body.style.color='white';
  }
}


  return ( 
    <>  
   
<Navbar title="TextUtils" abouttext="About us" mode={mode} togglemode={togglemode}/> 
 <Textform heading="Enter your text here"/> 
{/* <About/> */}
    </>
  );
}

export default App;
