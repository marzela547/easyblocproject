import {AiFillDelete} from "react-icons/ai";
import { dltCategorie, fetchCategoriesData} from '../../store/reducers/categories/actions';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

const getSecurity = ({security})=>security;
const ElementoCategoria = ({descripcion_cat}) =>{

    let correo_usu = "kevin@gmail.com";
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector(getSecurity);

const onChangeEliminar = (e)=>{ 
    e.preventDefault();
    e.stopPropagation();
    dltCategorie(dispatch, descripcion_cat, correo_usu,navigate, "/categories");
}

    return(
        <>
        
        <div className="bg-white my-2 max-w-sm rounded overflow-auto shadow-lg">
            <div className="w-full justify-end flex ">
                <button onClick={onChangeEliminar} className="w-5 h-5 border round text-white text-sm mr-2 mt-2 rounded-md  " type="button"><AiFillDelete className="text-black" /></button>  
            </div>
                    <h1 className="mt-6 text-2xl font-bold">Descripcion</h1>
                    <p>{descripcion_cat}</p>
        </div>
        </>
    )
    }
    
    export default ElementoCategoria;