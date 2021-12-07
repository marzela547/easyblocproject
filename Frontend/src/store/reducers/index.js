import { combineReducers } from "redux";
import categorieReducer from "./categories";
import securityReducer from './security';
import notaReducer from './notas';

const rootReducer = combineReducers(
  {
    //All Reducers
    security: securityReducer,
    categories: categorieReducer,
    nota:notaReducer
 
  }
)

export default rootReducer;
