import React, { useState } from "react";

const App = () => {
 
  const[value,setValue]=useState({name:"",password:""});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div className="p-4">
      <h5>Form</h5>
      <form action="" onSubmit={handleSubmit}>
        <input onChange={(e)=>setValue({...value,name:e.target.value})}
         className="border-2 px-1 py-1 mx-2" type="text" placeholder="Name"autoComplete="off"/>
        <input onChange={(e)=>setValue({...value,password:e.target.value})}
         type="password" placeholder="password"autoComplete="off"/>
        <input
         className="px-3 py-1 bg-sky-600 rounded-sm text-white text-sm"
          type="submit"
        />
      </form>
    </div>
  );
};

export default App;
