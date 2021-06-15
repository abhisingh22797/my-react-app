

function CartReducer(state = {
    cart: [],
    isLoading: false,
    totalprice: 0,
    removed: false

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

        case "TOTALPRICE": {
            state = { ...state }
            state['totalprice'] = action.payload?.price

            return state
        }
        case "UPDATE_CART": {
            state = { ...state }
            state.cart = action.payload.cart
            state["isLoading"] = true;

            return state
        }
        case "REMOVE_ITEM_FROM_CART": {
            state = { ...state }
            state["removed"] = true
            return state
        }

        case "EMPTYCART": {
            state = { ...state }
            state.cart = []
            alert("deleted");
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