import { createContext } from "react"
import ChildA from "./Components/ChildA";
import { useState } from "react";

// Step-1 : create context
const userContext=createContext();
//Step-2: wrap all the  child inside the provider -> jis comp we want to acess values has to be wrpped inside provider
//Step-3 : pass the value 
//Step-4: COnsumer ke andar jake value ko consume kr lo.

//here , we want to send the data from the app(sender) -> to childC (consumer)

function App() {

  //Creating the value, we are creating an object
  const [user,setUser]=useState({name:"Ansh"})
  return ( 

    <div>
      <userContext.Provider value={user}>  
        <ChildA/>  {/**already, C inside B, B inside A, so now all child are wrapped inside the provider, anyone can become a consumer at any time */}
      </userContext.Provider>  
    </div>
  )
}

export default App
export {userContext}