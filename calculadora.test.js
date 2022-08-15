// Importar la funcionalidad a testear que viene en un formato de objeto

//const { default: test } = require('node:test');
const calculadora = require('./calculadora');

//Empezamos con el testing

test ('Sumar dos números', () => {
    expect (calculadora.sumar(5,5)).toBe(10);
})

test ('Restar dos números', () => {
    expect (calculadora.restar(5,5)).toBe(0);
})

test ('Multiplicar dos números', () => {
    expect (calculadora.multiplicar(5,5)).toBe(25);
})

test ('Dividir dos números', () => {
    expect (calculadora.dividir(5,5)).toBe(1);
})