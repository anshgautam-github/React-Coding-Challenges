  import React from "react";
  import {Link,Route,Routes} from 'react-router-dom';
  import Home from "./components/Home"
  import User from "./components/User"
  import About from "./components/About"

  const App = () => {
  

    return (
      <>
        <nav className=" bg-red-400 flex gap-10 justify-center">
          <Link to="/">Home</Link>
          <Link to="/user">User</Link>
          <Link to="/about">About</Link>
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
