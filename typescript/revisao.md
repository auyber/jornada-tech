# TypeScript

## Introdução

---

## Índice

1. [O que é TypeScript?](#1-o-que-é-typescript)
2. [Por que usar TypeScript?](#2-por-que-usar-typescript)
3. [Quando usar TypeScript?](#3-quando-usar-typescript)
4. [TypeScript vs JavaScript](#4-typescript-vs-javascript)
5. [Principais Recursos do TypeScript](#5-principais-recursos-do-typescript)
6. [Tipos Primitivos e Inferência de Tipo](#6-tipos-primitivos-e-inferência-de-tipo)
7. [Instalando e Utilizando o TypeScript](#7-instalando-e-utilizando-o-typescript)
8. [Configurações do Compilador TS](#8-configurações-do-compilador-ts)


## 1. O que é TypeScript?

TypeScript (TS) é uma linguagem de programação baseada em JavaScript (JS), que adiciona uma sintaxe para tipos estáticos. É considerado um *superset* de JavaScript, ou seja, foi construído "em cima" do JS, expandindo suas funcionalidades. Todo código válido em JavaScript também é válido em TypeScript.

Uma analogia comumente usada é a relação entre SCSS e CSS. Assim como o SCSS oferece recursos adicionais ao CSS, o TypeScript fornece funcionalidades extras ao JavaScript, como tipagem estática e recursos orientados a objetos mais robustos.

### Características principais:
- **Superset de JavaScript**: Amplia as funcionalidades do JS, mas sem perder compatibilidade.
- **Tipagem estática**: Possibilita definir tipos para variáveis, parâmetros e retornos de funções, reduzindo erros em tempo de execução.
- **Fortemente tipado**: Uma vez declarado um tipo, ele não pode ser alterado.

## 2. Por que usar TypeScript?

### Aumento de Produtividade
Embora o uso de TS exija um pequeno período de adaptação, ele melhora a produtividade a longo prazo. Com uma tipagem mais rigorosa, muitos erros são identificados durante o desenvolvimento, economizando tempo de depuração.

### IDE Mais Inteligente
TypeScript potencializa o uso de IDEs modernas, proporcionando:
- **Detecção de erros em tempo real**.
- **Sugestões inteligentes e autocompletar**, facilitando o desenvolvimento.
- **Refatoramento seguro**, com maior confiança em alterações no código.

### Erros em Tempo de Compilação
Diferente do JS, onde erros muitas vezes aparecem apenas em tempo de execução, o TS permite detectar muitos problemas durante a compilação, reduzindo bugs em produção.

### Curva de Aprendizado Acessível
- TypeScript utiliza a mesma sintaxe básica do JavaScript.
- É possível adotar TS de forma **parcial e gradativa**.
- É ideal já ter um bom conhecimento de JavaScript para aproveitar ao máximo o TypeScript.

### Recursos Extras
TS oferece funcionalidades que não estão disponíveis nativamente no JS, como:
- **Tuplas**: Arrays com tipos fixos para cada posição.
- **Enums**: Facilita o uso de constantes nomeadas.
- **Melhor suporte a POO**: Com interfaces, classes e métodos mais robustos.
- **Tipos personalizados**: Criação de tipos específicos para melhorar a legibilidade e manutenção do código.

## 3. Quando usar TypeScript?

- **Projetos grandes**: Onde o controle de tipos e a segurança são essenciais para evitar erros complexos.
- **Equipes grandes**: Facilita a comunicação entre desenvolvedores, deixando claro quais tipos de dados são esperados.
- **Manutenção a longo prazo**: A tipagem estática torna o código mais legível e menos propenso a erros futuros.

> 🔊 *Dica*: Mesmo em projetos menores, o uso de TypeScript pode aumentar a confiabilidade e facilitar o desenvolvimento.

## 4. TypeScript vs JavaScript

| Característica | TypeScript | JavaScript |
|-----------------|------------|------------|
| **Sintaxe** | Baseada em JS, com recursos adicionais | Sintaxe tradicional ES6+ |
| **Tipagem** | Estática e forte | Dinâmica e fraca |
| **Execução no navegador** | Precisa ser transpilado para JS | Executado diretamente |
| **Compatibilidade com Node.js** | Precisa ser compilado | Executado diretamente |
| **Depuração** | Erros detectados na compilação | Erros detectados na execução |

## 5. Principais Recursos do TypeScript

1. **Tipagens Avançadas**
   - Declaração de tipos para variáveis, objetos, parâmetros e retornos de funções:

```typescript
let nome: string = "Auyber";
let idade: number = 30;

function saudacao(nome: string): string {
  return `Olá, ${nome}!`;
}
```

2. **Criação de Tipos e Interfaces**
   - Facilita a organização de dados complexos.

```typescript
type Usuario = {
  nome: string;
  idade: number;
};

interface Produto {
  id: number;
  nome: string;
  preco: number;
}
```

3. **Checagem de Erros pela IDE**
   - Identifica problemas como tipos incorretos ou métodos inexistentes.

4. **Autocomplete Avançado**
   - Sugere métodos e propriedades disponíveis, agilizando o desenvolvimento.

5. **Documentação e Comunidade**
   - Excelente documentação oficial e uma comunidade ativa para suporte.

---

## 6. Tipos Primitivos e Inferência de Tipo
Em TypeScript, os tipos primitivos são os mais básicos e usados com frequência. Eles são similares aos tipos primitivos de JavaScript, mas com a adição de um sistema de tipagem estática.

### Tipos Primitivos mais Comuns:
Boolean: Representa valores lógicos, como `true` ou `false`.
Number: Em TypeScript, assim como no JavaScript, números inteiros e de ponto flutuante são representados pelo tipo `number`. Não há distinção entre inteiros e floats.
String: Usado para representar valores de texto, como nomes, mensagens, etc.
Array: A sintaxe para arrays é especificada utilizando o tipo de seus elementos. Exemplo:
```
let example: number[] = [1, 2, 3, 4];
let example: Array<number> = [1, 2, 3, 4];
```
Por padrão, é recomendado que os arrays tenham todos os elementos do mesmo tipo, mas isso pode ser contornado, se necessário.

### Inferência de Tipo
Uma das grandes vantagens do TypeScript é a inferência de tipo. Isso significa que, quando você cria uma variável e atribui um valor a ela, o TypeScript automaticamente determina o tipo dessa variável com base no valor atribuído.

Por exemplo, ao declarar:
```
let nome = "Auyber"; // TS entende que 'nome' é do tipo 'string'
```
Ao passar o mouse sobre a variável nome, a IDE mostra que o tipo é string, e isso permite que o autocompletar funcione de maneira eficiente.

Ao criar uma função, a inferência de tipo também funciona de maneira semelhante:
```
function somar(a: number, b: number) {
  return a + b;
}
```
Passando o mouse sobre a função, você verá que ela recebe dois parâmetros do tipo number e retorna um valor do tipo number.

## 7. Instalando e Utilizando o TypeScript
Para começar a usar TypeScript, siga estas etapas no terminal:

### Inicialize o projeto:
```
npm init -y
```

### Instale o TypeScript:

**Globalmente (disponível para qualquer projeto):**
```
npm install -g typescript
```
**Somente no projeto:**
```
npm install --save-dev typescript
```

### Crie um arquivo TypeScript (index.ts) e escreva seu código.

### Compile o TypeScript para JavaScript:

No terminal, execute:
```
tsc index.ts
```
Isso criará o arquivo index.js correspondente. Por padrão, o TypeScript utiliza o ES3, que é uma versão bem antiga do ECMAScript. No entanto, você pode configurar isso no tsconfig.json.
`
{
  "compilerOptions": {
    "target": "esnext",  // Usa as últimas funcionalidades do ECMAScript
  }
}
`
### Automatizando o processo: Adicione o comando no package.json para compilar o TypeScript automaticamente sempre que necessário:
```
"scripts": {
  "build": "tsc index.ts"
}
```
Agora, sempre que você rodar npm run build, o TypeScript será compilado.

## 8. Configurações do Compilador TS
Para configurar o compilador TypeScript, crie um arquivo tsconfig.json. Esse arquivo permite definir diversas opções para a compilação.

### Exemplo de configuração simples:
```
{
  "compilerOptions": {
    "outDir": "dist"
  }
}
```
Podemos utilizar tbm:
```
{
  "compilerOptions": {
    "outDir": "public/dist"
  }
}
```
O parâmetro outDir especifica o diretório de saída para os arquivos JavaScript compilados.

### Você pode também usar a flag --watch para que o TypeScript compile automaticamente sempre que houver alterações no código. Com isso, o código será re-compilado sem a necessidade de rodar o comando manualmente:
```
tsc --watch
```
Adicione esse comando ao package.json para facilitar a execução:
```
"scripts": {
  "tsc-watch": "tsc --watch"
}
```
Agora, no terminal, basta rodar:
```
npm run tsc-watch
```
Com isso, o TypeScript compilará automaticamente sempre que você fizer alterações.
