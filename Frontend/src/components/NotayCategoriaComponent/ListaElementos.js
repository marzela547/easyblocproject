//import BotonAgregar from "./BotonAgregar";
import Elemento from "./Elemento";

const ListaElementos = props =>{
    const elementos = props.elementos.map(elemento => {
        return <Elemento key={elemento._id} titulo = {elemento.titulo_Not}/>
    })
    return( 
        <div className="text-black-500">
            {elementos}
        </div>
    )
}

export default ListaElementos;