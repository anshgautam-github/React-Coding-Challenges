import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Dashboard from "./Components/Dashboard"
import Navbar from "./Components/Navbar"
import ParamComp from "./Components/ParamComp"
import Courses from "./Components/Courses"
import Reports from "./Components/Reports"
import NotFound from "./Components/NotFound"



//Step-1 : import createBrwoserRouter
//Step-2 :  Create routes 
//Step-3 : Provide the context of the routes u created to the main app

const router= createBrowserRouter(
  [
    {
     path:"/",
     element: 
      <div>
        <Navbar/>
        <Home/>
      </div>
     ,
    },
    {
      path:"/about",
      element: 
      <div>
        <Navbar/>
        <About/>
      </div>
     ,
    },
    {
      path:"/dashboard",
      element: 
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children: [
        {
          path: 'courses',
          element: <Courses/>
        },
        {
          path: 'reports',
          element: <Reports/>
        }
      ]
      
    },
    {
      path:"/student/:id",
      element:
      <div>
        <Navbar/>
        <ParamComp/>
      </div>
    },
    {
      path:"*",
      element:<NotFound/>
    }
  ]
)

function App() {

  return ( 

    <div> 
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
