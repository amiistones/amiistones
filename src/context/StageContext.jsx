import React from 'react';
import {createContext, useContext} from 'react';
import { useState } from 'react';
import template from '../template'
import {StageSizeContextProvider} from './StageSizeContext'
import StageSizeContext from './StageSizeContext'

export const StageContext = createContext({
    StagePos: 0,
    updateStagePos: () => {},
    currentCard: [],
    updateCurrentCard: () => {},
    currentStage: [],
    updateCurrentStage: () => {},
});

export default StageContext;

const StageContextProvider = ({children}) => {

    const {StagePos, updateStagePos, currentCard, updateCurrentCard, currentStage, updateCurrentStage} = useContext(StageContext)
    const {x,y} = useContext(StageSizeContext)

    const [curCard, setCurrentCard] = useState(template())
    const [stagePos, setStagePos] = useState([])

    /*First initialisation of the stage with placeholder cards inside them*/
    const stage =  []
        stage.push({offset: Object.values({x}).at(0)})
        stage.push({
            stageTotalSlot: Array
            .apply(null, Array(Object.values({x}).at(0)*Object.values({y}).at(0)))
            .map(()=>{return Object.entries(template()).at(0).at(1)})
        })
    const [curStage, setCurrentStage] = useState(stage)

    return(
        <StageSizeContextProvider>
        <StageContext.Provider value={{
            StagePos: stagePos,
            updateStagePos: setStagePos,
            currentCard: curCard,
            updateCurrentCard: setCurrentCard,
            currentStage: curStage,
            updateCurrentStage: setCurrentStage,
        }}>
        {children}
        </StageContext.Provider>
        </StageSizeContextProvider>

    )}

export {StageContextProvider}

