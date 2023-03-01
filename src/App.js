import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';

function App() {
  const [mode,setMode] = useState('light');
  
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743 ';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }

  }
  return (
   <>
  
<Navbar title="textuitles2" mode={mode} toggleMode={toggleMode} subtitle="about us"/>

<div className="container my-3 rows=8" mode={mode}>
  <Textform heading="Try Textutiles - Word Counter,character Counter,Remove Extra Spaces" mode={mode}/>
  
</div>

   </>
  );
}

export default App;
