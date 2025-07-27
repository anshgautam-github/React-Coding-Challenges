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


import UserCard from './components/UserCard'
import logo from './assets/react.svg'
function App() {

  return (
    <>
      <UserCard name="Ansh" img={logo} desc="hello, how are you"/>
      <UserCard name="SAM" img={logo} desc="hi, i am sam"/>
      <UserCard name="RAHUL" img={logo} desc="i am rahul"/>
    </>
  )
}

export default App
