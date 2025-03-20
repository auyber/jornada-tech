//Estou focando apenas nos primeiros exercicios de cada tópico, para continuar meus estudos.
//vou resolvendo mais exercicios todos os dias

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

//4. filtrar e flatten
let array = [
    [1,2,3],
    [11,4,15],
    [20,50,1]
];

function maior(array){
    let maiores = [];
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++){
            if (array[i][j] > 10){
                maiores.push(array[i][j]);
            }
        }
    }
    return maiores.flat();
}

console.log(maior(array));

//OU uma forma bem mais reusmida:

function filtrarFlatten(matriz) {
    return matriz.flat().filter(valor => valor > 10);
}

//FALTA EX 5. e 6.

//FOCADOS EM MAP
//1. dobrar valores
let array = [
    [1,2,3],
    [4,5,6]
];

let arrayDobrado = array.map(function(linha){//podemos usar qualquer nome de variavel. ex: linhaAtual
    return linha.map(function(num){//é uma boa prática escolher um nome que faça sentido no contexto para representar os valores que o método .map está processando em cada etapa
        return num * 2;
    })
})

console.log(arrayDobrado)

//2. Adicionar índices
let array = [
    [1,2,3],
    [4,5,6]
];

let soma = array.map(function(indice, i){// `indice` é a linha e `i` é o índice da linha
    return indice.map(function(n){// `n` é o número dentro da linha
        return n + i;// Retorne o número somado com o índice da linha
    })
});

console.log(soma);
*/
//FALTA EX 3., 4., 5. e 6.
