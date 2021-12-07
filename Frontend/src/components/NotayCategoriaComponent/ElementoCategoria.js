import {AiFillDelete} from "react-icons/ai"

const ElementoCategoria = ({Descripcion_Cat}) =>{
    
const onChangeEliminar = (e)=>{  
}

    return(
        <>
        
        <div className="bg-white my-2 max-w-sm rounded overflow-auto shadow-lg">
            <div className="w-full justify-end flex ">
                <button onClick={onChangeEliminar} className="w-5 h-5 border round text-white text-sm mr-2 mt-2 rounded-md  " type="button"><AiFillDelete className="text-black" /></button>  
            </div>
                    <h1 className="mt-6 text-2xl font-bold">Descripcion</h1>
                    <p>{Descripcion_Cat}</p>
        </div>
        </>
    )
    }
    
    export default ElementoCategoria;