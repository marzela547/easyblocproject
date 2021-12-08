import { privateAxios } from "../../utils/Axios";


export const fetchNotesData = (dispatch, correo)=>{
  dispatch(
    {
      type:"NOTAS_CARGADA",
      payload:null
    }
  )
  privateAxios.get(`api/notes/allNotas/`+correo)
  .then(({data})=>{
    console.log(data);
    dispatch(
      {
        type:"NOTAS_CARGADA_SUCCESS",
        payload: data
      }
    ) 
  })
  .catch((err)=>{
    console.log(err);
    dispatch(
      {
        type:"NOTES_FETCH_ERROR",
        payload: ["Error al traer información"]
      }
    )
  });
}

/**************************************INSERTAR NOTA************************************************************************/
export const addNewNota = (dispatch, titulo_Not, categoria_Not, descripcion_Not, estilos_not,correo_usu,navigate, to)=>{
    dispatch(
      {type:"NOTAS_ADD_START", payload:null}
    );
    privateAxios.post('/api/notes/new', {titulo_Not, categoria_Not, descripcion_Not,estilos_not,correo_usu})
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
/*******************************************UPDATE NOTA********************************************************************************/
export const UpdNot = (dispatch,id, titulo_Not, descripcion_Not, categoria_Not,estilos_not,navigate, to)=>{
  dispatch(
    {type:"NOTAS_ADD_START", payload:null}
  );
  privateAxios.put(`/api/notes/updNota/${id}`,{titulo_Not, descripcion_Not, categoria_Not,estilos_not})
    .then(({data})=>{
      console.log(data);
      dispatch(
        {
          type:"NOTAS_UPD_SUCCESS",
          payload:null
        }
      );
      dispatch({ type:"NOTAS_LIST_CLEAR", payload:null});
      navigate(to);
    })
    .catch((err)=>{
      console.log(err);
      dispatch(
        {type:"NOTAS_UPD_ERROR", payload:null}
      )
    });
}



/*********************************************************************************************************************************** */
export const cargarData = (dispatch,id, navigate, to)=>{
  dispatch(
    {
      type:"NOTAS_CARGADA",
      payload:null
    }
  )

  privateAxios.get(`api/notes/OneNota/${id}`)
  .then(({data})=>{
    console.log(data);
    dispatch(
      {
        type:"NOTA_CARGADA_SUCCESS",
        payload: data
      }
    )
    navigate(to)
  })
  .catch((err)=>{
    console.log(err);
    dispatch(
      {
        type:"NOTAS_CARGADA_ERROR",
        payload: ["Error al traer Info"]
      }
    )
  });
}
/********************************ELIMINAR NOTA******************************************* */  

export const dltNota = (dispatch, id, navigate, to)=>{
  dispatch(
    {type:"NOTA_DLT_START", payload:null}
  );
  privateAxios.delete('api/notes/deleteNote/'+id)
    .then(({data})=>{
      console.log(data);
      dispatch(
        {
          type:"NOTA_DLT_SUCCESS",
          payload:null
        }
      );
      dispatch({ type:"NOTA_LIST_CLEAR", payload:null});
      navigate(to);
    })
    .catch((err)=>{
      console.log(err);
      dispatch(
        {type:"NOTA_DLT_ERROR", payload:null}
      )
    });

    
}

export const almacenar = (dispatch, id, navigate, to)=>{
  dispatch(
    {
      type:"M_NOTA", payload: id
    }
  )

  navigate(to);
}