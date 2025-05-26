import React from 'react'
import { userContext } from '../App'
import { useContext } from 'react'

//here in this compenent , we will acess the parent -> top most data without prop drilling.


const ChildC = () => {
    
    const user= useContext(userContext)

  return (
    <div>
        data: {user.name}
    </div>
  )
}

export default ChildC