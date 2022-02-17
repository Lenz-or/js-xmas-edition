const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcion = $form['descripcion-regalo'].value;

console.log(nombre);

function validarNombre(nombre){
    if(nombre.length === 0){
        return 'Este campo debe tener al menos 1 caracter';
    }
    if(nombre.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres'
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