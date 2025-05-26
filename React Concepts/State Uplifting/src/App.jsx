import { useState } from "react"
import Card from "./Components/Card"

//PRactice -> Acordian example , Synced input, Filerting lIst -> INTERVIEW

function App() {

  //create state
  //manage state
  //chnage state
  //sabhi child mei state ko syncc krwadunga

  const[name,setName]=useState("")

  return ( //yaha child ko we passed both the var and the func -> so they can manage state on thier own
    <div>

       {/** Child to parent -> State upifting */}
      <Card name={name} setName={setName}/> 
      <p>I am inside the parent component  and value is - {name}</p>

       {/** Sharing State across the sibling compoennt -> chnages made in 1 comp -> visible in the other comp  */}
      
      {/* <Card title="card1" name={name} setName={setName}/>
      <Card title="card2" name={name} setName={setName}/> */}

    </div>
  )
}

export default App
