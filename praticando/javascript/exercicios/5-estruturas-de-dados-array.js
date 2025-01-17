// TOTAL = 14 exercicios
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

//2. objetos com propriedades dinâmicas
let pessoa = {
    nome: "Auyber",
    idade: 33,
};

pessoa.cidade = "Campo Largo";

console.log(pessoa);

//3. maior valor em um array
let array = [1,13,14,3,56,79];
// Math.max() retorna o maior valor entre os números fornecidos como argumentos.
// O operador de espalhamento (...) é utilizado para passar os elementos do array como argumentos individuais para o Math.max().

let maior = Math.max(...array);

console.log(maior);

//Método com for
let numeros = [1, 2, 3, 4, 100, 50];
let maiorNumero = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}

console.log(maiorNumero);  // 100


// 4. ordenando array com strings
let nomes = ["Auyber","Josesvaldo","Creuso","Abdenego"];
console.log(nomes.sort());

//5. remover duplicatas de um array
let array = [1,2,3,3,4,4,4,5,5];
let arrayLimpo = new Set(array);
console.log(arrayLimpo);

//DIFÍCEIS
//1. pilha (stack)
let stack = {
    items: [], // Aqui armazenamos os elementos da pilha
    push: function (element) {
        this.items.push(element); // Adiciona um elemento no topo da pilha
    },
    pop: function () {
        return this.items.pop(); // Remove e retorna o elemento do topo da pilha
    },
    top: function () {
        return this.items[this.items.length - 1]; // Retorna o elemento do topo sem remover
    },
    isEmpty: function () {
        return this.items.length === 0; // Verifica se a pilha está vazia
    }
};

// Usando a pilha
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.top()); // 30
console.log(stack.pop()); // 30
console.log(stack.top()); // 20
console.log(stack.isEmpty()); // false

//2. fila(queue)
let fila = {
    item: [],
    enqueue: function(item){
        this.item.push(item); //adiciona o item no final da fila
    },

    dequeue: function(){
        if (this.item.length === 0){
            return "Fila vazia";
        }
        return this.item.shift(); //remove e retorna o primeiro item    
    },

    print: function(){
        console.log(this.item);
    }
    
};

fila.enqueue(1);
fila.enqueue(2);
fila.enqueue(3);
fila.enqueue(4);

console.log(fila.dequeue());
fila.print();

//3. busque um elemento em uma lista
let pessoas = [
    {
        nome: "Auyber",
        idade: 33,
        cidade: "Londres"
    },
    {
        nome: "Emilly",
        idade: 20,
        cidade: "Paris"
    },
    {
        nome: "Abner",
        idade: 25,
        cidade: "Portugal"
    },
    {
        nome: "Mauro",
        idade: 50,
        cidade: "Santa Catarina"
    },
];
// Função 'busca' que recebe o nome de uma pessoa e retorna suas informações
function busca(nome) {
    // 'find' é utilizado para buscar o primeiro objeto que atenda à condição. No caso, a condição é que o nome da pessoa seja igual ao nome passado como parâmetro.
    let encontreiPessoa = pessoas.find(function(pessoa) {
        return pessoa.nome === nome; // Retorna verdadeiro quando o nome da pessoa encontrada é igual ao nome passado como parâmetro
    });
    
    // Se a pessoa for encontrada, 'encontreiPessoa' terá o objeto da pessoa, caso contrário, a função retorna a string "Pessoa não Encontrada"
    return encontreiPessoa ? encontreiPessoa : "Pessoa não Encontrada";
}

console.log(busca("Auyber"));  // Exibe todos os dados de Auyber

console.log(busca("Irineu"));  // Exibe "Pessoa não Encontrada"

//4. Dicionário
class Dictionary {
    constructor() {
        this.items = {};
    }

    add(key, value) {
        this.items[key] = value;
    }

    remove(key) {
        delete this.items[key];
    }

    get(key) {
        return this.items[key];
    }
}

const dict = new Dictionary();
dict.add("nome", "João");
dict.add("idade", 25);
console.log(dict.get("nome")); // Saída: João
dict.remove("idade");
console.log(dict.get("idade")); // Saída: undefined