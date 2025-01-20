/*
//TOTAL = 
//EXERCÍCIOS FOCADOS EM FLAT E MAP ARRAYS BIDIMENSIONAIS
//1. flattening simples
let numeros = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let numerosUni = numeros.flat();

console.log(numerosUni);

//2. Soma dos Elementos
let numeros = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function somaUni(numeros){
    let newNumeros = numeros.flat();
    console.log(newNumeros);
    let soma = 0;

    for (let i = 0; i < newNumeros.length; i++){
        soma += newNumeros[i];

    }
    console.log(soma);
}

somaUni(numeros);

//3. nivel especifico
let arrayTridimensional = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];

function transforma(arrayTridimensional){
    return arrayTridimensional.flat(2);
}

console.log(arrayTridimensional);
*/
//4. filtrar e flatten
