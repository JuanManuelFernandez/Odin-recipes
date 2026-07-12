const sumAll = function(num1, num2) {
    let inicio = Math.min(num1, num2);
    let fin = Math.max(num1, num2);
    let suma = 0;

    if(num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    else if(num1%2 != 0 || num2%2 !=0) {
        return "ERROR";
    }
    else if(typeof num1 === 'number' || typeof num2 === 'number') {
        return "ERROR";
    }
    
    for (let i = inicio; i <= fin; i++) {
        suma = suma + i;
    }
    return suma;
};  

sumAll(10, [90, 1]);
// Do not edit below this line
module.exports = sumAll;
