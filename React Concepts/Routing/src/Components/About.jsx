import React from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {

  const navigate=useNavigate();

  function handleClick(){
    navigate('/dashboard');
  }

  return (
    <div>
      <div>About</div>
      <button onClick={handleClick}> Move to DASHBAORD</button>
    </div>
  )
}

export default About