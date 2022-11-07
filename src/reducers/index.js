import { combineReducers } from "redux"
import counterReducer from "./counter"
import todoReducer from "./todo"
import yesnoReducer from "./yesno"

export default combineReducers({
  counterReducer,
  todoReducer,
  yesnoReducer,
})
