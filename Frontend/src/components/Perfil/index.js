import Page from '../Page';
import TextBox from '../UI/TextBox';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { publicAxios } from '../../store/utils/Axios';
import {PrimaryButton} from '../UI/Button';
import { useSelector, useDispatch} from 'react-redux';

const Perfil = () =>{
   /* const dispatch = useDispatch();*/
    const navigate = useNavigate();
    const txtCorreo= "kevin@gmail.com";

    const [lblNom, setLblNom] = useState("");
    const [lblCorreo, setLblCorreo] = useState("");
    const [lblTel, setLblTel] = useState("");

    const onChangeModificar = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        navigate('/login',{replace:true});
    }
    const onChangeCambiar = (e)=>{
      // e.preventDefault();
      // e.stopPropagation();
      
   }
    publicAxios.post(
      'api/sec/profile',{
        correo: txtCorreo
      })
      .then(
      ({data}) => {
          console.log(data)
        // console.log(data.nombre_usu)
         setLblNom(data.nombre_usu+" "+data.apellido_usu);
         setLblCorreo(data.correo_usu);
         setLblTel(data.telefono_usu);
        //  navigate('/dashboard',{replace:true});
      }
      )
      .catch(
      (err)=>{
          console.log(err);
      }
      );
    

    return(
        <Page showHeader={true} title="Iniciar Sesión" showNavBar>
            <div className=" flex-col items-center my-10 bg-gray-200 w-11/12 h-auto flex mx-auto p-5">
                <h1 className="text-2xl font-bold">Perfil</h1>
                <hr className=" w-full bg-gray-500 my-3"/>
                <label className=" bg-white w-full text-center text-xl h-10">
                  {lblNom}
                </label>
                <label className=" text-xl my-3">
                  {lblCorreo}
                </label>
                <label className=" text-xl">
                  {lblTel}
                </label>
                <button onClick={onChangeModificar} type="button" className=" bg-black lg:hover:bg-gray-800 text-white font-bold w-full h-12 my-3">Modificar</button>
                <button onClick={onChangeCambiar} type="button" className=" bg-black lg:hover:bg-gray-800 text-white font-bold w-full h-12 my-3">Cambiar Contraseña</button>
            </div>
        </Page>
    );
}

export default Perfil;