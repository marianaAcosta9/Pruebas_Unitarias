const palindromo = (palabra) => {
    let palabraInvertida = palabra.split('').reverse().join('');
    if (palabraInvertida === palabra) {
        return true;
    } else {
        return false;
    }
}

//almacenar funciones

const funcionPalindromo = {
    palindromo,
}

// exportar

module.exports = funcionPalindromo;