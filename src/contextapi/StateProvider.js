// Setup data layer
// We need this to tracket basket state

import React, { createContext, useContext, useReducer } from 'react';


// CREATE THE DATA LAYER

export const StateContext = createContext();


// BUILD A PROVIDER
export const StateProvider = ( { reducer, initialState, children } )  => (
    <StateContext.Provider value={ useReducer(reducer, initialState) } >
        { children }
    </StateContext.Provider>
);


// This is how we use it inside a component 

export const useStateValue = () => useContext(StateContext);