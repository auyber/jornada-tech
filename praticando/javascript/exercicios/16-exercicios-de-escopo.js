//Estou focando apenas nos primeiros exercicios de cada tópico, para continuar meus estudos.
//vou resolvendo mais exercicios todos os dias

/*
//TOTAL =
//EXERCICIOS DE ESCOPO
//Escopo Global, de função de bloco
//1. variavel global
let nome = "João"

function ola (nome){
    return `Olá ${nome}, seja Bem Vindo!`
}

console.log(ola(nome))


//2. função simples
function saudar (nome) {
    console.log (`Olá, ${nome}`)
}

console.log(saudar("Auyber"))

console.log(nome)

// variavel nome é da função saudar, não sendo possível acessar fora dela


//3. let e const
if (true) {
    let x = 10;
    const y = 20;
    console.log(x);  // Saída: 10
    console.log(y);  // Saída: 20
  }
  
  console.log(x);  // Erro: x não está definido
  console.log(y);  // Erro: y não está definido
 //As variáveis x e y são declaradas dentro de um bloco e, por causa do escopo de bloco, não podem ser acessadas fora dele.
 
//FALTA EX: MÉDIO E DIFICIL

//FOCADOS EM CADEIA DE ESCOPO
//1. simples
let a = 10

function any () {
    let b = 20
    console.log(a)
    console.log(b)
}

console.log(any())
//A variável a é acessível dentro da função, pois está no escopo global. A variável b é declarada dentro da função e só pode ser acessada dentro dela.

//2.escopos externos
let x = 10

function exibir () {
    let y = 100
    console.log(x)
    console.log(y)
}

exibir()
console.log(x)
console.log(y)

// A variável x é acessível tanto dentro da função exibir quanto fora dela, pois está no escopo global. A variável y só existe dentro da função e não pode ser acessada fora dela, gerando erro.

//3.funções aninhadas
let numero = 10

function alterarNumero () {
    let alterado = 20

    function incrementar () {
        numero += 20
        console.log(numero);
    }

    incrementar ()
    console.log(numero)
    console.log(alterado)
}

alterarNumero()
console.log(numero)
// A variável numero é acessada e modificada dentro da função interna incrementar, alterando seu valor. A variável alterado existe dentro da função alterarNumero e pode ser acessada dentro dela. O valor de numero fora da função alterarNumero também foi alterado. Isso mostra como as variáveis de escopos internos e externos interagem.
*/