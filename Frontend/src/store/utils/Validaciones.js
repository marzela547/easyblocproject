

 export const  validarIgualdadContrasena=(pass1, pass2, documento)=>{
    if(pass1!=pass2){ 
        documento.innerHTML = 'Error, No coincide con confirmar contraseña';
        return true;
    }
            
    return false
}

 export const validarCaracteresContrasena = (pass, documento)=>{
    let expre =/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(!expre.test(pass)){
        documento.innerHTML = 'Error,Minimo [1 letra, 1 numero,1 especial, 8 caracteres]';
        return true;
    }
    
    return false;
}

export const validarCorreo = (correo, documento) =>{
    //let expre = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
    let expre = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(!expre.test(correo)){
        documento.innerHTML = 'Error, formato de correo incorrecto.';
        return true;
    }
    return false;
}

export const soloLetras = (texto, documento)=>{
    let expre = /^[a-zA-ZÁÉÍÓÚÜÑáéíóúüñ ]+$/;
    if(!expre.test(texto)){
        documento.innerHTML = 'Error, solo se permiten letras.';
        return true;
    }
    return false;
}

export const soloNumeros = (texto, documento)=>{
    let expre = /^[0-9,+]+$/;
    if(!expre.test(texto)){
        documento.innerHTML = 'Error, solo se permiten números.';
        return true;
    }
    return false;
}

