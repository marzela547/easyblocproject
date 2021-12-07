import {AiFillDelete} from "react-icons/ai"

const Elemento = ({titulo}) =>{
    
const onChangeEliminar = (e)=>{  
}


return(
    <>
    <div className="my-2 bg-white max-w-sm rounded overflow-auto shadow-lg">
        <div className="w-full justify-end flex ">
            <button onClick={onChangeEliminar} className="w-5 h-5 border round text-white text-sm mr-2 mt-2 rounded-md  " type="button"><AiFillDelete className="text-black" /></button>  
        </div>
        
            <h1 className="text-2xl font-bold">Titulo</h1>
            <p>{titulo}</p>
    </div>
    </>
)
}

export default Elemento;