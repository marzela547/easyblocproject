import { useState,useEffect } from "react";
import ListaElementos from "../NotayCategoriaComponent/ListaElementos";
import Page from "../Page"
import {publicAxios} from "../../store/utils/Axios"
import {BsSearch} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { fetchNotesData, searchByCategorie } from '../../store/reducers/notas/action';

const getSecurity = ({security})=>security;
const getNotes =({notes})=>notes;

const AgregarNota = () =>{ 
    const [termino, setTermino] = useState("");
    const [notas, setNotas] = useState([]);
    const dispatch = useDispatch();
    const {user} = useSelector(getSecurity);
    let {items} = useSelector(getNotes);
 
    const cargar = () =>{
        if(items.length ==0)
            fetchNotesData(dispatch, user.correo_usu);
        console.log(items[0])
    }

    useEffect(() => {
        cargar();
    }, [])

    const navigate = useNavigate();
    const onChangeNavegar = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if(e.target.name ==="Categories"){
            navigate('/categories',{replace:true});
        }else{
            navigate('/addnote',{replace:true});
        }
    }
    
    const onBusqueda = (e)=>{
        console.log(termino);
    }
    return(
        <Page showHeader={true}  showNavBar>
        <div className="overflow-hidden py-10">    
        <div className="w-11/12 h-4/5 mx-auto mt-0 border-4 bg-gray-200 rounded-md shadow-lg text-center overflow-y-scroll">
        <h1 className="mt-6 text-2xl font-bold">Notas</h1>
        <hr className=" w-11/12 m-auto my-4 bg-gray-500 "/>
        <div  className="w-11/12 mx-auto">
            <div className="mx-auto md:flex md:items-center mb-12">
            <label className="m-2">Categorias</label>
                <input className="w-1/2"
                type="text"
                value={termino}
                onChange= {(e) => {
                    setTermino(e.target.value);
                    searchByCategorie(dispatch, e.target.value, user.correo_usu);
                }}
                />
            <button type="submit"><BsSearch className="text-black w-14"/></button> 
            </div>
            <ListaElementos elementos = {items}/>
            <button onClick={onChangeNavegar} name="Categories" type="button" className=" bg-black lg:hover:bg-gray-800 text-white font-bold w-full h-12 my-3">Categor??as</button>
            <button onClick={onChangeNavegar} name="New" type="button" className=" bg-black lg:hover:bg-gray-800 text-white font-bold w-full h-12 my-3">Agregar Nota</button>
        </div>
    </div>
    </div>
    </Page>
    )
}

export default AgregarNota;
