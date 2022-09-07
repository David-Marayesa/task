import { combineReducers } from "redux";
import roomCounterReducer from "./roomCounterReducer";

const allReducers = combineReducers({
    room: roomCounterReducer,

})

export default allReducers;