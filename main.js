import {areaDeUnCuadrado, areaDeUnTriangulo, areaDeUnRectangulo, esDiez} from './utilities.js';
const base = document.querySelector('#base');
const altura = document.querySelector('#altura');
const calcularAreaTriangulo = document.querySelector('#calcularAreaTriangulo');





base.addEventListener('input', runnApp)
altura.addEventListener('input', runnApp)




// let opcion = parseInt(prompt(`Escoge una opcion-> 
//  1: Area de un cuadrado 
//  2: Area de un Triangulo 
//  3: Area de un Rectangulo
//  `))
// function run(){
// switch (opcion) {
//     case 1:
//         let resultCuadrado = areaDeUnCuadrado(5);
//         console.log('El Area de el cuadrado es: ' + resultCuadrado)
//         break;

//     case 2:
//         let resultTriangulo = areaDeUnTriangulo(10, 10);
//         console.log('El Area de el triangulo: ' + resultTriangulo)
//         break;
//     case 3:
//         let resultRectangulo = areaDeUnRectangulo(7, 7);
//         console.log('El Area de el rectangulo: ' + resultRectangulo)
//         break;

//     default:
//         console.log('La Opcion no existe')
//         break;
// }

// }







function runnApp() {
 
  esDiez(base);
    esDiez(altura);
}