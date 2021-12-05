import Page from '../Page';
import TextBox from '../UI/TextBox';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { publicAxios } from '../../store/utils/Axios';
import {PrimaryButton} from '../UI/Button';
import { useSelector, useDispatch} from 'react-redux';

const NCategoria = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const txtCorreo= "kevin@gmail.com";
    const categorie = "Invierno";
    let opc = 2;
    let title;
    let boton;
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
          if(opc===1){
            publicAxios.post(
              'api/categories/newcategory',
              {
                  descripcion: txtCategorie,
                  correo: txtCorreo
              }
              )
              .then(
              ({data}) => {
                console.log(data)
                window.alert("Categoría creada exitosamente");
                //  navigate('/dashboard',{replace:true});
              }
              )
              .catch(
              (err)=>{
                  console.log(err);
              }
              );
          }else
              {
                publicAxios.put(
                  'api/categories/updCategorie',
                  {
                    Descripcion_Cat: categorie,
                    correo_usu: txtCorreo,
                    
                  },{
                    actualizacion_cat: txtCategorie
                  }
                  )
                  .then(
                  ({data}) => {
                    console.log(data)
                    window.alert("Categoría guardada exitosamente");
                    //  navigate('/dashboard',{replace:true});
                  }
                  )
                  .catch(
                  (err)=>{
                      console.log(err);
                  }
                  );
              }
        }
    }

    const onChangeHandler = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setTxtCategorie(e.target.value);
      }

    if(opc ===1){
      title = "Nueva Categoría";
      boton = "Crear";
    }else{
      title = "Modificar Categoría";
      boton = "Guardar";
    }

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
            </div>
        </Page>
    );
}

export default NCategoria;