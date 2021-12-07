import { useState ,useEffect,PropTypes } from 'react'
import { useNavigate } from 'react-router-dom';
import { publicAxios } from '../../store/utils/Axios';
import Page from '../Page';
import { useSelector, useDispatch} from 'react-redux';
import TextBox from '../UI/TextBox';
import axios from 'axios';


const getSecurity = ({security})=>security;
const Rcodigo = ()=>{

  const [txtCodigo, setTxtCodigo] = useState("");

  const navigate = useNavigate();
  const security = useSelector(getSecurity);
  const dispatch = useDispatch();

  let err=false;
  let expre;

  const onBtnClick =  (e)=> {
    e.preventDefault();
    e.stopPropagation();

    publicAxios.get(  'api/sec/getdatos'
    )
    .then(
        ({data}) => {
            err=false;
            document.getElementById('comensaje').innerHTML = '';
            expre=/^\s*$/;
            if(expre.test(txtCodigo))
            {
              err=true;
              document.getElementById('comensaje').innerHTML = 'Error,Campo obligatorio';
            }else{
                if(txtCodigo==data.cod){
                  dispatch({
                    type:"R_CON",
                    payload: data
                    }
                  );
                    alert("Código confirmado");
                    navigate('/rcontrasena',{replace:true});
                }else{
                    document.getElementById('comensaje').innerHTML = 'Error,Código erroneo';
                }
            }
        }
    );

  };


  const onChangeHandler = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    if (e.target.name === "codigos") {
        setTxtCodigo(e.target.value);
    }
  }
  const { hasErrors } = security;
  return (
    <Page showHeader={true} title="Confirmar Código" showNavBar>
      <div className=" w-11/12 h-auto mx-auto mt-16 border-4 bg-gray-200  rounded-md shadow-lg text-center justify-center">
        <h1 className="mt-6 text-2xl font-bold">Confirmar Código</h1>
        <hr className=" w-11/12 h-1 m-auto mb-4 bg-black"/>
        <div  className="w-11/12 mx-auto">
        <TextBox
            label="Codigo"
            value={txtCodigo}
            placeholder="Código"
            onChange={onChangeHandler}
            name="codigos"
          />
          <label id="comensaje" className=" text-red-600 text-sm w-4 h-4 mb-4" ></label>
          <button onClick={onBtnClick} type="button" className=" bg-black text-white font-bold w-full h-12 mt-2" >Confirmar</button>
        </div>
      </div>
    </Page>
  );
}
export default Rcodigo;