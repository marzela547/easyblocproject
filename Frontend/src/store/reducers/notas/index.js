const initialState = {
    hasMore:true,
    fetching: false,
    items:[],
    hasErrors:false,
    errors:[],
    prueba:'4',
    notes: {}
  }
  const notaReducer = (state=initialState, action)=>{
    const {type, payload} = action;
    switch( type ){
     
        case "NOTAS_CARGADA":
          return {
                ...state,
                hasErrors:false,
                fetching:true,
                errors:[],
                prueba:'1'
            }

        case "NOTAS_CARGADA_SUCCESS":
          return {
            ...state,
            fetching: false,
            hasMore: true,
            prueba:'2',
            hasErrors:false,
            error:[],
            items:[...state.items, ...payload.documents]
            }
        case "NOTA_LIST_CLEAR":
          return {...initialState};
          default:
        return state;
    }
  }
  export default notaReducer;
  