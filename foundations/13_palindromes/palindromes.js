const palindromes = function (cadena) {
    const textoOriginal = cadena.toLowerCase().replace(/[\W_]/g, '');

    const textoInvertido = textoOriginal.split('').reverse().join('');

    return textoOriginal == textoInvertido;
};

// Do not edit below this line
module.exports = palindromes;
