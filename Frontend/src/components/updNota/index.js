import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { privateAxios } from '../../store/utils/Axios';
import { useEffect } from 'react';
import {FaBars,FaFont,FaAlignCenter,FaRegWindowClose} from "react-icons/fa"

import Page from '../Page';
import TextBox from '../UI/TextBox';
import { PrimaryButton } from '../UI/Button';
import ComboBox from '../UI/ComboBox';
import TextArea from '../UI/TextArea';
import { UpdNot, cargarData, dltNota } from '../../store/reducers/notas/action';
import { fetchCategoriesData, updCategorie } from '../../store/reducers/categories/actions';
import { useSelector, useDispatch} from 'react-redux';
let combo = [];


const getSecurity = ({security})=>security;
const getCategories = ({categories})=>categories;
const getNotes =({notes})=>notes;
const UpdNota = ()=>{
    
    const {notes}= useSelector(getNotes);
    const [txtTitulo, settxtTitulo] = useState("");
    const [txtNota, settxtNota] = useState("");
    const [txtType, setTxtType] = useState('S');
    const[TxtEstilos,setTxtEstilos] = useState("");
    const {items} = useSelector(getCategories);
    const {user} = useSelector(getSecurity);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let err;
    let expre;
    let tit;
    let not;
    let id = '61af847c933702f1674a0b17';
    let correo = 'kevin@gmail.com';
    let color="";
    let posicion="";
    let tletra="";
    let cnestilo="";
    const BtnCR =(e)=>{color="text-red-600"; Agreestilo();}
    const BtnCA =(e)=>{color="text-blue-600";Agreestilo();}
    const BtnCV =(e)=>{color="text-green-600";Agreestilo();}
    const BtnCRo =(e)=>{color="text-pink-600";Agreestilo();}
    const BtnCAm =(e)=>{color="text-yellow-600";Agreestilo();}
    const BtnJus =(e)=>{posicion="text-justify";Agreestilo();}
    const BtnCen =(e)=>{posicion="text-center";Agreestilo();}
    const BtnNeg =(e)=>{tletra="font-bold";Agreestilo();}
    const BtnCa =(e)=>{posicion="";color="";tletra="";Agreestilo();}
    const Agreestilo =(e)=>{cnestilo = "w-full h-96 mx-auto "+ color+" "+ posicion+" "+tletra; Impestilo()}
    const Impestilo =(e)=>{
      document.getElementById('nota').className=cnestilo;
    }
  
 
    
    
    const cargar = () => {
      if(items.length ==0)
      fetchCategoriesData(dispatch, user.correo_usu);
      cargarData(dispatch,id);
      settxtTitulo(notes.titulo_Not)
      settxtNota(notes.descripcion_Not)
      setTxtType(notes.categoria_Not)
      setTxtEstilos(notes.estilos_not)
      
     console.log(notes);
     console.log("holaaaaaaaaa")
    }
    useEffect(()=>{
  
        cargar();
    }, []);


    const option = items.map((o,i)=>{
      return (<option key={i} value={o.descripcion_cat}>{o.descripcion_cat}</option>);
    });
      

  const onBtnClick = (e)=> {
    e.preventDefault();
    e.stopPropagation();

    if(e.target.name ==="Guardar"){
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
      UpdNot(dispatch,id, txtTitulo,  txtNota, txtType, cnestilo,user.correo_usu,navigate, "/notes" )
  
     
    }
    }else{
        dltNota(dispatch, id, navigate, "/notes");
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

    console.log(not)
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
                                        value= {txtTitulo}
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
                                      {option}
                                     
        
                                    </ComboBox>
                                    <div className="w-11/12 mx-auto h-16 bg-gray-600  flex-wrap">
                                      <div className="w-full flex justify-center">
                                      <butto type="button" onClick={BtnCR} className="bg-red-600 h-6 w-6 mx-2 my-1 rounded"></butto>
                                      <butto type="button" onClick={BtnCA} className="bg-blue-600 h-6 w-6  mx-2 my-1 rounded"></butto>
                                      <butto type="button" onClick={BtnCV} className="bg-green-600 h-6 w-6  mx-2 my-1 rounded"></butto>
                                      <butto type="button" onClick={BtnCRo} className="bg-pink-600 h-6 w-6  mx-2 my-1 rounded"></butto>
                                      <butto type="button" onClick={BtnCAm} className="bg-yellow-400 h-6 w-6  mx-2 my-1 rounded"></butto>
                                      </div>
                                      <div className="w-full flex justify-center">
                                        <butto type="button" onClick={BtnJus} className="bg-gray-200 h-6 w-6  mx-2 my-1 rounded flex justify-center"><FaBars className="mt-1"/> </butto>
                                        <butto type="button" onClick={BtnCen} className="bg-gray-200 h-6 w-6  mx-2 my-1 rounded flex justify-center"><FaAlignCenter className="mt-1"/> </butto>
                                        <butto type="button" onClick={BtnNeg} className="bg-gray-200 h-6 w-6  mx-2 my-1 rounded flex justify-center"><FaFont className="mt-1"/> </butto>
                                        <butto type="button" onClick={BtnCa} className="bg-gray-200 h-6 w-6  mx-2 my-1 rounded flex justify-center"><FaRegWindowClose className="mt-1"/> </butto>
                                      </div>
                                    </div>


                                    
                                    <div className=" bg-gray-300 w-11/12 mx-auto h-96">
                                      <textarea 
                                      id="nota" 
                                      className={TxtEstilos} 
                                      placeholder="Escribe tu nota"
                                      value= {txtNota}
                                      name="txtNota"
                                      onChange={onChangeHandler}
                                      >
                                        
                                      </textarea>
                                    </div>
                                    <label id="mensajet" className=" text-red-600 text-sm w-4 h-4 mb-4" ></label>
                                  
                                   
                                        <div  className="w-11/12 p-0.5 m-auto mt-5 mb-8 bg-black text-white">
                                            <PrimaryButton name="Guardar" onClick={onBtnClick}>Guardar</PrimaryButton>
                                          </div>

                                          <div  className="w-11/12 p-0.5 m-auto mt-5 mb-8 bg-black text-white">
                                            <PrimaryButton name="Eliminar" onClick={onBtnClick}>Eliminar</PrimaryButton>
                                          </div>
                            
                    </div>
                </div>
           
       </Page>


    );
    

}

export default UpdNota;
