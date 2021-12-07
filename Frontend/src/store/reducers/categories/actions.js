import { privateAxios } from "../../utils/Axios";
export const fetchCategoriesData = (dispatch, correo)=>{
  dispatch(
    {
      type:"CATEGORIES_START_FETCH",
      payload:null
    }
  )
  privateAxios.get(`api/categories/allCate/`+correo)
  .then(({data})=>{
    console.log(data);
    dispatch(
      {
        type:"CATEGORIES_FETCH_SUCCESS",
        payload: data
      }
    ) 
  })
  .catch((err)=>{
    console.log(err);
    dispatch(
      {
        type:"CATEGORIES_FETCH_ERROR",
        payload: ["Error al traer información"]
      }
    )
  });
}

export const addCategorie = (dispatch, categorie, email, navigate, to)=>{
  dispatch(
    {type:"CATEGORIE_ADD_START", payload:null}
  );
  privateAxios.post('api/categories/newcategory', {
    descripcion: categorie,
    correo: email
})
    .then(({data})=>{
      console.log(data);
      if(data.msg === 1){
        dispatch(
            {type:"CATEGORIE_ADD_ERROR", payload:["La categoría ya existe"]}
          )
        window.alert("La categoría ya existe");
      }else{
        dispatch(
            {
              type:"CATEGORIE_ADD_SUCCESS",
              payload:null
            }
          );
          dispatch({ type:"CATEGORIE_LIST_CLEAR", payload:null});
          navigate(to);
      }
    })
    .catch((err)=>{
      console.log(err);
      dispatch(
        {type:"CATEGORIE_ADD_ERROR", payload:null}
      )
    });
}

export const updCategorie = (dispatch, oldCategorie,newCategorie, email, navigate, to)=>{
    dispatch(
      {type:"CATEGORIE_UPD_START", payload:null}
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
            type:"CATEGORIE_UPD_SUCCESS",
            payload:null
          }
        );
        dispatch({ type:"CATEGORIE_LIST_CLEAR", payload:null});
        navigate(to);
      })
      .catch((err)=>{
        console.log(err);
        dispatch(
          {type:"CATEGORIE_UPD_ERROR", payload:null}
        )
      });
  }

  export const dltCategorie = (dispatch, categorie, email, navigate, to)=>{
    dispatch(
      {type:"CATEGORIE_DLT_START", payload:null}
    );
    privateAxios.delete('api/categories/deleteCategorie/'+categorie+'/'+email)
      .then(({data})=>{
        console.log(data);
        dispatch(
          {
            type:"CATEGORIE_DLT_SUCCESS",
            payload:null
          }
        );
        dispatch({ type:"CATEGORIE_LIST_CLEAR", payload:null});
        navigate(to);
      })
      .catch((err)=>{
        console.log(err);
        dispatch(
          {type:"CATEGORIE_DLT_ERROR", payload:null}
        )
      });
  }