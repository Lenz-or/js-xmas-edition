function validarFormulario(event){
    const $form = document.querySelector('#carta-a-santa');

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errorNombre= validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcion(descripcionRegalo)

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        descripcionRegalo: errorDescripcionRegalo,

    };
    
    manejarErrores(errores);

    event.preventDefault();

    
}

function manejarErrores(errores){
    errorNombre = errores.nombre; 
    errorCiudad = errores.ciudad;
    errorDescripcionRegalo = errores.descripcionRegalo;

    if(errorNombre){
        $form.nombre.className = "error";
    } else{
        $form.nombre.className = "";
    }

    if(errorCiudad){
        $form.ciudad.className = "error";
    } else {
        $form.ciudad.className = "";
    }

    if(errorDescripcionRegalo){
        $form['descripcion-regalo'].className= "error"
    }else{
        $form['descripcion-regalo'].className= "";
    }
}



function validarNombre(nombre){
    if(nombre.length === 0){
        return 'Este campo debe tener al menos 1 caracter';
    }
    if(nombre.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres'
    }
    if(!/^[a-z]+$/i.test(nombre)){
        return 'El campo nombre solo acepta letras';
    }
    return '';
}

function validarCiudad(ciudad){
    if(ciudad.length === 0){
        return 'Este campo debe contener una opcion'
    }

    return '';

}

function validarComportamiento(comportamiento){
    if(comportamiento.length === 0){
        return 'Este campo debe contener una de las tres opciones'
    }
    return '';
}

function validarDescripcion(descripcion){
    if(descripcion.length === 0){
        return 'Este campo descripcion debe tener algun caracter';
    }
    if(descripcion.length >= 100){
        return 'Este campo descripcion debe tener menos de 100 caracteres'
    }
    return '';


}

const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario;