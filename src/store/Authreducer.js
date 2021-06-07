import React from 'react'

function Authreducer(state = {

}, action) {
    switch (action.type) {
        case "LOGIN": {
            state['token'] = action.payload?.token
            alert(state.token);
            return state
        }
        default: return state;
    }

}


export default Authreducer;