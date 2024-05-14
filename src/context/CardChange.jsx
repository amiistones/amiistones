import { createContext, useContext, useState} from 'react';
import StageContext from './StageContext.jsx'

const ModifiedStage = createContext({
    StageModification: ()=>{},
})

export default ModifiedStage;


const ModifiedStageProvider = ({children}) => {

    const {} = useContext(ModifiedStage)
    const {StagePos,currentCard, updateCurrentCard, currentStage, updateCurrentStage} = useContext(StageContext)
    


    const modifStage = () => {
        var stageTotalSlot = Object.values(Object.values({currentStage}).at(0).at(1)).at(0)

        stageTotalSlot[Object.values({StagePos}).at(0)] = Object.values({currentCard}).at(0).at(0)

        const tmpResultStage = [Object.values({currentStage}).at(0).at(0),{stageTotalSlot}]
        updateCurrentStage(tmpResultStage)
    }

    return(
        <ModifiedStage.Provider value={{
        StageModification: modifStage,
       }}>
        {children}
        </ModifiedStage.Provider>
    )}

    export {ModifiedStageProvider}
