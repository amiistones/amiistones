import { createContext, useContext, useState} from 'react';
import StageContext from './StageContext.jsx'

const ModifiedStage = createContext({
    isInit: true,
    updateIsInit: () => {},
    
})

export default ModifiedStage;


const ModifiedStageProvider = ({children}) => {

    const [Init, setInit] = useState(true)

    const {isInit, updateIsInit} = useContext(ModifiedStage)
    const {currentCard, updateCurrentCard, currentStage, updateCurrentStage} = useContext(StageContext)
    


    const modifStage = (value, object) => {
        let tmpstage = {currentStage}
        tmpstage[value] = object
        updateCurrentStage({currentStage})
    }

    return(
        <ModifiedStage.Provider value={{
            isInit: Init,
                updateIsInit: setInit
        }}>
        {children}
        </ModifiedStage.Provider>
    )}

export {ModifiedStageProvider}
