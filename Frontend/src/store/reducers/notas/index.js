const initialState = {
    
    titulo:"", 
    nota:""
    
  }
  const notaReducer = (state=initialState, action)=>{
    const {type, payload} = action;
    switch( type ){
        case "NOTA_START_FETCH":
            return {
                ...state,
                fetching:true,
                hasErrors:false,
                errors:[]
            }

            case "NOTA_FETCH_SUCCESS":
                return {
                    ...state,
                    titulo: payload.titulo_Not,
                    Desnota:payload.descripcion_Not
                  }
                  default:
                    return state;
    }
  }
  export default notaReducer;