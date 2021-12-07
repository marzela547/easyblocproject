import { publicAxios } from "../../utils/Axios";
export const doLogin = (dispatch, txtCorreo, txtPassword, navigate) => {
  dispatch(
    {
      type: "SEC_LOGIN_FETCH",
      payload: null,
    }
  );
  publicAxios.post(
    'api/sec/login',
      {
        email: txtCorreo,
        pswd: txtPassword,
      }
  )
    .then(
      ({ data }) => {
        console.log(data)
        dispatch(
          {
            type: "SEC_LOGIN_SUCCESS",
            payload: data,
          }
        );
        navigate('/profile', { replace: true });
      }
    )
    .catch(
      (err) => {
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
export const doSignIn = (dispatch, txtName, txtLastName, txtPhone, txtEmail, txtPassword,navigate, to) => {
  dispatch(
    {
      type: "SEC_SIGNIN_FETCH",
      payload: null,
    }
  );
  publicAxios.post(
    'api/sec/signin',
                    {
                        name: txtName,
                        lastname: txtLastName, 
                        phone: txtPhone,
                        email: txtEmail,
                        password: txtPassword
                    }
  )
    .then(
      ({ data }) => {
        console.log(data)
        dispatch(
          {
            type: "SEC_SIGNIN_SUCCESS"
          }
        );
        window.alert("Usuario creado correctamente");
        navigate(to);
      }
    )
    .catch(
      (err) => {
        console.log(err);
        dispatch(
          {
            type: "SEC_SIGNIN_ERROR",
            payload: err,
          }
        );
      }
    );
}

export const doLogOut = (dispatch)=>{
  dispatch({
    type:"SECURITY_UNAUTHORIZED",
    payload:null
  });
}
