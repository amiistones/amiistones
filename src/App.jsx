import { useState } from 'react'
import './App.css'
import Stage from './Stage'
import VisualStage from './VisualStage'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
        <VisualStage/>
        <Stage
        x ={8}
        y ={8}
        />
        </>
    )
}

export default App
