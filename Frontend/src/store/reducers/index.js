import { combineReducers } from "redux";

// My Reducer 
import securityReducer from './security';
import notaReducer from './notas';

const rootReducer = combineReducers(
  {
    //All Reducers
    security: securityReducer,
    nota:notaReducer
  }
)

export default rootReducer;
