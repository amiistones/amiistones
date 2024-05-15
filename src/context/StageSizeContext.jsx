import React from 'react'
import {createContext, useContext, useState} from 'react'
import template from '../template'

const defaultSizeX = 3;
const defaultSizeY = 3;

const StageSizeContext = createContext({
    minValue: 2,
    maxValue: 8,
    maxGap: 3,
    x: localStorage.getItem("sizeX") ? parseInt(localStorage.getItem("sizeX")) : defaultSizeX,
    y: localStorage.getItem("sizeY") ? parseInt(localStorage.getItem("sizeY")) : defaultSizeY,
    updateSizeX: () => {},
    updateSizeY: () => {}

});

export default StageSizeContext

const StageSizeContextProvider = ({children}) => {
    
    const {minValue,maxValue,maxGap,x,y,updateSizeX,updateSizeY} = useContext(StageSizeContext);

    const [valX, setValX] = useState(localStorage.getItem("sizeX") ? parseInt(localStorage.getItem("sizeX")) : defaultSizeX);
    const [valY, setValY] = useState(localStorage.getItem("sizeY") ? parseInt(localStorage.getItem("sizeY")) : defaultSizeY);

    const updateXValue = (value) => {
        localStorage.setItem("sizeX", value);
        setValX(value);
    }
    const updateYValue = (value) => {
        localStorage.setItem("sizeY", value);
        setValY(value);
    }

    return (
        <StageSizeContext.Provider value={{
            minValue,
            maxValue,
            maxGap,
            x: valX,
            y: valY,
            updateSizeX: updateXValue,
            updateSizeY: updateYValue
        }}>
        {children}
        </StageSizeContext.Provider>
    )};

export {StageSizeContextProvider}
