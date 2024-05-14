import { createContext, useContext, useState} from 'react';
import StageContext from './StageContext.jsx'

const ModifiedStage = createContext({
    StageModification: ()=>{},
})

export default ModifiedStage;


const ModifiedStageProvider = ({children}) => {

    const {} = useContext(ModifiedStage)
    const {StagePos,currentCard, updateCurrentCard, currentStage, updateCurrentStage} = useContext(StageContext)
    


    const SideChange = (tmpStage, Index) => {
        console.log('called')

        var newTmpStage = tmpStage
        console.log(tmpStage[Index].stone.sidesPoints) 

        return newTmpStage
    }




    const modifStage = () => {
        console.clear()
        var stageTotalSlot = currentStage[1].stageTotalSlot

        stageTotalSlot[StagePos] = currentCard[0]
        SideChange(stageTotalSlot,StagePos)

        const tmpResultStage = [currentStage,{stageTotalSlot}]
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
