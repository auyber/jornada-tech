# Exercícios

## **Introdução aos Exercícios de Fixação**

Esses exercícios foram elaborados para ajudá-lo a fixar o conteúdo de diferentes tópicos em JavaScript. O objetivo é praticar os conceitos aprendidos, explorando a resolução de problemas de forma prática e eficiente.

A proposta é que você resolva os exercícios de maneira flexível, utilizando as ferramentas e abordagens que considerar mais adequadas. O importante é que, ao final, o programa entregue o **resultado esperado**. Não se prenda a uma única forma de resolver cada exercício, explore alternativas e encontre a solução que você considere mais clara e eficiente.

### 🔍 **Objetivo:**
O objetivo principal desses exercícios é solidificar o aprendizado por meio da prática. Você pode encontrar diferentes maneiras de resolver os mesmos problemas. O que importa é garantir que o **resultado final** seja o esperado, independentemente da abordagem escolhida.

---

### 📝 **Observações:**
Em alguns exercícios, como os de **validação de dados**, **algoritmos**, ou **estruturas de controle**, podem existir diversas maneiras de implementar a solução. O importante é garantir que o **resultado final** seja o correto.

❗ Como veremos funções somente no tópico 17 da revisão, alguns exercícios entre os tópicos 1.Operadores Lógicos e 13.Objetos podem solicitar para criar uma função. Porém, caso você ainda não saiba como utilizá-las, não tem problema! Resolva os exercícios diretamente com código.

EX:

#### Sem usar função:
```
const idade = 65;

if (idade > 60) {
    console.log("Você é idoso.");
}
```
#### Utilizando função:
```
function verificarIdoso(idade) {
    if (idade > 60) {
        console.log("Você é idoso.");
    }
}

verificarIdoso(65);
```

---

### ⚠️ **Dica Importante:**
Se você se deparar com algum exercício e não souber como começar ou como avançar, uma ótima estratégia é **procurar uma IA para ajudar na lógica do exercício**, ao invés de simplesmente pedir a resposta pronta. 

1. **Forneça o enunciado do exercício para a IA**.
2. **Peça ajuda para entender a lógica necessária para resolver o problema**.
3. Conforme for montando o código, **peça para a IA analisar seu progresso** e sugerir melhorias.

Isso vai ajudá-lo a entender o processo de resolução e, ao mesmo tempo, melhorar suas habilidades de codificação! 😊

---

🏆 Pratique esses exercícios com atenção, e conforme for avançando, procure sempre simplificar suas soluções, tornando-as mais legíveis e eficientes. Boa prática!

---

Se precisar de mais alguma coisa ou se surgir alguma dúvida durante a resolução, estou à disposição! 😊


## Índice

- [01. Exercícios sobre Operadores Lógicos](#01-exercícios-sobre-operadores-lógicos)
- [02. Exercícios de Estruturas Condicionais: If, Else e Else If](#02-exercícios-de-estruturas-condicionais-if-else-e-else-if)
- [03. Exercícios de Estruturas Condicionais: Switch](#03-exercícios-de-estruturas-condicionais-switch)
- [04. Exercícios de Estruturas de Repetição](#04-exercícios-de-estruturas-de-repetição)
- [05. Exercícios sobre Estruturas de Dados](#05-exercícios-sobre-estruturas-de-dados)
- [06. Exercícios sobre Arrays Métodos](#06-exercícios-sobre-arrays-métodos)
- [07. Exercícios de Arrays Iteração](#07-exercícios-de-arrays-iteração)
- [08. Exercícios sobre Arrays Bidimensionais](#08-exercícios-sobre-arrays-bidimensionais)
- [09. Exercícios Focados em `flat` e `map` para Arrays Bidimensionais](#09-exercícios-focados-em-flat-e-map-para-arrays-bidimensionais)
- [10. Exercícios sobre Arrays Bidimensionais for, reduce e filter](#10-exercícios-sobre-arrays-bidimensionais-for-reduce-e-filter)
- [11. Exercícios sobre Arrays Bidimensionais every, sort, combinação e busca com indices](#11-exercícios-sobre-arrays-bidimensionais-every-sort-combinação-e-busca-com-indices)
- [12. Criação e Manipulação de Objetos](#12-criação-e-manipulação-de-objetos)
- [13. Exercícios de Objetos: new, this, keys, values, entries, herança e prototipagem](#13-exercícios-de-objetos-new-this-keys-values-entries-herança-e-prototipagem)
- [14. Exercícios de Funções, Parâmetros Padrão, Rest Parameter e Desestruturação de Parâmetros](#14-exercícios-de-funções-parâmetros-padrão-rest-parameter-e-desestruturação-de-parâmetros)
- [15. Exercícios de Function, retorno, arrow, múltiplos valores e antecipado](#15-exercícios-de-function-retorno-arrow-múltiplos-valores-e-antecipado)
- [16. Exercícios de Escopo](#16-exercícios-de-escopo)
- [17. Exercícios de métodos de objetos](#17-exercícios-de-métodos-de-objetos)
- [18. Exercícios de Funções Recursivas](#18-exercícios-de-funções-recursivas)
- [19. Exercícios sobre Funções Anônimas e Callback](#19-exercícios-sobre-funções-anônimas-e-callback)
- [20. Exercícios sobre Arrow Functions](#20-exercícios-sobre-arrow-functions)
- [21. Exercícios sobre IIFE (Immediately Invoked Function Expression)](#21-exercícios-sobre-iife-immediately-invoked-function-expression)
- [22. Exercícios sobre High-order Functions](#22-exercícios-sobre-high-order-functions)
- [23. Exercícios sobre High-order Functions e Arrays](#23-exercícios-sobre-high-order-functions-e-arrays)

---



---

## 01. Exercícios sobre Operadores Lógicos

### Exercícios Fáceis

1. **Verificação de maioridade**  
   Descrição: Crie um programa que verifique se uma pessoa é maior de idade. A pessoa é maior de idade se tiver 18 anos ou mais.

2. **Checagem de número par**  
   Descrição: Escreva uma função que checa se um número fornecido é par, retornando `true` se for par e `false` se for ímpar.

3. **Verificação de número positivo**  
   Descrição: Crie uma função que retorna `true` se um número for positivo ou zero e `false` caso contrário.

4. **Verificação de dois valores iguais**  
   Descrição: Escreva uma função que verifica se dois valores são iguais. A função deve retornar `true` se forem iguais e `false` caso contrário.

5. **Checagem de voto**  
   Descrição: Crie uma função que verifica se um eleitor pode votar. A pessoa pode votar se tiver 16 anos ou mais.

### Exercícios Médios

6. **Verificação de permissões**  
   Descrição: Crie uma função que verifica se um usuário tem permissão para acessar uma página, baseado em duas condições: o usuário deve estar logado e ser maior de idade.

7. **Checagem de idade para categorias de jogo**  
   Descrição: Crie um programa que checa se uma pessoa pode participar de uma categoria de jogo. As regras são:
   - Se a idade for maior ou igual a 18, ela pode participar da categoria A.
   - Se a idade for maior ou igual a 12, ela pode participar da categoria B.
   - Caso contrário, a pessoa não pode participar.

8. **Verificação de acesso com múltiplos critérios**  
   Crie uma função que verifica se um usuário tem permissão para acessar uma página com base nos seguintes critérios:
    - O usuário deve ser maior de idade **e** estar logado.
    - Além disso, o usuário deve ter uma conta ativa **ou** permissão adequada (como "admin" ou "editor").


9. **Checagem de dados do formulário**  
   Descrição: Escreva uma função que valida um formulário de registro. As condições de validação são:
   - O nome do usuário não pode ser vazio.
   - A senha deve ter pelo menos 8 caracteres e conter pelo menos um número e um caractere especial.

10. **Verificação de entrada para um evento**  
    Descrição: Crie um programa que verifica se uma pessoa pode entrar em um evento. Para isso, a pessoa deve:
    - Ser maior de 18 anos.
    - Estar acompanhada de um adulto (se tiver entre 16 e 18 anos).

### Exercícios Difíceis

11. **Controle de acesso com múltiplas permissões**  
    Descrição: Crie um sistema de controle de acesso que deve verificar se um usuário tem acesso a uma página, com base em 3 condições:
    - O usuário deve ser maior de 21 anos.
    - O usuário deve ser um administrador.
    - O usuário não pode estar banido.

12. **Verificação de elegibilidade para promoção**  
    Descrição: Escreva uma função que determina se um cliente é elegível para uma promoção. Para ser elegível, ele deve:
    - Ter feito compras acima de 500 reais ou ser um cliente VIP.
    - Não pode ter feito compras fraudulentas.

13. **Validação de dados complexos**  
    Descrição: Escreva uma função que valide se um usuário pode se registrar, considerando que:
    - A idade deve estar entre 18 e 30.
    - O nome não pode ser vazio.
    - A senha deve ter no mínimo 8 caracteres, um número e um caractere especial.

14. **Checagem de permissões avançadas**  
    Descrição: Crie um programa que verifica se um usuário pode acessar um sistema. As condições são:
    - O usuário deve ser maior de 18 anos.
    - O usuário deve ser administrador.
    - O usuário não pode ter sido banido.
    - O usuário deve ter feito pelo menos 1 compra no último mês.

15. **Verificação de números dentro de múltiplos intervalos**  
    Descrição: Crie uma função que checa se um número está dentro de qualquer um dos seguintes intervalos:
    - De 10 a 20.
    - De 30 a 40.

---

## 02. Exercícios de Estruturas Condicionais: If, Else e Else If

Esses exercícios têm o objetivo de ajudar você a entender e praticar o uso de estruturas condicionais em JavaScript. Em cada exercício, você será desafiado a implementar condições para diferentes cenários.

### Exercícios Fáceis

#### 1. Maior de dois números
**Descrição:** Crie uma função que recebe dois números e retorna o maior deles.  
**Exemplo de entrada:** 10, 5  
**Exemplo de saída:** 10  

#### 2. Número Par ou Ímpar
**Descrição:** Crie uma função que verifica se um número é par ou ímpar. A função deve retornar "par" ou "ímpar".  
**Exemplo de entrada:** 7  
**Exemplo de saída:** "ímpar"  

#### 3. Verificação de Idade
**Descrição:** Crie uma função que recebe a idade de uma pessoa e retorna se ela é maior de idade ("maior de idade") ou menor de idade ("menor de idade").  
**Exemplo de entrada:** 20  
**Exemplo de saída:** "maior de idade"  

#### 4. Número Positivo, Negativo ou Zero
**Descrição:** Crie uma função que recebe um número e verifica se ele é positivo, negativo ou igual a zero. A função deve retornar uma string com a descrição.  
**Exemplo de entrada:** -5  
**Exemplo de saída:** "negativo"  

#### 5. É Múltiplo de 3?
**Descrição:** Crie uma função que recebe um número e verifica se ele é múltiplo de 3. Retorne "é múltiplo de 3" ou "não é múltiplo de 3".  
**Exemplo de entrada:** 9  
**Exemplo de saída:** "é múltiplo de 3"  

---

### Exercícios Médios

#### 1. Verificar Maior de Três Números
**Descrição:** Crie uma função que recebe três números e retorna o maior deles.  
**Exemplo de entrada:** 10, 5, 20  
**Exemplo de saída:** 20  

#### 2. Dia da Semana
**Descrição:** Crie uma função que recebe um número de 1 a 7 e retorna o nome do dia da semana correspondente (1 = "Domingo", 2 = "Segunda", etc.).  
**Exemplo de entrada:** 4  
**Exemplo de saída:** "Quarta-feira"  

#### 3. Nota Final
**Descrição:** Crie uma função que recebe uma nota de 0 a 10 e retorna a classificação do aluno. A classificação deve ser:  
- A para notas de 9 a 10,  
- B para notas de 7 a 8.9,  
- C para notas de 5 a 6.9,  
- D para notas de 0 a 4.9.  

**Exemplo de entrada:** 8  
**Exemplo de saída:** "B"  

#### 4. Verificação de Triângulo
**Descrição:** Crie uma função que recebe três números e verifica se é possível formar um triângulo com esses valores. Para ser um triângulo, a soma de dois lados deve ser sempre maior que o terceiro lado.  
**Exemplo de entrada:** 3, 4, 5  
**Exemplo de saída:** "Triângulo válido"  

---

### Exercícios Difíceis

#### 1. Verificar o Ano Bissexto
**Descrição:** Crie uma função que recebe um ano e verifica se ele é bissexto. Um ano é bissexto se for divisível por 4, mas não por 100, ou se for divisível por 400.  
**Exemplo de entrada:** 2024  
**Exemplo de saída:** "Ano bissexto"  

#### 2. Classificação de Velocidade
**Descrição:** Crie uma função que recebe a velocidade de um carro e classifica a velocidade como:  
- "acelerando" se a velocidade for maior que 120 km/h,  
- "normal" se a velocidade for de 60 a 120 km/h,  
- "muito lenta" se a velocidade for menor que 60 km/h.  

**Exemplo de entrada:** 150  
**Exemplo de saída:** "acelerando"  

#### 3. Verificar se um Número é Primo
**Descrição:** Crie uma função que recebe um número e verifica se ele é primo. Um número é primo se ele for maior que 1 e não for divisível por nenhum número além de 1 e ele mesmo.  
**Exemplo de entrada:** 29  
**Exemplo de saída:** "Primo"  

#### 4. Verificar Faixa Etária
**Descrição:** Crie uma função que recebe a idade de uma pessoa e retorna a categoria dela, baseada na seguinte faixa etária:  
- "Criança" de 0 a 12 anos,  
- "Adolescente" de 13 a 17 anos,  
- "Adulto" de 18 a 59 anos,  
- "Idoso" de 60 anos em diante.  

**Exemplo de entrada:** 15  
**Exemplo de saída:** "Adolescente"  

#### 5. Jogo de Par ou Ímpar
**Descrição:** Crie uma função que recebe dois números (um de cada jogador) e verifica quem venceu o jogo de "Par ou Ímpar". Caso a soma dos dois números seja par, o primeiro jogador vence, caso contrário, o segundo jogador vence.  
**Exemplo de entrada:** 4, 5  
**Exemplo de saída:** "Primeiro jogador venceu"

---

## 03. Exercícios de Estruturas Condicionais: Switch

### Exercícios Fáceis

1. **Dia da Semana (Switch)**
   - **Descrição:** Crie uma função que recebe um número de 1 a 7 e retorna o nome do dia da semana correspondente.
     - 1: Domingo
     - 2: Segunda-feira
     - 3: Terça-feira
     - 4: Quarta-feira
     - 5: Quinta-feira
     - 6: Sexta-feira
     - 7: Sábado

2. **Verificação de Nota (Switch)**
   - **Descrição:** Crie uma função que recebe uma nota de 0 a 10 e retorna a classificação:
     - 9 e 10: A
     - 7 a 8: B
     - 5 a 6: C
     - Abaixo de 5: D

3. **Escolha de Fruta (Switch)**
   - **Descrição:** Crie uma função que recebe o nome de uma fruta e retorna se ela é doce, ácida ou neutra:
     - "maçã": doce
     - "laranja": ácida
     - "melão": neutra

4. **Verificar Tipo de Número (Switch)**
   - **Descrição:** Crie uma função que verifica se um número é positivo, negativo ou zero.
   
5. **Escolha de Cor (Switch)**
   - **Descrição:** Crie uma função que recebe uma cor e retorna se é primária ou secundária.
     - "vermelho": primária
     - "azul": primária
     - "amarelo": primária
     - "verde": secundária
     - "laranja": secundária
     - "roxo": secundária

---

### Exercícios Médios

1. **Classificação de Faixa Etária (Switch)**
   - **Descrição:** Crie uma função que recebe uma idade e retorna a faixa etária:
     - 0-12: Criança
     - 13-17: Adolescente
     - 18-59: Adulto
     - 60+: Idoso

2. **Gênero Musical (Switch)**
   - **Descrição:** Crie uma função que recebe um número e retorna o gênero musical:
     - 1: Pop
     - 2: Rock
     - 3: Jazz
     - 4: Blues
     - 5: Hip-hop

3. **Escolha de Comida (Switch)**
   - **Descrição:** Crie uma função que recebe o nome de uma comida e retorna o tipo de refeição correspondente:
     - "café": café da manhã
     - "almôndega": almoço
     - "sopa": jantar

4. **Placa de Trânsito (Switch)**
   - **Descrição:** Crie uma função que recebe o código de uma placa de trânsito e retorna o tipo de sinalização:
     - 1: Pare
     - 2: Atenção
     - 3: Proibido
     - 4: Liberação

5. **Tamanho de Camisa (Switch)**
   - **Descrição:** Crie uma função que recebe um número e retorna o tamanho de uma camiseta:
     - 1: P
     - 2: M
     - 3: G
     - 4: GG

---

### Exercícios Difíceis

1. **Classificação de Carro (Switch)**
   - **Descrição:** Crie uma função que recebe o tipo de combustível de um carro (1 - Gasolina, 2 - Álcool, 3 - Diesel, 4 - Elétrico) e retorna se o carro é eficiente ou não:
     - Gasolina: eficiente
     - Álcool: eficiente
     - Diesel: não eficiente
     - Elétrico: altamente eficiente

2. **Classificação de Rendimento (Switch)**
   - **Descrição:** Crie uma função que recebe um número de 1 a 10 e classifica o rendimento:
     - 1-3: Baixo
     - 4-6: Médio
     - 7-9: Bom
     - 10: Excelente

3. **Escolha de País (Switch)**
   - **Descrição:** Crie uma função que recebe o nome de um país e retorna o continente:
     - "Brasil": América do Sul
     - "Estados Unidos": América do Norte
     - "China": Ásia
     - "França": Europa

4. **Gestão de Estoque (Switch)**
   - **Descrição:** Crie uma função que recebe o status de um item (1 - disponível, 2 - esgotado, 3 - em promoção) e retorna a ação que deve ser tomada:
     - Disponível: vender
     - Esgotado: reposicionar estoque
     - Em promoção: destacar no site

5. **Mês do Ano (Switch)**
   - **Descrição:** Crie uma função que recebe um número de 1 a 12 e retorna o nome do mês correspondente.

---

## 04. Exercícios de Estruturas de Repetição

### **Fáceis:**

01. **Soma de Números de 1 até N (Usando For)**
Crie um programa que receba um número `N` do usuário e calcule a soma de todos os números inteiros de 1 até `N`. O resultado da soma deve ser impresso na tela. Por exemplo, se `N` for 5, a soma será `1 + 2 + 3 + 4 + 5`.

02. **Contagem de 1 até N (Usando For)**
Crie um programa que faça uma contagem de 1 até um número `N` fornecido pelo usuário. O programa deve imprimir cada número da contagem em uma linha separada. Por exemplo, se `N` for 4, a saída será:
```
1 2 3 4
```
03. **Tabuada de Multiplicação (Usando For)**
Crie um programa que exiba a tabuada de multiplicação de um número `N` fornecido pelo usuário. A tabuada deve ser exibida de 1 a 10. Por exemplo, se `N` for 3, a saída será:
```
3 x 1 = 3 3 x 2 = 6 3 x 3 = 9 ... 3 x 10 = 30
```
04. **Contagem Regressiva (Usando While)**
Crie um programa que faça uma contagem regressiva a partir de um número `N` fornecido pelo usuário, até o número zero. Cada número deve ser impresso na tela, um por linha. Por exemplo, se `N` for 5, a saída será:
```
5 4 3 2 1 0
```
05. **Soma dos Números Pares (Usando While)**
Crie um programa que calcule a soma de todos os números pares de 1 até um número `N` fornecido pelo usuário. A soma deve ser exibida no final. Por exemplo, se `N` for 10, a soma será `2 + 4 + 6 + 8 + 10`.

---

### **Médios:**

01. **Fatorial de um Número (Usando While)**
Crie um programa que calcule o fatorial de um número `N` fornecido pelo usuário. O fatorial de um número é o produto de todos os números inteiros de 1 até `N`. Por exemplo, se `N` for 5, o fatorial será `5! = 5 x 4 x 3 x 2 x 1 = 120`.

02. **Imprimir Sequência de Fibonacci (Usando For)**

**Descrição:** Crie um programa que imprima os `N` primeiros números da sequência de Fibonacci, onde `N` é fornecido pelo usuário. A sequência de Fibonacci começa com 0 e 1, e cada número subsequente é a soma dos dois anteriores. Por exemplo, se `N` for 6, a sequência será: `0, 1, 1, 2, 3, 5`.

03. **Contagem de Números Positivos e Negativos (Usando Do...While)**
Crie um programa que leia números fornecidos pelo usuário até que ele digite o número zero. O programa deve contar quantos números positivos e negativos foram fornecidos, e exibir o total de cada tipo. O número zero não conta na contagem.

04. **Verificação de Primo (Usando For)**
Crie um programa que receba um número `N` e determine se ele é primo. Um número primo é aquele que só pode ser dividido por 1 e por ele mesmo. O programa deve informar se o número é primo ou não.

05. **Imprimir Números Divisíveis por X (Usando While)**
Crie um programa que imprima todos os números divisíveis por `X` entre 1 e `N`, onde `X` e `N` são fornecidos pelo usuário. Por exemplo, se `X` for 3 e `N` for 20, a saída será: `3, 6, 9, 12, 15, 18`.

---

### **Difíceis:**

01. **Soma de Números Ímpares (Usando Do...While)**
Crie um programa que calcule a soma de todos os números ímpares entre 1 e `N`, onde `N` é fornecido pelo usuário. O programa deve imprimir a soma final. Por exemplo, se `N` for 10, a soma será `1 + 3 + 5 + 7 + 9`.

02. **Inverter um Número (Usando For)**
Crie um programa que inverta os dígitos de um número fornecido pelo usuário. Por exemplo, se o número for 1234, a saída será 4321. O programa deve funcionar para números com qualquer quantidade de dígitos.

03. **Contar Quantos Números Fatores de X (Usando While)**
Crie um programa que receba dois números `X` e `N`. O programa deve contar quantos números de 1 até `N` são múltiplos de `X`. Por exemplo, se `X` for 3 e `N` for 20, a saída será `6`, pois os múltiplos de 3 entre 1 e 20 são: `3, 6, 9, 12, 15, 18`.

04. **Imprimir Números Crescentes e Decrescentes (Usando For e While)**
Crie um programa que imprima números de 1 até `N` de forma crescente, e depois faça uma contagem regressiva de `N` até 1. O número `N` deve ser fornecido pelo usuário. Exemplo: Se `N` for 5, a saída será:
```
1 2 3 4 5 5 4 3 2 1
```
05. **Gerar uma Tabela de Multiplicação (Usando For)**
Crie um programa que gere uma tabela de multiplicação de 1 até `N` fornecido pelo usuário. A tabela deve ser organizada com linhas e colunas, onde cada célula será o resultado da multiplicação entre os números. Por exemplo, se `N` for 3, a tabela será:
```
1 x 1 = 1 1 x 2 = 2 1 x 3 = 3 2 x 1 = 2 2 x 2 = 4 2 x 3 = 6 3 x 1 = 3 3 x 2 = 6 3 x 3 = 9
```

---

## 05. Exercícios sobre Estruturas de Dados

### Fáceis

01. **Criando e Acessando um Array**
Crie um array com 5 números inteiros e imprima cada um deles no console. A seguir, acesse e imprima o primeiro e o último elemento do array.

02. **Soma de Elementos de um Array**
Dado um array de números, crie uma função que retorne a soma de todos os elementos do array.

03. **Adicionar e Remover Elementos de um Array**
Crie um array com alguns nomes. Adicione um nome ao final e remova o primeiro nome do array. Imprima o array após essas operações.

04. **Filtrando Elementos de um Array**
Crie um array de números e filtre apenas os números maiores que 10.

05. **Verificando a Existência de um Elemento em um Array**
Crie um array de strings e verifique se um determinado nome está presente no array.

---

### Médios

01. **Inverter um Array**
**Descrição:** Crie uma função que inverta a ordem dos elementos de um array.

02. **Objetos com Propriedades Dinâmicas**
Crie um objeto de pessoa com propriedades como `nome` e `idade`. Adicione uma nova propriedade chamada `cidade` e imprima o objeto completo.

03. **Encontrando o Maior Valor em um Array**
Crie uma função que encontre o maior número em um array de números.

04. **Ordenando um Array de Strings**
Crie um array de strings e ordene-o em ordem alfabética.

05. **Remover Duplicatas de um Array**
Crie uma função que remova os elementos duplicados de um array de números.

---

### Difíceis

01. **Implementando uma Pilha (Stack)**
Implemente uma pilha que tenha os métodos `push`, `pop` e `top`. Depois, crie uma instância da pilha e adicione e remova alguns elementos.

02. **Implementando uma Fila (Queue)**
Implemente uma fila com os métodos `enqueue` (adicionar elemento) e `dequeue` (remover elemento). Depois, crie uma fila e faça algumas operações.

03. **Buscando um Elemento em uma Lista**
Dado um array de objetos representando pessoas, implemente uma função que busque uma pessoa pelo nome e retorne o objeto completo da pessoa.

04. **Implementando um Dicionário (Mapa)**
Implemente uma estrutura de dados de dicionário (map) que possa armazenar pares chave-valor. Implemente os métodos para adicionar, remover e acessar um valor pelo nome da chave.

---

## 06. Exercícios sobre Arrays Métodos

## 1. `push()`

### Exercícios Fáceis:

1. **Exercício 1**:  
   Dado o array `let frutas = ["maçã", "banana", "laranja"];`, adicione o elemento `"manga"` ao final do array utilizando o método `push()`. Imprima o array após a modificação.

2. **Exercício 2**:  
   Crie um array `let numeros = [1, 2, 3, 4];` e use o `push()` para adicionar o número `5` ao final. Mostre o array após a alteração.

### Exercícios Médios:

3. **Exercício 3**:  
   Crie um array `let alunos = ["Ana", "Carlos", "Beatriz"];`. Adicione mais dois nomes ao final usando `push()`. Depois, mostre o array completo.

4. **Exercício 4**:  
   Dado o array `let times = ["Flamengo", "São Paulo", "Palmeiras"];`, adicione três times de futebol ao final do array e exiba o resultado.

### Exercícios Difíceis:

5. **Exercício 5**:  
   Crie um array de objetos representando produtos em estoque:  
   `let produtos = [{nome: "Camiseta", preco: 29.90}, {nome: "Calça", preco: 79.90}];`.  
   Adicione um novo produto ao final do array utilizando `push()`. O novo produto deve ser um objeto com `nome` e `preco`.

6. **Exercício 6**:  
   Dado um array `let ids = [101, 102, 103, 104];`, crie um novo array `let novosIds = [105, 106]` e adicione os valores de `novosIds` ao final de `ids` usando `push()`.

---

## 2. `pop()`

### Exercícios Fáceis:

1. **Exercício 1**:  
   Dado o array `let frutas = ["maçã", "banana", "laranja"];`, use o método `pop()` para remover o último item do array e mostre o array após a remoção.

2. **Exercício 2**:  
   Crie um array `let numeros = [10, 20, 30, 40];` e remova o último número com o método `pop()`. Imprima o array após a operação.

### Exercícios Médios:

3. **Exercício 3**:  
   Crie um array `let cores = ["vermelho", "azul", "verde", "amarelo"];`. Remova o último elemento e imprima a cor removida junto com o array restante.

4. **Exercício 4**:  
   Dado o array `let animais = ["gato", "cachorro", "pássaro", "hamster"];`, remova o último animal e exiba o novo array.

### Exercícios Difíceis:

5. **Exercício 5**:  
   Dado o array `let pilha = [1, 2, 3, 4, 5];`, use o `pop()` para remover dois elementos do final da pilha e exiba o conteúdo restante.

6. **Exercício 6**:  
   Crie um array `let documentos = [{nome: "contrato.pdf"}, {nome: "relatorio.docx"}, {nome: "imagem.jpg"}];`. Remova o último documento e exiba o nome do documento removido.

---

## 3. `unshift()`

### Exercícios Fáceis:

1. **Exercício 1**:  
   Dado o array `let frutas = ["banana", "maçã", "laranja"];`, adicione o elemento `"manga"` no início do array utilizando o método `unshift()`. Mostre o array resultante.

2. **Exercício 2**:  
   Crie um array `let numeros = [2, 3, 4];` e adicione o número `1` no início usando o método `unshift()`. Imprima o array depois da alteração.

### Exercícios Médios:

3. **Exercício 3**:  
   Crie um array `let carros = ["Fusca", "Gol", "Civic"];`. Adicione dois carros ao início do array e mostre o novo array.

4. **Exercício 4**:  
   Dado o array `let paises = ["Brasil", "Argentina", "Chile"];`, adicione o país `"Peru"` e `"Colômbia"` no início utilizando `unshift()`. Exiba o resultado.

### Exercícios Difíceis:

5. **Exercício 5**:  
   Dado o array `let pessoas = [{nome: "João", idade: 30}, {nome: "Maria", idade: 25}];`, adicione um novo objeto no início do array. O novo objeto deve ser `{nome: "José", idade: 40}`. Mostre o novo array.

6. **Exercício 6**:  
   Crie um array `let livros = ["O Hobbit", "1984", "Dom Quixote"];`. Adicione o livro `"Moby Dick"` e `"A Guerra dos Tronos"` no início do array utilizando `unshift()`. Mostre o array completo.

---

## 4. `shift()`

### Exercícios Fáceis:

1. **Exercício 1**:  
   Dado o array `let frutas = ["maçã", "banana", "laranja"];`, remova o primeiro elemento do array usando o método `shift()`. Mostre o array após a remoção.

2. **Exercício 2**:  
   Crie um array `let numeros = [10, 20, 30, 40];` e remova o primeiro número com o método `shift()`. Exiba o array resultante.

### Exercícios Médios:

3. **Exercício 3**:  
   Crie um array `let cores = ["vermelho", "azul", "verde", "amarelo"];`. Remova a primeira cor e imprima o array com as cores restantes.

4. **Exercício 4**:  
   Dado o array `let alunos = ["Ana", "Carlos", "Beatriz", "Davi"];`, remova o primeiro aluno e imprima o nome removido e o array restante.

### Exercícios Difíceis:

5. **Exercício 5**:  
   Crie um array `let notas = [8.5, 7.2, 9.0, 6.8];`. Use `shift()` para remover a primeira nota e, em seguida, calcule a média das notas restantes.

6. **Exercício 6**:  
   Dado o array `let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre"];`, remova a primeira cidade e exiba as cidades restantes com o índice de cada cidade.

---

## 5. `indexOf()`

### Exercícios Fáceis:

1. **Exercício 1**:  
   Dado o array `let frutas = ["maçã", "banana", "laranja"];`, encontre o índice da fruta `"banana"` usando o método `indexOf()`. Exiba o índice encontrado.

2. **Exercício 2**:  
   Crie um array `let numeros = [10, 20, 30, 40];`. Encontre o índice do número `30` e imprima.

### Exercícios Médios:

3. **Exercício 3**:  
   Crie um array `let animais = ["gato", "cachorro", "pássaro", "hamster"];`. Use `indexOf()` para encontrar o índice do animal `"pássaro"` e mostre o índice.

4. **Exercício 4**:  
   Dado o array `let cores = ["azul", "verde", "amarelo", "vermelho"];`, encontre o índice da cor `"vermelho"` e mostre o valor correspondente.

### Exercícios Difíceis:

5. **Exercício 5**:  
   Dado o array `let pessoas = ["João", "Maria", "Pedro", "Ana"];`, encontre o índice de `"Maria"` e depois substitua esse valor por `"Paula"`. Mostre o array após a alteração.

6. **Exercício 6**:  
   Crie um array de objetos representando produtos:  
   `let produtos = [{nome: "Camiseta", preco: 29.90}, {nome: "Calça", preco: 79.90}];`. Encontre o índice do produto `"Calça"` e exiba o índice e o produto correspondente.

---

## 6. `slice()`

### Exercícios Fáceis:

1. **Exercício 1**:  
   Dado o array `let frutas = ["maçã", "banana", "laranja", "manga"];`, use `slice()` para criar um novo array contendo as duas primeiras frutas. Mostre o novo array.

2. **Exercício 2**:  
   Crie um array `let numeros = [1, 2, 3, 4, 5, 6];` e utilize `slice()` para obter os números do índice 2 até o 4. Mostre o novo array.

### Exercícios Médios:

3. **Exercício 3**:  
   Crie um array `let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre"];`. Use `slice()` para criar um novo array com as duas últimas cidades. Exiba o novo array.

4. **Exercício 4**:  
   Dado o array `let produtos = ["Camiseta", "Calça", "Tênis", "Jaqueta"];`, use `slice()` para pegar os elementos de índice 1 até o 3. Mostre o novo array.

### Exercícios Difíceis:

5. **Exercício 5**:  
   Dado o array `let alunos = ["Ana", "Carlos", "Beatriz", "Davi", "Eduardo", "Felipe"];`, crie um novo array contendo os alunos do índice 2 ao 4. Mostre o novo array.

6. **Exercício 6**:  
   Dado o array `let livros = ["O Hobbit", "1984", "Dom Quixote", "A Guerra dos Tronos", "Moby Dick"];`, crie um novo array contendo apenas os livros de índice 1 a 3. Exiba o novo array.

---

## 7. `splice()`

### Exercícios Fáceis:

1. **Exercício 1**:  
   Dado o array `let frutas = ["maçã", "banana", "laranja"];`, use `splice()` para remover o segundo elemento e exiba o array resultante.

2. **Exercício 2**:  
   Crie um array `let numeros = [10, 20, 30, 40];`. Use `splice()` para remover o número `20` e exiba o array resultante.

### Exercícios Médios:

3. **Exercício 3**:  
   Crie um array `let cores = ["vermelho", "azul", "verde", "amarelo"];`. Use `splice()` para remover a cor "verde" e adicionar "preto". Mostre o array após a modificação.

4. **Exercício 4**:  
   Dado o array `let alunos = ["Ana", "Carlos", "Beatriz", "Davi"];`, use `splice()` para substituir "Carlos" por "José". Mostre o resultado.

### Exercícios Difíceis:

5. **Exercício 5**:  
   Crie um array `let times = ["Flamengo", "São Paulo", "Palmeiras", "Grêmio"];`. Remova os dois primeiros times e adicione "Atlético" e "Vasco" no início. Mostre o array final.

6. **Exercício 6**:  
   Dado o array `let produtos = [{nome: "Camiseta", preco: 29.90}, {nome: "Calça", preco: 79.90}, {nome: "Tênis", preco: 99.90}];`, use `splice()` para substituir o segundo produto por `{nome: "Jaqueta", preco: 149.90}`. Mostre o array atualizado.

---

## 8. `includes()`

### Exercícios Fáceis:

1. **Exercício 1**:  
   Dado o array `let frutas = ["maçã", "banana", "laranja"];`, verifique se o array contém a fruta `"banana"` utilizando o método `includes()`. Mostre o resultado.

2. **Exercício 2**:  
   Crie um array `let numeros = [1, 2, 3, 4];`. Verifique se o número `3` está presente no array usando `includes()`. Imprima o resultado.

### Exercícios Médios:

3. **Exercício 3**:  
   Crie um array `let alunos = ["Ana", "Carlos", "Beatriz", "Davi"];`. Verifique se o aluno `"Carlos"` está presente no array utilizando `includes()`. Mostre o resultado.

4. **Exercício 4**:  
   Dado o array `let paises = ["Brasil", "Argentina", "Chile"];`, verifique se o país `"Peru"` está no array com `includes()`. Exiba o resultado.

### Exercícios Difíceis:

5. **Exercício 5**:  
   Dado o array `let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre"];`, verifique se `"Manaus"` está presente no array utilizando `includes()`. Mostre o resultado.

6. **Exercício 6**:  
   Crie um array `let carros = ["Fusca", "Gol", "Civic", "Opala"];`. Verifique se o carro `"Civic"` e `"Uno"` estão no array usando `includes()`. Exiba o resultado para ambos.

---

## 07. Exercícios de Arrays Iteração

## Exercícios sobre `forEach`

### Fácil

1. **Imprimir elementos de um array**  
   Dado o array `let numbers = [1, 2, 3, 4, 5];`, use o `forEach` para imprimir cada número no console.

   **Objetivo:** Iterar sobre o array e imprimir cada número.

2. **Soma de números**  
   Dado o array `let numbers = [10, 20, 30, 40];`, use o `forEach` para somar todos os números e imprimir o resultado.

   **Objetivo:** Iterar sobre o array e acumular a soma dos números.

### Médio

3. **Alterar elementos de um array**  
   Dado o array `let names = ["Alice", "Bob", "Charlie"];`, use o `forEach` para adicionar "!" ao final de cada nome e criar um novo array com os nomes modificados.

   **Objetivo:** Modificar os elementos do array dentro do `forEach`.

4. **Contar a quantidade de números negativos**  
   Dado o array `let numbers = [-1, 2, -3, 4, -5];`, use o `forEach` para contar quantos números negativos existem no array e imprimir o resultado.

   **Objetivo:** Contar e imprimir a quantidade de números negativos usando `forEach`.

### Difícil

5. **Média dos valores de um array de objetos**  
   Dado o array `let students = [{ name: "Alice", score: 85 }, { name: "Bob", score: 92 }, { name: "Charlie", score: 78 }];`, use o `forEach` para calcular a média das notas e imprimir o resultado.

   **Objetivo:** Calcular a média das notas dos alunos usando `forEach`.

6. **Formatar uma lista de objetos em formato de string**  
   Dado o array `let products = [{ name: "Camiseta", price: 25 }, { name: "Calça", price: 50 }, { name: "Tênis", price: 100 }];`, use o `forEach` para criar um novo array com uma descrição de cada produto, como `"Camiseta: R$25"`.

   **Objetivo:** Criar uma lista formatada de produtos usando `forEach`.

## Exercícios sobre `map`

### Fácil

1. **Criar um novo array com o quadrado de cada número**  
   Dado o array `let numbers = [1, 2, 3, 4];`, use o `map` para criar um novo array contendo o quadrado de cada número.

   **Objetivo:** Transformar os valores do array.

2. **Converter temperaturas de Celsius para Fahrenheit**  
   Dado o array `let celsius = [0, 20, 30, 40];`, use o `map` para converter as temperaturas para Fahrenheit e criar um novo array com esses valores.

   **Objetivo:** Realizar conversões de Celsius para Fahrenheit.

### Médio

3. **Adicionar sufixo a cada elemento de uma lista de nomes**  
   Dado o array `let names = ["Maria", "João", "Lucas", "Ana"];`, use o `map` para adicionar o sufixo `" Filho"` a cada nome.

   **Objetivo:** Modificar os elementos do array com o `map`.

4. **Dobrar os valores de um array**  
   Dado o array `let numbers = [5, 10, 15, 20];`, use o `map` para criar um novo array com os valores dobrados.

   **Objetivo:** Aplicar uma transformação de duplicação nos valores do array.

### Difícil

5. **Extrair preços de produtos e calcular descontos**  
   Dado o array `let products = [{ name: "Camiseta", price: 25 }, { name: "Calça", price: 50 }, { name: "Tênis", price: 100 }];`, use o `map` para aplicar um desconto de 10% em cada produto e criar um novo array com os preços com desconto.

   **Objetivo:** Calcular e criar um novo array com os preços com desconto.

6. **Converter uma lista de objetos para uma lista de nomes**  
   Dado o array `let people = [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }];`, use o `map` para criar um novo array contendo apenas os nomes das pessoas.

   **Objetivo:** Extrair informações específicas de objetos e criar um novo array.

## Exercícios sobre `filter`

### Fácil

1. **Filtrar números maiores que 10**  
   Dado o array `let numbers = [5, 12, 8, 130, 44];`, use o `filter` para criar um novo array com os números maiores que 10.

   **Objetivo:** Filtrar elementos que atendem a uma condição específica.

2. **Filtrar palavras maiores que 4 letras**  
   Dado o array `let words = ["apple", "banana", "kiwi", "pear"];`, use o `filter` para criar um novo array contendo apenas palavras com mais de 4 letras.

   **Objetivo:** Aplicar um filtro para extrair elementos baseados em um critério de tamanho.

### Médio

3. **Filtrar produtos baratos**  
   Dado o array `let products = [{ name: "Camiseta", price: 25 }, { name: "Calça", price: 50 }, { name: "Tênis", price: 100 }];`, use o `filter` para criar um novo array contendo apenas produtos com preço menor que 50.

   **Objetivo:** Filtrar objetos com base em um valor numérico.

4. **Filtrar números negativos de um array**  
   Dado o array `let numbers = [-10, 5, -3, 7, -1];`, use o `filter` para criar um novo array contendo apenas os números negativos.

   **Objetivo:** Filtrar elementos negativos de um array de números.

### Difícil

5. **Filtrar pessoas maiores de 18 anos**  
   Dado o array `let people = [{ name: "Alice", age: 30 }, { name: "Bob", age: 17 }, { name: "Charlie", age: 25 }];`, use o `filter` para criar um novo array contendo apenas as pessoas maiores de 18 anos.

   **Objetivo:** Filtrar objetos com base em uma condição em que uma propriedade seja maior que um valor específico.

6. **Filtrar tarefas não concluídas**  
   Dado o array `let tasks = [{ task: "Estudar", done: true }, { task: "Comprar leite", done: false }, { task: "Ir ao médico", done: true }];`, use o `filter` para criar um novo array contendo apenas as tarefas não concluídas (`done: false`).

   **Objetivo:** Filtrar objetos de tarefas não concluídas.

## Exercícios sobre `reduce`

### Fácil

1. **Somar os valores de um array**  
   Dado o array `let numbers = [5, 10, 15, 20];`, use o `reduce` para somar todos os valores e retornar o total.

   **Objetivo:** Acumular a soma de todos os valores no array.

2. **Concatenar palavras**  
   Dado o array `let words = ["Hello", "world", "from", "JavaScript"];`, use o `reduce` para concatenar todas as palavras em uma única string.

   **Objetivo:** Concatenar todos os elementos do array em uma única string.

### Médio

3. **Multiplicar todos os elementos de um array**  
   Dado o array `let numbers = [1, 2, 3, 4];`, use o `reduce` para multiplicar todos os números e retornar o resultado.

   **Objetivo:** Acumular o produto de todos os valores no array.

4. **Contar ocorrências de uma letra em uma lista de palavras**  
   Dado o array `let words = ["apple", "banana", "cherry", "date"];`, use o `reduce` para contar quantas vezes a letra `"a"` aparece em todas as palavras.

   **Objetivo:** Contar as ocorrências de uma letra específica em uma lista de strings.

### Difícil

5. **Calcular a média de uma lista de números**  
   Dado o array `let numbers = [1, 2, 3, 4, 5];`, use o `reduce` para calcular a média dos números.

   **Objetivo:** Calcular a média de um conjunto de números.

6. **Agrupar objetos por uma propriedade**  
   Dado o array `let products = [{ name: "Camiseta", category: "Roupas" }, { name: "Calça", category: "Roupas" }, { name: "Tênis", category: "Calçados" }];`, use o `reduce` para agrupar os produtos pela categoria e criar um objeto onde as chaves são as categorias e os valores são arrays de produtos.

   **Objetivo:** Agrupar elementos de um array em um objeto com base em uma propriedade.

---

## 08. Exercícios sobre Arrays Bidimensionais

### Nível Fácil

1. **Soma de Elementos**  
   Crie uma função que receba um array bidimensional de números e retorne a soma de todos os elementos presentes nele.

2. **Linha com Maior Soma**  
   Escreva um programa que identifique a linha de um array bidimensional que possui a maior soma dos seus elementos.

3. **Contar Números Pares**  
   Implemente uma função que receba um array bidimensional e conte quantos números pares existem nele.

4. **Transposição Simples**  
   Crie uma função que receba um array bidimensional 2x2 e retorne sua matriz transposta.

5. **Diagonal Principal**  
   Escreva uma função que receba um array bidimensional quadrado e retorne os elementos da diagonal principal como um array unidimensional.

---

### Nível Médio

6. **Verificar Simetria**  
   Implemente uma função que verifique se um array bidimensional quadrado é simétrico. Um array é simétrico se ele for igual à sua transposta.

7. **Multiplicação por Escalar**  
   Crie uma função que receba um array bidimensional e um número. A função deve retornar um novo array onde cada elemento foi multiplicado pelo número recebido.

8. **Busca de Elemento**  
   Escreva uma função que receba um array bidimensional e um número. A função deve verificar se o número está presente no array e, se sim, retornar suas coordenadas (linha e coluna).

9. **Somar Matrizes**  
   Crie uma função que receba dois arrays bidimensionais de mesmo tamanho e retorne uma nova matriz que seja a soma dos dois arrays.

10. **Menor e Maior Elemento**  
    Escreva uma função que receba um array bidimensional e retorne um objeto contendo o menor e o maior elemento do array.

---

### Nível Difícil

11. **Produto de Matrizes**  
    Implemente uma função que receba dois arrays bidimensionais e retorne o produto matricial entre eles.

12. **Caminho da Soma Máxima**  
    Crie uma função que receba um array bidimensional onde cada célula representa um "custo". A função deve encontrar o caminho da soma máxima, movendo-se apenas para a direita ou para baixo, e retornar o valor total desse caminho.

13. **Zig-Zag Bidimensional**  
    Escreva uma função que receba um array bidimensional e retorne os elementos em ordem de "zig-zag" (alternando a direção em cada linha).

14. **Rotação de Matriz**  
    Implemente uma função que receba um array bidimensional quadrado e o rotacione 90 graus no sentido horário.

15. **Verificar Quadrado Mágico**  
    Escreva uma função que receba um array bidimensional quadrado e verifique se ele é um quadrado mágico. Um quadrado mágico é uma matriz onde a soma de cada linha, coluna e diagonal é a mesma.

---

## 09. Exercícios Focados em `flat` e `map` para Arrays Bidimensionais

## Focados em `flat`

### Nível Fácil

1. **Flattening Simples**  
   Crie uma função que receba um array bidimensional e utilize `flat` para transformar o array em um array unidimensional.

2. **Soma dos Elementos Flattened**  
   Escreva uma função que receba um array bidimensional, utilize `flat` para transformá-lo em um array unidimensional e retorne a soma de todos os elementos.

---

### Nível Médio

3. **Flattening com Nível Específico**  
   Crie uma função que receba um array tridimensional (ou superior) e utilize `flat` com o nível adequado para transformá-lo em um array bidimensional.

4. **Filtrar e Flatten**  
   Escreva uma função que receba um array bidimensional, filtre os elementos maiores que 10 e utilize `flat` para retornar os elementos filtrados em um array unidimensional.

---

### Nível Difícil

5. **Flatten e Frequência de Valores**  
   Implemente uma função que receba um array bidimensional, use `flat` para transformá-lo em um array unidimensional e retorne um objeto que conta a frequência de cada número no array.

6. **Flatten e Operações Matemáticas**  
   Crie uma função que receba um array tridimensional, utilize `flat` para reduzir sua profundidade, some todos os elementos e calcule a média.

---

## Focados em `map`

### Nível Fácil

1. **Dobrar Valores**  
   Crie uma função que receba um array bidimensional e utilize `map` para dobrar o valor de cada elemento.

2. **Adicionar Índices**  
   Escreva uma função que receba um array bidimensional e utilize `map` para criar um novo array onde cada elemento seja a soma do valor original e do índice da linha.

---

### Nível Médio

3. **Strings com Comprimento**  
   Crie uma função que receba um array bidimensional de strings e utilize `map` para criar um novo array que contenha o comprimento de cada string.

4. **Matriz Transposta com Map**  
    Escreva uma função que receba um array bidimensional e utilize `map` para criar sua transposta.

---

### Nível Difícil

5. **Map e Transformação Condicional**  
    Implemente uma função que receba um array bidimensional e utilize `map` para transformar os elementos negativos em positivos, mantendo os positivos inalterados.

6. **Map para Criar Objetos**  
    Crie uma função que receba um array bidimensional e utilize `map` para retornar um novo array onde cada elemento é um objeto com as propriedades `linha`, `coluna` e `valor`.

---

## 10. Exercícios sobre Arrays Bidimensionais for, reduce e filter

## Focados em `for` e `forEach`

### Nível Fácil

1. **Contar Elementos**  
   Crie uma função `contarElementos(matriz)` que, usando um loop `for`, conte e retorne o número total de elementos em uma matriz bidimensional.

2. **Exibir Todos os Valores**  
   Escreva uma função `exibirValores(matriz)` que use `forEach` para imprimir cada elemento da matriz no console.

---

### Nível Médio

3. **Somar Elementos de Cada Linha**  
   Crie uma função `somaPorLinha(matriz)` que use um loop `for` para retornar um array onde cada elemento é a soma dos valores da respectiva linha da matriz.

4. **Multiplicar Todos os Valores por 2**  
   Desenvolva uma função `multiplicarPorDois(matriz)` que, utilizando `forEach`, modifique a matriz original multiplicando todos os valores por 2.

---

### Nível Difícil

5. **Encontrar o Maior Valor e sua Posição**  
   Crie uma função `encontrarMaior(matriz)` que, usando um loop `for`, encontre o maior valor na matriz e retorne um objeto com o valor e sua posição (`{ valor: maiorValor, linha: x, coluna: y }`).

6. **Gerar Transposta Manualmente**  
   Escreva uma função `transposta(matriz)` que, utilizando loops `for`, gere e retorne a matriz transposta (colunas viram linhas e vice-versa).

---

## Focados em `reduce`

### Nível Fácil

1. **Soma Total de Elementos**  
   Crie uma função `somaTotal(matriz)` que use `reduce` para calcular a soma de todos os elementos da matriz.

2. **Concatenar Linhas**  
   Escreva uma função `concatenarLinhas(matriz)` que utilize `reduce` para unir todas as linhas da matriz em um único array.

---

### Nível Médio

3. **Calcular Frequência de Elementos**  
   Desenvolva uma função `frequenciaElementos(matriz)` que use `reduce` para retornar um objeto representando a frequência de cada elemento na matriz.

4. **Soma Condicional**  
    Crie uma função `somaPares(matriz)` que utilize `reduce` para somar apenas os números pares da matriz.

---

### Nível Difícil

5. **Agrupar Valores por Paridade**  
    Escreva uma função `agruparPorParidade(matriz)` que, usando `reduce`, retorne um objeto com dois arrays: `{ pares: [], impares: [] }`.

6. **Calcular a Média de Cada Linha**  
    Desenvolva uma função `mediaPorLinha(matriz)` que utilize `reduce` para retornar um array onde cada elemento é a média dos valores da respectiva linha.

---

## Focados em `filter`

### Nível Fácil

1. **Filtrar Números Maiores que 10**  
    Crie uma função `filtrarMaiores(matriz)` que utilize `filter` para retornar um array com todos os valores maiores que 10.

2. **Filtrar Linhas com um Valor Específico**  
    Escreva uma função `filtrarLinhas(matriz, valor)` que use `filter` para retornar apenas as linhas que contenham o `valor` fornecido.

---

### Nível Médio

3. **Remover Valores Negativos**  
    Desenvolva uma função `removerNegativos(matriz)` que utilize `filter` para retornar uma nova matriz sem valores negativos.

4. **Filtrar e Flatten**  
    Crie uma função `filtrarEFlatten(matriz)` que use `filter` para manter apenas os valores maiores que 5 e retorne a matriz "flattened".

---

### Nível Difícil

5. **Filtrar e Ordenar Linhas por Soma**  
    Escreva uma função `filtrarEOrdenar(matriz, limite)` que use `filter` para manter apenas as linhas cuja soma seja maior que `limite` e, em seguida, ordene essas linhas em ordem crescente com base em suas somas.

6. **Encontrar Linhas com Todos os Valores Pares**  
    Desenvolva uma função `filtrarLinhasPares(matriz)` que use `filter` para retornar apenas as linhas onde todos os valores são pares.

---

## 11. Exercícios sobre Arrays Bidimensionais every, sort, combinação e busca com indices

## Focados em `every` ou `some`

### Fáceis

1. **Verifique se todos os números em um array são maiores que 10.**
   - Dado o array: `[12, 15, 18, 20]`
   - Use o método `every` para verificar se todos os números são maiores que 10.

2. **Verifique se pelo menos um número é maior que 100.**
   - Dado o array: `[5, 8, 120, 40]`
   - Use o método `some` para verificar se existe pelo menos um número maior que 100.

### Médios

3. **Verifique se todos os elementos de um array de strings possuem mais de 3 caracteres.**
   - Dado o array: `["banana", "maçã", "laranja", "kiwi"]`
   - Use o método `every` para verificar se todos os elementos possuem mais de 3 caracteres.

4. **Verifique se pelo menos um número no array é divisível por 5.**
   - Dado o array: `[2, 8, 15, 30, 4]`
   - Use o método `some` para verificar se pelo menos um número é divisível por 5.

### Difíceis

5. **Verifique se todos os valores de um array de objetos possuem uma propriedade `active` como `true`.**
   - Dado o array: 
   ```
   const users = [
     { name: 'Alice', active: true },
     { name: 'Bob', active: true },
     { name: 'Charlie', active: true }
   ];
   ```
- Use o método ```every``` para verificar se todos os valores possuem a propriedade ```active``` como ```true```.

6. **Verifique se pelo menos um número em um array de arrays é negativo.**
- Dado o array: ```[ [1, 2], [3, -4], [5, 6] ]```
- Use o método ```some``` para verificar se pelo menos um número em qualquer subarray é negativo.

## Focados em ```sort```

### Fáceis

1. **Ordene um array de números em ordem crescente.**
- Dado o array: ```[5, 3, 8, 1, 2]```
- Use o método sort para ordenar o array em ordem crescente.

2. **Ordene um array de números em ordem decrescente.**

- Dado o array: ```[12, 9, 15, 4, 7]```
- Use o método sort para ordenar o array em ordem decrescente.

### Médios

3. **Ordene um array de strings em ordem alfabética.**
- Dado o array: ```["banana", "maçã", "laranja", "kiwi"]```
- Use o método ```sort``` para ordenar as strings em ordem alfabética.

4. **Ordene um array de objetos pelo valor de uma propriedade numérica.**
- Dado o array:
```
const products = [
  { name: 'Apple', price: 5 },
  { name: 'Banana', price: 2 },
  { name: 'Orange', price: 3 }
];
```
- Use o método ```sort``` para ordenar os produtos pelo preço em ordem crescente.

### Difíceis

5. **Ordene um array de objetos com base em uma propriedade de data.**
- Dado o array:
```
const events = [
  { name: 'Event 1', date: '2022-12-25' },
  { name: 'Event 2', date: '2023-01-15' },
  { name: 'Event 3', date: '2022-11-01' }
];
```
- Use o método ```sort``` para ordenar os eventos pela data em ordem crescente.

6. **Ordene um array de objetos de acordo com a diferença entre duas propriedades numéricas.**
- Dado o array:
```
const cars = [
  { name: 'Car A', speed: 120, weight: 1000 },
  { name: 'Car B', speed: 150, weight: 1200 },
  { name: 'Car C', speed: 180, weight: 800 }
];
```
- Use o método ```sort``` para ordenar os carros com base na diferença entre ```speed``` e ```weight```.

## Focado em Combinação com Estruturas Avançadas

### Fáceis

1. **Use ```map``` para dobrar todos os valores de um array.**
- Dado o array: ```[1, 2, 3, 4]```
- Use ```map``` para dobrar cada valor do array.

2. **Use ```filter``` para criar um novo array com apenas os números pares.**
- Dado o array: ```[1, 2, 3, 4, 5, 6]```
- Use ```filter``` para selecionar os números pares.
  
### Médios

3. **Crie um novo array com o quadrado de cada número usando ```map```.**
- Dado o array: ```[2, 3, 4, 5]```
- Use ```map``` para criar um array com o quadrado de cada número.

4. **Use ```reduce``` para somar todos os valores de um array.**
- Dado o array: ```[1, 2, 3, 4]```
- Use ```reduce``` para somar todos os valores do array.
  
### Difíceis

5. **Crie um novo array com o dobro dos números positivos e o quadrado dos negativos, utilizando ```map``` e ```filter```.**
- Dado o array: ```[2, -3, 4, -5]```
- Use``` map para dobrar os positivos e elevar ao quadrado os negativos, com ```filter``` para filtrar os valores.

6. **Use ```reduce``` para concatenar todos os elementos de um array de strings.**
- Dado o array: ```["Olá", "mundo", "!"]```
- Use ```reduce``` para concatenar todas as strings em uma única.
  
## Focados em Busca de Elementos com Índices

### Fáceis

1. **Encontre o índice de um número em um array.**
- Dado o array: ```[10, 20, 30, 40]```
- Use ```indexOf``` para encontrar o índice do número ```30```.
  
2. **Verifique se um valor existe no array utilizando ```includes``` e obtenha o índice.
- Dado o array: ```[5, 8, 12, 15]```
- Use ```includes``` para verificar se o número 8 existe no array e ```indexOf``` para encontrar o índice.

### Médios

3. **Encontre o índice de um elemento em um array de objetos.**
- Dado o array:
```
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
```
- Use ```findIndex``` para encontrar o índice do objeto com o nome ```Bob```.

4. **Verifique se um número existe no array e, se existir, retorne o índice utilizando ```findIndex```.**
- Dado o array: ```[2, 4, 6, 8]```
- Use ```findIndex``` para encontrar o índice do número 6.

### Difíceis

5. **Encontre o índice do primeiro número negativo em um array de números utilizando ```findIndex```.**
- Dado o array: ```[2, 3, -4, 5, 6]```
- Use ```findIndex``` para encontrar o índice do primeiro número negativo.

6. **Encontre o índice do último elemento que é maior que 10 em um array de números utilizando ```findLastIndex```.
- Dado o array: ```[5, 7, 12, 8, 15]```
- Use ```findLastIndex``` para encontrar o índice do último número maior que 10.

---

## 12. Criação e Manipulação de Objetos

### Fáceis

1. **Crie um objeto `carro` com as propriedades `marca`, `modelo` e `ano` e exiba-as no console.**
2. **Adicione uma nova propriedade `cor` ao objeto `carro` e exiba o objeto completo no console.**

### Médios

3. **Crie um objeto `pessoa` com as propriedades `nome`, `idade` e `cidade`. Depois, altere a propriedade `idade` e adicione uma nova propriedade `profissão`. Exiba o objeto no console.**
4. **Crie um objeto `livro` com as propriedades `titulo`, `autor`, e `ano`. Em seguida, modifique o valor de `ano` e remova a propriedade `autor`. Exiba o objeto no console.**

### Difíceis

5. **Crie um objeto `produto` com as propriedades `nome`, `preco` e `estoque`. Depois, adicione uma propriedade `desconto` que será 10% do preço, e remova a propriedade `estoque`. Exiba o objeto completo no console.**
6. **Crie um objeto `cliente` com as propriedades `nome`, `email`, e `telefone`. Adicione uma propriedade `endereco`, que será um objeto com `rua`, `numero`, e `cidade`. Exiba o objeto completo no console.**

---

## Notação Literal e Construtor Object

### Fáceis

1. **Crie um objeto `carro` utilizando a notação literal e exiba suas propriedades.**
2. **Crie um objeto `pessoa` utilizando o construtor `Object()` e exiba suas propriedades.**

### Médios

3. **Crie um objeto `aluno` utilizando a notação literal, com as propriedades `nome`, `idade`, e `curso`. Depois, adicione uma nova propriedade `notaFinal` utilizando o construtor `Object()`. Exiba o objeto completo no console.**
4. **Crie um objeto `livro` utilizando o construtor `Object()`, com as propriedades `titulo` e `autor`. Em seguida, adicione uma nova propriedade `ano` com a notação literal. Exiba o objeto completo no console.**

### Difíceis

5. **Crie um objeto `produto` utilizando o construtor `Object()` com as propriedades `nome`, `preco`, e `categoria`. Depois, altere o valor de `preco` usando a notação literal e remova a propriedade `categoria`. Exiba o objeto completo no console.**
6. **Crie um objeto `evento` utilizando o construtor `Object()` e adicione as propriedades `nome`, `data`, e `local`. Em seguida, altere o valor de `local` com a notação literal e adicione a propriedade `descricao`. Exiba o objeto completo no console.**

---

## Notação de Pontos e Colchetes

### Fáceis

1. **Acesse a propriedade `marca` do objeto `carro` utilizando a notação de pontos e exiba no console.**
2. **Crie um objeto `carro` com a propriedade `cor`. Acesse e altere essa propriedade utilizando a notação de colchetes e exiba no console.**

### Médios

3. **Crie um objeto `pessoa` com as propriedades `nome`, `idade` e `cidade`. Acesse e altere a propriedade `idade` utilizando a notação de pontos. Exiba o objeto no console.**
4. **Crie um objeto `livro` com as propriedades `titulo`, `autor` e `ano`. Utilize a notação de colchetes para acessar e modificar a propriedade `ano`. Exiba o objeto no console.**

### Difíceis

5. **Crie um objeto `produto` com as propriedades `nome`, `preco` e `estoque`. Utilize a notação de pontos para acessar o preço e a notação de colchetes para acessar o estoque. Exiba os valores no console.**
6. **Crie um objeto `cliente` com as propriedades `nome`, `email` e `telefone`. Utilize a notação de colchetes para alterar o valor do email. Exiba o objeto no console.**

---

## Manipulação de Objetos (Adicionando, Modificando e Deletando Propriedades)

### Fáceis

1. **Crie um objeto `livro` com as propriedades `titulo` e `autor`. Adicione a propriedade `ano` e exiba o objeto no console.**
2. **Crie um objeto `carro` com as propriedades `marca`, `modelo` e `ano`. Modifique a propriedade `modelo` e exiba o objeto no console.**

### Médios

3. **Crie um objeto `produto` com as propriedades `nome`, `preco` e `quantidade`. Adicione uma propriedade `desconto` e remova a propriedade `quantidade`. Exiba o objeto no console.**
4. **Crie um objeto `pessoa` com as propriedades `nome`, `idade` e `cidade`. Modifique a propriedade `cidade` e remova a propriedade `idade`. Exiba o objeto no console.**

### Difíceis

5. **Crie um objeto `evento` com as propriedades `nome`, `data` e `local`. Modifique a propriedade `local` e adicione uma nova propriedade `descricao`. Em seguida, remova a propriedade `data` e exiba o objeto completo no console.**
6. **Crie um objeto `funcionario` com as propriedades `nome`, `cargo`, `salario`. Adicione uma nova propriedade `departamento` e remova a propriedade `cargo`. Exiba o objeto no console.**

---

## 13. Exercícios de Objetos, new, this, keys, values, entries, herança e prototipagem

## new

### Fácil
1. **Criar uma instância de um objeto**
   - Crie uma função `Carro` que receba dois parâmetros, `marca` e `modelo`, e dentro da função, defina duas propriedades no objeto: `marca` e `modelo`. Use o operador `new` para criar uma instância dessa função e exiba as propriedades da instância no console.

### Médio
2. **Simular a criação de um objeto com `new`**
   - Crie uma função construtora chamada `Pessoa` que tenha as propriedades `nome` e `idade`. Use `new` para criar uma instância e adicione um método `falar()` que imprima a mensagem "Olá, meu nome é {nome}" no console.

### Difícil
3. **Usando `new` com herança**
   - Crie uma função construtora `Animal` com a propriedade `especie` e um método `falar()`. Depois, crie uma função construtora `Cachorro`, que herda de `Animal` e tem um método adicional `latir()`. Crie instâncias de ambas usando `new` e faça as instâncias chamarem seus respectivos métodos.

---

## this

### Fácil
1. **Usando `this` em função simples**
   - Crie um objeto `pessoa` com as propriedades `nome` e `idade`. Crie um método dentro desse objeto que use `this` para acessar e exibir o nome e a idade no console.

### Médio
2. **Alterando contexto com `this`**
   - Crie uma função `saudar()` que exiba no console a saudação "Olá, {nome}". Teste como `this` se comporta ao chamar `saudar()` tanto dentro de um objeto quanto fora dele.

### Difícil
3. **Mudando o valor de `this` com `call`**
   - Crie dois objetos: `pessoa1` com a propriedade `nome` e `pessoa2` com a propriedade `nome`. Crie uma função `mostrarNome()` que use `this` para mostrar o nome da pessoa. Use `call` para chamar `mostrarNome()` com `pessoa1` e `pessoa2` como contexto.

---

## object.heys

### Fácil
1. **Acessando propriedades com `Object.heys()`**
   - Crie um objeto com pelo menos três propriedades e use `Object.keys()` para obter um array com as chaves do objeto. Exiba esse array no console.

### Médio
2. **Verificando se uma propriedade existe no objeto**
   - Crie um objeto `produto` com as propriedades `nome`, `preço` e `quantidade`. Use `Object.keys()` para verificar se a chave `quantidade` está presente no objeto e imprima a resposta no console.

### Difícil
3. **Iterando sobre as chaves de um objeto**
   - Crie um objeto com pelo menos cinco propriedades. Use `Object.keys()` para obter as chaves e, em seguida, use `forEach()` para iterar e exibir cada chave junto com seu valor correspondente.

---

## object.values

### Fácil
1. **Obtendo valores com `Object.values()`**
   - Crie um objeto `livro` com as propriedades `titulo`, `autor` e `ano`. Use `Object.values()` para obter um array com os valores do objeto e imprima no console.

### Médio
2. **Verificando valores em um objeto**
   - Crie um objeto `carro` com as propriedades `marca`, `modelo` e `ano`. Use `Object.values()` para verificar se o valor "2022" está presente no objeto e imprima o resultado.

### Difícil
3. **Transformando valores do objeto**
   - Crie um objeto com propriedades `nome`, `idade` e `profissão`. Use `Object.values()` para obter os valores, e depois aplique um `map()` para criar um novo array contendo esses valores em maiúsculas.

---

## object.entries

### Fácil
1. **Obtendo pares chave-valor**
   - Crie um objeto `aluno` com as propriedades `nome`, `idade` e `nota`. Use `Object.entries()` para obter um array de pares chave-valor e imprima no console.

### Médio
2. **Contando as propriedades do objeto**
   - Crie um objeto `cliente` com as propriedades `nome`, `email` e `telefone`. Use `Object.entries()` e `length` para contar o número de propriedades do objeto.

### Difícil
3. **Modificando pares chave-valor**
   - Crie um objeto `produto` com as propriedades `nome` e `preço`. Use `Object.entries()` para iterar sobre o objeto e aplique um desconto de 10% no valor de `preço` caso seja maior que 100. Imprima o novo objeto no console.

---

## Prototipagem e Herança

### Fácil
1. **Criando um objeto com herança simples**
   - Crie um objeto `Pessoa` com a propriedade `nome` e um método `falar()`. Crie um objeto `Estudante` que herde de `Pessoa` e adicione a propriedade `curso`. Mostre como `Estudante` herda o método `falar()`.

### Médio
2. **Modificando um método herdado**
   - Crie uma função construtora `Animal` com um método `falar()`. Em seguida, crie uma função construtora `Gato` que herde de `Animal`, mas sobrescreva o método `falar()` para exibir "Miau". Crie instâncias de `Animal` e `Gato` e chame o método `falar()` de ambas.

### Difícil
3. **Herança com `Object.create()`**
   - Crie um objeto `Carro` com uma propriedade `marca` e um método `mostrarMarca()`. Use `Object.create()` para criar um objeto `CarroEsportivo` que herde de `Carro` e adicione uma nova propriedade `velocidadeMaxima`. Mostre como o objeto `CarroEsportivo` herda o método `mostrarMarca()` e como a nova propriedade funciona.

---

## 14. Exercícios de Funções, Parâmetros Padrão, Rest Parameter e Desestruturação de Parâmetros

## Funções

### Nível Fácil

1. **Função Simples**  
   Crie uma função chamada `cumprimentar` que receba um nome como argumento e retorne a mensagem:  
   `"Olá, [nome]! Seja bem-vindo!"`.  
   Caso nenhum nome seja fornecido, a função deve retornar `"Olá! Seja bem-vindo!"`.

2. **Função com Retorno Condicional**  
   Crie uma função chamada `verificarParidade` que receba um número e retorne `"Par"` se o número for par, ou `"Ímpar"` caso contrário.

---

### Nível Médio

3. **Função com Condição**  
   Escreva uma função chamada `classificarIdade` que receba um número representando a idade e retorne:  
   - `"Criança"` para idades de 0 a 12.  
   - `"Adolescente"` para idades de 13 a 17.  
   - `"Adulto"` para idades acima de 18.  

4. **Função que Retorna uma Lista**  
   Crie uma função chamada `gerarSequencia` que receba um número inteiro `n` e retorne um array contendo os números de 1 até `n`.

---

### Nível Difícil

5. **Função Recursiva**  
   Crie uma função chamada `fatorial` que calcule o fatorial de um número inteiro positivo utilizando recursão.

6. **Função de Combinação**  
   Escreva uma função chamada `combinacao` que receba dois números inteiros `n` e `r` e retorne a combinação (`nCr`), definida pela fórmula:  
   \[
   nCr = \frac{n!}{r! \times (n - r)!}
   \]

---

## Parâmetros Padrão

### Nível Fácil

1. **Função de Saudação**  
Crie uma função chamada `saudar` que receba um nome e uma saudação. Se a saudação não for fornecida, ela deve assumir o valor `"Olá"`.  
Exemplo:  
```
saudar("Maria"); // "Olá, Maria!"
```   
2. **Função de Conversão de Moeda**
Crie uma função chamada  ```converterParaDolar ``` que receba o valor em reais e a taxa de conversão. Caso a taxa não seja fornecida, utilize 5.2 como padrão.

### Nível Médio

3. **Função de Calculo com Desconto Padrão**
Escreva uma função chamada  ```calcularPrecoFinal ``` que receba o preço de um produto, a quantidade e um desconto (valor padrão: 5%). A função deve calcular o valor total considerando a quantidade e o desconto.

4. **Função com Multiplos Parâmetros Padrão**
Crie uma função chamada  ```calcularArea ``` que receba os parâmetros  ```largura ```,  ```altura ``` e  ```forma ```. A  ```forma ``` deve ser  ```"retângulo" ``` por padrão. Para formas diferentes, retorne  ```"Forma não suportada" ```.

### Nível Difícil

5. **Função de Validação de Dados**
Crie uma função chamada  ```validarFormulario ``` que receba um nome, uma idade e um país. Caso algum parâmetro não seja fornecido, ele deve ser preenchido automaticamente com  ```"Indefinido" ```.

6. **Função Avançada de Cálculo**
Desenvolva uma função chamada  ```calcularInvestimento ``` que receba o valor inicial, a taxa de juros (valor padrão: 0.05), e o tempo em anos. A função deve calcular o valor final utilizando a fórmula de juros compostos:
```
VF = VI × (1 + i)^t
```

 ---
 
## Rest Parameter

### Nível Fácil

1. **Soma de Números**
Crie uma função chamada ```somar``` que receba um número indeterminado de argumentos e retorne a soma deles.

2. **Concatenar Strings**
Implemente uma função chamada ```juntarPalavras``` que receba várias strings e retorne todas elas concatenadas em uma única string.

### Nível Médio

3. **Maior Número**
Escreva uma função chamada ```encontrarMaior``` que receba vários números e retorne o maior valor.

Lista de Nomes
Crie uma função chamada ```listarNomes``` que receba um nome obrigatório e, em seguida, vários outros nomes. A função deve retornar uma lista que contenha o nome obrigatório seguido dos demais.

### Nível Difícil

5. **Filtrar Valores Válidos**
Escreva uma função chamada ```filtrarValores``` que receba uma lista de números e strings. A função deve retornar apenas os valores numéricos.

6. **Média de Números**
Desenvolva uma função chamada ```calcularMedia``` que aceite uma quantidade ilimitada de números e retorne a média deles.

---

## Desestruturação de Parâmetros

### Nível Fácil

1. **Função com Objeto**
Crie uma função chamada ```exibirDados``` que receba um objeto com as propriedades ```nome``` e ```idad```e. A função deve retornar a mensagem:
```
"[nome] tem [idade] anos."
```

2. **Função com Array**
Implemente uma função chamada ```primeiroEUltimo``` que receba um array e retorne o primeiro e o último elemento no formato:
```
"Primeiro: [primeiro], Último: [último]".
```

### Nível Médio

3. **Desestruturação com Parâmetros Padrão**
Crie uma função chamada ```exibirPerfil``` que receba um objeto com as propriedades ```nome```, ```idade``` e ```profissao```. Caso alguma propriedade esteja ausente, utilize os valores padrão ```"Indefinido"```.

4. **Reorganizar Dados do Array**
Desenvolva uma função chamada ```organizarNotas``` que receba um array com as notas de um aluno e as retorne em ordem decrescente.

### Nível Difícil

5. **Desestruturação e Lógica**
Escreva uma função chamada ```calcularDistancia``` que receba um objeto representando dois pontos no plano cartesiano (ex.: ```{x1: 0, y1: 0, x2: 3, y2: 4}```) e retorne a distância entre eles.

6. **Desestruturação Avançada**
Crie uma função chamada ```processarPedido``` que receba um objeto com as propriedades ```cliente```, ```pedido``` e ```detalhes```. A função deve retornar uma mensagem formatada com as informações do pedido.

---

# 15. Exercícios de Function, retorno, arrow, múltiplos valores e antecipado

## Retorno Básico

### Nível Fácil

1. **Função de Multiplicação**
   Crie uma função chamada `multiplicar` que receba dois números como parâmetros e retorne o resultado da multiplicação.

2. **Função de Saudações**
   Crie uma função chamada `saudacao` que receba um nome como parâmetro e retorne a mensagem: `"Olá, [nome]!"`.

---

### Nível Médio

3. **Função de Comparação**
   Crie uma função chamada `compararNumeros` que receba dois números e retorne:
   - "Maior" se o primeiro número for maior.
   - "Menor" se o segundo número for maior.
   - "Igual" se ambos os números forem iguais.

4. **Função de Área do Círculo**
   Crie uma função chamada `areaCirculo` que receba o raio de um círculo e retorne a área do círculo. (A fórmula da área é: π * raio²)

---

### Nível Difícil

5. **Função de Cálculo de Imposto**
   Crie uma função chamada `calcularImposto` que receba o valor de uma compra e calcule o imposto sobre o valor. O imposto é de 10%. A função deve retornar o valor total da compra com imposto.

6. **Função de Fatorial**
   Crie uma função chamada `fatorial` que receba um número e retorne o seu fatorial. (Exemplo: fatorial de 5 é 5 * 4 * 3 * 2 * 1)

---

## Arrow Function

### Nível Fácil

1. **Função de Soma com Arrow**
   Crie uma arrow function chamada `somar` que receba dois números como parâmetros e retorne a soma deles.

2. **Função de Saudação com Arrow**
   Crie uma arrow function chamada `saudacao` que receba um nome como parâmetro e retorne a mensagem de saudação: `"Olá, [nome]!"`.

---

### Nível Médio

3. **Função de Filtro com Arrow**
   Crie uma arrow function chamada `filtrarPares` que receba um array de números e retorne um novo array contendo apenas os números pares.

4. **Função de Dobra de Valores**
   Crie uma arrow function chamada `dobrar` que receba um número como parâmetro e retorne o valor do número dobrado.

---

### Nível Difícil

5. **Função de Calculo de Potência com Arrow**
   Crie uma arrow function chamada `potencia` que receba dois números e retorne o primeiro número elevado à potência do segundo número.

6. **Função de Ordenação com Arrow**
   Crie uma arrow function chamada `ordenar` que receba um array de números e retorne um novo array ordenado em ordem decrescente.

---

## Retorno Implícito em Arrow Function

### Nível Fácil

1. **Função de Multiplicação com Retorno Implícito**
   Crie uma arrow function chamada `multiplicar` que receba dois números como parâmetros e retorne o resultado da multiplicação de forma implícita.

2. **Função de Divisão com Retorno Implícito**
   Crie uma arrow function chamada `dividir` que receba dois números como parâmetros e retorne o resultado da divisão de forma implícita.

---

### Nível Médio

3. **Função de Quadrado com Retorno Implícito**
   Crie uma arrow function chamada `quadrado` que receba um número e retorne o quadrado desse número de forma implícita.

4. **Função de Concatenar com Retorno Implícito**
   Crie uma arrow function chamada `concatenar` que receba dois strings e retorne a concatenação delas de forma implícita.

---

### Nível Difícil

5. **Função de Filtro de Números Positivos com Retorno Implícito**
   Crie uma arrow function chamada `filtrarPositivos` que receba um array de números e retorne um novo array contendo apenas os números positivos, utilizando retorno implícito.

6. **Função de Incremento com Retorno Implícito**
   Crie uma arrow function chamada `incrementar` que receba um número e retorne o número incrementado de forma implícita.

---

## Retornar Múltiplos Valores

### Nível Fácil

1. **Função que Retorna Soma e Diferença**
   Crie uma função chamada `somaEDif` que receba dois números e retorne a soma e a diferença entre eles.

2. **Função que Retorna Nome e Idade**
   Crie uma função chamada `dadosPessoais` que receba um nome e uma idade e retorne esses dois valores.

---

### Nível Médio

3. **Função de Retorno de Dados de Aluno**
   Crie uma função chamada `dadosAluno` que receba o nome, a idade e a nota de um aluno e retorne esses três valores.

4. **Função de Retorno de Mínimo e Máximo**
   Crie uma função chamada `minMax` que receba um array de números e retorne o valor mínimo e o valor máximo desse array.

---

### Nível Difícil

5. **Função de Retorno de Área e Perímetro**
   Crie uma função chamada `areaEPerimetro` que receba as medidas de um retângulo e retorne a área e o perímetro desse retângulo.

6. **Função de Retorno de Coordenadas**
   Crie uma função chamada `coordenadas` que receba dois pontos no formato `(x, y)` e retorne as distâncias entre esses pontos nas direções horizontal e vertical.

---

## Retorno Antecipado

### Nível Fácil

1. **Função de Verificação de Paridade com Retorno Antecipado**
   Crie uma função chamada `verificarParidade` que receba um número e, se o número for par, retorne a mensagem "Número par". Caso contrário, continue com o processo.

2. **Função de Verificação de Idade**
   Crie uma função chamada `verificarIdade` que receba a idade de uma pessoa. Se a idade for menor que 18, retorne "Menor de idade" imediatamente. Caso contrário, retorne "Maior de idade".

---

### Nível Médio

3. **Função de Verificação de Maioridade com Retorno Antecipado**
   Crie uma função chamada `verificarMaioridade` que receba a idade de uma pessoa. Se a idade for menor que 21, retorne "Acesso negado". Caso contrário, retorne "Acesso permitido".

4. **Função de Retorno Antecipado em Validação de Dados**
   Crie uma função chamada `validarDados` que receba um nome e um número. Se o nome estiver vazio ou o número for negativo, retorne "Dados inválidos" imediatamente. Caso contrário, retorne os dados.

---

### Nível Difícil

5. **Função de Cálculo com Retorno Antecipado**
   Crie uma função chamada `calcularPrecoComDesconto` que receba um preço. Se o preço for menor que 50, retorne imediatamente o preço sem desconto. Caso contrário, aplique um desconto de 10% e retorne o valor com desconto.

6. **Função de Verificação de Votação com Retorno Antecipado**
   Crie uma função chamada `verificarVotacao` que receba a idade de uma pessoa. Se a pessoa não tiver a idade mínima de 16 anos, retorne "Não apto para votar" imediatamente. Caso contrário, retorne "Apto para votar".

---

## 16. Exercícios de Escopo

## Escopo Global, de função e de bloco

### Nível Fácil

1. **Exercício de Variável Global**

Crie uma variável global chamada `nome` com o valor `"João"`. Dentro de uma função, imprima o valor da variável global `nome`.

2. **Escopo de Função Simples**

Crie uma função chamada `saudar` que recebe o parâmetro `nome` e imprime uma mensagem de boas-vindas. Fora da função, tente acessar a variável `nome` e explique o comportamento.

3. **Variáveis de Bloco com `let` e `const`**

Crie um bloco de código dentro de um `if` e declare uma variável `x` com `let` dentro desse bloco. Após o bloco, tente acessar a variável `x` fora dele e explique o comportamento.

---

### Nível Médio

1. **Modificando Variável Global Dentro de Função**

Crie uma variável global chamada `contador` com o valor inicial de 0. Dentro de uma função, aumente o valor da variável global `contador` em 1 e imprima o valor atualizado fora da função.

2. **Escopo de Função com Parâmetros**

Crie uma função chamada `multiplicar` que recebe dois parâmetros, `a` e `b`, e retorna o resultado da multiplicação entre eles. Imprima o resultado da multiplicação fora da função. Tente acessar `a` e `b` fora da função e explique o que acontece.

3. **Escopo de Bloco com `var`**

Dentro de um bloco de código, declare uma variável `y` utilizando `var` e imprima seu valor fora do bloco. Explique o comportamento da variável quando declarada com `var`.

---

### Nível Difícil

1. **Escopo Global e Função de Cálculo**

Crie uma variável global chamada `resultado` com o valor 10. Dentro de uma função, modifique a variável `resultado` e retorne a soma dela com um número recebido como parâmetro. Após a execução da função, imprima o valor atualizado da variável `resultado`.

2. **Escopo de Função com Variáveis Locais e Globais**

Crie uma variável global chamada `numeroGlobal` com o valor 5. Dentro de uma função chamada `alterarNumero`, crie uma variável local chamada `numeroLocal` e altere o valor de `numeroGlobal`. No final da função, retorne os valores de `numeroGlobal` e `numeroLocal`. Imprima o valor de `numeroGlobal` fora da função e explique o comportamento.

3. **Escopo de Bloco com `let` e Funções Aninhadas**

Dentro de uma função, crie um bloco de código onde declare uma variável `z` com `let`. Depois, dentro desse bloco, crie uma função que tente acessar e modificar a variável `z`. Imprima o valor de `z` fora do bloco e explique o comportamento.

## Cadeia de Escopos

### Nível Fácil

 1. **Cadeia de Escopos Simples**

Crie uma variável `a` no escopo global e uma variável `b` dentro de uma função. Na função, acesse e imprima as duas variáveis (`a` e `b`).

---

### Nível Médio

 2. **Acesso a Variáveis de Escopos Externos**

Crie uma variável `x` no escopo global e uma função `exibir` que declare uma variável `y` dentro dela. Na função, tente acessar as variáveis `x` e `y` e imprima seus valores.

---

### Nível Difícil

 3. **Cadeia de Escopos com Funções Aninhadas**

Crie uma variável `numero` no escopo global. Dentro de uma função chamada `alterarNumero`, declare uma variável `alterado` e dentro desta função crie outra função chamada `incrementar`, que altera o valor da variável `numero`. Imprima o valor da variável `numero` na função interna e fora dela, explicando o comportamento das variáveis nos diferentes escopos.

---

## 17. Exercícios de métodos de objetos

## Métodos de Objetos

### Nível Fácil

1. **Método Simples em Objeto**
   Crie um objeto chamado `animal` com uma propriedade `nome` e um método chamado `falar` que exibe a frase `"Eu sou [nome]"`. Chame o método para exibir a frase com o nome do animal.

2. **Método com Parâmetro**
   Crie um objeto chamado `livro` com uma propriedade `titulo` e um método chamado `mostrarTitulo`, que recebe um parâmetro e exibe a mensagem `"O título do livro é [titulo]"`. Chame o método passando o título do livro como argumento.

### Nível Médio

3. **Método que Modifica Propriedade**
   Crie um objeto chamado `carro` com propriedades `marca` e `modelo` e um método chamado `atualizarModelo`, que recebe um parâmetro e altera o modelo do carro. Chame o método e imprima o novo modelo.

4. **Método que Retorna um Valor**
   Crie um objeto chamado `contaBancaria` com uma propriedade `saldo` e um método chamado `consultarSaldo`, que retorna o saldo atual. Chame o método e imprima o valor retornado.

### Nível Difícil

5. **Método de Objeto com Encadeamento**
   Crie um objeto `estoque` com propriedades `produto` e `quantidade`. Adicione um método `atualizarEstoque` que recebe um número e altera a quantidade de produtos. Esse método deve retornar o próprio objeto, permitindo que você encadeie outro método, `mostrarEstoque`, que exibe o produto e a quantidade. Chame os métodos em sequência e exiba as informações.

6. **Método com Parâmetros de Entrada**
   Crie um objeto chamado `calculadora` com um método `operacao`, que recebe dois parâmetros (números) e um operador (como `+`, `-`, `*`, `/`). O método deve retornar o resultado da operação. Chame o método passando dois números e um operador.

---

## Métodos em Objetos Aninhados

### Nível Fácil

1. **Método em Objeto Aninhado**
   Crie um objeto `empresa` com uma propriedade `nome` e um objeto aninhado `endereco`, que tenha uma propriedade `cidade`. Dentro de `endereco`, crie um método `exibirCidade` que imprime o nome da cidade. Chame o método dentro do objeto aninhado.

2. **Método para Exibir Dados do Objeto Aninhado**
   Crie um objeto `usuario` com uma propriedade `nome` e um objeto aninhado `contato` com uma propriedade `telefone`. Crie um método `mostrarContato` dentro do objeto `contato`, que exibe o telefone do usuário. Chame o método.

### Nível Médio

3. **Método Aninhado com Parâmetro**
   Crie um objeto `estudante` com uma propriedade `nome` e um objeto aninhado `cursos` com um método `inscrever`, que recebe o nome de um curso e imprime a mensagem `"Inscrito em [curso]"`. Chame o método passando um curso como argumento.

4. **Método Aninhado que Modifica Propriedade**
   Crie um objeto `universidade` com uma propriedade `nome` e um objeto aninhado `departamento`. Dentro de `departamento`, crie um método chamado `alterarNome`, que altera o nome do departamento. Chame o método para alterar o nome e imprima o novo nome.

### Nível Difícil

5. **Método Aninhado com Encadeamento**
   Crie um objeto `veiculo` com uma propriedade `modelo` e um objeto aninhado `motor`. Dentro de `motor`, crie um método `ligar`, que altera uma propriedade `ligado` para `true`. O método `ligar` deve retornar o objeto `motor`, e o método `mostrarEstado` deve exibir o estado do motor. Chame ambos os métodos em sequência, utilizando encadeamento.

6. **Método Aninhado com Argumento**
   Crie um objeto `biblioteca` com uma propriedade `nome` e um objeto aninhado `livros`. Dentro de `livros`, crie um método `emprestar`, que recebe o nome do livro e imprime `"Emprestado [livro]"`. Chame o método passando o nome de um livro.

---

## Métodos que Retornam Valores

### Nível Fácil

1. **Método que Retorna um Valor Simples**
   Crie um objeto `pessoa` com uma propriedade `nome` e um método `obterNome` que retorna o nome da pessoa. Chame o método e imprima o valor retornado.

2. **Método com Retorno de Cálculo**
   Crie um objeto `retangulo` com propriedades `largura` e `altura` e um método `calcularArea` que retorna o valor da área (largura * altura). Chame o método e imprima o valor retornado.

### Nível Médio

3. **Método com Retorno Condicional**
   Crie um objeto `aluno` com uma propriedade `nota` e um método `verificarAprovacao` que retorna `"Aprovado"` se a nota for maior ou igual a 7, e `"Reprovado"` caso contrário. Chame o método e imprima o valor retornado.

4. **Método que Retorna uma Lista de Elementos**
   Crie um objeto `biblioteca` com uma propriedade `livros` (um array de strings) e um método `listarLivros`, que retorna a lista de livros. Chame o método e imprima o valor retornado.

### Nível Difícil

5. **Método que Retorna Objeto Modificado**
   Crie um objeto `produto` com propriedades `nome` e `preco`, e um método `aplicarDesconto` que recebe um valor de desconto e retorna o objeto com o preço modificado. Chame o método e imprima o objeto atualizado.

6. **Método que Retorna um Valor Calculado com Parâmetros**
   Crie um objeto `calculadora` com um método `calcular`, que recebe dois parâmetros e um operador (`+`, `-`, `*`, `/`) e retorna o resultado da operação. Chame o método com diferentes parâmetros e imprima os valores retornados.

---

## Métodos de Objetos em Arrays

### Nível Fácil

1. **Método de Objeto em Array Simples**
   Crie um array de objetos chamado `pessoas`, onde cada objeto tem uma propriedade `nome`. Crie um método `saudar` dentro do objeto que imprime `"Olá, [nome]"`. Itere sobre o array e chame o método `saudar` para cada objeto.

2. **Método de Objeto em Array com Parâmetro**
   Crie um array de objetos chamado `funcionarios`, onde cada objeto tem uma propriedade `nome` e um método `trabalhar`, que recebe um parâmetro (como o nome do projeto) e imprime `"Trabalhando no [projeto]"`. Itere sobre o array e chame o método passando o nome de um projeto.

### Nível Médio

3. **Método que Modifica Propriedade em Objetos do Array**
   Crie um array de objetos chamado `produtos`, onde cada objeto tem uma propriedade `preco`. Crie um método `aplicarDesconto`, que recebe um valor de desconto e modifica o preço de cada produto. Itere sobre o array e aplique o desconto.

4. **Método que Retorna um Valor em Objetos do Array**
   Crie um array de objetos chamado `clientes`, onde cada objeto tem uma propriedade `nome` e `compras`. O método `totalCompras` deve retornar o total de compras de cada cliente. Itere sobre o array e imprima o total de compras de cada cliente.

### Nível Difícil

5. **Método Encadeado em Objetos do Array**
   Crie um array de objetos `veiculos`, onde cada objeto tem uma propriedade `modelo` e um método `modificarModelo`. O método deve alterar o modelo do veículo e retornar o próprio objeto, permitindo encadear outro método, `exibirModelo`. Itere sobre o array e aplique ambos os métodos em encadeamento.

6. **Método de Filtro em Objetos do Array**
   Crie um array de objetos chamado `clientes`, onde cada objeto tem uma propriedade `idade`. Crie um método `filtrarIdades` que recebe uma idade mínima e retorna um novo array contendo apenas os clientes com idade maior ou igual à idade mínima. Imprima o novo array de clientes filtrados.


---

## 18. Exercícios de Funções Recursivas

### Nível Fácil

1. **Soma de Números até um Valor**
   - Crie uma função recursiva que receba um número `n` e retorne a soma de todos os números de 1 até `n`. Exemplo: Se `n = 5`, a função deve retornar `1 + 2 + 3 + 4 + 5 = 15`.

2. **Fatorial de um Número**
   - Crie uma função recursiva que calcule o fatorial de um número `n`. O fatorial de `n` é a multiplicação de todos os números de 1 até `n`. Exemplo: Fatorial de 5 é `5 * 4 * 3 * 2 * 1 = 120`.

3. **Contar até um Número**
   - Crie uma função recursiva que imprima todos os números de 1 até `n` no console. Exemplo: Se `n = 3`, a função deve imprimir `1, 2, 3`.

4. **Contar de Trás para Frente**
   - Crie uma função recursiva que imprima os números de `n` até 1, em ordem decrescente. Exemplo: Se `n = 4`, a função deve imprimir `4, 3, 2, 1`.

5. **Verificar se um Número é Par ou Ímpar**
   - Crie uma função recursiva que verifique se um número `n` é par ou ímpar, retornando `true` ou `false`. A função deve considerar que 0 é par.

### Nível Médio

6. **Soma dos Elementos de um Array**
   - Crie uma função recursiva que receba um array de números e retorne a soma de seus elementos. Exemplo: Se o array for `[1, 2, 3, 4]`, a função deve retornar `10`.

7. **Reverter uma String**
   - Crie uma função recursiva que inverta uma string. Exemplo: Se a string for `"abc"`, a função deve retornar `"cba"`.

8. **Fibonacci**
   - Crie uma função recursiva que calcule o número de Fibonacci na posição `n`. O número de Fibonacci é a sequência onde cada número é a soma dos dois anteriores. Exemplo: Se `n = 5`, a função deve retornar `5`.

9. **Encontrar o Maior Número em um Array**
   - Crie uma função recursiva que encontre o maior número em um array de números. Exemplo: Se o array for `[3, 1, 4, 1, 5, 9]`, a função deve retornar `9`.

10. **Fatorial de um Array de Números**
    - Crie uma função recursiva que receba um array de números e retorne a multiplicação do fatorial de cada número. Exemplo: Se o array for `[2, 3, 4]`, a função deve retornar `2! * 3! * 4! = 2 * 6 * 24 = 288`.

### Nível Difícil

11. **Permutações de uma String**
   - Crie uma função recursiva que gere todas as permutações possíveis de uma string. Exemplo: Se a string for `"abc"`, as permutações são `"abc", "acb", "bac", "bca", "cab", "cba"`.

12. **Somar os Elementos de um Array 2D**
   - Crie uma função recursiva que some todos os elementos de um array bidimensional (matriz). Exemplo: Se o array for `[[1, 2], [3, 4], [5, 6]]`, a função deve retornar `21`.

13. **Buscar um Elemento em um Array**
   - Crie uma função recursiva que busque um valor específico em um array e retorne seu índice ou `-1` se não encontrado. Exemplo: Se o array for `[1, 2, 3, 4]` e o valor for `3`, a função deve retornar `2`.

14. **Contar o Número de Vezes que um Valor Aparece em um Array**
   - Crie uma função recursiva que conte quantas vezes um valor aparece em um array. Exemplo: Se o array for `[1, 2, 3, 1, 4, 1]` e o valor for `1`, a função deve retornar `3`.

15. **Somar os Elementos de um Array de Arrays**
   - Crie uma função recursiva que some todos os elementos de um array que contém sub-arrays. Exemplo: Se o array for `[[1, 2], [3, 4], [5, 6]]`, a função deve retornar `21`.

---

## 19. Exercícios sobre Funções Anônimas e Callback

### Nível Fácil

1. **Somar dois números usando uma função anônima**
Escreva uma função chamada `somar` que recebe dois números e retorna a soma deles utilizando uma função anônima dentro de seu corpo. O resultado deve ser exibido no console.

2. **Filtrar números pares em um array usando uma função anônima**
Dado um array de números, escreva uma função chamada `filtrarPares` que utilize uma função anônima dentro de `filter` para retornar apenas os números pares do array.

---

### Nível Médio

3. **Uso de Callback para manipular uma lista**
Escreva uma função chamada `processarLista` que recebe uma lista de números e um callback. O callback deve ser responsável por processar cada item da lista e imprimir o resultado. Exemplo de callback: `dobrar` que multiplica o valor por 2.

4. **Ordem crescente com callback**
Escreva uma função chamada `ordenarArray` que recebe um array de números e um callback. O callback deve ser responsável por ordenar os números em ordem crescente. A função deve exibir o array ordenado.

---

### Nível Difícil

5. **Manipular objetos com callback**
Dado um array de objetos representando produtos com as propriedades `nome` e `preco`, escreva uma função chamada `aplicarDesconto` que recebe o array e um callback. O callback deve calcular um desconto em cada preço e retornar um novo array com os preços com desconto.

6. **Execução assíncrona com Callback**
Crie uma função chamada `buscarDados` que simula uma busca de dados (utilizando `setTimeout` para simular uma operação assíncrona). Ela deve receber um callback que será executado após 2 segundos, e o callback deve exibir os dados recebidos (exemplo: nome, idade, cidade).

---

## 20. Exercícios sobre Arrow Functions

### Nível Fácil

1. **Somar dois números usando Arrow Function**
Escreva uma função usando arrow function que recebe dois parâmetros e retorna a soma dos mesmos.

2. **Multiplicar dois números usando Arrow Function**
Crie uma arrow function chamada `multiplicar` que recebe dois números como parâmetros e retorna o produto entre eles.

3. **Verificar se um número é par usando Arrow Function**
Escreva uma arrow function chamada `isEven` que recebe um número e retorna `true` se o número for par, e `false` se for ímpar.

4. **Retornar o dobro de um número com Arrow Function**
Crie uma arrow function chamada `dobro` que recebe um número e retorna o seu dobro.

5. **Quadrado de um número usando Arrow Function**
Escreva uma arrow function chamada `quadrado` que recebe um número e retorna o seu quadrado.

---

### Nível Médio

6. **Converter temperatura de Celsius para Fahrenheit usando Arrow Function**
Escreva uma arrow function chamada `celsiusToFahrenheit` que recebe um valor em Celsius e converte para Fahrenheit.

7. **Filtrar números positivos em um array usando Arrow Function**
Dado um array de números, escreva uma função chamada `filtrarPositivos` que utiliza uma arrow function dentro de `filter` para retornar apenas os números positivos.

8. **Adicionar dois números em uma lista de arrays usando Arrow Function**
Crie uma função chamada `somarLista` que recebe um array de pares de números e retorna um novo array com a soma de cada par, utilizando uma arrow function dentro de `map`.

9. **Verificar se um número é maior que 10 usando Arrow Function**
Escreva uma arrow function chamada `isGreaterThanTen` que recebe um número e retorna `true` se for maior que 10 e `false` caso contrário.

10. **Contar a quantidade de números positivos em um array usando Arrow Function**
Crie uma função chamada `contarPositivos` que recebe um array de números e retorna a quantidade de números positivos utilizando uma arrow function com `filter`.

---

### Nível Difícil

11. **Ordenar um array de objetos com Arrow Function**
Dado um array de objetos com a propriedade `idade`, escreva uma arrow function para ordenar os objetos em ordem crescente de idade.

12. **Calcular a área de um círculo usando Arrow Function**
Crie uma arrow function chamada `areaCirculo` que recebe o raio de um círculo e calcula sua área (usando a fórmula `π * r^2`).

13. **Transformar um array de strings para maiúsculas usando Arrow Function**
Dado um array de strings, escreva uma função chamada `maiusculas` que utiliza uma arrow function dentro de `map` para transformar todas as strings em maiúsculas.

14. **Filtrar números ímpares e somá-los usando Arrow Function**
Dado um array de números, escreva uma função chamada `somarImpares` que filtra os números ímpares e retorna a soma deles usando uma arrow function.

15. **Calcular a soma de todos os elementos de um array de números usando Arrow Function**
Escreva uma função chamada `somaArray` que recebe um array de números e retorna a soma de todos os elementos usando uma arrow function com `reduce`.

---

## 21. Exercícios sobre IIFE (Immediately Invoked Function Expression)

### Nível Fácil

1. **Executar uma função imediatamente que retorna uma saudação**
Escreva uma IIFE que imprime "Olá, Mundo!" no console assim que o código for executado.

2. **Criar uma IIFE que soma dois números**
Crie uma IIFE que recebe dois números como parâmetros e retorna a soma deles. Exiba o resultado no console.

---

### Nível Médio

3. **Usar IIFE para calcular o fatorial de um número**
Crie uma IIFE que recebe um número como parâmetro e calcula seu fatorial. Exiba o resultado no console.

4. **Armazenar o resultado de uma IIFE em uma variável**
Crie uma IIFE que retorna o valor da soma de dois números e armazene o resultado dessa operação em uma variável. Exiba o valor da variável no console.

---

### Nível Difícil

5. **Usar IIFE para criar um contador de cliques**
Implemente uma IIFE que cria um contador de cliques em um botão. Cada vez que o botão for clicado, o valor do contador deve ser incrementado. Exiba o valor no console.

6. **Usar IIFE para simular um módulo com variáveis privadas**
Crie uma IIFE que simula um módulo com uma variável privada e uma função que altera o valor dessa variável. A função pública deve ser usada para acessar e modificar a variável privada. Exiba o valor da variável privada no console após chamá-la.

---

## 22. Exercícios sobre High-order Functions

### Nível Fácil

1. **Função que recebe outra função como argumento**
Crie uma função chamada `executar` que recebe uma função como argumento e a executa. Teste chamando a função `executar` com uma função simples que apenas imprime uma mensagem no console.

2. **Função que retorna uma função**
Crie uma função chamada `multiplicarPor` que recebe um número e retorna uma função. A função retornada deve multiplicar o valor passado como argumento pela função inicial. Teste com um número, como 2.

3. **Função que aceita um callback e imprime um resultado**
Crie uma função chamada `processar` que recebe dois números e um callback. O callback deve ser usado para realizar uma operação entre os números e o resultado da operação deve ser impresso no console.

4. **Função de soma com parâmetro de operação**
Crie uma função chamada `operar` que recebe dois números e uma função como parâmetros. A função passada deve realizar a operação entre os números. Teste com uma função de soma.

5. **Função de mensagem personalizada**
Crie uma função chamada `criarMensagem` que recebe um nome e retorna uma função. A função retornada deve exibir uma mensagem personalizada com o nome fornecido.

---

### Nível Médio

6. **Função que verifica a validade de um número**
Crie uma função chamada `validarNumero` que recebe uma função de verificação (callback) e um número. Se o número for válido, a função de verificação deve retornar "válido", caso contrário, "inválido".

7. **Função que retorna uma função de cálculo**
Crie uma função chamada `calcular` que recebe uma operação como argumento (uma função) e dois números. A função de operação deve ser executada entre os dois números e o resultado retornado.

8. **Função de saudação personalizada com callback**
Crie uma função chamada `saudar` que recebe um nome e um callback. O callback deve ser responsável por exibir uma saudação personalizada para o nome fornecido.

9. **Função de execução com contagem**
Crie uma função chamada `executarComContagem` que recebe uma função e um número. A função deve ser executada várias vezes (a quantidade de vezes especificada pelo número) e o número de execuções deve ser exibido no console.

10. **Função que retorna uma operação com base em um parâmetro**
Crie uma função chamada `operacao` que recebe uma operação (como uma string: 'soma', 'subtracao') e retorna uma função que realiza essa operação entre dois números.

---

### Nível Difícil

11. **Função de transformação com callbacks**
Crie uma função chamada `transformar` que recebe um número e dois callbacks. O primeiro callback deve multiplicar o número por 2 e o segundo deve somar 10 ao resultado do primeiro callback. A função `transformar` deve retornar o resultado final da operação.

12. **Função que aplica operação entre múltiplos números**
Crie uma função chamada `aplicarOperacao` que recebe uma função de operação e um número variável de parâmetros. A função de operação deve ser aplicada a todos os números passados e o resultado final deve ser retornado.

13. **Função que simula uma calculadora com callbacks**
Crie uma função chamada `calculadora` que recebe uma operação ('soma', 'subtracao', etc.) e dois números. A função deve executar a operação passada usando um callback e retornar o resultado.

14. **Função de temporizador com callback**
Crie uma função chamada `tempos` que recebe um número (em segundos) e um callback. O callback será executado após o tempo especificado. Exiba uma mensagem no console quando o tempo for concluído.

15. **Função que cria uma sequência numérica com base em uma operação**
Crie uma função chamada `sequenciaNumerica` que recebe uma operação (soma, subtração, multiplicação) e um número inicial. A função deve retornar uma sequência numérica, onde cada número na sequência é o resultado da operação aplicada ao número anterior.

---

## 23. Exercícios sobre High-order Functions e Arrays

### Nível Fácil

1. **Usando `map()` para dobrar os valores de um array**
Crie uma função que recebe um array de números e retorna um novo array onde cada valor é o dobro do valor original. Use a função `map()` para fazer isso.

2. **Usando `filter()` para filtrar números pares**
Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números pares. Utilize o `filter()` para realizar essa tarefa.

3. **Usando `reduce()` para somar os valores de um array**
Crie uma função que recebe um array de números e retorna a soma de todos os números presentes no array. Utilize o `reduce()` para realizar essa operação.

4. **Usando `map()` para converter todos os nomes para maiúsculas**
Crie uma função que recebe um array de nomes e retorna um novo array onde todos os nomes estão em letras maiúsculas. Utilize o `map()` para essa transformação.

5. **Usando `filter()` para remover números negativos**
Crie uma função que recebe um array de números e retorna um novo array contendo apenas os números positivos, utilizando o `filter()` para filtrar os números negativos.

---

### Nível Médio

6. **Usando `map()` e `filter()` para transformar e filtrar dados**
Crie uma função que recebe um array de números e retorna um novo array contendo o dobro dos números positivos. Utilize `map()` para dobrar os números e `filter()` para remover os números negativos.

7. **Usando `reduce()` para encontrar o maior número**
Crie uma função que recebe um array de números e retorna o maior número presente nesse array. Utilize o `reduce()` para encontrar esse valor.

8. **Usando `map()` para converter uma lista de preços**
Crie uma função que recebe um array de preços e retorna um novo array onde cada preço é acrescido de 10%. Utilize o `map()` para realizar essa operação.

9. **Usando `reduce()` para calcular o produto de todos os elementos**
Crie uma função que recebe um array de números e retorna o produto de todos os números presentes no array. Utilize o `reduce()` para realizar essa operação.

10. **Usando `filter()` para selecionar strings com mais de 5 caracteres**
Crie uma função que recebe um array de strings e retorna um novo array contendo apenas as strings que têm mais de 5 caracteres, utilizando o `filter()`.

---

### Nível Difícil

11. **Usando `reduce()` para agrupar valores por categoria**
Crie uma função que recebe um array de objetos, onde cada objeto contém uma categoria e um valor. A função deve retornar um objeto onde as chaves são as categorias e os valores são a soma de todos os valores daquela categoria. Use o `reduce()` para agrupar e somar os valores.

12. **Usando `map()` e `filter()` para transformar e remover valores**
Crie uma função que recebe um array de objetos, onde cada objeto tem um campo `idade`. A função deve retornar um novo array com a idade aumentada em 10 anos, mas removendo qualquer pessoa que tenha mais de 50 anos após o aumento da idade. Utilize `map()` e `filter()` para essa tarefa.

13. **Usando `reduce()` para criar um índice de contagem**
Crie uma função que recebe um array de strings e retorna um objeto onde as chaves são as strings e os valores são a quantidade de vezes que cada string aparece no array. Utilize o `reduce()` para gerar esse índice de contagem.

14. **Usando `map()` e `reduce()` para calcular a média de uma lista de objetos**
Crie uma função que recebe um array de objetos, onde cada objeto contém um campo `nota`. A função deve calcular a média das notas utilizando `map()` para extrair as notas e `reduce()` para calcular a soma das notas e depois dividir pelo número total de objetos.

15. **Usando `filter()`, `map()` e `reduce()` para gerar um relatório**
Crie uma função que recebe um array de objetos, onde cada objeto contém os campos `nome` e `vendas`. A função deve filtrar os vendedores que realizaram mais de 50 vendas, mapear para obter apenas os nomes e, em seguida, calcular o total de vendas desses vendedores. Utilize `filter()`, `map()` e `reduce()` para resolver essa tarefa.

---






