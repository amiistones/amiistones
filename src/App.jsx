import './App.css'
import Stage from './Stage'
import {StageContextProvider} from './context/StageContext'
import { ModifiedStageProvider} from './context/CardChange'



function App() {

    return (
        <StageContextProvider>
        <ModifiedStageProvider>
        <Stage/>
        </ModifiedStageProvider>
        </StageContextProvider>
    )
}

export default App
