# Anotações

## Abaixo temos algumas anotações, a qual eu fiz conforme estudava.

- JS = Nome oficial ECMAScript / De alto nivel e interpretada / Multiparadigma
- Pode ser usado fora do navegador através de runtimes como o NODE.js
- Tipos de Dados do JS
- Dados primitivos do JavaScript:
    - Number: Representa números inteiros e de ponto flutuante
    - String: Representa texto, sempre entre aspas simples ou duplas
    - Boolean: Representa valores lógicos true ou false
    - Undefined: Representa uma variável que foi declarada mas não recebeu valor
    - Null: Representa a ausência intencional de qualquer valor ou objeto
    - Symbol: Representa um identificador único e imutável (introduzido no ES6)
    - BigInt: Representa números inteiros muito grandes (introduzido no ES11)
- **Length (.length)**
    
    A propriedade .length é usada em JavaScript para obter o comprimento ou tamanho de uma string ou array.
    
    - Para strings: Retorna o número de caracteres na string.
    - Para arrays: Retorna o número de elementos no array.

Exemplo de uso:

```
// Com strings
let texto = "JavaScript";
console.log(texto.length); // Saída: 10

// Com arrays
let numeros = [1, 2, 3, 4, 5];
console.log(numeros.length); // Saída: 5
```

- A propriedade .length é muito útil para iterações e validações em JavaScript.

- **Tipos de Objetos e Funções em JavaScript:**
    - **Object:** Estrutura de dados que armazena pares de chave-valor
    - **Array:** Lista ordenada de valores, também considerado um tipo de objeto
    - **Function:** Bloco de código reutilizável que pode ser chamado e executado
    - **Date:** Representa datas e horários
    - **RegExp:** Expressões regulares para manipulação de padrões de texto
    - **Map:** Coleção de pares chave-valor onde as chaves podem ser de qualquer tipo
    - **Set:** Coleção de valores únicos

Exemplo de objeto:

```
let pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor"
};

console.log(pessoa.nome); // Saída: João
```

Exemplo de função:

```
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Maria")); // Saída: Olá, Maria!
```

- Esses tipos de objetos e funções são fundamentais para a programação em JavaScript, permitindo estruturar dados e comportamentos de forma mais complexa e flexível.
- váriaveis servem para armazenar os dados para podermos usá-los no nosso código

**Variáveis em JavaScript: var, let e const**

- JavaScript possui três formas de declarar variáveis: var, let e const. Cada uma tem suas próprias características e usos:
    - **var:** É a forma mais antiga de declarar variáveis. Tem escopo de função ou global e pode ser redeclarada e reatribuída.
    - **let:** Introduzida no ES6, tem escopo de bloco. Pode ser reatribuída, mas não redeclarada no mesmo escopo.
    - **const:** Também introduzida no ES6, tem escopo de bloco. Não pode ser redeclarada nem reatribuída, mas objetos e arrays declarados com const podem ter seus conteúdos modificados.

Exemplo de uso:

```
// var
var x = 5;
var x = 10; // Permite redeclaração

// let
let y = 15;
y = 20; // Permite reatribuição
// let y = 25; // Erro: não permite redeclaração no mesmo escopo

// const
const z = 30;
// z = 35; // Erro: não permite reatribuição
// const z = 40; // Erro: não permite redeclaração

const obj = {prop: 'valor'};
obj.prop = 'novo valor'; // Permite modificar propriedades de objetos
```

- É recomendado usar let e const em vez de var na maioria dos casos, pois oferecem um melhor controle de escopo e ajudam a evitar erros comuns.
- uma vez que declarou a variável com var, let e const. não precisa utilizar novamente para chamar ela
- Hoje em dia utiliza mais o Let (var é forma antiga)
- Nomeando variáveis = Nomes significativos e Cases (CamelCase e Snake_Case)

# Operadores em JavaScript

## 1. Operadores Aritméticos

Os operadores aritméticos são usados para realizar operações matemáticas básicas:

- (adição)
- (subtração)
- (multiplicação)
- / (divisão)
- % (módulo - resto da divisão)
- ** (exponenciação)

## 2. Operadores de Agrupamento

Os parênteses () são usados para agrupar expressões e definir a ordem de precedência:

```jsx
let resultado = (2 + 3) * 4; // resultado = 20
```

## 3. Operadores de Atribuição

Usados para atribuir valores a variáveis:

- = (atribuição simples)
- += (adição e atribuição)
- -= (subtração e atribuição)
- *= (multiplicação e atribuição)
- /= (divisão e atribuição)

## 4. Operadores de Encadeamento

O operador de encadeamento opcional (?.) permite ler o valor de uma propriedade localizada profundamente dentro de uma cadeia de objetos conectados sem ter que validar expressamente que cada referência na cadeia é válida:

```
let valor = objeto?.propriedade?.subPropriedade;
```

## 5. Operadores de Incremento e Decremento

Usados para aumentar ou diminuir o valor de uma variável em uma unidade:

- ++ (incremento)
- -- (decremento)

Exemplo:

```
let x = 5;
x++; // x agora é 6
x--; // x volta a ser 5
```

Esses operadores são fundamentais para realizar operações e manipulações de dados em JavaScript, permitindo cálculos, atribuições e modificações de valores de forma eficiente.

## 6. Precedência de Operadores

A precedência de operadores determina a ordem em que as operações são realizadas em uma expressão. Aqui está a ordem de precedência, do mais alto para o mais baixo:

1. Parênteses ()
2. Expoente **
3. Multiplicação *, Divisão /, Módulo %
4. Adição +, Subtração -
5. Operadores de comparação (>, <, >=, <=)
6. Operadores de igualdade (==, !=, ===, !==)
7. Operadores lógicos (&&, ||)

Exemplo de precedência:

```
let resultado = 2 + 3 * 4; // resultado = 14
let resultadoComParenteses = (2 + 3) * 4; // resultado = 20
```

- Entender a precedência de operadores é crucial para escrever expressões complexas corretamente e evitar erros inesperados em cálculos.
- comentários no JS = Uma linha // e Várias linhas /**/
- pode criar vários links de JS, a ordem dos arquivos é a ordem de precedência, navegador lê de cima para baixo
- Recursos nativo do navegador = console.log / console.error / console.warm / (console = tem muito mais funcionalidades) / window.alert / window.prompt / window.confirm / (window = tem muito mais funcionalidades)
- \n muda de linha no JS
- A função `parseFloat()` em JavaScript é usada para converter uma string em um número de ponto flutuante (decimal). Ela analisa o valor fornecido e retorna um número decimal até onde consegue interpretar a sequência de caracteres.
