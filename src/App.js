import logo from './logo.svg';
import './App.css';
import react from "react"
import Pronote from "./Pronote.js"

function App() {
 const [text,setText]=react.useState("")
 function addText(event){
   setText(event.target.value)
 }
 function reset(){
  setText("")
 }
 return<div className="whole">
   <div className="input-div">
   <div>INPUT</div>
   <textarea className="input" value={text} type="text" onChange={addText}/>
   <img onClick={reset}src="https://previews.123rf.com/images/piterk/piterk1608/piterk160800249/61898293-refresh-or-reload-symbol-sign-one-line-icon-on-background.jpg" />
   </div>
   <div className="pronote-div">
   <div>PRONOTE</div>
   <Pronote text={text} />
   </div>
 </div>
}

export default App;
