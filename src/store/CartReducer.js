

function CartReducer(state = {
    cart: [],
    isLoading: false

}, action) {
    switch (action.type) {

        case "ADDTOCART": {
            state = { ...state }
            if (action.payload.cartdata) {
                state.cart.push(action.payload.cartdata)
                state["isLoading"] = true;
            }

            return state
        }
        case "UPDATE_CART": {
            state = { ...state }
            state.cart = action.payload.cart
            state["isLoading"] = true;

            return state
        }

        case "EMPTYCART": {
            state = { ...state }
            state.cart = []
            return state

        }
        case "REMOVEFROMCART": {
            state = { ...state }

            return state

        }
        default: return state;
    }

}


export default CartReducer;