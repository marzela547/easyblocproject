import Page from '../Page';
import TextBox from '../UI/TextBox';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { publicAxios } from '../../store/utils/Axios';
import {PrimaryButton} from '../UI/Button';
import { useSelector, useDispatch} from 'react-redux';

const NCategoria = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [txtCategorie, setTxtCategorie] = useState("");

    const onChangeCate = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        dispatch(
        {
            type:"SEC_LOGIN_FETCH",
            payload: null,
        }
        );
        publicAxios.post(
        '/api/sec/login',
        {
            email: txtCategorie
        }
        )
        .then(
        ({data}) => {
            console.log(data)
            dispatch(
            {
                type: "SEC_LOGIN_SUCCESS",
                payload: data,
            }
            );
            navigate('/dashboard',{replace:true});
        }
        )
        .catch(
        (err)=>{
            console.log(err);
            dispatch(
            {
                type: "SEC_LOGIN_ERROR",
                payload: err,
            }
            );
        }
        );
    }
    return(
        <Page showHeader={true} title="Iniciar Sesión" showNavBar>
            <div className=" flex-col items-center my-10 bg-gray-200 w-9/12 h-auto flex mx-auto p-5">
                <h1>Nueva Categoría</h1>
                <hr className=" w-full bg-gray-500 my-3"/>
                <TextBox/>
                <button onClick={onChangeCate} type="button" className=" bg-black lg:hover:bg-gray-800 text-white font-bold w-full h-12 my-3">Crear</button>
            </div>
        </Page>
    );
}

export default NCategoria;