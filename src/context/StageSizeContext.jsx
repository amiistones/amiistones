import React from 'react'
import {createContext, useContext, useState} from 'react'
import template from '../template'


const StageSizeContext = createContext({
    x: 8,
    updateSizeX: () => {},
    y: 8,
    updateSizeY: () => {}

});

export default StageSizeContext

const StageSizeContextProvider = ({children}) => {
    
    const {x,y,updateSizeX,updateSizeY} = useContext(StageSizeContext);

    const [valX, setValX] = useState(8)
    const [valY, setValY] = useState(8)

    return (
        <StageSizeContext.Provider value={{
            x: valX,
            y: valY,
            updateSizeX: setValX,
            updateSizeY: setValY
        }}>
        {children}
        </StageSizeContext.Provider>
    )};

export {StageSizeContextProvider}
