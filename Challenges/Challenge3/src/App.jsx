import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App=()=> {
  const [count, setCount] = useState(0)

  

  return (
    <>
    
      <h1>Operaciones</h1>
      <div className="card">
        <span>count is {count}</span>
        <button onClick={() => setCount((count) => count + 1)}> +1 </button>

        <button onClick={()=> setCount((count)=> count -1)}> -1 </button>

        <button onClick={()=>setCount((count)=> count=0)}> Reset </button>
       
      </div>
      
    </>
  )
}

export default App
