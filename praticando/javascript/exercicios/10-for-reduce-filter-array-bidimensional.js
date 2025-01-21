//Estou focando apenas nos primeiros exercicios de cada tópico, para continuar meus estudos.
//vou resolvendo mais exercicios todos os dias

/*
//TOTAL =
//ARRAYS BIDIMENSIONAIS FOR, REDUCE E FILTER
//FOR e FOR EACH
//1. contar elementos
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function contarElementos(matriz){
    let contador = 0;
    for (let i = 0; i < matriz.length; i++){
        for ( let j = 0; j < matriz[i].length; j++){
            contador ++;
        }
    }
    return contador;
}

console.log(contarElementos(matriz));

//2. todos valores
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function exibirValores(matriz){
    matriz.forEach(function(linha){// Percorre cada linha da matriz
        linha.forEach(function(num){// Percorre cada elemento da linha
            console.log(num);// Exibe o elemento no console
        })
    })
}

exibirValores(matriz);

//FALTA EX: 3.,4.,5. e 6.

//FOCADOS EM REDUCE
//1.soma total
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function somaTotal(matriz){
    return matriz.reduce(function(acc, linha){
        return acc + linha.reduce(function(subAcc, num){
            return subAcc + num;
        }, 0);
    }, 0);// O valor inicial do acumulador externo (acc) é 0
}

console.log(somaTotal(matriz))

//2.concatenar linhas
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function concatenarLinhas(matriz){
    return matriz.reduce(function(acc, linhas){
        return acc.concat(linhas);// Concatenar os elementos das linhas no array acumulador
    }, []);// Inicializa com um array vazio
}

console.log(concatenarLinhas(matriz));


//FALTA EX: 3.,4.,5. e 6.

//FOCADOS EM FILTER
//1. maiores que 10
let matriz = [
    [1,24,3],
    [4,54,6],
    [7,84,9]
];

function filtrarMaiores(matriz){
    return matriz.flat().filter(function(n){//flat transforma tudo em unidimensional, e filter, filtra o que deseja.
        return n > 10;
    })
};

console.log(filtrarMaiores(matriz));

//2. linhas com um valor especifico
let matriz = [
    [1,24,3],
    [4,54,6],
    [7,84,9],
    [14,3,90]
];

function filtrarLinhas(matriz, n){
    return matriz.filter(function(linha){
        return linha.includes(n);
    })
}

console.log(filtrarLinhas(matriz, 3))

// FALTA EX 3.,4.,5. e 6.

//FOCADOS EM EVERY OU SOME
//1.numeros maiores que 10
let array = [12, 15, 18, 20];

let maiorQue = array.every(function(n){
    return n > 10;
})

console.log(maiorQue)

//2.pelo menos 1 numero é maior que 100
let array = [5, 8, 120, 40];

let peloMenos = array.some(function(n){
    return n > 100;
})

console.log(peloMenos)
*/

//FALTA OS EX 3.,4.,5. e 6.

//FOCADOS EM SORT