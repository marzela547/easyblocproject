const initialState = {
    hasMore:true,
    items:[],
    hasErrors:false,
    isFetching: false,
    errors:[],
    prueba:'4',
    notes: {},
    idNote: 0
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

        case "NOTA_CARGADA_SUCCESS":
          return {
            ...state,
            prueba:'2',
            hasErrors:false,
            error:[],
            notes:payload,
            hasMore: true
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
        case "M_NOTA":
          //let dato = payload;
          //localStorage.setItem("id", JSON.stringify(dato))
            return {
              ...state,
              isFetching: false,
              hasErrors: true,
              errors: [payload],
              idNote: payload
          }
        case "NOTA_LIST_CLEAR":
          return {...initialState};
        default:
          return state;
    }
  }
  export default notaReducer;
  