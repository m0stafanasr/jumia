import { createContext, useReducer, useState } from "react";
import { reducer } from "../reducer/reducer";
export const movContext = createContext();

export default ProdProvider=({children})=>{
   
    //const [list,setList]=useState();
    const [state,dispatch] = useReducer(reducer, {list:[],details:{}})
    return(
        <movContext.Provider value={{state,dispatch}}>
            {children}
        </movContext.Provider>
    )
}