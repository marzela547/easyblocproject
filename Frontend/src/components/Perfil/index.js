import Page from '../Page';
import TextBox from '../UI/TextBox';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
const getSecurity = ({security})=>security;

const Perfil = () =>{
    const {user} = useSelector(getSecurity);
    const navigate = useNavigate();

    const onChangeModificar = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        navigate('/login',{replace:true});
    }
    const onChangeCambiar = (e)=>{
      e.preventDefault();
      e.stopPropagation();
      
   }

    return(
        <Page showHeader={true} title="Iniciar Sesión" showNavBar>
            <div className=" flex-col items-center my-10 bg-gray-200 w-11/12 h-auto flex mx-auto p-5">
                <h1 className="text-2xl font-bold">Perfil</h1>
                <hr className=" w-full bg-gray-500 my-3"/>
                <label className="  w-full text-center text-xl">
                  {user.nombre_usu+" "+user.apellido_usu}
                </label>
                <label className=" text-xl my-5">
                  {user.correo_usu}
                </label>
                <label className=" text-xl">
                  {user.telefono_usu}
                </label>
                <button onClick={onChangeModificar} type="button" className=" bg-black lg:hover:bg-gray-800 text-white font-bold w-full h-12 my-3">Modificar</button>
                <button onClick={onChangeCambiar} type="button" className=" bg-black lg:hover:bg-gray-800 text-white font-bold w-full h-12 my-3">Cambiar Contraseña</button>
            </div>
        </Page>
    );
}

export default Perfil;