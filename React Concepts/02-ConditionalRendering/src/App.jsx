import React from 'react'
import LoginBtn from './Components/LoginBtn'
import LogoutBtn from './Components/LogoutBtn'
import { useState } from 'react'
import { div } from 'three/tsl'


const App = () => {

  const [isLoggedIn, setLoggedIn]= useState(false); 


  //Way -1 -> If-else 

  // if(isLoggedIn){
  //   return (
  //     <LoginBtn/>
  //   )
  // }
  // else{
  //   return(
  //     <LogoutBtn/>
  //   )
  // }

  //Way-2 -> Ternary Operator

  // return (
  //   <div>
  //     {isLoggedIn? <LogoutBtn/>: <LoginBtn/>}
  //   </div>
  // )


  //Way-3 -> LOGICAL Operator 
  // {isLoggedIn && <LogoutBtn/>}

  //WAY -4 -> EARLY RETURN 
  if(!isLoggedIn){
    return (
      <LoginBtn/>
    )
  }
  //if contrinue true -> upper code run then below won't execite -> so early binding done . 

  return (
    <div>
      <h1>Welcome to everybody</h1>
      <div>
        {isLoggedIn && <LogoutBtn/>}
      </div>
    </div>
  )
}

export default App