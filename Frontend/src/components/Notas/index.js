import { useState } from "react";
import ListaElementos from "../NotayCategoriaComponent/ListaElementos";
import Page from "../Page"

const notas = [
    {
        id: "1",
        titulo:"Probando",
        descripcion:"JI UJTED"
    },
    {
        id: "2",
        titulo:"Probando234",
        descripcion:"JI UJTED222"
    }
]

const AgregarNota = () =>{ 
    const [termino, setTermino] = useState("")
    return(
        <Page showHeader={true}  showNavBar>
        <div className=" w-11/12 h-4/6 mx-auto mt-16 border-4 bg-gray-200 rounded-md shadow-lg text-center">
        <h1 className="mt-6 text-2xl font-bold">Notas</h1>
        <hr className=" w-11/12 m-auto mb-4 bg-gray-500 "/>
        <div  className="w-11/12 mx-auto">
            <hr />
            <form class="mx-auto">
            <div class="mx-auto md:flex md:items-center mb-12">
            <label class="m-2">Categorias</label>
                <input class="w-1/2"
                type="text"
                value={termino}
                onChange= {(e) => setTermino(e.target.value)}
                />
            <button class="m-1" type="submit">Buscar</button> 
            </div>
            <ListaElementos elementos = {notas}/>
            <div  className="w-11/12 p-0.5 m-auto mt-5 mb-8 bg-red-400 text-black">
                <button className="">Categoria</button>
            </div>
            </form>
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