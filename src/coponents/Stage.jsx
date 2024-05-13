import React, { useContext } from "react";
import { useState } from "react";
import StageContext from '../context/StageContext.jsx'
import StageSizeContext from '../context/StageSizeContext.jsx'


//Exported function
export default function Stage (){

    console.clear()

    const [tileVal, setTileVal] = useState(0)
    const [listVal, setListVal] = useState(0)
    const [evaluateVal, setEvaluateVal] = useState(0)
    const [modeVal, setModeVal] = useState(0)
    
    const {StagePos, updateStagePos} = useContext(StageContext)
    const {currentCard, updateCurrentCard} = useContext(StageContext)
    const {currentStage, updateCurrentStage} = useContext(StageContext)


    const {x,y} = useContext(StageSizeContext)


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

    const NavigateList = listNav(tileVal,listVal,evaluateVal,modeVal)
    const GetOffset = Object.values(Object.values({currentStage}).at(0).at(0)).at(0)
    const GetStageSize = Object.values(Object.values({currentStage}).at(0).at(1)).at(0)

    console.log(listNav(0,0,0,1))

    console.log(Object.values({currentStage}).at(0).at(1))
    console.log(GetOffset)
    console.log(NavigateList)

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

            <div>
            <p>{StagePos}</p>

            </div>

            <div>
            <p>{listNav(tileVal,listVal,evaluateVal,2)}</p>
            <p>{listNav(tileVal,listVal,evaluateVal,1).length}</p>
            </div>

            <div>
            <button onClick={() => setModeVal(modeVal + 1)}>Mode+ {modeVal}</button>
            <button onClick={() => setModeVal(modeVal - 1)}>Mode- {modeVal}</button>
            </div>

            <div>
            <button onClick={() => {if(listVal != listNav(tileVal,listVal,evaluateVal,0).length - 1) {setListVal(listVal + 1)}}}>List+ {listVal}</button>
            <button onClick={() => {if(listVal != 0) {setListVal(listVal - 1)}}}>List- {listVal}</button>
            </div>

            <div>
            <button onClick={() => setTileVal(tileVal + 1)}>Tile+ {tileVal}</button>
            <button onClick={() => setTileVal(tileVal - 1)}>Tile- {tileVal}</button>
            </div>

            <div>
            <button onClick={() => {if (evaluateVal != listNav(tileVal,listVal,evaluateVal,1).length - 1){ setEvaluateVal(evaluateVal + 1)}}}>Evaluate+ {evaluateVal}</button>
            <button onClick={() => {if (evaluateVal != 0){ setEvaluateVal(evaluateVal - 1)}}}>Evaluate- {evaluateVal}</button>
            </div>

            </div>
            </React.Fragment>
        )
    }
}
