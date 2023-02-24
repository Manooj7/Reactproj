import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const [n,setNumber] = useState(0);//setNumber is userdefined
  const [user,serPerson] = useState({
    name:"MANOJ"
  })
  const increaseCount = () =>{
    setNumber(n+1);
  }
  const namee = () =>{
    serPerson(user);
  }
  // useEffect(()=>{
  //   console.log("This component has mounted.")
  // },[])
 

  return (
    <div className="App">
     <button onClick={increaseCount}>count increase{n}</button>
     <h1>Name {namee.name}</h1>
    </div>
  )
}

export default App
