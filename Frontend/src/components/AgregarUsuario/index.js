import Page from '../Page';
import TextBox from '../UI/TextBox';
import Password from '../UI/Password';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { publicAxios } from '../../store/utils/Axios';
import {PrimaryButton} from '../UI/Button';
import { useSelector, useDispatch} from 'react-redux';
import {validarCaracteresContrasena, 
        validarIgualdadContrasena,
        soloNumeros,
        validarCorreo,
        soloLetras} from '../../store/utils/Validaciones';

const NUsuario = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //Validaciones val = new Validaciones();
    const [txtName, setTxtName] = useState("");
    const [txtLastName, setTxtLastName] = useState("");
    const [txtPhone, setTxtPhone] = useState("");
    const [txtEmail, setTxtEmail] = useState("");
    const [txtPasswordn, setTxtPasswordn] = useState("");
    const [txtPasswordc, setTxtPasswordc] = useState("");
    let err=false;
  let expre;

    const onChangeUser = (e)=>{
       e.preventDefault();
       e.stopPropagation();
       err=false;
       expre=/^\s*$/;
        if(expre.test(txtPasswordn) || expre.test(txtPhone) || expre.test(txtEmail) || expre.test(txtLastName) || expre.test(txtName) || expre.test(txtPasswordc))
        {
        //console.log(expre.test(txtPassword)+" entro");
        document.getElementById('mensajen').innerHTML = 'Por favor, llene todos los campos solicitados';
        }else{
            //document.getElementById('mensajen').innerHTML = 'Error, No coincide con confirmar contraseña';
            //expre =/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
          //  if()
            if(validarIgualdadContrasena(txtPasswordc, txtPasswordn, document.getElementById('mensajen')))
                err=true;
            else
                if(validarCaracteresContrasena(txtPasswordn, document.getElementById('mensajen')))
                    err = true;
                else
                    if(soloNumeros(txtPhone,document.getElementById('mensajen'))){
                        err= true;
                    }
                    else
                        if(validarCorreo(txtEmail,document.getElementById('mensajen'))){
                            err = true;
                        }else
                            if(soloLetras(txtLastName, document.getElementById('mensajen')) ){
                                err=true;
                            }else{
                            document.getElementById('mensajen').innerHTML='';
                        }
            
            if(err==false){
                publicAxios.post(
                    'api/sec/signin',
                    {
                        name: txtName,
                        lastname: txtLastName, 
                        phone: txtPhone,
                        email: txtEmail,
                        password: txtPasswordn
                    }
                    )
                    .then(
                    ({data}) => {
                        setTxtEmail("");
                        setTxtLastName("");
                        setTxtPasswordc("");
                        setTxtPasswordn("");
                        setTxtName("");
                        setTxtPhone("");
                        document.getElementById('mensajen').innerHTML = '';
                        window.alert("Usuario creado correctamente");
                        
                        navigate('/login',{replace:true});
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
        
        switch(e.target.name){
            case "name":
                setTxtName(e.target.value);
                break;
            case "last":
                setTxtLastName(e.target.value);
                break;
            case "phone":
                setTxtPhone(e.target.value);
                break;
            case "email":
                setTxtEmail(e.target.value);
                break;
            case "cpass":
                setTxtPasswordc(e.target.value);
                break;
            case "npass":
                setTxtPasswordn(e.target.value);
                break;
        }
      }

    return(
        <Page showHeader={true} title="Iniciar Sesión" showNavBar>
            <div className=" flex-col items-center my-10 bg-gray-200 w-9/12 h-auto flex mx-auto p-5">
                <h1 className="text-2xl font-bold">Registro</h1>
                <hr className=" w-full bg-gray-500 my-3"/>
                <TextBox 
                    id="txtname"
                    label="Ingresar Nombre"
                    value={txtName}
                    placeholder="Ingresar nombres"
                    onChange={onChangeHandler}
                    name="name"
                />
                <TextBox 
                    id="txtlast"
                    label="Ingresar Apellido"
                    value={txtLastName}
                    placeholder="Ingresar apellidos"
                    onChange={onChangeHandler}
                    name="last"
                />
                <TextBox 
                    id="txtphone"
                    label="Ingresar Telefono"
                    value={txtPhone}
                    placeholder="Ingresar teléfono"
                    onChange={onChangeHandler}
                    name="phone"
                />
                <TextBox 
                    id="txtemail"
                    label="Ingresar Correo"
                    value={txtEmail}
                    placeholder="Ingresar correo"
                    onChange={onChangeHandler}
                    name="email"
                />
                 <Password
                    id="cnueva"
                    label="Contraseña Nueva"
                    value={txtPasswordn}
                    placeholder="Contraseña Nueva"
                    onChange={onChangeHandler}
                    name="npass"
                />
                
                <Password
                    className="mb-4"
                    id="cconfirmar"
                    label="Contraseña Confirmar"
                    value={txtPasswordc}
                    placeholder="Contraseña Confirmar"
                    onChange={onChangeHandler}
                    name="cpass"
                />
                <label id="mensajen" className="text-red-600 text-sm w-full h-4 mb-4 text-center"></label>
                <button onClick={onChangeUser} type="button" className=" bg-black lg:hover:bg-gray-800 text-white font-bold w-full h-12 my-3">Crear</button>
            </div>
        </Page>
    );
}

export default NUsuario;