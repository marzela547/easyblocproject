import { useState,useEffect } from "react";
import ListaElementos from "../NotayCategoriaComponent/ListaElementoCategoria";
import Page from "../Page"
import {publicAxios} from "../../store/utils/Axios"
import { useNavigate } from 'react-router-dom';

const AgregarCategoria = () =>{ 

    const [termino, setTermino] = useState("")
    const [categoria, setcategoria] = useState([])
    let correo = "kevin@gmail.com";
    useEffect(() => {
        const traerCateg = async() => {
            const {data} = await publicAxios.get(`/api/notes/allcate/${correo}`);
            setcategoria(data);
            console.log(data);
        }
        traerCateg()
    }, [])

    const navigate = useNavigate();
    const onChangeNavegar = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        navigate('/login',{replace:true});
    }
    //************************************************************************** */
    return(
        <Page showHeader={true}  showNavBar>
        <div className="w-11/12 h-4/6 mx-auto mt-16 border-4 bg-gray-200 rounded-md shadow-lg text-center">
        <h1 className="mt-6 text-2xl font-bold">Categorias</h1>
        <hr className=" w-11/12 m-auto mb-4 bg-gray-500 "/>
        <div  className="w-11/12 mx-auto">
            <ListaElementos elementos = {categoria}/>
            <div  className="w-11/12 p-0.5 m-auto mt-5 mb-8 bg-black text-white">
                <button onClick={onChangeNavegar}>+</button>
            </div>
        </div>
    </div>
    </Page>
    )
}

export default AgregarCategoria;


/* <form className="mx-auto">
            <div className="mx-auto md:flex md:items-center mb-12">
            <div  className="w-11/12 p-0.5 m-auto mt-5 mb-8 bg-red-400 text-black">
                <button className="">+</button>
            </div>
            </div>
            </form>
            */