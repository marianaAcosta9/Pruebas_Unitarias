//Programa para emular una calculadora

const sumar = (num1, num2) => {
    return num1 + num2;
}

const restar = (num1, num2) => {
    return num1 - num2;
}

const multiplicar = (num1, num2) => {
    return num1 * num2;
}

const dividir = (num1, num2) => {
    return num1 / num2;
}

//Vamos a almacenar nuestras operaciones en una constante tipo objeto para poderlas testear

const operaciones = {
    sumar,
    restar,
    multiplicar,
    dividir,
}

//Voy a exportar el objeto que contiene todas las funciones a testear:

module.exports = operaciones;