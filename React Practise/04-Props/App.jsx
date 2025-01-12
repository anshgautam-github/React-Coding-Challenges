import Card from "./components/Card"

function App() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "David",
      profession: "Pilot",
    },
    {
      image:
        "https://images.unsplash.com/photo-1627313433073-a98d074772e5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Peter",
      profession: "Engineer",
    },
    {
      image:
        "https://images.unsplash.com/photo-1511022542517-3d4a8183bd8a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sam",
      profession: "Scientist",
    },
  ];
  return (
    <>
      <div className="w-full h-screen flex flex-row items-center justify-center gap-10 bg-zinc-200">
        {data.map((elem,index)=>(
          <Card key={index} person={elem}/>
        ))}
     </div>
    </>
  )
}

export default App
