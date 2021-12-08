import Elemento from "./ElementoCategoria";

const ListaElementosCategoria = props =>{
    const elementos = props.elementos.map((elemento, index) => {
        return <Elemento key={elemento._id} llaveMaestra = {elemento._id} descripcion_cat = {elemento.descripcion_cat}/>
    })
    return( 
        <div className="text-black-500">
            {elementos}
        </div>
    )
}

export default ListaElementosCategoria;