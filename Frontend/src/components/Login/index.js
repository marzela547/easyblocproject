import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { publicAxios } from '../../store/utils/Axios';

import Page from '../Page';
import TextBox from '../UI/TextBox';
import Password from '../UI/Password';
import Content from '../UI/Content';
import { PrimaryButton } from '../UI/Button';

import { useSelector, useDispatch} from 'react-redux';

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

    publicAxios.post(
      '/api/sec/login',
      {
        email: txtCorreo,
        pswd: txtPassword,
      }
    )
    .then(
      ({data}) => {
        console.log(data)
        dispatch(
          {
            type: "Cambio exitoso",
            payload: data,
          }
        );
        navigate('/login',{replace:true});
      }
    )
    .catch(
      (err)=>{
        console.log(err);
        dispatch(
          {
            type: "Cambio erroneo",
            payload: err,
          }
        );
      }
    );
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
  const { hasErrors } = security;

  return (
    <Page showHeader={true} title="Iniciar Sesión" showNavBar>
      <Content>
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
          <PrimaryButton onClick={onBtnClick}>Iniciar Sesión </PrimaryButton>
        </div>
        {
          (hasErrors && (
            <div style={{ width: "100%", padding: '0.5em', marginTop: '1em', color:'#F00' }}>
              No se pudo validar su Correo o Contraseña. Intente nuevamente.
            </div>
          ))
        }

      </Content>
    </Page>
  );
}

export default Login;
