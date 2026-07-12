const fibonacci = function(num) {
    let dato = 0;

    if(num < 0) {
        return "OOPS";
    }
    else if(num == 0) {
        return 0;
    }
    else if(num == 'string') {
        dato = parseInt(num);
    }
    else {
        dato = num;
    }

    let a = 0;
    let b = 1;

    for(let i = 2; i <= dato; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
