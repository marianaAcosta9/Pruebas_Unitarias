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
