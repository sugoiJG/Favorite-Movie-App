import { useState,  createContext } from 'react'

const mainContext = createContext();

const MainContextProvider = (props) => {
    
    //make state here

    const [moviesData, setMoviesData] = useState([])
    
    return (
        <mainContext.Provider value={{
            //give state to context here
        }}>
            {props.children}
        </mainContext.Provider>
    )
}

export default MainContextProvider;