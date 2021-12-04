import { useState } from "react";
import ListaElementos from "../componentes/ListaElementos";

const categorias = [
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

const AgregarCategoria = () =>{ 
    const [termino, setTermino] = useState("")
    return(
        <>
            <h1>Categorias</h1>
            <hr />
            
            <ListaElementos elementos = {categorias}/>
        </>
    )
}

export default AgregarCategoria;