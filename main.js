import { areaDeUnCuadrado, areaDeUnTriangulo, areaDeUnRectangulo, esCero } from './utilities.js';
const base = document.querySelector('#base');
const altura = document.querySelector('#altura');
const lbl = document.querySelector('#lbl');
const calcularAreaTriangulo = document.querySelector('#calcularAreaTriangulo');
const options = [...document.querySelectorAll('#options li')];
base.addEventListener('input', runnApp)
altura.addEventListener('input', runnApp)


options.forEach((li)=>{
   li.addEventListener('click',()=> runnApp(li))
})



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


function runnApp(li) {
  let liclass = [...li.classList]
  console.log(liclass.includes('active'))
  esCero(base);
  esCero(altura);
  
  isActive(li)


}

  
function isActive(li){
    li.classList.remove('active')
}
