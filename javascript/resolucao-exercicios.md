# Resolução dos Exercícios

Neste arquivo, você encontrará as soluções para os exercícios propostos. A ideia é detalhar o raciocínio por trás de cada solução e apresentar a forma de implementá-las de maneira eficiente.

Lembre-se de que, para cada exercício, há diversas maneiras de chegar ao resultado correto. Abaixo, explicamos uma abordagem possível para cada um.

### 🔍 **Objetivo da Resolução:**
O objetivo é esclarecer como resolvemos cada exercício, apresentando não apenas a solução final, mas também o raciocínio por trás das escolhas feitas. Ao seguir essas resoluções, você poderá verificar se a lógica está correta e como ela pode ser adaptada para outras situações.

---

### 📝 **Explicações e Detalhes das Soluções:**
Em cada seção, você encontrará uma descrição da solução adotada para os exercícios, junto com o código explicativo. Além disso, algumas observações podem ser feitas sobre diferentes abordagens ou melhorias que podem ser aplicadas.

---

### ⚠️ **Dica Importante:**
Se você se deparar com algum exercício e não souber como começar ou como avançar, uma ótima estratégia é **procurar uma IA para ajudar na lógica do exercício**, ao invés de simplesmente pedir a resposta pronta. 

1. **Forneça o enunciado do exercício para a IA**.
2. **Peça ajuda para entender a lógica necessária para resolver o problema**.
3. Conforme for montando o código, **peça para a IA analisar seu progresso** e sugerir melhorias.

Isso vai ajudá-lo a entender o processo de resolução e, ao mesmo tempo, melhorar suas habilidades de codificação! 😊

---

🏆 A resolução de cada exercício deve ser vista como uma oportunidade de aprendizado. Ao revisar as soluções e entender a lógica por trás delas, você estará cada vez mais preparado para aplicar esses conceitos de maneira prática e eficiente.

---

Se surgir alguma dúvida ou se você quiser discutir sobre a resolução de algum exercício, estou à disposição para ajudar! 😊


## Índice

- [01. Operadores Lógicos Respostas](#01-operadores-lógicos-respostas)
- [02. Estruturas Condicionais If, Else, Else If](#02-estruturas-condicionais-if-else-else-if)
- [03. Estruturas Condicionais: Switch](#03-estruturas-condicionais-switch)
- [04. Estruturas de Repetição](#04-estruturas-de-repetição)
- [05. Estruturas de Dados](#05-estruturas-de-dados)
- [06. Arrays Métodos](#06-arrays-métodos)
- [07. Arrays Iteração](#07-arrays-iteração)



---

## 01. Operadores Lógicos Respostas

---

### Exercícios Fáceis

1. Verificação de maioridade
```
function isAdult(age) {
  return age >= 18;
}
```
2. Checagem de número par
```
function isEven(number) {
  return number % 2 === 0;
}
```
3. Verificação de número positivo
```
function isPositive(number) {
  return number >= 0;
}
```
4. Verificação de dois valores iguais
```
function areEqual(a, b) {
  return a === b;
}
```
5. Checagem de voto
```
function canVote(age) {
  return age >= 16;
}
```

### Exercícios Médios

6. Verificação de permissões
```
function hasAccess(age, isLoggedIn) {
  return age >= 18 && isLoggedIn;
}
```
7. Checagem de idade para categorias de jogo
```
function checkGameCategory(age) {
  if (age >= 18) {
    return 'Categoria A';
  } else if (age >= 12) {
    return 'Categoria B';
  } else {
    return 'Não pode participar';
  }
}
```
8. Verificação de acesso com múltiplos critérios
```
function hasAccess(age, isLoggedIn) {
  return age >= 18 && isLoggedIn;
}
```
9. Checagem de dados do formulário
```
function validateForm(username, password) {
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  return username !== '' && passwordRegex.test(password);
}
```
10. Verificação de entrada para um evento
```
function canEnterEvent(age, isAccompanied) {
  return age >= 18 || (age >= 16 && isAccompanied);
}
```

### Exercícios Difíceis

11. Controle de acesso com múltiplas permissões
```
function canAccess(age, isAdmin, isBanned) {
  return age > 21 && isAdmin && !isBanned;
}
```
12. Verificação de elegibilidade para promoção
```
function isEligibleForPromotion(purchases, isVIP, isFraudulent) {
  return (purchases > 500 || isVIP) && !isFraudulent;
}
```
13. Validação de dados complexos
```
function validateRegistration(age, username, password) {
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  return age > 18 && username !== '' && passwordRegex.test(password);
}
```
14. Checagem de permissões avançadas
```
function canAccessSystem(age, isAdmin, isBanned, madePurchaseLastMonth) {
  return age > 18 && isAdmin && !isBanned && madePurchaseLastMonth;
}
```
15. Verificação de números dentro de múltiplos intervalos
```
function checkRange(number) {
  return (number >= 10 && number <= 20) || (number >= 30 && number <= 40);
}
```

---

## 02. Estruturas Condicionais If, Else, Else If

### Exercícios Fáceis

1. Maior de dois números
```
function maiorNumero(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
```
2. Número Par ou Ímpar
```
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}
```
3. Verificação de Idade
```
function verificarIdade(idade) {
    if (idade >= 18) {
        return "maior de idade";
    } else {
        return "menor de idade";
    }
}
```
4. Número Positivo, Negativo ou Zero
```
function verificarNumero(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "negativo";
    } else {
        return "zero";
    }
}
```
5. É Múltiplo de 3?
```
function verificarMultiploDe3(numero) {
    if (numero % 3 === 0) {
        return "é múltiplo de 3";
    } else {
        return "não é múltiplo de 3";
    }
}
```

### Exercícios Médios

1. Verificar Maior de Três Números
```
function maiorDeTres(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}
```
2. Dia da Semana
```
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
}
```
3. Nota Final
```
function classificacaoNota(nota) {
    if (nota >= 9) {
        return "A";
    } else if (nota >= 7) {
        return "B";
    } else if (nota >= 5) {
        return "C";
    } else {
        return "D";
    }
}
```
4. Verificação de Triângulo
```
function verificarTriangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return "Triângulo válido";
    } else {
        return "Triângulo inválido";
    }
}
```
5. Par ou Ímpar?
```
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}
```

### Exercícios Difíceis

1. Verificar o Ano Bissexto
```
function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return "Ano bissexto";
    } else {
        return "Não é ano bissexto";
    }
}
```
2. Classificação de Velocidade
```
function classificacaoVelocidade(velocidade) {
    if (velocidade > 120) {
        return "acelerando";
    } else if (velocidade >= 60) {
        return "normal";
    } else {
        return "muito lenta";
    }
}
```
3. Verificar se um Número é Primo
```
function verificarPrimo(numero) {
    if (numero <= 1) {
        return "Não é primo";
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return "Não é primo";
        }
    }
    return "Primo";
}
```
4. Verificar Faixa Etária
```
function faixaEtaria(idade) {
    if (idade <= 12) {
        return "Criança";
    } else if (idade <= 17) {
        return "Adolescente";
    } else if (idade <= 59) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}
```
5. Jogo de Par ou Ímpar
```
function jogoParOuImpar(jogador1, jogador2) {
    let soma = jogador1 + jogador2;
    if (soma % 2 === 0) {
        return "Primeiro jogador venceu";
    } else {
        return "Segundo jogador venceu";
    }
}
```

---

## 03. Estruturas Condicionais: Switch

### Exercícios Fáceis

1. **Dia da Semana (Switch)**
   ```
   function diaDaSemana(dia) {
       switch (dia) {
           case 1:
               return "Domingo";
           case 2:
               return "Segunda-feira";
           case 3:
               return "Terça-feira";
           case 4:
               return "Quarta-feira";
           case 5:
               return "Quinta-feira";
           case 6:
               return "Sexta-feira";
           case 7:
               return "Sábado";
           default:
               return "Dia inválido";
       }
   }
   ```
2. **Verificação de Nota (Switch)**
```
function verificarNota(nota) {
    switch (true) {
        case (nota >= 9):
            return "A";
        case (nota >= 7):
            return "B";
        case (nota >= 5):
            return "C";
        default:
            return "D";
    }
}
```
3. **Escolha de Fruta (Switch)**
```
function tipoDeFruta(fruta) {
    switch (fruta) {
        case "maçã":
            return "doce";
        case "laranja":
            return "ácida";
        case "melão":
            return "neutra";
        default:
            return "fruta não registrada";
    }
}
```
4. **Verificar Tipo de Número (Switch)**
```
function tipoDeNumero(numero) {
    switch (true) {
        case (numero > 0):
            return "positivo";
        case (numero < 0):
            return "negativo";
        default:
            return "zero";
    }
}
```
5. **Escolha de Cor (Switch)**
```
function tipoDeCor(cor) {
    switch (cor) {
        case "vermelho":
        case "azul":
        case "amarelo":
            return "primária";
        case "verde":
        case "laranja":
        case "roxo":
            return "secundária";
        default:
            return "cor não registrada";
    }
}
```

### Exercícios Médios

1. **Classificação de Faixa Etária (Switch)**
```
function faixaEtaria(idade) {
    switch (true) {
        case (idade <= 12):
            return "Criança";
        case (idade <= 17):
            return "Adolescente";
        case (idade <= 59):
            return "Adulto";
        default:
            return "Idoso";
    }
}
```
2. **Gênero Musical (Switch)**
```
function generoMusical(numero) {
    switch (numero) {
        case 1:
            return "Pop";
        case 2:
            return "Rock";
        case 3:
            return "Jazz";
        case 4:
            return "Blues";
        case 5:
            return "Hip-hop";
        default:
            return "Gênero não encontrado";
    }
}
```
3. Escolha de Comida (Switch)
```
function tipoDeRefeicao(comida) {
    switch (comida) {
        case "café":
            return "café da manhã";
        case "almôndega":
            return "almoço";
        case "sopa":
            return "jantar";
        default:
            return "refeição não registrada";
    }
}
```
4. **Placa de Trânsito (Switch)**
```
function tipoDePlaca(codigo) {
    switch (codigo) {
        case 1:
            return "Pare";
        case 2:
            return "Atenção";
        case 3:
            return "Proibido";
        case 4:
            return "Liberação";
        default:
            return "Código inválido";
    }
}
```
5. **Tamanho de Camisa (Switch)**
```
function tamanhoDeCamisa(tamanho) {
    switch (tamanho) {
        case 1:
            return "P";
        case 2:
            return "M";
        case 3:
            return "G";
        case 4:
            return "GG";
        default:
            return "Tamanho não registrado";
    }
}
```

### Exercícios Difíceis

1. **Classificação de Carro (Switch)**
```
function eficienciaCarro(tipoCombustivel) {
    switch (tipoCombustivel) {
        case 1:
        case 2:
            return "eficiente";
        case 3:
            return "não eficiente";
        case 4:
            return "altamente eficiente";
        default:
            return "Tipo de combustível inválido";
    }
}
```
2. **Classificação de Rendimento (Switch)**
```
function rendimento(nota) {
    switch (true) {
        case (nota <= 3):
            return "Baixo";
        case (nota <= 6):
            return "Médio";
        case (nota <= 9):
            return "Bom";
        case (nota === 10):
            return "Excelente";
        default:
            return "Nota inválida";
    }
}
```
3. **Escolha de País (Switch)**
```
function continentePais(pais) {
    switch (pais) {
        case "Brasil":
            return "América do Sul";
        case "Estados Unidos":
            return "América do Norte";
        case "China":
            return "Ásia";
        case "França":
            return "Europa";
        default:
            return "País não registrado";
    }
}
```
4. **Gestão de Estoque (Switch)**
```
function acaoEstoque(status) {
    switch (status) {
        case 1:
            return "vender";
        case 2:
            return "reposicionar estoque";
        case 3:
            return "destacar no site";
        default:
            return "Status inválido";
    }
}
```
5. **Mês do Ano (Switch)**
```
function mesDoAno(mes) {
    switch (mes) {
        case 1:
            return "Janeiro";
        case 2:
            return "Fevereiro";
        case 3:
            return "Março";
        case 4:
            return "Abril";
        case 5:
            return "Maio";
        case 6:
            return "Junho";
        case 7:
            return "Julho";
        case 8:
            return "Agosto";
        case 9:
            return "Setembro";
        case 10:
            return "Outubro";
        case 11:
            return "Novembro";
        case 12:
            return "Dezembro";
        default:
            return "Mês inválido";
    }
}
```

---

## 04. Estruturas de Repetição

### **Fáceis:**

01. **Soma de Números de 1 até N (Usando For)**
```
function somaNumeros(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i;
    }
    return soma;
}
```
02. **Contagem de 1 até N (Usando For)**
```
function contagem(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
```
03. **Tabuada de Multiplicação (Usando For)**
```
function tabuada(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
```
04. **Contagem Regressiva (Usando While)**
```
function contagemRegressiva(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}
```
05. **Soma dos Números Pares (Usando While)**
```
function somaPares(n) {
    let soma = 0;
    let i = 2; // Começa com o primeiro número par
    while (i <= n) {
        soma += i;
        i += 2;
    }
    return soma;
}
```

### **Médios:**

01. **Fatorial de um Número (Usando While)**
```
function fatorial(n) {
    let resultado = 1;
    let i = 1;
    while (i <= n) {
        resultado *= i;
        i++;
    }
    return resultado;
}
```
02. **Imprimir Sequência de Fibonacci (Usando For)**
```
function fibonacci(n) {
    let a = 0, b = 1, c;
    console.log(a);
    if (n > 1) console.log(b);
    for (let i = 2; i < n; i++) {
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}
```
03. **Contagem de Números Positivos e Negativos (Usando Do...While)**
```
function contarPositivosNegativos() {
    let positivos = 0, negativos = 0;
    let numero;
    do {
        numero = parseInt(prompt("Digite um número (0 para sair):"));
        if (numero > 0) positivos++;
        else if (numero < 0) negativos++;
    } while (numero !== 0);
    
    console.log(`Positivos: ${positivos}, Negativos: ${negativos}`);
}
```
04. **Verificação de Primo (Usando For)**
```
function verificarPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
```
05. **Imprimir Números Divisíveis por X (Usando While)**
```
function divisiveisPorX(x, n) {
    let i = 1;
    while (i <= n) {
        if (i % x === 0) console.log(i);
        i++;
    }
}
```

### **Difíceis:**

01. **Soma de Números Ímpares (Usando Do...While)**
```
function somaImpares(n) {
    let soma = 0;
    let i = 1;
    do {
        soma += i;
        i += 2;
    } while (i <= n);
    return soma;
}
```
02. **Inverter um Número (Usando For)**
```
function inverterNumero(n) {
    let numInvertido = 0;
    while (n > 0) {
        let digito = n % 10;
        numInvertido = numInvertido * 10 + digito;
        n = Math.floor(n / 10);
    }
    return numInvertido;
}
```
03. **Contar Quantos Números Fatores de X (Usando While)**
```
function contarMultiplos(x, n) {
    let count = 0;
    let i = 1;
    while (i <= n) {
        if (i % x === 0) count++;
        i++;
    }
    return count;
}
```
04. **Imprimir Números Crescentes e Decrescentes (Usando For e While)**
```
function imprimirCrescenteDecrescente(n) {
    // Crescente
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }

    // Decrescente
    let i = n;
    while (i >= 1) {
        console.log(i);
        i--;
    }
}
```
05. **Gerar uma Tabela de Multiplicação (Usando For)**
```
function tabelaMultiplicacao(n) {
    for (let i = 1; i <= n; i++) {
        let linha = '';
        for (let j = 1; j <= n; j++) {
            linha += `${i} x ${j} = ${i * j}\t`;
        }
        console.log(linha);
    }
}
```

---

## 05. Estruturas de Dados

### Fáceis

01. **Criando e Acessando um Array**
```
const numeros = [1, 2, 3, 4, 5];

// Imprimir todos os números
numeros.forEach(num => console.log(num));

// Acessar o primeiro e último número
console.log("Primeiro número:", numeros[0]);
console.log("Último número:", numeros[numeros.length - 1]);
```
02. **Soma de Elementos de um Array**
```
function somaArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

const numeros = [1, 2, 3, 4, 5];
console.log(somaArray(numeros)); // Saída: 15
```
03. **Adicionar e Remover Elementos de um Array**
```
let nomes = ["João", "Maria", "José"];
nomes.push("Carlos"); // Adicionar no final
nomes.shift(); // Remover o primeiro elemento

console.log(nomes); // Saída: ["Maria", "José", "Carlos"]
```
04. **Filtrando Elementos de um Array**
```
const numeros = [5, 12, 8, 20, 15];
const filtrados = numeros.filter(num => num > 10);

console.log(filtrados); // Saída: [12, 20, 15]
```
05.** Verificando a Existência de um Elemento em um Array**
```
const nomes = ["Ana", "Bruna", "Carlos"];
const existe = nomes.includes("Carlos");

console.log(existe); // Saída: true
```

### Médios

01. **Inverter um Array**
```
function inverterArray(arr) {
    return arr.reverse();
}

const numeros = [1, 2, 3, 4, 5];
console.log(inverterArray(numeros)); // Saída: [5, 4, 3, 2, 1]
```
02. **Objetos com Propriedades Dinâmicas**
```
let pessoa = {
    nome: "Maria",
    idade: 30
};

pessoa.cidade = "São Paulo"; // Adicionando uma nova propriedade

console.log(pessoa); 
// Saída: { nome: 'Maria', idade: 30, cidade: 'São Paulo' }
```
03. **Encontrando o Maior Valor em um Array**
```
function maiorValor(arr) {
    return Math.max(...arr);
}

const numeros = [1, 2, 3, 10, 5];
console.log(maiorValor(numeros)); // Saída: 10
```
04. **Ordenando um Array de Strings**
```
const frutas = ["Banana", "Maçã", "Laranja", "Uva"];
frutas.sort();

console.log(frutas); // Saída: ["Banana", "Laranja", "Maçã", "Uva"]
```
05. **Remover Duplicatas de um Array**
```
function removerDuplicatas(arr) {
    return [...new Set(arr)];
}

const numeros = [1, 2, 2, 3, 3, 4];
console.log(removerDuplicatas(numeros)); // Saída: [1, 2, 3, 4]
```

### Difíceis

01. **Criando e Manipulando uma Lista Ligada (Linked List)**
```
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const lista = new LinkedList();
lista.add(1);
lista.add(2);
lista.add(3);
lista.print(); // Saída: 1, 2, 3
```
02. **Implementando uma Pilha (Stack)**
```
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    top() {
        return this.items[this.items.length - 1];
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.top()); // Saída: 20
stack.pop();
console.log(stack.top()); // Saída: 10
```
03. **Implementando uma Fila (Queue)**
```
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(10);
console.log(queue.front()); // Saída: 5
queue.dequeue();
console.log(queue.front()); // Saída: 10
```
04. **Buscando um Elemento em uma Lista**
```
const pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "José", idade: 35 }
];

function buscarPessoa(nome) {
    return pessoas.find(pessoa => pessoa.nome === nome);
}

console.log(buscarPessoa("Maria")); // Saída: { nome: 'Maria', idade: 30 }
```
05. **Implementando um Dicionário (Mapa)**
```
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
```

---

## 06. Arrays Métodos

## 1. `push()`

### Exercícios Fáceis:

**Exercício 1**:
```
let numeros = [1, 2, 3];
numeros.push(4);
console.log(numeros); // [1, 2, 3, 4]
```
**Exercício 2**:
```
let frutas = ["maçã", "banana"];
frutas.push("laranja");
console.log(frutas); // ["maçã", "banana", "laranja"]
```

### Exercícios Médios:

**Exercício 3**:
```
let alunos = ["Ana", "Carlos", "Beatriz"];
alunos.push("Davi", "Eduardo");
console.log(alunos); // ["Ana", "Carlos", "Beatriz", "Davi", "Eduardo"]
```
**Exercício 4**:
```
let carros = ["Fusca", "Gol"];
carros.push("Civic", "Opala");
console.log(carros); // ["Fusca", "Gol", "Civic", "Opala"]
```

### Exercícios Difíceis:

**Exercício 5**:
```
let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte"];
cidades.push("Porto Alegre", "Curitiba");
console.log(cidades); // ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre", "Curitiba"]
```
**Exercício 6**:
```
let produtos = ["Camiseta", "Calça", "Tênis"];
produtos.push("Jaqueta", "Boné");
console.log(produtos); // ["Camiseta", "Calça", "Tênis", "Jaqueta", "Boné"]
```

## 2. ```pop()```

### Exercícios Fáceis:

**Exercício 1**:
```
let numeros = [1, 2, 3, 4];
let removido = numeros.pop();
console.log(removido); // 4
console.log(numeros);  // [1, 2, 3]
```
**Exercício 2**:
```
let frutas = ["maçã", "banana", "laranja"];
let removido = frutas.pop();
console.log(removido); // "laranja"
console.log(frutas);   // ["maçã", "banana"]
```

### Exercícios Médios:
**Exercício 3**:
```
let alunos = ["Ana", "Carlos", "Beatriz", "Davi"];
let removido = alunos.pop();
console.log(removido); // "Davi"
console.log(alunos);   // ["Ana", "Carlos", "Beatriz"]
```
**Exercício 4**:
```
let carros = ["Fusca", "Gol", "Civic"];
let removido = carros.pop();
console.log(removido); // "Civic"
console.log(carros);   // ["Fusca", "Gol"]
```

### Exercícios Difíceis:

**Exercício 5**:
```
let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre"];
let removido = cidades.pop();
console.log(removido); // "Porto Alegre"
console.log(cidades);  // ["São Paulo", "Rio de Janeiro", "Belo Horizonte"]
```
**Exercício 6**:
```
let produtos = ["Camiseta", "Calça", "Tênis", "Jaqueta"];
let removido = produtos.pop();
console.log(removido); // "Jaqueta"
console.log(produtos);  // ["Camiseta", "Calça", "Tênis"]
```

## 3. ```unshift()```

### Exercícios Fáceis:

**Exercício 1**:
```
let numeros = [2, 3, 4];
numeros.unshift(1);
console.log(numeros); // [1, 2, 3, 4]
```
**Exercício 2**:
```
let frutas = ["banana", "laranja"];
frutas.unshift("maçã");
console.log(frutas); // ["maçã", "banana", "laranja"]
```

### Exercícios Médios:

**Exercício 3**:
```
let alunos = ["Carlos", "Beatriz"];
alunos.unshift("Ana");
console.log(alunos); // ["Ana", "Carlos", "Beatriz"]
```
**Exercício 4**:
```
let carros = ["Gol", "Fusca"];
carros.unshift("Civic");
console.log(carros); // ["Civic", "Gol", "Fusca"]
```

### Exercícios Difíceis:
**Exercício 5**:
```
let cidades = ["Rio de Janeiro", "Belo Horizonte"];
cidades.unshift("São Paulo");
console.log(cidades); // ["São Paulo", "Rio de Janeiro", "Belo Horizonte"]
```
**Exercício 6**:
```
let produtos = ["Calça", "Tênis"];
produtos.unshift("Camiseta");
console.log(produtos); // ["Camiseta", "Calça", "Tênis"]
```

## 4. ```shift()```

### Exercícios Fáceis:

**Exercício 1**:
```
let numeros = [1, 2, 3, 4];
let removido = numeros.shift();
console.log(removido); // 1
console.log(numeros);  // [2, 3, 4]
```
**Exercício 2**:
```
let frutas = ["maçã", "banana", "laranja"];
let removido = frutas.shift();
console.log(removido); // "maçã"
console.log(frutas);   // ["banana", "laranja"]
```

### Exercícios Médios:

**Exercício 3**:
```
let alunos = ["Ana", "Carlos", "Beatriz"];
let removido = alunos.shift();
console.log(removido); // "Ana"
console.log(alunos);   // ["Carlos", "Beatriz"]
```
**Exercício 4**:
```
let carros = ["Fusca", "Gol", "Civic"];
let removido = carros.shift();
console.log(removido); // "Fusca"
console.log(carros);   // ["Gol", "Civic"]
```

### Exercícios Difíceis:
**Exercício 5**:
```
let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte"];
let removido = cidades.shift();
console.log(removido); // "São Paulo"
console.log(cidades);  // ["Rio de Janeiro", "Belo Horizonte"]
```
**Exercício 6**:
```
let produtos = ["Camiseta", "Calça", "Tênis"];
let removido = produtos.shift();
console.log(removido); // "Camiseta"
console.log(produtos);  // ["Calça", "Tênis"]
```

## 5. ```indexOf()```

### Exercícios Fáceis:

**Exercício 1**:
```
let frutas = ["maçã", "banana", "laranja"];
let indice = frutas.indexOf("banana");
console.log(indice); // 1
```
**Exercício 2**:
```
let numeros = [10, 20, 30, 40];
let indice = numeros.indexOf(30);
console.log(indice); // 2
```

### Exercícios Médios:

**Exercício 3**:
```
let alunos = ["Ana", "Carlos", "Beatriz"];
let indice = alunos.indexOf("Carlos");
console.log(indice); // 1
```
**Exercício 4**:
```
let carros = ["Gol", "Fusca", "Civic"];
let indice = carros.indexOf("Fusca");
console.log(indice); // 1
```

### Exercícios Difíceis:

**Exercício 5**:
```
let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte"];
let indice = cidades.indexOf("Belo Horizonte");
console.log(indice); // 2
```
**Exercício 6**:
```
let produtos = ["Camiseta", "Calça", "Tênis"];
let indice = produtos.indexOf("Tênis");
console.log(indice); // 2
```

## 6. ```slice()```

### Exercícios Fáceis:

**Exercício 1**:
```
let numeros = [1, 2, 3, 4, 5];
let resultado = numeros.slice(1, 3);
console.log(resultado); // [2, 3]
```
**Exercício 2**:
```
let frutas = ["maçã", "banana", "laranja", "kiwi"];
let resultado = frutas.slice(2);
console.log(resultado); // ["laranja", "kiwi"]
```

### Exercícios Médios:

**Exercício 3**:
```
let alunos = ["Ana", "Carlos", "Beatriz", "Davi"];
let resultado = alunos.slice(1, 3);
console.log(resultado); // ["Carlos", "Beatriz"]
```
**Exercício 4**:
```
let carros = ["Gol", "Fusca", "Civic", "Opala"];
let resultado = carros.slice(2);
console.log(resultado); // ["Civic", "Opala"]
```

### Exercícios Difíceis:

**Exercício 5**:
```
let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre"];
let resultado = cidades.slice(1, 3);
console.log(resultado); // ["Rio de Janeiro", "Belo Horizonte"]
```
**Exercício 6**:
```
let produtos = ["Camiseta", "Calça", "Tênis", "Jaqueta"];
let resultado = produtos.slice(0, 2);
console.log(resultado); // ["Camiseta", "Calça"]
```

## 7. ```splice()```

### Exercícios Fáceis:

**Exercício 1**:
```
let numeros = [1, 2, 3, 4];
numeros.splice(2, 1, 5);
console.log(numeros); // [1, 2, 5, 4]
```
**Exercício 2**:
```
let frutas = ["maçã", "banana", "laranja"];
frutas.splice(1, 1, "kiwi");
console.log(frutas); // ["maçã", "kiwi", "laranja"]
```

### Exercícios Médios:

**Exercício 3**:
```
let alunos = ["Ana", "Carlos", "Beatriz"];
alunos.splice(1, 1, "Davi");
console.log(alunos); // ["Ana", "Davi", "Beatriz"]
```
**Exercício 4**:
```
let carros = ["Gol", "Fusca", "Civic"];
carros.splice(1, 2, "Opala", "Chevette");
console.log(carros); // ["Gol", "Opala", "Chevette"]
```

### Exercícios Difíceis:

**Exercício 5**:
```
let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte"];
cidades.splice(1, 1, "Curitiba");
console.log(cidades); // ["São Paulo", "Curitiba", "Belo Horizonte"]
```
**Exercício 6**:
```
let produtos = ["Camiseta", "Calça", "Tênis"];
produtos.splice(0, 2, "Jaqueta", "Boné");
console.log(produtos); // ["Jaqueta", "Boné", "Tênis"]
```

---

## 07. Arrays Iteração

## Respostas dos Exercícios sobre `forEach`

### Fácil

1. **Imprimir elementos de um array**  
   ```
   let numbers = [1, 2, 3, 4, 5];
   numbers.forEach(number => console.log(number));
   ```
2. **Soma de números**
```
let numbers = [10, 20, 30, 40];
let sum = 0;
numbers.forEach(number => sum += number);
console.log(sum); // 100
```

### Médio

3. **Alterar elementos de um array**
```
let names = ["Alice", "Bob", "Charlie"];
let updatedNames = [];
names.forEach(name => updatedNames.push(name + "!"));
console.log(updatedNames); // ["Alice!", "Bob!", "Charlie!"]
```
4. **Contar a quantidade de números negativos**
```
let numbers = [-1, 2, -3, 4, -5];
let negativeCount = 0;
numbers.forEach(number => {
  if (number < 0) {
    negativeCount++;
  }
});
console.log(negativeCount); // 3
```

### Difícil

5. **Média dos valores de um array de objetos**
```
let students = [{ name: "Alice", score: 85 }, { name: "Bob", score: 92 }, { name: "Charlie", score: 78 }];
let totalScore = 0;
students.forEach(student => totalScore += student.score);
let averageScore = totalScore / students.length;
console.log(averageScore); // 85
```
6. **Formatar uma lista de objetos em formato de string**
```
let products = [{ name: "Camiseta", price: 25 }, { name: "Calça", price: 50 }, { name: "Tênis", price: 100 }];
let descriptions = [];
products.forEach(product => descriptions.push(`${product.name}: R$${product.price}`));
console.log(descriptions); // ["Camiseta: R$25", "Calça: R$50", "Tênis: R$100"]
```

## Respostas dos Exercícios sobre ```map```

### Fácil

1. **Criar um novo array com o quadrado de cada número**
```
let numbers = [1, 2, 3, 4];
let squaredNumbers = numbers.map(number => number ** 2);
console.log(squaredNumbers); // [1, 4, 9, 16]
```
2. **Converter temperaturas de Celsius para Fahrenheit**
```
let celsius = [0, 20, 30, 40];
let fahrenheit = celsius.map(temp => temp * 9/5 + 32);
console.log(fahrenheit); // [32, 68, 86, 104]
```

### Médio

3. **Adicionar sufixo a cada elemento de uma lista de nomes**
```
let names = ["Maria", "João", "Lucas", "Ana"];
let updatedNames = names.map(name => name + " Filho");
console.log(updatedNames); // ["Maria Filho", "João Filho", "Lucas Filho", "Ana Filho"]
```
4. **Dobrar os valores de um array**
```
let numbers = [5, 10, 15, 20];
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // [10, 20, 30, 40]
```

### Difícil

5. **Extrair preços de produtos e calcular descontos**
```
let products = [{ name: "Camiseta", price: 25 }, { name: "Calça", price: 50 }, { name: "Tênis", price: 100 }];
let discountedPrices = products.map(product => product.price * 0.9);
console.log(discountedPrices); // [22.5, 45, 90]
```
6. **Converter uma lista de objetos para uma lista de nomes**
```
let people = [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }];
let names = people.map(person => person.name);
console.log(names); // ["Alice", "Bob", "Charlie"]
```

## Respostas dos Exercícios sobre ```filter```

### Fácil

1. **Filtrar números maiores que 10**
```
let numbers = [5, 12, 8, 130, 44];
let greaterThanTen = numbers.filter(number => number > 10);
console.log(greaterThanTen); // [12, 130, 44]
```
2. **Filtrar palavras maiores que 4 letras**
```
let words = ["apple", "banana", "kiwi", "pear"];
let longWords = words.filter(word => word.length > 4);
console.log(longWords); // ["apple", "banana"]
```

### Médio

3. **Filtrar produtos baratos**
```
let products = [{ name: "Camiseta", price: 25 }, { name: "Calça", price: 50 }, { name: "Tênis", price: 100 }];
let cheapProducts = products.filter(product => product.price < 50);
console.log(cheapProducts); // [{ name: "Camiseta", price: 25 }]
```
4. **Filtrar números negativos de um array**
```
let numbers = [-10, 5, -3, 7, -1];
let negativeNumbers = numbers.filter(number => number < 0);
console.log(negativeNumbers); // [-10, -3, -1]
```

### Difícil

5. **Filtrar pessoas maiores de 18 anos**
```
let people = [{ name: "Alice", age: 30 }, { name: "Bob", age: 17 }, { name: "Charlie", age: 25 }];
let adults = people.filter(person => person.age > 18);
console.log(adults); // [{ name: "Alice", age: 30 }, { name: "Charlie", age: 25 }]
```
6. **Filtrar tarefas não concluídas**
```
let tasks = [{ task: "Estudar", done: true }, { task: "Comprar leite", done: false }, { task: "Ir ao médico", done: true }];
let incompleteTasks = tasks.filter(task => !task.done);
console.log(incompleteTasks); // [{ task: "Comprar leite", done: false }]
```

## Respostas dos Exercícios sobre ```reduce```

### Fácil

1. Somar os valores de um array
```
let numbers = [5, 10, 15, 20];
let sum = numbers.reduce((acc, number) => acc + number, 0);
console.log(sum); // 50
```
2. **Concatenar palavras**
```
let words = ["Hello", "world", "from", "JavaScript"];
let sentence = words.reduce((acc, word) => acc + " " + word);
console.log(sentence); // "Hello world from JavaScript"
```

### Médio

3. **Multiplicar todos os elementos de um array**
```
let numbers = [1, 2, 3, 4];
let product = numbers.reduce((acc, number) => acc * number, 1);
console.log(product); // 24
```
4. **Contar ocorrências de uma letra em uma lista de palavras**
```
let words = ["apple", "banana", "cherry", "date"];
let countA = words.reduce((acc, word) => acc + (word.split('a').length - 1), 0);
console.log(countA); // 6
```

### Difícil

5. Calcular a média de uma lista de números
```
let numbers = [1, 2, 3, 4, 5];
let average = numbers.reduce((acc, number, index, array) => acc + number / array.length, 0);
console.log(average); // 3
```
6. **Agrupar objetos por uma propriedade**
```
let products = [{ name: "Camiseta", category: "Roupas" }, { name: "Calça", category: "Roupas" }, { name: "Tênis", category: "Calçados" }];
let groupedByCategory = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product);
  return acc;
}, {});
console.log(groupedByCategory);
// {
//   Roupas: [{ name: "Camiseta", category: "Roupas" }, { name: "Calça", category: "Roupas" }],
//   Calçados: [{ name: "Tênis", category: "Calçados" }]
// }
```

---



