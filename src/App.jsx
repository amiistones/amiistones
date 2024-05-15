import { Outlet } from "react-router-dom";

import { StageContextProvider } from './context/StageContext'
import { ModifiedStageProvider} from './context/CardChange'

import './App.css'

function App() {
  return (
    <>
      <main>
        <StageContextProvider>
        <ModifiedStageProvider>
        <Outlet />
        </ModifiedStageProvider>
        </StageContextProvider>
      </main>
    </>
    );
}

export default App
