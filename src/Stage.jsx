import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import template from './template.jsx'

export default function Stage ({x,y}){

    /*First initialisation of the stage with placeholder cards inside them*/
    const stage =  []
    stage.push({offset: x})
    stage.push({
        stageTotalSlot: Array
        .apply(null, Array(x*y))
        .map(()=>{return template()})
    })


    /*List comprehension function used to navigate through the stage*/
    const listNav = (tile,list,evaluate,mode) => {

        /*takes the current stage object*/
            const stageObjects = Object
            .values(stage.at(1))
            .at(0)

        /*chose an entire array from one of the stage's index*/
            const stageObjIndex = stageObjects.at(tile)

        const stageChoseIndex = Object
            .entries(Object
                .entries(stageObjIndex)
                .at(0)
                .at(1))

        /*chose one of the list within the selected array (typically [0,1,2])*/
            const stageChoseList = stageChoseIndex.at(list)

        /*chose one of the value within the selected list*/
            const stageChoseListKeyVal = Object
            .entries(stageChoseList
                .at(1))
            .at(evaluate)
            .at(1)

        switch(mode){
        case 0:
            return stageChoseIndex
        case 1:
            return stageChoseList
        case 2:
            return stageChoseListKeyVal
        }
    }
    console.clear()
    console.log(listNav(0,0,0,0))
    
}
