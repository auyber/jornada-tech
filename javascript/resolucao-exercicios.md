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

## Índice

- [01. Operadores Lógicos Respostas](#01-operadores-lógicos-respostas)
- [02. Estruturas Condicionais If, Else, Else If Respostas](#02-estruturas-condicionais-if-else-else-if-respostas)
- [03. Estruturas Condicionais: Switch Respostas](#03-estruturas-condicionais-switch-respostas)
- [04. Estruturas de Repetição Respostas](#04-estruturas-de-repetição-respostas)
- [05. Estruturas de Dados Respostas](#05-estruturas-de-dados-respostas)
- [06. Arrays Métodos Respostas](#06-arrays-métodos-respostas)
- [07. Arrays Iteração Respostas](#07-arrays-iteração-respostas)
- [08. Arrays Bidimensionais Respostas](#08-arrays-bidimensionais-respostas)
- [09. `flat` e `map` em Arrays Bidimensionais Respostas](#09-flat-e-map-em-arrays-bidimensionais-respostas)
- [10. Arrays Bidimensionais for, reduce e filter Respostas](#10-arrays-bidimensionais-for-reduce-e-filter-respostas)
- [11. Arrays Bidimensionais every, sort, combinação e busca com indices Respostas](#11-arrays-bidimensionais-every-sort-combinação-e-busca-com-indices-respostas)
- [12. Objetos manipulação e notação Respostas](#12-objetos-manipulação-e-notação-respostas)
- [13. Objetos, new, this, keys, values, entries, herança e prototipagem Respostas](#13-objetos-new-this-keys-values-entries-herança-e-prototipagem-respostas)
- [14. Funções, Parâmetros Padrão, Rest Parameter e Desestruturação de Parâmetros Respostas](#14-funções-parâmetros-padrão-rest-parameter-e-desestruturação-de-parâmetros-respostas)
- [15. Function, retorno, arrow, multiplos valores e antecipado Respostas](#15-function-retorno-arrow-multiplos-valores-e-antecipado-respostas)
- [16. Escopo Respostas](#16-escopo-respostas)
- [17. Métodos de objetos Respostas](#17-métodos-de-objetos-respostas)
- [18. Funções Recursivas Respostas](#18-funções-recursivas-respostas)
- [19. Funções Anônimas e Callback Respostas](#19-funções-anônimas-e-callback-respostas)
- [20. Arrow Functions Respostas](#20-arrow-functions-respostas)
- [21. IIFE (Immediately Invoked Function Expression) Respostas](#21-iife-immediately-invoked-function-expression-respostas)
- [22. High-order Functions Respostas](#22-high-order-functions-respostas)
- [23. Exercícios sobre High-order Functions e Arrays](#23-exercícios-sobre-high-order-functions-e-arrays)


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
function verificarAcesso(usuario) {
  // Verificando os critérios
  const maiorDeIdadeELogado = usuario.idade >= 18 && usuario.estaLogado;
  const contaAtivaOuPermissao = usuario.contaAtiva || usuario.permissoes.includes("admin") || usuario.permissoes.includes("editor");

  // Combinação dos critérios
  if (maiorDeIdadeELogado && contaAtivaOuPermissao) {
    return "Acesso concedido!";
  } else {
    return "Acesso negado!";
  }
}

// Exemplo de uso
const usuario = {
  idade: 20,
  estaLogado: true,
  contaAtiva: false,
  permissoes: ["editor"] // Pode incluir "admin", "editor" ou outros valores
};

console.log(verificarAcesso(usuario)); // Saída: "Acesso concedido!"

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
function validarRegistro(usuario) {
  // Validando a idade
  const idadeValida = usuario.idade >= 18 && usuario.idade <= 30;

  // Validando o nome
  const nomeValido = usuario.nome.trim() !== "";

  // Validando a senha
  const senhaValida = usuario.senha.length >= 8 && /\d/.test(usuario.senha) && /\W/.test(usuario.senha);

  // Verificando se todas as validações passaram
  if (idadeValida && nomeValido && senhaValida) {
    return "Registro válido!";
  } else {
    return "Falha no registro!";
  }
}

// Exemplo de uso
const usuario = {
  idade: 25,
  nome: "João",
  senha: "senha@123"
};

console.log(validarRegistro(usuario)); // Saída: "Registro válido!"

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

## 02. Estruturas Condicionais If, Else, Else If Respostas

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

## 03. Estruturas Condicionais: Switch Respostas

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

## 04. Estruturas de Repetição Respostas

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

## 05. Estruturas de Dados Respostas

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

01. **Implementando uma Pilha (Stack)**
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
02. **Implementando uma Fila (Queue)**
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
03. **Buscando um Elemento em uma Lista**
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
04. **Implementando um Dicionário (Mapa)**
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

## 06. Arrays Métodos Respostas

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
let animais = ["gato", "cachorro", "pássaro", "hamster"];

// Encontrar o índice do animal "pássaro"
let indice = animais.indexOf("pássaro");

console.log(indice); // Saída: 2

```
**Exercício 4**:
```
let cores = ["azul", "verde", "amarelo", "vermelho"];

// Encontrar o índice da cor "vermelho"
let indice = cores.indexOf("vermelho");

console.log(indice); // Saída: 3
console.log(cores[indice]); // Saída: vermelho
```

### Exercícios Difíceis:

**Exercício 5**:
```
let pessoas = ["João", "Maria", "Pedro", "Ana"];

// Encontrar o índice de "Maria"
let indice = pessoas.indexOf("Maria");

// Substituir "Maria" por "Paula"
if (indice !== -1) {
    pessoas[indice] = "Paula";
}

console.log(pessoas); // Saída: ["João", "Paula", "Pedro", "Ana"]
```
**Exercício 6**:
```
let produtos = [
    {nome: "Camiseta", preco: 29.90},
    {nome: "Calça", preco: 79.90}
];

// Encontrar o índice do produto "Calça"
let indice = produtos.findIndex(function(produto) {
    return produto.nome === "Calça";
});

if (indice !== -1) {
    console.log("Índice: " + indice); // Saída: 1
    console.log("Produto: ", produtos[indice]); // Saída: {nome: "Calça", preco: 79.90}
} else {
    console.log("Produto não encontrado.");
}
```

## 6. ```slice()```

### Exercícios Fáceis:

**Exercício 1**:
```
let frutas = ["maçã", "banana", "laranja", "manga"];
let primeirasFrutas = frutas.slice(0, 2); // Pega os dois primeiros itens (índices 0 e 1)
console.log(primeirasFrutas); // Saída: ["maçã", "banana"]
```
**Exercício 2**:
```
let numeros = [1, 2, 3, 4, 5, 6];
let numerosSelecionados = numeros.slice(2, 5); // Pega os itens dos índices 2 a 4
console.log(numerosSelecionados); // Saída: [3, 4, 5]
```

### Exercícios Médios:

**Exercício 3**:
```
let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre"];
let ultimasCidades = cidades.slice(-2); // Pega os dois últimos itens
console.log(ultimasCidades); // Saída: ["Belo Horizonte", "Porto Alegre"]
```
**Exercício 4**:
```
let produtos = ["Camiseta", "Calça", "Tênis", "Jaqueta"];
let produtosSelecionados = produtos.slice(1, 4); // Pega os itens dos índices 1, 2 e 3
console.log(produtosSelecionados); // Saída: ["Calça", "Tênis", "Jaqueta"]
```

### Exercícios Difíceis:

**Exercício 5**:
```
let alunos = ["Ana", "Carlos", "Beatriz", "Davi", "Eduardo", "Felipe"];
let alunosSelecionados = alunos.slice(2, 5); // Pega os itens dos índices 2 a 4
console.log(alunosSelecionados); // Saída: ["Beatriz", "Davi", "Eduardo"]
```
**Exercício 6**:
```
let livros = ["O Hobbit", "1984", "Dom Quixote", "A Guerra dos Tronos", "Moby Dick"];
let livrosSelecionados = livros.slice(1, 4); // Pega os itens dos índices 1 a 3
console.log(livrosSelecionados); // Saída: ["1984", "Dom Quixote", "A Guerra dos Tronos"]
```

## 7. ```splice()```

### Exercícios Fáceis:

**Exercício 1**:
```
let frutas = ["maçã", "banana", "laranja"];
frutas.splice(1, 1); // Remove 1 elemento a partir do índice 1 ("banana")
console.log(frutas); // Saída: ["maçã", "laranja"]
```
**Exercício 2**:
```
let numeros = [10, 20, 30, 40];
numeros.splice(1, 1); // Remove 1 elemento a partir do índice 1 (20)
console.log(numeros); // Saída: [10, 30, 40]
```

### Exercícios Médios:

**Exercício 3**:
```
let cores = ["vermelho", "azul", "verde", "amarelo"];
cores.splice(2, 1, "preto"); // Remove 1 elemento no índice 2 ("verde") e adiciona "preto"
console.log(cores); // Saída: ["vermelho", "azul", "preto", "amarelo"]
```
**Exercício 4**:
```
let alunos = ["Ana", "Carlos", "Beatriz", "Davi"];
alunos.splice(1, 1, "José"); // Remove "Carlos" no índice 1 e adiciona "José"
console.log(alunos); // Saída: ["Ana", "José", "Beatriz", "Davi"]
```

### Exercícios Difíceis:

**Exercício 5**:
```
let times = ["Flamengo", "São Paulo", "Palmeiras", "Grêmio"];
times.splice(0, 2, "Atlético", "Vasco"); // Remove os dois primeiros e adiciona "Atlético" e "Vasco"
console.log(times); // Saída: ["Atlético", "Vasco", "Palmeiras", "Grêmio"]
```
**Exercício 6**:
```
let produtos = [
    {nome: "Camiseta", preco: 29.90}, 
    {nome: "Calça", preco: 79.90}, 
    {nome: "Tênis", preco: 99.90}
];
produtos.splice(1, 1, {nome: "Jaqueta", preco: 149.90}); // Substitui o item no índice 1 ("Calça")
console.log(produtos); 
// Saída: [
//   {nome: "Camiseta", preco: 29.90}, 
//   {nome: "Jaqueta", preco: 149.90}, 
//   {nome: "Tênis", preco: 99.90}
// ]
```
---

## 7. ```includes()```

### Exercícios Fáceis:

**Exercício 1**:
```
let frutas = ["maçã", "banana", "laranja"];
let contemBanana = frutas.includes("banana");
console.log(contemBanana); // Saída: true
```
**Exercício 2**:
```
let numeros = [1, 2, 3, 4];
let contemTres = numeros.includes(3);
console.log(contemTres); // Saída: true
```

### Exercícios Médios:

**Exercício 3**:
```
let alunos = ["Ana", "Carlos", "Beatriz", "Davi"];
let contemCarlos = alunos.includes("Carlos");
console.log(contemCarlos); // Saída: true
```
**Exercício 4**:
```
let paises = ["Brasil", "Argentina", "Chile"];
let contemPeru = paises.includes("Peru");
console.log(contemPeru); // Saída: false
```

### Exercícios Difíceis:

**Exercício 5**:
```
let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre"];
let contemManaus = cidades.includes("Manaus");
console.log(contemManaus); // Saída: false
```
**Exercício 6**:
```
let carros = ["Fusca", "Gol", "Civic", "Opala"];
let contemCivic = carros.includes("Civic");
let contemUno = carros.includes("Uno");

console.log("Civic está no array? " + contemCivic); // Saída: true
console.log("Uno está no array? " + contemUno);     // Saída: false
```

---

## 07. Arrays Iteração respostas

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

## 08. Arrays Bidimensionais Respostas

### Nível Fácil

1. **Soma de Elementos**  
   ```
   function somaElementos(matriz) {
       let soma = 0;
       for (let linha of matriz) {
           for (let elemento of linha) {
               soma += elemento;
           }
       }
       return soma;
   }
   ```
2. **Linha com Maior Soma**
```
function linhaMaiorSoma(matriz) {
    let maiorSoma = 0;
    let indiceLinha = 0;
    for (let i = 0; i < matriz.length; i++) {
        let somaLinha = matriz[i].reduce((a, b) => a + b, 0);
        if (somaLinha > maiorSoma) {
            maiorSoma = somaLinha;
            indiceLinha = i;
        }
    }
    return indiceLinha;
}
```
3. **Contar Números Pares**
```
function contarNumerosPares(matriz) {
    let contador = 0;
    for (let linha of matriz) {
        for (let elemento of linha) {
            if (elemento % 2 === 0) {
                contador++;
            }
        }
    }
    return contador;
}
```
4. **Transposição Simples**
```
function transporMatriz2x2(matriz) {
    return [
        [matriz[0][0], matriz[1][0]],
        [matriz[0][1], matriz[1][1]]
    ];
}
```
5. **Diagonal Principal**
```
function diagonalPrincipal(matriz) {
    let diagonal = [];
    for (let i = 0; i < matriz.length; i++) {
        diagonal.push(matriz[i][i]);
    }
    return diagonal;
}
```

### Nível Médio

1. **Verificar Simetria**
```
function verificarSimetria(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (matriz[i][j] !== matriz[j][i]) {
                return false;
            }
        }
    }
    return true;
}
```
2. **Multiplicação por Escalar**
```
function multiplicarPorEscalar(matriz, escalar) {
    return matriz.map(linha => linha.map(elemento => elemento * escalar));
}
```
3. **Busca de Elemento**
```
function buscarElemento(matriz, numero) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === numero) {
                return { linha: i, coluna: j };
            }
        }
    }
    return null;
}
```
4. **Somar Matrizes**
```
function somarMatrizes(matriz1, matriz2) {
    return matriz1.map((linha, i) => linha.map((elemento, j) => elemento + matriz2[i][j]));
}
```
5. **Menor e Maior Elemento**
```
function menorMaiorElemento(matriz) {
    let menor = Infinity, maior = -Infinity;
    for (let linha of matriz) {
        for (let elemento of linha) {
            if (elemento < menor) menor = elemento;
            if (elemento > maior) maior = elemento;
        }
    }
    return { menor, maior };
}
```

### Nível Difícil

1. **Produto de Matrizes**
```
function produtoMatrizes(matriz1, matriz2) {
    let resultado = Array(matriz1.length).fill(0).map(() => Array(matriz2[0].length).fill(0));
    for (let i = 0; i < matriz1.length; i++) {
        for (let j = 0; j < matriz2[0].length; j++) {
            for (let k = 0; k < matriz2.length; k++) {
                resultado[i][j] += matriz1[i][k] * matriz2[k][j];
            }
        }
    }
    return resultado;
}
```
2. **Caminho da Soma Máxima**
```
function caminhoSomaMaxima(matriz) {
    let linhas = matriz.length;
    let colunas = matriz[0].length;
    let dp = Array.from({ length: linhas }, () => Array(colunas).fill(0));

    dp[0][0] = matriz[0][0];
    for (let i = 1; i < linhas; i++) dp[i][0] = dp[i - 1][0] + matriz[i][0];
    for (let j = 1; j < colunas; j++) dp[0][j] = dp[0][j - 1] + matriz[0][j];

    for (let i = 1; i < linhas; i++) {
        for (let j = 1; j < colunas; j++) {
            dp[i][j] = matriz[i][j] + Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return dp[linhas - 1][colunas - 1];
}
```
3. **Zig-Zag Bidimensional**
```
function zigZagMatriz(matriz) {
    let resultado = [];
    for (let i = 0; i < matriz.length; i++) {
        if (i % 2 === 0) {
            resultado.push(...matriz[i]);
        } else {
            resultado.push(...matriz[i].reverse());
        }
    }
    return resultado;
}
```
4. **Rotação de Matriz**
```
function rotacao90Graus(matriz) {
    let n = matriz.length;
    let resultado = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            resultado[j][n - i - 1] = matriz[i][j];
        }
    }
    return resultado;
}
```
5. **Verificar Quadrado Mágico**
```
function verificarQuadradoMagico(matriz) {
    let n = matriz.length;
    let somaEsperada = matriz[0].reduce((a, b) => a + b, 0);

    for (let i = 0; i < n; i++) {
        if (matriz[i].reduce((a, b) => a + b, 0) !== somaEsperada) return false;
        if (matriz.map(linha => linha[i]).reduce((a, b) => a + b, 0) !== somaEsperada) return false;
    }

    let diagonal1 = 0, diagonal2 = 0;
    for (let i = 0; i < n; i++) {
        diagonal1 += matriz[i][i];
        diagonal2 += matriz[i][n - i - 1];
    }

    return diagonal1 === somaEsperada && diagonal2 === somaEsperada;
}
```

---

##  09. `flat` e `map` em Arrays Bidimensionais Respostas

## Focados em `flat`

### Nível Fácil

1. **Flattening Simples**  
   ```
   function flattenArray(matriz) {
       return matriz.flat();
   }
   ```
2. **Soma dos Elementos Flattened**
```
function somaFlatten(matriz) {
    return matriz.flat().reduce((soma, valor) => soma + valor, 0);
}
```

### Nível Médio

3. **Flattening com Nível Específico**
```
function flattenTo2D(matriz) {
    return matriz.flat(1);
}
```
4. **Filtrar e Flatten**
```
function filtrarFlatten(matriz) {
    return matriz.flat().filter(valor => valor > 10);
}
```

### Nível Difícil

5. **Flatten e Frequência de Valores**
```
function frequenciaValores(matriz) {
    const flattened = matriz.flat();
    return flattened.reduce((frequencia, valor) => {
        frequencia[valor] = (frequencia[valor] || 0) + 1;
        return frequencia;
    }, {});
}
```
6. **Flatten e Operações Matemáticas**
```
function mediaFlatten(matriz) {
    const flattened = matriz.flat();
    const soma = flattened.reduce((soma, valor) => soma + valor, 0);
    return soma / flattened.length;
}
```
## Focados em ```map```

### Nível Fácil

1. **Dobrar Valores**
```
function dobrarValores(matriz) {
    return matriz.map(linha => linha.map(valor => valor * 2));
}
```
2. **Adicionar Índices**
```
function adicionarIndices(matriz) {
    return matriz.map((linha, i) => linha.map(valor => valor + i));
}
```

### Nível Médio

3. **Strings com Comprimento**
```
function comprimentoStrings(matriz) {
    return matriz.map(linha => linha.map(str => str.length));
}
```
4. **Matriz Transposta com Map**
```
function transporMatriz(matriz) {
    return matriz[0].map((_, coluna) => matriz.map(linha => linha[coluna]));
}
```

### Nível Difícil

5. **Map e Transformação Condicional**
```
function transformarNegativos(matriz) {
    return matriz.map(linha => linha.map(valor => (valor < 0 ? -valor : valor)));
}
```
6. **Map para Criar Objetos**
```
function criarObjetos(matriz) {
    return matriz.map((linha, i) => 
        linha.map((valor, j) => ({ linha: i, coluna: j, valor }))
    );
}
```

---

## 10. Arrays Bidimensionais for, reduce e filter respostas

## Respostas: `for` e `forEach`

### Nível Fácil

1. **Contar Elementos**
   ```
   function contarElementos(matriz) {
       let contador = 0;
       for (let i = 0; i < matriz.length; i++) {
           for (let j = 0; j < matriz[i].length; j++) {
               contador++;
           }
       }
       return contador;
   }
   ```
2. **Exibir Todos os Valores**
```
function exibirValores(matriz) {
    matriz.forEach(linha => {
        linha.forEach(valor => console.log(valor));
    });
}
```

### Nível Médio

3. **Somar Elementos de Cada Linha**
```
function somaPorLinha(matriz) {
    const resultado = [];
    for (let i = 0; i < matriz.length; i++) {
        let soma = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
        resultado.push(soma);
    }
    return resultado;
}
```
4. **Multiplicar Todos os Valores por 2**
```
function multiplicarPorDois(matriz) {
    matriz.forEach((linha, i) => {
        linha.forEach((valor, j) => {
            matriz[i][j] = valor * 2;
        });
    });
    return matriz;
}
```

### Nível Difícil

5. **Encontrar o Maior Valor e sua Posição**
```
function encontrarMaior(matriz) {
    let maior = -Infinity;
    let posicao = { linha: -1, coluna: -1 };

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > maior) {
                maior = matriz[i][j];
                posicao = { linha: i, coluna: j };
            }
        }
    }
    return { valor: maior, ...posicao };
}
```
6. **Gerar Transposta Manualmente**
```
function transposta(matriz) {
    const linhas = matriz.length;
    const colunas = matriz[0].length;
    const resultado = Array.from({ length: colunas }, () => Array(linhas).fill(0));

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            resultado[j][i] = matriz[i][j];
        }
    }
    return resultado;
}
```

## Respostas: ```reduce```

### Nível Fácil

1. **Soma Total de Elementos**
```
function somaTotal(matriz) {
    return matriz.reduce((acc, linha) => acc + linha.reduce((subAcc, num) => subAcc + num, 0), 0);
}
```
2. **Concatenar Linhas**
```
function concatenarLinhas(matriz) {
    return matriz.reduce((acc, linha) => acc.concat(linha), []);
}
```

### Nível Médio

3. **Calcular Frequência de Elementos**
```
function frequenciaElementos(matriz) {
    return matriz.reduce((acc, linha) => {
        linha.forEach(valor => {
            acc[valor] = (acc[valor] || 0) + 1;
        });
        return acc;
    }, {});
}
```
4. **Soma Condicional**
```
function somaPares(matriz) {
    return matriz.reduce((acc, linha) => 
        acc + linha.reduce((subAcc, num) => (num % 2 === 0 ? subAcc + num : subAcc), 0), 0);
}
```

### Nível Difícil

5. **Agrupar Valores por Paridade**
```
function agruparPorParidade(matriz) {
    return matriz.reduce((acc, linha) => {
        linha.forEach(valor => {
            if (valor % 2 === 0) acc.pares.push(valor);
            else acc.impares.push(valor);
        });
        return acc;
    }, { pares: [], impares: [] });
}
```
6. **Calcular a Média de Cada Linha**
```
function mediaPorLinha(matriz) {
    return matriz.map(linha => 
        linha.reduce((acc, num) => acc + num, 0) / linha.length);
}
```

## Respostas: ```filter```

### Nível Fácil

1. **Filtrar Números Maiores que 10**
```
function filtrarMaiores(matriz) {
    return matriz.flat().filter(valor => valor > 10);
}
```
2. **Filtrar Linhas com um Valor Específico**
```
function filtrarLinhas(matriz, valor) {
    return matriz.filter(linha => linha.includes(valor));
}
```

### Nível Médio

3. **Remover Valores Negativos**
```
function removerNegativos(matriz) {
    return matriz.map(linha => linha.filter(valor => valor >= 0));
}
```
4. **Filtrar e Flatten**
```
function filtrarEFlatten(matriz) {
    return matriz.flat().filter(valor => valor > 5);
}
```
### Nível Difícil

5. **Filtrar e Ordenar Linhas por Soma**
```
function filtrarEOrdenar(matriz, limite) {
    return matriz
        .filter(linha => linha.reduce((acc, num) => acc + num, 0) > limite)
        .sort((a, b) => a.reduce((acc, num) => acc + num, 0) - b.reduce((acc, num) => acc + num, 0));
}
```
6. **Encontrar Linhas com Todos os Valores Pares**
```
function filtrarLinhasPares(matriz) {
    return matriz.filter(linha => linha.every(valor => valor % 2 === 0));
}
```

---

## 11. Arrays Bidimensionais every, sort, combinação e busca com indices Respostas

## Respostas sobre `every` ou `some`

### Fáceis

1. **Verifique se todos os números em um array são maiores que 10.**
   ```
   const numbers = [12, 15, 18, 20];
   const result = numbers.every(num => num > 10);
   console.log(result); // true
   ```
2. **Verifique se pelo menos um número é maior que 100.**
```
const numbers = [5, 8, 120, 40];
const result = numbers.some(num => num > 100);
console.log(result); // true
```

### Médios

3. **Verifique se todos os elementos de um array de strings possuem mais de 3 caracteres.**
```
const fruits = ["banana", "maçã", "laranja", "kiwi"];
const result = fruits.every(fruit => fruit.length > 3);
console.log(result); // true
```
4. **Verifique se pelo menos um número no array é divisível por 5.**
```
const numbers = [2, 8, 15, 30, 4];
const result = numbers.some(num => num % 5 === 0);
console.log(result); // true
```

### Difíceis

5. **Verifique se todos os valores de um array de objetos possuem uma propriedade active como true.**
```
const users = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: true },
  { name: 'Charlie', active: true }
];
const result = users.every(user => user.active === true);
console.log(result); // true
```

6. **Verifique se pelo menos um número em um array de arrays é negativo.**
```
const numbers = [[1, 2], [3, -4], [5, 6]];
const result = numbers.some(subArray => subArray.some(num => num < 0));
console.log(result); // true
```

## Respostas sobre ```sort```

### Fáceis

1. **Ordene um array de números em ordem crescente.**
```
const numbers = [5, 3, 8, 1, 2];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 5, 8]
```
2. **Ordene um array de números em ordem decrescente.**
```
const numbers = [12, 9, 15, 4, 7];
numbers.sort((a, b) => b - a);
console.log(numbers); // [15, 12, 9, 7, 4]
```

### Médios

3. **Ordene um array de strings em ordem alfabética.**
```
const fruits = ["banana", "maçã", "laranja", "kiwi"];
fruits.sort();
console.log(fruits); // ["banana", "kiwi", "laranja", "maçã"]
```
4. **Ordene um array de objetos pelo valor de uma propriedade numérica.**
```
const products = [
  { name: 'Apple', price: 5 },
  { name: 'Banana', price: 2 },
  { name: 'Orange', price: 3 }
];
products.sort((a, b) => a.price - b.price);
console.log(products); 
// [{ name: 'Banana', price: 2 }, { name: 'Orange', price: 3 }, { name: 'Apple', price: 5 }]
```

### Difíceis

5. **Ordene um array de objetos com base em uma propriedade de data.**
```
const events = [
  { name: 'Event 1', date: '2022-12-25' },
  { name: 'Event 2', date: '2023-01-15' },
  { name: 'Event 3', date: '2022-11-01' }
];
events.sort((a, b) => new Date(a.date) - new Date(b.date));
console.log(events);
// [{ name: 'Event 3', date: '2022-11-01' }, { name: 'Event 1', date: '2022-12-25' }, { name: 'Event 2', date: '2023-01-15' }]
```
6. **Ordene um array de objetos de acordo com a diferença entre duas propriedades numéricas.**
```
const cars = [
  { name: 'Car A', speed: 120, weight: 1000 },
  { name: 'Car B', speed: 150, weight: 1200 },
  { name: 'Car C', speed: 180, weight: 800 }
];
cars.sort((a, b) => (a.speed - a.weight) - (b.speed - b.weight));
console.log(cars);
// [{ name: 'Car C', speed: 180, weight: 800 }, { name: 'Car A', speed: 120, weight: 1000 }, { name: 'Car B', speed: 150, weight: 1200 }]
```

## Respostas sobre Combinação com Estruturas Avançadas

### Fáceis

1. **Use map para dobrar todos os valores de um array.**
```
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```
2. **Use filter para criar um novo array com apenas os números pares.**
```
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]
```

### Médios

3. **Crie um novo array com o quadrado de cada número usando map.**
```
const numbers = [2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers); // [4, 9, 16, 25]
```
4. **Use reduce para somar todos os valores de um array.**
```
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

### Difíceis

5. **Crie um novo array com o dobro dos números positivos e o quadrado dos negativos, utilizando map e filter.**
```
const numbers = [2, -3, 4, -5];
const transformed = numbers.filter(num => num > 0)
  .map(num => num * 2)
  .concat(numbers.filter(num => num < 0).map(num => num ** 2));
console.log(transformed); // [4, 8, 16, 25]
```
6. **Use reduce para concatenar todos os elementos de um array de strings.**
```
const words = ["Olá", "mundo", "!"];
const concatenated = words.reduce((acc, word) => acc + word, "");
console.log(concatenated); // "Olá mundo!"
```

## Respostas sobre Busca de Elementos com Índices

### Fáceis

1. **Encontre o índice de um número em um array.**
```
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
console.log(index); // 2
```
2. **Verifique se um valor existe no array utilizando includes e obtenha o índice.**
```
const numbers = [5, 8, 12, 15];
const exists = numbers.includes(8);
const index = numbers.indexOf(8);
console.log(exists); // true
console.log(index); // 1
```

### Médios

3. **Encontre o índice de um elemento em um array de objetos.**
```
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
const index = users.findIndex(user => user.name === 'Bob');
console.log(index); // 1
```
4. **Encontre o índice do primeiro número maior que 100.**
```
const numbers = [50, 100, 150, 200];
const index = numbers.findIndex(num => num > 100);
console.log(index); // 2
```

### Difíceis

5. **Encontre o índice do elemento com o maior valor em um array de objetos.**
```
const products = [
  { name: 'Apple', price: 10 },
  { name: 'Banana', price: 5 },
  { name: 'Orange', price: 12 }
];
const index = products.reduce((maxIndex, product, currentIndex, array) => 
  array[maxIndex].price > product.price ? maxIndex : currentIndex, 0);
console.log(index); // 2 (Orange)
```
6. **Encontre o índice do primeiro número negativo em um array de números.**
```
const numbers = [3, 5, -4, 8, -1];
const index = numbers.findIndex(num => num < 0);
console.log(index); // 2
```

---

## 12. Objetos manipulação e notação Respostas

## Criação e Manipulação de Objetos Respostas

### Fáceis

1. **Crie um objeto `carro` com as propriedades `marca`, `modelo` e `ano` e exiba-as no console.**

```
const carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2020
};

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);
```
2. **Adicione uma nova propriedade cor ao objeto carro e exiba o objeto completo no console.**
```
carro.cor = 'preto';
console.log(carro);
```

### Médios

3. **Crie um objeto pessoa com as propriedades nome, idade e cidade. Depois, altere a propriedade idade e adicione uma nova propriedade profissão. Exiba o objeto no console.**
```
const pessoa = {
  nome: 'João',
  idade: 25,
  cidade: 'São Paulo'
};

pessoa.idade = 26;
pessoa.profissao = 'Programador';
console.log(pessoa);
```
4. **Crie um objeto livro com as propriedades titulo, autor, e ano. Em seguida, modifique o valor de ano e remova a propriedade autor. Exiba o objeto no console.**
```
const livro = {
  titulo: 'O Alquimista',
  autor: 'Paulo Coelho',
  ano: 1988
};

livro.ano = 1990;
delete livro.autor;
console.log(livro);
```
### Difíceis

5. **Crie um objeto produto com as propriedades nome, preco e estoque. Depois, adicione uma propriedade desconto que será 10% do preço, e remova a propriedade estoque. Exiba o objeto completo no console.**
```
const produto = {
  nome: 'Notebook',
  preco: 2000,
  estoque: 10
};

produto.desconto = produto.preco * 0.1;
delete produto.estoque;
console.log(produto);
```
6. **Crie um objeto cliente com as propriedades nome, email, e telefone. Adicione uma propriedade endereco, que será um objeto com rua, numero, e cidade. Exiba o objeto completo no console.**
```
const cliente = {
  nome: 'Maria',
  email: 'maria@gmail.com',
  telefone: '123456789'
};

cliente.endereco = {
  rua: 'Rua A',
  numero: 123,
  cidade: 'Curitiba'
};

console.log(cliente);
```

## Respostas: Notação Literal e Construtor Object

### Fáceis

1. **Crie um objeto carro utilizando a notação literal e exiba suas propriedades.**
```
const carro = {
  marca: 'Honda',
  modelo: 'Civic',
  ano: 2022
};

console.log(carro);
```
2. **Crie um objeto pessoa utilizando o construtor Object() e exiba suas propriedades.**
```
const pessoa = new Object();
pessoa.nome = 'Carlos';
pessoa.idade = 30;
pessoa.cidade = 'Rio de Janeiro';

console.log(pessoa);
```

### Médios

3. **Crie um objeto aluno utilizando a notação literal, com as propriedades nome, idade, e curso. Depois, adicione uma nova propriedade notaFinal utilizando o construtor Object(). Exiba o objeto completo no console.**
```
const aluno = {
  nome: 'Ana',
  idade: 22,
  curso: 'Engenharia'
};

const alunoObj = new Object();
alunoObj.notaFinal = 8.5;

console.log({...aluno, ...alunoObj});
```
4. **Crie um objeto livro utilizando o construtor Object(), com as propriedades titulo e autor. Em seguida, adicione uma nova propriedade ano com a notação literal. Exiba o objeto completo no console.**
```
const livro = new Object();
livro.titulo = '1984';
livro.autor = 'George Orwell';
livro.ano = 1949;

console.log(livro);
```

### Difíceis

5. **Crie um objeto produto utilizando o construtor Object() com as propriedades nome, preco, e categoria. Depois, altere o valor de preco usando a notação literal e remova a propriedade categoria. Exiba o objeto completo no console.
```
const produto = new Object();
produto.nome = 'Celular';
produto.preco = 1000;
produto.categoria = 'Eletrônicos';

produto.preco = 900;
delete produto.categoria;

console.log(produto);
```
6. **Crie um objeto evento utilizando o construtor Object() e adicione as propriedades nome, data, e local. Em seguida, altere o valor de local com a notação literal e adicione a propriedade descricao. Exiba o objeto completo no console.**
```
const evento = new Object();
evento.nome = 'Conferência de Tecnologia';
evento.data = '2023-05-15';
evento.local = 'São Paulo';

evento.local = 'Rio de Janeiro';
evento.descricao = 'Evento para profissionais de TI';

console.log(evento);
```

## Respostas: Notação de Pontos e Colchetes

### Fáceis

1. **Acesse a propriedade marca do objeto carro utilizando a notação de pontos e exiba no console.**
```
const carro = {
  marca: 'Ford',
  modelo: 'Fiesta',
  ano: 2019
};

console.log(carro.marca);
```
2. **Crie um objeto carro com a propriedade cor. Acesse e altere essa propriedade utilizando a notação de colchetes e exiba no console.**
```
const carro = {
  cor: 'azul'
};

carro['cor'] = 'vermelho';
console.log(carro);
```

### Médios

3. **Crie um objeto pessoa com as propriedades nome, idade e cidade. Acesse e altere a propriedade idade utilizando a notação de pontos. Exiba o objeto no console.**
```
const pessoa = {
  nome: 'Lucas',
  idade: 28,
  cidade: 'Fortaleza'
};

pessoa.idade = 29;
console.log(pessoa);
```
4. **Crie um objeto livro com as propriedades titulo, autor e ano. Utilize a notação de colchetes para acessar e modificar a propriedade ano. Exiba o objeto no console.**
```
const livro = {
  titulo: 'Dom Quixote',
  autor: 'Miguel de Cervantes',
  ano: 1605
};

livro['ano'] = 1615;
console.log(livro);
```

### Difíceis

5. **Crie um objeto produto com as propriedades nome, preco e estoque. Utilize a notação de pontos para acessar o preço e a notação de colchetes para acessar o estoque. Exiba os valores no console.**
```
const produto = {
  nome: 'Geladeira',
  preco: 2000,
  estoque: 5
};

console.log(produto.preco);
console.log(produto['estoque']);
```
6. **Crie um objeto cliente com as propriedades nome, email e telefone. Utilize a notação de colchetes para alterar o valor do email. Exiba o objeto no console.**
```
const cliente = {
  nome: 'Maria',
  email: 'maria@gmail.com',
  telefone: '123456789'
};

cliente['email'] = 'maria123@gmail.com';
console.log(cliente);
```

## Respostas: Manipulação de Objetos (Adicionando, Modificando e Deletando Propriedades)

### Fáceis

1. **Crie um objeto livro com as propriedades titulo e autor. Adicione a propriedade ano e exiba o objeto no console.**
```
const livro = {
  titulo: 'O Pequeno Príncipe',
  autor: 'Antoine de Saint-Exupéry'
};

livro.ano = 1943;
console.log(livro);
```
2. **Crie um objeto carro com as propriedades marca, modelo e ano. Modifique a propriedade modelo e exiba o objeto no console.**
```
const carro = {
  marca: 'Chevrolet',
  modelo: 'Onix',
  ano: 2021
};

carro.modelo = 'Spin';
console.log(carro);
```

### Médios

3. **Crie um objeto produto com as propriedades nome, preco e quantidade. Adicione uma propriedade desconto e remova a propriedade quantidade. Exiba o objeto no console.**
```
const produto = {
  nome: 'Tênis',
  preco: 150,
  quantidade: 20
};

produto.desconto = 10;
delete produto.quantidade;
console.log(produto);
```
4. **Crie um objeto usuario com as propriedades nome e email. Modifique a propriedade nome e adicione a propriedade senha. Exiba o objeto no console.**
```
const usuario = {
  nome: 'Ana',
  email: 'ana@dominio.com'
};

usuario.nome = 'Ana Silva';
usuario.senha = 'senha123';
console.log(usuario);
```

### Difíceis

5. **Crie um objeto empresa com as propriedades nome, localizacao e numeroFuncionarios. Adicione a propriedade faturamentoAnual e remova a propriedade localizacao. Exiba o objeto no console.**
```
const empresa = {
  nome: 'Tech Co',
  localizacao: 'São Paulo',
  numeroFuncionarios: 150
};

empresa.faturamentoAnual = 5000000;
delete empresa.localizacao;
console.log(empresa);
```
6. **Crie um objeto aluno com as propriedades nome, idade, e curso. Alterar o valor da propriedade idade e adicionar a propriedade matricula. Exiba o objeto no console.**
```
const aluno = {
  nome: 'Carlos',
  idade: 20,
  curso: 'Medicina'
};

aluno.idade = 21;
aluno.matricula = '12345';
console.log(aluno);
```

---

## 13. Objetos, new, this, keys, values, entries, herança e prototipagem Respostas

## **new**

### Fácil
```
function Carro(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}

const meuCarro = new Carro("Fusca", "1970");
console.log(meuCarro.marca); // "Fusca"
console.log(meuCarro.modelo); // "1970"
```

### Médio
```
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.falar = function() {
    console.log(`Olá, meu nome é ${this.nome}`);
  };
}

const pessoa1 = new Pessoa("João", 25);
pessoa1.falar(); // "Olá, meu nome é João"
```

### Difícil
```
function Animal(especie) {
  this.especie = especie;
  this.falar = function() {
    console.log(`Eu sou um(a) ${this.especie}`);
  };
}

function Cachorro(nome) {
  Animal.call(this, "Cachorro");
  this.nome = nome;
  this.latir = function() {
    console.log("Au au!");
  };
}

const cachorro = new Cachorro("Rex");
cachorro.falar(); // "Eu sou um(a) Cachorro"
cachorro.latir(); // "Au au!"
```
---

## **this**

### Fácil
```
const pessoa = {
  nome: "Maria",
  idade: 30,
  saudacao() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
};

pessoa.saudacao(); // "Meu nome é Maria e tenho 30 anos."
```

### Médio
```
function saudar() {
  console.log(`Olá, ${this.nome}`);
}

const pessoa1 = { nome: "Carlos" };
const pessoa2 = { nome: "Ana" };

saudar.call(pessoa1); // "Olá, Carlos"
saudar.call(pessoa2); // "Olá, Ana"
```

### Difícil
```
const pessoa1 = { nome: "Carlos" };
const pessoa2 = { nome: "Ana" };

function mostrarNome() {
  console.log(this.nome);
}

mostrarNome.call(pessoa1); // "Carlos"
mostrarNome.call(pessoa2); // "Ana"
```

## **object.heys**

### Fácil
```
const livro = {
  titulo: "JavaScript Avançado",
  autor: "João Silva",
  ano: 2020
};

console.log(Object.keys(livro)); // ["titulo", "autor", "ano"]
```

### Médio
```
const produto = {
  nome: "Camiseta",
  preço: 50,
  quantidade: 10
};

console.log(Object.keys(produto).includes("quantidade")); // true
```

### Difícil
```
const carro = {
  marca: "Ford",
  modelo: "Fusca",
  cor: "azul"
};

Object.keys(carro).forEach(key => {
  console.log(`${key}: ${carro[key]}`);
});
```

## **object.values**

### Fácil

```
const livro = {
  titulo: "JavaScript Avançado",
  autor: "João Silva",
  ano: 2020
};

console.log(Object.values(livro)); // ["JavaScript Avançado", "João Silva", 2020]
```

### Médio
```
const carro = {
  marca: "Ford",
  modelo: "Fusca",
  ano: 2022
};

console.log(Object.values(carro).includes(2022)); // true
```

### Difícil
```
const pessoa = {
  nome: "João",
  idade: 25,
  profissão: "Desenvolvedor"
};

const valores = Object.values(pessoa).map(value => value.toString().toUpperCase());
console.log(valores); // ["JOÃO", "25", "DESENVOLVEDOR"]
```

## **object.entries**
```
Copiar código
const aluno = {
  nome: "Pedro",
  idade: 20,
  nota: 9.5
};

console.log(Object.entries(aluno)); // [["nome", "Pedro"], ["idade", 20], ["nota", 9.5]]
```

### Médio
```
const cliente = {
  nome: "Ana",
  email: "ana@gmail.com",
  telefone: "123456789"
};

console.log(Object.entries(cliente).length); // 3
```

### Difícil
```
const produto = {
  nome: "Smartphone",
  preço: 1500
};

Object.entries(produto).forEach(([key, value]) => {
  if (key === "preço" && value > 1000) {
    produto.preço = value * 0.9; // aplicar desconto de 10%
  }
});

console.log(produto); // { nome: "Smartphone", preço: 1350 }
```

## **Prototipagem e Herança**

### Fácil
```
function Pessoa(nome) {
  this.nome = nome;
}

Pessoa.prototype.falar = function() {
  console.log(`Olá, meu nome é ${this.nome}`);
};

function Estudante(nome, curso) {
  Pessoa.call(this, nome);
  this.curso = curso;
}

Estudante.prototype = Object.create(Pessoa.prototype);
Estudante.prototype.constructor = Estudante;

const estudante = new Estudante("João", "Matemática");
estudante.falar(); // "Olá, meu nome é João"
```

### Médio
```
function Animal() {
  this.falar = function() {
    console.log("Animal fazendo barulho");
  };
}

function Gato() {
  Animal.call(this);
  this.falar = function() {
    console.log("Miau");
  };
}

const gato = new Gato();
gato.falar(); // "Miau"
```

### Difícil
```
function Carro(marca) {
  this.marca = marca;
}

Carro.prototype.mostrarMarca = function() {
  console.log(this.marca);
};

const CarroEsportivo = Object.create(Carro.prototype);
CarroEsportivo.velocidadeMaxima = 300;

CarroEsportivo.mostrarVelocidade = function() {
  console.log(`Velocidade máxima: ${this.velocidadeMaxima}`);
};

const esportivo = Object.create(CarroEsportivo);
esportivo.marca = "Ferrari";
esportivo.mostrarMarca(); // "Ferrari"
esportivo.mostrarVelocidade(); // "Velocidade máxima: 300"
```

---

## 14. Funções, Parâmetros Padrão, Rest Parameter e Desestruturação de Parâmetros Respostas

## Funções

### Nível Fácil

1. **Função Simples**
```
function cumprimentar(nome = "Seja bem-vindo") {
  return `Olá, ${nome}!`;
}
```

2. **Função com Retorno Condicional**
```
function verificarParidade(numero) {
  return numero % 2 === 0 ? "Par" : "Ímpar";
}
```

### Nível Médio

3. **Função com Condição**
```
function classificarIdade(idade) {
  if (idade <= 12) return "Criança";
  if (idade <= 17) return "Adolescente";
  return "Adulto";
}
```

4. **Função que Retorna uma Lista**
```
function gerarSequencia(n) {
  let sequencia = [];
  for (let i = 1; i <= n; i++) {
    sequencia.push(i);
  }
  return sequencia;
}
```

### Nível Difícil

5. **Função Recursiva**
```
function fatorial(n) {
  if (n <= 1) return 1;
  return n * fatorial(n - 1);
}
```

6. **Função de Combinação**
```
function combinacao(n, r) {
  function fatorial(num) {
    if (num <= 1) return 1;
    return num * fatorial(num - 1);
  }
  return fatorial(n) / (fatorial(r) * fatorial(n - r));
}
```

## Parâmetros Padrão

### Nível Fácil

1. **Função de Saudação**
```
function saudar(nome, saudacao = "Olá") {
  return `${saudacao}, ${nome}!`;
}
```

2. **Função de Conversão de Moeda**
```
function converterParaDolar(valor, taxa = 5.2) {
  return valor / taxa;
}
```

### Nível Médio

3. **Função de Calculo com Desconto Padrão**
```
function calcularPrecoFinal(preco, quantidade, desconto = 5) {
  const precoComDesconto = preco - (preco * desconto) / 100;
  return precoComDesconto * quantidade;
}
```

4. **Função com Multiplos Parâmetros Padrão**
```
function calcularArea(largura, altura, forma = "retângulo") {
  if (forma !== "retângulo") return "Forma não suportada";
  return largura * altura;
}
```

### Nível Difícil

5. **Função de Validação de Dados**
```
function validarFormulario(nome = "Indefinido", idade = "Indefinido", pais = "Indefinido") {
  return `Nome: ${nome}, Idade: ${idade}, País: ${pais}`;
}
```

6. **Função Avançada de Cálculo**
```
function calcularInvestimento(valorInicial, taxa = 0.05, anos) {
  return valorInicial * Math.pow(1 + taxa, anos);
}
```

## Rest Parameter

### Nível Fácil

1. **Soma de Números**
```
function somar(...numeros) {
  return numeros.reduce((acc, num) => acc + num, 0);
}
```

2. **Concatenar Strings**
```
function juntarPalavras(...palavras) {
  return palavras.join(" ");
}
```

### Nível Médio

3. **Maior Número**
```
function encontrarMaior(...numeros) {
  return Math.max(...numeros);
}
```

4. **Lista de Nomes**
```
function listarNomes(nomePrincipal, ...outrosNomes) {
  return [nomePrincipal, ...outrosNomes];
}
```

### Nível Difícil

5. **Filtrar Valores Válidos**
```
function filtrarValores(...valores) {
  return valores.filter(valor => typeof valor === "number");
}
```

6. **Média de Números**
```
function calcularMedia(...numeros) {
  if (numeros.length === 0) return 0;
  const soma = numeros.reduce((acc, num) => acc + num, 0);
  return soma / numeros.length;
}
```

## Desestruturação de Parâmetros

### Nível Fácil

1. **Função com Objeto**
```
function exibirDados({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}
```

2. **Função com Array**
```
function primeiroEUltimo([primeiro, , ultimo]) {
  return `Primeiro: ${primeiro}, Último: ${ultimo}`;
}
```

### Nível Médio

3. **Desestruturação com Parâmetros Padrão**
```
function exibirPerfil({ nome = "Indefinido", idade = "Indefinido", profissao = "Indefinido" }) {
  return `${nome} tem ${idade} anos e trabalha como ${profissao}.`;
}
```

4. **Reorganizar Dados do Array**
```
function organizarNotas([nota1 = 0, nota2 = 0, nota3 = 0]) {
  const notas = [nota1, nota2, nota3].sort((a, b) => b - a);
  return `Notas ordenadas: ${notas.join(", ")}`;
}
```

### Nível Difícil

5. **Desestruturação e Lógica**
```
function calcularDistancia({ x1, y1, x2, y2 }) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
```

6. **Desestruturação Avançada**
```
function processarPedido({ cliente, pedido, detalhes }) {
  return `Cliente: ${cliente}, Pedido: ${pedido}, Detalhes: ${detalhes}`;
}
```

---

## 15. Function, retorno, arrow, multiplos valores e antecipado Respostas

## Retorno Básico

### Nível Fácil

1. **Função de Multiplicação**

```
function multiplicar(a, b) {
  return a * b;
}
```

2. **Função de Saudações**
```
function saudacao(nome) {
  return `Olá, ${nome}!`;
}
```

### Nível Médio

3. **Função de Comparação**
```
function compararNumeros(a, b) {
  if (a > b) return "Maior";
  if (a < b) return "Menor";
  return "Igual";
}
```

4. **Função de Área do Círculo**
```
function areaCirculo(raio) {
  return Math.PI * raio * raio;
}
```

### Nível Difícil

5. **Função de Cálculo de Imposto**
```
function calcularImposto(valor) {
  const imposto = 0.10;
  return valor + (valor * imposto);
}
```

6. **Função de Fatorial**
```
function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}
```

## Arrow Function

### Nível Fácil

1. **Função de Soma com Arrow**
```
const somar = (a, b) => a + b;
```

2. Função de Saudação com Arrow
```
const saudacao = nome => `Olá, ${nome}!`;
```

### Nível Médio

3. **Função de Filtro com Arrow**
```
const filtrarPares = array => array.filter(num => num % 2 === 0);
```

4. **Função de Dobra de Valores**
```
const dobrar = num => num * 2;
```

### Nível Difícil

5. **Função de Cálculo de Potência com Arrow**
```
const potencia = (base, expoente) => Math.pow(base, expoente);
```

6. **Função de Ordenação com Arrow**
```
const ordenar = array => array.sort((a, b) => b - a);
```

## Retorno Implícito em Arrow Function

### Nível Fácil

1. **Função de Multiplicação com Retorno Implícito**
```
const multiplicar = (a, b) => a * b;
```

2. **Função de Divisão com Retorno Implícito**
```
const dividir = (a, b) => a / b;
```

### Nível Médio

3. **Função de Quadrado com Retorno Implícito**
```
const quadrado = num => num * num;
```

4. **Função de Concatenar com Retorno Implícito**
```
const concatenar = (str1, str2) => str1 + str2;
```

### Nível Difícil

5. **Função de Filtro de Números Positivos com Retorno Implícito**
```
const filtrarPositivos = array => array.filter(num => num > 0);
```

6. **Função de Incremento com Retorno Implícito**
```
const incrementar = num => num + 1;
```

## Retornar Múltiplos Valores

### Nível Fácil

1. **Função que Retorna Soma e Diferença**
```
function somaEDif(a, b) {
  return { soma: a + b, diferenca: a - b };
}
```

2. **Função que Retorna Nome e Idade**
```
function dadosPessoais(nome, idade) {
  return { nome, idade };
}
```

### Nível Médio

3. **Função de Retorno de Dados de Aluno**
```
function dadosAluno(nome, idade, nota) {
  return { nome, idade, nota };
}
```

4. **Função de Retorno de Mínimo e Máximo**
```
function minMax(array) {
  return { minimo: Math.min(...array), maximo: Math.max(...array) };
}
```

### Nível Difícil

5. **Função de Retorno de Área e Perímetro**
```
function areaEPerimetro(largura, altura) {
  const area = largura * altura;
  const perimetro = 2 * (largura + altura);
  return { area, perimetro };
}
```

6. **Função de Retorno de Coordenadas**
```
function coordenadas(x1, y1, x2, y2) {
  const distanciaX = Math.abs(x2 - x1);
  const distanciaY = Math.abs(y2 - y1);
  return { distanciaX, distanciaY };
}
```

## Retorno Antecipado

### Nível Fácil

1. **Função de Verificação de Paridade com Retorno Antecipado**
```
function verificarParidade(num) {
  if (num % 2 === 0) return "Número par";
  return "Número ímpar";
}
```

2. **Função de Verificação de Idade**
```
function verificarIdade(idade) {
  if (idade < 18) return "Menor de idade";
  return "Maior de idade";
}
```

### Nível Médio

3. **Função de Verificação de Maioridade com Retorno Antecipado**
```
function verificarMaioridade(idade) {
  if (idade < 21) return "Acesso negado";
  return "Acesso permitido";
}
```
4. **Função de Retorno Antecipado em Validação de Dados**
```
function validarDados(nome, numero) {
  if (!nome || numero < 0) return "Dados inválidos";
  return { nome, numero };
}
```

### Nível Difícil

5. **Função de Cálculo com Retorno Antecipado**
```
function calcularPrecoComDesconto(preco) {
  if (preco < 50) return preco;
  return preco * 0.9;
}
```

6. **Função de Verificação de Votação com Retorno Antecipado**
```
function verificarVotacao(idade) {
  if (idade < 16) return "Não apto para votar";
  return "Apto para votar";
}
```

---

## 16. Escopo Respostas

## Nível Fácil

### 1. **Exercício de Variável Global**
```
let nome = "João";

function imprimirNome() {
  console.log(nome);
}

imprimirNome();  // Saída: João
```
- Explicação: A variável nome é declarada no escopo global e pode ser acessada dentro da função imprimirNome.

2. **Escopo de Função Simples**
```
function saudar(nome) {
  console.log(`Olá, ${nome}!`);
}

saudar("Maria");  // Saída: Olá, Maria!

console.log(nome);  // Erro: nome não está definido
```
- Explicação: A variável nome é um parâmetro da função saudar, então não é acessível fora dela, gerando um erro.

3. **Variáveis de Bloco com let e const**
```
if (true) {
  let x = 10;
  const y = 20;
  console.log(x);  // Saída: 10
  console.log(y);  // Saída: 20
}

console.log(x);  // Erro: x não está definido
console.log(y);  // Erro: y não está definido
```
- Explicação: As variáveis x e y são declaradas dentro de um bloco e, por causa do escopo de bloco, não podem ser acessadas fora dele.

### Nível Médio

1. **Modificando Variável Global Dentro de Função**
```
let contador = 0;

function incrementar() {
  contador++;
}

incrementar();
console.log(contador);  // Saída: 1
```
- Explicação: A função incrementar altera o valor da variável global contador dentro do seu escopo, refletindo o valor atualizado fora da função.

2. **Escopo de Função com Parâmetros**
```
function multiplicar(a, b) {
  return a * b;
}

let resultado = multiplicar(3, 4);
console.log(resultado);  // Saída: 12

console.log(a);  // Erro: a não está definido
console.log(b);  // Erro: b não está definido
```
- Explicação: Os parâmetros a e b são locais à função multiplicar e não podem ser acessados fora dela, gerando erro.

3. Escopo de Bloco com var
```
if (true) {
  var z = 30;
}

console.log(z);  // Saída: 30
```
- Explicação: Quando declarada com var, a variável z tem escopo de função ou global, portanto, pode ser acessada fora do bloco if.

### Nível Difícil

1. **Escopo Global e Função de Cálculo**
```
let resultado = 10;

function somarValor(valor) {
  resultado += valor;
  return resultado;
}

console.log(somarValor(5));  // Saída: 15
console.log(resultado);      // Saída: 15
```
- Explicação: A variável resultado é modificada pela função somarValor e o valor atualizado é refletido no escopo global.

2.** Escopo de Função com Variáveis Locais e Globais**
```
let numeroGlobal = 5;

function alterarNumero() {
  let numeroLocal = 10;
  numeroGlobal += numeroLocal;
  return { numeroGlobal, numeroLocal };
}

let resultado = alterarNumero();
console.log(resultado.numeroGlobal);  // Saída: 15
console.log(resultado.numeroLocal);   // Saída: 10
console.log(numeroGlobal);            // Saída: 15
```
- Explicação: numeroGlobal é uma variável global, enquanto numeroLocal é local à função. Ao retornar os valores, numeroGlobal é atualizado, mas numeroLocal só existe dentro da função.

3. **Escopo de Bloco com let e Funções Aninhadas**
```
function verificarEscopo() {
  if (true) {
    let z = 50;

    function acessarZ() {
      console.log(z);  // Saída: 50
    }

    acessarZ();
  }

  console.log(z);  // Erro: z não está definido
}

verificarEscopo();
```
- Explicação: A variável z é declarada com let dentro de um bloco e só pode ser acessada dentro desse bloco. A função acessarZ consegue acessar z, mas fora do bloco a variável não existe.

---

## Respostas - Cadeia de Escopos

### Nível Fácil

1. **Cadeia de Escopos Simples**

```
let a = 10;

function exemplo() {
  let b = 20;
  console.log(a);  // Saída: 10
  console.log(b);  // Saída: 20
}

exemplo();
```
- Explicação: A variável a é acessível dentro da função, pois está no escopo global. A variável b é declarada dentro da função e só pode ser acessada dentro dela.

### Nível Médio

2. **Acesso a Variáveis de Escopos Externos**
```
let x = 30;

function exibir() {
  let y = 40;
  console.log(x);  // Saída: 30
  console.log(y);  // Saída: 40
}

exibir();
console.log(x);  // Saída: 30
console.log(y);  // Erro: y não está definido
```
- Explicação: A variável x é acessível tanto dentro da função exibir quanto fora dela, pois está no escopo global. A variável y só existe dentro da função e não pode ser acessada fora dela, gerando erro.

### Nível Difícil

3. **Cadeia de Escopos com Funções Aninhadas**
```
let numero = 50;

function alterarNumero() {
  let alterado = 100;

  function incrementar() {
    numero += 10;
    console.log(numero);  // Saída: 60
  }

  incrementar();
  console.log(numero);  // Saída: 60
  console.log(alterado);  // Saída: 100
}

alterarNumero();
console.log(numero);  // Saída: 60
```
- Explicação: A variável numero é acessada e modificada dentro da função interna incrementar, alterando seu valor. A variável alterado existe dentro da função alterarNumero e pode ser acessada dentro dela. O valor de numero fora da função alterarNumero também foi alterado. Isso mostra como as variáveis de escopos internos e externos interagem.

---

## 17. Métodos de objetos Respostas

## Métodos de Objetos

### Nível Fácil

1. **Método Simples em Objeto**
 ```
 const animal = {
   nome: "Cachorro",
   falar: function() {
     console.log(`Eu sou ${this.nome}`);
   }
 };

 animal.falar(); // Exibe: Eu sou Cachorro
```

2. **Método com Parâmetro**
```
const livro = {
  mostrarTitulo: function(titulo) {
    console.log(`O título do livro é ${titulo}`);
  }
};

livro.mostrarTitulo("O Hobbit"); // Exibe: O título do livro é O Hobbit
```

### Nível Médio

3. **Método que Modifica Propriedade**
```
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  atualizarModelo: function(novoModelo) {
    this.modelo = novoModelo;
  }
};

carro.atualizarModelo("Civic");
console.log(carro.modelo); // Exibe: Civic
```

4. **Método que Retorna um Valor**
```
const contaBancaria = {
  saldo: 1000,
  consultarSaldo: function() {
    return this.saldo;
  }
};

console.log(contaBancaria.consultarSaldo()); // Exibe: 1000
```

### Nível Difícil

5. **Método de Objeto com Encadeamento**
```
const estoque = {
  produto: "MacBook",
  quantidade: 10,
  atualizarEstoque: function(qtd) {
    this.quantidade = qtd;
    return this;
  },
  mostrarEstoque: function() {
    console.log(`${this.produto}: ${this.quantidade}`);
  }
};

estoque.atualizarEstoque(20).mostrarEstoque(); // Exibe: MacBook: 20
```

6. **Método com Parâmetros de Entrada**
```
const calculadora = {
  operacao: function(num1, num2, operador) {
    switch(operador) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return "Operador inválido";
    }
  }
};

console.log(calculadora.operacao(10, 5, "+")); // Exibe: 15
```

## Métodos em Objetos Aninhados

### Nível Fácil

1. Método em Objeto Aninhado
```
const empresa = {
  nome: "Tech Solutions",
  endereco: {
    cidade: "São Paulo",
    exibirCidade: function() {
      console.log(this.cidade);
    }
  }
};

empresa.endereco.exibirCidade(); // Exibe: São Paulo
```

2. **Método para Exibir Dados do Objeto Aninhado**
```
const usuario = {
  nome: "Carlos",
  contato: {
    telefone: "123456789",
    mostrarContato: function() {
      console.log(this.telefone);
    }
  }
};

usuario.contato.mostrarContato(); // Exibe: 123456789
```

### Nível Médio

3. **Método Aninhado com Parâmetro**
```
const estudante = {
  nome: "João",
  cursos: {
    inscrever: function(curso) {
      console.log(`Inscrito em ${curso}`);
    }
  }
};

estudante.cursos.inscrever("Matemática"); // Exibe: Inscrito em Matemática
```

4. **Método Aninhado que Modifica Propriedade**
```
const universidade = {
  nome: "UniTech",
  departamento: {
    nomeDepartamento: "Engenharia",
    alterarNome: function(novoNome) {
      this.nomeDepartamento = novoNome;
    }
  }
};

universidade.departamento.alterarNome("Computação");
console.log(universidade.departamento.nomeDepartamento); // Exibe: Computação
```

### Nível Difícil

5. **Método Aninhado com Encadeamento**
```
const veiculo = {
  modelo: "Fusca",
  motor: {
    ligado: false,
    ligar: function() {
      this.ligado = true;
      return this;
    },
    mostrarEstado: function() {
      console.log(`Motor ligado: ${this.ligado}`);
    }
  }
};

veiculo.motor.ligar().mostrarEstado(); // Exibe: Motor ligado: true
```

6. **Método Aninhado com Argumento**
```
const biblioteca = {
  nome: "Biblioteca Municipal",
  livros: {
    emprestar: function(livro) {
      console.log(`Emprestado ${livro}`);
    }
  }
};

biblioteca.livros.emprestar("Harry Potter"); // Exibe: Emprestado Harry Potter
```

## Métodos que Retornam Valores

### Nível Fácil

1. **Método que Retorna um Valor Simples**
```
const pessoa = {
  nome: "Maria",
  obterNome: function() {
    return this.nome;
  }
};

console.log(pessoa.obterNome()); // Exibe: Maria
```

2. **Método com Retorno de Cálculo**
```
const retangulo = {
  largura: 5,
  altura: 10,
  calcularArea: function() {
    return this.largura * this.altura;
  }
};

console.log(retangulo.calcularArea()); // Exibe: 50
```

### Nível Médio

3. **Método com Retorno Condicional**
```
const aluno = {
  nome: "Lucas",
  nota: 8,
  verificarAprovacao: function() {
    if (this.nota >= 7) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }
};

console.log(aluno.verificarAprovacao()); // Exibe: Aprovado
```

4. **Método que Retorna uma Lista de Elementos**
```
const biblioteca = {
  livros: ["JavaScript", "Python", "Java"],
  listarLivros: function() {
    return this.livros;
  }
};

console.log(biblioteca.listarLivros()); // Exibe: ["JavaScript", "Python", "Java"]
```

### Nível Difícil

5. **Método que Retorna Objeto Modificado**
```
const produto = {
  nome: "Celular",
  preco: 1000,
  aplicarDesconto: function(desconto) {
    this.preco = this.preco - desconto;
    return this;
  }
};

produto.aplicarDesconto(100);
console.log(produto); // Exibe: { nome: 'Celular', preco: 900 }
```

6. **Método que Retorna um Valor Calculado com Parâmetros**
```
const calculadora = {
  calcular: function(num1, num2, operador) {
    switch (operador) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return "Operador inválido";
    }
  }
};

console.log(calculadora.calcular(5, 2, "+")); // Exibe: 7
```

## Métodos de Objetos em Arrays

### Nível Fácil

1. **Método de Objeto em Array Simples**
```
const pessoas = [
  { nome: "João", saudar: function() { console.log(`Olá, ${this.nome}`); } },
  { nome: "Maria", saudar: function() { console.log(`Olá, ${this.nome}`); } }
];

pessoas.forEach(pessoa => pessoa.saudar()); 
// Exibe: 
// Olá, João
// Olá, Maria
```

2. **Método de Objeto em Array com Parâmetro**
```
const funcionarios = [
  { nome: "Carlos", trabalhar: function(projeto) { console.log(`Trabalhando no ${projeto}`); } },
  { nome: "Ana", trabalhar: function(projeto) { console.log(`Trabalhando no ${projeto}`); } }
];

funcionarios.forEach(funcionario => funcionario.trabalhar("Sistema de Gestão"));
// Exibe:
// Trabalhando no Sistema de Gestão
// Trabalhando no Sistema de Gestão
```

### Nível Médio

3. **Método que Modifica Propriedade em Objetos do Array**
```
const produtos = [
  { nome: "TV", preco: 2000 },
  { nome: "Celular", preco: 1500 }
];

produtos.forEach(produto => produto.aplicarDesconto = function(desconto) { 
  this.preco -= desconto;
});

produtos.forEach(produto => produto.aplicarDesconto(100));
console.log(produtos); 
// Exibe: 
// [ { nome: 'TV', preco: 1900 }, { nome: 'Celular', preco: 1400 } ]
```

4. **Método que Retorna Valor com Base no Array**
```
const alunos = [
  { nome: "Juliana", nota: 9 },
  { nome: "Carlos", nota: 6 }
];

const aprovado = alunos.filter(aluno => aluno.nota >= 7);
console.log(aprovado); 
// Exibe: [ { nome: 'Juliana', nota: 9 } ]
```

### Nível Difícil

5. **Método em Array para Atualizar Todos os Objetos**
```
const livros = [
  { titulo: "JavaScript", preco: 50 },
  { titulo: "Python", preco: 45 }
];

livros.forEach(livro => livro.atualizarPreco = function(desconto) {
  this.preco -= desconto;
});

livros.forEach(livro => livro.atualizarPreco(5));
console.log(livros); 
// Exibe: 
// [ { titulo: 'JavaScript', preco: 45 }, { titulo: 'Python', preco: 40 } ]
```

6. **Método em Array que Modifica e Retorna Novo Valor**
```
const estudantes = [
  { nome: "Ana", nota: 7 },
  { nome: "João", nota: 8 }
];

const aumentoNota = estudantes.map(estudante => {
  estudante.nota += 1;
  return estudante;
});

console.log(aumentoNota); 
// Exibe: 
// [ { nome: 'Ana', nota: 8 }, { nome: 'João', nota: 9 } ]
```

---

## 18. Funções Recursivas Respostas

### Nível Fácil

1. **Soma de Números até um Valor**
 ```
 function somaAteN(n) {
   if (n === 1) return 1;
   return n + somaAteN(n - 1);
 }
 console.log(somaAteN(5)); // Exibe: 15
```

2. **Fatorial de um Número**
```
function fatorial(n) {
  if (n === 1) return 1;
  return n * fatorial(n - 1);
}
console.log(fatorial(5)); // Exibe: 120
```

3. **Contar até um Número**
```
function contarAteN(n) {
  if (n > 0) {
    console.log(n);
    contarAteN(n - 1);
  }
}
contarAteN(3); // Exibe: 3, 2, 1
```

4. **Contar de Trás para Frente**
```
function contarDeTrasParaFrente(n) {
  if (n >= 1) {
    console.log(n);
    contarDeTrasParaFrente(n - 1);
  }
}
contarDeTrasParaFrente(4); // Exibe: 4, 3, 2, 1
```

5. **Verificar se um Número é Par ou Ímpar**
```
function verificarParOuImpar(n) {
  if (n === 0) return true; // 0 é par
  if (n === 1) return false; // 1 é ímpar
  return verificarParOuImpar(n - 2);
}
console.log(verificarParOuImpar(4)); // Exibe: true
console.log(verificarParOuImpar(5)); // Exibe: false
```

### Nível Médio

6. **Soma dos Elementos de um Array**
```
function somaArray(arr, index = 0) {
  if (index === arr.length) return 0;
  return arr[index] + somaArray(arr, index + 1);
}
console.log(somaArray([1, 2, 3, 4])); // Exibe: 10
```

7. **Reverter uma String**
```
function inverterString(str) {
  if (str === "") return "";
  return inverterString(str.substr(1)) + str[0];
}
console.log(inverterString("abc")); // Exibe: "cba"
```

8. **Fibonacci**
```
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5)); // Exibe: 5
```

9. **Encontrar o Maior Número em um Array
```
function maiorNumero(arr, index = 0) {
  if (index === arr.length - 1) return arr[index];
  let maiorRestante = maiorNumero(arr, index + 1);
  return arr[index] > maiorRestante ? arr[index] : maiorRestante;
}
console.log(maiorNumero([3, 1, 4, 1, 5, 9])); // Exibe: 9
```

10. **Fatorial de um Array de Números**
```
function fatorialArray(arr, index = 0) {
  if (index === arr.length) return 1;
  return fatorial(arr[index]) * fatorialArray(arr, index + 1);
}

function fatorial(n) {
  if (n === 1) return 1;
  return n * fatorial(n - 1);
}

console.log(fatorialArray([2, 3, 4])); // Exibe: 288
```

### Nível Difícil

11. **Permutações de uma String**
```
function permutar(str) {
  if (str.length <= 1) return [str];
  let resultado = [];
  for (let i = 0; i < str.length; i++) {
    let letra = str[i];
    let resto = str.slice(0, i) + str.slice(i + 1);
    let permutacoesRestantes = permutar(resto);
    for (let perm of permutacoesRestantes) {
      resultado.push(letra + perm);
    }
  }
  return resultado;
}
console.log(permutar("abc")); 
// Exibe: [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
```

12. **Somar os Elementos de um Array 2D**
```
function somarArray2D(arr, i = 0, j = 0) {
  if (i === arr.length) return 0;
  if (j === arr[i].length) return somarArray2D(arr, i + 1, 0);
  return arr[i][j] + somarArray2D(arr, i, j + 1);
}
console.log(somarArray2D([[1, 2], [3, 4], [5, 6]])); // Exibe: 21
```

13. **Buscar um Elemento em um Array**
```
function buscarElemento(arr, elemento, index = 0) {
  if (index === arr.length) return -1;
  if (arr[index] === elemento) return index;
  return buscarElemento(arr, elemento, index + 1);
}
console.log(buscarElemento([1, 2, 3, 4], 3)); // Exibe: 2
```

14. **Contar o Número de Vezes que um Valor Aparece em um Array**
```
function contarValor(arr, valor, index = 0, contador = 0) {
  if (index === arr.length) return contador;
  if (arr[index] === valor) contador++;
  return contarValor(arr, valor, index + 1, contador);
}
console.log(contarValor([1, 2, 3, 1, 4, 1], 1)); // Exibe: 3
```

15. **Somar os Elementos de um Array de Arrays**
```
function somarArrayDeArrays(arr, i = 0, j = 0) {
  if (i === arr.length) return 0;
  if (j === arr[i].length) return somarArrayDeArrays(arr, i + 1, 0);
  return arr[i][j] + somarArrayDeArrays(arr, i, j + 1);
}
console.log(somarArrayDeArrays([[1, 2], [3, 4], [5, 6]])); // Exibe: 21
```

---

## 19. Funções Anônimas e Callback Respostas

### Nível Fácil

1. **Somar dois números usando uma função anônima**
```
function somar(a, b) {
  return (function() {
    return a + b;
  })();
}

console.log(somar(5, 3)); // Exibe: 8
```

2. **Filtrar números pares em um array usando uma função anônima**
```
function filtrarPares(arr) {
  return arr.filter(function(num) {
    return num % 2 === 0;
  });
}

console.log(filtrarPares([1, 2, 3, 4, 5, 6])); // Exibe: [2, 4, 6]
```

### Nível Médio

3. **Uso de Callback para manipular uma lista**
```
function processarLista(lista, callback) {
  for (let i = 0; i < lista.length; i++) {
    console.log(callback(lista[i]));
  }
}

function dobrar(valor) {
  return valor * 2;
}

processarLista([1, 2, 3, 4], dobrar); // Exibe: 2, 4, 6, 8
```

4. **Ordem crescente com callback**
```
function ordenarArray(arr, callback) {
  arr.sort(callback);
  console.log(arr);
}

ordenarArray([4, 1, 3, 2], function(a, b) {
  return a - b;
}); // Exibe: [1, 2, 3, 4]
```

### Nível Difícil

5. **Manipular objetos com callback**
```
function aplicarDesconto(produtos, callback) {
  return produtos.map(function(produto) {
    produto.preco = callback(produto.preco);
    return produto;
  });
}

function desconto(preco) {
  return preco * 0.9; // Desconto de 10%
}

const produtos = [
  { nome: 'Produto 1', preco: 100 },
  { nome: 'Produto 2', preco: 150 },
  { nome: 'Produto 3', preco: 200 }
];

console.log(aplicarDesconto(produtos, desconto)); 
// Exibe: [{nome: 'Produto 1', preco: 90}, {nome: 'Produto 2', preco: 135}, {nome: 'Produto 3', preco: 180}]
```

6. **Execução assíncrona com Callback**
```
function buscarDados(callback) {
  setTimeout(function() {
    const dados = { nome: 'João', idade: 25, cidade: 'São Paulo' };
    callback(dados);
  }, 2000);
}

buscarDados(function(dados) {
  console.log(dados); 
  // Exibe: { nome: 'João', idade: 25, cidade: 'São Paulo' }
});
```

---

  ## 20. Arrow Functions Respostas

### Nível Fácil

1. **Somar dois números usando Arrow Function**
```
const somar = (a, b) => a + b;
console.log(somar(5, 3)); // Exibe: 8
```

2. **Multiplicar dois números usando Arrow Function**
```
const multiplicar = (a, b) => a * b;
console.log(multiplicar(5, 3)); // Exibe: 15
```

3. **Verificar se um número é par usando Arrow Function**
```
const isEven = num => num % 2 === 0;
console.log(isEven(4)); // Exibe: true
console.log(isEven(5)); // Exibe: false
```

4. **Retornar o dobro de um número com Arrow Function**
```
const dobro = num => num * 2;
console.log(dobro(4)); // Exibe: 8
```

5. **Quadrado de um número usando Arrow Function**
```
const quadrado = num => num ** 2;
console.log(quadrado(4)); // Exibe: 16
```

### Nível Médio

6. **Converter temperatura de Celsius para Fahrenheit usando Arrow Function**
```
const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;
console.log(celsiusToFahrenheit(0)); // Exibe: 32
console.log(celsiusToFahrenheit(100)); // Exibe: 212
```

7. **Filtrar números positivos em um array usando Arrow Function**
```
const filtrarPositivos = arr => arr.filter(num => num > 0);
console.log(filtrarPositivos([1, -2, 3, -4])); // Exibe: [1, 3]
```

8. **Adicionar dois números em uma lista de arrays usando Arrow Function**
```
const somarLista = arr => arr.map(par => par[0] + par[1]);
console.log(somarLista([[1, 2], [3, 4], [5, 6]])); // Exibe: [3, 7, 11]
```

9. **Verificar se um número é maior que 10 usando Arrow Function**
```
const isGreaterThanTen = num => num > 10;
console.log(isGreaterThanTen(15)); // Exibe: true
console.log(isGreaterThanTen(5)); // Exibe: false
```

10. **Contar a quantidade de números positivos em um array usando Arrow Function**
```
const contarPositivos = arr => arr.filter(num => num > 0).length;
console.log(contarPositivos([1, -2, 3, -4])); // Exibe: 2
```

### Nível Difícil

11. **Ordenar um array de objetos com Arrow Function**
```
const pessoas = [{ nome: 'João', idade: 30 }, { nome: 'Maria', idade: 25 }, { nome: 'Carlos', idade: 35 }];
const ordenarPorIdade = arr => arr.sort((a, b) => a.idade - b.idade);
console.log(ordenarPorIdade(pessoas)); 
// Exibe: [{ nome: 'Maria', idade: 25 }, { nome: 'João', idade: 30 }, { nome: 'Carlos', idade: 35 }]
```

12. **Calcular a área de um círculo usando Arrow Function**
```
const areaCirculo = raio => Math.PI * raio ** 2;
console.log(areaCirculo(5)); // Exibe: 78.53981633974483
```

13. **Transformar um array de strings para maiúsculas usando Arrow Function**
```
const maiusculas = arr => arr.map(str => str.toUpperCase());
console.log(maiusculas(['a', 'b', 'c'])); // Exibe: ['A', 'B', 'C']
```

14. **Filtrar números ímpares e somá-los usando Arrow Function**
```
const somarImpares = arr => arr.filter(num => num % 2 !== 0).reduce((acc, num) => acc + num, 0);
console.log(somarImpares([1, 2, 3, 4, 5])); // Exibe: 9
```

15. **Calcular a soma de todos os elementos de um array de números usando Arrow Function**
```
const somaArray = arr => arr.reduce((acc, num) => acc + num, 0);
console.log(somaArray([1, 2, 3, 4, 5])); // Exibe: 15
```

---

## 21. IIFE (Immediately Invoked Function Expression) Respostas

### Nível Fácil

1. **Executar uma função imediatamente que retorna uma saudação**
```
(function() {
  console.log("Olá, Mundo!");
})();
```

2. **Criar uma IIFE que soma dois números**
```
(function(a, b) {
  console.log(a + b);
})(5, 3); // Exibe: 8
```

### Nível Médio

3. **Usar IIFE para calcular o fatorial de um número**
```
(function(num) {
  let fatorial = 1;
  for (let i = 1; i <= num; i++) {
    fatorial *= i;
  }
  console.log(fatorial);
})(5); // Exibe: 120
```

4. **Armazenar o resultado de uma IIFE em uma variável**
```
const resultado = (function(a, b) {
  return a + b;
})(10, 20);

console.log(resultado); // Exibe: 30
```

### Nível Difícil

5. **Usar IIFE para criar um contador de cliques**
```
(function() {
  let contador = 0;

  document.getElementById("btnClique").addEventListener("click", function() {
    contador++;
    console.log("Clique número: " + contador);
  });
})();
```
- Nota: Este código depende de um botão com o id btnClique em seu HTML. Quando o botão for clicado, o contador será incrementado e exibido no console.

6. **Usar IIFE para simular um módulo com variáveis privadas**
```
const modulo = (function() {
  let valorPrivado = 0;

  return {
    obterValor: function() {
      return valorPrivado;
    },
    alterarValor: function(novoValor) {
      valorPrivado = novoValor;
    }
  };
})();

console.log(modulo.obterValor()); // Exibe: 0
modulo.alterarValor(42);
console.log(modulo.obterValor()); // Exibe: 42
```

---

## 22. High-order Functions Respostas

## Nível Fácil

1. **Função que recebe outra função como argumento**
```
function executar(func) {
  func();
}

executar(function() {
  console.log("Mensagem do callback");
});
```

2. **Função que retorna uma função**
```
function multiplicarPor(x) {
  return function(y) {
    return x * y;
  };
}

const multiplicarPor2 = multiplicarPor(2);
console.log(multiplicarPor2(5)); // Exibe: 10
```

3. **Função que aceita um callback e imprime um resultado**
```
function processar(a, b, callback) {
  const resultado = callback(a, b);
  console.log(resultado);
}

processar(3, 4, function(a, b) {
  return a + b;
});
```

4. **Função de soma com parâmetro de operação**
```
function operar(a, b, operacao) {
  return operacao(a, b);
}

const soma = function(a, b) {
  return a + b;
};

console.log(operar(2, 3, soma)); // Exibe: 5
```

5. **Função de mensagem personalizada**
```
function criarMensagem(nome) {
  return function() {
    console.log(`Olá, ${nome}! Bem-vindo!`);
  };
}

const mensagem = criarMensagem("João");
mensagem(); // Exibe: Olá, João! Bem-vindo!
```

### Nível Médio

6. **Função que verifica a validade de um número**
```
function validarNumero(verificacao, numero) {
  const resultado = verificacao(numero);
  console.log(resultado ? "Válido" : "Inválido");
}

const verificarPositivo = (numero) => numero > 0;

validarNumero(verificarPositivo, 10); // Exibe: Válido
validarNumero(verificarPositivo, -5); // Exibe: Inválido
```

7. **Função que retorna uma função de cálculo**
```
function calcular(operacao, a, b) {
  return operacao(a, b);
}

const soma = function(a, b) { return a + b; };
const multiplicacao = function(a, b) { return a * b; };

console.log(calcular(soma, 5, 3)); // Exibe: 8
console.log(calcular(multiplicacao, 5, 3)); // Exibe: 15
```

8. **Função de saudação personalizada com callback**
```
function saudar(nome, saudacao) {
  saudacao(nome);
}

function saudacaoPersonalizada(nome) {
  console.log(`Olá, ${nome}!`);
}

saudar("Maria", saudacaoPersonalizada); // Exibe: Olá, Maria!
```

9. **Função de execução com contagem**
```
function executarComContagem(func, num) {
  for (let i = 0; i < num; i++) {
    func(i + 1);
  }
}

executarComContagem(function(contagem) {
  console.log(`Execução número: ${contagem}`);
}, 3);
```

10. **Função que retorna uma operação com base em um parâmetro**
```
function operacao(tipo) {
  if (tipo === "soma") {
    return (a, b) => a + b;
  } else if (tipo === "subtracao") {
    return (a, b) => a - b;
  }
}

const soma = operacao("soma");
console.log(soma(5, 3)); // Exibe: 8
```

### Nível Difícil

11. **Função de transformação com callbacks**
```
function transformar(numero, callback1, callback2) {
  const resultado1 = callback1(numero);
  const resultadoFinal = callback2(resultado1);
  console.log(resultadoFinal);
}

transformar(5, function(n) { return n * 2; }, function(n) { return n + 10; });
// Exibe: 20
```

12. **Função que aplica operação entre múltiplos números**
```
function aplicarOperacao(operacao, ...numeros) {
  return numeros.reduce(operacao);
}

const soma = (a, b) => a + b;
console.log(aplicarOperacao(soma, 1, 2, 3, 4)); // Exibe: 10
```

13. **Função que simula uma calculadora com callbacks**
```
function calculadora(operacao, a, b) {
  if (operacao === "soma") {
    return a + b;
  } else if (operacao === "subtracao") {
    return a - b;
  } else if (operacao === "multiplicacao") {
    return a * b;
  }
}

console.log(calculadora("soma", 5, 3)); // Exibe: 8
```

14. **Função de temporizador com callback**
```
function tempos(segundos, callback) {
  setTimeout(function() {
    callback();
  }, segundos * 1000);
}

tempos(2, function() {
  console.log("Tempo finalizado!");
});
```

15. **Função que cria uma sequência numérica com base em uma operação**
```
function sequenciaNumerica(operacao, numeroInicial) {
  let resultado = numeroInicial;
  return function() {
    resultado = operacao(resultado);
    return resultado;
  };
}

const soma10 = sequenciaNumerica((num) => num + 10, 5);
console.log(soma10()); // Exibe: 15
console.log(soma10()); // Exibe: 25
```

---

## 23. Exercícios sobre High-order Functions e Arrays

### Nível Fácil

1. **Usando `map()` para dobrar os valores de um array**
```
function dobrarValores(array) {
  return array.map(num => num * 2);
}

console.log(dobrarValores([1, 2, 3, 4])); // [2, 4, 6, 8]
```

2. **Usando filter() para filtrar números pares**
```
function filtrarPares(array) {
  return array.filter(num => num % 2 === 0);
}

console.log(filtrarPares([1, 2, 3, 4])); // [2, 4]
```

3. **Usando reduce() para somar os valores de um array**
```
function somarValores(array) {
  return array.reduce((acc, num) => acc + num, 0);
}

console.log(somarValores([1, 2, 3, 4])); // 10
```

4. **Usando map() para converter todos os nomes para maiúsculas**
```
function converterParaMaiusculas(array) {
  return array.map(nome => nome.toUpperCase());
}

console.log(converterParaMaiusculas(['ana', 'joao', 'maria'])); // ['ANA', 'JOAO', 'MARIA']
```

5. **Usando filter() para remover números negativos**
```
function filtrarPositivos(array) {
  return array.filter(num => num >= 0);
}

console.log(filtrarPositivos([-1, 2, -3, 4])); // [2, 4]
```

### Nível Médio

6. **Usando map() e filter() para transformar e filtrar dados**
```
function dobrarPositivos(array) {
  return array.filter(num => num > 0).map(num => num * 2);
}

console.log(dobrarPositivos([-1, 2, -3, 4])); // [4, 8]
```

7. **Usando reduce() para encontrar o maior número**
```
function encontrarMaiorNumero(array) {
  return array.reduce((max, num) => (num > max ? num : max), array[0]);
}

console.log(encontrarMaiorNumero([1, 5, 3, 9, 2])); // 9
```

8. **Usando map() para converter uma lista de preços**
```
function aplicarDesconto(array) {
  return array.map(preco => preco * 1.10);
}

console.log(aplicarDesconto([100, 200, 300])); // [110, 220, 330]
```

9. **Usando reduce() para calcular o produto de todos os elementos**
```
function calcularProduto(array) {
  return array.reduce((acc, num) => acc * num, 1);
}

console.log(calcularProduto([1, 2, 3, 4])); // 24
```

10. **Usando filter() para selecionar strings com mais de 5 caracteres**
```
function filtrarStringsLongas(array) {
  return array.filter(str => str.length > 5);
}

console.log(filtrarStringsLongas(['olá', 'mundo', 'javascript', 'programação'])); // ['javascript', 'programação']
```

### Nível Difícil

11. **Usando reduce() para agrupar valores por categoria**
```
function agruparPorCategoria(array) {
  return array.reduce((acc, obj) => {
    acc[obj.categoria] = acc[obj.categoria] || 0;
    acc[obj.categoria] += obj.valor;
    return acc;
  }, {});
}

const dados = [
  { categoria: 'A', valor: 10 },
  { categoria: 'B', valor: 20 },
  { categoria: 'A', valor: 30 }
];

console.log(agruparPorCategoria(dados)); // { A: 40, B: 20 }
```

12. **Usando map() e filter() para transformar e remover valores**
```
function ajustarIdade(array) {
  return array.map(pessoa => ({
    nome: pessoa.nome,
    idade: pessoa.idade + 10
  })).filter(pessoa => pessoa.idade <= 50);
}

const pessoas = [
  { nome: 'João', idade: 30 },
  { nome: 'Maria', idade: 45 },
  { nome: 'Pedro', idade: 55 }
];

console.log(ajustarIdade(pessoas)); 
// [{ nome: 'João', idade: 40 }, { nome: 'Maria', idade: 55 }]
```

13. **Usando reduce() para criar um índice de contagem**
```
function contarOcorrencias(array) {
  return array.reduce((acc, str) => {
    acc[str] = acc[str] ? acc[str] + 1 : 1;
    return acc;
  }, {});
}

console.log(contarOcorrencias(['apple', 'banana', 'apple', 'orange', 'banana'])); 
// { apple: 2, banana: 2, orange: 1 }
```

14. **Usando map() e reduce() para calcular a média de uma lista de objetos**
```
function calcularMediaNotas(array) {
  const notas = array.map(obj => obj.nota);
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return soma / notas.length;
}

const alunos = [
  { nome: 'Ana', nota: 8 },
  { nome: 'João', nota: 9 },
  { nome: 'Maria', nota: 7 }
];

console.log(calcularMediaNotas(alunos)); // 8
```

15. **Usando filter(), map() e reduce() para gerar um relatório**
```
function relatorioVendas(array) {
  const vendedores = array.filter(vendedor => vendedor.vendas > 50);
  const nomes = vendedores.map(vendedor => vendedor.nome);
  const totalVendas = vendedores.reduce((acc, vendedor) => acc + vendedor.vendas, 0);
  
  return {
    nomesVendedores: nomes,
    totalVendas
  };
}

const vendas = [
  { nome: 'Carlos', vendas: 60 },
  { nome: 'Mariana', vendas: 40 },
  { nome: 'Pedro', vendas: 80 }
];

console.log(relatorioVendas(vendas));
// { nomesVendedores: ['Carlos', 'Pedro'], totalVendas: 140 }
```

---





