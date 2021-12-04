import { privateAxios } from "../../utils/Axios";
export const addNewNota = (dispatch, titulo_Not, categoria_Not, descripcion_Not, correo_usu,navigate, to)=>{
    dispatch(
      {type:"NOTAS_ADD_START", payload:null}
    );
    privateAxios.post('/api/notes/new', {titulo_Not, categoria_Not, descripcion_Not, correo_usu})
      .then(({data})=>{
        console.log(data);
        dispatch(
          {
            type:"NOTAS_ADD_SUCCESS",
            payload:null
          }
        );
        dispatch({ type:"NOTAS_LIST_CLEAR", payload:null});
        navigate(to);
      })
      .catch((err)=>{
        console.log(err);
        dispatch(
          {type:"NOTAS_ADD_ERROR", payload:null}
        )
      });
  }
  