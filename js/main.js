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
        'descripcion-regalo': errorDescripcionRegalo,

    };
    
    ocultarErroresAnteriores(document.querySelectorAll("#errores li"))
    const esExito= manejarErrores(errores) === 0;

    if(esExito){
        $form.className= "oculto";
        document.querySelector('#exito').className = "";
        const redirigir = setTimeout(redireccionarPagina,5000);
    }
    
    event.preventDefault();

    
}

function redireccionarPagina(){
    window.location.href= "./wishlist.html";
}

function ocultarErroresAnteriores(elemento){
    const errores = elemento;
    for(let i=0;i < elemento.length; i++){
        errores[i].className = "oculto";
    }
}

function manejarErrores(errores){
    
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error= (errores[key]);

        if(error){
            cantidadErrores++;
            $form[key].className = "error";

            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);
        }else{
            $form[key].className = "";
        }

        
    })
    return cantidadErrores;
    
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