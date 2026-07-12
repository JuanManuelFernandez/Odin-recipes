//MAP TO NAMES

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30};
let mary = { name: "Mary", age: 28};

let users = [ john, pete, mary ];

let name = users.map(item => item.name);

console.log(name);

// // //MAP TO OBJECTS

let john = { name: "John", surname: "Smith", id: 1};
let pete = { name: "Pete", surname: "Hunt", id: 2};
let mary = { name: "Mary", surname: "Key", id: 3};

let users = [john, pete, mary];

let usersMapped = users.map(users => ({fullName: `${users.name} ${users.surname}`, id: users.id}));

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);

// //Sort users by age

let john = { name: "John", age: 25};
let pete = { name: "Pete", age: 30};
let mary = { name: "Mary", age: 28};

let arr = [ pete, john, mary ];

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

sortByAge(arr);

console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);

// //GET AVERAGE AGE

let john = { name: "John", age: 25};
let pete = { name: "Pete", age: 30};
let mary = { name: "Mary", age: 28};

let arr = [john, pete, mary];

function getAverageAge(arr) {
    const totalEdad = arr.reduce((acumulador, arr) => acumulador + arr.age, 0);
    const totalUsers = arr.length;
    const promedio = Math.round(totalEdad / totalUsers);

    return promedio;
}   

console.log(getAverageAge(arr));

//CREATE KEYED OBJECT FROM ARRAY

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr) {
    return arr.reduce((obj, valor) => {obj[valor.id] = valor;
        return obj;
    }, {})
}

let usersById = groupById(users);

console.log(usersById);



