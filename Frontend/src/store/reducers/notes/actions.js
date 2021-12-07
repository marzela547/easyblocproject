import { privateAxios } from "../../utils/Axios";
export const fetchNotesData = (dispatch, correo)=>{
  dispatch(
    {
      type:"NOTES_START_FETCH",
      payload:null
    }
  )
  privateAxios.get(`api/notes/allNotas/`+correo)
  .then(({data})=>{
    console.log(data);
    dispatch(
      {
        type:"NOTES_FETCH_SUCCESS",
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

export const addCategorie = (dispatch, categorie, email, navigate, to)=>{
  dispatch(
    {type:"NOTE_ADD_START", payload:null}
  );
  privateAxios.post('api/notes/newcategory', {
    descripcion: categorie,
    correo: email
})
    .then(({data})=>{
      console.log(data);
      if(data.msg === 1){
        dispatch(
            {type:"NOTE_ADD_ERROR", payload:["La nota ya existe"]}
          )
        window.alert("La nota ya existe");
      }else{
        dispatch(
            {
              type:"NOTE_ADD_SUCCESS",
              payload:null
            }
          );
          dispatch({ type:"NOTE_LIST_CLEAR", payload:null});
          
          navigate(to);
      }
    })
    .catch((err)=>{
      console.log(err);
      dispatch(
        {type:"NOTE_ADD_ERROR", payload:null}
      )
    });
}

export const updCategorie = (dispatch, oldCategorie,newCategorie, email, navigate, to)=>{
    dispatch(
      {type:"NOTE_UPD_START", payload:null}
    );
    privateAxios.put('api/categories/updCategorie',
    {
        descripcion_cat: oldCategorie,
        correo_usu: email,
        actualizacion_cat: newCategorie
    })
      .then(({data})=>{
        console.log(data);
        dispatch(
          {
            type:"NOTE_UPD_SUCCESS",
            payload:null
          }
        );
        dispatch({ type:"NOTE_LIST_CLEAR", payload:null});
        navigate(to);
      })
      .catch((err)=>{
        console.log(err);
        dispatch(
          {type:"NOTE_UPD_ERROR", payload:null}
        )
      });
  }

  export const dltCategorie = (dispatch, categorie, email, navigate, to)=>{
    dispatch(
      {type:"NOTE_DLT_START", payload:null}
    );
    privateAxios.delete('api/categories/deleteCategorie/'+categorie+'/'+email)
      .then(({data})=>{
        console.log(data);
        dispatch(
          {
            type:"NOTE_DLT_SUCCESS",
            payload:null
          }
        );
        dispatch({ type:"NOTE_LIST_CLEAR", payload:null});
        navigate(to);
      })
      .catch((err)=>{
        console.log(err);
        dispatch(
          {type:"NOTE_DLT_ERROR", payload:null}
        )
      });
  }