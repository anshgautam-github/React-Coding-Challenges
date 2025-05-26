import React from 'react'

const Card = (props) => {
  return (
    <div>
       
        <input type="text" onChange={(e)=>props.setName(e.target.value)} />
        <p>I am inside child component  and the value is - {props.name}</p>

       {/** SIBLING State sharing */}
       {/* <p>I am inside {props.title} and the value is - {props.name}</p> */}
    </div>
  )
}

export default Card