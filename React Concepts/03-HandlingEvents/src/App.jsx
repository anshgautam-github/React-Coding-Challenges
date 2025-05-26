import React from 'react'

const App = () => {

function  handleMouseOver() {
  alert("Hello mouse over the paragrapph")
}

 function handleInputChange(e){
  console.log("Value till now - ",e.target.value)
 }

 function handleSubmit(e){
    e.preventDefault();
    alert("Form submitted")
 }

  return (
    <div>

      {/**Handle Event -1  */}
      <form onSubmit={handleSubmit} >
          <input type="text" onChange={handleInputChange}/>
          <button type="submit">Submit</button>
      </form>

      {/**Handle Event -2  */}
      <p onMouseOver={handleMouseOver}>I am a para</p>


      {/**Handle Event -3  */}
      <button onClick={handleClick}>Click Me</button>

    </div>
  )
}

export default App