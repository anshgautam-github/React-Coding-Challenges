
import { useState } from "react";
import { useRef } from "react"

function App() {

const [time,setTime]=useState(0);
let timeRef=useRef();

function startTimer(){
  timeRef.current=setInterval(()=>{
    setTime(time=> time+1)
  },1000)
}

function stopTimer(){
  clearInterval(timeRef.current);
  timeRef.current=null;
}

function resetTimer(){
  stopTimer();
  setTime(0);
}

  return ( 
    <div>
      <h1>Stopwatch: {time} seconds</h1>

      <button onClick={startTimer}>
        Start 
      </button>

      <button onClick={stopTimer}>
        Stop 
      </button>

      <button onClick={resetTimer}>
        Reset 
      </button>
    </div>
  )
}

export default App