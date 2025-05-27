import { useCallback, useState } from "react"
import ChildComp from "./Components/childComp";

function App() {

  const [count,setCount]=useState(0);

  //Problem yeh h ki-> yeh pura comp rerender hone par -> yeh func ka ref chnage ho rha h aur ek new func bn 
  //rha h, as count value is being updated, so parent comp is rendered-> and the func is re-created -> i want
  //to freeze this function, i want iska new ref na baney
  function handleClick(){
    setCount(count+1);
  }

// const handleClick=useCallback(()=>{
//     setCount(count+1);
// },[])

//after this counter value not updated (func freeze) > but good part-> child comp is not re-renderd (not perfect eg)

  return ( 

    <div>
      <div>
        Count :{count}
      </div>
      <div>
        <button onClick={handleClick}>
            Increament  
            {/**When we click on this btn -> the child comp will get re-rendered unnecessary -> waste and why?
             * Here, what is happenng is -> child comp which is inside the parent comp is getting rendered unnecessary
             * So we go inside child comp -> wrap the child comp inside -> react.memo() ke andar
             */}
        </button>
      </div>
      <br />
      <div>
        <ChildComp buttonName="abcd"/>
      </div>
    </div>
  )
}

export default App
