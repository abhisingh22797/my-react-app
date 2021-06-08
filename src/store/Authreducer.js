import React from 'react'

function Authreducer(state = {
    token: localStorage.usertoken,
    username: localStorage.username,
    email: localStorage.email,
    islogedIn: localStorage.usertoken ? true : false

}, action) {
    switch (action.type) {

        case "LOGIN": {
            state = { ...state }
            state['token'] = action.payload?.token
            state['email'] = action.payload?.email
            state['username'] = action.payload?.username
            state['islogedIn'] = true
            alert(state.token + state.username + state.email + state.islogedIn);
            return state
        }

        case "LOGOUT": {
            state = { ...state }
            localStorage.clear()
            state.token = undefined
            state.username = undefined
            state.email = undefined
            state.islogedIn = false
            return state

        }
        default: return state;
    }

}


export default Authreducer;