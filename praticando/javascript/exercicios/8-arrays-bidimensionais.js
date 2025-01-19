/*
//TOTAL = 
//ARRAYS BIDIMENSIONAIS
//1. soma de elementos
let numeros = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let soma = 0;

function somar(numeros){
    for (let i = 0; i < numeros.length; i++){
        for(let j = 0; j < numeros[i].length; j++){
            soma += numeros[i][j];
        }
    }
    console.log(soma);
};

somar(numeros);

//2. linha com maior soma
let numeros = [
    [1,4,3],
    [6,1,3],
    [9,5,7]
];

let maiorResultado = 0;
let maiorIndice = 0;


function maior(numeros){
    for(let i = 0; i < numeros.length; i++){
        let result = 0;

        for(let j = 0; j < numeros[i].length; j++){
            result += numeros[i][j];
        }
            if (result > maiorResultado){
                maiorResultado = result;
                maiorIndice = i;
            }
        }
    
    console.log("linha "+ maiorIndice);
};

maior(numeros);

//3. Contar números
let numeros = [
    [1,2,3],
    [4,4,4],
    [5,7,9]
];

let result = 0;

function par(numeros){
     // Loop externo: percorre cada linha do array
    for(let i = 0; i < numeros.length; i++){
          // Loop interno: percorre cada elemento da linha atual
        for(let j = 0; j < numeros[i].length; j++){
            if(numeros[i][j] % 2 == 0){
                result++;
            }
        }
    }
    console.log(result)
};

par(numeros);

//4. Transposição Simples
let matriz = [
    [1,2],
    [3,4]
];

let matrizOposta = [
    [matriz[0][0], matriz[1][0]],
    [matriz[0][1], matriz[1][1]]
];

console.log(matrizOposta);

//5. diagonal principal
let matriz = [
    [1,2],
    [3,4]
];

/*let diagonal = [
    [matriz[0][0], matriz[1][1]]
];

console.log(diagonal);
*/
/*
function diagonalPrincipal(matriz) {
    let diagonal = [];
    for (let i = 0; i < matriz.length; i++) {
        diagonal.push(matriz[i][i]);
    }
    return diagonal;
}

console.log(diagonalPrincipal(matriz));
*/
//6. Verificar simetria

