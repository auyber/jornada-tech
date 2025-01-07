# 3. Javascript

## **O que é uma linguagem de programação**

Uma linguagem de programação é um método padronizado de comunicação entre programadores e computadores. É um sistema formal composto por um conjunto de regras sintáticas e semânticas que permitem a criação de código fonte. Este código fonte pode ser compilado e transformado em um programa de computador ou interpretado como um script .As linguagens de programação permitem que os programadores especifiquem com precisão:

1. Quais dados o computador irá processar
2. Como esses dados serão armazenados ou transmitidos
3. Quais ações devem ser tomadas sob diversas circunstâncias

Além disso, as linguagens de programação são usadas para expressar algoritmos com precisão. O conjunto de palavras (lexemas classificados em tokens) que compõem o código fonte de um software é construído de acordo com as regras específicas da linguagem utilizada.As linguagens de programação servem como uma ponte entre o pensamento humano e a execução da máquina. Elas consistem em um conjunto de instruções que, quando escritas corretamente, podem ser convertidas em código de máquina ou, no caso de linguagens visuais, em elementos gráficos.

## **O que é JavaScript**

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

.

## **Tipos de dados**

JavaScript é uma linguagem de tipagem dinâmica, o que significa que o tipo de uma variável é determinado automaticamente com base no valor atribuído a ela. Os principais tipos de dados em JavaScript são:

1. Number: Representa valores numéricos, tanto inteiros quanto de ponto flutuante.Exemplo: **`let idade = 30;`** ou **`let altura = 1.75;`**
2. String: Representa sequências de caracteres, delimitadas por aspas simples ou duplas.Exemplo: **`let nome = "João";`** ou **`let mensagem = 'Olá, mundo!';`**
3. Boolean: Representa valores lógicos verdadeiro (true) ou falso (false).Exemplo: **`let aprovado = true;`**
4. Undefined: Indica que uma variável foi declarada, mas não foi atribuído nenhum valor a ela.Exemplo: **`let variavelNaoInicializada;`**
5. Null: Representa a ausência intencional de qualquer valor ou objeto.Exemplo: **`let valorNulo = null;`**
6. Object: Estrutura de dados complexa que pode conter múltiplas propriedades e métodos.Exemplo: **`let pessoa = {nome: "Maria", idade: 25};`**
7. Array: Um tipo especial de objeto usado para armazenar listas ordenadas de valores.Exemplo: **`let frutas = ["maçã", "banana", "laranja"];`**
8. Function: Bloco de código reutilizável que pode ser chamado para executar tarefas específicas.Exemplo: **`function somar(a, b) { return a + b; }`**
9. Symbol: Tipo de dado introduzido no ECMAScript 6, representa um identificador único.Exemplo: **`let simbolo = Symbol("descricao");`**

Além desses tipos básicos, JavaScript também suporta outros tipos de dados mais avançados e estruturas de controle que permitem a criação de programas complexos e interativos

## **Variáveis**

Variáveis em JavaScript são contêineres para armazenar dados. Elas são fundamentais para qualquer programa, pois permitem armazenar e manipular informações durante a execução do código.

## **Declaração de Variáveis**

Em JavaScript moderno (ES6+), existem três formas de declarar variáveis:

1. **`let`**: Usado para declarar variáveis que podem ter seu valor alterado.
    ```
    javascriptlet idade = 25;
    idade = 26; // Valor pode ser alterado
    ```
2. **`const`**: Usado para declarar constantes, cujo valor não pode ser alterado após a atribuição inicial.
    ```
    javascriptconst PI = 3.14159;
    *// PI = 3.14; // Isso causaria um erro
    ```
3. **`var`**: Forma mais antiga de declarar variáveis, com escopo de função ou global.
    ```
    javascriptvar nome = "João";
    ```

## **Regras para Nomes de Variáveis**

- Devem começar com uma letra, underscore (_) ou cifrão ($).
- Podem conter letras, números, underscores e cifrões.
- São case-sensitive (maiúsculas e minúsculas são diferentes).
- Não podem ser palavras reservadas do JavaScript.

## **Escopo de Variáveis**

- Variáveis declaradas com **`let`** e **`const`** têm escopo de bloco.
- Variáveis declaradas com **`var`** têm escopo de função ou global.
```
javascript{
  let x = 10; // x só existe dentro deste bloco
}
*// console.log(x); // Isso causaria um erro

function exemplo() {
  var y = 20; // y existe em toda a função
}
*// console.log(y); // Isso também causaria um erro
```
## **Hoisting**

- Variáveis declaradas com **`var`** são "elevadas" (hoisted) para o topo de seu escopo.
- Variáveis declaradas com **`let`** e **`const`** não são hoisted.
```
javascriptconsole.log(a); // undefined
var a = 5;

// console.log(b); // Erro: Cannot access 'b' before initialization*
let b = 10;
```
## **Operadores e Expressões**

Operadores em JavaScript são símbolos especiais que realizam operações específicas em operandos. Expressões são combinações de valores, variáveis e operadores que são avaliadas para produzir um resultado.

## **Tipos de Operadores**

1. Operadores Aritméticos
    - Adição (+): **`let soma = 5 + 3; // 8`**
    - Subtração (-): **`let diferenca = 10 - 4; // 6`**
    - Multiplicação (*): **`let produto = 3 * 4; // 12`**
    - Divisão (/): **`let quociente = 20 / 5; // 4`**
    - Módulo (%): **`let resto = 17 % 3; // 2`**
    - Incremento (++): **`let x = 5; x++; // x agora é 6`**
    - Decremento (--): **`let y = 8; y--; // y agora é 7`**
    - Exponenciação (**): **`let potencia = 2 ** 3; // 8`**
2. Operadores de Atribuição
    - Atribuição simples (=): **`let x = 5;`**
    - Atribuição com adição (+=): **`x += 3; // equivalente a x = x + 3`**
    - Atribuição com subtração (-=): **`x -= 2;`**
    - Atribuição com multiplicação (*=): **`x *= 4;`**
    - Atribuição com divisão (/=): **`x /= 2;`**
3. Operadores de Comparação
    - Igual (==): **`5 == "5" // true (compara apenas o valor)`**
    - Estritamente igual (===): **`5 === "5" // false (compara valor e tipo)`**
    - Diferente (!=): **`5 != "6" // true`**
    - Estritamente diferente (!==): **`5 !== "5" // true`**
    - Maior que (>): **`10 > 5 // true`**
    - Menor que (<): **`3 < 7 // true`**
    - Maior ou igual (>=): **`5 >= 5 // true`**
    - Menor ou igual (<=): **`4 <= 4 // true`**
4. Operadores Lógicos
    - AND (&&): **`true && false // false`**
    - OR (||): **`true || false // true`**
    - NOT (!): **`!true // false`**
5. Operadores de String
    - Concatenação (+): **`"Olá" + " " + "Mundo" // "Olá Mundo"`**
6. Operador Ternário
    - Sintaxe: **`condição ? expressão1 : expressão2`**
    
    `javascriptlet idade = 20;
    let status = idade >= 18 ? "Adulto" : "Menor";`
    
7. Operadores de Tipo
    - typeof: **`typeof 42 // "number"`**
    - instanceof: **`[1, 2] instanceof Array // true`**

## **Expressões**

Expressões são combinações de valores, variáveis e operadores que são avaliadas para produzir um resultado. Elas podem ser simples ou complexas.Exemplos de expressões:
```
javascriptlet x = 5;
let y = 3;
let z = x + y * 2; // 11

let nome = "Alice";
let saudacao = "Olá, " + nome + "!"; // "Olá, Alice!"

let maiorIdade = idade >= 18;

let resultado = (x > y) ? "x é maior" : "y é maior ou igual";
```
## **Comentários**

Comentários são trechos de texto no código que são ignorados pelo interpretador JavaScript. Eles são usados para explicar o código, fazer anotações ou desabilitar temporariamente partes do código.

## **Tipos de Comentários**

1. Comentários de Linha Única
    - Começam com // e continuam até o final da linha.
    ```
    javascript// Este é um comentário de linha única
    let x = 5; // Isso também é um comentário de linha única
    ```
2. Comentários de Múltiplas Linhas
    - Começam com /* e terminam com */.
    - Podem abranger várias linhas.
    ```
    javascript/*
    Este é um comentário
    de múltiplas linhas.
    Pode ocupar várias linhas.
    */
    ```

## **Boas Práticas para Comentários**

1. Use comentários para explicar o "porquê" e não o "como".
    ```
    javascript// Calcula a idade em anos bissextos
    function calcularIdadeBissexto(anoNascimento) {
      // Código aqui
    }
    ```
2. Mantenha os comentários atualizados quando o código mudar.
3. Evite comentários óbvios que não agregam valor.
    ```
    javascript// Ruim
    let x = 5; // Atribui 5 a x// Bom
    let velocidadeInicial = 5; // Em metros por segundo
    ```
4. Use comentários para documentar funções complexas.
    ```
    javascript/**
     * Calcula o fatorial de um número.
     * @param {number} n - O número para calcular o fatorial.
     * @returns {number} O fatorial de n.
     */
    function fatorial(n) {
      // Código aqui
    }
    ```
5. Use comentários para marcar TODO's ou FIXME's.
    ```
    javascript// TODO: Implementar validação de entrada
    function processarDados(dados) {
      // Código aqui
    }
    
    // FIXME: Corrigir bug de arredondamento
    function calcularMedia(numeros) {
      // Código aqui
    }
    ```
6. Em ambientes de desenvolvimento, você pode usar comentários para desabilitar temporariamente código.
    ```
    javascript// let debugMode = true;
    let debugMode = false;
    ```

Lembre-se, código bem escrito muitas vezes é autoexplicativo. Use comentários para adicionar clareza quando necessário, mas não substitua um bom design de código por comentários excessivos.

## **Usando JavaScript no HTML**

Existem três principais formas de incluir JavaScript em uma página HTML:

1. Inline: Inserindo código JavaScript diretamente em atributos HTML.
    ```
    <button onclick="alert('Olá, mundo!')">Clique aqui</button>
    ```
2. Interno: Usando a tag **`<script>`** dentro do documento HTML.
    ```
    <script>
      function saudacao() {
        alert('Olá, mundo!');
      }
    </script>
    ```
3. Externo: Vinculando um arquivo JavaScript separado.
    ```
    <script src="meu-script.js"></script>
    ```

A abordagem recomendada é usar arquivos JavaScript externos, pois isso melhora a organização do código, permite reutilização e facilita a manutenção.Para otimizar o carregamento, é geralmente recomendado colocar as tags ```<script>``` antes do fechamento da tag ```</body>```. Isso permite que o conteúdo HTML seja carregado antes da execução dos scripts.

## **Recursos nativos do navegador**

Os navegadores modernos oferecem uma variedade de APIs nativas que podem ser acessadas via JavaScript:

1. DOM (Document Object Model): Permite manipular a estrutura, conteúdo e estilos de uma página web.
2. Web Storage: Inclui localStorage e sessionStorage para armazenamento de dados no navegador.
3. Fetch API: Facilita a realização de requisições HTTP assíncronas.
4. Canvas e WebGL: Permitem criar gráficos 2D e 3D diretamente no navegador.
5. Geolocation API: Fornece acesso à localização geográfica do usuário.
6. Web Audio API: Permite manipular e criar áudio no navegador.
7. WebSockets: Possibilita comunicação bidirecional em tempo real.

Essas APIs nativas oferecem funcionalidades poderosas sem a necessidade de bibliotecas externas, permitindo criar aplicações web ricas e interativas.

## **Comparação de dados**

JavaScript oferece operadores de comparação para avaliar e comparar valores:

1. Igualdade (==): Compara valores, realizando coerção de tipos.
    ```
    javascript5 == "5" // true
    ```
2. Igualdade estrita (===): Compara valores e tipos.
    ```
    javascript5 === "5" // false
    ```
3. Desigualdade (!=): Verifica se os valores são diferentes.
    ```
    javascript5 != "6" // true
    ```
4. Desigualdade estrita (!==): Verifica se os valores ou tipos são diferentes.
    ```
    javascript5 !== "5" // true
    ```
5. Maior que (>), Menor que (<), Maior ou igual (>=), Menor ou igual (<=):
    ```
    javascript10 > 5 // true
    3 < 7 // true
    5 >= 5 // true
    4 <= 4 // true
    ```

É geralmente recomendado usar a igualdade estrita (===) para evitar resultados inesperados devido à coerção de tipos.

## **Operadores lógicos**

JavaScript possui três operadores lógicos principais:

1. AND (&&): Retorna true se ambos os operandos forem verdadeiros.
    ```
    javascripttrue && false // false
    true && true // true
    ```
2. OR (||): Retorna true se pelo menos um dos operandos for verdadeiro.
    ```
    javascripttrue || false // true
    false || false // false
    ```
3. NOT (!): Inverte o valor booleano.
    ```
    javascript!true // false
    !false // true
    ```

Estes operadores são frequentemente usados em estruturas de controle de fluxo, como condicionais if-else, e em expressões de avaliação curta-circuito.
```
javascriptlet x = 5;
let y = 10;
if (x > 0 && y < 20) {
  console.log("Ambas as condições são verdadeiras");
}
```
Os operadores lógicos em JavaScript também exibem o comportamento de curto-circuito, onde a avaliação para assim que o resultado é determinado, o que pode ser útil para verificações condicionais eficientes.

## **Estruturas condicionais: If e Else**

As estruturas condicionais if e else permitem que o código execute diferentes blocos dependendo de condições específicas.

## **If**

A estrutura if executa um bloco de código se uma condição for verdadeira.Sintaxe:
```
javascriptif (condição) {
  // código a ser executado se a condição for verdadeira
}
```
Exemplo:
```
javascriptlet idade = 18;
if (idade >= 18) {
  console.log("Você é maior de idade.");
}
```
## **If...Else**

A estrutura if...else permite executar um bloco de código se a condição for verdadeira e outro bloco se for falsa.Sintaxe:
```
javascriptif (condição) {
  // código a ser executado se a condição for verdadeira
} else {
  // código a ser executado se a condição for falsa
}
```
Exemplo:
```
javascriptlet hora = 20;
if (hora < 18) {
  console.log("Bom dia!");
} else {
  console.log("Boa noite!");
}
```
## **If...Else If...Else**

Para múltiplas condições, podemos usar else if.Sintaxe:
```
javascriptif (condição1) {
  // código se condição1 for verdadeira
} else if (condição2) {
  // código se condição2 for verdadeira
} else {
  // código se todas as condições anteriores forem falsas
}
```
Exemplo:
```
javascriptlet nota = 75;
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
## **Estruturas Condicionais: Switch**

A estrutura switch é usada para realizar diferentes ações baseadas em diferentes condições. É uma alternativa ao if...else if...else quando se tem múltiplas condições para um único valor.Sintaxe:
```
javascriptswitch(expressão) {
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
javascriptlet diaDaSemana = 3;
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
Neste exemplo, se diaDaSemana for 3, o output será "Quarta-feira". Note que os casos 6 e 7 compartilham o mesmo bloco de código.

## **Estruturas de Repetição: While**

O loop while executa um bloco de código enquanto uma condição específica for verdadeira.Sintaxe:
```
javascriptwhile (condição) {
  // código a ser executado
}
```
Exemplo:
```
javascriptlet contador = 0;
while (contador < 5) {
  console.log("Contagem: " + contador);
  contador++;
}
```
Este código irá imprimir os números de 0 a 4.

## **Estruturas de Repetição: Do While**

O loop do...while é similar ao while, mas garante que o bloco de código seja executado pelo menos uma vez antes de verificar a condição.Sintaxe:
```
javascriptdo {
  // código a ser executado
} while (condição);
```
Exemplo:
```
javascriptlet i = 0;
do {
  console.log("O número é " + i);
  i++;
} while (i < 5);
```
Este código irá imprimir os números de 0 a 4, mas mesmo se i

fosse inicialmente maior que 5, o bloco seria executado uma vez.

## **Estruturas de Repetição: For**

O loop for é usado quando se sabe antecipadamente quantas vezes o bloco de código deve ser executado.Sintaxe:
```
javascriptfor (inicialização; condição; incremento) {
  // código a ser executado
}
```
Exemplo:
```
javascriptfor (let i = 0; i < 5; i++) {
  console.log("O número é " + i);
}
```
Este código também imprime os números de 0 a 4.

## **Estruturas de dados**

JavaScript suporta várias estruturas de dados nativas. As mais comuns são:

1. Arrays: Coleções ordenadas de valores.
    ```
    javascriptlet frutas = ["maçã", "banana", "laranja"];
    console.log(frutas[0]); // "maçã"
    ```
2. Objetos: Coleções de pares chave-valor.
    ```
    javascriptlet pessoa = {
      nome: "João",
      idade: 30,
      profissao: "Desenvolvedor"
    };
    console.log(pessoa.nome); // "João"
    ```
3. Map: Coleção de pares chave-valor onde as chaves podem ser de qualquer tipo.
    ```
    javascriptlet mapa = new Map();
    mapa.set("chave", "valor");
    console.log(mapa.get("chave")); // "valor"
    ```
4. Set: Coleção de valores únicos.
    ```
    javascriptlet conjunto = new Set([1, 2, 3, 3, 4]);
    console.log(conjunto.size); // 4
    ```
5. WeakMap e WeakSet: Versões "fracas" de Map e Set que permitem que suas chaves sejam coletadas pelo garbage collector.

Estas estruturas de dados oferecem diferentes maneiras de organizar e manipular dados em JavaScript, cada uma com suas próprias características e casos de uso específicos.

## **Arrays**

Arrays em JavaScript são estruturas de dados que permitem armazenar múltiplos valores em uma única variável. Eles são objetos que contêm valores (de qualquer tipo) em posições numeradas.

## **Criação de Arrays**

1. Usando colchetes (forma literal):
    ```
    javascriptlet frutas = ["maçã", "banana", "laranja"];
    ```
2. Usando o construtor Array():
    ```
    javascriptlet numeros = new Array(1, 2, 3, 4, 5);
    ```
3. Array vazio:
    ```
    javascriptlet arrayVazio = [];
    ```

## **Características Importantes**

1. Indexação baseada em zero: O primeiro elemento está no índice 0.
    ```
    javascriptconsole.log(frutas[0]); // "maçã"
    ```
2. Propriedade length: Retorna o número de elementos no array.
    ```
    javascriptconsole.log(frutas.length); // 3
    ```
3. Arrays podem conter diferentes tipos de dados:
    ```
    javascriptlet misturado = [1, "dois", { nome: "três" }, [4, 5]];
    ```

## **Trabalhando com Arrays**

## **Métodos Importantes**

1. push(): Adiciona um ou mais elementos ao final do array.
    ```
    javascriptfrutas.push("uva");
    console.log(frutas); // ["maçã", "banana", "laranja", "uva"]
    ```
2. pop(): Remove o último elemento do array.
    ```
    javascriptlet ultimaFruta = frutas.pop();
    console.log(ultimaFruta); // "uva"
    console.log(frutas); // ["maçã", "banana", "laranja"]
    ```
3. unshift(): Adiciona um ou mais elementos no início do array.
    ```
    javascriptfrutas.unshift("morango");
    console.log(frutas); // ["morango", "maçã", "banana", "laranja"]
    ```
4. shift(): Remove o primeiro elemento do array.
    ```
    javascriptlet primeiraFruta = frutas.shift();
    console.log(primeiraFruta); // "morango"
    console.log(frutas); // ["maçã", "banana", "laranja"]
    ```
5. indexOf(): Retorna o índice de um elemento específico.
    ```
    javascriptconsole.log(frutas.indexOf("banana")); // 1
    ```
6. slice(): Retorna uma cópia de parte do array.
    ```
    javascriptlet parte = frutas.slice(1, 3);
    console.log(parte); // ["banana", "laranja"]
    ```
7. splice(): Altera o conteúdo de um array removendo ou substituindo elementos existentes e/ou adicionando novos elementos.
    ```
    javascriptfrutas.splice(1, 1, "kiwi", "manga");
    console.log(frutas); // ["maçã", "kiwi", "manga", "laranja"]
    ```
8. includes(): é usado para determinar se um array contém um determinado elemento, retornando true se o elemento for encontrado e false caso contrário.
    
    Exemplo de uso:
    ```
    javascriptconst frutas = ["maçã", "banana", "laranja"];
    console.log(frutas.includes("banana")); // true
    console.log(frutas.includes("uva")); // false
    console.log(frutas.includes("maçã", 1)); // false (começa a buscar a partir do índice 1)
    ```

## **Iteração em Arrays**

1. forEach(): Executa uma função para cada elemento do array.
    ```
    javascriptfrutas.forEach(function(fruta) {
      console.log(fruta);
    });
    ```
2. map(): Cria um novo array com os resultados da chamada de uma função para cada elemento.
    ```
    javascriptlet maiusculas = frutas.map(fruta => fruta.toUpperCase());
    console.log(maiusculas); // ["MAÇÃ", "KIWI", "MANGA", "LARANJA"]
    ```
3. filter(): Cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.
    ```
    javascriptlet frutasComM = frutas.filter(fruta => fruta.startsWith('m'));
    console.log(frutasComM); // ["manga"]
    ```
4. reduce(): Executa uma função reducer para cada elemento do array, resultando em um único valor de retorno.
    ```
    javascriptlet numeros = [1, 2, 3, 4, 5];
    let soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
    console.log(soma); // 15
    ```

## **Arrays Bidimensionais**

Arrays bidimensionais são arrays que contêm outros arrays como seus elementos, criando uma estrutura semelhante a uma matriz.

## **Criação de Arrays Bidimensionais**
```
javascriptlet matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```
## **Acessando Elementos**

Para acessar elementos em um array bidimensional, usamos dois índices:
```
javascriptconsole.log(matriz[1][2]); // 6
```
## **Iteração em Arrays Bidimensionais**

Podemos usar loops aninhados para iterar sobre arrays bidimensionais:
```
javascriptfor (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
}
```
## **Métodos Úteis para Arrays Bidimensionais**

1. flat(): Achata arrays aninhados.
    ```
    javascriptlet arrayAchatado = matriz.flat();
    console.log(arrayAchatado); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ```
2. map() com arrays aninhados:
    ```
    javascriptlet matrizDobrada = matriz.map(linha => linha.map(num => num * 2));
    console.log(matrizDobrada);
    // [[2, 4, 6], [8, 10, 12], [14, 16, 18]]
    ```

Arrays bidimensionais são úteis para representar dados tabulares, grades, ou qualquer estrutura que naturalmente se encaixe em um formato de linhas e colunas

## **Objetos**

Objetos em JavaScript são estruturas de dados que permitem armazenar coleções de pares chave-valor. Eles são fundamentais para a programação em JavaScript e são usados para representar entidades do mundo real ou conceitos abstratos.

## **Criação de Objetos**

1. Usando a notação literal de objeto:
    ```
    javascriptlet pessoa = {
      nome: "João",
      idade: 30,
      profissao: "Desenvolvedor"
    };
    ```
2. Usando o construtor Object():
    ```
    javascriptlet carro = new Object();
    carro.marca = "Toyota";
    carro.modelo = "Corolla";
    carro.ano = 2022;
    ```

## **Acessando Propriedades**

1. Notação de ponto:
    ```
    javascriptconsole.log(pessoa.nome); // "João"
    ```
2. Notação de colchetes:
    ```
    javascriptconsole.log(pessoa["idade"]); // 30
    ```

## **Métodos de Objetos**

Métodos são funções que pertencem a um objeto:
```
javascriptlet pessoa = {
  nome: "Maria",
  saudacao: function() {
    console.log("Olá, eu sou " + this.nome);
  }
};

pessoa.saudacao(); // "Olá, eu sou Maria"
```
## **Propriedades e Métodos Dinâmicos**

Podemos adicionar ou remover propriedades e métodos dinamicamente:
```
javascriptpessoa.email = "maria@email.com";
delete pessoa.idade;
```
## **Object.keys(), Object.values(), Object.entries()**

Estes métodos são úteis para iterar sobre objetos:
```
javascriptconsole.log(Object.keys(pessoa)); // ["nome", "saudacao", "email"]
console.log(Object.values(pessoa)); // ["Maria", [Function: saudacao], "maria@email.com"]
console.log(Object.entries(pessoa)); // [["nome", "Maria"], ["saudacao", [Function: saudacao]], ["email", "maria@email.com"]]
```
## **Funções**

Funções são blocos de código reutilizáveis que realizam uma tarefa específica ou calculam um valor.

## **Declaração de Funções**

1. Declaração de função:
    ```
    javascriptfunction saudacao(nome) {
      console.log("Olá, " + nome + "!");
    }
    ```
2. Expressão de função:
    ```
    javascriptlet saudacao = function(nome) {
      console.log("Olá, " + nome + "!");
    };
    ```
3. Arrow function (ES6+):
    ```
    javascriptlet saudacao = (nome) => {
      console.log("Olá, " + nome + "!");
    };
    ```

## **Chamando Funções**
```
javascriptsaudacao("Alice"); // "Olá, Alice!"
```
## **Parâmetros de uma função**

Parâmetros são variáveis listadas como parte da definição de uma função.

## **Parâmetros Básicos**
```
javascriptfunction soma(a, b) {
  return a + b;
}

console.log(soma(5, 3)); // 8
```
## **Parâmetros Padrão (ES6+)**
```
javascriptfunction saudacao(nome = "Visitante") {
  console.log("Olá, " + nome + "!");
}

saudacao(); // "Olá, Visitante!"
saudacao("Alice"); // "Olá, Alice!"
```
## **Rest Parameters (ES6+)**

Permite representar um número indefinido de argumentos como um array:
```
javascriptfunction soma(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(soma(1, 2, 3, 4)); // 10
```
## **Desestruturação de Parâmetros (ES6+)**
```
javascriptfunction imprimirPessoa({nome, idade}) {
  console.log(`${nome} tem ${idade} anos.`);
}

imprimirPessoa({nome: "Carlos", idade: 25}); // "Carlos tem 25 anos."
```
## **Retorno de uma função**

O retorno de uma função é o valor que a função fornece quando é chamada.

## **Retorno Básico**
```
javascriptfunction quadrado(numero) {
  return numero * numero;
}

console.log(quadrado(4)); // 16
```
## **Retorno Implícito em Arrow Functions**
```
javascriptconst cubo = x => x * x * x;

console.log(cubo(3)); // 27
```
## **Retornando Múltiplos Valores**

Em JavaScript, podemos retornar múltiplos valores usando um objeto ou um array:
```
javascriptfunction calcularArea(largura, altura) {
  let area = largura * altura;
  let perimetro = 2 * (largura + altura);
  return { area, perimetro };
}

let resultado = calcularArea(5, 3);
console.log(resultado.area); // 15
console.log(resultado.perimetro); // 16
```
## **Retorno Antecipado**

Podemos usar return para sair de uma função antes do final:
```
javascriptfunction verificarIdade(idade) {
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
Funções são um conceito fundamental em JavaScript, permitindo a criação de código modular, reutilizável e organizado. A compreensão profunda de como criar e usar funções, trabalhar com parâmetros e retornos é essencial para se tornar um programador JavaScript eficiente.

## **Escopo**

Escopo em JavaScript refere-se à visibilidade e acessibilidade de variáveis, funções e objetos em diferentes partes do código. Compreender o escopo é crucial para evitar bugs e escrever código mais eficiente.

## **Tipos de Escopo**

1. Escopo Global
    - Variáveis declaradas fora de qualquer função ou bloco têm escopo global.
    - Podem ser acessadas de qualquer lugar no código.
    ```
    javascriptvar globalVar = "Eu sou global";
    
    function teste() {
      console.log(globalVar); // Acessível
    }
    ```
2. Escopo de Função
    - Variáveis declaradas dentro de uma função só são acessíveis dentro dessa função.
    ```
    javascriptfunction minhaFuncao() {
      var funcaoVar = "Eu sou local à função";
      console.log(funcaoVar); // Acessível
    }
    
    console.log(funcaoVar); // Erro: funcaoVar is not defined
    ```
3. Escopo de Bloco (introduzido com let e const no ES6)
    - Variáveis declaradas com **`let`** e **`const`** têm escopo de bloco.
    - Um bloco é definido por chaves {}.
    ```
    javascriptif (true) {
      let blocoVar = "Eu sou local ao bloco";
      console.log(blocoVar); // Acessível
    }
    
    console.log(blocoVar); // Erro: blocoVar is not defined
    ```

## **Cadeia de Escopos (Scope Chain)**

JavaScript procura variáveis na cadeia de escopos, do mais interno para o mais externo.
```
javascriptvar externa = "Eu sou externa";

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
## **Hoisting**

JavaScript "eleva" declarações de variáveis e funções para o topo de seu escopo.
```
javascriptconsole.log(x); // undefined (não dá erro)
var x = 5;

// É interpretado como:
var x;
console.log(x);
x = 5;
```
Note que apenas a declaração é elevada, não a inicialização.

## **Métodos**

Métodos são funções que são propriedades de um objeto. Eles definem o comportamento do objeto.

## **Definindo Métodos**

1. Na declaração do objeto:
    ```
    javascriptlet pessoa = {
      nome: "Alice",
      saudacao: function() {
        console.log("Olá, eu sou " + this.nome);
      }
    };
    
    pessoa.saudacao(); // "Olá, eu sou Alice"
    ```
2. Usando a sintaxe de método abreviada (ES6+):
    ```
    javascriptlet pessoa = {
      nome: "Bob",
      saudacao() {
        console.log("Olá, eu sou " + this.nome);
      }
    };
    ```
3. Adicionando métodos a um objeto existente:
    ```
    javascriptpessoa.despedida = function() {
      console.log("Tchau!");
    };
    ```

## **O 'this' em Métodos**

A palavra-chave this refere-se ao objeto que está chamando o método.
```
javascriptlet carro = {
  marca: "Toyota",
  modelo: "Corolla",
  descricao() {
    console.log(`Este carro é um ${this.marca} ${this.modelo}`);
  }
};

carro.descricao(); // "Este carro é um Toyota Corolla"
```
## **Funções Recursivas**

Funções recursivas são funções que chamam a si mesmas. Elas são úteis para resolver problemas que podem ser quebrados em subproblemas menores e idênticos.

## **Estrutura Básica**
```
javascriptfunction funcaoRecursiva(parametro) {
  if (condicaoDeParada) {
    return valorFinal;
  }
  return funcaoRecursiva(novoParametro);
}
```
## **Exemplo: Fatorial**
```
javascriptfunction fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fatorial(n - 1);
}

console.log(fatorial(5)); // 120
```
## **Considerações Importantes**

1. Sempre defina uma condição de parada para evitar loops infinitos.
2. Recursão pode ser menos eficiente que soluções iterativas para problemas grandes.
3. Pode levar a estouro de pilha (stack overflow) se a recursão for muito profunda.

## **Funções Anônimas**

Funções anônimas são funções sem nome. Elas são frequentemente usadas como argumentos para outras funções ou atribuídas a variáveis.

## **Sintaxe Básica**
```
javascriptlet saudacao = function(nome) {
  console.log("Olá, " + nome);
};

saudacao("Carlos"); // "Olá, Carlos"
```
## **Uso como Callback**
```
javascriptsetTimeout(function() {
  console.log("Isso será impresso após 2 segundos");
}, 2000);
```
## **Arrow Functions (ES6+)**

Arrow functions são uma forma mais concisa de escrever funções anônimas:
```
javascriptlet dobrar = (x) => x * 2;

console.log(dobrar(4)); // 8
```
## **IIFE (Immediately Invoked Function Expression)**

Uma função anônima que é executada imediatamente após ser definida:
```
javascript(function() {
  let privada = "Não posso ser acessada fora";
  console.log(privada);
})();
```
As funções anônimas são particularmente úteis para encapsulamento, callbacks e para criar escopos temporários.

## **High-order Functions**

High-order functions (HOFs) são funções que podem receber outras funções como argumentos e/ou retornar funções como resultados. Elas são fundamentais em JavaScript e permitem criar código mais flexível e dinâmico.Características principais:

- Tratam funções como "primeira classe", podendo passá-las como argumentos ou retorná-las
- Permitem criar código mais modular e reutilizável
- São amplamente usadas em programação funcional

Exemplos de uso:

1. Funções que recebem callbacks:
```
javascriptfunction executarFuncao(funcao) {
  funcao();
}

executarFuncao(() => {
  console.log('Função passada como argumento!');
});
```
1. Funções que retornam funções:
```
javascriptfunction criarMultiplicador(multiplicador) {
  return function(numero) {
    return numero * multiplicador;
  };
}

const dobrar = criarMultiplicador(2);
console.log(dobrar(5)); // 10
```
## **High-order Functions e Arrays**

JavaScript oferece várias HOFs nativas para trabalhar com arrays, tornando a manipulação de dados mais eficiente e legível:

1. forEach(): Executa uma função para cada elemento do array
```
javascript[1, 2, 3].forEach(num => console.log(num));
```
1. map(): Cria um novo array com os resultados da função aplicada a cada elemento
```
javascriptconst dobrados = [1, 2, 3].map(num => num * 2);
```
1. filter(): Cria um novo array com todos os elementos que passam no teste da função
```
javascriptconst pares = [1, 2, 3, 4].filter(num => num % 2 === 0);
```
1. reduce(): Reduz o array a um único valor, aplicando uma função acumuladora
```
javascriptconst soma = [1, 2, 3].reduce((acc, num) => acc + num, 0);
```
1. some(): Verifica se pelo menos um elemento satisfaz a condição
```
javascriptconst temPar = [1, 2, 3].some(num => num % 2 === 0);
```
1. every(): Verifica se todos os elementos satisfazem a condição
```
javascriptconst todosPares = [2, 4, 6].every(num => num % 2 === 0);
```
## **Objetos Globais**

O objeto global em JavaScript é um objeto especial que serve como contêiner para variáveis e funções globalmente acessíveis. Suas características principais são:

- É criado automaticamente pelo ambiente JavaScript
- Contém propriedades e métodos nativos da linguagem
- Varia dependendo do ambiente de execução

Em diferentes ambientes:

- Navegador: o objeto global é **`window`**
- Node.js: o objeto global é **`global`**
- Contexto estrito (strict mode): o objeto global é **`undefined`**

Exemplos de propriedades e métodos do objeto global:

- Propriedades: **`undefined`**, **`NaN`**, **`Infinity`**
- Funções: **`parseInt()`**, **`parseFloat()`**, **`isNaN()`**
- Construtores: **`Object()`**, **`Array()`**, **`Function()`**
- Objetos: **`Math`**, **`JSON`**

É importante notar que o uso excessivo do objeto global pode levar a problemas de escopo e manutenção do código. É geralmente recomendado limitar o uso de variáveis e funções globais, preferindo abordagens modulares.

