const initialState = {
  items:[],
  fetching:false,
  hasErrors:false,
  errors:[],
  note: {}
}

const noteReducer = (state=initialState, action)=>{
  const {type, payload} = action;
  switch( type ){
    case "NOTES_START_FETCH":
      return {
        ...state,
        fetching:true,
        hasErrors:false,
        errors:[]
      }
    case "NOTES_FETCH_SUCCESS":
      
      return {
        ...state,
        fetching:false,
        hasErrors:false,
        errors:[],
        items: [...state.items, ...payload.documents]
      }
    case "NOTE_FETCH_SUCCESS":
      return{
        ...state,
        fetching:false,
        hasErrors:false,
        errors:[],
        categorie: payload.categorie
      }
    case "NOTE_LIST_CLEAR":
      return{...initialState};
  default:
    return state;
  }
}

export default noteReducer;
