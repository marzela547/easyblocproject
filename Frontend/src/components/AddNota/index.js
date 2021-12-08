import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {storage, db } from '../../store/utils/firebase';
import { ref, getDownloadURL, uploadString } from '@firebase/storage';
import {setDoc,collection,doc,serverTimestamp,updateDoc} from'firebase/firestore';
import { useEffect } from 'react';
import Page from '../Page';
import TextBox from '../UI/TextBox';
import { PrimaryButton } from '../UI/Button';
import ComboBox from '../UI/ComboBox';
import { addNewNota } from '../../store/reducers/notas/action';
import { fetchCategoriesData } from '../../store/reducers/categories/actions';
import { useSelector, useDispatch} from 'react-redux';
import {FaBars,FaFont,FaAlignCenter,FaRegWindowClose} from "react-icons/fa"
import './index.css';
const getSecurity = ({security})=>security;
const getCategories = ({categories})=>categories;

const AddNota = ()=>{
  const nota = useSelector(({notes})=>notes);
  const {items} = useSelector(getCategories);
  const {user} = useSelector(getSecurity);
  const [txtTitulo, settxtTitulo] = useState("");
  const [txtNota, settxtNota] = useState("");
  const [txtType, setTxtType] = useState('S');
  const [txtImage, setTxtImage] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  let err;
  let expre;
  let cnestilo="w-full h-96 mx-auto ";
  let color="";
  let posicion="";
  let tletra="";
  let imagenMostrar;
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
    console.log(items);
  }
  useEffect(()=>{ 
      cargar()
  

    }, []);

    const option = items.map((o,i)=>{
      return (<option key={i} value={o.descripcion_cat}>{o.descripcion_cat}</option>);
    });

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
      //const f = new FormData();
     // const imageRef = ref().child(txtImage);

      //var file = ... // use the Blob or File API
      //ref.put(file).then(function(snapshot) {
        //console.log('Uploaded a blob or file!');
   //   }); 

     /*uploadString(imageRef,txtImage,"photo").then( snapshot=>{
      const downloadURL = getDownloadURL(imageRef);

     updateDoc(doc(db,'photos',null),{
        photos:downloadURL
      });
     // addNewNota(dispatch, txtTitulo, txtType, txtNota,cnestilo, user.correo_usu, txtImage,navigate, "/ccontrasena" )
    });*/
      console.log(txtType)
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

    const onChangeImage=e=>{
      setTxtImage(e);
      //imagenMostrar = (<img />)
    }

    return(

        <Page showHeader={true} title="Nueva " showNavBar>
            <div className=" w-11/12 h-4/5 mx-auto mt-10 border-4 bg-gray-200 rounded-md shadow-lg text-center overflow-scroll" >
                  <h1 className="mt-6 text-2xl font-bold">Nueva nota</h1>
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
                                      className={cnestilo} 
                                      placeholder="Escribe tu nota"
                                      value= {txtNota}
                                      name="txtNota"
                                      onChange={onChangeHandler}
                                      >
                                        
                                      </textarea>
                                    </div>
                                    <div className="h-32 w-32 bg-gray-100 my-3 p-2 box-border">
                                    
                                      <div className="h-full text-center border-2 border-dotted border-gray-500">
                                        <div className="py-4 z-0 box-content h-0 overflow-visible">
                                          <p className="h-0  z-0 mx-5 text-gray-600">Seleccionar imagen</p>
                                        </div>
                                          <input onChange={(e)=>onChangeImage(e.target.files)} name="Imagen" className=" relative w-max h-full bg-yellow-400" accept="image/png, image/jpg" type="file" name="imagen" />
                                        </div>
                                      </div>
                                    <label id="mensajet" className=" text-red-600 text-sm w-4 h-4 mb-4" ></label>
                                        <div  className="w-11/12 p-0.5 m-auto mt-5 mb-8 bg-black text-white">
                                            <PrimaryButton onClick={onBtnClick}>Crear Nota</PrimaryButton>
                                          </div>
                    </div>
                </div>
       </Page>
    );
    

}

export default AddNota;
