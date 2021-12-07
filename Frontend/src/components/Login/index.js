import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import imagen from '../imgs/UsuarioL.svg';
import Page from '../Page';
import TextBox from '../UI/TextBox';
import Password from '../UI/Password';
import { useSelector, useDispatch} from 'react-redux';
import { doLogin } from '../../store/reducers/security/actions';

const getSecurity = ({security})=>security;
const Login = ()=>{

  const [txtCorreo, setTxtCorreo] = useState("");
  const [txtPassword, setTxtPassword] = useState("");

  const security = useSelector(getSecurity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onBtnClick =  (e)=> {
    e.preventDefault();
    e.stopPropagation();
    //console.log("holaaaa");
   doLogin(dispatch, txtCorreo, txtPassword, navigate);

  };
  const onChangeHandler = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    if (e.target.name === "txtCorreo") {
      setTxtCorreo(e.target.value);
    } else {
      setTxtPassword(e.target.value);
    }
  }
  const onBtnRegistro = (e) =>{
    e.preventDefault();
    e.stopPropagation();
    navigate('/add_user',{replace:true});
  }
  const { hasErrors } = security;
  //let abc = require('../imgs/Easy_Bloc.svg');
  return (
    <Page showHeader={true} title="Iniciar Sesión" showNavBar>
      <div className=" flex-col items-center my-10 bg-gray-200 w-9/12 h-auto flex mx-auto p-5">
        <img className="rounded-full w-2/4 h-2/4" src={imagen} />
        <TextBox
          label="Correo Electrónico"
          value={txtCorreo}
          placeholder="Correo Electrónico Valido"
          onChange={onChangeHandler}
          name="txtCorreo"
          onBlur={(e)=>{
            alert("salio de foco");
          }}
         />
        <Password
          label="Contraseña"
          value={txtPassword}
          placeholder="Contraseña"
          onChange={onChangeHandler}
          name="txtPassword"
        />
        <div style={{width:"100%", padding:'0.5em', marginTop:'1em'}}>
        <button onClick={onBtnClick} type="button" className=" bg-black lg:hover:bg-gray-800 text-white font-bold w-full h-12 my-3">Iniciar Sesión</button>
        <button onClick={onBtnRegistro} type="button" className=" bg-black lg:hover:bg-gray-800 text-white font-bold w-full h-12 my-3">Regístrate</button>
        </div>
        {
          (hasErrors && (
            <div style={{ width: "100%", padding: '0.5em', marginTop: '1em', color:'#F00' }}>
              No se pudo validar su Correo o Contraseña. Intente nuevamente.
            </div>
          ))
        }

      </div>
    </Page>
  );
}

export default Login;
