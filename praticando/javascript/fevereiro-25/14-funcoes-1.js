//Estou focando apenas nos primeiros exercicios de cada tópico, para continuar meus estudos.
//vou resolvendo mais exercicios todos os dias

/*
//TOTAL =

//Funções, Parâmetros Padrão, Rest Parameter e Desestruturação de Parâmetros
//FUNÇÔES
//1. função simples
function cumprimentar(nome = "Seja bem-vindo"){
   return "Olá, " + nome + "! Seja bem-vindo"
}

console.log(cumprimentar())

//2.retorno condicional
function verificarParidade(n){
    if (n % 2 == 0){
        return "Par"
    } else {
        return "Impar"
    }
}

console.log(verificarParidade(3))

//PARAMETROS PADRÃO
//1. saudação
function saudar(nome = "estranho!", saudacao = "Olá!"){
    return saudacao + " " + nome;
}

console.log(saudar())

//FALTA EX: 3., 4., 5. e 6.

//REST PARAMETER
//1. soma de n
function somar(...n){
    return n.reduce(function(acc, n){
        return acc + n;
    }, 0)
}

console.log(somar(1,2,3,4,5,6))

//2. strings
function juntarPalavras(...string){
    return string.reduce(function(acc, letra){
        return acc + letra;
    })
}

console.log(juntarPalavras("A","U","Y","B","E","R"))

//FALTA EX 3., 4., 5. e 6.

//DESTRUTURAÇÃO DE PARAMETROS
//1. função com objeto
function exibirDados({nome, idade}) {
    console.log(`${nome} tem ${idade} anos`)
}

exibirDados({nome: "Auyber", idade: 33})

//2.função com array
function primeiroEUltimo([primeiro, , ultimo]) {
    return `Primeiro: ${primeiro}, Último: ${ultimo}`;
  }
*/
//FALTA EX: 3., 4., 5. e 6.
