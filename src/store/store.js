import { createStore, combineReducers, applyMiddleware } from "redux";
import Authreducer from "./Authreducer"
import CartReducer from "./CartReducer"
import thunk from "redux-thunk";
import createSaga from "redux-saga"
import MainSaga from "./sagas";


let middle = store => next => action => {

    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

let sagMiddleware = createSaga()
var reducers = combineReducers({ CartReducer, Authreducer });

let store = createStore(reducers, applyMiddleware(middle, thunk, sagMiddleware))
sagMiddleware.run(MainSaga)
export default store