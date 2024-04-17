import { useState } from 'react'
import './App.css'
import Stage from './Stage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Stage
      x ={3}
      y ={3}
      />
    </>
  )
}

export default App
