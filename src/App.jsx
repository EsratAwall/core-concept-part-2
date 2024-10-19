import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './countery'
import Team from './Team'
import Users from './users'
import Friends from './friends'

function App() {

function handleClick(){
  alert('button clicked')
}

const handleClick2 = () =>{
  alert('button 2 clicked')
}


const addToFive = (num) => {
  alert(num + 5);
}

  return (
    <>
      <h3>React Core Concepts Part-2</h3>
  
  <Friends></Friends>
<Users></Users>


      <Counter></Counter>
       <button onClick={handleClick}>Click me</button>
       <button onClick={handleClick2}>Click Two</button>
       <button onClick={() =>{alert('third clicked')}}>Third</button>
       <button onClick={() =>{addToFive(3)}}>Four</button>

       <Team></Team>
    </>
  )
}

export default App
