import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { publicAxios } from '../../store/utils/Axios';
import Page from '../Page';
import { useSelector, useDispatch} from 'react-redux';
import TextBox from '../UI/TextBox';
import Rcodigo from "../Rcodigo";
import { validarCorreo } from '../../store/utils/Validaciones';

const getSecurity = ({security})=>security;
const Remail = ()=>{
  let datosc = {};
  const [txtCorreo, setTxtCorreo] = useState("");
  const security = useSelector(getSecurity);
  const navigate = useNavigate();
  let err=false;
  let expre;
  const onBtnClick =  (e)=> {
    e.preventDefault();
    e.stopPropagation();
    err=false;
    document.getElementById('cormensaje').innerHTML = '';
    expre=/^\s*$/;
    if(expre.test(txtCorreo))
    {
      err=true;
      document.getElementById('cormensaje').innerHTML = 'Error,Campo obligatorio';
    }else{
      publicAxios.post(
        'api/sec/getemail',
        {
            correo: txtCorreo,
        }
      )
      .then(
        ({data}) => {
          if (data.msg=="error"){

            console.log(err);
            document.getElementById('cormensaje').innerHTML = 'Error,Correo no existe';
          }else{
            publicAxios.post(
                'api/sec/passrecovery',
                {
                  correo: txtCorreo,
                  enviar: "enviar"
                }
              )
              .then(
                ({data}) => {
                  const me=data.msg
                  if (data.msg=="Env"){
                    alert("Código enviado");
                    navigate('/rcodigo',{replace:true});
                  }else{
                      alert("Error con envío de código ");
                  }
                }
              )
              .catch(
                (err)=>{
                  console.log(err);
                }
              );

          }
        }
      )
      .catch(
        (err)=>{
          err=true;
        }
      );
    }
  };

  const onChangeHandler = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    if (e.target.name === "correo") {
        setTxtCorreo(e.target.value);
    }
  }

  return (
    <Page showHeader={true} title="Recuperar Usuario" showNavBar>
      <div className=" w-11/12 h-auto mx-auto mt-16 border-4 bg-gray-200  rounded-md shadow-lg text-center justify-center">
        <h1 className="mt-6 mb-2 text-2xl font-bold">Recupera Usuario</h1>
        <hr className=" w-11/12 m-auto mb-4 bg-gray-500"/>
        <div  className="w-11/12 mx-auto">
        <TextBox
            corre={txtCorreo}
            label="Correo"
            value={txtCorreo}
            placeholder="Correo"
            onChange={onChangeHandler}
            name="correo"
          />
          <label id="cormensaje" className=" text-red-600 text-sm w-4 h-4 mb-4" ></label>
          <button onClick={onBtnClick} type="button" className=" bg-black text-white font-bold w-full h-12 mt-2" >Enviar Código </button>
        </div>
      </div>
      
    </Page>
  );
}
export default Remail;
