/*
Una prueba unitaria es una prueba automatizada que tiene como objetivo verificar la funcionalidad de una unidad de código. Entenedemos "unidad de código" como la parte más pequeña testeable de una aplicación. Pueden ser:
    - Rutinas
    - Funciones
    - Métodos

Una prueba unitaria es una prueba que verifica la funcionalidad de una unidad de código. 

Ventaja de las pruebas unitarias

El escribir pruebas unitarias nos va a permitir asegurarnos que el código funciona segun lo esperado, además de encontrar errores de forma mucho mas facil y poder realizar modificaciones sin comprometer otros elementos del programa. Tambien nos permite garantiazar que cuando el codigo siga evolucionando o escalando y se implementen nuevas caracteristicas, las caracteristicas mas antiguas siguen funcionando como antes y no se rompan debido a los nuevos cambios.

Las pruebas unitarias de JavaScript normalmente se ejecutan en el explorador o en el front-end, y al realizarlas debemos tener en cuenta los siguientes aspectos:

    - La caracteristica que se está probando
    - El resultado final
    - El resultado esperado
*/

//Ejemplo de una función básica

function promedio(calificacion1, calificacion2, calificacion3) {
  calificacionFinal = (calificacion1 + calificacion2 + calificacion3) / 3;
  if (calificacionFinal >= 6) {
    console.log("Felicidades, estás aprobado!");
  } else console.log("Necesitas estudiar más, no has aprobado");
}

promedio(8, 7, 9);


/*
 
    Test Runner (Herramientas para hacer pruebas unitarias)

    - Mocha
    - Ava
    - Jest

Jest es un marco de pruebas de JavaScript mantenido por Facebook, y esta enfocado en la simplicidad. Funciona con proyectos que utilizan Babel, TypeScript, Node.js, React, Angular y Vue.js. su objetivo es trabajar de inmediato y sin configuracion. Estaba pensado originalmante para trabajar en el lado del cliente, pero puede ser usado en cualquier lado.


Lo que hace jest es reconocer todos los archivos que terminen en esto: nombreArchivo.test.js

Consideraciones para que JEST trabaje

1. Almacenar las funciones a testear en una constante del tipo objeto
2. Exportar estas fucniones, para que estén disponibles en cualquier lugar
3. Importar o al menos agregar la dirección de donde vienen estas funciones.

 */