import { createContext, useContext, useState} from 'react';
import StageContext from './StageContext.jsx'
import StageSizeContext from './StageSizeContext.jsx'

const ModifiedStage = createContext({
    WhichIndex:[],
    IndexModif: () => {},
    StageModification: ()=>{},
})

export default ModifiedStage;


const ModifiedStageProvider = ({children}) => {

    const [WIndex,setWIndex] = useState([])

    const {} = useContext(ModifiedStage)
    const {StagePos,currentCard, updateCurrentCard, currentStage, updateCurrentStage} = useContext(StageContext)
    const {x,y} = useContext(StageSizeContext)
    const {WhichIndex,IndexModif} = useContext(ModifiedStage)

    const SideChange = (tmpStage, Index) => {

        var newTmpStage = tmpStage

        //check north
        if (Index >= x) {
            if (tmpStage[Index].stone.sidesPoints.north > tmpStage[Index-x].stone.sidesPoints.south){
                tmpStage[Index-x].stone.teamColor = tmpStage[Index].stone.teamColor

            }
        }

        //check south
        if (Index < x*(y-1)) {
            if (tmpStage[Index].stone.sidesPoints.south > tmpStage[Index+x].stone.sidesPoints.north){
                tmpStage[Index+x].stone.teamColor = tmpStage[Index].stone.teamColor
            }
        }

        //check left
        if (Index%x){
            if (tmpStage[Index].stone.sidesPoints.west > tmpStage[Index-1].stone.sidesPoints.east){
                tmpStage[Index-1].stone.teamColor = tmpStage[Index].stone.teamColor
                
            }
        }

        //check right
        if ((Index+1)%x){
            if (tmpStage[Index].stone.sidesPoints.east > tmpStage[Index+1].stone.sidesPoints.west){
                tmpStage[Index+1].stone.teamColor = tmpStage[Index].stone.teamColor
            
            }
        }

        return newTmpStage
    }




    const modifStage = () => {
        console.clear()
        if (WhichIndex.includes(StagePos) === false){
            IndexModif(WhichIndex.push(StagePos))
            var stageTotalSlot = currentStage[1].stageTotalSlot

            stageTotalSlot[StagePos] = currentCard[0]
            SideChange(stageTotalSlot,StagePos)

            const tmpResultStage = [currentStage,{stageTotalSlot}]
            updateCurrentStage(tmpResultStage)
        }
        else {
        console.log("Warning: Can't place a card on an existing card")
        }
    }

    return(
        <ModifiedStage.Provider value={{
            WhichIndex: WIndex,
                IndexModif: IndexModif,
                StageModification: modifStage,
        }}>
        {children}
        </ModifiedStage.Provider>
    )}

    export {ModifiedStageProvider}
