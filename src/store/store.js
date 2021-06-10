import { createStore, combineReducers, applyMiddleware } from "redux";
import Authreducer from "./Authreducer"
import CartReducer from "./CartReducer"


let middle = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}
var reducers = combineReducers({ CartReducer, Authreducer });

let store = createStore(reducers, applyMiddleware(middle))

export default store