const repeatString = function(str, num) {
    if(num < 0){
        return "ERROR"
    }

    let cadena = "";
    
    for (let i = 1; i <= num; i++) {
        cadena = cadena + str;    
    }

    return cadena;
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
