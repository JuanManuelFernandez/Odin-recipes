//TRADUCCIÓN

function camelize(str) {
    return str.split('-').map((palabra, index) => index == 0 ? palabra : palabra[0].toUpperCase()+ palabra.slice(1)).join('')
}

console.log(camelize("hola-soy-juan"));


//FILTER RANGE

function filterRange(arr, a, b) {

    return arr.filter(item => (item >= a && item <= b));
}

let arr = [5, 3, 8, 1];

let filtrados = filterRange(arr, 1, 4);

console.log(filtrados);

//RANGO DE FILTROS EN SU LUGAR

function filterRangeInPlace (arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        if(val < a || val > b){
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr2 = [5, 8, 3, 1];

filterRangeInPlace(arr2, 1, 4);

console.log(arr2);

//ORDENAR EN ORDEN DESCENDENTE

function orderInDesc(arr) {
    return arr.sort((a, b) => b -a )
}

let arr3 = [5, 2, 1, -10, 8];

//ORDERNAR EN ORDEN ASCENDENTE (no pedido pero hecho para probar)

console.log(orderInDesc(arr3));

function orderinAsc(arr) {
    return arr.sort((a, b) => a - b);
}

console.log(orderinAsc(arr3));

//COPIAR Y ORDENAR

function copySorted(arr) {
    return arr.slice().sort()
}

let arr4 = ["HTML", "JavaScript", "CSS"];

console.log(copySorted(arr4));