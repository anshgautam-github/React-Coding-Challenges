import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react"

function App() {

  const[count,setCount]=useState(0);
  let val=useRef(0);  //if we use a normal var-> then it's value wil remain same across diff re-renders
  
  function handleIncreament(){
    val.current+=1;
    console.log("Value of val: " ,val.current);
    setCount(count+1);
  }

  useEffect(()=>{
    console.log("mai firse re-rendered ho gaya")
  })

  //useCase-2
  let btnRef=useRef();
  
  function changeColor(){
    btnRef.current.style.backgroundColor="red"
  }

  return ( 
    <div>
        <button 
        ref={btnRef}
        onClick={handleIncreament}>
          Increament
        </button>
        <br />
        <div>
          Count: {count}
        </div>
        <br />
        <button onClick={changeColor}>
          Change COlor
        </button>
    </div>
  )
}

export default App