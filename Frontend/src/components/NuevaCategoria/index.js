import Page from '../Page';
import TextBox from '../UI/TextBox';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { addCategorie, updCategorie, dltCategorie} from '../../store/reducers/categories/actions';
const getSecurity = ({security})=>security;
const getCategories = ({categories})=>categories;
const NCategoria = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector(getSecurity);
    const {categorie} = useSelector(getCategories);
    let title;
    let boton;
    let btnDelete;
    let err = false;
    let expre;
    const [txtCategorie, setTxtCategorie] = useState("");

    const onChangeCate = (e)=>{
       e.preventDefault();
       e.stopPropagation();
       expre=/^\s*$/;
        if(expre.test(txtCategorie))
        {
        //console.log(expre.test(txtPassword)+" entro");
          document.getElementById('mensajen').innerHTML = 'Por favor, ingrese una categoria';
          err=true;
        }else{
          document.getElementById('mensajen').innerHTML = '';
        }
        if(err==false){
          if(categorie.descripcion_cat === undefined){
            console.log(categorie);
            addCategorie(dispatch, txtCategorie, user.correo_usu, navigate, "/categories");
          }else
              {
                console.log(categorie);
                updCategorie(dispatch, categorie.descripcion_cat, txtCategorie, user.correo_usu, navigate, "/categories");
                
              }
        }
    }

    const onChangeDelete = (e) =>{
      dltCategorie(dispatch, categorie, user.correo_usu,navigate, "/categories");
    }

    const onChangeHandler = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setTxtCategorie(e.target.value);
      }
      if(categorie.descripcion_cat == undefined){
        title = "Nueva Categoría";
        boton = "Crear";
        
      }else{
        title = "Modificar Categoría";
        boton = "Guardar";
        btnDelete = <button onClick={onChangeDelete} type="button" className=" bg-black lg:hover:bg-gray-800 text-white font-bold w-full h-12 my-3" >Eliminar</button>
        
      }

      const cargar=()=>{
      
        if(!(categorie.descripcion_cat===undefined) )
          setTxtCategorie(categorie.descripcion_cat);
      }
    useEffect(()=>{
      cargar();
      console.log(categorie);
    }, []);

    return(
        <Page showHeader={true} title="Iniciar Sesión" showNavBar>
            <div className=" flex-col items-center my-10 bg-gray-200 w-9/12 h-auto flex mx-auto p-5">
                <h1 className="text-2xl font-bold">{title}</h1>
                <hr className=" w-full bg-gray-500 my-3"/>
                <TextBox 
                    id="categorie"
                    label="Ingresar Categoria"
                    value={txtCategorie}
                    placeholder="Ingresar categoría"
                    onChange={onChangeHandler}
                    name="categorie"
                />
                <label id="mensajen" className="text-red-600 text-sm w-full h-4 mb-4 text-center"></label>
                <button onClick={onChangeCate} type="button" className=" bg-black lg:hover:bg-gray-800 text-white font-bold w-full h-12 my-3">{boton}</button>
                {btnDelete}
            </div>
        </Page>
    );
}

export default NCategoria;