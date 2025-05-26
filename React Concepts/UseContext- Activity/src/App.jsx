import { createContext } from "react"
import ChildA from "./Components/ChildA";
import { useState } from "react";

//Multile context -> 
const userContext=createContext();
const themeContext=createContext();

function App() {

  const [user,setUser]=useState({name:"Ansh"})
  const [theme,setTheme]=useState("light")

  return ( 

    <div> 
      <userContext.Provider value={user}>
        <themeContext.Provider value={{theme,setTheme}}>  
          <div id="container" style={{backgroundColor: theme==="light" ? "beige" : "black"}}>
          <ChildA/> 
          </div>
        </themeContext.Provider> 
      </userContext.Provider> 
    </div>
  )
}

export default App
export {themeContext}