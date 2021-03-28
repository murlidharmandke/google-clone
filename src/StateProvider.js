import React, {createContext, useContext, useReducer } from "react";
//preparing the data layer
export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

// Hook Which Allow us To Pull Information From The Data Layer
export const useStateValue = () => useContext(StateContext);