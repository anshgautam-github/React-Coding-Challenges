import React from 'react'
import { Link } from 'react-router-dom'

//here, we have used Link -> instead of anchor tag (a) -> bcoz it will redirect to new page -> a tag
//Instead of Link, we could have also used the NavLink

const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">Abbout</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar