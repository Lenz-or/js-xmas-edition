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

    console.assert(validarNombre('Enzo') === '',
    'Validar nombre fallo con un nombre valido',
    )
    console.assert(validarNombre('asDasd12414') === 'El campo nombre solo acepta letras',
    'Validar nombre no valido que el nombre solo tenga letras'
    ) 

}

function probarValidarCiudad(){
    console.assert(validarCiudad('') === 'Este campo debe contener una opcion', 
    'Validar ciudad no funciona sin elegir una opcion',
    )

    console.assert(validarCiudad('Buenos aires') === '',
    'Validar ciudad fallo con una ciudad valida'            
    )

}

function probarValidarComportamiento(){
    console.assert(validarComportamiento('') === 'Este campo debe contener una de las tres opciones',
    'Validar comporamiento no funciona sin colocar una opcion',
    )
}

function probarValidarDescripcion(){
    console.assert(validarDescripcion('') === 'Este campo descripcion debe tener algun caracter',
    'Validar descripcion esta recibiendo el area de texto vacia',
    )

    console.assert(validarDescripcion('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'Este campo descripcion debe tener menos de 100 caracteres',
    'Validar descripcion esta recibiendo mas de 100 caracteres',
    )

    console.assert(validarDescripcion('Hola') === '',
    'Validar descripcion esta fallando con un texto valido',
    )
}


probarValidarNombre();  
probarValidarCiudad();
probarValidarComportamiento();
probarValidarDescripcion();