

function CartReducer(state = {
    cart: [],
    totalprice: 0

}, action) {
    switch (action.type) {

        case "ADDTOCART": {
            state = { ...state }
            if (action.payload.cartdata) {
                state.cart.push(action.payload.cartdata)
            }
            state["isLoading"] = false;
            return state
        }

        case "EMPTYCART": {
            state = { ...state }

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