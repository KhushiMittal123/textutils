//import logo from './logo.svg';
import './App.css'; 
import Navbar from './components/Navbar'; 
import Textform from './components/Textform'; 
import About from './components/About'; 
import Alert from './components/Alert';
import { useState } from 'react';
//let name="harry"
function App() {  

  const [mode,setDarkMode]=useState('light');
  const [alert,setalert]=useState(null); 
  const showAlert=(message)=>{
    setalert(message) 
   setTimeout(() => {
    setalert(null)
   }, 2500);
  } 

const togglemode=()=>{
  if(mode==='dark'){
    setDarkMode('light'); 
    document.body.style.backgroundColor='white';
    document.body.style.color='black'; 
    showAlert("Light");

  } 
  else{
    setDarkMode('dark'); 
    document.body.style.backgroundColor='grey';
    document.body.style.color='white'; 
    showAlert('Dark');
  } 
  
}

  return ( 
    <>  
   
<Navbar title="TextUtils" abouttext="About us" mode={mode} togglemode={togglemode}/>  
 <Alert modesE={alert}/> 
 <Textform heading="Enter your text here"/> 
{/* <About/> */}
    </>
  );
}

export default App;
