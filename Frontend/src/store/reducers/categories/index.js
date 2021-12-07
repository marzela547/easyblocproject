const initialState = {
    items:[],
    fetching:false,
    hasErrors:false,
    errors:[]
  }
  
  const categorieReducer = (state=initialState, action)=>{
    const {type, payload} = action;
    switch( type ){
      case "CATEGORIES_START_FETCH":
        return {
          ...state,
          fetching:true,
          hasErrors:false,
          errors:[]
        }
      case "CATEGORIES_FETCH_SUCCESS":
        
        return {
          ...state,
          fetching:false,
          hasErrors:false,
          errors:[],
          items: [...state.items, ...payload.documents]
        }
      case "CATEGORIE_LIST_CLEAR":
        return{...initialState};
    default:
      return state;
    }
  }
  
  export default categorieReducer;
  