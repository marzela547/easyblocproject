import { combineReducers } from "redux";
import categorieReducer from "./categories";
import securityReducer from './security';

const rootReducer = combineReducers(
  {
    //All Reducers
    security: securityReducer,
    categories: categorieReducer
  }
)

export default rootReducer;
