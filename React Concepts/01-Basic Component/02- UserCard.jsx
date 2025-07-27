/*
📁 component/                  // Root folder of your project
├── 📁 node_modules/           // Dependencies installed by npm
├── 📁 public/                // Static files (e.g., index.html)
├── 📁 src/                   // Source code
│   ├── 📁 assets/            // Image, icons, etc.
│   │   └── react.svg         // Example image file
│   └── 📁 components/        // Reusable UI components
│       ├── UserCard.css      // Styling for UserCard
│       └── UserCard.jsx      // React component
*/


import React from 'react'
import "./UserCard.css"
import reactt from '../assets/react.svg'

const UserCard = () => {
  return (
    <div className='user-container'>
        <p id='user-name'>Ansh Gautam</p>
        <img src={reactt} alt="" />
        <p id='user-desc'>Description of Ansh Gautam</p>
    </div>
  )
}

export default UserCard
