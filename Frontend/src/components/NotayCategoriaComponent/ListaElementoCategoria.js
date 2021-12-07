import Elemento from "./ElementoCategoria";

const ListaElementosCategoria = props =>{
    const elementos = props.elementos.map(elemento => {
        return <Elemento key={elemento._id} Descripcion_Cat = {elemento.Descripcion_Cat}/>
    })
    return( 
        <div className="text-black-500">
            {elementos}
        </div>
    )
}

export default ListaElementosCategoria;