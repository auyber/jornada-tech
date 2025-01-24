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
"""

#2. Crie um script que peça ao usuário para inserir o raio de um círculo. Calcule e exiba a área do círculo com três
#casas decimais. (Use pi = 3.14159)



"""
## **Divisão Inteira**

1. Faça um programa que solicite ao usuário um número de minutos e converta para horas e minutos. Por exemplo,
145 minutos deve ser exibido como 2 horas e 25 minutos.
2. Crie um script que peça ao usuário um número de dias e converta para semanas e dias. Por exemplo, 17 dias deve ser
exibido como 2 semanas e 3 dias.

## **and (E lógico)**

1. Desenvolva um programa que peça ao usuário sua idade e se possui carteira de motorista (responda com "sim" ou
"não"). O programa deve determinar se a pessoa pode dirigir (idade maior ou igual a 18 e possui carteira).
2. Crie um script que solicite ao usuário um número e verifique se ele está entre 0 e 100 (inclusive). Use o
operador **`and`** na sua condição.

## **or (OU lógico)**

1. Escreva um programa que peça ao usuário para inserir um caractere e determine se é uma vogal (a, e, i, o, u,
considerando maiúsculas e minúsculas).
2. Faça um script que solicite ao usuário um número e verifique se ele é menor que 0 ou maior que 100. Use o
operador **`or`** na sua condição.

## **if, elif, else**

1. Crie um programa que peça ao usuário para inserir sua nota (de 0 a 100) e exiba o conceito correspondente:
    - A: 90-100
    - B: 80-89
    - C: 70-79
    - D: 60-69
    - F: abaixo de 60
2. Desenvolva um script que solicite ao usuário um número de 1 a 7 e exiba o dia da semana correspondente (1 para
Domingo, 2 para Segunda, etc.). Se o número for inválido, exiba uma mensagem de erro.

## **cont += (Incremento)**

1. Escreva um programa que conte de 1 a 10, exibindo cada número. Use um loop **`while`** e a operação **`cont += 1`**.
2. Faça um script que solicite ao usuário um número e, em seguida, some todos os números de 1 até esse número (
inclusive). Use um loop **`while`** e a operação **`cont += 1`**.

## **while (Loop While)**

1. Crie um programa que gere um número aleatório entre 1 e 100 e peça ao usuário para adivinhar. O programa deve
informar se o palpite está alto ou baixo, até que o usuário acerte. Conte o número de tentativas.
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
"""
