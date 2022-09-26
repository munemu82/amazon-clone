// This is part of React ContextAPI, this manages the initial state

export const initialState = {
    basket: [],
};

const reducer = (state, action) => {
    // testing
    console.log(action);

    switch(action.type){
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return { 
                ...state,  // keep previous state, e.g. if there was other state like user session etc... keep them
                basket: [...state.basket, action.item]    // this says include what is was already in the basket (i.e. existing state) plus add the one item we adding/dispatching
            };
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from basket
            return { state };
        default:
            return state;
    }
}

export default reducer;