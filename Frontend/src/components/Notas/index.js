import { useState,useEffect } from "react";
import ListaElementos from "../NotayCategoriaComponent/ListaElementos";
import Page from "../Page"
import {publicAxios} from "../../store/utils/Axios"
import {BsSearch} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';

const AgregarNota = () =>{ 
    const [termino, setTermino] = useState("")
    const [notas, setNotas] = useState([])
    let correo = "marcelazelaya547@yahoo.com";

    useEffect(() => {
        const traerNotas = async() => {
            const {data} = await publicAxios.get(`/api/notes/allNotas/${correo}`);
            setNotas(data);
            console.log(data);
        }
        traerNotas()
    }, [])

    const navigate = useNavigate();
    const onChangeNavegar = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        navigate('/login',{replace:true});
    }
    
    return(
        <Page showHeader={true}  showNavBar>
        <div className="overflow-hidden py-10">    
        <div className="w-11/12 h-96 mx-auto mt-0 border-4 bg-gray-200 rounded-md shadow-lg text-center overflow-y-scroll">
        <h1 className="mt-6 text-2xl font-bold">Notas</h1>
        <hr className=" w-11/12 m-auto mb-4 bg-gray-500 "/>
        <div  className="w-11/12 mx-auto">
            <hr />
            <div className="mx-auto md:flex md:items-center mb-12">
            <label className="m-2">Categorias</label>
                <input className="w-1/2"
                type="text"
                value={termino}
                onChange= {(e) => setTermino(e.target.value)}
                />
            <button type="submit"><BsSearch className="text-black w-14"/></button> 
            </div>
            <ListaElementos elementos = {notas}/>
            <div  className="w-11/12 p-0.5 m-auto mt-5 mb-8 bg-red-400 text-black">
                <button onClick={onChangeNavegar}>Categoria</button>
            </div>
                <div  className="w-11/12 p-0.5 m-auto mt-5 mb-8 bg-black text-white">
                    <button onClick={onChangeNavegar}>+</button>
                </div>
        </div>
    </div>
    </div>
    </Page>
    )
}

export default AgregarNota;
/*
            <h1>Notas</h1>
            <hr />
            <form class="mx-auto">
            <div class="mx-auto md:flex md:items-center mb-6">
            <label class="">Categorias</label>
            <div class="md:w-1/3">
                <input 
                type="text"
                value={termino}
                onChange= {(e) => setTermino(e.target.value)}
                />
               </div>
               <button type="submit">Buscar</button> 
               </div>

            </form>
            */