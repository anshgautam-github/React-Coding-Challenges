import React from 'react'

const Button = (props) => {
  return ( //yeh btn ka func we will take it in the form of a prop 
    <div>
         <h2>{props.children}</h2> 
         <button onClick={props.handleClick}>
        <h1>click me</h1>
       
        </button>
    </div>
   
   )
}

export default Button