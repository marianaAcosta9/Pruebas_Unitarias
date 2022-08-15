//Importar
//Defino una constante con el nombre de la función a revisar y de qué ruta la voy a sacar
const { exportAllDeclaration } = require('@babel/types');
const { default: test } = require('node:test');
const palindromo = require ('./palindromo');

//Con test, planeo 3 escenarios (pueden ser más)

//1er escenario donde sí sea un palíndromo

test("Es un Palindromo", () => {
    exportAllDeclaration(palindromo.palindromo("ANA")).toBe(true);
});

//2do escenario donde no ingrese nada
test("Elemento vacío", () => {
    exportAllDeclaration(palindromo.palindromo("")).toBe(false);
});
//3er escenario donde lo que se ingresa no sea un texto o peor aún, sea undefined
test("Elemento undefined", () => {
    exportAllDeclaration(palindromo.palindromo(undefined)).toBe(false);
});
