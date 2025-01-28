//Estou focando apenas nos primeiros exercicios de cada tópico, para continuar meus estudos.
//vou resolvendo mais exercicios todos os dias

/*
//TOTAL =
/*
//Exercícios de Function, retorno, arrow, múltiplos valores e antecipado
//Retorno Básico
//1.função de multiplicação
function multiplicar (n1, n2){
    return n1 * n2
}

console.log(multiplicar(7, 4))

//2. função de saudações
function saudacao(nome = "estranho"){
    return "Olá, " + nome + "!"
}

console.log(saudacao("Auyber"))

//FALTA EX 3., 4., 5. e 5.

//FOCADOS EM ARROW FUNCTION
//1. soma com arrow
let somar = (n1, n2) {
    return n1 + n2
} 

console.log(somar(5, 10))

//2.saudação com arrow
let saudacao = (nome) { 
    return console.log("Olá, " + nome + "!")
}

saudacao("Auyber")


//FALTA EX 3., 4., 5. e 6.

//RETORNO IMPLÍCITO EM ARROW FUNCTION
//1. multiplicação
let multiplicar = (n1, n2) => console.log(n1 * n2)

multiplicar(10, 5)

//2.divisão
let dividir = (n1, n2) => console.log(n1 / n2)

dividir(100, 10)

//FALTA EX 3., 4., 5. e 6.

//RETORNO DE MÚLTIPLOS VALORES
//1. soma e diferença
function somaEDif(n1, n2){
    let soma = n1 + n2
    let dif = n1-n2
    return {soma, dif}
}

let resultado = somaEDif(10, 2)
console.log(resultado.soma)
console.log(resultado.dif)

OU

function somaEDif(a, b) {
  return { soma: a + b, diferenca: a - b };
}


//2. nome e idade
function dadosPessoais(nome, idade) {
    return { nome, idade };
  }
*/

//RETORNO ANTECIPADO
