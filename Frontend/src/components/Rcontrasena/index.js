import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { publicAxios } from '../../store/utils/Axios';
import Page from '../Page';
import Password from '../UI/Password';
import { useSelector, useDispatch} from 'react-redux';
import TextBox from '../UI/TextBox';
const getSecurity = ({security})=>security;
const Rcontrasen = ()=>{

  //const [txtCorreo, setTxtCorreo] = useState("");
  const [txtPassworda, setTxtPassworda] = useState("");
  const [txtPasswordn, setTxtPasswordn] = useState("");
  const [txtPasswordc, setTxtPasswordc] = useState("");
  const security = useSelector(getSecurity);
  const navigate = useNavigate();
  const txtCorreo= "kevin@gmail.com";
  let err=false;
  let expre;

  const onBtnClick =  (e)=> {
    e.preventDefault();
    e.stopPropagation();
    err=false;
    document.getElementById('mensajea').innerHTML = '';
    document.getElementById('mensajen').innerHTML = '';

    if(txtPasswordn!=txtPasswordc)
    {
      err=true;
      document.getElementById('mensajen').innerHTML = 'Error, No coincide con confirmar contraseña';
    }
    expre =/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(!expre.test(txtPasswordn))
    {
      err=true;
      document.getElementById('mensajen').innerHTML = 'Error,Minimo [1 letra, 1 numero,1 especial, 8 caracteres]';
    }

    expre=/^\s*$/;
    if(expre.test(txtPasswordn))
    {
      err=true;
      document.getElementById('mensajen').innerHTML = 'Error,campo obligatorio';
    }
    if(err==false){
      publicAxios.post(
        'api/sec/ccontrasena',
        {
          correo: txtCorreo,
          ncontrasena: txtPasswordn,
        }
      )
      .then(
        ({data}) => {
          console.log(data.msg)
          const me=data.msg
          if (data.msg==1){
            alert("Cambio de Contraseña exitoso");
          }
        }
      )
      .catch(
        (err)=>{
          console.log(err);
        }
      );
 navigate('/',{replace:true});

    }else{
      console.log("errores");
    }
  };

  const onChangeHandler = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    if (e.target.name === "ncontrasena") {
      setTxtPasswordn(e.target.value);
    }
    if (e.target.name === "ccontrasena") {
      setTxtPasswordc(e.target.value);
    }
  }
  const { hasErrors } = security;

  return (
    <Page showHeader={true} title="Iniciar Sesión" showNavBar>
      <div className=" w-11/12 h-auto mx-auto mt-16 border-4 bg-gray-200 rounded-md shadow-lg text-center justify-center">
        <h1 className="mt-6 text-2xl font-bold">Cambio de Contraseña</h1>
        <hr className=" w-11/12 m-auto mb-4 bg-gray-500 "/>
        <div  className="w-11/12 mx-auto">
        <TextBox
          label="Correo Electrónico"
          value={txtCorreo}
          placeholder="Correo Electrónico Valido"
          onChange={onChangeHandler}
          name="txtCorreo"
          readonly
         />
          <label id="mensajea" className=" text-red-600 text-sm w-4 h-4 mb-4" ></label>
          <Password
            id="cnueva"
            label="Contraseña Nueva"
            value={txtPasswordn}
            placeholder="Contraseña Nueva"
            onChange={onChangeHandler}
            name="ncontrasena"
          />
          <label id="mensajen" className="text-red-600 text-sm w-4 h-4 mb-4"></label>
          <Password
            className="mb-4"
            id="cconfirmar"
            label="Contraseña Confirmar"
            value={txtPasswordc}
            placeholder="Contraseña Confirmar"
            onChange={onChangeHandler}
            name="ccontrasena"
          />
          <button  onClick={onBtnClick} type="button" className=" bg-black text-white font-bold w-full h-12" >Iniciar Sesión </button>
        </div>
      </div>
    </Page>
  );
}
export default Rcontrasen;
