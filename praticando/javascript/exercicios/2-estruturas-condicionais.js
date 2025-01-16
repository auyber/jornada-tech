/*
//ESTRUTURAS CONDICIONAIS: IF, ELSE e ESLE IF
//1. Maior de dois números
function maior(a,b) {
    if (a > b){
        return a
    } else {
        return b
    }
};

console.log(maior(50,9));

//2. Número Par ou ímpar
let numero = 9;
if (numero % 2 === 0) {
    console.log("Par")
} else {
    console.log("ímpar")
};

console.log();

//3. Verificação de idade
let idade = 17;
if (idade >= 18){
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
};

console.log();

//4. Número Positivo, Número negativo ou Zero
let numero = -20;
if (numero > 0) {
    console.log("positivo")
} else if (numero === 0) {
    console.log("zero")
} else {
    console.log("Negativo")
};

console.log();

//5. É múltiplo de 3?
let numero = 16;
if (numero % 3 === 0) {
    console.log("é múltiplo de 3")
} else {
    console.log("Não é múltiplo de 3")
};

console.log();

//Médios
//1. maior de três
function maiorNumero(a,b,c) {
    if (a > b && a > c){
        return a
    } else if (b > a && b > c){
        return b
    } else {
        return c
    }
};

console.log(maiorNumero(3,5,10));

//2. Dia da semana
function diaDaSemana(numero) {
    if (numero === 1) {
        return "Domingo";
    } else if (numero === 2) {
        return "Segunda-feira";
    } else if (numero === 3) {
        return "Terça-feira";
    } else if (numero === 4) {
        return "Quarta-feira";
    } else if (numero === 5) {
        return "Quinta-feira";
    } else if (numero === 6) {
        return "Sexta-feira";
    } else if (numero === 7) {
        return "Sábado";
    } else {
        return "Número inválido";
    }
};

console.log(diaDaSemana(6));

//3. Nota Final
function notas(a) {
    if (a > 10){
        return "Nota Inválida"
    } else if (a >= 8){
        return "A"
    } else if (a >= 7) {
        return "B"
    } else if (a >= 5){
        return "C"
    } else {
        return "D"
    }
};

console.log(notas(9));

//4. Verificação de Triângulo
function triangulo(a,b,c){
    if (a + b > c && a + c > b && b + c > a){
        return "Triângulo válido"
    } else {
        return "Triângulo inválido"
    }
};

console.log(triangulo(3,4,5));

// Difícil
//1. Ano Bissexto
function anoBissexto(n){
    if (n % 4 === 0 || n % 400 === 0){
        return "Ano bissexto"
    } else {
        return "Não é Bissexto"
    }
};

console.log(anoBissexto(400));

//2. Classificação de velocidade
function velocidade(n){
    if (n > 120){
        return "Acelerando"
    } else if (n >= 60){
        return "Normal"
    } else {
        return "Muito lenta"
    }
};

console.log(velocidade(121));

//Número Primo
function numeroPrimo(n){
    if (n <= 1) return "Não é primo";
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return "Não é primo";
    }
    return "Primo";
};

console.log(numeroPrimo(28));
*/
/* Verificação inicial (n <= 1):

Números menores ou iguais a 1 não são primos, então a função retorna "Não é primo" imediatamente.
Laço for:

O loop percorre os números de 2 até n - 1.
A cada iteração, verifica se n é divisível pelo número atual (i) usando o operador de módulo (%).
Se n % i === 0 (ou seja, o resto da divisão é 0), significa que n não é primo, pois tem um divisor além de 1 e ele mesmo. A função retorna "Não é primo".
Retorno final ("Primo"):

Se o loop for concluído sem encontrar divisores, a função retorna "Primo", indicando que o número é primo.*/
/*
//4. Faixa Etária
function faixaEtaria(n){
    if (n <= 12){
        return "Criança"
    } else if (n <= 17){
        return "Adolescente"
    } else if (n <= 59){
        return "Adulto"
    } else {
        return "Idoso"
    }
};

console.log(faixaEtaria(80));

// Jogo Par ou ímpar
function parOuImpar(a,b){
    if ((a + b) % 2 === 0 ){
        return "Primeiro jogador venceu (Par)"
    } else {
        return "Segundo jogador venceu (Ímpar)"
    }
};

console.log(parOuImpar(4,7));
*/
