import React, { useContext } from "react";
import { useState } from "react";

import PropTypes from "prop-types";

import StageContext from '../context/StageContext.jsx'
import StageSizeContext from '../context/StageSizeContext.jsx'
import ModifiedStage from '../context/CardChange.jsx'
import template from '../template.jsx'
import template2 from '../template2.jsx'


//Exported function
export default function Stage (){


    const {StagePos, updateStagePos} = useContext(StageContext)
    const {currentCard, updateCurrentCard} = useContext(StageContext)
    const {currentStage, updateCurrentStage} = useContext(StageContext)

    const {StageModification} = useContext(ModifiedStage)
    const {minValue, maxValue, x,y, updateSizeX, updateSizeY} = useContext(StageSizeContext)

    /*List comprehension function used to navigate through the stage*/
        const listNav = (tile,list,evaluate,mode) => {

            /*takes the current stage object*/
                const stageObjects = Object
                .values(Object.values({currentStage}).at(0).at(1))
                .at(0)


            /*chose an entire array from one of the stage's index*/
                const stageObjIndex = stageObjects.at(tile)

            const stageChoseIndex = Object
                    .entries(stageObjIndex)


           /*chose one of the list within the selected array (typically [0,1,2])*/
                const stageChoseList = stageChoseIndex.at(list)



            /*chose one of the value within the selected list*/
                const stageChoseListKeyVal = Object
                .entries(stageChoseList
                    .at(1))
                .at(evaluate)
            .at(1)


            /*Returns the selected value*/
                switch(mode){


                        /*Throws in the whole selected array*/
                    case 0:
                        return stageChoseIndex


                        /*Throws in the keys of the current selected list*/
                    case 1:
   return Object.keys(stageChoseList.at(1))

                
                        /*Throws in the value of the selected key*/
                    case 2:
                        return stageChoseListKeyVal
                }
        }

    const GetStageSize = currentStage[1].stageTotalSlot
    const keyDataCurrentCard = Object.keys(currentCard[0].data)
    const valDataCurrentCard = Object.values(currentCard[0].data)


    const ShowCard = (
        valDataCurrentCard.map((o,Index)=>{
            if (Index !== 3){
            return(
            <tr>
                <th scope='row'>{keyDataCurrentCard.at(Index)}</th>
                <td>{valDataCurrentCard.at(Index)}</td>
            </tr>
            )}
        }))

    const lowerWindowSide = window.innerWidth < window.innerHeight ? "width" : "height"
    const lowerStageSide = Object.values({x}).at(0) < Object.values({y}).at(0) ? Object.values({x}).at(0) : Object.values({y}).at(0)
    
    const StageVisualBase = GetStageSize.map((O, Index)=>{
        return(
            <table>
            {Index % Object.values({x}).at(0) === 0 ? <tr></tr> : <></>}
            <td className="stoneTile">
                <button style={{'width': ('70' / lowerStageSide) + (lowerWindowSide === "width" ? 'vw' : 'vh'),
                                'height': ('70' / lowerStageSide) + (lowerWindowSide === "width" ? 'vw' : 'vh')
                                }}
                    key={Index} onClick={()=>{updateStagePos(Index)}}><img src={JSON.stringify(listNav(Index,0,3,2))}/></button>
            </td>
            </table>
        )
    })


if (Object.values({x}).at(0)<= 8 && Object.values({y}).at(0) <= 8){
    return(
        <React.Fragment>
        <table width='100%' cellSpacing='0' align='center'>
        <tbody>
        {StageVisualBase}
        </tbody>
        </table>
        <br/>

        <table border='5' width='100%'>

        <tbody>
        <tr>
        <th>Selected Card: {valDataCurrentCard.at(1)}</th>
        </tr>
        {ShowCard}
        </tbody>

        </table>

        <table border='2' width='100%'>
        <tbody>
        <tr>
        <th scope='col'>Selected Tile</th>
        <th scope='col'>{StagePos}</th>
        </tr>
        </tbody>
        </table>

        <button onClick={()=>{updateCurrentCard(template())}}>template1</button>
        <button onClick={()=>{updateCurrentCard(template2())}}>template2</button>
        <button onClick={()=>{StageModification()}}>Confirm Changes</button>
        </React.Fragment>
    )
}
}
