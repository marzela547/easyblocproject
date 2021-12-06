const initialState = {
    hasMore:true,
    items:[],
    hasErrors:false,
    errors:[],
    prueba:'4'
    
  }
  const notaReducer = (state=initialState, action)=>{
    const {type, payload} = action;
    switch( type ){
        case "NOTAS_CARGADA":
            return {
                ...state,
                hasErrors:false,
                errors:[],
                prueba:'1'
            }

            case "NOTAS_CARGADA_SUCCESS":
                return {
                    ...state,
                    prueba:'2',
                    hasErrors:false,
                    error:[],
                    items:[...state.items, ...payload.documents],
                    hasMore: true
                  }
              case "NOTA_LIST_CLEAR":
                return {...initialState};
                  default:
                    return state;
    }
  }
  export default notaReducer;
  