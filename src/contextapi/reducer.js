// This is part of React ContextAPI, this manages the initial state

export const initialState = {
    basket: [],
};

// Selector
export const getBasketTotal = (basket) => basket !=null ? basket.reduce((amount, item) => item.price + amount, 0): 0;

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
            // First we cloned the current state/data in the basket
            let newBasket = [...state.basket];

            // We then check to see if the product to be removed exists in the basket
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if(index >= 0) {
                // Item exists in the basket, remove it ...
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id})`
                )
            }
            return { 
                ...state,
                basket: newBasket,
            };
        default:
            return state;
    }
}

export default reducer;