## EXERCÍCIOS

## **int (Números Inteiros)**
"""
#1. Crie um programa que solicite ao usuário sua idade e a idade de seu melhor amigo. Em seguida, calcule e exiba a
# soma das idades.

idade1 = int(input("Digite a sua idade: "))
idade2 = int(input("Digite a idade do seu amigo: "))

def soma_idade(idade1, idade2):
    return f"A soma das idades é:  {idade1 + idade2}"

print(soma_idade(idade1, idade2))


#2. Desenvolva um script que peça ao usuário para inserir um número inteiro e, em seguida, determine se o número é par
#ou ímpar.

numero = int(input("Digite um número inteiro: "))

def par_ou_impar(numero):
    if numero % 2 == 0:
        resp = "O número é par!"
    else:
        resp = "O número é impar!"

    return resp

print(par_ou_impar(numero))


## **float (Números de Ponto Flutuante)**

#1. Escreva um programa que solicite ao usuário sua altura em metros e seu peso em quilogramas. Calcule e exiba o IMC
#(Índice de Massa Corporal) com duas casas decimais.

altura = float(input("Qual a sua altura? (digite em metros, ex: 1.70)"))
peso = float(input("Qual o seu peso? (digite em Kg, ex: 85.40)"))

def imc(altura, peso):
    return f"Seu IMC é {peso / (altura * 2):.2f}"

print(imc(altura, peso))


#2. Crie um script que peça ao usuário para inserir o raio de um círculo. Calcule e exiba a área do círculo com três
#casas decimais. (Use pi = 3.14159)

raio = float(input("Digite o raio de um círculo: "))
pi = 3.14159

def areaCirculo(raio):
    return f"A área do círculo é {(pi * raio**2):.3f}"

print(areaCirculo(raio))



## **Divisão Inteira**

#1. Faça um programa que solicite ao usuário um número de minutos e converta para horas e minutos. Por exemplo,
#145 minutos deve ser exibido como 2 horas e 25 minutos.

minutos = int(input("Digite o número de minutos: "))

def minutosEmHoras(minutos):
    horas = minutos // 60
    minutosRestantes = minutos % 60
    return f"{minutos} minutos é igual a {horas} horas e {minutosRestantes} minutos."

print(minutosEmHoras(minutos))


#2. Crie um script que peça ao usuário um número de dias e converta para semanas e dias. Por exemplo, 17 dias deve ser
#exibido como 2 semanas e 3 dias.

dias = int(input("Digite um número de dias: "))

def semanas(dias):
    semanasInteiras = dias // 7
    semanasIncompletas = dias % 7
    return f"{semanasInteiras} semana(s) e {semanasIncompletas} dia(s)"

print(semanas(dias))


## **and (E lógico)**

#1. Desenvolva um programa que peça ao usuário sua idade e se possui carteira de motorista (responda com "sim" ou
#"não"). O programa deve determinar se a pessoa pode dirigir (idade maior ou igual a 18 e possui carteira).

idade = int(input("Digite sua idade: "))

carteira = input("Possui carteira de motorista? (sim ou não)\n")

def permissao(idade, carteira):
    if idade > 18 and carteira == "sim":
        return "Você pode dirigir"
    if idade < 18 and carteira == "sim":
        return "Você não pode dirigir, sua habilitação é falsa"
    else:
        return "Você não pode dirigir"

print(permissao(idade, carteira))



#2. Crie um script que solicite ao usuário um número e verifique se ele está entre 0 e 100 (inclusive). O inclusive
# quer dizer que o 0 e o 100 também fazem parte da verificaçãoUse o operador**`and`**na sua condição.

numero = int(input("Digite um número: "))

def pertence(numero):
    if numero >= 0 and numero <= 100:
        return "Pertence"
    else:
        return "Não pertence"

print(pertence(numero))


## **or (OU lógico)**

#1. Escreva um programa que peça ao usuário para inserir um caractere e determine se é uma vogal (a, e, i, o, u,
#considerando maiúsculas e minúsculas).

caractere = input("Digite um caractere: ")
vogalMin = ["a","e", "i", "o", "u"]
vogamMai = ["A","E","I","O", "U"]

def vogal(caractere):
    if caractere in vogalMin or caractere in vogamMai:
        return f"A letra {caractere} é uma Vogal"
    else:
        return f"A letra {caractere} não é uma vogal"

print(vogal(caractere))


#2. Faça um script que solicite ao usuário um número e verifique se ele é menor que 0 ou maior que 100. Use o
#operador**`or`**na sua condição.

numero = int(input("Digite um número: "))

def verificar(numero):
    if numero < 0 or numero > 100:
        return "Número não está entre 0 e 100"
    else:
        return "Número está entre 0 e 100"

print(verificar(numero))


## **if, elif, else**

#1. Crie um programa que peça ao usuário para inserir sua nota (de 0 a 100) e exiba o conceito correspondente:
   # - A: 90-100
   # - B: 80-89
   # - C: 70-79
   # - D: 60-69
   # - F: abaixo de 60

nota = int(input("Insira sua nota: (de 0 a 100)\n"))

def result(nota):
    if nota < 0 or nota > 100:
        resp = "Digite uma Nota válida"
    elif nota < 60:
        resp = "Você tirou F"
    elif nota < 70:
        resp = "Você tirou D"
    elif nota < 80:
        resp = "Você tirou C"
    elif nota < 90:
        resp = "Você tirou B"
    elif nota >= 90:
        resp = "Você tirou A"
    else:
        resp = "Isso não é uma Nota"

    return resp

print(result(nota))


#2. Desenvolva um script que solicite ao usuário um número de 1 a 7 e exiba o dia da semana correspondente (1 para
#Domingo, 2 para Segunda, etc.). Se o número for inválido, exiba uma mensagem de erro.


numero = int(input("Digite um número de 1 a 7: "))

def diaDaSemana(numero):
    if numero == 1:
        resp = "Domingo"
    elif numero == 1:
        resp = "Segunda"
    elif numero == 1:
        resp = "Terça"
    elif numero == 1:
        resp = "Quarta"
    elif numero == 1:
        resp = "Quinta"
    elif numero == 1:
        resp = "Sexta"
    elif numero == 1:
        resp = "Sabádo"
    else:
        resp = "Dia da semana inválido"

    return  resp

print(diaDaSemana(numero))


## **cont += (Incremento)**

#1. Escreva um programa que conte de 1 a 10, exibindo cada número. Use um loop**`while`**e a operação**`cont += 1`**.

def contagem():
    n = 1
    while n <= 10:
        print(n)
        n += 1

contagem()





#2. Faça um script que solicite ao usuário um número e, em seguida, some todos os números de 1 até esse número (
#inclusive). Use um loop**`while`**e a operação**`cont += 1`**.

numero = int(input("Digite um número: "))

def soma(numero):
    resultado = 0
    contagem = 0
    while contagem < numero:
        contagem += 1
        resultado += contagem
        print (resultado)

soma(numero)

"""
## **while (Loop While)**

#1. Crie um programa que gere um número aleatório entre 1 e 100 e peça ao usuário para adivinhar. O programa deve
#informar se o palpite está alto ou baixo, até que o usuário acerte. Conte o número de tentativas.


"""
2. Desenvolva um script que solicite ao usuário para inserir números positivos. O programa deve continuar pedindo
números até que o usuário insira um número negativo. No final, exiba a soma de todos os números positivos inseridos.

## **Lista (a partir, entre)**

1. Crie uma lista com os números de 1 a 20. Em seguida, exiba os números que estão entre o índice 5 e o índice 10 (
inclusive).
2. Peça ao usuário para inserir uma lista de números separados por vírgula. Depois, exiba apenas os números a partir
do terceiro elemento até o final da lista.

## **list**

1. Crie uma lista vazia e peça ao usuário para inserir 5 nomes. Depois, exiba todos os nomes inseridos.
2. Faça um programa que crie uma lista com os números pares entre 1 e 50 e exiba essa lista.

## **.remove()**

1. Crie uma lista com os seguintes itens: **`["maçã", "banana", "laranja", "uva"]`**. Peça ao usuário para informar
uma fruta que deseja remover da lista e remova-a usando **`.remove()`**. Se a fruta não estiver na lista,
exiba uma mensagem de erro.
2. Peça ao usuário para inserir uma lista de números separados por vírgula. Depois, solicite um número para ser
removido da lista e remova-o usando **`.remove()`**.

## **.pop()**

1. Crie uma lista com os seguintes números: **`[10, 20, 30, 40, 50]`**. Use **`.pop()`** para remover o último número
da lista e exiba o número removido e a lista atualizada.
2. Peça ao usuário para inserir uma lista de palavras separadas por vírgula. Depois, remova a última palavra da lista
usando **`.pop()`** e exiba a palavra removida.

## **.sort()**

1. Crie uma lista com os seguintes números: **`[5, 3, 8, 1, 9]`**. Use **`.sort()`** para ordenar a lista em ordem
crescente e exiba o resultado.
2. Peça ao usuário para inserir uma lista de nomes separados por vírgula. Ordene a lista em ordem alfabética
usando **`.sort()`** e exiba o resultado.

## **Inverter itens da lista**

1. Crie uma lista com os seguintes números: **`[1, 2, 3, 4, 5]`**. Inverta a ordem dos itens na lista (usando **`[
::-1]`** ou **`.reverse()`**) e exiba o resultado.
2. Peça ao usuário para inserir uma frase e transforme-a em uma lista de palavras (usando **`.split()`**). Inverta a
ordem das palavras na frase e exiba o resultado.

## **max**

1. Crie uma lista com os seguintes números: **`[10, 20, 30, 40, 50]`**. Use **`max()`** para encontrar o maior número
na lista e exiba-o.
2. Peça ao usuário para inserir uma lista de números separados por vírgula. Encontre e exiba o maior número da lista
usando **`max()`**.

## **min**

1. Crie uma lista com os seguintes números: **`[15, 7, 22, 3, 9]`**. Use **`min()`** para encontrar o menor número na
lista e exiba-o.
2. Peça ao usuário para inserir uma série de números separados por vírgula. Encontre e exiba o menor número da lista
usando **`min()`**.

## **index**

1. Crie uma lista com os seguintes itens: **`["gato", "cachorro", "pássaro", "peixe"]`**. Use **`.index()`** para
encontrar a posição do item **`"pássaro"`** na lista e exiba-a.
2. Peça ao usuário para inserir uma palavra e verifique se ela está presente na seguinte lista: **`["maçã", "banana",
"laranja", "uva"]`**. Caso esteja presente, exiba sua posição usando **`.index()`**; caso contrário, informe que a
palavra não está na lista.

## **len**

1. Crie uma lista com os seguintes itens: **`[10, 20, 30, 40]`**. Use **`len()`** para contar quantos itens existem
na lista e exiba esse valor.
2. Peça ao usuário para inserir um texto qualquer e conte quantas palavras existem no texto (usando **`.split(
)`** e **`len()`**).

## **sum**

1. Crie uma lista com os seguintes números: **`[5, 10, 15, 20]`**. Use **`sum()`** para calcular a soma de todos os
números na lista e exiba o resultado.
2. Peça ao usuário para inserir uma série de números separados por vírgula. Converta-os em uma lista de inteiros ou
floats e calcule a soma total usando **`sum()`**.

## **sorted**

1. Crie uma lista de palavras e use **`sorted()`** para ordená-las alfabeticamente. Em seguida, ordene-as por tamanho.
2. Dada uma lista de dicionários representando pessoas (com nome e idade), use **`sorted()`** para ordená-las
primeiro por idade e depois por nome.

## **for in**

1. Crie uma lista de números e use um loop **`for`** para calcular a soma de todos os números pares.
2. Dada uma string, use um loop **`for`** para contar quantas vogais ela contém.

## **zip**

1. Crie duas listas, uma com nomes e outra com idades. Use **`zip()`** para criar uma lista de tuplas (nome, idade).
2. Dadas três listas representando coordenadas x, y e z, use **`zip()`** para criar uma lista de pontos 3D.

## **compreensão de listas**

1. Use uma compreensão de lista para criar uma lista com os quadrados dos números de 1 a 10.
2. Dada uma string, use uma compreensão de lista para criar uma lista contendo apenas as palavras com mais de 3 letras.

## **range()**

1. Use **`range()`** para criar uma lista com os números ímpares de 1 a 20.
2. Crie um programa que use **`range()`** para imprimir uma contagem regressiva de 10 a 1.

## **for i in range ou for _ in range**

1. Use **`for i in range()`** para imprimir uma tabela de multiplicação de 1 a 10.
2. Implemente um programa que use **`for _ in range()`** para simular o lançamento de um dado 100 vezes e conte
quantas vezes cada número aparece.

## **.replace**

1. Peça ao usuário para inserir uma frase e substitua todas as ocorrências de "python" por "Python"
usando **`.replace()`**.
2. Crie um programa que substitua todos os espaços em uma string por underscores usando **`.replace()`**.

## **.center**

1. Crie um programa que peça ao usuário para inserir uma palavra e a exiba centralizada em uma linha de 30 caracteres
usando **`.center()`**.
2. Implemente uma função que receba uma lista de palavras e as exiba em formato de coluna, todas centralizadas em uma
largura de 20 caracteres.

## **.upper**

1. Peça ao usuário para inserir uma frase e converta todas as palavras que começam com a letra "a" para maiúsculas.
2. Crie um programa que converta todas as consoantes de uma string para maiúsculas, mantendo as vogais em minúsculas.

## **.lower**

1. Implemente um programa que converta uma string para snake_case (todas as letras minúsculas e espaços substituídos
por underscores).
2. Crie uma função que normalize endereços de email, convertendo todos os caracteres para minúsculas.

## **.title**

1. Peça ao usuário para inserir o nome completo de uma pessoa e use **`.title()`** para formatá-lo corretamente.
2. Crie um programa que converta títulos de livros para o formato adequado usando **`.title()`**, mas mantenha
palavras como "de", "da", "do" em minúsculas.

## **.capitalize**

1. Implemente uma função que receba uma lista de frases e use **`.capitalize()`** para formatar cada frase corretamente.
2. Crie um programa que peça ao usuário para inserir várias sentenças e use **`.capitalize()`** para garantir que
cada sentença comece com letra maiúscula.

## **.split()**

1. Crie um programa que peça ao usuário para inserir uma frase e use **`.split()`** para contar quantas palavras ela
contém.
2. Implemente uma função que receba uma string contendo uma data no formato "dd/mm/aaaa" e use **`.split('/')`** para
extrair o dia, mês e ano separadamente.

## **.strip()**

1. Peça ao usuário para inserir seu nome completo com espaços extras no início e no fim. Use **`.strip()`** para
remover esses espaços e exiba o nome "limpo".
2. Crie um programa que leia um arquivo de texto onde cada linha contém um item de uma lista de compras (com
possíveis espaços extras). Use **`.strip()`** para limpar cada item antes de adicioná-lo a uma lista.

## **isdigit()**

1. Implemente uma função que verifique se uma string representa um número de telefone válido (apenas dígitos).
Use **`isdigit()`** para validar cada caractere.
2. Crie um programa que peça ao usuário para inserir uma senha. Use **`isdigit()`** para garantir que a senha
contenha pelo menos um dígito.

## **isalpha()**

1. Desenvolva um jogo da forca onde o programa verifica se a letra inserida pelo usuário é realmente uma letra do
alfabeto usando **`isalpha()`**.
2. Crie uma função que receba um nome completo e verifique se ele contém apenas letras e espaços (use **`isalpha(
)`** em combinação com **`split()`**).

## **isalnum()**

1. Implemente um validador de nomes de usuário que permita apenas caracteres alfanuméricos. Use **`isalnum()`** para
verificar cada caractere.
2. Crie um programa que verifique se uma placa de carro é válida (formato ABC1234 ou ABC-1234), usando **`isalnum(
)`** para verificar os caracteres apropriados.

## **isspace()**

1. Desenvolva uma função que remova todas as linhas em branco de um texto. Use **`isspace()`** para identificar
linhas que contêm apenas espaços em branco.
2. Crie um programa que analise um código-fonte e conte o número de linhas não vazias (excluindo linhas que são
apenas espaços em branco usando **`isspace()`**).

## **.format()**

1. Crie um programa que solicite ao usuário seu nome, idade e cidade, e use **`.format()`** para criar uma frase de
apresentação.
2. Implemente uma função que formate um número de telefone usando **`.format()`**. Por exemplo, transforme
"1234567890" em "(123) 456-7890".

## **f-strings**

1. Peça ao usuário para inserir o raio de um círculo e use f-strings para exibir a área e o perímetro com duas casas
decimais.
2. Crie um programa que gere um recibo simples. Use f-strings para formatar os itens, preços e o total,
alinhando corretamente os valores.

### **Exercícios de Funções com Uso de `raise` para Tratamento de Erros**

---

### **Exercício 1: Validação de Idade**

Crie uma função chamada `validar_idade` que recebe a idade de uma pessoa como argumento.

- Se a idade for menor que 0, lance uma exceção usando `raise` com a mensagem: `"Idade não pode ser negativa."`
- Caso contrário, retorne uma mensagem: `"Idade válida: <idade>"`

---

### **Exercício 2: Divisão com Validação**

Implemente uma função chamada `dividir` que receba dois números, `numerador` e `denominador`.

- Caso o denominador seja 0, lance uma exceção usando `raise` com a mensagem: `"Erro: Divisão por zero não é
permitida."`
- Caso contrário, retorne o resultado da divisão.

---

### **Exercício 3: Cadastro de Nome**

Crie uma função chamada `cadastrar_nome` que recebe uma string como entrada e verifica:

- Se a string estiver vazia ou contiver apenas espaços, lance uma exceção com a mensagem: `"Nome não pode estar vazio."`
- Caso contrário, retorne o nome formatado em título (com a primeira letra maiúscula em cada palavra).

---

### **Exercício 4: Validação de Número Inteiro Positivo**

Implemente uma função chamada `validar_numero_positivo` que receba um número como argumento.

- Caso o número não seja inteiro, lance uma exceção com a mensagem: `"O valor deve ser um número inteiro."`
- Se for menor ou igual a zero, lance uma exceção com a mensagem: `"O número deve ser positivo."`
- Caso contrário, retorne o número.

---

### **Exercício 5: Validação de Nota Escolar**

Crie uma função chamada `validar_nota` que recebe uma nota como argumento (float).

- Caso a nota seja menor que 0 ou maior que 10, lance uma exceção com a mensagem: `"Nota inválida. Deve estar entre 0
e 10."`
- Caso contrário, retorne a nota formatada com uma casa decimal.


### **1️⃣ Tuplas**

📌 **Conceito**: Tuplas são **estruturas imutáveis** em Python que armazenam múltiplos valores em uma sequência ordenada.

### 🔹 **Exercícios**

1️⃣ **Crie uma tupla chamada `dados_pessoais` contendo seu nome, idade e cidade natal. Em seguida, imprima cada valor individualmente.**

2️⃣ **Dada a tupla `numeros = (10, 20, 30, 40, 50)`, acesse e imprima o terceiro elemento da tupla.**

3️⃣ **Crie uma tupla com os dias da semana e peça ao usuário para digitar um número de 1 a 7. Exiba o nome do dia correspondente.**

4️⃣ **Crie uma tupla contendo cinco números e tente modificar um dos elementos. O que acontece?**

---

### **2️⃣ Operações com Tuplas**

📌 **Conceito**: Podemos realizar operações como **concatenação, repetição, verificação de elementos e obtenção de índices** em tuplas.

### 🔹 **Exercícios**

5️⃣ **Crie duas tuplas (`tupla1 = (1, 2, 3)`, `tupla2 = (4, 5, 6)`) e una ambas em uma terceira tupla.**

6️⃣ **Dada a tupla `valores = (10, 20, 30, 40, 50)`, verifique se o número 30 está presente nela.**

7️⃣ **Crie uma tupla com cinco elementos e utilize o método `.count()` para contar quantas vezes um determinado número aparece.**

8️⃣ **Dada a tupla `letras = ('a', 'b', 'c', 'd', 'e')`, encontre o índice do elemento `'c'`.**

---

### **3️⃣ `for in` com Tuplas**

📌 **Conceito**: Podemos percorrer os elementos de uma tupla usando o loop `for in`.

### 🔹 **Exercícios**

9️⃣ **Crie uma tupla com os meses do ano e use um `for` para imprimir cada um deles.**

🔟 **Dada a tupla `valores = (2, 4, 6, 8, 10)`, utilize um `for` para calcular a soma dos números.**

1️⃣1️⃣ **Crie uma tupla com nomes de frutas e use um `for` para exibir cada uma em maiúsculas.**

1️⃣2️⃣ **Dada a tupla `pares = (2, 4, 6, 8, 10)`, utilize um `for` para calcular o quadrado de cada número e imprima os resultados.**

---

### **4️⃣ `for in range(len())` com Tuplas**

📌 **Conceito**: `for in range(len(tupla))` permite percorrer uma tupla usando índices.

### 🔹 **Exercícios**

1️⃣3️⃣ **Dada a tupla `numeros = (5, 10, 15, 20)`, use `for in range(len(numeros))` para imprimir os valores com seus índices.**

1️⃣4️⃣ **Crie uma tupla com cinco nomes e utilize `for in range(len())` para exibir os nomes ao contrário.**

1️⃣5️⃣ **Dada a tupla `valores = (100, 200, 300, 400)`, utilize `for in range(len())` para dobrar os valores e exibi-los.**

1️⃣6️⃣ **Dada a tupla `('Python', 'JavaScript', 'C++', 'Java')`, use `for in range(len())` para exibir cada linguagem precedida pelo número de índice.**

---

### **5️⃣ Convertendo Tupla para Lista**

📌 **Conceito**: Podemos converter uma tupla em lista para modificar seus elementos.

### 🔹 **Exercícios**

1️⃣7️⃣ **Crie uma tupla com três cores. Converta-a em uma lista, adicione uma nova cor e imprima o resultado.**

1️⃣8️⃣ **Dada a tupla `numeros = (5, 10, 15)`, transforme-a em lista, multiplique cada elemento por 2 e transforme de volta em tupla.**

1️⃣9️⃣ **Dada a tupla `nomes = ('Ana', 'Bruno', 'Carlos')`, converta-a em lista e substitua o nome "Bruno" por "Beatriz".**

2️⃣0️⃣ **Crie uma tupla com os números de 1 a 5. Converta-a em lista, remova o último elemento e transforme-a novamente em tupla.**

---

### **6️⃣ Tupla Retornando Múltiplos Valores**

📌 **Conceito**: Uma função pode retornar múltiplos valores usando tuplas.

### 🔹 **Exercícios**

2️⃣1️⃣ **Crie uma função que recebe dois números e retorna a soma e o produto deles como uma tupla.**

2️⃣2️⃣ **Escreva uma função que recebe uma lista de números e retorna o maior e o menor número como uma tupla.**

2️⃣3️⃣ **Crie uma função que recebe um nome completo e retorna o primeiro e o último nome em uma tupla.**

2️⃣4️⃣ **Faça uma função que recebe uma string e retorna a quantidade de vogais e consoantes como uma tupla.**

### **1️⃣ Dicionários**

📌 **Conceito**: Dicionários (`dict`) são coleções **chave-valor**, onde cada chave é única.

### 🔹 **Exercícios**

1️⃣ **Crie um dicionário chamado `pessoa` com as chaves `nome`, `idade` e `cidade`. Preencha com seus dados e imprima o dicionário.**

2️⃣ **Dado o dicionário `aluno = {"nome": "João", "nota": 8.5, "curso": "Matemática"}`, acesse e imprima apenas o valor da nota.**

3️⃣ **Crie um dicionário de preços de três produtos e permita que o usuário digite o nome de um produto para ver o preço.**

4️⃣ **Crie um dicionário representando um livro (título, autor, ano). Em seguida, adicione um novo campo chamado `gênero` e imprima o dicionário atualizado.**

---

### **2️⃣ `pop()` em Dicionários**

📌 **Conceito**: O método `.pop(chave)` remove e retorna o valor de uma chave específica.

### 🔹 **Exercícios**

5️⃣ **Dado `carro = {"marca": "Ford", "modelo": "Mustang", "ano": 2022}`, remova a chave `"ano"` usando `.pop()` e exiba o valor removido.**

6️⃣ **Crie um dicionário de contatos (nome → telefone). Peça ao usuário para digitar um nome e remova esse contato usando `.pop()`.**

7️⃣ **Dado `estoque = {"maçã": 10, "banana": 5, "laranja": 8}`, remova `"banana"` usando `.pop()` e mostre o dicionário atualizado.**

8️⃣ **Crie um dicionário com informações de um jogador (nome, posição, gols). Use `.pop()` para remover a chave `"gols"` e exiba o dicionário atualizado.**

---

### **3️⃣ `del` em Dicionários**

📌 **Conceito**: A instrução `del dict[chave]` remove um item do dicionário permanentemente.

### 🔹 **Exercícios**

9️⃣ **Dado `usuario = {"nome": "Carlos", "email": "carlos@email.com", "idade": 28}`, remova a chave `"email"` usando `del` e exiba o dicionário.**

🔟 **Crie um dicionário representando um filme (título, diretor, ano). Remova a chave `"diretor"` usando `del`.**

1️⃣1️⃣ **Dado `produtos = {"arroz": 15, "feijão": 10, "macarrão": 8}`, remova `"macarrão"` usando `del` e imprima o resultado.**

1️⃣2️⃣ **Crie um dicionário com três países e suas capitais. Use `del` para remover um país e exiba o dicionário atualizado.**

---

### **4️⃣ `append` (Adicionar elementos em Dicionários)**

📌 **Conceito**: Para adicionar elementos, usamos `dict[chave] = valor`.

### 🔹 **Exercícios**

1️⃣3️⃣ **Crie um dicionário de alunos (`nome → nota`). Adicione um novo aluno usando `dict[chave] = valor`.**

1️⃣4️⃣ **Dado `agenda = {"Ana": "9999-1111", "Bruno": "8888-2222"}`, adicione um novo contato ao dicionário e imprima o resultado.**

1️⃣5️⃣ **Crie um dicionário representando um carro (`marca`, `modelo`). Adicione a chave `"ano"` e atribua um valor.**

1️⃣6️⃣ **Crie um dicionário com nomes de cidades e seus estados. Adicione uma nova cidade com seu estado correspondente.**

---

### **5️⃣ `for in` em Dicionários**

📌 **Conceito**: Podemos iterar sobre chaves e valores de um dicionário.

### 🔹 **Exercícios**

1️⃣7️⃣ **Dado `cores = {"vermelho": "#FF0000", "verde": "#00FF00", "azul": "#0000FF"}`, use `for` para imprimir todas as cores e seus códigos hexadecimais.**

1️⃣8️⃣ **Crie um dicionário com três países e suas capitais e use `for` para imprimir `"A capital de {país} é {capital}"`.**

1️⃣9️⃣ **Dado `estoque = {"maçã": 10, "banana": 5, "laranja": 8}`, use `for` para exibir o nome das frutas e a quantidade em estoque.**

2️⃣0️⃣ **Crie um dicionário de estudantes (`nome → nota`). Use `for` para exibir apenas os nomes.**

---

### **6️⃣ `values()` em Dicionários**

📌 **Conceito**: O método `.values()` retorna todos os valores do dicionário.

### 🔹 **Exercícios**

2️⃣1️⃣ **Dado `idades = {"Alice": 25, "Bruno": 30, "Carlos": 22}`, use `.values()` para imprimir todas as idades.**

2️⃣2️⃣ **Crie um dicionário de preços de produtos e utilize `.values()` para calcular a soma total dos preços.**

2️⃣3️⃣ **Dado `pontuacao = {"Ana": 50, "Beatriz": 70, "Carlos": 85}`, use `.values()` para encontrar a maior pontuação.**

2️⃣4️⃣ **Crie um dicionário de notas de alunos e exiba a média das notas usando `.values()`.**

---

### **7️⃣ `keys()` em Dicionários**

📌 **Conceito**: O método `.keys()` retorna todas as chaves do dicionário.

### 🔹 **Exercícios**

2️⃣5️⃣ **Dado `cadastro = {"nome": "Lucas", "idade": 29, "cidade": "São Paulo"}`, use `.keys()` para exibir todas as chaves.**

2️⃣6️⃣ **Crie um dicionário representando um carro (marca, modelo, ano). Utilize `.keys()` para exibir os atributos disponíveis.**

2️⃣7️⃣ **Dado `contatos = {"Ana": "9999-1111", "Bruno": "8888-2222", "Carlos": "7777-3333"}`, utilize `.keys()` para listar os nomes dos contatos.**

2️⃣8️⃣ **Crie um dicionário com países e capitais. Use `.keys()` para verificar se um país específico está no dicionário.**

---

### **8️⃣ Convertendo Dicionário para Lista (`list()`)**

📌 **Conceito**: Podemos converter as chaves ou valores de um dicionário em uma lista usando `list(dict)`, `list(dict.keys())` ou `list(dict.values())`.

### 🔹 **Exercícios**

2️⃣9️⃣ **Dado `dados = {"nome": "Maria", "idade": 32, "cidade": "Recife"}`, converta suas chaves em uma lista e imprima.**

3️⃣0️⃣ **Dado `precos = {"pão": 2.5, "leite": 4.0, "café": 8.5}`, transforme os valores em uma lista e imprima.**

3️⃣1️⃣ **Crie um dicionário representando notas de alunos (`aluno → nota`). Converta os nomes dos alunos em uma lista.**

3️⃣2️⃣ **Dado `estoque = {"maçã": 10, "banana": 5, "laranja": 8}`, transforme o dicionário inteiro em uma lista de tuplas (`list(estoque.items())`) e imprima.**

### **1️⃣ Conjuntos (`set`)**

📌 **Conceito**: Conjuntos em Python são **coleções não ordenadas** de elementos **únicos**, sem valores duplicados.

### 🔹 **Exercícios**

1️⃣ **Crie um conjunto chamado `numeros` com os valores `{1, 2, 3, 4, 5}` e imprima-o.**

2️⃣ **Tente criar um conjunto com valores duplicados e veja o que acontece.**

3️⃣ **Crie um conjunto com letras do seu nome e exiba os elementos.**

4️⃣ **Crie um conjunto vazio e adicione três números diferentes a ele.**

---

### **2️⃣ `for in` com Conjuntos**

📌 **Conceito**: Podemos percorrer os elementos de um conjunto usando `for in`.

### 🔹 **Exercícios**

5️⃣ **Crie um conjunto com os números `{10, 20, 30, 40, 50}` e use `for` para exibir cada número.**

6️⃣ **Crie um conjunto com três nomes e use um `for` para imprimir cada um deles.**

7️⃣ **Dado `valores = {2, 4, 6, 8, 10}`, use um `for` para calcular a soma dos números.**

8️⃣ **Crie um conjunto de vogais e use um `for` para imprimir as vogais em maiúsculas.**

---

### **3️⃣ `remove()` com Conjuntos**

📌 **Conceito**: O método `.remove(valor)` remove um elemento específico do conjunto.

### 🔹 **Exercícios**

9️⃣ **Dado `frutas = {"maçã", "banana", "uva", "laranja"}`, remova `"banana"` e exiba o conjunto atualizado.**

🔟 **Crie um conjunto de números `{1, 2, 3, 4, 5}` e remova o número 3.**

1️⃣1️⃣ **Dado `cores = {"vermelho", "azul", "verde"}`, peça ao usuário para digitar uma cor e remova-a do conjunto.**

1️⃣2️⃣ **Crie um conjunto de linguagens de programação e remova `"Java"` se existir.**

---

### **4️⃣ Criando Conjuntos com `set()`**

📌 **Conceito**: Podemos criar conjuntos a partir de listas ou outras coleções usando `set()`.

### 🔹 **Exercícios**

1️⃣3️⃣ **Converta a lista `numeros = [1, 2, 3, 3, 4, 4, 5]` em um conjunto para remover duplicatas.**

1️⃣4️⃣ **Crie um conjunto a partir da string `"banana"` e veja os caracteres únicos.**

1️⃣5️⃣ **Dada a tupla `dados = ("a", "b", "a", "c", "b")`, transforme-a em um conjunto.**

1️⃣6️⃣ **Crie um conjunto a partir de uma lista de palavras e imprima apenas as palavras únicas.**

---

### **5️⃣ `.intersection()` (Interseção de Conjuntos)**

📌 **Conceito**: `.intersection()` retorna os elementos comuns entre dois conjuntos.

### 🔹 **Exercícios**

1️⃣7️⃣ **Dado `pares = {2, 4, 6, 8, 10}` e `multiplos_de_tres = {3, 6, 9, 12}`, encontre os números em comum.**

1️⃣8️⃣ **Crie dois conjuntos representando alunos que gostam de futebol e basquete e encontre os que gostam de ambos.**

1️⃣9️⃣ **Dado `vogais = {"a", "e", "i", "o", "u"}` e `letras_nome = set("Carlos")`, encontre as vogais no nome.**

2️⃣0️⃣ **Crie dois conjuntos com números aleatórios e descubra quais números aparecem em ambos.**

---

### **6️⃣ `.union()` (União de Conjuntos)**

📌 **Conceito**: `.union()` combina todos os elementos de dois conjuntos.

### 🔹 **Exercícios**

2️⃣1️⃣ **Dado `pares = {2, 4, 6, 8}` e `impares = {1, 3, 5, 7}`, una os dois conjuntos.**

2️⃣2️⃣ **Crie dois conjuntos com nomes de alunos de duas turmas e una todos os alunos.**

2️⃣3️⃣ **Dado `vogais = {"a", "e", "i", "o", "u"}` e `consoantes = {"b", "c", "d", "f"}`, una os dois conjuntos.**

2️⃣4️⃣ **Crie dois conjuntos de cores e una ambos em um terceiro conjunto.**

---

### **7️⃣ `.difference()` (Diferença entre Conjuntos)**

📌 **Conceito**: `.difference()` retorna os elementos que estão em um conjunto, mas não no outro.

### 🔹 **Exercícios**

2️⃣5️⃣ **Dado `numeros1 = {1, 2, 3, 4, 5}` e `numeros2 = {4, 5, 6, 7}`, encontre os elementos exclusivos de `numeros1`.**

2️⃣6️⃣ **Crie um conjunto com nomes de funcionários de um setor e outro conjunto com funcionários promovidos. Encontre os que ainda estão no setor.**

2️⃣7️⃣ **Dado `vogais = {"a", "e", "i", "o", "u"}` e `letras_nome = set("Felipe")`, descubra as vogais que não aparecem no nome.**

2️⃣8️⃣ **Crie dois conjuntos com números e descubra quais números estão apenas no primeiro conjunto.**
"""
