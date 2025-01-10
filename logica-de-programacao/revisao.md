# Lógica de Programação e Algoritmos

## Introdução

---

## Índice  
1. [Introdução à Lógica e aos Algoritmos](#1-introdução-à-lógica-e-aos-algoritmos)  
2. [Sistemas de Computação](#2-sistemas-de-computação)  
3. [O Bit, o Byte e a Palavra](#3-o-bit-o-byte-e-a-palavra)  
4. [Representações dos Algoritmos](#4-representações-dos-algoritmos)  
5. [Linguagens de Programação e Compiladores](#5-linguagens-de-programação-e-compiladores)  
6. [Utilizando Python para Aprender Lógica e Algoritmos](#6-utilizando-python-para-aprender-lógica-e-algoritmos)  
7. [Primeiros Passos em Python](#7-primeiros-passos-em-python)  
8. [Algoritmos Sequenciais e Estruturas de Seleção ou Decisão](#8-algoritmos-sequenciais-e-estruturas-de-seleção-ou-decisão)  
9. [Condicionais Simples e Compostas](#9-condicionais-simples-e-compostas)  
10. [Indentação](#10-indentação)  
11. [Condicional Composta](#11-condicional-composta)  
12. [Comparando Desempenho](#12-comparando-desempenho)  
13. [Expressões Lógicas e Álgebra Booleana](#13-expressões-lógicas-e-álgebra-booleana)  
14. [Condicionais Aninhadas](#14-condicionais-aninhadas)  
15. [Condicionais de Múltipla Escolha (elif)](#15-condicionais-de-múltipla-escolha-elif)



---

## 1. Introdução à Lógica e aos Algoritmos

###  Introdução à Lógica
Você já reparou como organiza suas atividades diárias de maneira lógica? Por exemplo, ao acordar, você segue uma ordem de tarefas, como se vestir, escovar os dentes e tomar café, baseando-se em um raciocínio lógico, que faz sentido para você.

Esse raciocínio lógico tem sua origem na Grécia Antiga, com Aristóteles (384-322 a.C.). A palavra *lógica* vem do grego "logos", que significa *linguagem racional*. Na área de computação, o termo lógica se refere à organização de instruções, assertivas e pressupostos dentro de um algoritmo para viabilizar a execução de um programa.

---

###  Introdução aos Algoritmos
O conceito de *algoritmo* está intimamente relacionado à lógica. Antes mesmo da era digital, no século XVII, filósofos e matemáticos como Gottfried Wilhelm Leibniz discutiam sobre sequências de passos para realizar tarefas. Na matemática, por exemplo, resolver equações exige uma sequência exata de passos, como a resolução da equação \( (a + b) \times c + d \).

Outro exemplo cotidiano de algoritmo é uma receita de bolo, que é uma sequência de passos. Se esses passos não forem seguidos corretamente, o resultado pode ser um bolo imperfeito. Também podemos pensar em como fazemos um sanduíche: ao seguir um algoritmo específico, garantimos que o resultado seja sempre o mesmo.

**Exemplo prático: Algoritmo para fazer um sanduíche**
1. Pegue uma fatia de pão de forma.
2. Raspe duas vezes a manteiga com a ponta da faca.
3. Espalhe a manteiga uniformemente em um lado do pão.
4. Coloque uma fatia de queijo e uma de presunto.
5. Coloque a outra fatia de pão por cima.

Esse exemplo demonstra como a descrição precisa dos passos é essencial para a máquina, como o computador, executar corretamente a tarefa.

### Exercício de Revisão:
Escreva uma sequência de passos (um algoritmo) para calcular a área de um triângulo usando a fórmula \( \text{Área} = \frac{base \times altura}{2} \).


### Exercício de Fixação:
Organize na ordem correta os passos para enviar um e-mail com um anexo:

1. Escrever o corpo do e-mail.
2. Inserir o endereço de e-mail do destinatário.
3. Clicar no botão "Anexar arquivo".
4. Selecionar o arquivo desejado.
5. Clicar no botão "Enviar".
6. Preencher o campo "Assunto" do e-mail.
7. Verificar se o anexo foi carregado corretamente.
8. Abrir o programa de e-mail ou acessar o serviço de e-mail online.

---

## 2. Sistemas de Computação

### O Hardware
Embora o desenvolvimento de software seja essencial, nenhum programa tem utilidade sem o hardware, que é a infraestrutura necessária para a execução do programa. O hardware é responsável por executar os algoritmos desenvolvidos, permitindo a computação de dados.

Os primeiros computadores digitais, como o **ENIAC** (1943-1946), foram desenvolvidos para realizar cálculos complexos durante a Segunda Guerra Mundial. Esses computadores eram grandes, pesados e consumiam muita energia. O ENIAC, por exemplo, pesava 30 toneladas e consumia 140 kW de potência.

---

### A Arquitetura de Von Neumann
O matemático John von Neumann, em 1946, propôs a arquitetura que fundamenta os computadores modernos. Ele sugeriu que computadores não precisavam ser programados manualmente com interruptores, e a aritmética decimal deveria ser substituída por sistemas binários para facilitar os cálculos.

Essa proposta de von Neumann, que definiu a base da arquitetura computacional, permitiu o desenvolvimento de computadores mais práticos e eficientes, com uma memória interna capaz de armazenar e processar informações de forma mais ágil.

---
### A Máquina de Von Neumann

A máquina de Von Neumann é a arquitetura-base de qualquer sistema computacional no século XXI. Ela é composta por cinco elementos fundamentais, conforme ilustrado na figura abaixo:

### Elementos da Máquina de Von Neumann

1. **Memória**: Armazena tanto o programa (algoritmo) em execução quanto os dados usados pelo programa. A memória que mantém os programas em execução é chamada de RAM (Memória de Acesso Aleatório).
2. **Unidade Lógica e Aritmética (ULA)**: Responsável pelos cálculos aritméticos e lógicos do computador. Dentro da ULA, existe um registrador chamado **acumulador**, que armazena temporariamente os resultados das operações.
3. **Unidade de Controle (UC)**: Gerencia o fluxo de execução dos programas, determinando qual será a próxima instrução a ser executada e onde ela está localizada na memória.
4. **Dispositivos de Entrada**: São os meios pelos quais as informações são inseridas no sistema. Exemplo: teclado.
5. **Dispositivos de Saída**: São as formas pelas quais os resultados das ações do programa são apresentados ao usuário. Exemplo: tela ou luzes indicativas.

A ULA e a UC formam a **Unidade Central de Processamento (CPU)**, que é o "cérebro" do computador. Antigamente, a memória não fazia parte do chip da CPU, mas hoje as memórias de alta velocidade (como a **memória cache**) são integradas ao chip para otimizar o desempenho.

### Evolução Tecnológica
Desde a proposta de von Neumann, as tecnologias de construção de computadores evoluíram drasticamente. Nos anos 1950, a miniaturização começou com o uso de transistores no lugar das válvulas. Em 1960, os circuitos integrados permitiram a redução ainda maior no tamanho e custo dos computadores, tornando-os acessíveis para uso doméstico.

A arquitetura de von Neumann permanece a base dos computadores modernos, desde PCs até dispositivos embarcados como micro-ondas e lâmpadas inteligentes.

## 3. O Bit, o Byte e a Palavra

### Representação Binária

Os computadores utilizam a aritmética binária, onde os dados são representados usando apenas dois símbolos: `0` e `1`. Esses símbolos são chamados de **bit** (dígito binário), e são usados para representar toda informação processada pelo computador. O bit é a unidade mínima de armazenamento.

### Conversão entre Bases

Apesar de os computadores trabalharem com binário, nós, humanos, usamos a base decimal. Existe um processo de conversão entre essas bases que permite que possamos ver e interagir com as informações de forma compreensível para nós. No entanto, como a conversão não é o foco desse estudo, recomendamos o livro "Sistemas digitais: princípios e aplicações" para quem deseja entender melhor como realizar essas conversões.

### Unidade de Armazenamento

- **Byte**: 8 bits.
- **Kilobyte (KB)**: 1.024 bytes.
- **Megabyte (MB)**: 1.024 KB.
- **Gigabyte (GB)**: 1.024 MB.
- **Terabyte (TB)**: 1.024 GB.
- **Petabyte (PB)**: 1.024 TB.

Mesmo sendo o bit a menor unidade de armazenamento, os computadores processam dados em unidades maiores, como palavras (word). Uma CPU moderna opera com 64 bits, ou seja, realiza operações com blocos de 64 bits de cada vez.

## O Sistema Operacional

### Função do Sistema Operacional

Um **sistema operacional** (SO) é um software complexo que gerencia a execução de outros programas e abstrai a complexidade do hardware para o desenvolvedor e usuário. Sem ele, seria impossível desenvolver programas universais, pois cada hardware teria que ser tratado individualmente.

#### Exemplos de Sistemas Operacionais
- **Microsoft**: MS-DOS, Windows.
- **Unix/Linux**: Ubuntu, Fedora, Mint.
- **Apple**: macOS.
- **Dispositivos Móveis**: Android, iOS.
- **Outros**: FreeBSD, Solaris, Orbis OS (para Playstation), FreeRTOS (para dispositivos embarcados).

### Desenvolvimento de Software

Ao desenvolver um software, o programador não precisa se preocupar com os detalhes do hardware, pois o sistema operacional gerencia isso, permitindo a criação de aplicações mais universais.

## 4. Representações dos Algoritmos

Algoritmos são sequências de passos que definem como realizar uma tarefa. Existem diferentes formas de representá-los:

### Descrição Narrativa

A descrição narrativa é a maneira mais simples de construir algoritmos, utilizando linguagem natural. No entanto, ela pode ser ambígua e sujeita a interpretações duplas. Por isso, ela é raramente usada em programação, onde a precisão é crucial.

### Exemplo de Descrição Narrativa:
- Recebe dois valores (x e y).
- Verifica se os valores são iguais.
- Informa o resultado da comparação.

Embora simples, a descrição narrativa carece de formalidade, tornando-a imprática para implementações precisas de algoritmos computacionais.

### Fluxograma

O fluxograma é uma das maneiras de representar algoritmos de forma gráfica, utilizando símbolos padronizados. Embora fluxogramas não possam ser executados por softwares, eles são fundamentais para representar a lógica de um algoritmo, ajudando na organização do raciocínio e tornando os processos mais claros. Em apresentações acadêmicas ou profissionais, fluxogramas são muito utilizados para transmitir a ideia de um código, evitando a complexidade de se mostrar o código completo.

A simbologia dos fluxogramas segue um padrão, conforme a norma ISO 5807:1985. Essa simbologia é usada para identificar os tipos de ações e decisões dentro do algoritmo. A Figura 3 mostra todos os símbolos padronizados de fluxogramas, enquanto a Figura 4 exemplifica como um fluxograma pode representar um algoritmo.

---

## 5. Linguagens de programação e Compiladores

Entendemos que o pseudocódigo é uma forma simplificada de representar algoritmos, mas, para criar programas executáveis, precisamos usar uma linguagem de programação. Mas o que exatamente é uma linguagem de programação?

### Linguagem de Programação

Os computadores, como já vimos, operam em binário, ou seja, com zeros e uns. Se fosse necessário programar diretamente em binário, o processo seria muito mais demorado e complexo, o que não seria viável, considerando a velocidade que desejamos atingir no desenvolvimento de software.

No passado, os primeiros computadores como o Altair 8800 usavam programação diretamente em binário. Porém, com o desenvolvimento das linguagens de programação, isso se tornou mais fácil. Linguagens de programação são projetadas para serem compreendidas por humanos e pela máquina, com regras específicas que permitem ao programador escrever códigos que o computador pode entender sem falhas.

As linguagens de programação possuem um conjunto de regras, chamadas de sintaxe, que definem como os programas devem ser escritos. Essas linguagens são essenciais para tornar o processo de codificação mais eficiente, além de evitar erros de interpretação. Existem várias linguagens no mercado, e em breve veremos algumas das mais importantes.

---

### Histórico das Linguagens de Programação

Nos primeiros dias da computação, as mulheres desempenhavam um papel fundamental na programação, como as programadoras do Eniac e Grace Hopper, que ajudaram a criar a linguagem Cobol. No início, linguagens como Cobol e Fortran eram usadas para programação e resolver questões matemáticas complexas.

Ao longo do tempo, linguagens como C foram desenvolvidas, permitindo aos programadores usar bibliotecas de funções para se concentrar mais no algoritmo e menos nos detalhes de hardware. A criação de bibliotecas foi um marco importante, tornando o processo de codificação mais eficiente.

Na década de 1980, as linguagens de programação imperativas se consolidaram, e a programação orientada a objetos se tornou um conceito importante. Na década de 1990, com o crescimento da internet, novas linguagens foram criadas para resolver problemas específicos, como as linguagens funcionais que focam em aumentar a produtividade do programador.

---

### Software de Compilação

Os computadores só compreendem a linguagem binária. No entanto, os programadores escrevem código em linguagens de programação de alto nível, como Java ou Python. Para que o computador entenda esse código, é necessário usar um compilador, que converte o código de alto nível para um formato binário, que a máquina pode processar.

O processo de compilação é complexo e varia conforme a linguagem, mas o objetivo final é gerar um arquivo executável, como um arquivo .exe. Cada linguagem tem seu próprio compilador, que depende do sistema operacional em que está sendo executado.

A compilação permite que programadores escrevam código de forma mais eficiente e compreensível, sem precisar se preocupar com os detalhes de baixo nível da máquina. Esse processo facilita o desenvolvimento de softwares complexos e permite que eles sejam executados rapidamente.

---

### Linguagens de Programação Populares

A seguir, comentamos algumas das linguagens mais populares no mercado, cada uma com seu papel distinto no desenvolvimento de software:

#### Linguagens de Programação

- **JavaScript**: Uma das linguagens mais populares nos últimos anos, é amplamente utilizada no desenvolvimento web, sendo essencial para criar páginas interativas. Por ser interpretada, está no topo da lista, principalmente devido ao seu domínio no desenvolvimento web e sua base em tecnologias de desenvolvimento mobile.
  
- **Python**: Considerada a linguagem mais popular nos últimos anos, ela abrange uma variedade de segmentos de desenvolvimento. Sua simplicidade e legibilidade contribuíram para seu crescimento, tornando-a uma escolha popular tanto para iniciantes quanto para desenvolvedores experientes. No material em questão, adotaremos Python como a linguagem de ensino.

- **Java**: Embora tenha tido seu auge em meados de 2010, Java ainda possui uma base sólida, especialmente em sistemas corporativos e aplicativos móveis. Uma das grandes inovações de Java foi a sua capacidade de usar um código único que pode ser executado em qualquer plataforma, devido à máquina virtual Java (JVM). Sua estrutura orientada a objetos também contribuiu para sua popularidade.

- **C**: Uma das linguagens mais antigas, surgida na década de 1970, a C continua sendo uma das mais utilizadas, especialmente em áreas como engenharia e programação de hardware. Ela é considerada de médio nível por fornecer tanto controle sobre o hardware quanto abstração. Sua popularidade persiste devido à sua simplicidade e eficiência.

- **C++**: Derivada do C, o C++ adiciona conceitos de programação orientada a objetos. Usada principalmente em sistemas que exigem alta performance, como sistemas operacionais e compiladores, é uma escolha sólida para desenvolvedores que buscam otimizar o desempenho de suas aplicações.

- **C# (C Sharp)**: Criada pela Microsoft como parte da plataforma .NET, o C# é uma linguagem orientada a objetos que ganhou destaque devido à sua integração com o Windows e suas poderosas bibliotecas de funções. Também é muito popular no desenvolvimento de jogos com a Unity Engine, tornando-a uma das principais linguagens de programação para essa área.

- **PHP**: Originalmente desenvolvida para web, o PHP já foi uma das linguagens mais usadas na criação de websites dinâmicos. Embora tenha perdido espaço para o JavaScript, continua sendo uma linguagem relevante, especialmente para desenvolvimento de back-end em sites tradicionais.

#### Linguagens Não Consideradas de Programação

- **HTML/CSS**: Embora essenciais para o desenvolvimento web, HTML e CSS não são linguagens de programação. HTML é uma linguagem de marcação utilizada para estruturar páginas, enquanto o CSS é usado para definir seu estilo visual. Juntas, essas linguagens são fundamentais para a construção de sites, mas não têm capacidade de lógica ou manipulação de dados como as linguagens de programação tradicionais.

- **SQL**: SQL (Structured Query Language) não é uma linguagem de programação completa, mas sim uma linguagem especializada para consulta e manipulação de bancos de dados. Com o SQL, é possível extrair, atualizar, inserir e excluir dados de bases de dados relacionais.

---

## 6. Utilizando Python para Aprender Lógica e Algoritmos

Neste estudo, vamos usar o Python como ferramenta para aprender **lógica de programação** e **algoritmos**. Python é uma excelente linguagem para iniciantes devido à sua **simplicidade** e **legibilidade**, o que permite focar mais no raciocínio lógico e nos conceitos fundamentais da programação.

---

### Características do Python

O Python é uma das linguagens mais populares e utilizadas em diversas áreas de desenvolvimento. Algumas de suas principais características incluem:

- **Versatilidade**: O Python é uma linguagem de **propósito geral**, ou seja, pode ser aplicada em diversas áreas como **web**, **inteligência artificial**, **jogos**, **ciência de dados**, entre outras. O Python tem uma grande quantidade de bibliotecas para diferentes finalidades.
  
- **Facilidade de Aprendizado**: A simplicidade, legibilidade e **intuitividade** tornam o Python uma linguagem ideal para iniciantes. Sua sintaxe é limpa e o código é fácil de escrever e entender, sem muitas complexidades.

- **Multiplataforma**: O Python pode ser executado em diferentes sistemas operacionais (Windows, Linux, macOS), sem a necessidade de ajustes no código, o que facilita sua portabilidade.

- **Orientação a Objetos e Estruturada**: Python é uma linguagem **orientada a objetos**, mas também suporta a programação **estruturada**. Sua flexibilidade torna a linguagem poderosa e fácil de adaptar para diferentes tipos de projetos.

- **Licença Open Source**: O Python é **open source** e possui uma licença compatível com a GPL, o que permite o seu uso, modificação e distribuição de forma gratuita.

### Filosofia do Python (Zen do Python)

O Python possui uma filosofia que orienta como os desenvolvedores devem pensar e escrever código. O **Zen do Python**, criado por Tim Peters, inclui princípios que ajudam a escrever um código mais simples e eficiente, como:

- **"Bonito é melhor que feio"**: Código bem estruturado e limpo é preferível.
- **"Explícito é melhor que implícito"**: Deve-se evitar ambiguidades, sendo o código claro e direto.
- **"Legibilidade faz diferença"**: A legibilidade do código é fundamental.
- **"Embora a praticidade vença a pureza"**: Em alguns casos, soluções práticas podem ser preferíveis, mesmo que não sejam puramente ideais.
- **"Agora é melhor que nunca"**: Começar a trabalhar em algo agora é mais eficiente do que esperar o momento perfeito.

Esses princípios ajudam a promover boas práticas de programação e facilitam o trabalho em equipe.

### História do Python

A linguagem Python foi criada por **Guido van Rossum** no **Centro de Matemática e Informática** (CWI) de Amsterdã, no início dos anos 90. A inspiração veio da linguagem **ABC**, que, apesar de não ter sido muito popular, influenciou as ideias iniciais do Python.

- **Nome**: O nome **Python** não é em referência à cobra, mas ao programa britânico de TV "Monty Python's Flying Circus", de onde o criador se inspirou.

- **Python Software Foundation (PSF)**: Criada em 2001, a **PSF** é responsável por manter e evoluir o Python, tornando-o uma das linguagens mais influentes e utilizadas mundialmente. Empresas como Google e Microsoft fazem parte da fundação.

### Aplicações do Python

O Python é conhecido por sua versatilidade, sendo utilizado em diversas áreas da computação, como:

- **Desenvolvimento Web**: O Python, integrado com HTML/CSS, pode ser utilizado para criar websites. Frameworks como **Django** e **Flask** facilitam esse processo.

- **Análise de Dados**: Bibliotecas como **Pandas**, **TensorFlow** e **Pytorch** permitem o processamento de grandes volumes de dados e o desenvolvimento de sistemas de aprendizado de máquina.

- **Sistemas Operacionais e Hardware**: O Python é suportado por sistemas operacionais como **Linux** e **macOS**, e também é usado em dispositivos como o **Raspberry Pi**.

- **Desenvolvimento de Jogos**: O Python também é utilizado na criação de jogos, com exemplos como **Sid Meier’s Civilization IV** e **Battlefield 2**, além do motor de jogo **Godot**.

---

### Ambientes de Desenvolvimento

### IDLE (Integrated Development and Learning Environment)
- Interpretador padrão que acompanha o Python.
- Executa comandos linha por linha, sem gerar código de máquina.
- Disponível para todos os sistemas operacionais.

### IDEs Gráficas
- **PyCharm**: IDE popular desenvolvida pela JetBrains.
  - Oferece recursos avançados como depuração e execução passo a passo.

### Projeto Jupyter
- Plataforma open-source para desenvolvimento na nuvem.
- Permite criar Notebooks Jupyter sem instalação local.
- Mistura texto e código interativo.
- Opções populares: Microsoft Azure Notebook e Google Colab.

### Ciclo de Processamento de Dados

Um algoritmo computacional segue três etapas principais:
1. **Entrada**: Inserção de dados no programa (ex: via teclado).
2. **Processamento**: Execução de instruções pela CPU.
3. **Saída**: Apresentação dos resultados (ex: na tela).

## 7. Primeiros Passos em Python

### Função de Saída (`print`)
- Sintaxe: `print('Mensagem')`.
- Aceita aspas simples ou duplas.
- Pode realizar operações aritméticas: `print(2 + 3)`.
- Permite concatenação de strings: `print('Olá,' + 'Mundo!')`.

### Operadores Matemáticos
- **Adição**: `+`
- **Subtração**: `-`
- **Multiplicação**: `*`
- **Divisão (com decimais)**: `/`
- **Divisão inteira**: `//`
- **Módulo (resto)**: `%`
- **Exponenciação**: `**`

### Regras Importantes
- Python é **case-sensitive**.
- **Indentação** é crucial.
- Parênteses e aspas devem ser fechados corretamente.

### Manipulação de Strings

### Concatenação
- Usando `+`: `'Olá' + 'Mundo'`.
- Usando vírgula: `print('Olá', 'Mundo')`.

### Operações Mistas
- Combinando strings e operações: `print('Soma:', 2 + 3)`.

### Boas Práticas
- Verificar a digitação cuidadosamente.
- Respeitar maiúsculas e minúsculas.
- Manter consistência na indentação.
- Seguir as convenções de nomenclatura do Python.

---

## 8. Algoritmos Sequenciais e Estruturas de Seleção ou Decisão

### Objetivo
O objetivo é estudar algoritmos em Python, com foco em estruturas de seleção ou decisão, que permitem que o fluxo de execução do código varie conforme uma condição. O conteúdo aborda os tipos de condicionais: simples, composta, aninhada e de múltipla escolha, sendo uma base comum em várias linguagens de programação.

### Algoritmos Sequenciais
Algoritmos sequenciais são aqueles em que todas as instruções são executadas em ordem, uma após a outra. Exemplo:

### Exemplo do Lenhador
Um lenhador deve ir até a floresta cortar lenha. O algoritmo sequencial seria:

```
Início
1. Seguir até a entrada da floresta.
2. Seguir até as toras de madeira.
3. Cortar uma lenha.
4. Retornar ao seu acampamento.
Fim
```

### Fluxo de Execução com Decisões

Agora, imaginamos que o lenhador tem duas opções de caminho: esquerdo e direito. Dependendo do caminho, a sequência de ações pode mudar:

- **Caminho da esquerda**: o lenhador encontra um lobo e precisa enfrentá-lo.
- **Caminho da direita**: o lenhador segue sem enfrentar o lobo.

### Exemplo do Caminho com Decisão

A execução pode ser reorganizada usando uma estrutura de decisão condicional. Em pseudocódigo:

```
Início
1. Seguir até a entrada da floresta.
2. Se (caminho = esquerda)
   a. Enfrentar o lobo
3. Seguir até as toras de madeira.
4. Cortar uma lenha.
5. Retornar ao seu acampamento.
Fim
```

### Otimização

Podemos otimizar o algoritmo para evitar a repetição de instruções. O algoritmo reescrito:

```
Início
1. Seguir até a entrada da floresta
2. Se (caminho = esquerda)
   a. Enfrentar o lobo
3. Seguir até as toras de madeira
4. Cortar uma lenha
5. Retornar ao seu acampamento
Fim
```
A única diferença entre os caminhos está no enfrentamento do lobo, caso o caminho escolhido seja o da esquerda.

---

## 9. Condicionais Simples e Compostas

### Condicional Simples

A condicional simples permite executar um conjunto de instruções caso uma condição seja verdadeira. Caso contrário, o fluxo ignora o bloco de instruções.

#### Exemplo de implementação em Python:

```
if (condição):
    # Instruções a serem executadas se a condição for verdadeira
```
### Exemplo Prático: Comparando dois números
```
# Lê dois valores inteiros e compara ambos
x = int(input('Digite um valor inteiro: '))
y = int(input('Digite um segundo valor inteiro: '))
if (x > y):
    print('O primeiro valor é maior que o segundo!')
```
### Fluxograma da Condicional Simples

Um fluxograma que representa uma estrutura de decisão simples, onde se a condição for verdadeira, o bloco de instruções é executado:

Início
|
|-- (condição) --> Verdadeiro --> Executa instruções
|
|-- Falso --> Ignora as instruções
Fim

### Expansão do Exemplo

Podemos adicionar uma segunda condicional para verificar se o segundo valor é maior que o primeiro:
```
# Lê dois valores inteiros e compara ambos
x = int(input('Digite um valor inteiro: '))
y = int(input('Digite um segundo valor inteiro: '))
if (x > y):
    print('O primeiro valor é maior que o segundo!')
if (x < y):
    print('O segundo valor é maior que o primeiro!')
```

---

## 10. Indentação

Antes de continuar com o estudo sobre as condicionais, é importante destacar a importância da indentação no código. Indentar o código significa organizá-lo visualmente, utilizando recuos para tornar a leitura e a compreensão mais fáceis.

Nos exemplos anteriores, observe que as instruções dentro da estrutura condicional estão recuadas para a direita. Esse recuo é intencional e ajuda a indicar que aquelas instruções pertencem à condicional. Em muitas linguagens de programação, a indentação não afeta a execução do código. No entanto, ela é considerada uma boa prática, pois melhora a legibilidade, tanto para o programador quanto para outras pessoas que possam trabalhar com o código.

Em Python, a indentação é ainda mais importante, pois a própria linguagem usa a indentação para definir os blocos de código. Isso significa que, em Python, a falta de indentação pode impedir que o código seja executado corretamente.

## 11. Condicional Composta

A estrutura condicional composta é utilizada quando precisamos decidir entre dois conjuntos de instruções. Se a condição for verdadeira, executa-se um conjunto A; caso contrário, executa-se o conjunto B. O fluxograma da condicional composta ilustra bem esse processo.

Com a condicional composta, é possível utilizar a palavra-chave `else` (que significa "senão" em inglês) para representar o conjunto B de instruções. O código fica assim:

```
if (condição):
    # Instrução A
else:
    # Instrução B
```
Vejamos o exemplo de um programa que compara dois números:
```
x = int(input('Digite um valor inteiro: '))
y = int(input('Digite um segundo valor inteiro: '))
if (x > y):
    print('O primeiro valor é maior que o segundo!')
else:
    print('O segundo valor é maior que o primeiro!')
```
Outro exemplo de condicional composta é o programa que verifica se um número é par ou ímpar. Para isso, usamos o operador % para calcular o resto da divisão do número por 2. Se o resto for zero, o número é par; caso contrário, é ímpar.
```
x = int(input('Digite um valor inteiro: '))
if (x % 2 == 0):
    print('O número é par!')
else:
    print('O número é ímpar!')
```
---

## 12. Comparando Desempenho

Apesar de a solução com condicional composta ser a mais adequada, também podemos usar duas condicionais simples para resolver o mesmo problema. A diferença é que, no caso das condicionais simples, o teste lógico é realizado duas vezes, o que gera um custo computacional maior.

O algoritmo com condicionais simples seria assim:
```
x = int(input('Digite um valor inteiro: '))
if (x % 2 == 0):
    print('O número é par!')
if (x % 2 == 1):
    print('O número é ímpar!')
```
Embora ambos os algoritmos funcionem corretamente, o uso de condicionais simples aumenta o número de operações, o que pode ser ineficiente, especialmente em programas mais complexos. Em geral, sempre que possível, prefira usar a condicional composta, pois ela é mais eficiente.

Por exemplo, se quisermos expandir o programa para verificar se o número é múltiplo de 7, podemos criar duas condicionais compostas:
```
x = int(input('Digite um valor inteiro: '))
if (x % 2 == 0):
    print('O número é par!')
else:
    print('O número é ímpar!')
if (x % 7 == 0):
    print('Múltiplo de 7!')
else:
    print('Não é múltiplo de 7!')
```

---

### Exercícios

Desenvolva um algoritmo que solicite o ano de nascimento e o ano atual, calcule a idade e informe se a pessoa pode ou não tirar a carteira de motorista:
```
ano_nasc = int(input('Qual seu ano de nascimento?'))
ano_atual = int(input('Em que ano estamos?'))
idade = ano_atual - ano_nasc
print(f'Você tem {idade} anos de idade.')
if (idade >= 18):
    print('Você é de maior. Já pode tirar a carteira de motorista!')
```
Um algoritmo que calcula a bonificação de um funcionário, com base no tempo de empresa e no salário. Funcionários com mais de 5 anos de empresa recebem 20% de bônus, e os demais recebem 10%:
```
salario = float(input('Qual seu salário?'))
ano_admissao = int(input('Qual seu ano de admissão na empresa?'))
ano_atual = int(input('Em que ano estamos?'))
tempo = ano_atual - ano_admissao
if (tempo > 5):
    bonus = salario * 0.2
else:
    bonus = salario * 0.1
print(f'Você tem {tempo} anos dentro desta empresa.')
print(f'Seu salário é de {salario}.')
print(f'E sua bonificação é de {bonus}.')
print(f'Salário final {bonus + salario}.')
```
---

## 13. Expressões Lógicas e Álgebra Booleana

No tópico anterior, vimos como construir algoritmos com estruturas condicionais simples e compostas. Nesse contexto, as condições dentro de uma estrutura `if` são cruciais para que o algoritmo funcione corretamente. Neste tópico, vamos aprofundar o estudo das expressões lógicas, assim como da álgebra booleana, que são essenciais para criar expressões lógicas mais complexas.

### Operadores Lógicos/Booleanos

Já vimos anteriormente os operadores aritméticos e relacionais. Agora, vamos explorar os operadores lógicos, também conhecidos como booleanos. Eles são fundamentais para agrupar operações e expressões lógicas, e têm comportamentos distintos. O Python oferece três operadores lógicos básicos:

- **not**: Negação
- **and**: Conjunção
- **or**: Disjunção

Esses operadores são escritos da mesma forma que em inglês, facilitando o entendimento.

| Python | Pseudocódigo | Operação  |
|--------|--------------|-----------|
| not    | não          | negação   |
| and    | e            | conjunção |
| or     | ou           | disjunção |

Cada operador possui uma tabela verdade que define os resultados possíveis. O operador `not` é unitário (aplica-se a um único valor), enquanto `and` e `or` são binários (aplicam-se a dois valores).

---

### Operador `not`

O operador `not` inverte o valor lógico de uma expressão. Se o valor for `True`, ele se torna `False`, e vice-versa.

**Tabela verdade do operador `not`:**

| V   | not V |
|-----|-------|
| True  | False |
| False | True  |

**Exemplo em Python:**

```
# not
x = True
y = False
print(not x)  # Saída: False
print(not y)  # Saída: True
```
---
### Operador and

O operador `and` é usado para verificar se ambas as condições são verdadeiras. O resultado será `True` somente se ambos os valores forem `True`.

### Tabela verdade do operador and:

| V1    | V2    | V1 and V2 |
|-------|-------|-----------|
| False | False | False     |
| False | True  | False     |
| True  | False | False     |
| True  | True  | True      |

### Exemplo em Python:

```
# and
x = True
y = False
print(x and y)  # Saída: False
```
---

### Operador or

O operador `or` verifica se ao menos uma das condições é verdadeira. O resultado será `True` se qualquer um dos valores for `True`.

### Tabela verdade do operador or:

| V1    | V2    | V1 or V2 |
|-------|-------|----------|
| False | False | False    |
| False | True  | True     |
| True  | False | True     |
| True  | True  | True     |

### Exemplo em Python:

```
# or
x = True
y = False
print(x or y)  # Saída: True
```
---
### Expressões Lógicas/Booleanas

Agora que conhecemos os operadores lógicos, podemos combiná-los em expressões lógicas, incluindo operadores aritméticos e relacionais. Para isso, é importante entender a ordem de precedência das operações no Python.

## 13. Ordem de Precedência

A ordem de execução das operações no Python é a seguinte:

1. Parênteses
2. Operadores aritméticos de potenciação ou raiz
3. Operadores aritméticos de multiplicação, divisão e módulo
4. Operadores aritméticos de adição e subtração
5. Operadores relacionais
6. Operadores lógicos `not`
7. Operadores lógicos `and`
8. Operadores lógicos `or`
9. Atribuições

Operações de mesma prioridade são executadas da esquerda para a direita.

### Exemplo 1:

```
x = 10
y = 1
res = not x > y
print(res)  # Saída: False
```
Aqui, a comparação `10 > 1` é feita primeiro, resultando em `True`. Em seguida, o operador `not` inverte esse valor, gerando `False`.

### Exemplo 2:

```
x = 10
y = 1
z = 5.5
res = (x > y) and (z == y)
print(res)  # Saída: False
```
A operação x > y resulta em True, enquanto z == y resulta em False. O operador and então retorna False porque ambas as entradas não são True.

### Exemplo 3:
```
x = 10
y = 1
z = 5.5
res = (x > y) or (z == y)
print(res)  # Saída: True
```
Aqui, a operação x > y é True, então o operador or retorna True, independentemente do resultado de z == y.

### Exemplo 4 (expressão complexa):
```
x = 10
y = 1
z = 5.5
res = x > y or not z == y and y != y + z / x
print(res)  # Saída: True
```
### Passos para o cálculo:

1. Divisão: `5.5 / 10 = 0.55`
2. Adição: `1 + 0.55 = 1.55`
3. Comparações:
   - `x > y`: `True`
   - `z == y`: `False`
   - `y != 1.55`: `True`
   - `not False`: `True`
   - `True and True`: `True`
   - `True or True`: `True`
---
### Exercícios
Agora vamos praticar com alguns exercícios que envolvem expressões lógicas.

Problema: Um aluno precisa estar aprovado em todas as matérias para passar de ano. A média para aprovação é 7, e o aluno cursa 3 matérias. Escreva um algoritmo que leia a nota final de cada matéria e informe se o aluno passou ou não.

Solução:
```
# Exercício 3.3.1
m1 = float(input('Digite a nota da 1ª matéria:'))
m2 = float(input('Digite a nota da 2ª matéria:'))
m3 = float(input('Digite a nota da 3ª matéria:'))
if m1 >= 7 and m2 >= 7 and m3 >= 7:
    print('O aluno está aprovado de ano!')
else:
    print('O aluno não passou de ano!')
```
Problema: Escreva um algoritmo que lê um valor inteiro e verifica se ele está dentro dos intervalos -100 < x < -1 ou 1 < x < 100.

Solução:
```
# Exercício 3.3.2
x = int(input('Digite um valor qualquer inteiro: '))
if (x >= 1 and x <= 100) or (x >= -100 and x <= -1):
    print('Um dos critérios foi atingido.')
```
---

## 14. Condicionais Aninhadas

Em muitos algoritmos, é comum utilizar duas ou mais condicionais aninhadas, ou seja, uma dentro da outra, para lidar com maior complexidade de lógica. Isso pode ser representado por fluxogramas onde a execução depende de múltiplas verificações.

### Exemplo Prático

No exemplo de uma bonificação em uma empresa, temos três tipos de bônus:
- 30% para funcionários com mais de 10 anos.
- 20% para funcionários com mais de 5 anos.
- 10% para os demais.

A estrutura condicional aninhada verifica primeiro se o tempo de empresa é superior a 10 anos. Se não for, uma segunda verificação verifica se é superior a 5 anos. Caso contrário, aplica o bônus de 10%.

```
salario = float(input('Qual seu salário?'))
ano_admissao = int(input('Qual seu ano de admissão na empresa?'))
ano_atual = int(input('Em que ano estamos?'))
tempo = ano_atual - ano_admissao

if (tempo > 10):
    bonus = salario * 0.3
else:
    if (tempo > 5):
        bonus = salario * 0.2
    else:
        bonus = salario * 0.1

print(f'Você tem {tempo} anos dentro desta empresa.')
print(f'Seu salário é de {salario}.')
print(f'E sua bonificação é de {bonus}.')
print(f'Salário final: {bonus + salario}.')
```
---
### Exercícios Práticos
Criação de um algoritmo para calcular o preço total de frutas baseadas na escolha do usuário.
```
print('Escolha o que deseja comprar:')
print('1 - Maça')
print('2 - Laranja')
print('3 - Banana')

produto = int(input('Qual sua escolha?'))
qtd = int(input('Quantas unidades?'))

if (produto == 1):
    pagar = qtd * 2.3
    print(f'Você comprou {qtd} maças. Total à pagar: {pagar}')
else:
    if (produto == 2):
        pagar = qtd * 3.6
        print(f'Você comprou {qtd} laranjas. Total a pagar: {pagar}')
    else:
        if (produto == 3):
            pagar = qtd * 1.85
            print(f'Você comprou {qtd} bananas. Total a pagar: {pagar}')
        else:
            print('Produto inexistente!')
```
Verificação da validade e classificação de um triângulo com base nos lados fornecidos pelo usuário.
```
A = int(input('Digite o 1º lado do triângulo:'))
B = int(input('Digite o 2º lado do triângulo:'))
C = int(input('Digite o 3º lado do triângulo:'))

if A > 0 and B > 0 and C > 0:
    if A + B > C and A + C > B and B + C > A:
        if A != B and A != C and B != C:
            print('Triângulo escaleno.')
        else:
            if A == B and A == C and B == C:
                print('Triângulo equilátero.')
            else:
                print('Triângulo isósceles.')
    else:
        print('Ao menos um dos valores indicados não servem para formar um triângulo.')
else:
    print('Ao menos um dos valores indicados não servem para formar um triângulo.')
```
---
## 15. Condicionais de Múltipla Escolha (elif)

Com o uso de condicionais aninhadas, o código pode se tornar difícil de ler. Uma alternativa mais limpa é a condicional de múltipla escolha com elif, que reduz a complexidade, especialmente quando várias condições dependem da mesma variável.

###Exemplo Prático

A estrutura elif permite substituir múltiplos if e else, facilitando a organização e a legibilidade do código. Por exemplo, em um programa que avalia a idade de uma pessoa, podemos usar elif para verificar diferentes condições, como idade maior que 100 ou menor que 18.
```
nome = input('Qual seu nome?')
idade = int(input('Qual sua idade?'))

if nome == 'Vinicius':
    print('Olá, Vinicius!')
elif idade < 18:
    print('Você não é o Vinicius! E é menor de idade!')
elif idade > 100:
    print('Diferente de você, o Vinicius não é imortal!')
```
Criação de uma calculadora simples que realiza diferentes operações matemáticas baseadas na escolha do usuário.
```
print('CALCULADORA')
print('+ Adição')
print('- Subtração')
print('* Multiplicação')
print('/ Divisão')
print('Digite outra tecla para sair.')

op = input('Qual operação deseja realizar?')
x = int(input('Digite o primeiro valor: '))
y = int(input('Digite o segundo valor: '))

if (op == '+'):
    res = x + y
    print(f'Resultado: {x} + {y} = {res}')
elif (op == '-'):
    res = x - y
    print(f'Resultado: {x} - {y} = {res}')
elif (op == '*'):
    res = x * y
    print(f'Resultado: {x} * {y} = {res}')
elif (op == '/'):
    res = x / y
    print(f'Resultado: {x} / {y} = {res}')
else:
    print('Operação Inválida!')
```
Algoritmo que calcula o valor de uma compra com base na forma de pagamento escolhida, aplicando descontos ou acréscimos conforme a opção.
```
print('PAGAMENTO')
print('1 - à vista')
print('2 - parcelamento em 3x')
print('3 - parcelamento em 5x')
print('4 - parcelamento em 10x')
print('pressione outra tecla para sair...')

op = int(input('Qual forma de pagamento deseja fazer?'))
valor = float(input('Qual o preço do produto?'))

if (op == 1):
    valor_final = valor * 0.95
    print(f'Produto comprado à vista. Total a pagar: {valor_final}')
elif (op == 2):
    valor_final = valor
    parcela = valor_final / 3
    print(f'Produto parcelado em 3x. Total a pagar: {valor_final}. Valor da parcela: {parcela:.2f}')
elif (op == 3):
    valor_final = valor * 1.02
    parcela = valor_final / 5
    print(f'Produto parcelado em 5x. Total a pagar: {valor_final}. Valor da parcela: {parcela:.2f}')
elif (op == 4):
    valor_final = valor * 1.08
    parcela = valor_final / 10
    print(f'Produto parcelado em 10x. Total a pagar: {valor_final}. Valor da parcela: {parcela:.2f}')
else:
    print('Opção de pagamento inválida!')
```

