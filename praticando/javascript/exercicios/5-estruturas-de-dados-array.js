/*
// TOTAL = 
//5. ESTRUTURAS DE DADOS COM ARRAY
//FÁCIL
//1. criando e acessando array
let numeros = [1,2,3,4,5];
console.log(numeros);

console.log(numeros[0], numeros[numeros.length - 1]);

//2. soma de elementos
let numeros = [1,2,3,4,5];
let resultado = 0;
function soma(numeros){
    for(let i = 0; i < numeros.length; i++){
        resultado += numeros[i];
        console.log(resultado);
    }
};

soma(numeros);

//3. adicionar ou remover elementos
let nomes = ["Harry","Rony","Gina"];
nomes.push("Hermione");
nomes.shift();
console.log(nomes);

//4. filtrando elementos
let numero = [1,2,3,4,5,15,20,40,7,8,100];
let numeroMaior = numero.filter(function(n){
    return n > 10;
});

console.log(numeroMaior);

//5. verificando existencia
let nomes = ["Frodo","Picuinha","Zé Pequeno"];
console.log(nomes.includes("Picuinha"));

//MÉDIO
//1. inverter um array
let array = [5, 12, 8, 130, 44];
console.log(array.reverse());

let array = [1, 2, 3, 4];
let arrayInvertido = [];

while (array.length > 0) {
    let item = array.pop();  // Remove o último item
    arrayInvertido.push(item);  // Adiciona no novo array
}

console.log(arrayInvertido);  // [4, 3, 2, 1]

let array = [1, 2, 3, 4];
let arrayInvertido = [];  // Novo array para armazenar os valores invertidos

// Percorre o array de trás para frente e usa o unshift para adicionar no início
for (let i = array.length - 1; i >= 0; i--) {
    arrayInvertido.unshift(array[i]);  // Adiciona no início do novo array
}

console.log(arrayInvertido);  // [4, 3, 2, 1]
*/
//2. objetos com propriedades dinâmicas
let pessoa = {
    nome: "Auyber",
    idade: 33,
};

pessoa.cidade = "Campo Largo";

console.log(pessoa);
