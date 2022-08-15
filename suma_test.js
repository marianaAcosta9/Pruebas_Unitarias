//Ejemplo de la función suma de mi calculadora
const sumaEjemplo = (a, b) =>{
    return a - b; //Obtengo un -2
}

console.log(sumaEjemplo(1, 3)); //Espero obtener un 4

//Función suma versión2 

const sumaEjemploV2 = (a, b) =>{
    return a - b;
}

if (sumaEjemploV2(1,3) !=4){
    console.error("La suma de 1 y 3 debería ser 4");
}

//Función suma Versión3

const sumaEjemploV3 = (a, b) =>{
    return a - b;
}

console.assert(
    sumaEjemploV3 (1, 3) === 4,
    "La suma de 1 y 3 debería ser 4"
)
//console.assert nos ayuda a mostrar un mensaje de error en la consola si la afirmacion es falsa. Si la afirmacion es verdadera, no se mostrara ningun mensaje. OJO, segun la documentacion de mozilla, esta caracteristica no esta disponible en todos los navegadores, por lo que no es recomendable usarla.

//Función suma versión4

//Escenarios de prueba
const escenarios = [
    { a: 0, b: 0, resultado: 0 },
    { a: 1, b: 3, resultado: 4 },
    { a: -3, b: 3, resultado: 0 },
]

//Para cada esceneario, se recorre y de cada esceneario se recupera la a, la b y el resultado esperado, y se ejecuta la funcion sumav4 con los parametros a y b.
escenarios.forEach(revisar => {
    const { a, b, resultado } = revisar

    console.assert(
        sumaEjemploV3 (a, b) === resultado,
        "La suma de " + a + " y " + b + " deberia ser " + resultado
    )
})

console.log("La cantidad de escenarios pasados es: ", escenarios.length);

