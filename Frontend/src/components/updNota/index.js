import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { publicAxios } from '../../store/utils/Axios';

import Page from '../Page';
import TextBox from '../UI/TextBox';
import { PrimaryButton } from '../UI/Button';
import ComboBox from '../UI/ComboBox';
import TextArea from '../UI/TextArea';
import { addNewNota } from '../../store/reducers/notas/action';

import { useSelector, useDispatch} from 'react-redux';


const getSecurity = ({security})=>security;
const UpdNota = ()=>{

  const [txtTitulo, settxtTitulo] = useState("");
  const [txtNota, settxtNota] = useState("");
  const [txtType, setTxtType] = useState('S');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let err;
  let expre;

  const onBtnClick = (e)=> {
    e.preventDefault();
    e.stopPropagation();

    document.getElementById('mensajet').innerHTML = '';
    document.getElementById('mensajea').innerHTML = '';
    expre=/^\s*$/;
    
    if(expre.test(txtNota)){
      err=true;
      document.getElementById('mensajet').innerHTML = 'Debe de escribir un titulo a la nota';

    }else{
      err=false;
    }
    if(expre.test(txtTitulo)){
      err=true;
      document.getElementById('mensajea').innerHTML = 'Debe escribir en la nota';

    }else{
      err=false;
    }
    if(err==false){
      addNewNota(dispatch, txtTitulo, txtType, txtNota, "marcelazelaya547@yahoo.com",navigate, "/ccontrasena" )
    }

    
  }

    const onChangeHandler = (e)=> {
       const {name, value} = e.target;
       switch(name){
          case "txtTitulo":
            settxtTitulo(value);
            break;
        case "txtType":
            setTxtType(value);
            break;
         case "txtNota":
            settxtNota(value);
            break;
        
      }
    
    }
    return(

        <Page showHeader={true} title="Modificar Nota" showNavBar>
            <div className=" w-11/12 h-4/5 mx-auto mt-10 border-4 bg-gray-200 rounded-md shadow-lg text-center overflow-scroll" >
                  <h1 className="mt-6 text-2xl font-bold">Modificar Nota</h1>
                  <div style={{ borderTop: "2px solid #9c9c9c ", marginLeft: 20, marginRight: 20 }}></div>
                    <div>
                     
                                <div className="m-auto w-11/12">
                                    <TextBox
                                        id="titulo"
                                        label="txtTitulo"
                                        placeholder="Título"
                                        value={txtTitulo}
                                        name="txtTitulo"
                                        onChange={onChangeHandler} 

                                        >
                                        </TextBox>
                                        <label id="mensajea" className=" text-red-600 text-sm w-4 h-4 mb-4" ></label>
                                </div>
                               
                                    <ComboBox
                                    label="Categoria"
                                    name="txtType"
                                    value={txtType}
                                    onChange={onChangeHandler}
                                    >
                                    <option value="Tareas">Tareas</option>
                                    <option value="Trabajo">Trabajo</option>
                                    <option value="Noticias">Noticias</option>
                                    <option value="Importante">Importante</option>
                                    </ComboBox>
                                    <TextArea
                                        id="nota"
                                        placeholder="Escribe tu nota"
                                        value= {txtNota}
                                        name="txtNota"
                                        onChange={onChangeHandler}
                                        >
                                    </TextArea>
                                    <label id="mensajet" className=" text-red-600 text-sm w-4 h-4 mb-4" ></label>
                                  
                                   
                                        <div  className="w-11/12 p-0.5 m-auto mt-5 mb-8 bg-black text-white">
                                            <PrimaryButton onClick={onBtnClick}>Guardar</PrimaryButton>
                                          </div>

                                   
                            
                    </div>
                </div>
           
       </Page>


    );
    

}

export default UpdNota;
