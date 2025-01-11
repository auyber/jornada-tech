# Lógica de Programação e Algoritmos

## Introdução

A lógica de programação é a base para resolver problemas de forma estruturada e eficiente. Envolve a criação de algoritmos, a compreensão de sistemas computacionais e a aplicação de linguagens de programação, como Python. Os conceitos fundamentais incluem estruturas de decisão, como condicionais e loops, além de ferramentas para organizar e reutilizar código, como funções e estruturas de dados. Esses elementos permitem construir programas claros, eficientes e adaptáveis, essenciais para qualquer desenvolvedor.

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
16. [Estruturação de Repetição](#16-estruturação-de-repetição)  
17. [Estruturação de Repetição WHILE (ENQUANTO)](#17-estruturação-de-repetição-while-enquanto)  
18. [Contadores](#18-contadores)  
19. [Acumuladores](#19-acumuladores)  
20. [Validando Dados de Entrada com um Loop](#20-validando-dados-de-entrada-com-um-loop)  
21. [Estrutura de Repetição for](#21-estrutura-de-repetição-for)  
22. [Estruturas de Repetição Aninhadas](#22-estruturas-de-repetição-aninhadas)  
23. [Funções](#23-funções)  
24. [Escopo de Variáveis](#24-escopo-de-variáveis)  
25. [Retorno de Valores em Funções](#25-retorno-de-valores-em-funções)  
26. [Recursos Avançados com Funções](#26-recursos-avançados-com-funções)  
27. [Tuplas](#27-tuplas)  
28. [Listas](#28-listas)  
29. [Strings e Listas Dentro de Listas](#29-strings-e-listas-dentro-de-listas)  
30. [Dicionários](#30-dicionários)  
31. [Trabalhando com Métodos e Strings](#31-trabalhando-com-métodos-e-strings)




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
---

## 16. Estruturação de Repetição

No contexto do algoritmo, vamos imaginar que o Lenhadorzinho precisa se mover até uma tora de madeira. Ele pode se mover de um quadradinho por vez, e para atingir a tora, ele precisa se mover por 5 quadradinhos. No algoritmo simples, isso seria escrito repetidamente como:

Início

Mover
Mover
Mover
Mover
Mover Fim

Esse processo pode ser repetido para um número maior de quadradinhos, como 100 ou até 1000, mas escrever cada instrução seria ineficiente e confuso. Por isso, utilizamos estruturas de repetição, que permitem automatizar a execução de uma ação múltiplas vezes, sem a necessidade de escrever cada comando individualmente.

Por exemplo, para imprimir números de 1 a 5, sem usar repetição, seria necessário escrever os valores manualmente ou incrementar a variável a cada print. No entanto, a melhor maneira de abordar isso é com o uso de estruturas de repetição, como o `while`, que permite que um bloco de código seja executado enquanto uma condição for verdadeira.

---

## 17. Estruturação de Repetição WHILE (ENQUANTO)

A estrutura `while` (enquanto) é usada para repetir um bloco de instruções enquanto uma condição especificada for verdadeira. Em Python, a sintaxe é:

```
while (condição):
    # Instrução(ões)
```
No pseudocódigo, isso seria representado como enquanto (condição), sendo intuitivo de entender. O Python não exige um finalizador para o bloco, apenas usa a indentação para definir o escopo.

Por exemplo, para imprimir os números de 1 a 5, podemos usar:
```
x = 1
while (x <= 5):
    print(x)
    x = x + 1
```
Este código imprime os números de 1 a 5. A variável x é controlada dentro do laço, e a repetição ocorre até que a condição x <= 5 seja falsa.

### Fluxograma do while

No fluxograma da estrutura while, o programa verifica a condição antes de executar as instruções do bloco. Se a condição for verdadeira, o bloco é executado; caso contrário, o fluxo do programa sai do laço.

### Problema do Loop Infinito

Se o incremento (x = x + 1) for removido do código, a variável x não será atualizada e o laço continuará executando indefinidamente, o que resultará em um loop infinito.

### Exemplo de Contagem até 99

Para imprimir os números de 0 a 99, podemos usar:
```
x = 0
while (x <= 99):
    print(x)
    x = x + 1
```
Alternativamente, podemos usar a condição x < 100, que dará o mesmo resultado, pois tanto x <= 99 quanto x < 100 interrompem o laço quando x chega a 100.

### Desafios para Praticar
- Modifique o código anterior para exibir os números de 10 a 1000.
- Crie um programa que exiba uma contagem regressiva do lançamento de um foguete, de 10 até 0, e exiba a palavra "Fogo!" após o 0.

---

## 18. Contadores

Os **contadores** são amplamente usados em estruturas de repetição para criar loops que realizam ações com base em intervalos definidos. Em Python, eles permitem imprimir sequências, realizar cálculos iterativos, e muito mais.

### Exemplo 1: Imprimir uma sequência definida pelo usuário
```
inicial = int(input('Qual valor deseja iniciar a contagem? '))
final = int(input('Qual valor deseja encerrar a contagem? '))
x = inicial
while (x <= final):
    print(x)
    x = x + 1
```
Explicação:
O valor inicial é armazenado em inicial e o final em final.
x é o contador inicializado com o valor de inicial.
A condição do while (x <= final) garante que o loop ocorre enquanto x for menor ou igual ao valor final.
x é incrementado a cada iteração com x = x + 1.

Saída:
Qual valor deseja iniciar a contagem? 5
Qual valor deseja encerrar a contagem? 10
5
6
7
8
9
10

### Exemplo 2: Imprimir números pares dentro de um intervalo
```
inicial = int(input('Qual valor deseja iniciar a contagem? '))
final = int(input('Qual valor deseja encerrar a contagem? '))
x = inicial
while (x <= final):
    if (x % 2 == 0):  # Verifica se o número é par
        print(x)
    x = x + 1
```
Explicação:
Teste condicional: Verifica se x é par (x % 2 == 0).
Indentação: O print(x) é executado apenas quando a condição for verdadeira.
Incremento: A variável x é incrementada fora do bloco if para garantir que o loop avance corretamente.

Saída:
Qual valor deseja iniciar a contagem? 5
Qual valor deseja encerrar a contagem? 10
6
8
10

### Desafio: Incremento alternativo para números pares

Para otimizar o algoritmo, remova o if e incremente x em 2 unidades por vez.
Atenção: O valor inicial deve ser um número par.

### Exercícios de Fixação

- Reescrever para múltiplos de 3: Modifique o programa para imprimir os 10 primeiros múltiplos de 3.
- Tabuada: Crie um programa que receba um número e imprima sua tabuada no formato 1xN=....

## 19. Acumuladores

Os acumuladores são usados para somar ou agregar valores ao longo de um loop. Eles diferem dos contadores porque acumulam valores variáveis, enquanto contadores trabalham com incrementos constantes.

###Exemplo 1: Somatório de 5 números
```
soma = 0
cont = 1
while (cont <= 5):
    x = float(input(f'Digite a {cont}ª nota: '))
    soma = soma + x
    cont = cont + 1
print(f'Somatório: {soma}')
```
Explicação:
Acumulador (soma): Inicia com 0 e agrega o valor digitado.
Contador (cont): Controla o número de iterações, garantindo que o loop ocorra 5 vezes.

Saída:
Digite a 1ª nota: 4
Digite a 2ª nota: 5
Digite a 3ª nota: 6
Digite a 4ª nota: 7
Digite a 5ª nota: 8
Somatório: 30.0

### Exemplo 2: Cálculo da média
Modificando o programa acima para calcular a média:
```
soma = 0
cont = 1
while (cont <= 5):
    x = float(input(f'Digite a {cont}ª nota: '))
    soma = soma + x
    cont = cont + 1
media = soma / 5
print(f'Média final: {media}')
```

### Exercícios de Fixação

### Exercício 1: Multiplicação com somas sucessivas
Implemente a multiplicação sem usar o operador *:
```
x = int(input('Digite um valor: '))
y = int(input('Digite outro valor: '))
cont = 1
multi = 0
while (cont <= x):
    multi = multi + y
    cont = cont + 1
print(f'Resultado da multiplicação: {x}x{y}={multi}')
```
### Exercício 2: Intervalos com estatísticas
Calcule estatísticas de números em um intervalo:
```
inicial = int(input('Digite um valor inicial: '))
final = int(input('Digite um valor final: '))
qtd_positivo = qtd_par = qtd_impar = soma_positivo = soma_par = soma_impar = 0
i = inicial

if (inicial < final):
    while (i <= final):
        if (i > 0):
            qtd_positivo += 1
            soma_positivo += i
        if (i % 2 == 0):
            qtd_par += 1
            soma_par += i
        else:
            qtd_impar += 1
            soma_impar += i
        i += 1
    media_positivo = soma_positivo / qtd_positivo
    media_par = soma_par / qtd_par
    media_impar = soma_impar / qtd_impar
    print(f'Quantidade de positivos: {qtd_positivo}, Média: {media_positivo}')
    print(f'Quantidade de pares: {qtd_par}, Média: {media_par}')
    print(f'Quantidade de ímpares: {qtd_impar}, Média: {media_impar}')
else:
    print('Valor inicial maior ou igual ao final. Programa encerrado.')
```
---
## 20. Validando Dados de Entrada com um Loop**

É comum validar os dados fornecidos pelo usuário utilizando laços de repetição. Por exemplo, se for necessário garantir que o usuário insira um número inteiro positivo, o programa deve rejeitar números negativos ou zero. 

A validação ocorre por meio de um loop, que exige a entrada de um dado válido antes de prosseguir. Caso o dado não atenda aos critérios, o programa continuará solicitando uma nova entrada.

### Exemplo de Código
```
x = int(input('Digite um valor maior do que zero: '))
while x <= 0:
    x = int(input('Digite um valor maior do que zero: '))
print(f'Você digitou {x}. Encerrando o programa...')
```
Saída
Digite um valor maior do que zero: -6
Digite um valor maior do que zero: -99
Digite um valor maior do que zero: 12
Você digitou 12. Encerrando o programa...

Explicação
A variável ```x``` é inicialmente atribuída com a entrada do usuário.
O ```while``` verifica se a entrada não atende ao requisito ```(x <= 0)```.
Enquanto a entrada for inválida, o loop solicita uma nova entrada.
Quando um valor válido é digitado, o programa avança e é encerrado.

### Interrompendo um Loop com ```break```

A instrução ```break``` permite encerrar um laço de repetição abruptamente, independentemente da condição do loop.
```
print('Digite uma mensagem que irei repetir para você!')
print('Para encerrar escreva "sair".')
while True:
    texto = input('')
    print(texto)
    if texto == 'sair':
        break
print('Encerrando o programa...')
```
Saída
Digite uma mensagem que irei repetir para você!
teste
teste
sair
Encerrando o programa...

Explicação
O loop é definido como infinito (```while True```).
A execução do loop é interrompida somente quando a palavra "sair" é digitada.
O ```break``` evita que o programa fique preso no loop indefinidamente.
Nota: Utilize loops infinitos com cautela, pois erros de lógica podem levar a travamentos.

### Retornando ao Início do Loop com ```continue```

A instrução c```ontinue``` retorna ao início do laço sem executar o restante do código na iteração atual.
```
while True:
    nome = input('Qual o seu nome? ')
    if nome != 'Lenhadorzinho':
        continue  # Retorna ao início do loop
    senha = input('Qual a sua senha? ')
    if senha == 'Instituicao':
        break  # Encerra o loop
print('Acesso concedido.')
```
Saída
Qual o seu nome? Vinicius
Qual o seu nome? Lenhadorzinho
Qual a sua senha? Instituicao
Acesso concedido.

Explicação
O ```continue``` faz com que o loop reinicie se o nome digitado for incorreto.
Quando o nome está correto, o programa avança para verificar a senha.
O ```break``` finaliza o loop após o fornecimento das credenciais corretas.

### Valores Truthy e Falsey

Em Python, além de ```True``` e ```False```, certos valores são interpretados como verdadeiros (Truthy) ou falsos (Falsey):

- Falsey: 0, 0.0, '' (string vazia), None
- Truthy: Todos os outros valores.
- 
Exemplo de Código
```
nome = ''
while not nome:
    nome = input('Digite seu nome: ')
valor = int(input('Digite um número qualquer: '))
if valor:
    print('Você digitou um valor diferente de zero.')
else:
    print('Você digitou zero.')
```
Explicação
O laço ```while not nome``` verifica se o nome é uma string vazia (Falsey).
Após sair do laço, é lido um número inteiro.
O ```if valor``` verifica se o número é Truthy (diferente de zero).

### Exercício Prático

Crie um programa que:
Aceite apenas números inteiros positivos.
Calcule a média dos números digitados.
Utilize as instruções break, continue, e valores Truthy/Falsey.

Solução
```
soma = 0
qtd_num = 0
while True:
    x = int(input('Digite um valor inteiro: '))
    if x < 0:
        continue  # Ignora valores negativos
    if not x:
        break  # Encerra o programa ao digitar zero
    soma += x
    qtd_num += 1
media = soma / qtd_num
print(f'A média dos valores digitados é: {media}')
```
---

## 21. Estrutura de Repetição for

A estrutura ```for``` é utilizada quando o número de iterações é conhecido previamente. Seu funcionamento envolve uma variável de controle e o uso da função ```range()```.
```
for i in range(6):
    print(i)
```
Saída
0
1
2
3
4
5

Explicação
A variável i percorre os valores de 0 a 5.
O número 6 não é incluído, pois o intervalo do ```range()``` é exclusivo no limite superior.

Variações:

Alterar o valor inicial e o incremento:
```
for i in range(1, 10, 2):
    print(i)
```
Saída
1
3
5
7
9

---

### Varredura de String com `for`

O fatiamento de strings permite manipular cada caractere individualmente por meio de seu índice. Esse processo pode ser realizado dinamicamente usando um laço de repetição, conhecido como **varredura de string**.

### Exemplo de Varredura
```
frase = "Lógica de Programação e Algoritmos"
for i in range(len(frase)):
    print(frase[i])
```
Descrição do processo:
- A variável de controle inicia no índice zero, correspondente ao primeiro caractere da string.
- A condição de parada é o comprimento total da string.
- O incremento padrão é de uma unidade.
- 
O comando print imprime cada caractere em uma linha separada por padrão. Para imprimir os caracteres na mesma linha, podemos modificar o comportamento do print:
```
frase = "Lógica de Programação e Algoritmos"
for i in range(len(frase)):
    print(frase[i], end="")
```
Essa técnica é útil para manipular ou verificar caracteres de forma isolada.

### Comparativo: while vs for

Ambos os laços podem resolver problemas semelhantes, mas possuem diferenças de implementação. Vamos comparar imprimindo números de 1 a 5:

Com ```while```
```
i = 1
while i <= 5:
    print(i)
    i += 1
```
Com ```for```
```
for i in range(1, 6):
    print(i)
```

Equivalências marcadas:
- Valor inicial (i = 1 no while, primeiro valor do range no for).
- Condição de parada (i <= 5 no while, segundo valor do range no for).
- Incremento (i += 1 no while, implícito no for).
- 
Conclusão: O for é mais compacto e indicado para iterações com número fixo de repetições. Ambas as estruturas têm desempenho equivalente.

### Exercícios com for

Exercício 1: Média de Números Pares
Calcule a média dos números pares de 1 a 100:
```
soma = 0
qtd = 0
for i in range(1, 101):
    if i % 2 == 0:
        soma += i
        qtd += 1
media = soma / qtd
print(f"A média dos pares de 0 até 100 é: {media}")
Saída:
A média dos pares de 0 até 100 é: 51.0
```

Exercício 2: Tabuada Personalizada
Exiba a tabuada de um número escolhido pelo usuário:
```

num = int(input("Digite um número para calcular a tabuada: "))
print(f"TABUADA DO {num}:")
for i in range(1, 11):
    print(f"{i} x {num} = {i * num}")
```
Exemplo de entrada/saída:
Entrada: 5
Saída:
```
TABUADA DO 5:
1 x 5 = 5
2 x 5 = 10
...
10 x 5 = 50
```

## 22. Estruturas de Repetição Aninhadas

Assim como nas estruturas condicionais, é possível combinar diferentes laços de repetição para resolver problemas mais complexos. Esses laços podem ser do mesmo tipo ou misturados, como `while` e `for`, sem qualquer restrição. Isso é conhecido como **aninhamento de laços de repetição**.

### Exemplo: Tabuada Aninhada 

Vamos calcular a tabuada de todos os números de 1 a 10, multiplicando cada número por um intervalo de 1 a 10.

com `while`
```
tabuada = 1
while tabuada <= 10:
    print(f'TABUADA DO {tabuada}:')
    i = 1
    while i <= 10:
        print(f'{tabuada} x {i} = {tabuada * i}')
        i += 1
    tabuada += 1
```
Com ```for```
```
for tabuada in range(1, 11):
    print(f"TABUADA DO {tabuada}:")
    for i in range(1, 11):
        print(f"{tabuada} x {i} = {tabuada * i}")
```
Misturando ```while``` e ```for```
```
tabuada = 1
while tabuada <= 10:
    print(f"TABUADA DO {tabuada}:")
    for i in range(1, 11):
        print(f"{tabuada} x {i} = {tabuada * i}")
    tabuada += 1
```

### Exercícios

Exercício 1: Saudações Baseadas em Gênero
Peça ao usuário sua idade e sexo repetidamente. O programa encerra ao receber uma idade negativa:
```
idade = int(input("Qual sua idade? "))
while idade >= 0:
    sexo = input("Qual seu sexo? (M ou F): ").upper()
    if sexo == "M":
        print(f"Boa noite, Senhor. Sua idade é {idade}.")
    elif sexo == "F":
        print(f"Boa noite, Senhora. Sua idade é {idade}.")
    else:
        print("Opção de sexo inválida.")
    idade = int(input("Qual sua idade? "))
print("Encerrando...")
```
Exercício 2: Números Primos de 2 a 99
Identifique e exiba todos os números primos entre 2 e 99:
```
print("Primos de 2 até 99:")
for numero in range(2, 100):
    primo = True
    for i in range(2, numero):
        if numero % i == 0:
            primo = False
            break
    if primo:
        print(numero)
```
Exercício 3: Relógio Personalizado
Exiba horas no formato H:M:S dentro de um intervalo definido pelo usuário:
```
h_inicial = int(input("Iniciar em qual hora? "))
h_final = int(input("Terminar em qual hora? "))
while h_inicial > h_final or h_inicial < 0 or h_final > 23:
    h_inicial = int(input("Início inválido. Tente novamente: "))
    h_final = int(input("Término inválido. Tente novamente: "))
for h in range(h_inicial, h_final + 1):
    for m in range(60):
        for s in range(60):
            print(f"{h:02}:{m:02}:{s:02}")
```
Exercício 4: Manipulação de Frases
Valide o tamanho de uma frase (entre 10 e 30 caracteres), remova espaços e exiba os resultados:
```
frase = input("Digite uma frase (10 a 30 caracteres): ")
while len(frase) < 10 or len(frase) > 30:
    frase = input("Frase inválida. Tente novamente: ")
print(f"Com espaços: {frase}")
print("Sem espaços:", end=" ")
for char in frase:
    if char != " ":
        print(char, end="")
```

## 23. Funções

###O que são Funções?

Funções são blocos de código projetados para executar tarefas específicas quando chamados. Desde o início do aprendizado em Python, você já utilizou funções como `input`, `print`, `int`, `float` e `range`. Estas são funções **predefinidas** pela linguagem, que abstraem tarefas complexas em comandos simples.  

Por exemplo, a função `print` é usada para exibir informações na tela. O código que define essa função, embora em Python pareça simples, foi implementado em C para manipular diretamente os recursos do sistema, como drivers de vídeo. Assim, ao invés de escrever dezenas de linhas para cada exibição, basta invocar `print`.  

Essa abstração facilita o desenvolvimento, tornando o código mais claro, reutilizável e acessível, especialmente para iniciantes.

---

### Criando suas próprias Funções
Embora o Python ofereça muitas funções prontas, nem todas as necessidades são atendidas por elas. Para isso, você pode criar suas próprias funções, um processo chamado **modularização de código**.

### Estrutura básica de uma função
Para definir uma função em Python:
1. Use a palavra-chave `def`.
2. Dê um nome significativo à função.
3. Abra e feche parênteses (obrigatórios).
4. Finalize a declaração com dois pontos `:`.
5. Indente o corpo da função (as instruções que ela executará).

**Exemplo:**
```
def realce():
    print('|', '__' * 10, '|')
    print('|', '__' * 10, '|')
```

### Chamando a função

Para executar o código dentro da função, basta chamá-la pelo nome:
```
# Programa principal
realce()
print(' MENU ')
realce()
```
Observação
Definir uma função apenas declara sua existência. Ela só será executada quando chamada. Além disso, a definição da função deve vir antes de sua chamada no programa.
---
### Fluxo de Execução
Um programa segue a ordem sequencial, mas ao encontrar uma chamada de função, ele:

- Pausa a execução do programa principal.
- Executa o código dentro da função.
- Retorna ao ponto onde a função foi chamada e continua a execução.
Exemplo com passos:
```
def realce():
    print('|', '__' * 10, '|')

# Programa principal
realce()  # Passo 1: executa a função
print(' MENU ')  # Passo 2: retorna ao programa principal
realce()  # Passo 3: executa a função novamente
```
---
### Parâmetros em Funções

Funções podem receber valores, chamados parâmetros, para personalizar seu comportamento. Esses valores são passados no momento da chamada e utilizados dentro da função.

Exemplo:
```
def realce(texto):
    print('|', '__' * 10, '|')
    print(texto)
    print('|', '__' * 10, '|')

# Programa principal
realce(' MENU ')
```
---
### Ordem dos parâmetros

A ordem em que os parâmetros são passados importa. Por exemplo:
```
def subtrai(x, y):
    print(x - y)

subtrai(5, 7)  # Saída: -2
subtrai(7, 5)  # Saída: 2
Você também pode especificar os parâmetros de forma explícita:

python
Copiar código
subtrai(y=7, x=5)  # Saída: -2
```
---
### Parâmetros Opcionais

É possível definir valores padrão para parâmetros, tornando-os opcionais. Caso um valor não seja fornecido, o padrão será usado.

Exemplo:
```
def soma(x, y=0, z=0):
    print(x + y + z)

soma(5)       # Saída: 5
soma(5, 2)    # Saída: 7
soma(5, 2, 1) # Saída: 8
```
---
### Exercícios
Vamos aplicar os conceitos de funções com passagem de parâmetros resolvendo alguns exercícios.

Exercício 1
Crie uma função que desenhe uma borda ao redor de uma palavra, transformando-a em um título. O tamanho da borda deve ser ajustado automaticamente ao comprimento da palavra.

**Exemplo de saída:**
+-----------+ +-----+ | Auyber | | Olá | +-----------+ +-----+

```
def borda(palavra):
    tam = len(palavra)
    if tam:  # Verifica se a palavra não está vazia
        print('+', '-' * tam, '+')
        print('|', palavra, '|')
        print('+', '-' * tam, '+')

# Programa Principal
borda('Olá, Mundo!')
borda('Lógica de Programação e Algoritmos')
```
Exercício 2
Implemente uma função que realiza uma contagem e imprime os números em uma única linha. A função deve receber os valores inicial, final e o passo da contagem, sendo os dois últimos opcionais.

Dica: Use o parâmetro ```end=''``` no ```print``` para evitar quebras de linha.
```
def contador(fim, inicio=0, passo=1):
    for i in range(inicio, fim + 1, passo):
        print(f'{i}', end=' ')
    print()  # Quebra de linha após o loop

# Chamadas da função
contador(20, 10, 2)
contador(12)
```
Exercício 3
Crie uma função que receba três números como parâmetros e os organize em ordem crescente. Exiba o resultado na tela.
```
def ordenar_crescente(a, b, c):
    numeros = [a, b, c]
    numeros.sort()
    print(f'Ordem crescente: {numeros[0]}, {numeros[1]}, {numeros[2]}')

# Programa Principal
x = int(input('Digite o valor 1: '))
y = int(input('Digite o valor 2: '))
z = int(input('Digite o valor 3: '))
ordenar_crescente(x, y, z)
```
---
## 24. Escopo de Variáveis

O escopo de uma variável determina onde ela pode ser utilizada dentro do programa. Existem dois tipos principais de escopos:

###Escopo Local
- Variáveis declaradas dentro de funções ou como parâmetros pertencem ao escopo local e só existem enquanto a função é executada.
- Após a execução, essas variáveis são destruídas.
- 
###Escopo Global
- Variáveis declaradas no programa principal são globais e podem ser acessadas em qualquer parte do programa, inclusive dentro de funções.
- 
Exemplo de Erro ao Acessar Escopo Local:
```
def omelete():
    ovos = 12  # Variável local

# Programa Principal
omelete()
print(ovos)  # Erro: "ovos" não existe no escopo global
```
Exemplo de Uso Correto:
```
def omelete():
    print(ovos)  # Acessando variável global

# Programa Principal
ovos = 12  # Variável global
omelete()
```
---
### A Instrução global

Quando necessário, podemos usar a palavra-chave ```global``` dentro de uma função para manipular variáveis globais, evitando a criação de variáveis locais de mesmo nome.

Exemplo:
```
def omelete():
    global ovos
    ovos = 6

# Programa Principal
ovos = 12
omelete()
print(ovos)  # Resultado: 6
```
---
### Exemplo com Escopos Distintos

O exemplo a seguir ilustra como variáveis de mesmo nome podem coexistir em diferentes escopos:
```
def omelete():
    ovos = 12  # Variável local de omelete
    print('Ovos =', ovos)

def bacon():
    ovos = 6  # Variável local de bacon
    print('Ovos =', ovos)

# Programa Principal
ovos = 2  # Variável global
bacon()
omelete()
print('Ovos =', ovos)
```
Saída:

Ovos = 6
Ovos = 12
Ovos = 2

---
## 25. Retorno de Valores em Funções

Até agora, aprendemos a criar rotinas que são executadas, mas que não retornam um resultado ao programa principal ou a outra função. Rotinas de código que podem ou não conter parâmetros, mas que nunca retornam valores, são chamadas de **procedimentos** (*procedures*). 

Por outro lado, uma **função** é definida como uma rotina que retorna valores associados ao seu nome, permitindo que seja utilizada em atribuições ou expressões lógicas (Puga; Risseti, 2016, p. 108). Apesar dessa distinção, é comum referirmo-nos a ambas como "funções", independentemente de retornarem valores ou não.

### Funções com Retorno em Python

### Exemplo Básico

Abaixo, uma função simples criada anteriormente que soma até três valores numéricos:
```
def soma3(x, y, z):
    res = x + y + z
    print(res)
```
Agora, para que o resultado da soma seja devolvido ao programa principal, utilizamos a palavra-chave ```return```:
```
def soma3(x=0, y=0, z=0):
    res = x + y + z
    return res
```
---
### No Programa Principal

A variável ```res``` é local à função e não existe fora dela. Portanto, é necessário armazenar o valor retornado em uma variável no programa principal:
```
# Programa principal
retornado = soma3(1, 2, 3)
print(retornado)

# Alternativa simplificada
print(soma3(2, 2))
```
Saída:

6
4
---
### Vários Resultados em um Único Print

Podemos armazenar múltiplos resultados e exibi-los ao final:
```
# Programa principal
retornado1 = soma3(1, 2, 3)
retornado2 = soma3(1, 2)
retornado3 = soma3()
print(f'Somatórios: {retornado1}, {retornado2} e {retornado3}.')
```
---
### Retorno Condicional

Funções também podem retornar valores diferentes, dependendo de condições. Por exemplo:

### Par ou Ímpar com Função
```
def par_impar(x):
    if x % 2 == 0:
        return 'par'
    else:
        return 'impar'

# Programa principal
print(par_impar(int(input('Digite um valor inteiro: '))))
```
Saída:
Digite um valor inteiro: 7
impar

A função retorna somente um valor por chamada, executando o return correspondente à condição atendida.

### Validando Dados de Entrada com Funções

Códigos de validação podem ser longos e repetitivos. Criar funções para essa tarefa melhora a legibilidade e reutilização. Exemplo:
```
def valida_int(pergunta, min, max):
    x = int(input(pergunta))
    while x < min or x > max:
        x = int(input(pergunta))
    return x

# Programa principal
x = valida_int('Digite um valor inteiro: ', 0, 100)
print(f'Você digitou {x}. Encerrando o programa...')
```
Saída:

Digite um valor inteiro: 190
Digite um valor inteiro: 101
Digite um valor inteiro: 66
Você digitou 66. Encerrando o programa...
---
### Exercícios

Exercício 1: Validação de String
Escreva uma função que valide o tamanho de uma string com base em limites definidos:
```
def valida_string(pergunta, min, max):
    s1 = input(pergunta)
    tam = len(s1)
    while tam < min or tam > max:
        s1 = input(pergunta)
        tam = len(s1)
    return s1

# Programa principal
x = valida_string('Digite uma string: ', 10, 30)
print(f'Você digitou a string: {x}. \nDado válido. Encerrando o programa...')
```
Exercício 2: Fatorial
Implemente uma função para calcular o fatorial de um número positivo:
```
def valida_int(pergunta, min, max):
    x = int(input(pergunta))
    while x < min or x > max:
        x = int(input(pergunta))
    return x

def fatorial(num):
    fat = 1
    for i in range(1, num + 1):
        fat *= i
    return fat

# Programa principal
x = valida_int('Digite um valor para calcular o fatorial: ', 0, 99999)
print(f'{x}! = {fatorial(x)}.')
```
Exercício 3: Soma de Intervalo
Crie uma função que calcula a soma de todos os valores inteiros entre dois números, inclusive eles mesmos:
```
def valida_int(pergunta, min, max):
    x = int(input(pergunta))
    while x < min or x > max:
        x = int(input(pergunta))
    return x

def soma_intervalo(inicio, fim):
    soma = 0
    for i in range(inicio, fim + 1):
        soma += i
    return soma

# Programa principal
x = valida_int('Digite um valor inteiro e positivo: ', 1, 99999)
y = valida_int('Digite um segundo valor inteiro e positivo: ', 1, 99999)
print(f'Somatório entre {x} e {y} é {soma_intervalo(x, y)}.')
```
---
## 26. Recursos Avançados com Funções
    
Exploremos agora recursos avançados para aprimorar sua habilidade com Python.

### Exceções e Erros

Erros podem ser de dois tipos principais:

- Erros de Sintaxe: Ocorrem devido a erros de digitação, indentação ou ausência de caracteres obrigatórios. Exemplo:
```
# Erro de sintaxe
while True
    print('Olá, mundo!')
```
Saída:

SyntaxError: expected ':'

- Exceções: A sintaxe está correta, mas erros ocorrem durante a execução. Por exemplo:
```
print(100 * (2/0))
```
Saída:

ZeroDivisionError: division by zero

### Saiba Mais
Consulte a lista completa de exceções embutidas no Python:  
[Documentação Oficial - Exceções](https://docs.python.org/3/library/exceptions.html).
---
### Função Lambda

No Python, é possível criar funções simples e sem nome, conhecidas como funções *lambda*. Elas são geralmente escritas em uma única linha de código e podem ser utilizadas diretamente no código principal. Uma função *lambda* é ideal para situações em que a funcionalidade da função é muito simples ou quando será utilizada poucas vezes. Essa abordagem também é comum em outras linguagens de programação. Vamos a um exemplo:
```
res = lambda x: x * x
print(res(3))
```
SAÍDA:

9

No exemplo acima, criamos uma função que recebe um número e retorna seu quadrado. A sintaxe de uma função lambda é diferente da forma tradicional de declaração de funções. Na primeira linha, a variável res recebe o valor da função lambda. A função em si possui o parâmetro x, que é colocado antes dos dois pontos, e a operação (neste caso, a multiplicação) é realizada após os dois pontos. Para usar a função no código, basta invocar o nome da variável, passando o valor desejado como parâmetro, como res(3), res(5), res(7), etc.

É possível também passar múltiplos parâmetros para uma função lambda. Veja um exemplo abaixo, onde realizamos um somatório de dois valores x e y. Embora já tenhamos resolvido este exercício de forma tradicional com funções, o uso de uma função lambda pode ser mais interessante e simplificado para operações simples como essa:
```
soma = lambda x, y: x + y
print(soma(3, 5))
```
SAÍDA:
8

### Exercício 
Crie uma função lambda que receba dois valores numéricos como parâmetros. Ao primeiro valor, sempre some 5. Em seguida, multiplique os dois valores e retorne o resultado.
```
calc = lambda a, b: (a + 5) * b
print(calc(5, 10))
```
---
## 27. Tuplas

Vamos iniciar esta discussão revisitanto um conceito já abordado anteriormente, onde comparávamos variáveis a gavetas em uma estante. Cada gaveta possui um nome, e dentro dela, armazenamos um único dado.

Agora, imagine que queremos armazenar vários itens na mesma gaveta. Para isso, seria interessante que todas as gavetas fossem referenciadas pelo mesmo nome (o nome da variável). Para distinguir as gavetas, usamos um índice numérico. Assim, podemos nos referir a elas como “abra a gaveta 3” ou “abra a gaveta 5”.

A seguir, vamos usar outra analogia: nosso mascote, Lenhadorzinho, enfrentava dificuldades para transportar seus itens, já que só conseguia carregar um de cada vez. Para resolver isso, ele comprou uma mochila, ampliando seu espaço. Agora, dentro de seu inventário, ele pode carregar vários itens, como seu machado, camisa, bacon e abacate. Veja na Figura 1 como os itens estão organizados na mochila.
---
### Exemplificando a Diferenciação entre Variáveis Simples e Compostas

Antes da mochila, ele só podia carregar um item por vez, o que é equivalente a uma variável simples (que armazena apenas um dado). A mochila, por outro lado, é uma variável composta, que armazena diversos itens sob o mesmo nome. Para acessar o machado, basta escrever `mochila[0]`, e para o bacon, usamos `mochila[2]`.

Em programação, estruturas de dados são maneiras específicas de organizar e armazenar dados na memória. Diferentes estruturas de dados são diferenciadas pela forma como os dados são organizados, acessados e manipulados.

Em Python, temos três tipos principais de variáveis compostas: tuplas, listas e dicionários. Cada uma delas tem características próprias, e veremos mais sobre isso ao longo deste conteúdo.
---

### Construindo e Manipulando Tuplas

A tupla é uma estrutura composta em Python simples, com a característica primária de ser **imutável**. Ou seja, uma vez criada, uma tupla não pode ser alterada durante a execução do programa.

As tuplas são estáticas, o que significa que seus endereços de memória não podem ser modificados. Embora sejam imutáveis, elas têm certa semelhança com vetores/arrays encontrados em outras linguagens como C/C++ e Java.

### Representação de uma Tupla

A definição de uma tupla em Python é feita utilizando parênteses e separando os valores por vírgula. Ao imprimir a tupla, os valores aparecerão dentro dos parênteses.

```
mochila = ('Machado', 'Camisa', 'Bacon', 'Abacate')
print(mochila)
```
Saída:
('Machado', 'Camisa', 'Bacon', 'Abacate')
---
### Manipulação de Tuplas

Assim como as strings, as tuplas podem ser fatiadas e manipuladas por meio de índices. A seguir, vemos alguns exemplos de manipulação de tuplas:
```
print(mochila[0])  # Exibe o primeiro elemento
print(mochila[2])  # Exibe o terceiro elemento
print(mochila[0:2])  # Exibe o primeiro e o segundo elementos
print(mochila[2:])  # Exibe os elementos a partir do índice 2
print(mochila[-1])  # Exibe o último elemento
```
Saída:
Machado
Bacon
('Machado', 'Camisa')
('Bacon', 'Abacate')
Abacate
---
### Limitações das Tuplas

Como as tuplas são imutáveis, não podemos alterar seus valores diretamente. Tentando substituir o bacon por ovos, o Python retornaria um erro:
```
mochila[2] = 'Ovos'
```
Saída (Erro):

TypeError: 'tuple' object does not support item assignment
---
### Iterando sobre Tuplas

Podemos iterar sobre os elementos de uma tupla utilizando um laço ```for```:
```
for item in mochila:
    print(f'Na minha mochila tem: {item}')
```
Saída:
Na minha mochila tem: Machado
Na minha mochila tem: Camisa
Na minha mochila tem: Bacon
Na minha mochila tem: Abacate

Também podemos iterar sobre os índices da tupla utilizando a função ```len```:
```
tam = len(mochila)
for i in range(tam):
    print(f'Na minha mochila tem: {mochila[i]}')
```
Saída:
Na minha mochila tem: Machado
Na minha mochila tem: Camisa
Na minha mochila tem: Bacon
Na minha mochila tem: Abacate
---
### Concatenando Tuplas
Uma tupla tem um tamanho fixo, mas podemos criar uma nova tupla concatenando outras. Veja o exemplo:
```
mochila = ('Machado', 'Camisa', 'Bacon', 'Abacate')
upgrade = ('Queijo', 'Canivete')
mochila_grande = mochila + upgrade
print(mochila_grande)
```
Saída:
('Machado', 'Camisa', 'Bacon', 'Abacate', 'Queijo', 'Canivete')

Note que a ordem de concatenação importa:
```
mochila_grande_invertida = upgrade + mochila
print(mochila_grande_invertida)
```
Saída:

('Queijo', 'Canivete', 'Machado', 'Camisa', 'Bacon', 'Abacate')
---
### Desempacotamento de Parâmetros em Funções

Tuplas podem ser usadas para desempacotar parâmetros em funções, permitindo que um número variável de argumentos seja passado para a função. Veja um exemplo:
```
def soma(*num):
    acumulador = 0
    for i in num:
        acumulador += i
    return acumulador

# Chamando a função
print(soma(1, 2))  # Saída: 3
print(soma(1, 2, 3, 4, 5, 6, 7, 8, 9))  # Saída: 45
```
No código acima, o asterisco (*) antes do parâmetro indica que a função pode receber um número variável de argumentos, que serão empacotados em uma tupla.
---
### Exercícios

Agora, vamos praticar com tuplas e desempacotamento de funções:

Exercício 1
Crie uma tupla com o nome de 10 linguagens de programação e mostre em qual posição está a linguagem "Python".
```
linguagens = ('Javascript', 'Rust', 'Swift', 'Python', 'Kotlin', 'Go', 'C#', 'Dart', 'Julia', 'Typescript')
i = 0
while linguagens[i] != 'Python':
    i += 1
print(f'Encontramos Python na {i + 1} posição!')
```
### Exercício 2
Escreva uma função que recebe uma string com uma mensagem e um número arbitrário de valores. A função deve exibir a mensagem e o maior valor entre os números passados.
```
def func_maior(msg, *num):
    maior = max(num)
    print(msg, maior)

# Chamando a função
func_maior('Maior valor: ', 8, 6, 4, 78, 56, 12, 9)
```
## 28. Listas

Ao contrário das tuplas, que são imutáveis, as listas permitem a modificação de seus elementos. Agora, vamos ver como a lista pode ser usada de maneira semelhante à mochila do Lenhadorzinho. Se ele quiser substituir o bacon por uma laranja, isso seria possível com uma lista.

### Definindo uma Lista

A diferença entre tuplas e listas em Python é simples: as tuplas são definidas com parênteses e as listas com colchetes.
```
mochila = ('Machado', 'Camisa', 'Bacon', 'Abacate')
print('Tupla: ', mochila)

mochila = ['Machado', 'Camisa', 'Bacon', 'Abacate']
print('Lista: ', mochila)
```
Saída:
Tupla: ('Machado', 'Camisa', 'Bacon', 'Abacate')
Lista: ['Machado', 'Camisa', 'Bacon', 'Abacate']

Agora, vamos alterar o conteúdo da lista:
```
mochila[2] = 'Laranja'
print('Lista: ', mochila)
```
Saída:
Copiar código
Lista: ['Machado', 'Camisa', 'Laranja', 'Abacate']
---
### Manipulação de Listas em Python

A manipulação de listas em Python oferece diversas possibilidades, que vão além do que já vimos com as tuplas. Vamos explorar algumas dessas operações.

### Adicionando Elementos à Lista

Para adicionar elementos a uma lista, o método `append()` é utilizado, pois ele permite inserir um item no final da lista. Por exemplo, se tivermos uma lista chamada `mochila` com 4 itens (índices de 0 a 3), podemos adicionar um novo item ao final, assim:
```
mochila.append('Ovos')  # Adiciona 'Ovos' ao final da lista
print('Lista:', mochila)
```
Saída:

Lista: ['Machado', 'Camisa', 'Laranja', 'Abacate', 'Ovos']

O método ```append()``` adiciona o item ao final da lista, mas caso precisemos inserir um item em uma posição específica, podemos usar o método ```insert()```. Este método exige que informemos o índice onde o item será inserido, deslocando os elementos seguintes para a direita. Veja o exemplo:
```
mochila.insert(1, 'Canivete')  # Insere 'Canivete' no índice 1
print('Lista:', mochila)
```
Saída:

Lista: ['Machado', 'Canivete', 'Camisa', 'Laranja', 'Abacate', 'Ovos']
---
### Removendo Elementos

Existem diferentes maneiras de remover um item de uma lista. Uma delas é utilizando o ```del```, que remove o item baseado no seu índice. Outra opção é o método ```remove()```, que exclui o item a partir do seu valor. Veja as duas abordagens:
```
del mochila[1]  # Remove o item no índice 1
print('Lista:', mochila)

mochila.remove('Ovos')  # Remove o item com valor 'Ovos'
print('Lista:', mochila)
```
Saída:
Lista: ['Machado', 'Camisa', 'Laranja', 'Abacate', 'Ovos']
Lista: ['Machado', 'Camisa', 'Laranja', 'Abacate']

### Métodos ou Funções?

Nos exemplos acima, vimos métodos como ```append```, ```insert```, e ```remove```. Eles são chamados de "métodos" porque pertencem a objetos de uma classe específica, no caso, a classe ```list``` em Python. A programação orientada a objetos (POO) utiliza classes e objetos, em vez de funções isoladas, e os métodos são invocados com a sintaxe ```objeto.metodo()```. Embora para nós seja apenas uma questão de terminologia, é importante entender que a lista é um objeto e os métodos agem sobre ela.

Os métodos da classe ```list``` são extensivos, e você pode explorar todos eles na documentação oficial de Python: Python List Documentation.

### Cópia de Listas

Uma característica interessante de Python é como as listas são copiadas. Quando fazemos uma simples atribuição de uma lista a outra, ambas as variáveis apontam para o mesmo objeto. Isso significa que qualquer alteração em uma das listas também afetará a outra. Veja o exemplo:
```
lista_original = [5, 7, 9, 11]
lista_referenciada = lista_original
print(lista_original)
print(lista_referenciada)

lista_referenciada[0] = 2
print(lista_original)
print(lista_referenciada)
```
Saída:
[5, 7, 9, 11]
[5, 7, 9, 11]
[2, 7, 9, 11]
[2, 7, 9, 11]

Neste caso, a alteração feita em ```lista_referenciada``` impacta também ```lista_original``` porque ambas estão referenciando o mesmo objeto.

Se quisermos realmente criar uma cópia independente de uma lista, podemos usar o fatiamento (slicing) para criar uma cópia completa da lista:
```
lista_referenciada = lista_original[:]
print(lista_original)
print(lista_referenciada)

lista_referenciada[0] = 2
print(lista_original)
print(lista_referenciada)
```
Saída:
[5, 7, 9, 11]
[5, 7, 9, 11]
[5, 7, 9, 11]
[2, 7, 9, 11]

Agora, como podemos ver, as listas são independentes e a alteração de uma não afeta a outra.
---
## 29. Strings e Listas Dentro de Listas

Além de acessar itens individuais dentro de uma lista, podemos também trabalhar com strings dentro dessas listas. A indexação dupla é uma técnica útil quando queremos acessar caracteres específicos dentro de uma string, que por sua vez está dentro de uma lista. Veja o exemplo abaixo:
```
mochila = ['Machado', 'Camisa', 'Bacon', 'Abacate']
print(mochila[0])  # Acessando o primeiro item da lista
```
Saída:
Machado

Como já vimos, podemos acessar cada caractere dentro de uma string, utilizando uma indexação adicional. Isso nos permite acessar um caractere específico de um item de uma lista que seja uma string.
```
print(mochila[0][0])  # Primeiro caractere de 'Machado'
print(mochila[2][1])  # Segundo caractere de 'Bacon'
```
Saída:
M
A
---
### Laços de Repetição Dupla

Quando queremos percorrer todos os caracteres de cada string dentro de uma lista, podemos usar laços de repetição aninhados. O primeiro laço percorre os itens da lista, e o segundo percorre os caracteres de cada string. Exemplo:
```
for item in mochila:
    for letra in item:
        print(letra, end='')
    print()
```
Saída:
Machado
Camisa
Bacon
Abacate

Essa abordagem é útil quando precisamos acessar cada caractere das strings dentro de uma lista.

### Alternativa com ```range```

Outra forma de realizar a iteração é usando ```range```, como mostrado abaixo. Aqui, percorremos os índices de cada item e, dentro de cada item, percorremos os caracteres individuais.
```
for i in range(0, len(mochila), 1):
    for j in range(0, len(mochila[i]), 1):
        print(mochila[i][j], end='')
    print()
```
Machado
Camisa
Bacon
Abacate

Esta abordagem é útil em alguns cenários específicos, como quando precisamos acessar o índice de um elemento ou aplicar alguma condição específica baseada na posição.
---
A impressão da lista com dois laços de repetição resulta, neste caso, no mesmo comportamento observado com um único laço, que aprendemos ao trabalhar com tuplas. Vale ressaltar que essa abordagem também se aplica às listas. No entanto, a alternativa que acabamos de aprender não é desprovida de utilidade, podendo ser vantajosa dependendo do problema a ser resolvido. Por exemplo, imagine que precisamos verificar, caractere por caractere, as palavras de uma lista em busca de um determinado padrão. Nesse cenário, a abordagem com laços duplos pode ser bastante útil.

Agora, vamos imaginar um cenário em que precisamos registrar uma lista de compras em um sistema. Para cada produto comprado, devemos registrar seu nome, quantidade e preço unitário. A solução mais simples que nos vem à mente pode ser criar três listas separadas, uma para cada tipo de dado. No entanto, o Python oferece uma maneira mais eficiente, permitindo que criemos uma única lista em que, em cada índice, armazenamos outra lista contendo os campos de nome, quantidade e preço. Esse é um exemplo de indexação dupla.

A seguir, vamos ver como implementar isso em Python. Começaremos criando uma lista vazia e adicionaremos os produtos um a um. Para fins de simplificação, o exemplo abaixo utiliza um laço de repetição que registra apenas três itens.
```
item = []
mercado = []
for i in range(3):
    item.append(input('Digite o nome do item:'))
    item.append(int(input('Digite a quantidade:')))
    item.append(float(input('Digite o valor:')))
    mercado.append(item[:])
    item.clear()
print(mercado)
```
Saída:
Digite o nome do item: Cebola
Digite a quantidade: 2
Digite o valor: 0.99
Digite o nome do item: Tomate
Digite a quantidade: 5
Digite o valor: 0.89
Digite o nome do item: Saco de Arroz
Digite a quantidade: 1
Digite o valor: 5
[['Cebola', 2, 0.99], ['Tomate', 5, 0.89], ['Saco de Arroz', 1, 5.0]]

Na primeira e segunda linha, criamos duas listas vazias. A lista item serve como uma variável temporária para armazenar os dados de cada produto, que serão inseridos na lista mercado. Dentro do laço de repetição, preenchemos a lista item com os dados coletados do teclado. Em seguida, na linha 8, inserimos uma cópia da lista item dentro de mercado (não se esqueça do uso de [:]). Na linha 9, limpamos a lista item para garantir que ela não contenha dados da iteração anterior, preparando-a para o próximo produto. O print exibe na tela uma lista externa, contendo várias listas internas, separadas por vírgulas. Cada uma dessas listas internas contém três elementos: uma string (nome do produto), um inteiro (quantidade) e um número flutuante (valor).

Uma abordagem alternativa seria usar apenas a lista principal mercado, criando variáveis simples para cada campo de dados. Veja como ficaria o código:
```
mercado = []
for i in range(3):
    nome = input('Digite o nome do item:')
    qtd = int(input('Digite a quantidade:'))
    valor = float(input('Digite o valor:'))
    mercado.append([nome, qtd, valor])
print(mercado)
```
A saída será a mesma que a anterior. A diferença é que agora utilizamos três variáveis simples (nome, qtd, valor) para armazenar as informações, que são então agrupadas em uma lista [nome, qtd, valor] e adicionadas à lista mercado.
---
### Acessando os Dados

Podemos acessar dados específicos dentro da lista mercado. Aqui estão alguns exemplos de como acessar informações individuais:
```
# Qual o nome do primeiro produto?
print(mercado[0][0])

# Quanto custa um tomate?
print(mercado[1][2])

# Quantos sacos de arroz foram comprados?
print(mercado[2][1])
```
---
### Acessando Caractere de uma String Dentro de uma Lista de Listas

Será que é possível acessar um único caractere dentro de uma lista que contém outras listas? Por exemplo, como acessaríamos a letra "C" da palavra "Cebola"?

Dica: Neste caso, temos uma string dentro de uma lista, que por sua vez está dentro de outra lista. Isso exigirá uma indexação tripla!

### Exibindo a Lista de Compras

Por fim, podemos utilizar a lista mercado para gerar um relatório da compra, apresentando os dados organizados em colunas, incluindo o valor total do pedido. Veja como ficaria o código:
```
soma = 0
print('Lista de compras:')
print('-' * 20)
print('item | quantidade | valor unitário | total do item')
for item in mercado:
    print('{} | {} | {} | {}'.format(item[0], item[1], item[2], item[1] * item[2]))
    soma += item[1] * item[2]
print('-' * 20)
print(f'Total a ser pago: {soma}')
```
Saída:
Lista de compras:
--------------------
item | quantidade | valor unitário | total do item
Cebola | 2 | 0.99 | 1.98
Tomate | 5 | 0.89 | 4.45
Saco de Arroz | 1 | 5.0 | 5.0
--------------------
Total a ser pago: 11.43
---
### Exercícios

Vamos praticar alguns conceitos sobre listas. Lembre-se de que as manipulações que vimos com tuplas também se aplicam às listas.

Exercício 1

Crie um programa em Python que inicialize uma lista vazia e permita ao usuário adicionar notas de um aluno. O programa deve continuar a aceitar notas até que o usuário insira um valor negativo, momento em que ele calculará a média das notas fornecidas.

```
notas = list()
x = float(input('Digite uma nota:'))
while x >= 0:
    notas.append(x)
    x = float(input('Digite uma nota:'))
    
soma = sum(notas)
media = soma / len(notas) if notas else 0
print(notas)
print(f'Média das notas digitadas: {media}')
```
Explicação:

O programa cria uma lista chamada notas.
Um loop permite que o usuário adicione notas enquanto digitar valores não-negativos.
A soma das notas é calculada usando sum(), e a média é calculada dividindo a soma pelo número de elementos na lista.

Exercício 2

O algoritmo de busca mais simples é a busca sequencial. Ela percorre a lista do início ao fim, verificando se o valor desejado está presente. A seguir, uma função em Python que recebe uma lista e um valor e retorna o índice onde o valor se encontra, ou -1 se não estiver presente.
```
def buscaSequencial(lista, dado):
    for x in range(len(lista)):
        if lista[x] == dado:
            return x
    return -1

# Programa principal
teste = [3, 7, 9, 1, 0, 7, 5, 12]
dado = int(input('Digite um valor inteiro: '))
res = buscaSequencial(teste, dado)

if res >= 0:
    print(f'Posição onde o {dado} foi encontrado: {res + 1}')
else:
    print('Dado não localizado...')
```
Explicação:

A função buscaSequencial percorre a lista e retorna o índice do valor procurado.
Caso o valor não seja encontrado, a função retorna -1.

### Exercício 3

Crie um programa que leia o nome, altura e peso de várias pessoas e armazene essas informações em uma lista. O programa deve calcular o IMC de cada pessoa e armazená-lo junto com os dados. No final, o programa deve exibir:

- O total de cadastros.
- A pessoa com o maior IMC.
- A pessoa com o menor IMC.
- O cálculo do IMC será feito usando uma função lambda.
```
pessoas = []
imc = lambda peso, altura: peso / (altura ** 2)

while True:
    nome = input('Nome: ')
    altura = float(input('Altura (m): '))
    peso = int(input('Peso (kg): '))
    imc_calculado = imc(peso, altura)
    pessoas.append([nome, altura, peso, imc_calculado])
    
    res = input('Deseja fazer mais um cadastro? [S/N]: ')
    if res.lower() == 'n':
        break

print('Cadastros: ', pessoas)
print('Total de Cadastros: ', len(pessoas))

maior_imc = max(pessoas, key=lambda x: x[3])
menor_imc = min(pessoas, key=lambda x: x[3])

print(f'Maior IMC: {maior_imc[3]}')
print(f'Menor IMC: {menor_imc[3]}')
```
Explicação:

O programa solicita o nome, altura e peso das pessoas.
O IMC é calculado usando uma função lambda e adicionado à lista de pessoas.
No final, o programa utiliza as funções max() e min() com a chave lambda para determinar a pessoa com o maior e menor IMC.

## 30. Dicionários

Agora vamos explorar os dicionários, uma estrutura de dados que armazena pares de chave e valor. Vale ressaltar que as manipulações aprendidas com tuplas e listas também podem ser aplicadas aos dicionários.

Nos dicionários, a chave é usada para referenciar os valores, ao invés de índices numéricos. Um dicionário pode ser criado utilizando chaves ```{}```.

Exemplo de Dicionário:
```
mochila = {'Laptop': 1, 'Smartphone': 2, 'Power Bank': 3, 'Carregadores e Cabos': 4}
print('Dicionário: ', mochila)
```
Saída:
Dicionário: {'Laptop': 1, 'Smartphone': 2, 'Power Bank': 3, 'Carregadores e Cabos': 4}
---
### Métodos de Dicionário

- ```.values()```: Retorna todos os valores presentes no dicionário.
```
print(game.values())
```
- ```.keys()```: Retorna todas as chaves presentes no dicionário.
```
print(game.keys())
```
- ```.items()```: Retorna todos os pares chave-valor.
```
print(game.items())
```
- Laço de repetição para acessar pares chave-valor:
```
for chave, valor in game.items():
    print(f'{chave} = {valor}')
```
---
### Exemplo de Acesso aos Dados:
```
game = {'nome': 'Super Mario', 'desenvolvedora': 'Nintendo', 'ano': 1990}
print(game['nome'])  # Super Mario
print(game['desenvolvedora'])  # Nintendo
print(game['ano'])  # 1990
```
---
### Listas com Dicionários

Após aprender a criar um dicionário, podemos querer armazenar várias entradas de itens dentro de uma coleção. Por exemplo, em vez de apenas registrar um único jogo, podemos querer registrar múltiplos jogos. Para isso, podemos combinar listas e dicionários, onde cada elemento da lista contém um dicionário completo com informações detalhadas. Veja o exemplo abaixo:
```
games = []
game1 = {'nome': 'Super Mario', 'videogame': 'Super Nintendo', 'ano': 1990}
game2 = {'nome': 'Zelda Ocarina of Time', 'videogame': 'Nintendo 64', 'ano': 1998}
game3 = {'nome': 'Pokemon Yellow', 'videogame': 'Game Boy', 'ano': 1999}
games = [game1, game2, game3]
print(games)
```
Saída:

[{'nome': 'Super Mario', 'videogame': 'Super Nintendo', 'ano': 1990}, 
 {'nome': 'Zelda Ocarina of Time', 'videogame': 'Nintendo 64', 'ano': 1998}, 
 {'nome': 'Pokemon Yellow', 'videogame': 'Game Boy', 'ano': 1999}]
 
Aqui, criamos uma lista chamada games, inicialmente vazia. Em seguida, definimos três dicionários (game1, game2, game3), cada um contendo informações sobre um jogo: nome, videogame e ano de lançamento. Depois, adicionamos esses dicionários à lista games, criando assim uma coleção de jogos.

No entanto, a abordagem apresentada acima não é dinâmica o suficiente, pois só permite adicionar três jogos de forma estática. Podemos tornar isso mais flexível permitindo que o usuário insira os dados diretamente via teclado, usando um laço de repetição. O código abaixo demonstra essa abordagem:
```
game = {}
games = []
for i in range(3):
    game['nome'] = input('Qual o nome do jogo?')
    game['videogame'] = input('Para qual videogame ele foi lançado?')
    game['ano'] = input('Qual o ano de lançamento?')
    games.append(game.copy())
print('-' * 20)
for jogos in games:
    for chave, valor in jogos.items():
        print(f'O campo {chave} tem o valor {valor}.')
```
Explicação:

Dentro do laço for, lemos os dados do usuário, atribuindo-os às chaves 'nome', 'videogame' e 'ano'. Após isso, usamos o método copy() para garantir que a referência do dicionário seja preservada ao adicionar o dicionário à lista games (evitando que todas as entradas referenciem o mesmo objeto). O segundo laço for percorre cada jogo na lista e exibe os dados armazenados.
---
### Dicionários com Listas

Agora, podemos inverter a lógica e, em vez de armazenar um dicionário dentro de uma lista, armazenamos listas dentro de um dicionário. Nesse caso, cada chave do dicionário terá uma lista associada. Veja o código a seguir:
```
games = {
    'nome': ['Super Mario', 'Zelda Ocarina of Time', 'Pokemon Yellow'],
    'videogame': ['Super Nintendo', 'Nintendo 64', 'Game Boy'],
    'ano': [1990, 1998, 1999]
}
print(games)
```
Saída:
{'nome': ['Super Mario', 'Zelda Ocarina of Time', 'Pokemon Yellow'], 
 'videogame': ['Super Nintendo', 'Nintendo 64', 'Game Boy'], 
 'ano': [1990, 1998, 1999]}
 
Aqui, o dicionário games tem três chaves: 'nome', 'videogame' e 'ano', e cada chave está associada a uma lista com os respectivos valores.

Da mesma forma, podemos permitir que o usuário insira dados via teclado, utilizando um laço de repetição, como no exemplo abaixo:
```
games = {'nome': [], 'videogame': [], 'ano': []}
for i in range(3):
    nome = input('Qual o nome do jogo?')
    videogame = input('Para qual videogame ele foi lançado?')
    ano = input('Qual o ano de lançamento?')
    games['nome'].append(nome)
    games['videogame'].append(videogame)
    games['ano'].append(ano)
print('-' * 20)
print(games)
```
Explicação:

Aqui, inicializamos o dicionário games com listas vazias para cada chave. Em seguida, dentro do laço for, coletamos os dados do usuário e adicionamos os valores às listas apropriadas no dicionário.
---
### Exercícios

Agora, vamos aplicar os conceitos de dicionários e listas com alguns exercícios práticos.

Exercício 1

Escreva um programa em Python que leia o nome de um aluno e suas três notas. O programa deve calcular a média das notas e armazenar essa informação junto com o nome do aluno em um dicionário. Além disso, armazene a situação do aluno com base na média:

- Média >= 7: aprovado
- Média < 7 e >= 5: em exame
- Média < 5: reprovado
Por fim, o programa deve exibir todas as informações de forma organizada.
```
aluno = {}
aluno['nome'] = input('Qual o nome do aluno?')
n1 = float(input('Qual a primeira nota?'))
n2 = float(input('Qual a segunda nota?'))
n3 = float(input('Qual a terceira nota?'))
aluno['media'] = (n1 + n2 + n3) / 3
if aluno['media'] >= 7:
    aluno['status'] = 'Aprovado'
elif aluno['media'] >= 5:
    aluno['status'] = 'Em exame'
else:
    aluno['status'] = 'Reprovado'
for chave, valor in aluno.items():
    print(f'{chave}: {valor}')
```
Exercício 2
Crie um programa para controle de estoque de produtos de uma loja de hortifrúti. O estoque deve ser armazenado em um dicionário, onde cada chave é o nome do produto e o valor é uma lista contendo o preço e a quantidade disponível. O programa deve permitir que o usuário compre produtos, fornecendo o nome e a quantidade, até que ele decida encerrar a compra. Após isso, o programa deve exibir o total da compra e atualizar o estoque.
```
loja = {'cenoura': [100, 0.99], 'brócolis': [50, 3.99], 'batata': [200, 0.49], 'cebola': [75, 1.10]}
pedido = []
while True:
    item_nome = input('Digite o nome do item que deseja comprar: ')
    item_qtd = int(input('Deseja comprar quantos? '))
    pedido.append([item_nome, item_qtd])
    res = input('Deseja adicionar outro item? [S/N] ')
    if res in 'Nn':
        break

total = 0
print('\nVendas:')
for item in pedido:
    produto = item[0]
    qtd = item[1]
    preco = loja[produto][1]
    valor_produto = preco * qtd
    print(f'{produto}: {qtd} x {preco} = {valor_produto}')
    loja[produto][0] -= qtd
    total += valor_produto

print(f'Custo total: {total}\n')
print('Estoque restante:')
for chave, valor in loja.items():
    print(f'Descrição: {chave}')
    print(f'Quantidade disponível: {valor[0]}')
    print(f'Preço: {valor[1]}\n')
```
---
## 31. Trabalhando com Métodos e Strings

Em estudos anteriores, aprendemos a manipular strings, como fatiar, concatenar, verificar o tamanho, entre outros. Porém, o conceito de strings é extenso e possui muitas funcionalidades. Agora que entendemos o que são métodos e como utilizá-los, além do conceito de listas, podemos aprofundar nosso conhecimento sobre strings. Vamos concluir nossa aprendizagem, explorando mais algumas funcionalidades essenciais para ter um entendimento sólido sobre o tema.

### Imutabilidade das Strings

Um ponto importante a ser destacado é que, uma vez criada, uma string é imutável, similar a uma tupla. Ou seja, não é possível modificar um valor dentro de uma string diretamente. Vamos ver um exemplo de erro:
```
s1 = 'Algoritmos'
print(s1)
s1[0] = 'a'
```
SAÍDA (ERRO):
Algoritmos
TypeError Traceback (most recent call last)
<ipython-input-31-8c04c5f6db42> in <cell line: 3>()
 1 s1 = 'Algoritmos'
 2 print(s1)
----> 3 s1[0] = 'a'
TypeError: 'str' object does not support item assignment

Entretanto, ao utilizarmos listas, podemos transformar uma string em uma lista utilizando a função ```list()```. Isso permite que cada caractere seja tratado separadamente. Se usarmos o ```join()```, podemos recompor a string sem os caracteres separando-os por vírgulas.
```
s1 = list('Algoritmos')
print(s1)        # Exibe a lista de caracteres
print(''.join(s1)) # Exibe a string novamente sem separação
```
SAÍDA:

['A', 'l', 'g', 'o', 'r', 'i', 't', 'm', 'o', 's']
Algoritmos

### Verificando Caracteres em uma String

O Python oferece métodos para verificar se uma string começa ou termina com um conjunto específico de caracteres. Para isso, utilizamos os métodos ```startswith()``` e ```endswith()```, respectivamente. Exemplos:
```
s1 = 'Lógica de Programação e Algoritmos'

# Verificando se a string começa com 'Lógica'
print(s1.startswith('Lógica'))  # SAÍDA: True

# Verificando se a string termina com 'Algoritmos'
print(s1.endswith('Algoritmos'))  # SAÍDA: True
```
Lembre-se de que esses métodos são sensíveis a maiúsculas e minúsculas:
```
s1 = 'Lógica de Programação e Algoritmos'

# Verificando se a string termina com 'algoritmos'
print(s1.endswith('algoritmos'))  # SAÍDA: False
```
Para ignorar essa distinção, podemos converter toda a string para minúsculas com o método ```lower()```:
```
print(s1.lower().endswith('algoritmos'))  # SAÍDA: True
```
Da mesma forma, podemos usar o método ```upper()``` para converter toda a string para maiúsculas.
```
print(s1.upper())  # SAÍDA: LÓGICA DE PROGRAMAÇÃO E ALGORITMOS
print(s1.lower())  # SAÍDA: lógica de programação e algoritmos
```
---
### Contando Caracteres

O método ```count()``` permite contar quantas vezes um determinado caractere ou conjunto de caracteres aparece em uma string. Por exemplo:
```
s1 = 'Lógica de Programação e Algoritmos'
print(s1.count('a'))  # SAÍDA: 3
```
Se fizermos uma conversão para minúsculas com ```lower()```, todas as ocorrências de 'a' serão contabilizadas, independentemente de estarem em maiúsculas ou minúsculas:
```
print(s1.lower().count('a'))  # SAÍDA: 4
```
Também podemos contar uma palavra específica, como 'mafagafinho', dentro de uma string maior:
```
s1 = 'Um mafagafinho, dois mafagafinhos, três mafagafinhos...'
print(s1.lower().count('mafagafinho'))  # SAÍDA: 3
```
---
### Quebrando Strings

O método ```split()``` divide uma string em várias substrings com base em um caractere separador. Por exemplo, para separar as palavras de uma frase:
```
s1 = 'Um mafagafinho, dois mafagafinhos, três mafagafinhos...'
print(s1.split(' '))  # SAÍDA: ['Um', 'mafagafinho,', 'dois', 'mafagafinhos,', 'três', 'mafagafinhos...']
```
Aqui, cada palavra foi separada por espaços em uma lista.
---
### Substituindo Strings

Com o método ```replace()```, podemos substituir uma palavra ou caractere por outro em uma string. Aqui, substituímos 'mafagafinho' por 'gatinho':
```
s1 = 'Um mafagafinho, dois mafagafinhos, três mafagafinhos...'
print(s1.replace('mafagafinho', 'gatinho'))  # SAÍDA: Um gatinho, dois gatinhos, três gatinhos...
```
Podemos adicionar um terceiro parâmetro para limitar o número de substituições:
```
print(s1.replace('mafagafinho', 'gatinho', 1))  # SAÍDA: Um gatinho, dois mafagafinhos, três mafagafinhos...
```
---
### Validando Tipos de Dados

Python possui vários métodos de validação para checar se uma string contém determinados tipos de caracteres. A seguir, são apresentados alguns desses métodos:

- ```isalnum()```: Retorna True se a string contiver apenas letras e números.
- ```isalpha()```: Retorna True se a string contiver apenas letras (incluindo acentuação).
- ```isdigit()```: Verifica se a string contém apenas números.
- ```isnumeric()```: Verifica se a string contém números ou caracteres numéricos.
- ```isupper()```: Verifica se a string está completamente em maiúsculas.
- ```islower()```: Verifica se a string está completamente em minúsculas.
- ```isspace()```: Retorna True se a string contiver apenas espaços em branco.
- ```isprintable()```: Retorna True se todos os caracteres da string forem imprimíveis.

Exemplo de uso:
```
s1 = 'Lógica de Programação e Algoritmos'
s2 = '42'

print(s1.isalnum())  # SAÍDA: False
print(s2.isalnum())  # SAÍDA: True

print(s1.isalpha())  # SAÍDA: False
print(s2.isalpha())  # SAÍDA: False

s1 = 'LógicadeProgramaçãoeAlgoritmos'
print(s1.isalpha())  # SAÍDA: True
```
---
### Resumo dos Métodos de Strings

Python oferece uma vasta gama de métodos para manipulação de strings. Aqui está um resumo dos principais métodos que vimos até agora:

### Métodos de Validação

- `isalnum()`: Letras e números.
- `isalpha()`: Somente letras.
- `isdigit()`: Somente números.
- `isnumeric()`: Números ou caracteres matemáticos.
- `isupper()`: Somente letras maiúsculas.
- `islower()`: Somente letras minúsculas.
- `isspace()`: Somente espaços.
- `isprintable()`: Caracteres imprimíveis.

### Métodos Comuns para Strings

- `startswith()`: Verifica o início da string.
- `endswith()`: Verifica o final da string.
- `lower()`: Converte para minúsculas.
- `upper()`: Converte para maiúsculas.
- `find()`: Encontra a primeira ocorrência de um padrão.
- `rfind()`: Encontra a última ocorrência de um padrão.
- `center()`: Centraliza a string.
- `ljust(), rjust()`: Alinha a string à esquerda ou à direita.
- `split()`: Divide a string.
- `replace()`: Substitui caracteres.
- `lstrip(), rstrip()`: Remove espaços à esquerda ou à direita.
- `strip()`: Remove espaços em ambas as extremidades.

