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


/*
<Card>
  ....  yeh sab iske andr jo likha jayega -> we call them as a children , in short opening nd closing tag ke andar sab cheez children hoti hn
  ....  in the above eg -> both h1 and p are children of Card. 
  ....  To output them ek sath -> we can do -> {props.children}
</Card>

USECASE -> i don;t know in advance, how many props are coming -> 1 , 2, 3...etc, but for handling them we can handle like this.

NOTE -> 

<Card> ...  </Card>
<Card> ...  </Card>

NOW, if we do -> {props.children} in the card component-> then dono ke component ke children output honge.


*/
