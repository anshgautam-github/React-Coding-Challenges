  import React from "react";
  import {NavLink,Link,Route,Routes} from 'react-router-dom';
  import Home from "./components/Home"
  import User from "./components/User"
  import About from "./components/About"

  const App = () => {
    return (
      <>
        <nav className="bg-slate-400  flex gap-10 justify-center">
            <NavLink className={(e)=>{
              return [
                e.isActive? "text-red-400":"text-black",
                e.isActive?"font-semibold text-xl":""
              ].join(" ");
            }} to="/">Home</NavLink>
            
            <NavLink className={(e)=>{
              return [
                e.isActive? "text-red-400":"text-black",
                e.isActive?"font-semibold text-xl":""
              ].join(" ");
            }} to="/user">User</NavLink>
           
            <NavLink className={(e)=>{
              return [
                e.isActive? "text-red-400":"text-black",
                e.isActive?"font-semibold text-xl":""
              ].join(" ");
            }} to="/about">About</NavLink>
  
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
      </>
    );
  };

  export default App;
