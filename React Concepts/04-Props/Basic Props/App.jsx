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
