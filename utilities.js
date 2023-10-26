export function areaDeUnCuadrado(lado) {
    let result = lado * lado;
    return result;
}

export function areaDeUnTriangulo(base, altura) {
    let result = (base * altura) / 2;
    return result;
}

export function areaDeUnRectangulo(base, altura) {
    let result = base * altura;
    return result;
}

export function esCero(input) {
    let value = parseInt(input.value);
 
    if (value === 0) {
        input.classList.add('esDiez');
     
    }else{
        input.classList.remove('esDiez');
    }
}

 