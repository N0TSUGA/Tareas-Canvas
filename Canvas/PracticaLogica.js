
//PRÁCTICA DE LÓGICA - Juan Hernández

//PÉRFIL DE USUARIO
// Se declaran variables para almacenar los datos del Usuario Registrado
let userName = "";
let userAge = 0;
let favoriteMovies = [];

// Aquí se pediran los Datos del Usuario
function getUserData() {
  userName = prompt("Por favor, me das tu nombre de usuario:");
  userAge = parseInt(prompt("¿Cuál es tu edad usuario?"));

  // Se pedira la lista de las películas favoritas del Usuario
  let movieInput = prompt("Introduce tus películas favoritas (separadas por comas):");
  favoriteMovies = movieInput.split(",").map(movie => movie.trim());

  // Con esto podremos mostrar los datos en la consola
  console.log(`Nombre del usuario: ${userName}`);
  console.log(`Edad: ${userAge}`);
  console.log("Películas favoritas:");
  favoriteMovies.forEach((movie, index) => {
    console.log(`${index + 1}. ${movie} - La película de ${movie} es una de mis favoritas`);
  });
}

// Con esto podremos llamar a la función para obtener los datos del Usuario
getUserData();


/*
//NÚMERO MÁS ALTO
function obtenerNumerosAleatorios() { 
    const numeros = [];
    for (let i = 0; i < 10; i++) {
      numeros.push(Math.floor(Math.random() * 100) + 1); // Genera números entre 1 y 100
    }
    return numeros;
  }
  //Con esta Función se seleccionara el número maximo registrado
  function encontrarMaximo(arrNumeros) {
    let maximo = arrNumeros[0];
    for (let i = 1; i < arrNumeros.length; i++) {
      if (arrNumeros[i] > maximo) {
        maximo = arrNumeros[i];
      }
    }
    return maximo;
  }
  //Aquí se mostrarán los números que se generaron en la consola
  const numeros = obtenerNumerosAleatorios();
  console.log("Números generados:", numeros);
  //Ya aquí se mostrará el número más alto de los que se generaron en la consola y se mostrará en ella.
  const maximo = encontrarMaximo(numeros);
  console.log("Número más alto:", maximo);
  
*/
/*
  //PALÍNDROMO
  function esPalindromo(texto) {
    // Con esta función las palabras u oraciones se hacen minusculas y se omiten los caracteres especiales como la (puntuación, espacios ó símbolos)
    texto = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    // Aquí se invierte la frase u oración escrita
    var invertido = texto.split('').reverse().join('');
  
    // Comprobar si la cadena original es igual a la invertida
    return texto === invertido;
  }
  
  // Solicitar la entrada del usuario
  var texto = prompt('Introduce una palabra ú oración querido Usuario:');
  
  // Con esto se nos mostrará si la palabra u oración es un Palíndromo o no
  if (esPalindromo(texto)) {
    console.log('Has escrito: "' + texto + '" y si es un palíndromo.');
  } else {
    console.log('Has escrito: "' + texto + '" y no es un palíndromo.');
  }

  */