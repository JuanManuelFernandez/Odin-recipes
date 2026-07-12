const reverseString = function(str) {
    let cadena = str.split('').reverse().join('');

    return cadena;
};

reverseString('123! abc! Hello, Odinite.')

// Do not edit below this line
module.exports = reverseString;
