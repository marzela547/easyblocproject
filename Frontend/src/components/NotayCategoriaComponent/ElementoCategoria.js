
const ElementoCategoria = ({descripcion_cat}) =>{


    return(
        <div className="bg-white my-2 max-w-sm rounded overflow-auto shadow-lg">
           
                    <h1 className="mt-6 text-2xl font-bold">Descripcion</h1>
                    <p>{descripcion_cat}</p>
        </div>
       
    )
    }
    
    export default ElementoCategoria;