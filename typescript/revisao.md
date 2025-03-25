# TypeScript

## Introdução
TypeScript é uma linguagem que adiciona tipagem estática ao JavaScript, melhorando a segurança e organização do código. Neste material, vamos explorar tópicos como inferência de tipos, configuração do compilador, criação de tipos e interfaces, e recursos como módulos, generics e decorators.

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
9. [Tuplas no TypeScript](#9-tuplas-no-typescript)  
10. [Enums no TypeScript](#10-enums-no-typescript)  
11. [Evitando Tipagem](#11-evitando-tipagem)  
12. [Criando Tipos](#12-criando-tipos)  
13. [Criando Interfaces](#13-criando-interfaces)  
14. [Classes e Interfaces](#14-classes-e-interfaces)  
15. [Omit e Pick](#15-omit-e-pick)  
16. [Módulos (Export e Import)](#16-módulos-export-e-import)  
17. [Orientação a Objetos no TypeScript](#17-orientação-a-objetos-no-typescript)   
18. [Generics](#18-generics)  
19. [Decorators](#19-decorators)  


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

Você pode também usar a flag --watch para que o TypeScript compile automaticamente sempre que houver alterações no código. Com isso, o código será re-compilado sem a necessidade de rodar o comando manualmente:
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

----

### Vantagens do TypeScript

O TypeScript (TS) ajuda na detecção de erros dentro do código, identificando problemas de tipagem antes mesmo da execução. 

Por exemplo, se declararmos uma variável como `number`, mas posteriormente tentarmos atribuir um valor de tipo diferente, o TS alertará sobre o erro:

```
let speed: number;
speed = Number(prompt("Insira a velocidade:")); // Conversão necessária para evitar erro
```

O `prompt` retorna uma `string`, então precisamos convertê-la para `number` antes da atribuição.

---

## 9. Tuplas no TypeScript

Tuplas são arrays de tamanho fixo com tipos específicos para cada posição.

```
let crew: string[]; // Array de strings
let crewTuple: [string, string, string]; // Tupla com três strings fixas
```

Exemplo prático: um ponto cartesiano com coordenadas (x, y):

```
let point: [number, number];
point = [2, 3];
```

### Tuplas no React

No React, utilizamos tuplas ao trabalhar com `useState`:

```
const [name, setName] = useState('');
```

Isso representa um array fixo onde:
- `name` contém o estado atual (string)
- `setName` é a função que atualiza o estado

Outro exemplo de tupla:

```
let data: [number, number, string, boolean];
data = [10, 20, "ativo", true];
```

---

## 10. Enums no TypeScript

Enums são tipos exclusivos do TypeScript que permitem atribuir nomes a constantes, facilitando a legibilidade do código.

```
enum Planets {
    MERCURIO,
    VENUS,
    TERRA,
    MARTE
}
```

Por padrão, os valores começam em 0 (`MERCURIO = 0, VENUS = 1, TERRA = 2...`). Podemos definir valores personalizados:

```
enum Roles {
    ADMIN = 'Administrador',
    USER = 'Usuário'
}
```

### Exemplo prático

Imagine um sistema de permissões baseado em funções (roles):

```
function checkPermission(role: Roles) {
    if (role === Roles.ADMIN) {
        console.log("Acesso total concedido.");
    } else {
        console.log("Acesso restrito.");
    }
}

checkPermission(Roles.ADMIN); // Saída: Acesso total concedido.
checkPermission(Roles.USER); // Saída: Acesso restrito.
```

---

## 11. Evitando Tipagem

### Tipos opcionais

1ª forma é tipos opcionais
Podemos tornar propriedades opcionais usando `?`
Exemplo, criamos uma function aonde solicita um piloto e um copiloto, porém se inserirmos só o nome do piloto, a IDE já apresentará um erro, pois é obrigatório declarar o copiloto:
```
function sendSpaceship (spaceship: {pilot: string, copilot: string}) {
    //.... qualquuer lógica
}

sendSpaceship({pilot: 'Luke'})

erro: Argument of type '{ pilot: string; }' is not assignable to parameter of type '{ pilot: string; copilot: string; }'.
  Property 'copilot' is missing in type '{ pilot: string; }' but required in type '{ pilot: string; copilot: string; }'.ts(2345)
index.ts(2, 52): 'copilot' is declared here.
```
para evitar isso só colocarmos o ? na frente do copilot
```
function sendSpaceship(spaceship: { pilot: string, copilot?: string }) {
    console.log(`Piloto: ${spaceship.pilot}`);
    if (spaceship.copilot) {
        console.log(`Copiloto: ${spaceship.copilot}`);
    }
}

sendSpaceship({ pilot: 'Luke' }); // Funciona sem copiloto
sendSpaceship({ pilot: 'Han', copilot: 'Chewbacca' });
```

### Tipo `unknown`
2ª forma é tipos unknown

O `unknown` permite receber qualquer tipo de dado, mas exige verificação antes da atribuição.

```
let input: unknown

input = 'Test'
input = 20
input = []

let text: string

text = input //não podemos atribuir pois o input é unknown 
input = text //aqui pode pois ele pode receber outros tipos, só não pode ser atribuido a tipos especificos
```

### Tipo `any`
3ª forma é o tipo any
O `any` desativa a verificação de tipo, tornando o código semelhante ao JavaScript puro.

```
let input: any //aqui é a forma mais radical, porque o TS para de funcionar. É como trabalhasse com JS normal. NÃO É MUITO RECOMENDADO

input = 'test'
input = 20
input = []
```

⚠️ **Não recomendado**: perde-se a segurança do TypeScript.

### Tipo `never`

O `never` representa um valor que nunca deve ser atribuído, usado para indicar que algo é impossível.

```
function verification(test: boolean) {
    if (test) {
        console.log("Passou no teste.");
    } else {
        let _check: never;
        return _check; // Erro se tentar atribuir qualquer valor
    }
}
```

Temos outro tipo, não é especificamente para evitar tipagem. mas funciona parecido, ele é o never
O `never` garante que a execução nunca chegue ao ponto de retorno caso a lógica do código esteja correta.
```
function verification(test) {
    if (test) {

    } else {
        let _check: never
        return _check
    }
}
```
O never serve para indicar que a variavel está errada, se tentar atribuir uma string, ou numero ao _check  (never), dará erro, porém podemos fazer o contrário, criar uma váriave e atribuir o _check a ela, ai podemos, e essa variavel nunca vai receber valor nenhum.

---

- O TypeScript melhora a robustez do código, prevenindo erros de tipagem.
- Tuplas são arrays fixos com tipos específicos para cada posição.
- Enums ajudam a organizar constantes de forma legível.
- Podemos flexibilizar a tipagem usando `?`, `unknown`, `any` e `never`.

Esses conceitos são essenciais para escrever um código seguro e escalável em TypeScript.

---

## 12. Criando Tipos

### Tipo Literal

O tipo literal restringe o valor de uma variável a um valor específico.

let literal: "Hello, World!"
let pi: 3.14159

Qualquer variável declarada como const será do tipo literal. Isso significa que seu valor não pode ser alterado.

Os tipos literais são úteis em conjunto com outras técnicas, como união (|), que permite definir múltiplos valores possíveis para uma variável.

let status: "loading" | "success" | "error"
status = "loading" // ✅
status = "error" // ✅
status = "done" // ❌ Erro, pois "done" não está nos valores permitidos

Alias de Tipo (type)

Podemos reutilizar tipos através do type, criando nomes personalizados para eles.

type Status = "loading" | "success" | "error"
let requestStatus: Status = "success"

Isso torna o código mais legível e reutilizável.

## 13. Criando Interfaces

As interfaces são usadas para definir a estrutura de objetos. Elas são semelhantes ao type, mas oferecem funcionalidades adicionais, como herança.
```
interface CelestialBody {
    name: string
    mass: number
}

interface Star extends CelestialBody {
    age: number
    planets: Planet[]
}
```
Aqui, Star herda as propriedades de CelestialBody, garantindo que todas as estrelas terão name e mass, além de age e planets.

---

## 14. Classes e Interfaces

Classes podem implementar interfaces, nesse caso ela cria o que chamamos de contrato, pois obriga a classe a implementar tudo o que foi definido na interface garantindo que sigam um formato específico:
```
class BigAsteroid implements CelestialBody {
    name: string
    mass: number
    constructor(name: string, mass: number) {
        this.name = name
        this.mass = mass
    }
}
```
A principal diferença entre type e interface é que interfaces podem ser estendidas várias vezes sem erro:
```
interface Planet {
    name: string
}
interface Planet {
    mass: number
}
// Agora, Planet tem name e mass
```
Já type não permite essa extensão múltipla.

Um ponto interessante é que, depois que você converte o código TypeScript para JavaScript, as interfaces desaparecem completamente, pois elas existem apenas em tempo de desenvolvimento para garantir a tipagem e não geram nenhum código na versão final em JavaScript. Isso acontece porque o TypeScript é uma ferramenta de desenvolvimento que adiciona segurança e organização ao código, mas no fim das contas, o navegador ou o ambiente de execução só entende JavaScript puro.

---

## 15. Omit e Pick

### Omit
O Omit<T, K> é um utilitário embutido do TypeScript que permite criar um novo tipo baseado em um tipo existente (T), removendo propriedades específicas (K). Ele é útil quando se deseja excluir informações desnecessárias de um tipo, garantindo um modelo mais enxuto e adequado para certos contextos.

Exemplo detalhado:
```
type Person = {
    name: string;
    age: number;
    address: string;
};

// Criando um novo tipo que remove a propriedade "address"
type PersonWithoutAddress = Omit<Person, "address">;

const person: PersonWithoutAddress = {
    name: "João",
    age: 30
};

console.log(person); 
// Saída: { name: "João", age: 30 }
```
Aqui, PersonWithoutAddress possui apenas as propriedades name e age, pois a propriedade "address" foi removida. Se tentássemos adicionar address, o TypeScript geraria um erro:
```
const personError: PersonWithoutAddress = {
    name: "João",
    age: 30,
    address: "Rua XYZ" // Erro: propriedade "address" não existe em "PersonWithoutAddress"
};
```
O Omit é útil em diversas situações, como quando se deseja remover propriedades sensíveis antes de expor um objeto, ou quando um determinado contexto não precisa de todos os dados do tipo original.

### Pick
O Pick<T, K> é o oposto do Omit. Em vez de remover propriedades, ele permite criar um novo tipo contendo apenas as propriedades selecionadas (K). Isso é útil quando queremos trabalhar com um subconjunto de um tipo mais complexo.

Exemplo detalhado:
```
type Person = {
    name: string;
    age: number;
    address: string;
};

// Criando um novo tipo que inclui apenas "name" e "age"
type PersonNameAndAge = Pick<Person, "name" | "age">;

const person: PersonNameAndAge = {
    name: "Maria",
    age: 25
};

console.log(person);
// Saída: { name: "Maria", age: 25 }
```
Se tentássemos incluir address, o TypeScript não permitiria:
```
const personError: PersonNameAndAge = {
    name: "Maria",
    age: 25,
    address: "Avenida ABC" // Erro: "address" não existe em "PersonNameAndAge"
};
```
O Pick é bastante útil para filtrar apenas as informações necessárias em determinadas operações, como ao exibir uma lista de usuários onde só queremos mostrar o nome e a idade, sem precisar carregar todas as propriedades do tipo original.

### Comparação entre Omit e Pick
| Utilitário   | O que faz                                    | Exemplo                                                   |
|-------------|--------------------------------|-----------------------------------------------------------|
| `Omit<T, K>` | Remove propriedades do tipo `T` | `Omit<Person, "address">` resulta em `{ name: string; age: number }` |
| `Pick<T, K>` | Seleciona propriedades específicas do tipo `T` | `Pick<Person, "name" | "age">` resulta em `{ name: string; age: number }` |

Ambos são úteis para trabalhar com tipos mais flexíveis e garantir que os dados manipulados tenham apenas as informações necessárias para cada contexto.

## 16. Módulos (Export e Import)

O TypeScript permite dividir o código em módulos, o que facilita a organização e reutilização do código. Para isso, usamos export e import.

### export default
O export default é uma forma de exportar uma única funcionalidade de um módulo. Ele permite que, ao importar o módulo, não seja necessário usar chaves {} para importar a função, classe ou variável exportada.

Exemplo:
Criando um módulo module.ts com export default:
```
// module.ts
export default function greet() {
    console.log("Hello!")
}
```
Agora, em outro arquivo, podemos importar e usar essa função:
```
// main.ts
import greet from "./module"

greet() // Saída: "Hello!"
```
### Por que usar export default?

Facilita a importação, pois não exige {}.

Indica que o módulo exporta apenas uma funcionalidade principal.

Permite renomear a importação facilmente:
```
import saudacao from "./module"

saudacao() // Funciona mesmo sem usar o nome original 'greet'
```
### export nomeado
Se quisermos exportar várias funcionalidades do mesmo módulo, podemos usar export nomeado.
```
// utils.ts
export function sum(a: number, b: number): number {
    return a + b
}

export function multiply(a: number, b: number): number {
    return a * b
}
```
Para importar:
```
// main.ts
import { sum, multiply } from "./utils"

console.log(sum(2, 3)) // 5
console.log(multiply(2, 3)) // 6
```
Diferente do export default, aqui precisamos usar {} para importar os itens específicos.

### Trabalhando com Bibliotecas de Terceiros
Ao instalar bibliotecas externas, muitas não vêm com suporte nativo para TypeScript. Isso significa que o TypeScript não consegue fornecer autocompletar, validação de tipos ou detectar erros.

Para resolver isso, existem pacotes de definições de tipos, que geralmente seguem o formato @types/nome-da-biblioteca.

Exemplo com lodash
Instalar a biblioteca e seu pacote de tipos:
```
npm install lodash
npm install --save-dev @types/lodash
```
Importar e usar:
```
import _ from "lodash"

const numbers = [1, 2, 3, 4, 5]
const shuffled = _.shuffle(numbers)

console.log(shuffled) // Exemplo: [3, 1, 5, 2, 4]
```
Agora, o TypeScript consegue reconhecer os tipos corretamente, fornecendo sugestões e verificando erros.

### Resumo
- export default é usado para exportar um único item principal.
- export nomeado permite exportar múltiplos itens.
- Para usar bibliotecas externas no TypeScript, é comum instalar pacotes de tipos (@types/...) para obter suporte completo.

## 17. Orientação a Objetos no TypeScript

A **Programação Orientada a Objetos (OOP - Object-Oriented Programming)** é um paradigma baseado na criação de **objetos** que possuem propriedades (atributos) e comportamentos (métodos). No TypeScript, a OOP é amplamente utilizada e aproveita a tipagem estática para tornar o código mais seguro e organizado.

Os quatro pilares da OOP são:
- **Encapsulamento**
- **Herança**
- **Polimorfismo**
- **Abstração**

---

### **Classes e Objetos**

No **JavaScript** (ES6+), já é possível usar classes para criar objetos:

```
// Classe em JavaScript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

const pessoa1 = new Pessoa("Carlos", 30)
pessoa1.apresentar()
```
No TypeScript, a principal diferença é que podemos definir tipos para as propriedades e métodos:
```
// Classe em TypeScript
class Pessoa {
    nome: string
    idade: number

    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

const pessoa1 = new Pessoa("Carlos", 30)
pessoa1.apresentar()
```
✅ Benefícios no TypeScript:

Erros de tipo são detectados em tempo de compilação.

Melhor legibilidade e organização.

### Encapsulamento (Modificadores de Acesso)
O encapsulamento protege os dados internos da classe, restringindo o acesso direto às propriedades. No TypeScript, existem três modificadores de acesso:

| Modificador  | Descrição |
|-------------|-----------|
| **public**   | A propriedade ou método pode ser acessado de qualquer lugar. (Padrão) |
| **private**  | A propriedade ou método só pode ser acessado dentro da própria classe. |
| **protected** | A propriedade ou método pode ser acessado dentro da classe e por classes filhas (herança). |

Exemplo de encapsulamento no TypeScript:
```
class ContaBancaria {
    private saldo: number

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial
    }

    // Método público para depositar dinheiro
    depositar(valor: number): void {
        this.saldo += valor
        console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`)
    }

    // Método privado que só pode ser usado internamente
    private calcularJuros(): number {
        return this.saldo * 0.05
    }

    // Método público para consultar o saldo
    consultarSaldo(): void {
        console.log(`Saldo atual: R$${this.saldo} + Juros: R$${this.calcularJuros()}`)
    }
}

const minhaConta = new ContaBancaria(1000)
minhaConta.depositar(500) 
minhaConta.consultarSaldo() 
// minhaConta.saldo = 10000 // ❌ ERRO: saldo é privado
```
Vantagens do Encapsulamento:
- Protege os dados contra acessos indevidos.
- Evita que o código externo modifique o estado interno da classe de forma errada.
- Permite que a implementação interna seja alterada sem afetar o código externo.

### Como disponibilizar uma propriedade privada com Getters e Setters
Mesmo que uma propriedade seja privada, podemos fornecer acesso controlado a ela através de métodos get e set.

Exemplo usando get e set:
```
class Carro {
    private _velocidade: number = 0

    // Getter para acessar a velocidade (somente leitura)
    get velocidade(): number {
        return this._velocidade
    }

    // Setter para modificar a velocidade (com validação)
    set velocidade(novaVelocidade: number) {
        if (novaVelocidade < 0) {
            console.log("Velocidade não pode ser negativa!")
        } else {
            this._velocidade = novaVelocidade
        }
    }
}

const carro = new Carro()
carro.velocidade = 50  // ✅ Define a velocidade
console.log(carro.velocidade) // 50

carro.velocidade = -10  // ❌ Mensagem: "Velocidade não pode ser negativa!"
```
✅ Benefícios do uso de Getters e Setters:
- Validação de dados antes da modificação.
- Evita acesso direto a propriedades privadas.
- Flexibilidade para mudar a implementação interna sem afetar quem usa a classe.

### Herança (Extends e Super)
A herança permite que uma classe reutilize atributos e métodos de outra classe.
```
class Animal {
    nome: string

    constructor(nome: string) {
        this.nome = nome
    }

    fazerSom(): void {
        console.log("Som genérico de animal")
    }
}

// Classe Cachorro HERDA de Animal
class Cachorro extends Animal {
    raca: string

    constructor(nome: string, raca: string) {
        super(nome) // Chama o construtor da classe base
        this.raca = raca
    }

    fazerSom(): void {
        console.log("Au au!") // Sobrescrevendo o método
    }
}

const dog = new Cachorro("Rex", "Labrador")
dog.fazerSom() // Saída: "Au au!"
```
✅ Benefícios da Herança:
- Reutilização de código sem precisar reescrever as mesmas propriedades/métodos.
- Facilidade de manutenção e extensibilidade.

### Polimorfismo
O polimorfismo permite que uma classe filha sobrescreva métodos da classe pai para modificar seu comportamento.
```
class Forma {
    calcularArea(): number {
        return 0
    }
}

class Circulo extends Forma {
    raio: number

    constructor(raio: number) {
        super()
        this.raio = raio
    }

    calcularArea(): number {
        return Math.PI * this.raio ** 2
    }
}

const circulo = new Circulo(5)
console.log(circulo.calcularArea()) // 78.54
```
### Conclusão
A Orientação a Objetos no TypeScript aproveita a tipagem estática para tornar o código mais seguro e previsível. O encapsulamento protege os dados, enquanto herança e polimorfismo permitem reutilização e flexibilidade.

Resumo dos conceitos:
- Classes definem objetos com propriedades e métodos.
- Encapsulamento protege dados sensíveis (private, protected).
- Getters e Setters permitem acesso seguro a propriedades privadas.
- Herança (extends) reaproveita código entre classes.
- Polimorfismo permite modificar métodos herdados.

---

## 18. GENERICS
Generics são uma poderosa funcionalidade do TypeScript que permitem criar funções, classes ou interfaces que podem trabalhar com qualquer tipo de dado sem perder a segurança de tipos. Isso significa que você pode escrever código mais flexível e reutilizável, permitindo que o tipo de dado seja determinado posteriormente, enquanto ainda mantém o controle de tipo em tempo de compilação.

### Como Funciona?
O uso de generics permite que você defina um tipo variável, que pode ser preenchido com qualquer tipo concreto na hora da chamada da função ou criação da classe. O TypeScript valida os tipos passados, garantindo que você não crie problemas de tipo, mas com maior flexibilidade.

### Exemplo 1: Função Genérica para Clonar uma Nave
O exemplo abaixo usa generics para criar uma função que clona um objeto de uma nave (ship) e altera as propriedades name e pilot.
```
function cloneShip<ShipType extends { name: string, pilot: string }>(ship: ShipType, newName: string, newPilot: string) {
  const newShip = ship
  newShip.name = newName
  newShip.pilot = newPilot
  return newShip
}
```
Aqui, o <ShipType> é um tipo genérico que garante que ship será um objeto que contém as propriedades name e pilot (ambas do tipo string). O tipo ShipType será inferido a partir do valor de ship passado para a função, mantendo a flexibilidade de tipos mas sem perder a validação.

### Exemplo 2: Usando um Tipo de Classe Específico
Podemos usar um tipo mais específico em vez de um tipo genérico direto. No exemplo abaixo, a função cloneShip é feita para trabalhar com qualquer tipo de nave que siga a interface Ship.
```
interface Ship {
  name: string;
  pilot: string;
}

function cloneShip<ShipType extends Ship>(ship: ShipType, newName: string, newPilot: string) {
  const newShip = ship
  newShip.name = newName
  newShip.pilot = newPilot
  return newShip
}
```
Aqui, ShipType está restrito ao tipo Ship, que define que qualquer objeto ship precisa ter pelo menos as propriedades name e pilot. Isso assegura que a função funcionará apenas com objetos que sigam a estrutura dessa interface.

### Usando Generics com useState no React
O React permite o uso de generics para garantir tipos de dados específicos ao usar o hook useState. Ao fazer isso, você especifica qual tipo de dado useState deve armazenar, como mostrado abaixo:
```
const [counter, setCounter] = useState<number>(0)
```
Neste exemplo, o tipo genérico <number> indica que a variável counter deve ser um número, e o TypeScript irá garantir que setCounter só aceite números como valor de entrada.

### Clonando e Sobrescrevendo Tipos
Você pode clonar ou sobrescrever tipos na chamada da função. Ao passar tipos específicos, você pode garantir que o tipo do valor manipulado seja correto:
```
const newShip = cloneShip({ name: "Falcon", pilot: "Han" }, "Millennium", "Chewbacca")
```
Aqui, o cloneShip assume que o tipo do objeto passado tem a estrutura de { name: string, pilot: string }, e qualquer tipo que passe essa estrutura será aceito. O tipo ShipType será automaticamente inferido como { name: string, pilot: string }.

## 19. DECORATORS
Decorators são uma funcionalidade avançada de TypeScript (e JavaScript, quando combinado com TypeScript), que permite adicionar ou modificar o comportamento de classes, métodos ou propriedades, sem alterar diretamente o código original. Eles permitem a modificação de comportamento de código de maneira mais declarativa e reutilizável.

Decorators podem ser usados para adicionar novos comportamentos a métodos, propriedades ou até mesmo classes inteiras. Um decorator é basicamente uma função que recebe o alvo (classe, método, etc.) e pode fazer algo com ele (como adicionar metadados ou alterar o comportamento).

### Exemplo de Decorator Simples
Aqui está um exemplo simples de um decorator de método que registra a execução de um método:
```
function logExecution(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Método ${key} foi chamado com argumentos: ${args}`);
    return originalMethod.apply(this, args);
  };
}

class SpaceShip {
  @logExecution
  launch(destination: string) {
    console.log(`Lançando para ${destination}`);
  }
}

const ship = new SpaceShip();
ship.launch("Lua");
```
Neste exemplo, o decorator logExecution modifica o comportamento do método launch para registrar quando ele é chamado e com quais argumentos. Ao usar o @logExecution, você consegue adicionar esse comportamento ao método sem alterar seu código diretamente.

### Configurando Decorators no TypeScript
Para usar decorators em TypeScript, você precisa habilitar uma opção no seu arquivo de configuração tsconfig.json, como mostrado abaixo:
```
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```
Isso permite que você use a sintaxe de decorators no seu código TypeScript.

### Modificando o Comportamento de Funções com Decorators
Além de adicionar funcionalidades, os decorators também podem modificar o comportamento de métodos e propriedades. Por exemplo, você pode criar um decorator para garantir que um método só seja executado em determinadas condições ou adicionar log de erros. O exemplo acima já mostra como um decorator pode alterar a execução de um método, mas eles também podem ser usados para verificar dados antes de permitir a execução.

### Caso Realista de Utilização de Decorators
Imagine que você tem uma classe que precisa verificar se o usuário tem permissões adequadas para executar certas ações. Você pode usar um decorator para verificar as permissões antes de executar o método, como no exemplo abaixo:
```
function requiresPermission(permission: string) {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      if (this.permissions.includes(permission)) {
        return originalMethod.apply(this, args);
      } else {
        console.log("Permissão negada");
      }
    };
  };
}

class User {
  permissions: string[] = ["admin"];

  @requiresPermission("admin")
  deleteAccount() {
    console.log("Conta deletada!");
  }
}

const user = new User();
user.deleteAccount(); // Conta deletada!
```
No exemplo acima, o @requiresPermission verifica se o usuário possui a permissão necessária antes de permitir que o método deleteAccount seja executado. Se o usuário não tiver permissão, o método não será executado e uma mensagem de erro será exibida.

### Conclusão
Decorators são extremamente úteis para modificar o comportamento de classes, métodos ou propriedades de maneira reutilizável, sem precisar alterar diretamente o código original. Eles são amplamente usados para adicionar funcionalidades como logging, verificação de permissões, cache, entre outros.

