import React from 'react'

const Card = (props) => {  //destrcuting -> ( {children} )
  return (
    <div>{props.children}</div>
  )
}

export default Card