/* function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

probarValidarNombre();
*/

function probarValidarNombre(){
    console.assert(validarNombre('') === 'Este campo debe tener al menos 1 caracter',
    'Validar nombre no funciona con String vacio'   , 
    )
    
    console.assert(validarNombre('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'Este campo debe tener menos de 50 caracteres',
    'Validar nombre no funciona con mas de 50 caracteres' ,   
    )

}

function probarValidarCiudad(){
    console.assert(validarCiudad('') === 'Este campo debe contener una opcion', 
    'Validar ciudad no funciona sin elegir una opcion',
    )

}

function probarValidarComportamiento(){
    console.assert(validarComportamiento('') === 'Este campo debe contener una de las tres opciones',
    'Validar comporamiento no funciona sin colocar una opcion',
    )
}

function probarValidarDescripcion(){
    console.assert(validarDescripcion('') === 'Este campo debe tener algun caracter',
    'Validar descripcion esta recibiendo el area de texto vacia',
    )

    console.assert(validarDescripcion('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'Este campo de texto debe tener menos de 50 caracteres',
    'Validar descripcion esta recibiendo mas de 50 caracteres',
    )
}


probarValidarNombre();  
probarValidarCiudad();
probarValidarComportamiento();
probarValidarDescripcion();