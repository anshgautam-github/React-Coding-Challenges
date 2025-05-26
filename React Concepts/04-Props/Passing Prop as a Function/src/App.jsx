import { useState } from 'react'
import Button from './Components/Button'

function App() {

  const [count,setCount]=useState(0);

  function handleClick(){ //so here we will pass the func from parent(APP) to the child(button file)
    setCount(count+1);
  }

  return (
    <>
      <Button handleClick={handleClick}>
        count- {count}
      </Button>
    </>
  )
}

export default App
