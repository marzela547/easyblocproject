import { privateAxios } from "../../utils/Axios";
export const fetchNotesData = (dispatch, page, pageItem, text)=>{
  dispatch(
    {
      type:"NOTES_START_FETCH",
      payload:null
    }
  )
  privateAxios.get(`/api/swot/facet/${page}/${pageItem}`)
  .then(({data})=>{
    console.log(data);
    dispatch(
      {
        type:"SWOT_FETCH_SUCCESS",
        payload: data
      }
    )
  })
  .catch((err)=>{
    console.log(err);
    dispatch(
      {
        type:"SWOT_FETCH_ERROR",
        payload: ["Error al traer Info"]
      }
    )
  });
}

export const addNewNote = (dispatch, swotDesc, swotMeta, swotType, navigate, to)=>{
  dispatch(
    {type:"NOTE_ADD_START", payload:null}
  );
  privateAxios.post('api/notes/new', {swotDesc, swotType, swotMeta})
    .then(({data})=>{
      console.log(data);
      dispatch(
        {
          type:"SWOT_ADD_SUCCESS",
          payload:null
        }
      );
      dispatch({ type:"SWOT_LIST_CLEAR", payload:null});
      navigate(to);
    })
    .catch((err)=>{
      console.log(err);
      dispatch(
        {type:"SWOT_ADD_ERROR", payload:null}
      )
    });
}
