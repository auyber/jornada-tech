# Javascript

## Introdução

Nesta revisão, abordaremos os principais conceitos de JavaScript, incluindo tipos de dados, variáveis, operadores, estruturas condicionais e de repetição. Vamos explorar também funções, objetos, arrays, e técnicas como hoisting e escopo. O objetivo é fornecer uma visão prática e objetiva dos fundamentos essenciais para o desenvolvimento em JavaScript.

---

## Índice

1. [O que é uma linguagem de programação](#1-o-que-é-uma-linguagem-de-programação)
2. [Tipos de dados](#02-tipos-de-dados)
3. [Variáveis](#03-variáveis)
4. [Hoisting](#04-hoisting)
5. [Operadores e Expressões](#05-operadores-e-expressões)
6. [Expressões](#06-expressões)
7. [Comentários](#07-comentários)
8. [Usando JavaScript no HTML](#08-usando-javascript-no-html)
9. [Comparação de dados](#09-comparação-de-dados)
10. [Operadores lógicos](#10-operadores-lógicos)
11. [Estruturas condicionais: If e Else](#11-estruturas-condicionais-if-e-else)
12. [Estruturas Condicionais: Switch](#12-estruturas-condicionais-switch)
13. [Estruturas de Repetição](#13-estruturas-de-repetição)
14. [Estruturas de dados](#14-estruturas-de-dados)
15. [Arrays](#15-arrays)
16. [Objetos](#16-objetos)
17. [Funções](#17-funções)
18. [Escopo](#18-escopo)
19. [Métodos](#19-métodos)
20. [Funções Recursivas](#20-funções-recursivas)
21. [Funções Anônimas](#21-funções-anônimas)
22. [High-order Functions](#22-high-order-functions)
23. [Objetos Globais](#23-objetos-globais)


## 1. O que é uma linguagem de programação

Uma linguagem de programação é um método padronizado de comunicação entre programadores e computadores. É um sistema formal composto por um conjunto de regras sintáticas e semânticas que permitem a criação de código fonte. Este código fonte pode ser compilado e transformado em um programa de computador ou interpretado como um script .As linguagens de programação permitem que os programadores especifiquem com precisão:

1. Quais dados o computador irá processar
2. Como esses dados serão armazenados ou transmitidos
3. Quais ações devem ser tomadas sob diversas circunstâncias

Além disso, as linguagens de programação são usadas para expressar algoritmos com precisão. O conjunto de palavras (lexemas classificados em tokens) que compõem o código fonte de um software é construído de acordo com as regras específicas da linguagem utilizada.As linguagens de programação servem como uma ponte entre o pensamento humano e a execução da máquina. Elas consistem em um conjunto de instruções que, quando escritas corretamente, podem ser convertidas em código de máquina ou, no caso de linguagens visuais, em elementos gráficos.

---

### **O que é JavaScript**

JavaScript, frequentemente abreviado como JS, é uma linguagem de programação de alto nível, interpretada e multiparadigma. Ela foi originalmente criada para funcionar no lado do cliente, ou seja, nos navegadores web, mas atualmente também é utilizada em ambientes de servidor .Características principais do JavaScript:

1. Linguagem de script: Permite a criação de conteúdo dinâmico e interativo em páginas web.
2. Interpretada: O código é executado diretamente, sem necessidade de compilação prévia.
3. Tipagem dinâmica: Os tipos de variáveis são determinados em tempo de execução.
4. Multiparadigma: Suporta programação orientada a objetos, imperativa e funcional.
5. Essencial para a web moderna: Junto com HTML e CSS, é uma das principais tecnologias da World Wide Web.

O JavaScript permite:

- Controlar elementos de uma página em tempo real
- Atualizar conteúdo sem recarregar a página completa
- Interagir com o usuário de forma dinâmica
- Enviar e receber dados do servidor de maneira assíncrona

É importante notar que, apesar do nome similar, JavaScript não é uma variante do Java. São linguagens distintas com propósitos diferentes

---

## 02. Tipos de dados

JavaScript é uma linguagem de tipagem dinâmica, o que significa que o tipo de uma variável é determinado automaticamente com base no valor atribuído a ela. Os principais tipos de dados em JavaScript são:

- Number: Representa valores numéricos, tanto inteiros quanto de ponto flutuante.Exemplo: **`let idade = 30;`** ou **`let altura = 1.75;`**-
-  String: Representa sequências de caracteres, delimitadas por aspas simples ou duplas.Exemplo: **`let nome = "João";`** ou **`let mensagem = 'Olá, mundo!';`**
- Boolean: Representa valores lógicos verdadeiro (true) ou falso (false).Exemplo: **`let aprovado = true;`**
- Undefined: Indica que uma variável foi declarada, mas não foi atribuído nenhum valor a ela.Exemplo: **`let variavelNaoInicializada;`**
- Null: Representa a ausência intencional de qualquer valor ou objeto.Exemplo: **`let valorNulo = null;`**
- Object: Estrutura de dados complexa que pode conter múltiplas propriedades e métodos.Exemplo: **`let pessoa = {nome: "Maria", idade: 25};`**
- Array: Um tipo especial de objeto usado para armazenar listas ordenadas de valores.Exemplo: **`let frutas = ["maçã", "banana", "laranja"];`**
- Function: Bloco de código reutilizável que pode ser chamado para executar tarefas específicas.Exemplo: **`function somar(a, b) { return a + b; }`**
- Symbol: Tipo de dado introduzido no ECMAScript 6, representa um identificador único.Exemplo: **`let simbolo = Symbol("descricao");`**

Além desses tipos básicos, JavaScript também suporta outros tipos de dados mais avançados e estruturas de controle que permitem a criação de programas complexos e interativos

---

## 03. Variáveis

Variáveis em JavaScript são contêineres para armazenar dados. Elas são fundamentais para qualquer programa, pois permitem armazenar e manipular informações durante a execução do código.

### Declaração de Variáveis

Em JavaScript moderno (ES6+), existem três formas de declarar variáveis:

1. **`let`**: Usado para declarar variáveis que podem ter seu valor alterado.
    ```
    javascriptlet idade = 25;
    idade = 26; // Valor pode ser alterado
    ```
2. **`const`**: Usado para declarar constantes, cujo valor não pode ser alterado após a atribuição inicial.
    ```
    const PI = 3.14159;
    PI = 3.14; // Isso causaria um erro
    ```
3. **`var`**: Forma mais antiga de declarar variáveis, com escopo de função ou global.
    ```
    var nome = "João";
    ```

---

### Regras para Nomes de Variáveis

- Devem começar com uma letra, underscore (_) ou cifrão ($).
- Podem conter letras, números, underscores e cifrões.
- São case-sensitive (maiúsculas e minúsculas são diferentes).
- Não podem ser palavras reservadas do JavaScript.

---

### Escopo de Variáveis

- **`let`** e **`const`** possuem escopo de bloco. Isso significa que elas estão disponíveis apenas dentro do bloco onde foram declaradas, delimitado por `{}`.
- **`var`** possui escopo de função ou global, ou seja, está disponível dentro de toda a função onde foi declarada, mesmo que a declaração esteja em um bloco interno. Se declarada fora de uma função, torna-se global.

#### Exemplos:

```
{
  let x = 10; // x só existe dentro deste bloco
}
console.log(x); // Isso causaria um erro, pois x não está definido fora do bloco

function exemplo() {
  var y = 20; // y existe em toda a função
}
console.log(y); // Isso também causaria um erro, pois y não está definido fora da função
```
---

## 04. Hoisting

É o comportamento do JavaScript de mover as declarações de variáveis e funções para o topo de seu escopo antes da execução do código.

- Variáveis declaradas com **`var`** são "elevadas" (hoisted) para o topo do escopo, mas são inicializadas com o valor `undefined` até que uma atribuição explícita ocorra no código.
- Variáveis declaradas com **`let`** e **`const`** também são "elevadas", mas permanecem em um estado de **temporal dead zone** (TDZ) até que sua declaração seja executada. Isso significa que elas não podem ser acessadas antes de sua inicialização.

#### Exemplos:
```
console.log(a); // undefined
var a = 5; // A variável é elevada e inicializada com undefined, depois recebe o valor 5

// console.log(b); // Erro: Cannot access 'b' before initialization
let b = 10; // A variável é elevada, mas permanece na temporal dead zone até esta linha
```
### Diferença Entre ```var```, ```let``` e ```const``` no Hoisting:

1. ```var```:

- É inicializada como ```undefined``` durante o hoisting.
- Pode ser acessada antes da linha de declaração sem causar erro, mas o valor será ```undefined```.
```
console.log(x); // undefined
var x = 10;
```
2. ```let```:

- É elevada, mas não é inicializada até que a execução alcance sua declaração.
- Tentativas de acesso antes da inicialização resultam em um erro.
```
console.log(y); // Erro: Cannot access 'y' before initialization
let y = 20;
```
3. ```const```:

- Comporta-se de maneira semelhante ao ```let```, mas, além disso, exige a inicialização no momento da declaração.
```
console.log(z); // Erro: Cannot access 'z' before initialization
const z = 30;
```
---

### Boas Práticas:

- Prefira ```let``` e c```onst``` ao invés de ```var``` para evitar problemas causados pelo hoisting e pela inicialização automática de variáveis.
- Sempre declare variáveis antes de usá-las para melhorar a legibilidade e evitar confusões.

### Funções e Hoisting:

Declarações de funções (```function```) também são elevadas, permitindo que sejam chamadas antes de serem declaradas.
```
sayHello(); // "Hello, world!"

function sayHello() {
  console.log("Hello, world!");
}
```
- Funções atribuídas a variáveis, como no caso de funções anônimas ou arrow functions, seguem o comportamento do hoisting da variável usada:
```
// sayHi(); // Erro: Cannot access 'sayHi' before initialization
const sayHi = () => console.log("Hi!");
```
---

## 05. Operadores e Expressões

Operadores em JavaScript são símbolos especiais que realizam operações específicas em operandos. Expressões são combinações de valores, variáveis e operadores que são avaliadas para produzir um resultado.

### **Tipos de Operadores**

### Operadores Aritméticos

Os operadores aritméticos são utilizados para realizar cálculos matemáticos.

- **Adição (+)**: Soma dois valores.
```
  let soma = 5 + 3; // 8
```

- **Subtração (-)**: Subtrai o segundo valor do primeiro.
```
let diferenca = 10 - 4; // 6
```

- Multiplicação (*): Multiplica dois valores.
```
let produto = 3 * 4; // 12
```

- Divisão (/): Divide o primeiro valor pelo segundo.
```
let quociente = 20 / 5; // 4
```

- Módulo (%): Retorna o resto da divisão do primeiro valor pelo segundo.
```
let resto = 17 % 3; // 2
```

- Incremento (++): Aumenta o valor de uma variável em 1.
```
let x = 5;
x++; // x agora é 6
```

- Decremento (--): Reduz o valor de uma variável em 1.
```
let y = 8;
y--; // y agora é 7
```

- Exponenciação ()**: Eleva o primeiro valor à potência do segundo.
```
let potencia = 2 ** 3; // 8
```

---

###  Operadores de Atribuição

Os operadores de atribuição atribuem valores às variáveis.

- Atribuição simples (=): Atribui um valor à variável.
```
let x = 5;
```

- Atribuição com adição (+=): Soma o valor atual ao novo valor e atualiza a variável.
```
x += 3; // equivalente a x = x + 3
```

- Atribuição com subtração (-=): Subtrai o valor do novo valor e atualiza a variável.
```
x -= 2; // equivalente a x = x - 2
```

- Atribuição com multiplicação (*=): Multiplica o valor atual pelo novo valor e atualiza a variável.
```
x *= 4; // equivalente a x = x * 4
```

- Atribuição com divisão (/=): Divide o valor atual pelo novo valor e atualiza a variável.
```
x /= 2; // equivalente a x = x / 2
```

---

### Operadores de Comparação

Usados para comparar dois valores, retornando true ou false.

- Igual (==): Compara apenas o valor, ignorando o tipo.
```
5 == "5"; // true
```

- Estritamente igual (===): Compara valor e tipo.
```
5 === "5"; // false
```

- Diferente (!=): Retorna true se os valores forem diferentes, ignorando o tipo.
```
5 != "6"; // true
```

- Estritamente diferente (!==): Retorna true se valores e tipos forem diferentes.
```
5 !== "5"; // true
```

- Maior que (>):
```
10 > 5; // true
```

- Menor que (<):
```
3 < 7; // true
```

- Maior ou igual (>=):
```
5 >= 5; // true
```

- Menor ou igual (<=):
```
4 <= 4; // true
```

---

### Operadores Lógicos

Usados para combinar ou inverter condições lógicas.

- AND (&&): Retorna true se ambas as condições forem verdadeiras.
```
true && false; // false
```

- OR (||): Retorna true se pelo menos uma das condições for verdadeira.
```
true || false; // true
```

- NOT (!): Inverte o valor lógico.
```
!true; // false
```

---

### Operadores de String

- Concatenação (+): Junta duas ou mais strings.
```
"Olá" + " " + "Mundo"; // "Olá Mundo"
```

---

### Operador Ternário

O operador ternário é uma forma concisa de escrever um if/else.

- Sintaxe: ```condição ? expressão1 : expressão2```

Exemplo:
```
let idade = 20;
let status = idade >= 18 ? "Adulto" : "Menor"; // "Adulto"
```

---

### Operadores de Tipo

- ```typeof```: Retorna o tipo do valor.
```
typeof 42; // "number"
typeof "Olá"; // "string"
```

- ```instanceof```: Verifica se um objeto pertence a uma classe ou protótipo.
```
[1, 2] instanceof Array; // true
```

---

## 06. Expressões

Expressões são combinações de valores, variáveis e operadores que são avaliadas para produzir um resultado. Elas podem ser simples ou complexas.Exemplos de expressões:
```
let x = 5;
let y = 3;
let z = x + y * 2; // 11

let nome = "Alice";
let saudacao = "Olá, " + nome + "!"; // "Olá, Alice!"

let maiorIdade = idade >= 18;

let resultado = (x > y) ? "x é maior" : "y é maior ou igual";
```
---

## 07. Comentários

Comentários são trechos de texto no código que são ignorados pelo interpretador JavaScript. Eles são usados para explicar o código, fazer anotações ou desabilitar temporariamente partes do código.

## **Tipos de Comentários**

1. Comentários de Linha Única
   
    - Começam com // e continuam até o final da linha.
    ```
    // Este é um comentário de linha única
    
    let x = 5; // Isso também é um comentário de linha única
    ```
3. Comentários de Múltiplas Linhas
   
    - Começam com /* e terminam com */.
    - Podem abranger várias linhas.
    ```
    /*
    Este é um comentário
    de múltiplas linhas.
    Pode ocupar várias linhas.
    */
    ```

---

### **Boas Práticas para Comentários**

1. Use comentários para explicar o "porquê" e não o "como".
    ```
   // Calcula a idade em anos bissextos
    
    function calcularIdadeBissexto(anoNascimento) {
      // Código aqui
    }
    ```
2. Mantenha os comentários atualizados quando o código mudar.
   
4. Evite comentários óbvios que não agregam valor.
    ```
    // Ruim
    let x = 5; // Atribui 5 a x
    
    // Bom
    let velocidadeInicial = 5; // Em metros por segundo
    ```
5. Use comentários para documentar funções complexas.
    ```
    /*
     * Calcula o fatorial de um número.
     * @param {number} n - O número para calcular o fatorial.
     * @returns {number} O fatorial de n.
     */
    
    function fatorial(n) {
      // Código aqui
    }
    ```
6. Use comentários para marcar TODO's ou FIXME's.
    ```
    // TODO: Implementar validação de entrada
    
    function processarDados(dados) {
      // Código aqui
    }
    
    // FIXME: Corrigir bug de arredondamento
    
    function calcularMedia(numeros) {
      // Código aqui
    }
    ```
7. Em ambientes de desenvolvimento, você pode usar comentários para desabilitar temporariamente código.
    ```
    // let debugMode = true;
    
    let debugMode = false;
    ```

Lembre-se, código bem escrito muitas vezes é autoexplicativo. Use comentários para adicionar clareza quando necessário, mas não substitua um bom design de código por comentários excessivos.

---

## 08. Usando JavaScript no HTML

Existem três principais formas de incluir JavaScript em uma página HTML:

1. Inline: Inserindo código JavaScript diretamente em atributos HTML.
   
    ```
    <button onclick="alert('Olá, mundo!')">Clique aqui</button>
    ```
    
3. Interno: Usando a tag **`<script>`** dentro do documento HTML.
    ```
    <script>
      function saudacao() {
        alert('Olá, mundo!');
      }
    </script>
    ```
    
4. Externo: Vinculando um arquivo JavaScript separado.
   
    ```
    <script src="meu-script.js"></script>
    ```

A abordagem recomendada é usar arquivos JavaScript externos, pois isso melhora a organização do código, permite reutilização e facilita a manutenção.Para otimizar o carregamento, é geralmente recomendado colocar as tags ```<script>``` antes do fechamento da tag ```</body>```. Isso permite que o conteúdo HTML seja carregado antes da execução dos scripts.

---

### **Recursos nativos do navegador**

Os navegadores modernos oferecem uma variedade de APIs nativas que podem ser acessadas via JavaScript:

1. DOM (Document Object Model): Permite manipular a estrutura, conteúdo e estilos de uma página web.
2. Web Storage: Inclui localStorage e sessionStorage para armazenamento de dados no navegador.
3. Fetch API: Facilita a realização de requisições HTTP assíncronas.
4. Canvas e WebGL: Permitem criar gráficos 2D e 3D diretamente no navegador.
5. Geolocation API: Fornece acesso à localização geográfica do usuário.
6. Web Audio API: Permite manipular e criar áudio no navegador.
7. WebSockets: Possibilita comunicação bidirecional em tempo real.

Essas APIs nativas oferecem funcionalidades poderosas sem a necessidade de bibliotecas externas, permitindo criar aplicações web ricas e interativas.

---

## 09. Comparação de dados

JavaScript oferece operadores de comparação para avaliar e comparar valores:

1. Igualdade (==): Compara valores, realizando coerção de tipos.
    ```
    5 == "5" // true
    ```
    
2. Igualdade estrita (===): Compara valores e tipos.
    ```
    5 === "5" // false
    ```
    
3. Desigualdade (!=): Verifica se os valores são diferentes.
    ```
    5 != "6" // true
    ```
    
4. Desigualdade estrita (!==): Verifica se os valores ou tipos são diferentes.
    ```
    5 !== "5" // true
    ```
    
5. Maior que (>), Menor que (<), Maior ou igual (>=), Menor ou igual (<=):
    ```
    10 > 5 // true
    3 < 7 // true
    5 >= 5 // true
    4 <= 4 // true
    ```

É geralmente recomendado usar a igualdade estrita (===) para evitar resultados inesperados devido à coerção de tipos.

---

## 10. Operadores lógicos

JavaScript possui três operadores lógicos principais:

1. AND (&&): Retorna true se ambos os operandos forem verdadeiros.
    ```
    true && false // false
    true && true // true
    ```
    
2. OR (||): Retorna true se pelo menos um dos operandos for verdadeiro.
    ```
    true || false // true
    false || false // false
    ```
    
3. NOT (!): Inverte o valor booleano.
    ```
    !true // false
    !false // true
    ```

Estes operadores são frequentemente usados em estruturas de controle de fluxo, como condicionais if-else, e em expressões de avaliação curta-circuito.
```
let x = 5;
let y = 10;
if (x > 0 && y < 20) {
  console.log("Ambas as condições são verdadeiras");
}
```
Explicação:

- O código verifica duas condições usando o operador lógico AND (&&):
-- x > 0 → Verifica se x é maior que 0. (Verdadeiro, pois x = 5)
-- y < 20 → Verifica se y é menor que 20. (Verdadeiro, pois y = 10)
-Como ambas as condições são verdadeiras, o bloco dentro do if é executado, exibindo a mensagem:
"Ambas as condições são verdadeiras" no console.

Os operadores lógicos em JavaScript também exibem o comportamento de curto-circuito, onde a avaliação para assim que o resultado é determinado, o que pode ser útil para verificações condicionais eficientes.

---

## 11. Estruturas condicionais: If e Else

As estruturas condicionais if e else permitem que o código execute diferentes blocos dependendo de condições específicas.

### **If**

A estrutura if executa um bloco de código se uma condição for verdadeira.
Sintaxe:
```
if (condição) {
  // código a ser executado se a condição for verdadeira
}
```
Exemplo:
```
let idade = 18;
if (idade >= 18) {
  console.log("Você é maior de idade.");
}
```
---

### **If...Else**

A estrutura if...else permite executar um bloco de código se a condição for verdadeira e outro bloco se for falsa.
Sintaxe:
```
if (condição) {
  // código a ser executado se a condição for verdadeira
} else {
  // código a ser executado se a condição for falsa
}
```
Exemplo:
```
let hora = 20;
if (hora < 18) {
  console.log("Bom dia!");
} else {
  console.log("Boa noite!");
}
```
---

### **If...Else If...Else**

Para múltiplas condições, podemos usar else if.
Sintaxe:
```
if (condição1) {
  // código se condição1 for verdadeira
} else if (condição2) {
  // código se condição2 for verdadeira
} else {
  // código se todas as condições anteriores forem falsas
}
```
Exemplo:
```
let nota = 75;
if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else {
  console.log("D");
}
```

---

## 12. Estruturas Condicionais: Switch

A estrutura `switch` é usada para executar diferentes blocos de código com base no valor de uma expressão. É uma alternativa ao `if...else if...else` quando há múltiplas condições relacionadas ao mesmo valor.

Sintaxe:
```
switch (expressão) {
  case valor1:
    // código a ser executado
    break;
  case valor2:
    // código a ser executado
    break;
  ...
  default:
    // código a ser executado se nenhum caso corresponder
}
```
Exemplo:
```
let diaDaSemana = 3;

switch (diaDaSemana) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  case 6:
  case 7:
    console.log("Fim de semana");
    break;
  default:
    console.log("Dia inválido");
}
```
Explicação

`switch (diaDaSemana)`
  
- A expressão `diaDaSemana` é avaliada. Seu valor será comparado sequencialmente com os valores definidos em `case`.

`case 1`
  
- Se `diaDaSemana` for igual a 1, a mensagem `"Segunda-feira"` será exibida no console e a instrução `break` encerrará o `switch`.

`break`

- Impede que o código continue executando outros casos após encontrar uma correspondência. Sem `break`, os blocos seguintes seriam executados, independentemente da correspondência.

Casos compartilhados (`case 6:` e `case 7:`)

- Se `diaDaSemana` for 6 ou 7, a mensagem `"Fim de semana"` será exibida.  
- Isso ocorre porque ambos os casos compartilham o mesmo bloco de código.

`default`

- Se nenhum dos casos corresponder ao valor de `diaDaSemana`, o bloco `default` será executado.  
- Neste exemplo, `"Dia inválido"` será exibido se `diaDaSemana` não corresponder a nenhum valor entre 1 e 7.

---

## 13. Estruturas de Repetição

As estruturas de repetição permitem executar um bloco de código várias vezes, enquanto uma condição específica for verdadeira ou por um número determinado de iterações. Elas são úteis para automatizar tarefas repetitivas e processar conjuntos de dados de forma eficiente. Exemplos comuns incluem `for`, `while` e `do...while`.

---

### Estruturas de Repetição: While

O loop while executa um bloco de código enquanto uma condição específica for verdadeira.
Sintaxe:
```
while (condição) {
  // código a ser executado
}
```
Exemplo:
```
let contador = 0;
while (contador < 5) {
  console.log("Contagem: " + contador);
  contador++;
}
```
Explicação:

- O loop inicia verificando se a condição contador < 5 é verdadeira.
- Enquanto for verdadeira, o código dentro do bloco será executado.
- A variável contador é incrementada em 1 a cada iteração.
- Quando a condição se torna falsa, o loop é encerrado.

---

### **Estruturas de Repetição: Do While**

O loop do...while é similar ao while, mas garante que o bloco de código seja executado pelo menos uma vez antes de verificar a condição.Sintaxe:
```
do {
  // código a ser executado
} while (condição);
```
Exemplo:
```
let i = 0;
do {
  console.log("O número é " + i);
  i++;
} while (i < 5);
```
Explicação:

- O bloco de código dentro de do é executado uma vez antes de verificar a condição.
- Após a execução inicial, a condição i < 5 é avaliada.
- Enquanto a condição for verdadeira, o código continuará sendo executado.
- Quando a condição se torna falsa, o loop é encerrado.

---

### **Estruturas de Repetição: For**

O loop for é usado quando se sabe antecipadamente quantas vezes o bloco de código deve ser executado.Sintaxe:
```
for (inicialização; condição; incremento) {
  // código a ser executado
}
```
Exemplo:
```
for (let i = 0; i < 5; i++) {
  console.log("O número é " + i);
}
```
Explicação:

- A inicialização (`let i = 0`) define o valor inicial da variável `i`.
- A condição (`i < 5`) é verificada antes de cada iteração. Enquanto for verdadeira, o código continuará a ser executado.
- O incremento (`i++`) aumenta o valor de `i` a cada iteração.
- O código dentro do bloco do `for` é executado enquanto a condição for verdadeira. Neste caso, ele exibe os números de 0 a 4.

---

## 14. Estruturas de dados

JavaScript suporta várias estruturas de dados nativas. As mais comuns são:

Arrays: Coleções ordenadas de valores.

Arrays são estruturas de dados que armazenam uma lista ordenada de valores. Podem armazenar qualquer tipo de dado e têm um índice numérico para acessar os elementos.

```
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]); // "maçã"
```
- ```frutas[0]``` acessa o primeiro elemento do array, que é ```"maçã"```.

---

Objetos: Coleções de pares chave-valor.

Objetos armazenam dados em pares chave-valor, onde as chaves são únicas e podem ser usadas para acessar seus valores.

```
let pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor"
};
console.log(pessoa.nome); // "João"
```
- ```pessoa.nome``` acessa o valor associado à chave ```"nome"```, que é ```"João"```.

---

Map: Coleção de pares chave-valor onde as chaves podem ser de qualquer tipo.
   
Diferente dos objetos, as chaves de um ```Map``` podem ser de qualquer tipo (não apenas strings ou símbolos). ```Map``` mantém a ordem de inserção dos elementos.
```
let mapa = new Map();
mapa.set("chave", "valor");
console.log(mapa.get("chave")); // "valor"
```
- ```mapa.get("chave")``` acessa o valor associado à chave ```"chave"```, que é ```"valor"```.

---
  
4. Set: Coleção de valores únicos.
   
Um ```Set``` é uma coleção de valores únicos, ou seja, não permite valores duplicados.
```
let conjunto = new Set([1, 2, 3, 3, 4]);
console.log(conjunto.size); // 4
```
- ```conjunto.size``` retorna o número de elementos únicos no conjunto, que é ```4```, ignorando o valor duplicado ```3```.

---

5. WeakMap e WeakSet: Versões "fracas" de Map e Set que permitem que suas chaves sejam coletadas pelo garbage collector.

- WeakMap: Armazena pares chave-valor, mas as chaves são objetos e podem ser coletadas pelo garbage collector quando não houver mais referências.
  
- WeakSet: Semelhante ao Set, mas armazena apenas objetos e as referências podem ser coletadas pelo garbage collector quando não houver mais referências.
  
Exemplo de uso do ```WeakMap```:
```
let obj = {};
let weakMapa = new WeakMap();
weakMapa.set(obj, "valor");
console.log(weakMapa.get(obj)); // "valor"
```
- Se ```obj``` não tiver mais referências, a chave será coletada pelo garbage collector automaticamente.

Estas estruturas de dados oferecem diferentes maneiras de organizar e manipular dados em JavaScript, cada uma com suas próprias características e casos de uso específicos.

Exemplo de uso do ```WeakSet```:
```
let obj1 = {};
let obj2 = {};
let weakSet = new WeakSet();

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj2)); // true

obj1 = null; // O objeto será removido do WeakSet automaticamente pelo garbage collector
```
- No caso do ```WeakSet```, as referências a objetos podem ser removidas automaticamente quando não houver mais referências a eles, o que não ocorre com o ```Set``` comum.

---

## 15. Arrays

Arrays em JavaScript são estruturas de dados que permitem armazenar múltiplos valores em uma única variável. Eles são objetos que contêm valores (de qualquer tipo) em posições numeradas. Arrays são muito úteis quando se deseja trabalhar com listas de dados de maneira organizada e eficiente.

### **Criação de Arrays**

1. **Usando colchetes (forma literal):**
    - Esta é a forma mais comum e conveniente de criar um array, usando colchetes para definir os elementos diretamente.
    ```javascript
    let frutas = ["maçã", "banana", "laranja"];
    ```
    - Os elementos do array são definidos dentro dos colchetes e separados por vírgulas. Essa forma de criação é simples e direta.

2. **Usando o construtor Array():**
    - O construtor `Array()` pode ser usado para criar arrays, mas é menos comum e pode ser um pouco mais confuso quando usado com um único número como argumento.
    ```javascript
    let numeros = new Array(1, 2, 3, 4, 5);
    ```
    - Quando utilizado desta forma, o construtor cria um array contendo os valores passados como argumentos. Porém, se for passado um único número como argumento, ele cria um array com esse número de posições vazias.
    ```javascript
    let vazio = new Array(3); // Cria um array de 3 posições vazias
    ```

3. **Array vazio:**
    - Você também pode criar um array sem elementos, o que pode ser útil quando você precisa adicionar elementos dinamicamente mais tarde.
    ```javascript
    let arrayVazio = [];
    ```
    - Este método cria um array vazio, pronto para ser preenchido com dados posteriormente.

---

### Características Importantes

1. **Indexação baseada em zero:**
    - O primeiro elemento de um array em JavaScript está sempre no índice 0. Isso significa que os índices começam em 0, não 1.
    ```javascript
    console.log(frutas[0]); // "maçã"
    ```
    - Se você acessar o índice 0 do array `frutas`, obterá o primeiro elemento, que neste caso é "maçã". Os índices continuam incrementando de 1 para os próximos elementos.

2. **Propriedade `length`:**
    - A propriedade `length` retorna o número total de elementos no array, sendo uma forma útil para determinar o tamanho do array e para usá-lo em loops.
    ```javascript
    console.log(frutas.length); // 3
    ```
    - Mesmo que o array contenha elementos vazios ou indefinidos, a propriedade `length` contará essas posições vazias. No exemplo acima, o array `frutas` tem 3 elementos, então `frutas.length` retorna 3.

3. **Arrays podem conter diferentes tipos de dados:**
    - Arrays em JavaScript são muito flexíveis, permitindo armazenar diferentes tipos de dados dentro de um mesmo array. Isso significa que você pode ter números, strings, objetos e até outros arrays no mesmo array.
    ```javascript
    let misturado = [1, "dois", { nome: "três" }, [4, 5]];
    ```
    - No exemplo acima, o array `misturado` contém um número (`1`), uma string (`"dois"`), um objeto (`{ nome: "três" }`), e outro array (`[4, 5]`), mostrando a flexibilidade do tipo de dados que pode ser armazenado.

--- 

### Trabalhando com Arrays

### **Métodos Importantes**

1. **push():** 
    - Adiciona um ou mais elementos ao final do array e retorna o novo comprimento do array. 
    - Esse método modifica o array original.
    ```
    frutas.push("uva");
    console.log(frutas); // ["maçã", "banana", "laranja", "uva"]
    ```
    - **Explicação:** Ao usar `push()`, o elemento `"uva"` foi adicionado ao final do array `frutas`. O array agora contém 4 elementos.

2. **pop():**
    - Remove o último elemento do array e retorna esse elemento removido.
    - Este método também modifica o array original.
    ```
    let ultimaFruta = frutas.pop();
    console.log(ultimaFruta); // "uva"
    console.log(frutas); // ["maçã", "banana", "laranja"]
    ```
    - **Explicação:** O método `pop()` remove `"uva"` do final do array e o retorna. O array `frutas` agora tem apenas 3 elementos.

3. **unshift():**
    - Adiciona um ou mais elementos no início do array, movendo os elementos existentes para posições superiores. 
    - Retorna o novo comprimento do array.
    ```
    frutas.unshift("morango");
    console.log(frutas); // ["morango", "maçã", "banana", "laranja"]
    ```
    - **Explicação:** O método `unshift()` adiciona o elemento `"morango"` ao início do array `frutas`, fazendo com que os outros elementos sejam deslocados para a direita.

4. **shift():**
    - Remove o primeiro elemento do array e o retorna.
    - Este método também altera o array original.
    ```
    let primeiraFruta = frutas.shift();
    console.log(primeiraFruta); // "morango"
    console.log(frutas); // ["maçã", "banana", "laranja"]
    ```
    - **Explicação:** O método `shift()` remove o primeiro elemento do array, neste caso `"morango"`, e retorna esse valor. O array restante é agora composto por `"maçã"`, `"banana"`, e `"laranja"`.

5. **indexOf():**
    - Retorna o índice do primeiro elemento encontrado no array que corresponda ao valor fornecido. Se o elemento não for encontrado, retorna `-1`.
    ```
    console.log(frutas.indexOf("banana")); // 1
    ```
    - **Explicação:** O método `indexOf()` encontra o índice do elemento `"banana"` no array, que é 1, pois ele é o segundo elemento do array.

6. **slice():**
    - Retorna uma cópia rasa de uma porção de um array, sem modificar o array original. Os parâmetros indicam o índice de início e o índice final da parte do array a ser copiada.
    ```
    let parte = frutas.slice(1, 3);
    console.log(parte); // ["banana", "laranja"]
    ```
    - **Explicação:** O método `slice()` extrai os elementos do array entre os índices 1 e 3 (não incluindo o índice 3), retornando o novo array com os elementos `"banana"` e `"laranja"`.

7. **splice():**
    - Modifica o conteúdo de um array removendo, substituindo ou adicionando elementos. Os parâmetros indicam o índice de início, o número de elementos a serem removidos, e os novos elementos a serem inseridos.
    ```
    frutas.splice(1, 1, "kiwi", "manga");
    console.log(frutas); // ["maçã", "kiwi", "manga", "laranja"]
    ```
    - **Explicação:** O método `splice()` remove um elemento no índice 1, que é `"banana"`, e insere os elementos `"kiwi"` e `"manga"` nesse local, alterando o array original.

8. **includes():**
    - Verifica se um determinado elemento está presente no array. Retorna `true` se o elemento for encontrado e `false` caso contrário. Também pode receber um segundo argumento para indicar de qual índice a busca deve começar.
    ```
    const frutas = ["maçã", "banana", "laranja"];
    console.log(frutas.includes("banana")); // true
    console.log(frutas.includes("uva")); // false
    console.log(frutas.includes("maçã", 1)); // false (começa a buscar a partir do índice 1)
    ```
    - **Explicação:** O método `includes()` verifica a presença do elemento. Se `"banana"` está no array, retorna `true`. Se `"uva"` não está presente, retorna `false`. A busca pode ser iniciada de um índice específico, como demonstrado ao procurar `"maçã"` a partir do índice 1, resultando em `false` pois o primeiro elemento é `"banana"`.

--- 

### **Iteração em Arrays**

1. **forEach():**
    - O método `forEach()` executa uma função fornecida uma vez para cada elemento do array. Ele não retorna um novo array, apenas executa a função para cada item.
    - **Exemplo:**
    ```
    frutas.forEach(function(fruta) {
      console.log(fruta);
    });
    ```
    - **Explicação:** Neste exemplo, a função anônima é chamada para cada elemento do array `frutas`. Para cada iteração, o valor da fruta é impresso no console. A saída será:
        ```
        maçã
        banana
        laranja
        ```

2. **map():**
    - O método `map()` cria um novo array com os resultados da chamada de uma função para cada elemento do array original. O array original não é alterado.
    - **Exemplo:**
    ```
    let maiusculas = frutas.map(fruta => fruta.toUpperCase());
    console.log(maiusculas); // ["MAÇÃ", "KIWI", "MANGA", "LARANJA"]
    ```
    - **Explicação:** O `map()` aplica a função `toUpperCase()` a cada elemento de `frutas`, criando um novo array com os nomes das frutas em maiúsculas. O array original não é modificado.

3. **filter():**
    - O método `filter()` cria um novo array contendo todos os elementos do array original que atendem à condição especificada na função fornecida.
    - **Exemplo:**
    ```
    let frutasComM = frutas.filter(fruta => fruta.startsWith('m'));
    console.log(frutasComM); // ["manga"]
    ```
    - **Explicação:** O `filter()` cria um novo array contendo apenas os elementos que começam com a letra "m". Neste caso, o único item que atende a essa condição é `"manga"`. O array original não é alterado.

4. **reduce():**
    - O método `reduce()` aplica uma função acumuladora a cada elemento do array, resultando em um único valor de retorno. O primeiro argumento da função é o acumulador (que mantém o valor acumulado), e o segundo é o valor atual do array. Um valor inicial pode ser fornecido ao acumulador.
    - **Exemplo:**
    ```
    let numeros = [1, 2, 3, 4, 5];
    let soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
    console.log(soma); // 15
    ```
    - **Explicação:** O `reduce()` começa com o valor inicial de `0` e soma cada elemento do array. O valor acumulado é atualizado a cada iteração, e o resultado final é a soma de todos os elementos, que é `15`.

---

### **Arrays Bidimensionais**

Arrays bidimensionais são arrays que contêm outros arrays como seus elementos, criando uma estrutura semelhante a uma matriz. Cada elemento do array principal pode ser considerado uma "linha", e os elementos dentro de cada linha podem ser considerados "colunas". Esse tipo de estrutura é frequentemente usado para representar tabelas ou grades.

---

### **Criação de Arrays Bidimensionais**
```
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```
Explicação: 

- Neste exemplo, ```matriz``` é um array contendo três arrays internos, cada um representando uma linha. O primeiro array interno contém os números 1, 2 e 3, o segundo contém 4, 5 e 6, e o terceiro contém 7, 8 e 9. Juntos, esses arrays formam uma matriz 3x3.

---

### **Acessando Elementos**

Para acessar elementos em um array bidimensional, usamos dois índices: o primeiro índice refere-se à linha, e o segundo índice refere-se à coluna.
```
console.log(matriz[1][2]); // 6
```
Explicação: 
- O primeiro índice (```1```) refere-se à segunda linha da matriz (lembre-se que a indexação começa em 0), e o segundo índice (```2```) refere-se ao terceiro elemento da linha. Portanto, ```matriz[1][2]``` retorna o valor ```6```.

---

### **Iteração em Arrays Bidimensionais**

Podemos usar loops aninhados para iterar sobre arrays bidimensionais. O primeiro loop percorre as linhas, e o segundo loop percorre as colunas de cada linha.
```
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
}
```
Explicação:
- O primeiro ```for``` percorre cada linha da matriz, e o segundo ```for``` percorre cada elemento dentro da linha. O valor de cada elemento é impresso no console. Neste caso, o código exibirá todos os números da matriz de 1 a 9.

---

### **Métodos Úteis para Arrays Bidimensionais**

1. **flat()**:

- O método flat() é usado para "achar" arrays aninhados, ou seja, transforma arrays de várias dimensões em um único array.
```
let arrayAchatado = matriz.flat();
console.log(arrayAchatado); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
Explicação: 
- O ```flat()``` pega os elementos de todos os arrays internos e os coloca em um único array. O resultado será um array unidimensional com todos os valores da matriz original.

2. **map() com arrays aninhados**:

O método ```map()``` pode ser usado para aplicar uma função a cada elemento, até mesmo em arrays aninhados. Ele cria um novo array, deixando o original inalterado.
```
let matrizDobrada = matriz.map(linha => linha.map(num => num * 2));
console.log(matrizDobrada);
// [[2, 4, 6], [8, 10, 12], [14, 16, 18]]
```
Explicação:
- O ```map()``` é aplicado duas vezes: uma vez para cada linha e outra para cada número dentro de uma linha. Como resultado, todos os números da matriz são multiplicados por 2.

---

### Arrays Bidimensionais em Aplicações Reais

Arrays bidimensionais são extremamente úteis para representar dados tabulares, como:
- Tabelas de banco de dados
- Grades de jogos
- Matrizes de imagem

Eles são amplamente usados em algoritmos de processamento de dados, manipulação de imagens, e jogos como o "campo minado" ou tabuleiros de xadrez.

---

## 16. Objetos

Objetos em JavaScript são estruturas de dados que permitem armazenar coleções de pares chave-valor. Eles são fundamentais para a programação em JavaScript e são usados para representar entidades do mundo real ou conceitos abstratos. Cada chave (ou propriedade) é associada a um valor, que pode ser de qualquer tipo, incluindo outro objeto ou uma função.

Objetos são amplamente utilizados para modelar entidades mais complexas, como uma pessoa, um carro, ou até mesmo funcionalidades de um sistema. Eles permitem uma organização mais flexível e expressiva dos dados.

---

### **Criação de Objetos**

1. **Usando a notação literal de objeto:**
    - Esta é a maneira mais comum e direta de criar um objeto. A notação literal de objeto usa chaves `{}` para definir as propriedades e valores de um objeto.
    ```
    let pessoa = {
      nome: "João",
      idade: 30,
      profissao: "Desenvolvedor"
    };
    console.log(pessoa.nome); // "João"
    ```
    - **Explicação:** A chave `nome` tem o valor `"João"`, a chave `idade` tem o valor `30`, e a chave `profissao` tem o valor `"Desenvolvedor"`. Esses valores são armazenados dentro do objeto `pessoa`.

2. **Usando o construtor Object():**
    - O construtor `Object()` pode ser usado para criar um objeto vazio e adicionar propriedades a ele posteriormente. Isso é útil quando se deseja criar objetos dinamicamente.
    ```
    let carro = new Object();
    carro.marca = "Toyota";
    carro.modelo = "Corolla";
    carro.ano = 2022;
    console.log(carro.marca); // "Toyota"
    ```
    - **Explicação:** Aqui, o objeto `carro` foi criado usando o construtor `new Object()`. As propriedades foram adicionadas ao objeto posteriormente com a notação de ponto (`carro.marca = "Toyota"`). O valor de cada chave é acessado através da notação de ponto ou colchetes.

---

### **Acessando Propriedades**

Existem duas maneiras principais de acessar as propriedades de um objeto: usando a notação de ponto ou a notação de colchetes.

1. **Notação de ponto:**
    - A notação de ponto é a maneira mais simples e direta de acessar uma propriedade de um objeto. Basta usar o nome do objeto seguido de um ponto e o nome da propriedade.
    ```
    console.log(pessoa.nome); // "João"
    ```
    - **Explicação:** Neste exemplo, a propriedade `nome` do objeto `pessoa` é acessada diretamente usando a notação de ponto. Isso retorna o valor associado à chave `nome`, que é `"João"`.

2. **Notação de colchetes:**
    - A notação de colchetes é útil quando o nome da propriedade é dinâmico ou quando a chave contém caracteres especiais ou espaços. A propriedade é especificada dentro de colchetes e como uma string.
    ```
    console.log(pessoa["idade"]); // 30
    ```
    - **Explicação:** A notação de colchetes é usada para acessar a propriedade `idade` do objeto `pessoa`. Isso retorna o valor associado à chave `idade`, que é `30`. A notação de colchetes também pode ser usada quando a chave é uma variável ou quando o nome da chave tem caracteres especiais.
    ```
    let chave = "profissao";
    console.log(pessoa[chave]); // "Desenvolvedor"
    ```

---

### **Manipulando Objetos**

- **Adicionando ou Modificando Propriedades:**
    - Você pode adicionar novas propriedades a um objeto ou modificar o valor de uma propriedade existente usando a notação de ponto ou colchetes.
    ```
    pessoa.idade = 31; // Modifica a propriedade idade
    pessoa.email = "joao@example.com"; // Adiciona uma nova propriedade
    console.log(pessoa.idade); // 31
    console.log(pessoa.email); // "joao@example.com"
    ```

- **Deletando Propriedades:**
    - A palavra-chave `delete` pode ser usada para remover uma propriedade de um objeto.
    ```
    delete pessoa.email;
    console.log(pessoa.email); // undefined
    ```

---

### **Objetos e Funções (Métodos)**

Objetos também podem conter funções, chamadas de **métodos**. Esses métodos podem acessar e manipular as propriedades do objeto.

1. **Criando um método em um objeto:**
    ```
    let pessoa = {
      nome: "João",
      idade: 30,
      saudacao: function() {
        console.log("Olá, meu nome é " + this.nome);
      }
    };
    pessoa.saudacao(); // "Olá, meu nome é João"
    ```
    - **Explicação:** O objeto `pessoa` tem um método chamado `saudacao`, que acessa a propriedade `nome` do próprio objeto usando a palavra-chave `this`. O método imprime uma saudação no console.

---

### **Objetos Aninhados**

Objetos podem conter outros objetos como propriedades, criando uma estrutura mais complexa. Isso permite representar dados hierárquicos ou mais detalhados.

```
let pessoa = {
  nome: "João",
  endereco: {
    rua: "Rua A",
    numero: 123
  }
};
console.log(pessoa.endereco.rua); // "Rua A"
```
 - **Explicação:** No exemplo acima, a propriedade ```endereco``` é um objeto que contém as propriedades ```rua``` e ```numero```. O acesso a essas propriedades é feito encadeando os acessos com a notação de ponto: ```pessoa.endereco.rua```.

---

### **Métodos de Objetos**

Métodos são funções que pertencem a um objeto e podem ser usados para realizar operações ou manipular dados associados a esse objeto. Eles são definidos dentro do objeto como uma propriedade cujo valor é uma função. Em vez de apenas armazenar dados, os métodos permitem que os objetos realizem tarefas ou cálculos com esses dados.

Exemplo de um objeto com método:
```
let pessoa = {
  nome: "Maria",
  saudacao: function() {
    console.log("Olá, eu sou " + this.nome);
  }
};

pessoa.saudacao(); // "Olá, eu sou Maria"
```
**Explicação**: O objeto ```pessoa``` tem uma propriedade chamada ```saudacao```, que é um método (uma função). Dentro da função, a palavra-chave ```this``` faz referência ao objeto atual, ou seja, ```this.nome``` acessa o valor da propriedade ```nome``` do objeto ```pessoa```. Quando chamamos ```pessoa.saudacao()```, ele imprime "Olá, eu sou Maria" no console.

---

### **Propriedades e Métodos Dinâmicos**

Em JavaScript, você pode adicionar ou remover propriedades e métodos dinamicamente de um objeto. Isso permite modificar objetos em tempo de execução, de acordo com a necessidade.

1. **Adicionando propriedades**: Você pode adicionar uma nova propriedade a um objeto a qualquer momento.
```
pessoa.email = "maria@email.com";
console.log(pessoa.email); // "maria@email.com"
```
2. **Deletando propriedades**: Para remover uma propriedade de um objeto, utilizamos a palavra-chave ```delete```.
```
delete pessoa.idade;
console.log(pessoa.idade); // undefined
```
Explicação:
- No exemplo acima, adicionamos dinamicamente a propriedade ```email``` ao objeto ```pessoa``` e, em seguida, removemos a propriedade ```idade``` utilizando o operador ```delete```.

---

### Object.keys(), Object.values(), Object.entries()

Esses três métodos são bastante úteis quando você precisa iterar sobre as propriedades de um objeto ou quando precisa acessar suas chaves e valores de uma forma estruturada.

1. ```Object.keys()```: Este método retorna um array contendo todas as chaves (propriedades) de um objeto.
```
console.log(Object.keys(pessoa)); 
// ["nome", "saudacao", "email"]
```
Explicação:
- O método `Object.keys(pessoa)` retorna um array com os nomes de todas as propriedades do objeto `pessoa`. Neste caso, o resultado é `["nome", "saudacao", "email"]`.

2. ```Object.values()```: Este método retorna um array contendo todos os valores das propriedades de um objeto.
```
console.log(Object.values(pessoa)); 
// ["Maria", [Function: saudacao], "maria@email.com"]
```
Explicação:
- O método `Object.values(pessoa)` retorna um array com os valores associados a cada chave do objeto `pessoa`. Neste caso, os valores são `"Maria"`, a função do método `saudacao`, e `"maria@email.com"`.

3. ```Object.entries()```: Este método retorna um array de arrays, onde cada sub-array contém dois elementos: o nome da chave e seu valor.
```
console.log(Object.entries(pessoa)); 
// [["nome", "Maria"], ["saudacao", [Function: saudacao]], ["email", "maria@email.com"]]
```
Explicação:
- O método ```Object.entries(pessoa)``` retorna um array de pares chave-valor. Cada par é representado como um sub-array, onde o primeiro elemento é a chave e o segundo é o valor correspondente.

Esses métodos são úteis, por exemplo, quando você precisa iterar sobre as propriedades de um objeto, ou quando deseja transformar um objeto em um formato mais fácil de manipular, como arrays. A combinação desses métodos com loops, como forEach ou map, pode tornar o trabalho com objetos mais flexível e eficiente.

---

## 17. Funções

Funções são blocos de código reutilizáveis que realizam uma tarefa específica ou calculam um valor. Elas são essenciais para organizar, modularizar e tornar o código mais legível e reutilizável. Ao aprender como definir, chamar e manipular funções, você ganha flexibilidade no desenvolvimento de soluções em JavaScript.

---

### **Declaração de Funções**

As funções em JavaScript podem ser definidas de várias maneiras:

1. **Declaração de função:**
   A declaração de função é a forma tradicional de definir uma função. Quando você usa a palavra-chave `function`, está criando uma função nomeada, que pode ser chamada por seu nome em qualquer lugar do código após sua declaração.
   Caracteristicas:
   - São **hoisted** (elevadas), ou seja, você pode chamar a função antes de sua declaração no código.
   - Não há limitações quanto ao número de parâmetros que a função pode ter.
   
   ```
   function saudacao(nome) {
     console.log("Olá, " + nome + "!");
   }
    ```
2. **Expressão de função:**
    Em uma expressão de função, você cria uma função anônima (sem nome) e a atribui a uma variável. Essas funções podem ser passadas como argumentos ou retornadas por outras funções.
   Caracteristicas:
   - Não podem ser chamadas antes de sua definição no código.
   - São comumente usadas em callbacks ou em funções que são passadas como argumentos.
   ```
    let saudacao = function(nome) {
      console.log("Olá, " + nome + "!");
    };
   ```
3. **Arrow function (ES6+):**
   As arrow functions são uma forma mais compacta e moderna de escrever funções, introduzida no ES6. Elas são especialmente úteis para funções curtas e quando você precisa de uma sintaxe mais concisa. Uma das principais vantagens das arrow functions é que elas mantêm o valor de `this` do contexto em que foram definidas, o que pode evitar certos problemas com o escopo.
   Caracteristicas:
   - Sintaxe mais curta: As arrow functions têm uma forma mais compacta, sem a necessidade da palavra-chave `function`.
   - Não possuem `this` próprio: Elas herdam o valor de `this` do contexto em que foram criadas, o que as torna mais seguras quando se trata de manipulação de this dentro de funções anônimas.
   - Imutabilidade do `this`: Isso é especialmente útil em situações como em callbacks dentro de objetos ou métodos.
```
let saudacao = (nome) => {
  console.log("Olá, " + nome + "!");
};
saudacao("Auyber");  // Olá, Auyber!
```
A sintaxe da arrow function elimina a palavra-chave `function` e o uso das chaves (`{}`) pode ser omitido quando a função tem apenas uma linha de código:
```
let saudacao = nome => console.log("Olá, " + nome + "!");
saudacao("Auyber");  // Olá, Auyber!
```

**Por que `this` é importante nas arrow functions?**
- Uma das principais vantagens das arrow functions é que elas não têm seu próprio valor de `this`. Em vez disso, elas herdam o valor de `this` do contexto em que foram criadas.
- Isso resolve o problema comum de que o valor de `this` pode ser alterado em funções anônimas dentro de objetos, especialmente quando você trabalha com métodos de objetos ou dentro de eventos.
Exemplo com `this`:
```
const obj = {
  nome: "Auyber",
  saudacao: function() {
    setTimeout(function() {
      console.log("Olá, " + this.nome);  // Aqui 'this' refere-se ao contexto global ou undefined em modo estrito.
    }, 1000);
  }
};

obj.saudacao();  // Olá, undefined
```
Usando a arrow function o problema de escopo é resolvido
```
const obj = {
  nome: "Auyber",
  saudacao: function() {
    setTimeout(() => {
      console.log("Olá, " + this.nome);  // 'this' refere-se ao obj.
    }, 1000);
  }
};

obj.saudacao();  // Olá, Auyber
```
Nesse exemplo, a arrow function mantém o valor de `this` do objeto `obj`, enquanto a função tradicional de `setTimeout `mudaria o valor de `this` para o escopo global (ou `undefined` no modo estrito).

---

### ***Chamando Funções***

Após a definição de uma função, você pode chamá-la em qualquer ponto do código. Para chamar a função, basta usar o nome dela seguido de parênteses, passando os parâmetros necessários.
```
saudacao("Alice"); // "Olá, Alice!"
```
Explicação: 
- A função ```saudaca```o é chamada com o argumento ```"Alice"```, que substitui o parâmetro ```nome``` na definição da função.

---

### Parâmetros de uma função

Parâmetros são variáveis que você define ao criar uma função. Elas representam valores que são passados para a função quando ela é chamada. Esses parâmetros são usados para personalizar o comportamento da função com base nos valores fornecidos.

**Parâmetros Básicos**
```
function soma(a, b) {
  return a + b;
}

console.log(soma(5, 3)); // 8
```
Explicação: 
- A função ```soma``` recebe dois parâmetros ```a``` e ```b``` e retorna a soma deles. Ao chamá-la com os valores 5 e 3, ela retorna 8.

---

** Parâmetros Padrão (ES6+)**

Parâmetros padrão são valores que você pode fornecer para uma função no caso de o argumento não ser passado na chamada. Isso permite definir valores predefinidos sem precisar fazer verificações dentro da função.
```
function saudacao(nome = "Visitante") {
  console.log("Olá, " + nome + "!");
}

saudacao(); // "Olá, Visitante!"
saudacao("Alice"); // "Olá, Alice!"
```
Explicação: 
- A função ```saudacao``` tem o parâmetro ```nome``` com um valor padrão de ```"Visitante"```. Se nenhum valor for passado, ela usará esse valor. Caso contrário, usará o valor fornecido.

---

**Rest Parameters (ES6+)**

O operador rest (...) permite que uma função aceite um número indefinido de argumentos como um array. Isso é útil quando você não sabe quantos argumentos serão passados para a função.
```
function soma(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(soma(1, 2, 3, 4)); // 10
```
Explicação: 
- A função ```soma``` usa o operador rest para agrupar todos os argumentos passados em um array chamado ```numeros```. O método ```reduce``` é então usado para somar todos os valores desse array.

---

**Desestruturação de Parâmetros (ES6+)**

A desestruturação permite extrair valores de objetos ou arrays e usá-los como parâmetros diretamente na função. Isso facilita o acesso a dados em objetos complexos.
```
function imprimirPessoa({nome, idade}) {
  console.log(`${nome} tem ${idade} anos.`);
}

imprimirPessoa({nome: "Carlos", idade: 25}); // "Carlos tem 25 anos."
```
Explicação: 
- A função ```imprimirPessoa``` usa a desestruturação para pegar diretamente as propriedades ```nome``` e ```idade``` do objeto passado como argumento, sem a necessidade de acessar ```pessoa.nome``` ou ```pessoa.idade```.

---

### **Retorno de uma função**

O retorno de uma função é o valor que ela fornece quando é chamada. O ```return``` é usado para indicar o valor que a função devolve, permitindo que esse valor seja usado fora da função.

**Retorno Básico**
```
function quadrado(numero) {
  return numero * numero;
}

console.log(quadrado(4)); // 16
```
Explicação: 
- A função ```quadrado``` recebe um número e retorna o valor desse número elevado ao quadrado. No exemplo, ```4``` é passado e a função retorna ```16```.

---

**Retorno Implícito em Arrow Functions**

Arrow functions podem retornar um valor diretamente sem usar a palavra-chave ```return``` se o corpo da função for uma única expressão.
```
const cubo = x => x * x * x;

console.log(cubo(3)); // 27
```
Explicação: 
- A função ```cubo``` retorna diretamente o valor de x elevado ao cubo, sem a necessidade de usar a palavra-chave ```return```.

---

**Retornando Múltiplos Valores**

Em JavaScript, você pode retornar múltiplos valores usando um objeto ou um array. Isso é útil quando você precisa retornar informações relacionadas em um único valor.
```
function calcularArea(largura, altura) {
  let area = largura * altura;
  let perimetro = 2 * (largura + altura);
  return { area, perimetro };
}

let resultado = calcularArea(5, 3);
console.log(resultado.area); // 15
console.log(resultado.perimetro); // 16
```
Explicação: 
- A função ```calcularArea``` retorna um objeto contendo a área e o perímetro de um retângulo. Os valores podem ser acessados pelo nome das propriedades ```area``` e ```perimetro```.

---

**Retorno Antecipado**

Às vezes, você pode querer sair de uma função antes que ela termine sua execução. Isso pode ser feito com o comando ```return```. Isso é útil para evitar execuções desnecessárias ou retornar rapidamente em caso de erro.
```
function verificarIdade(idade) {
  if (idade < 0) {
    return "Idade inválida";
  }
  if (idade >= 18) {
    return "Maior de idade";
  }
  return "Menor de idade";
}

console.log(verificarIdade(20)); // "Maior de idade"
console.log(verificarIdade(-5)); // "Idade inválida"
```
Explicação: 
- A função ```verificarIdade``` verifica a idade e retorna imediatamente quando a idade for inválida ou se a pessoa for maior de idade, sem precisar passar pelas outras verificações.

---

Funções são um conceito fundamental em JavaScript. Elas permitem organizar e reutilizar código, tornando-o modular e mais fácil de entender. A compreensão dos diferentes tipos de funções, como funções tradicionais, expressões de funções, arrow functions e os conceitos de parâmetros e retornos, é essencial para escrever código eficiente e bem estruturado. Ao trabalhar com funções, você cria blocos de código independentes que podem ser chamados sempre que necessário, tornando a programação mais poderosa e flexível.
   
---

## 18. Escopo

Escopo em JavaScript refere-se à visibilidade e acessibilidade de variáveis, funções e objetos em diferentes partes do código. Compreender o escopo é crucial para evitar bugs e escrever código mais eficiente.

---

### **Tipos de Escopo**

1. **Escopo Global**
    - Variáveis declaradas fora de qualquer função ou bloco têm escopo global.
    - Podem ser acessadas de qualquer lugar no código.
    - Quando uma variável é declarada no escopo global, ela pode ser acessada por qualquer função ou bloco dentro do mesmo contexto.

    ```
    var globalVar = "Eu sou global";

    function teste() {
      console.log(globalVar); // Acessível
    }

    teste(); // "Eu sou global"
    ```

2. **Escopo de Função**
    - Variáveis declaradas dentro de uma função só são acessíveis dentro dessa função.
    - O escopo de função cria um "ambiente isolado", o que significa que variáveis definidas dentro de uma função não são acessíveis fora dela.
    
    ```
    function minhaFuncao() {
      var funcaoVar = "Eu sou local à função";
      console.log(funcaoVar); // Acessível
    }

    minhaFuncao(); // "Eu sou local à função"
    console.log(funcaoVar); // Erro: funcaoVar is not defined
    ```

3. **Escopo de Bloco (introduzido com let e const no ES6)**
    - Variáveis declaradas com **let** e **const** têm escopo de bloco.
    - Um bloco é definido por chaves `{}` e pode ser um loop, uma estrutura condicional, ou qualquer outro conjunto de instruções delimitado por chaves.
    - As variáveis declaradas com `let` ou `const` não são acessíveis fora do bloco onde foram declaradas, o que ajuda a evitar o vazamento de variáveis para fora de estruturas de controle, evitando possíveis erros.

    ```
    if (true) {
      let blocoVar = "Eu sou local ao bloco";
      console.log(blocoVar); // Acessível
    }

    console.log(blocoVar); // Erro: blocoVar is not defined
    ```
---

### **Cadeia de Escopos (Scope Chain)**

- A cadeia de escopos é a maneira como JavaScript procura variáveis. Quando uma variável é acessada, o JavaScript começa a busca no escopo mais interno e vai subindo para os escopos mais externos até encontrar a variável ou até chegar ao escopo global.
- A cadeia de escopos é essencial para entender o comportamento das variáveis em funções aninhadas.

    ```
    var externa = "Eu sou externa";

    function externa() {
      var interna = "Eu sou interna";
      
      function interna() {
        console.log(externa); // Acessível
        console.log(interna); // Acessível
      }
      
      interna();
    }

    externa();
    ```

- No exemplo acima, a variável `externa` é acessada dentro da função interna, porque ela pertence ao escopo mais externo, e a função `interna` pode acessar a variável do escopo que a contém.

### **Hoisting**

- **Hoisting** (ou içamento) é um comportamento do JavaScript onde declarações de variáveis e funções são movidas para o topo de seu escopo durante a execução do código.
- Isso significa que você pode usar variáveis e funções antes de elas serem declaradas, mas somente para funções e variáveis declaradas com `var` (não com `let` ou `const`).

    ```
    console.log(x); // undefined (não dá erro)
    var x = 5;
    ```

    **Como o código é interpretado:**

    ```
    var x;
    console.log(x); // undefined
    x = 5;
    ```

- No exemplo acima, a declaração `var x;` é "elevada" ao topo do código, mas a inicialização `x = 5;` ocorre no ponto em que ela aparece no código. Por isso, o valor de `x` é `undefined` quando acessado antes da inicialização.

- **Hoisting de Funções**:
    - O hoisting também se aplica a funções. Funções declaradas com a palavra-chave `function` são totalmente "içadas", ou seja, podem ser chamadas antes de sua declaração no código.

    ```
    minhaFuncao(); // "Função hoisted"

    function minhaFuncao() {
      console.log("Função hoisted");
    }
    ```

- **Hoisting de `let` e `const`**:
    - `let` e `const` não são "içadas" da mesma forma que `var`. Elas entram em uma "zona morta" (temporal dead zone, ou TDZ) no topo do escopo, o que significa que você não pode acessá-las antes da linha de declaração.

    ```
    console.log(a); // Erro: Cannot access 'a' before initialization
    let a = 5;
    ```
---

Compreender como o escopo funciona em JavaScript é essencial para evitar erros comuns e garantir que o código seja claro e eficiente. A compreensão dos tipos de escopo, como a cadeia de escopos e o hoisting, permitirá que você escreva código mais robusto e organizado.


---

## 19. Métodos

Métodos são funções que são propriedades de um objeto. Eles definem o comportamento do objeto, permitindo que o objeto realize ações ou retorne valores. Em JavaScript, os métodos são usados para manipular e interagir com os dados dentro de objetos.

---

### **Definindo Métodos**

1. **Na declaração do objeto:**
    - Um método pode ser definido diretamente dentro de um objeto usando a palavra-chave `function` seguida da definição da função.
    
    ```
    let pessoa = {
      nome: "Alice",
      saudacao: function() {
        console.log("Olá, eu sou " + this.nome);
      }
    };

    pessoa.saudacao(); // "Olá, eu sou Alice"
    ```

    - Neste exemplo, o método `saudacao` pertence ao objeto `pessoa`. Quando `pessoa.saudacao()` é chamado, a função imprime o valor da propriedade `nome` do objeto `pessoa`.

2. **Usando a sintaxe de método abreviada (ES6+):**
    - A partir do ES6, é possível usar uma sintaxe mais curta para definir métodos em objetos. Não é necessário usar a palavra-chave `function`; basta definir o nome do método e a função diretamente.
    
    ```
    let pessoa = {
      nome: "Bob",
      saudacao() {
        console.log("Olá, eu sou " + this.nome);
      }
    };
    ```

    - A sintaxe abreviada torna o código mais conciso e legível.

3. **Adicionando métodos a um objeto existente:**
    - É possível adicionar novos métodos a um objeto depois de sua criação. Isso é útil quando você deseja estender as funcionalidades de um objeto dinamicamente.
    
    ```
    pessoa.despedida = function() {
      console.log("Tchau!");
    };
    ```

    - Neste exemplo, o método `despedida` é adicionado ao objeto `pessoa` depois que ele já foi definido. Agora, podemos chamar `pessoa.despedida()` para imprimir "Tchau!".

---

### **O 'this' em Métodos**

A palavra-chave `this` refere-se ao objeto que está chamando o método. O `this` é uma maneira de acessar as propriedades e outros métodos do objeto dentro do próprio método.

- Em um método, `this` é o próprio objeto que contém a função. No exemplo abaixo, `this` dentro do método `descricao` se refere ao objeto `carro`.

    ```
    let carro = {
      marca: "Toyota",
      modelo: "Corolla",
      descricao() {
        console.log(`Este carro é um ${this.marca} ${this.modelo}`);
      }
    };

    carro.descricao(); // "Este carro é um Toyota Corolla"
    ```

    - Quando chamamos `carro.descricao()`, o método imprime a marca e o modelo do carro, usando `this.marca` e `this.modelo` para acessar as propriedades do objeto `carro`.

---

### **Métodos em Objetos Aninhados**

Métodos também podem ser definidos dentro de objetos aninhados, e o comportamento de `this` se aplica de forma semelhante.

```
let empresa = {
  nome: "Tech Solutions",
  endereco: {
    rua: "Rua Principal",
    numero: 123,
    mostrarEndereco() {
      console.log(`A empresa está localizada na ${this.rua}, ${this.numero}`);
    }
  }
};

empresa.endereco.mostrarEndereco(); // "A empresa está localizada na Rua Principal, 123"
```
- No exemplo acima, ```this.rua``` e ```this.numero``` referem-se ao objeto ```endereco``` dentro do objeto ```empresa```.

---

### **Métodos que Retornam Valores**

Além de executar ações, métodos também podem retornar valores. Isso é útil quando você precisa manipular ou calcular dados dentro de um objeto e fornecer esses valores para outras partes do seu código.
```
let contaBancaria = {
  saldo: 1000,
  deposito(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$${valor} realizado.`);
  },
  consultarSaldo() {
    return `O saldo atual é R$${this.saldo}`;
  }
};

contaBancaria.deposito(500); // "Depósito de R$500 realizado."
console.log(contaBancaria.consultarSaldo()); // "O saldo atual é R$1500"
```
- O método ```deposito``` altera o valor de ```saldo```, e o método ```consultarSaldo``` retorna o saldo atualizado.

---

### **Métodos de Objetos em Arrays**

Métodos também podem ser usados em arrays, permitindo que você modifique ou acesse os elementos do array de maneira eficiente.
```
let numeros = [1, 2, 3, 4, 5];

let soma = numeros.reduce(function(acumulado, atual) {
  return acumulado + atual;
}, 0);

console.log(soma); // 15
```
- O método ```reduce()``` é um exemplo de método de array que executa uma função em cada elemento do array, acumulando um valor final. Neste caso, ele soma todos os números do array.

---


## 20. Funções Recursivas

Funções recursivas são funções que chamam a si mesmas para resolver problemas. Elas são úteis em casos onde um problema pode ser dividido em subproblemas menores e mais simples, que são semelhantes ao problema original. A recursão pode simplificar o código, tornando-o mais conciso e fácil de entender.

---

### **Estrutura Básica**

Uma função recursiva é estruturada da seguinte forma:

```
function funcaoRecursiva(parametro) {
  if (condicaoDeParada) {
    return valorFinal;
  }
  return funcaoRecursiva(novoParametro);
}
```
- Condição de parada: A condição de parada é crucial para evitar que a função continue chamando a si mesma indefinidamente, resultando em um loop infinito. Essa condição garante que a função pare de se chamar quando o problema for resolvido.
- Chamada recursiva: Caso a condição de parada não seja satisfeita, a função chama a si mesma com um novo parâmetro, aproximando-se da solução.

---

### Exemplo: Fatorial

Um exemplo clássico de recursão é o cálculo do fatorial de um número.
```
function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fatorial(n - 1);
}

console.log(fatorial(5)); // 120
```
- Neste exemplo, a função ```fatorial``` calcula o fatorial de um número ```n```. A condição de parada é quando ```n``` é igual a 0 ou 1, pois o fatorial de 0 ou 1 é 1. Caso contrário, a função chama a si mesma com ```n - 1``` até que a condição de parada seja atingida.

---

### Considerações Importantes

1. Defina uma condição de parada clara: A condição de parada é fundamental para que a recursão tenha um ponto de término. Sem ela, a função continuará chamando a si mesma infinitamente, causando um erro de stack overflow (estouro da pilha de chamadas). Sempre certifique-se de que, em algum momento, a função atenderá à condição de parada.

2. Recursão vs. Iteração: A recursão pode ser mais elegante e compacta para problemas simples, mas pode ser menos eficiente para grandes volumes de dados, já que a pilha de chamadas pode crescer rapidamente. Soluções iterativas (com loops) podem ser mais eficientes em termos de uso de memória para esses casos.

3. Risco de Estouro de Pilha: Quando uma função recursiva faz muitas chamadas, ela empilha as funções na memória. Se as chamadas forem muito profundas, pode ocorrer um stack overflow, onde a pilha de chamadas excede a capacidade de memória. Para evitar isso, é importante usar recursão com cautela, especialmente em problemas com uma grande quantidade de iterações.

**Exemplo de Estouro de Pilha**:
```
function recursaoProfunda(n) {
  if (n <= 0) {
    return;
  }
  recursaoProfunda(n - 1); // A função chamando a si mesma muitas vezes
}

recursaoProfunda(100000); // Pode resultar em "Maximum call stack size exceeded"
```
4. **Memoização e Recursão**: Para melhorar a performance de funções recursivas, especialmente em problemas com subproblemas que se repetem (como na sequência de Fibonacci), é possível usar memoização. Isso envolve armazenar os resultados de chamadas recursivas anteriores para evitar recomputações.

**Exemplo de Fibonacci com Memoização**:
```
let memo = {};

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (memo[n]) return memo[n]; // Retorna o valor armazenado se já calculado
  
  memo[n] = fibonacci(n - 1) + fibonacci(n - 2); // Armazena o resultado
  return memo[n];
}

console.log(fibonacci(10)); // 55
```
- A memoização ajuda a evitar que a função refaça o mesmo cálculo repetidamente, tornando o processo mais eficiente.

---

### Exemplos de Problemas Comuns Resolvidos com Recursão

1. **Fibonacci**: A sequência de Fibonacci é um exemplo clássico de problema recursivo, onde cada número é a soma dos dois números anteriores. A versão recursiva simples não é eficiente, mas a memoização melhora muito a performance.
```
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```
2. **Busca Binária**: A busca binária em um array ordenado pode ser implementada recursivamente. A cada chamada recursiva, a busca é reduzida pela metade até encontrar o valor ou determinar que ele não existe.
```
function buscaBinaria(arr, alvo, inicio = 0, fim = arr.length - 1) {
  if (inicio > fim) return -1; // Condição de parada: não encontrado
  let meio = Math.floor((inicio + fim) / 2);
  
  if (arr[meio] === alvo) {
    return meio;
  } else if (arr[meio] < alvo) {
    return buscaBinaria(arr, alvo, meio + 1, fim);
  } else {
    return buscaBinaria(arr, alvo, inicio, meio - 1);
  }
}
```
3. **Percorrendo Estruturas de Dados Hierárquicas**: Estruturas de dados como árvores e gráficos podem ser percorridas de maneira recursiva. Por exemplo, uma árvore binária pode ser percorrida em profundidade (DFS) com recursão.
```
function percorrerArvore(no) {
  if (no === null) return;
  console.log(no.valor);
  percorrerArvore(no.esquerda);
  percorrerArvore(no.direita);
}
```
---

Funções recursivas são uma ferramenta poderosa em programação, especialmente para resolver problemas que podem ser divididos em subproblemas menores. Porém, é importante garantir uma condição de parada, considerar a eficiência de soluções recursivas versus iterativas e estar ciente dos riscos de estouro de pilha. Com o uso adequado, a recursão pode simplificar a resolução de muitos problemas complexos.

---

## 21. Funções Anônimas

Funções anônimas são funções sem nome. Elas são frequentemente usadas como argumentos para outras funções, atribuídas a variáveis ou utilizadas em expressões de maneira temporária. A principal vantagem das funções anônimas é sua flexibilidade, permitindo que sejam usadas diretamente no lugar onde são necessárias, sem a necessidade de uma declaração formal.

---

### **Sintaxe Básica**

Uma função anônima pode ser atribuída a uma variável ou passada como argumento diretamente. Aqui está um exemplo simples de como isso funciona:

```
let saudacao = function(nome) {
  console.log("Olá, " + nome);
};

saudacao("Carlos"); // "Olá, Carlos"
```
- Neste exemplo, a função não tem nome e é atribuída à variável ```saudacao```. Em seguida, a função é chamada passando um argumento.

---

### **Uso como Callback**

As funções anônimas são frequentemente usadas como callbacks. Um callback é uma função passada como argumento para outra função, que a invoca em algum ponto de sua execução. Veja um exemplo utilizando a função ```setTimeout``` para aguardar dois segundos antes de executar o código:
```
setTimeout(function() {
  console.log("Isso será impresso após 2 segundos");
}, 2000);
```
- Aqui, a função anônima é executada após o atraso de 2000 milissegundos (2 segundos).

---

### **Arrow Functions (ES6+)**

Com o ECMAScript 6 (ES6), surgiram as arrow functions, que são uma forma mais concisa e expressiva de escrever funções anônimas. Além disso, as arrow functions mantêm o contexto do ```this```, o que pode ser útil em algumas situações.
**Sintaxe**
```
let dobrar = (x) => x * 2;

console.log(dobrar(4)); // 8
```
- Neste exemplo, a função ```dobrar``` é uma arrow function que recebe um parâmetro ```x``` e retorna ```x * 2```. É importante notar que, ao utilizar arrow functions, a sintaxe fica mais compacta, e a palavra-chave ```function``` não é necessária.

**Sintaxe com mais de um parâmetro**

Quando há mais de um parâmetro, os parênteses são necessários:
```
let soma = (a, b) => a + b;
console.log(soma(2, 3)); // 5
```

**Sintaxe sem parâmetros**

Se a função não receber parâmetros, pode-se usar parênteses vazios:
```
let saudacao = () => console.log("Olá, mundo!");
saudacao(); // "Olá, mundo!"
```

---

### **IIFE (Immediately Invoked Function Expression)**

Uma IIFE é uma função anônima que é definida e executada imediatamente. Ela é frequentemente usada para criar um escopo local, evitando que as variáveis internas vazem para o escopo global.
```
(function() {
  let privada = "Não posso ser acessada fora";
  console.log(privada);
})();
```
- Nesse caso, a função é definida e invocada na mesma linha, criando um escopo temporário para a variável ```privada```, que não pode ser acessada fora da função.

---

### Vantagens e Utilizações Comuns

As funções anônimas são particularmente úteis em diversas situações, como:

- Encapsulamento: Ao usar funções anônimas dentro de outras funções, podemos criar variáveis temporárias ou locais que não afetem o escopo global.
- Callbacks: Como vimos no exemplo com setTimeout, as funções anônimas são comumente usadas para passar funções como parâmetros para outras funções.
- Modularização: Em aplicações mais complexas, funções anônimas podem ser usadas para dividir lógicas de execução, mantendo o código mais organizado e modular.

Em resumo, funções anônimas oferecem uma maneira flexível de trabalhar com funções temporárias, encapsulando dados e comportamentos sem a necessidade de criar nomes ou declarações explícitas para cada uma delas.

---

## 22. High-order Functions

High-order functions (HOFs) são funções que podem receber outras funções como argumentos e/ou retornar funções como resultados. Elas são fundamentais em JavaScript e permitem criar código mais flexível e dinâmico.

---

### Características principais:

- **Funções de primeira classe**: Em JavaScript, funções podem ser passadas como argumentos para outras funções, ou podem ser retornadas de outras funções.
- **Modularidade e reutilização**: Ao tratar funções como objetos de primeira classe, HOFs permitem criar código mais modular e reutilizável.
- **Uso em programação funcional**: HOFs são amplamente utilizadas em programação funcional, onde se favorece a aplicação de funções em vez de manipulação de estado ou dados mutáveis.

### Exemplos de uso de High-order Functions:

1. Funções que recebem callbacks:
```
function executarFuncao(funcao) {
  funcao();
}

executarFuncao(() => {
  console.log('Função passada como argumento!');
});
```
- Neste exemplo, a função ```executarFuncao``` recebe uma função como argumento (um callback) e a executa dentro do seu corpo. O callback é uma função anônima que apenas imprime uma mensagem no console.

2. Funções que retornam funções:
```
function criarMultiplicador(multiplicador) {
  return function(numero) {
    return numero * multiplicador;
  };
}

const dobrar = criarMultiplicador(2);
console.log(dobrar(5)); // 10
```
- Aqui, ```criarMultiplicador``` é uma função que retorna outra função. Essa função interna recebe um número e o multiplica pelo valor de ```multiplicador```, que foi definido quando a função foi criada. O exemplo cria um "dobrador" e usa para multiplicar 5 por 2.

---

### **High-order Functions e Arrays**

JavaScript oferece várias HOFs nativas para trabalhar com arrays, tornando a manipulação de dados mais eficiente e legível:

1. ```forEach()```: Executa uma função para cada elemento do array
```
[1, 2, 3].forEach(num => console.log(num));
```
- ```forEach()``` percorre todos os elementos de um array e executa a função fornecida em cada um deles. Embora não retorne nada, é útil para operações como efeitos colaterais (ex: imprimir algo no console).

2. ```map()```: Cria um novo array com os resultados da função aplicada a cada elemento
```
const dobrados = [1, 2, 3].map(num => num * 2);
console.log(dobrados); // [2, 4, 6]
```
- ```map()``` transforma cada elemento do array aplicando uma função a ele e retorna um novo array com os resultados. A função fornecida deve retornar um valor para cada item, gerando assim um novo array.

3. ```filter()```: Cria um novo array com todos os elementos que passam no teste da função
```
const pares = [1, 2, 3, 4].filter(num => num % 2 === 0);
console.log(pares); // [2, 4]
```
- ```filter()``` cria um novo array com os elementos que atendem a uma condição específica definida pela função fornecida. Neste exemplo, ele retorna os números pares do array original.

4. ```reduce()```: Reduz o array a um único valor, aplicando uma função acumuladora
```
const soma = [1, 2, 3].reduce((acc, num) => acc + num, 0);
console.log(soma); // 6
```
- ``` reduce()``` aplica uma função acumuladora a cada item do array, retornando um único valor. No exemplo, ele soma todos os números do array.

5. ```some()```: Verifica se pelo menos um elemento satisfaz a condição
```
const temPar = [1, 2, 3].some(num => num % 2 === 0);
console.log(temPar); // true
```
- ```some()``` verifica se ao menos um elemento do array atende à condição fornecida. Neste caso, ele retorna ```true``` porque o número 2 é par.

6. ```every()```: Verifica se todos os elementos satisfazem a condição
```
const todosPares = [2, 4, 6].every(num => num % 2 === 0);
console.log(todosPares); // true
```
- ```every()``` verifica se todos os elementos do array atendem à condição fornecida. Neste caso, ele retorna ```true``` porque todos os números no array são pares.

---

As High-order Functions são poderosas e fazem parte do núcleo da programação em JavaScript, ajudando a criar código mais eficiente, modular e reutilizável. Com o uso de funções como ```map()```, ```filter()```, ```reduce()```, entre outras, é possível realizar uma vasta gama de manipulações de dados de maneira mais declarativa e legível.

---

## 23. Objetos Globais

O objeto global em JavaScript é um objeto especial que serve como contêiner para variáveis e funções globalmente acessíveis. Ele é fundamental para o ambiente de execução JavaScript e possui algumas características importantes:

---

### Características principais:

- **Criação automática**: O objeto global é criado automaticamente pelo ambiente JavaScript quando o código é executado.
- **Propriedades e métodos nativos**: Ele contém diversas propriedades e métodos que são usados frequentemente, como `parseInt()`, `Math`, `JSON`, entre outros.
- **Varia conforme o ambiente de execução**: O objeto global pode variar dependendo de onde o código JavaScript está sendo executado.

---

### Exemplos de ambientes e seus objetos globais:

- **Navegador**: No ambiente de navegador, o objeto global é o **`window`**. Ele é responsável por fornecer acesso a várias funcionalidades da página web, como manipulação do DOM, eventos e propriedades da janela.
- **Node.js**: Em ambientes Node.js, o objeto global é o **`global`**, que serve como contêiner para variáveis e funções acessíveis de qualquer parte do código.
- **Contexto estrito (strict mode)**: Em "strict mode" (modo estrito), o objeto global é **`undefined`**, o que significa que não é possível acessar variáveis globais diretamente sem explicitamente referenciá-las.

---

### Exemplos de propriedades e métodos do objeto global:

**Propriedades**:

- **`undefined`**: Um valor especial que representa a ausência de valor ou a falta de definição de uma variável.
- **`NaN`**: "Not a Number", é um valor que representa um erro numérico.
- **`Infinity`**: Representa um valor infinito, positivo ou negativo, dependendo do contexto.

---

**Funções**:

- **`parseInt()`**: Converte uma string para um número inteiro.
```
parseInt("10"); // 10
```
- **`parseFloat()`**: Converte uma string para um número de ponto flutuante.
```
parseFloat("10.5"); // 10.5
```
- **`isNaN()`**: Verifica se o valor não é um número.
```
isNaN("texto"); // true
```

**Construtores**:

- **`Object()`**: Usado para criar um novo objeto.
```
const obj = new Object();
```
- **`Array()`**: Usado para criar um novo array.
```
const arr = new Array(5); // Cria um array com 5 elementos indefinidos
```
- **`Function()`**: Construtor que cria novas funções.
```
const func = new Function('a', 'b', 'return a + b');
```

**Objetos**:
- **`Math`**: Um objeto que fornece métodos e propriedades para realizar operações matemáticas, como ```Math.max()```, ```Math.random()```, ```Math.PI```, etc.
```
Math.max(10, 20); // 20
Math.random(); // Valor aleatório entre 0 e 1
```
- **`JSON`**: Um objeto que fornece métodos para trabalhar com JSON, como ```JSON.stringify()``` e ```JSON.parse()```.
```
const obj = { name: "John" };
const jsonString = JSON.stringify(obj); // Converte o objeto em string JSON
```

#### O impacto do uso excessivo do objeto global

Embora o objeto global seja útil, o uso excessivo de variáveis globais pode causar problemas no código, como:

- **Conflitos de nome**: Se muitas variáveis ou funções globais são usadas, elas podem ter o mesmo nome, resultando em substituição de valores inesperada.
- **Manutenção difícil**: O código que depende fortemente do escopo global pode ser difícil de manter e entender, pois as variáveis podem ser modificadas de qualquer lugar.
- **Escopo poluído**: Ao criar variáveis globais, há o risco de "poluir" o escopo global, o que torna o gerenciamento de variáveis mais complexo.

---

#### Boas práticas

- **Evitar variáveis globais**: Sempre que possível, use escopos locais para variáveis e funções. Utilize módulos ou closures para manter o código organizado e seguro.
- **Usar módulos**: Com a introdução de módulos ES6 (import e export), é possível limitar o escopo de variáveis e funções ao módulo, reduzindo a dependência do objeto global.
- **Em ambientes como Node.js**: Use o objeto global com moderação, preferindo a utilização de módulos `require` para evitar conflitos.

---





