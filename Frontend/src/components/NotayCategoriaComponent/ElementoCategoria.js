import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { fetchOneCategorieData } from '../../store/reducers/categories/actions';

const ElementoCategoria = ({descripcion_cat,llaveMaestra}) =>{
    const dispatch = useDispatch();
    const getSecurity = ({security})=>security;
    const security = useSelector(getSecurity);
    const navigate = useNavigate();
    const onChangeNavegar = (e)=>{
        fetchOneCategorieData(dispatch,llaveMaestra, navigate, '/add_categories');
        //almacenar(dispatch, llaveMaestra, navigate, '/updnote');
    }

    return(
        <div onClick={onChangeNavegar} className=" h-10 my-2 bg-white max-w-sm rounded overflow-auto shadow-lg">
        <h1  className="text-2xl">{descripcion_cat}</h1>
        <p className="hidden">{llaveMaestra}</p>
        </div>

    )
    }
    
    export default ElementoCategoria;