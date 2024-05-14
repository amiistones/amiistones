import { createContext } from 'react'

const StageInteractionContext = createContext({
    CardSideChange: () => {},

})

export default StageInteractionContext

export const StageInteractionProvider = ({children}) => {



    return(
        <StageInteractionContext.Provider value={{
            CardSideChange: () => {},
        }}>
        {children}
        </StageInteractionContext.Provider>

    )

}

