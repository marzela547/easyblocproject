import BotonAgregar from "./BotonAgregar";
import Elemento from "./Elemento";

const ListaElementos = props =>{
    const elementos = props.elementos.map(elemento => {
        return <Elemento key={elemento.id} elemento = {elemento} />
    })
    return( 
        <div className="text-red-500">
            {elementos}
            <BotonAgregar/>
        </div>
    )
}

export default ListaElementos;