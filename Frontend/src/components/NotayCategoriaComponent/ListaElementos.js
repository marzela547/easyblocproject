import Elemento from "./Elemento";

const ListaElementos = props =>{
    const elementos = props.elementos.map(elemento => {
        return <Elemento key={elemento._id} titulo = {elemento.titulo_Not} llaveMaestra = {elemento._id}/>
    })
    return( 
        <div className="text-black-500">
            {elementos}
        </div>
    )
}

export default ListaElementos;