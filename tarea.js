//Hacer 2 ejercicios con su respectivo test.

//Evaluar el área de un triángulo 
const areaTriangulo = (a,b) => (a*b)/2;

console.log(areaTriangulo(8,4));

//Almacenar funciones
const area = {
    areaTriangulo,
}

//Exportar
module.exports = area;