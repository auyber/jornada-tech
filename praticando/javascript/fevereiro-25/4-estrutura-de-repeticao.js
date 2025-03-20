
// TOTAL = 15 exercicios
//ESTRUTURA DE REPETIÇÃO
//1. Soma de numeros
function soma(n){
    let result = 0; //inicializa o resultado
    for (let i = 0; i <= n; i++){ //percorre os valores até n
        result += i; //soma o resultado mais o próximo valor percorrido
        console.log(result);
    }
    return result; // retorna o resultado
};

soma(10);

//2. Contagem até n
function contagem(n){
    for (let i = 0; i < 10; i++){
        console.log(i + 1) //o i começa em zero, a contagem inicia em 1
    }
};

contagem(10);

//3. tabuada de multiplicação
function multiplicacao(n){
    for (let i = 1; i <= 10; i++){
        console.log(n * i)
    }
};

multiplicacao(1);

//4. contagem regressiva
function regressiva(n){
    while (n >= 0 ){
        console.log(n);
        n--;
    }
};

regressiva(10);

//5. soma dos numero pares
function soma(n){
    let result = 2;
    while (result <= n){
        console.log(result);
        result += 2;
    }
};

soma(20);

//MÉDIO
//1. Fatorial de um número
function fatorial(n){
    let result = 1;// Inicializamos o resultado como 1, pois o fatorial de qualquer número começa com a multiplicação por 1.
    while (n >= 1) { // Enquanto n for maior ou igual a 1, continuaremos a multiplicação.
        result *= n; // Multiplicamos o valor atual de n ao resultado acumulado.
        console.log(result);
        n--; // Reduzimos n em 1 para avançar para o próximo número.
    }
};

fatorial(5);

//2. Sequência Fibonacci
function fibonacci(n) {
    let a = 0, b = 1, c; // Inicializamos 'a' como 0, 'b' como 1 e declaramos 'c' para armazenar o próximo número.
    
    console.log(a); // O primeiro número da sequência é sempre 0.
    if (n > 1) console.log(b); // Se n > 1, imprimimos também o segundo número, que é 1.
    
    for (let i = 2; i < n; i++) { // Começamos do índice 2 porque os dois primeiros números já foram tratados.
        c = a + b; // Calculamos o próximo número como a soma dos dois anteriores.
        console.log(c); // Imprimimos o próximo número.
        a = b; // Atualizamos 'a' para o valor de 'b' (movemos uma posição na sequência).
        b = c; // Atualizamos 'b' para o novo número calculado 'c'.
    }
}

// 3. contagem de números positivos e negativos
let positivos = 0;
let negativos = 0;

function contagem(){
    let n;
    do {
        n = parseInt(prompt("Digite um número: ")); 
        if (n > 0){
            positivos += 1;
        } else if (n < 0) {
            negativos += 1;
            }
        }while (n !== 0);

        alert("Números positivos: " + positivos + "\nNúmeros negativos: " + negativos);
};

contagem();

// 4. Verificação de primo
function primos(n){
    if (n <= 1) {
        console.log("Não é primo!")
        return;
    }

    for (let i = 2; i < n; i++){
        if (n % i == 0){
            console.log("Não é primo!");
            return;
        }
    }

    console.log("É primo!");
};

primos(6);

//5. números divisiveis por X
function divisiveis(x,n){
    let i = x;
    while (i <= n){
        console.log(i);
        i += x;
    }
};

divisiveis(3,20);

//DIFÍCIL
//1. Soma de número ímpares
function impares(n){
    let result = 0;
    let i = 1;
    do {
        result += i;
        i += 2;
        result += i;
    } while (i <= n);

    console.log(result)
};

impares(10);

//2. Inverter um número
function inverter(n){
    let result = ""
    let nStr = n.toString(); //converte o número em uma string
    for (i = nStr.length - 1; i > 0; i--){ //indice começa em 0, então é o número do tamanho da nStr -1
        result += nStr[i];
    }
    console.log(result);
};

inverter(3101991);

//3. contar Quantos fatores x
function contar(x,n){
    let result = 0;
    let i = 1;

    while (i <= n) {
        if (i % x === 0){
            result++;
        }
        i++
    }
    console.log(result);
};

contar(3,20);

//4. numeros crescentes e descendentes
function numero(n){
    for (let i = 1; i <= n; i++){
        console.log(i);
    }

    let j = n;
    while (j >=1){
        console.log(j);
        j--;
    }
};

numero(5);

//5. tabela de multiplicação
function multiplicacao(n) {
    for (let i = 1; i <= n; i++) { // Loop para as linhas
        let linha = ""; // Inicializa uma string para cada linha da tabela

        for (let j = 1; j <= n; j++) { // Loop para as colunas
            linha += i + " x " + j + " = " + (i * j) + "\t"; // Adiciona o resultado na linha
        }

        console.log(linha); // Exibe a linha completa
    }
};

multiplicacao(3);

// o \t é caractere de tabulação horizontal, cria um espaço horizontal entre os elementos
// for dentro do for, faz o primeiro for, depois roda todas as iterações do segundo for, e volta p primeiro para a segunda iteração, e assim por diante