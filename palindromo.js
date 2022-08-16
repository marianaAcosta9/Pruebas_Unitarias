const palindromo = (palabra) => {
    if (palabra === undefined || palabra.length <= 1) {
        return false;
    }

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