import { useState } from 'react'

function App() {

  const[count,setCount]=useState(0)
  
  return (
    <>
        <p>Counter value is {count}</p>
        <button onClick={()=>{setCount(count+1)}}>Increase count</button>
        <br />
        <button onClick={()=>{setCount(count-1)}}>Decrease count</button>
    </>
  )
}

export default App
