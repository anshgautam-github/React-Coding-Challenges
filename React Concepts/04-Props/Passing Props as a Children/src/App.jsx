import './App.css'
import Card from './Components/Card'

function App() {
  return (
    <>
      <Card>
        <h1>hello </h1>
        <p>how are you</p>
      </Card>
      <Card children="I am the chidlren">
        Hello i am the one doing overriding the above chidlren
      </Card>
    </>
  )
}

export default App
