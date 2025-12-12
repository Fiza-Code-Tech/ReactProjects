import {useContext, useReducer, useEffect, createContext} from "react";

//Invoking the create context method
//This method allows 
const AppContext = createContext();

const AppProvider = ({children}) => {
    //The value to drill
    const greeting = "hello";

    //Return statement to provide the context
    return <AppContext.AppProvider value={{greeting}}>
        {children}
    </AppContext.AppProvider>

}

export const useGlobalContext = () => 
{
    return useContext(AppContext);
}