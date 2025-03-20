//TOTAL = 48 Exercícios
//PUSH()
//FÁCIL
//1. Exercício 1
let frutas = ["maçã", "banana", "laranja"];

frutas.push("manga");

console.log(frutas);

//2. Exercício 2
let numeros = [1, 2, 3, 4];

numeros.push(5);

console.log(numeros);

//MÉDIO
//3. Exercício 3
let alunos = ["Ana", "Carlos", "Beatriz"];

alunos.push("Auyber","Mauro");

console.log(alunos);

//4. Exercício 4
let times = ["Flamengo", "São Paulo", "Palmeiras"];

times.push("Barça","Lamaçal","BebunsFC");

console.log(times);

//DIFÍCIL
//5. Exercício 5
let produtos = [
    {
        nome: "Camiseta", 
        preco: 29.90
    }, 
    {
        nome: "Calça", 
        preco: 79.90
    }
];

produtos.push({nome: "Regata", preco: 15.00});

console.log(produtos);

//6. Exercício 6
let ids = [101, 102, 103, 104];
let novosIds = [105, 106];

ids.push(...novosIds); // se utilizar só (novosIds) ele envia o array inteiro "[105, 106]". para add os valores use o espalhamento "..."

console.log(ids);

//POP()
//FÁCIL
//1. Exercícios
let frutas = ["maçã", "banana", "laranja"];

frutas.pop();

console.log(frutas);

//2. Exercício 2
let numeros = [10, 20, 30, 40];

numeros.pop();

console.log(numeros);

//MÉDIO
//3. Exercício 3
let cores = ["vermelho", "azul", "verde", "amarelo"];

let remover = cores.pop();

console.log(remover);
console.log(cores);

//4. Exercício 4
let animais = ["gato", "cachorro", "pássaro", "hamster"];

animais.pop();

console.log(animais);

//DIFÍCIL
//5. Exercício 5
let pilha = [1, 2, 3, 4, 5];

for(i = 0; i < 2; i++){ //utilizei o loop para utilizar o pop 2vzs
    pilha.pop();
}

//pilha.pop(); //outra opção é chamar o pop 2 vezes
//pilha.pop();

console.log(pilha);

//6. Exercício 6
let documentos = [
    {
        nome: "contrato.pdf"
    }, 
    {
        nome: "relatorio.docx"
    }, 
    {
        nome: "imagem.jpg"
    }
];

let retirado = documentos.pop();

console.log(retirado);

//UNSHIFT()
//FÁCIL
//1. Exercício 1
let frutas = ["banana", "maçã", "laranja"];

frutas.unshift("manga");

console.log(frutas);

//2 Exercício 2
let numeros = [2, 3, 4];

numeros.unshift(1);

console.log(numeros);

//MÉDIO
//3. Exercício 3
let carros = ["Fusca", "Gol", "Civic"];

carros.unshift("Lancer Evo", "Subaru Imprenza");

console.log(carros);

//4. Exercício 4
let paises = ["Brasil", "Argentina", "Chile"];

paises.unshift("Peru", "Colômbia");

console.log(paises);

//DIFÍCIL
//5. Exercício 5
let pessoas = [
    {
        nome: "João",
        idade: 30
    }, 
    {
        nome: "Maria",
        idade: 25
    }
];

pessoas.unshift({nome: "José", idade: 40});

console.log(pessoas);

//6. Exercício 6
let livros = ["O Hobbit", "1984", "Dom Quixote"];

livros.unshift("Moby Dick", "A Guerra dos Tronos");

console.log(livros);

//SHIFT()
//FÁCIL
//1. Exercício 1
let frutas = ["maçã", "banana", "laranja"];

frutas.shift();

console.log(frutas);

//2. Exercício 2
let numeros = [10, 20, 30, 40];

numeros.shift();

console.log(numeros);

//MÉDIO
//3. Exercício 3
let cores = ["vermelho", "azul", "verde", "amarelo"];

let remover = console.log(cores.shift());

console.log(cores);

//4. Exercício 4
let alunos = ["Ana", "Carlos", "Beatriz", "Davi"];

let remover = console.log(alunos.shift());

console.log(alunos);

//DIFÍCIL
//5. Exercício 5
let notas = [8.5, 7.2, 9.0, 6.8];

notas.shift()

function media(notas){
    let resultado = 0
    for(let i = 0; i <= notas.length - 1; i++){
        resultado += notas[i]; //acessa o elemento na posição i do array notas
    }
    resultado = resultado / notas.length;
    console.log(resultado);
};

media(notas);

//6. Exercício 6
let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre"];

cidades.shift();

//utilizando o for
for (let i = 0; i < cidades.length; i++) { // Loop 'for' para iterar sobre o array.
    console.log(i + ": " + cidades[i]); // Exibe o índice e o nome da cidade.
}

//utilizando o indexOf
cidades.forEach(function(nome, indice){
    console.log(indice + ": " + nome);
});

console.log(cidades);

//INDEXOF()
//FÁCIL
//1. Exercício 1
let frutas = ["maçã", "banana", "laranja"];

console.log(frutas.indexOf("banana"));

//2. Exercício 2
let numeros = [10, 20, 30, 40];

console.log(numeros.indexOf(30));

//MÉDIO
//3. Exercício 3
let animais = ["gato", "cachorro", "pássaro", "hamster"];

console.log(animais.indexOf("pássaro"));

//4. Exercício 4
let cores = ["azul", "verde", "amarelo", "vermelho"];

console.log(cores.indexOf("vermelho"));

//DIFÍCIL
//5. Exercício 5
let pessoas = ["João", "Maria", "Pedro", "Ana"];

console.log(pessoas.indexOf("Maria"));

pessoas[1] = "Paula";

console.log(pessoas);

//6. Exercício 6
let produtos = [
    {nome: "Camiseta", preco: 29.90},
    {nome: "Calça", preco: 79.90}
];

// Encontrar o índice do produto "Calça"
let indice = produtos.findIndex(function(produto) {
    return produto.nome === "Calça";
});

if (indice !== -1) {
    console.log("Índice: " + indice); // Saída: 1
    console.log("Produto: ", produtos[indice]); // Saída: {nome: "Calça", preco: 79.90}
} else {
    console.log("Produto não encontrado.");
}

//SLICE()
//FÁCIL
//1. exercício 1
let frutas = ["maçã", "banana", "laranja", "manga"];

let newFrutas = frutas.slice(0, 2); //não pega o índice 2, só o 0 e 1.

console.log(newFrutas);

//2. Exercício 2
let numeros = [1, 2, 3, 4, 5, 6];

let newNumeros = numeros.slice(2,4); // entre 3 e 4.

console.log(newNumeros);

//MÉDIO
//3. Exercício 3
let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre"];

let newCidades = cidades.slice(-2); //caso utilize um valor só, ele inicia a busca no valor e vai até o final

console.log(newCidades);

//4. Exercício 4
let produtos = ["Camiseta", "Calça", "Tênis", "Jaqueta"];

let newProdutos = produtos.slice(1,3);

console.log(newProdutos);

//DIFÍCIL
//5. Exercício 5
let alunos = ["Ana", "Carlos", "Beatriz", "Davi", "Eduardo", "Felipe"];

let newAlunos = alunos.slice(2,4);

console.log(newAlunos);

//6. Exercício 6
let livros = ["O Hobbit", "1984", "Dom Quixote", "A Guerra dos Tronos", "Moby Dick"];

let newLivros = livros.slice(1,3);

console.log(newLivros);

//SPLICE()
//FÁCIL
//1. Exercício 1
let frutas = ["maçã", "banana", "laranja"];

frutas.splice(1,1); //1°argumento o índice, 2° argumento, quantia de itens que será removido

console.log(frutas);

//2. Exercício
let numeros = [10, 20, 30, 40];

numeros.splice(1,1);

console.log(numeros);

//3. Exercício 3
let cores = ["vermelho", "azul", "verde", "amarelo"];

cores.splice(2,1, "preto"); //remove 1 item no indice 2 e coloca a cor preto no lugar

console.log(cores);

//4. Exercício 4
let alunos = ["Ana", "Carlos", "Beatriz", "Davi"];

alunos.splice(1,1, "José");

console.log(alunos);

//5. Exercício 5
let times = ["Flamengo", "São Paulo", "Palmeiras", "Grêmio"];

times.splice(0,2, "Atlético", "Vasco");

console.log(times);

//6.Exercicio 6
let produtos = [{nome: "Camiseta", preco: 29.90}, {nome: "Calça", preco: 79.90}, {nome: "Tênis", preco: 99.90}];

produtos.splice(1,1, {nome:"Jaqueta", preco:149.90});

console.log(produtos);

//INCLUDE()
//FÁCIL
//1. Exercício 1
let frutas = ["maçã", "banana", "laranja"];

console.log(frutas.includes("banana"));

//2. Exercício 2
let numeros = [1, 2, 3, 4];

console.log(numeros.includes(3));

//MÉDIO
//3. Exercício 3
let alunos = ["Ana", "Carlos", "Beatriz", "Davi"];

console.log(alunos.includes("Carlos"));

//4. Exercício 4
let paises = ["Brasil", "Argentina", "Chile"];

console.log(paises.includes("Peru"));

//DIFÍCIL
//5. Exercício 5
let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre"];

console.log(cidades.includes("Manaus"));

//6.Exercício 6
let carros = ["Fusca", "Gol", "Civic", "Opala"];

console.log(carros.includes("Civic"))
console.log(carros.includes("Uno"))


