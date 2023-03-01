import React ,{useState} from 'react'

export default function Textform(props) {
    /*const[mystyle,setMystyle]=useState({
        color:'black',
        backgroundColor:'white'

    }
  )
  const[mybtn,setmybtn]=useState("enable dark mode")
  const togglestyle = () =>{
    if(mystyle.color==='white')
    {
        setMystyle({
            color:'black',
            backgroundColor:'white'
        })
        setmybtn("enable dark mode")
    }
    else{
        setMystyle({
            color:'white',
            backgroundColor:'black'
        })
        setmybtn("enable light mode")

    }*/

  
    const handleOnChange = (event) => {
        //console.log("handle on change");
        settext(event.target.value);
    }
    const setUppercase = () => {
        //console.log("on click");
        let newtext= text.toUpperCase();
        settext(newtext);
    }
    const setLowercase =()=>{
        let newtext=text.toLowerCase();
        settext(newtext);
    }
    const setBlank =()=>{
        let newtext="";
        settext(newtext);
    }
    const handleOncopy =() =>{
         let text=document.getElementById("mybox");
        text.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value);
    }
    const extraSpace=()=>{
        
       let newtext=text.split(/[ ]+/);
        settext(newtext.join(" "))

    }
    const[text,settext] = useState("");
    //text=("enter your text") wrong way
    //settext("enter text"); //correct way
  return (
    <>
   <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h3 className="mb-3">{props.heading} </h3>
<div className="mb-3" >
  <textarea className="form-control" id="mybox" value={text} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary my-3 mx-2"onClick={setUppercase}>convert to upper case </button>
  <button disabled={text.length===0} className="btn btn-primary my-3 mx-2"onClick={setLowercase}>convert to lower case </button>
  <button disabled={text.length===0} className="btn btn-primary my-3 mx-2"onClick={extraSpace}>remove extra space</button>
  <button  disabled={text.length===0} className="btn btn-primary my-3 mx-2"onClick={handleOncopy}>copy text </button>
  <button disabled={text.length===0} className="btn btn-primary my-3 mx-2"onClick={setBlank}>clear text </button>
    </div>
    <div className="container my-2"style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>text summary</h3>
        <p> words {text.split(" ").filter((element)=>{return element.length!==0}).length} and {text.length} character </p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h3>Perview</h3>
        <p>{text.length>0?text:"Nothing to perview"}</p>
    </div>
    </>
  )
}
