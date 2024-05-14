import React, { useContext } from "react";
import { useState } from "react";
import StageContext from './context/StageContext.jsx'
import StageSizeContext from './context/StageSizeContext.jsx'
import ModifiedStage from './context/CardChange.jsx'
import template from './template.jsx'
import template2 from './template2.jsx'


//Exported function
export default function Stage (){

    console.clear()

    const {StagePos, updateStagePos} = useContext(StageContext)
    const {currentCard, updateCurrentCard} = useContext(StageContext)
    const {currentStage, updateCurrentStage} = useContext(StageContext)

    const {x,y} = useContext(StageSizeContext)

    const {StageModification} = useContext(ModifiedStage)

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

    const GetStageSize = Object.values(Object.values({currentStage}).at(0).at(1)).at(0)
    const keyDataCurrentCard = Object.keys(Object.values(Object.values({currentCard}).at(0).at(0)).at(0))
    const valDataCurrentCard = Object.values(Object.values(Object.values({currentCard}).at(0).at(0)).at(0))

    console.log(Object.values(Object.values({currentStage}).at(0).at(1)).at(0))

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

    if (Object.values({x}).at(0)<= 8 && Object.values({y}).at(0) <= 8){
        return(
            <React.Fragment>
            <div>
            { GetStageSize.map((O, Index)=>{
                if (Index % Object.values({x}).at(0) === 0){
                    console.log('worked')
                    return (
                        <>
                        <br></br>
                        <button key={Index} onClick={()=>{updateStagePos(Index)}}><img src={JSON.stringify(listNav(Index,0,3,2))}/></button>
                        </>
                    )
                }
                return(
                    <>
                    <button key={Index} onClick={()=>{updateStagePos(Index)}}><img src={JSON.stringify(listNav(Index,0,3,2))}/></button>
                    </>
                )
            })
            }
            </div>
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
