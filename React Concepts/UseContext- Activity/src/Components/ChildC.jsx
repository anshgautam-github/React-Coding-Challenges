import React from 'react'
import { themeContext } from '../App'
import { useContext } from 'react'

const ChildC = () => {
    
  const {theme,setTheme}= useContext(themeContext)

  function handleCLick(){
    if(theme==='light'){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }

  return (
    <div>
        <button onClick={handleCLick}>
            Chnage theme
        </button>
    </div>
  )
}

export default ChildC