import { fetchCategoriesData } from '../../store/reducers/categories/actions';
import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react'

const getSecurity = ({security})=>security;
const getCategories =({categories})=>categories;

let correo = "marcelazelaya547@yahoo.com";
const CategoriesList = ()=>{

    const dispatch = useDispatch();
    const {user} = useSelector(getSecurity);
    const {items} = useSelector(getCategories);

    const cargar = () =>{
        fetchCategoriesData(dispatch, correo);
    }

    useEffect(()=>{
        cargar();
        console.log(items[0].Descripcion_Cat);
    },[]);

    return(
        <h1>Holas</h1>
    );
}

export default CategoriesList;