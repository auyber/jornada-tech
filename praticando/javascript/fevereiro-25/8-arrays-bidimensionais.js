PAREI NO EXERCÍCIO 12

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

//6. Verificar simetria
let matriz = [
    [1,2,3],
    [2,5,6],
    [3,6,9]
];

let result = ""

function simetria(matriz){
    for(let i = 0; i < matriz.length; i++){
        if (matriz[i].length !== matriz.length){
            return "A matriz não é quadrada";
        }
    }

    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j <matriz[i].length; j++){
            if (matriz[i][j] !== matriz[j][i]){ //ao inverter j com i, estamos invertendo os papeis, no caso o valor do j no loop vai servir como linha.
                return "Não é simétrico";
            }
        }
    }
    return "É simétrico";
};

console.log(simetria(matriz));

//7. busca de elemento
let array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];



function dobrar(array, n){
    let dobro = []; //mantenha dentro da função para não ser global
    for (let i = 0; i < array.length; i++){
        let novaLinha = [];//a cada loop cria uma nova linha
        for (let j = 0; j < array[i].length; j++){
            novaLinha.push(array[i][j] * n);
        }
        dobro.push(novaLinha); //Após os loops de j, salva a linha no dobro, para começar outro loop de linha, no caso i.
    }
    return dobro;
};

console.log(dobrar(array, 2));

//8. Busca de elemento
let numeros = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function buscar(numeros, n){
    let coordenada = [];

    for (let i = 0; i < numeros.length; i++){
        for (let j = 0; j < numeros[i].length; j++)
            if (n == numeros[i][j]){
                coordenada.push([i,j]); //se eu deixar [i][j] ele vai enviar o valor da linha i na coluna j. tem que ser [i,j], para enviar o index de cada um.
            }
    }
    return coordenada;
}

console.log(buscar(numeros,8));

//9. Somar matrizes
let array1 = [
    [1,2],
    [3,4]
];

let array2 = [
    [5,6],
    [7,8]
];

function soma(array1,array2){
    let newArray = [];

    for (let i = 0; i < array1.length; i++){
        let linha = [];
        for (let j = 0; j < array1[i].length; j++){
            linha.push(array1[i][j] + array2 [i][j]); //se o loop atual do array1, for [0][1], ele soma com os respectivos indices do array2 [0][1]
        }
        newArray.push(linha);
    }

    return newArray;
}

console.log(soma(array1,array2));

//10. menor e maior elemento
let array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function menorMaior(array){
    let menor = Infinity; //inicia com maior valor possível
    let maior = -Infinity; //inicia com o menor valor possível

    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++){
            if (array[i][j] > maior){
                maior = array[i][j];
            } 
            if (array[i][j] < menor) { // não usamos else if, pois ele só é valido se o if for falso, porém podemos encontrar o menor e maior valor na primeira iteração
                menor = array[i][j];
            }
        }
    }
    return {menor, maior}; //retorna como um objeto
};

console.log(menorMaior(array));

//11. produto de matrizes
let A = [
    [1,2],
    [3,4]
];

let B = [
    [5,6],
    [7,8]
];

function produtoMatricial(A, B){
    //1.verificar se as matrizes podem ser multiplicadas
    if (A[0].length !== B.length){//garante que o numero de colunas A seja igual numero de linhas de B
        throw new Error("As matrizes não podem ser multiplicadas( (colunas de A != linhas de B)");
    }

    const resultado = [];

    for (let i = 0; i < A.length; i++){//percorre as linhas de A
        const linha = [];

        for (let j = 0; j < B[0].length; j++){//percorre as colunas de B
            let soma = 0;

            for (let k = 0; k < A[0].length; k++){// Multiplica os elementos da linha A[i] e coluna B[j]
                soma += A[i][k] * B[k][j];//O 𝑘 é a variável que percorre os elementos das linhas de 𝐴 e das colunas de B para multiplicá-los.
            }
            linha.push(soma);
        }
        resultado.push(linha);
    }
    return resultado;
}

console.log(produtoMatricial(A, B))
*/
//12. Caminho da soma máxima
