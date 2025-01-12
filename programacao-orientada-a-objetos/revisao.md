

## Índice

- [01. Paradigmas de Programação e História da Programação Orientada a Objetos](#01-paradigmas-de-programação-e-história-da-programação-orientada-a-objetos)
- [02. História do Java](#02-história-do-java)
- [03. Organização do Java](#03-organização-do-java)
- [04. Versões do Java e Primeiro Código](#04-versões-do-java-e-primeiro-código)
- [05. Visão Geral sobre o Código JAVA](#05-visão-geral-sobre-o-código-java)
- [06. Classes e Atributos](#06-classes-e-atributos)
- [07. Métodos](#07-métodos)
- [08. Padrões e Modificadores Static em Java](#08-padrões-e-modificadores-static-em-java)
- [09. Interação entre Objetos](#09-interação-entre-objetos)
- [10. Construtores em Java](#10-construtores-em-java)

---

## 01. Paradigmas de Programação e História da Programação Orientada a Objetos

### Conceito de Paradigmas

- Paradigmas são métodos para estruturar, abstrair e funcionalizar linguagens de programação.
- Antes dos computadores modernos, já existiam regras formais para algoritmos que influenciaram as primeiras linguagens.
- Os paradigmas podem ser divididos em:
  - **Imperativos**: Focados em "como resolver" problemas, com alterações de estado sequenciais.
  - **Declarativos**: Focados no "o que resolver", sem especificar como executar as etapas.

---

### Tipos de Paradigmas

1. **Procedural**:
   - Baseado em comandos sequenciais que alteram estados de memória.
   - Linguagem principal: C.
   - Oferece liberdade para criar algoritmos eficientes.
2. **Funcional**:
   - Fundamentado em funções matemáticas, útil para algoritmos matemáticos complexos.
   - Exemplo: Scala.
3. **Lógico**:
   - Usa declarações matemáticas como base lógica para resolução de problemas.
   - Exemplo: Prolog, com aplicações em IA.
4. **Orientado a Objetos (OO)**:
   - Criado nos anos 1960 por Alan Kay, inspirado em biologia e matemática.
   - Propõe abstração por meio de "células" (objetos) independentes que trocam mensagens.
   - Linguagens pioneiras: Simula e Smalltalk.

---

### Paradigma Orientado a Objetos (OO)

- Modelo que organiza sistemas ao redor de **objetos** com atributos e métodos.
- Facilita a leitura e a manutenção de código.
- Características principais:
  - **Encapsulamento**: Protege dados internos.
  - **Herança**: Permite que classes compartilhem comportamentos.
  - **Polimorfismo**: Métodos com comportamentos diferentes em contextos distintos.
- Aplicado em linguagens como Python, Java, C++ e outras.

---

## 02. História do Java

### Origem do Java
- Desenvolvido no início dos anos 1990 pela equipe do **Green Project** na Sun Microsystems.
- Criado para conectar dispositivos domésticos por meio de uma linguagem independente de plataforma.
- Inicialmente chamado de **Oak**, foi renomeado para **Java** em 1995 devido a questões legais.
- Seu diferencial era o uso de uma **Máquina Virtual Java (JVM)**, permitindo executar código em qualquer dispositivo compatível.

---

### Evolução do Java

- Popularizado na era da internet com suporte de grandes empresas como IBM.
- Aplicações:
  - Dispositivos móveis (como Android).
  - Servidores e sistemas web.
  - Dispositivos como Kindle, TV digital e em missões espaciais (Opportunity).
- Adotou licença de software livre (GPL v3) em 2006, permitindo acesso ao código-fonte.
- Desde 2010, é gerenciado pela Oracle.
- Atualização mais recente (neste contexto): versão 13, lançada em setembro de 2019.

---

## 03. Organização do Java

O Java é mais do que uma linguagem de programação; ele opera em um ecossistema próprio que inclui uma máquina virtual, ferramentas de desenvolvimento e bibliotecas. Essa organização permite que o Java combine a flexibilidade de códigos interpretados com a eficiência de códigos compilados. Abaixo estão os principais aspectos dessa organização.

---

## Compilação e Interpretação no Java

### Compilação Tradicional

- Em linguagens como C, o código de alto nível é transformado em **código de máquina** (binário) por meio de um processo chamado compilação.
- Esses códigos nativos, como arquivos `.exe`, são otimizados para desempenho, mas específicos para cada plataforma.

### Interpretação

- Algumas linguagens, ao invés de compilar, interpretam o código em tempo de execução.
- Códigos interpretados são menos eficientes devido à sobrecarga de tradução dinâmica, mas têm a vantagem de serem portáveis entre plataformas.

### O Caso do Java

- O Java combina os dois processos:
  1. **Compilação Inicial**: O código fonte é transformado em **bytecode**, um formato intermediário.
  2. **Interpretação e Execução**: O bytecode é executado por meio da **Java Virtual Machine (JVM)**, que pode rodar em qualquer sistema com uma JVM compatível.

---

### Java Virtual Machine (JVM)
- A JVM interpreta e executa o bytecode Java.
- Possui licença livre, permitindo a criação de implementações independentes.
- Desempenho:
  - Originalmente, a interpretação do bytecode causava perda de desempenho em relação a códigos nativos.
  - Soluções modernas, como o **Hotspot**, melhoraram significativamente essa limitação.

### Hotspot e Just-in-Time Compilation (JIT)
- **Hotspot**: Identifica os trechos mais utilizados do código (cerca de 20%) e os compila dinamicamente para código de máquina.
- **JIT Compilation**: Essa técnica de compilação durante a execução melhora o desempenho, aproximando-o de linguagens compiladas.

---

## Ferramentas do Ecossistema Java

### Ambiente de Execução Java (JRE)
- Contém:
  - **JVM**: Responsável pela execução dos bytecodes.
  - **Bibliotecas padrão**: Necessárias para rodar aplicações Java.
- Necessário para quem deseja apenas executar aplicações Java.

### Kit de Desenvolvimento Java (JDK)
- Inclui:
  - Ferramentas de desenvolvimento, como o compilador de bytecode.
  - Todo o conteúdo do JRE.
- Indispensável para programadores que desejam desenvolver aplicações em Java.

---

### Conceitos Fundamentais
| **Termo**             | **Sigla** | **Definição**                                                                 |
|------------------------|-----------|-------------------------------------------------------------------------------|
| **Java Virtual Machine** | JVM       | Programa que interpreta e executa bytecode Java.                              |
| **Bytecode**            | -         | Código intermediário gerado após a compilação do código fonte Java.           |
| **Java Development Kit**| JDK       | Conjunto de ferramentas e bibliotecas para desenvolvimento em Java.           |
| **Java Runtime Environment** | JRE   | Ambiente para execução de bytecode, contendo JVM e bibliotecas padrão.        |
| **Just in Time Compilation** | JIT   | Técnica de compilação dinâmica para otimizar trechos críticos durante a execução. |
| **Garbage Collection**  | -         | Processo automatizado de liberação de memória alocada não utilizada.          |

---

### Desempenho do Java
- Benchmarks mostram que, em alguns casos, o Java pode alcançar desempenho semelhante ou superior ao de linguagens como C++.
- A evolução contínua de sua tecnologia, como a JIT, torna o Java uma linguagem eficiente e amplamente utilizada.

Com essa organização, o Java consegue aliar portabilidade e desempenho, sendo uma das linguagens mais populares no desenvolvimento de aplicações modernas.

---

## 04. Versões do Java e Primeiro Código

Neste tópico, abordamos a criação do primeiro projeto Java utilizando a IDE Eclipse, explorando conceitos fundamentais do Java e seu ambiente de desenvolvimento.

---

### Versões do Java e a IDE Eclipse

### Uso de IDEs no Desenvolvimento Java

Embora seja possível escrever código Java em qualquer editor de texto e compilá-lo manualmente, as IDEs oferecem maior produtividade ao combinar ferramentas como editor, compilador, depurador e bibliotecas em um único ambiente. Exemplos populares de IDEs para Java incluem:
- **Netbeans**: Desenvolvido pela Oracle.
- **IntelliJ IDEA**: Criado pela JetBrains.
- **Eclipse**: Originalmente da IBM, agora software livre e amplamente utilizado.

O **Eclipse**, além de ser projetado para Java, suporta diversas outras linguagens por meio de plugins, e pode ser baixado no site oficial: [https://www.eclipse.org](https://www.eclipse.org).

---

### Principais Versões do Java

1. **Java Micro Edition (ME)**:
   - Focado em dispositivos embarcados e sistemas de baixo poder computacional.
   - Importante para soluções relacionadas à Internet das Coisas.

2. **Java Standard Edition (SE)**:
   - Edição padrão, ideal para programas desktop e de console.
   - Inclui o conjunto principal de bibliotecas.

3. **Java Enterprise Edition (EE)**:
   - Edição avançada para soluções empresariais.
   - Equipada com bibliotecas para internet e banco de dados, usada na espinha dorsal de muitas aplicações web.

Para estudos, recomenda-se utilizar as versões **SE** ou **EE**.

---

### Primeiro Código

### Estrutura de Projeto na IDE Eclipse

Os projetos no Eclipse organizam classes e bibliotecas necessárias para o desenvolvimento. Principais componentes:
- **Bibliotecas**: Bytecodes pré-desenvolvidos e testados para reutilização de funcionalidades.
- **Pacotes**: Estruturas que organizam os códigos, semelhantes a diretórios. O pacote principal geralmente segue o formato inverso do domínio da instituição (ex.: `empresa.com` → `com.empresa`).
- **Classes**: Arquivos `.java` que contêm o código.

### Criando um Projeto e Classe no Eclipse

1. **Criar Projeto**:
   - Acesse `File > New Project`.
   - Nomeie o projeto e use as opções padrão.
2. **Criar Classe**:
   - Clique com o botão direito no projeto, selecione `New > Class`.
   - Nomeie a classe e o pacote.
   - Marque a opção `public static void main(String[] args)` para gerar o método principal.

### Estrutura do Primeiro Código

Exemplo inicial de código gerado:

```
package com.empresa;

public class PrimeiraClasse {
    public static void main(String[] args) {
    }
}
```
 Análise Linha por Linha do Código

1. **`package com.empresa;`** 
   - **Descrição**: Define o pacote ao qual a classe pertence. Os pacotes ajudam a organizar o código e evitar conflitos de nomes entre classes de diferentes partes do projeto.  
   - **Exemplo**: O pacote `com.empresa` pode agrupar todas as classes relacionadas a uma aplicação da empresa fictícia.

3. **`public class PrimeiraClasse`**  
   - **Descrição**: Declara a classe pública chamada `PrimeiraClasse`.  
     - `public`: Define que a classe é acessível por outras classes de qualquer pacote.
   - **Nota**: Detalhes sobre classes privadas ou protegidas serão explorados posteriormente.

4. **`public static void main(String[] args) {`**  
   - **Descrição**: Declaração do método principal, ponto de entrada do programa em Java.
     - `public`: O método é acessível publicamente.
     - `static`: Indica que o método pertence à classe e pode ser chamado sem a necessidade de instanciar um objeto.
     - `void`: Especifica que o método não retorna valor.
     - `main`: Nome fixo do método principal em programas Java.
     - `String[] args`: Declaração de um array de objetos da classe `String`. Ele serve para capturar argumentos passados ao programa durante sua execução no console.
   - **Funcionamento do `args`**:  
     - Se o programa for executado via linha de comando, os parâmetros fornecidos serão armazenados no array `args` e poderão ser usados pelo programa.  
     - **Exemplo**: Executar `java PrimeiraClasse Hello` no console colocaria o valor `"Hello"` no primeiro índice do array `args`.
    
As chaves {} são blocos de código, delimitam aonde começa e termina a classe e o método.
Agora vamos inserir o primeiro comando, dentro do código de bloco {} do método main, escreva ```System.out.println("Olá, Mundo!);```:

```
 package com.empresa;

public class PrimeiraClasse {
    public static void main(String[] args) {
      System.out.println("Olá, Mundo!);
    }
}
```

Vá na opção Run/run ou aperte CTRL + F11 para executar o programa.

---

## 05. Visão Geral sobre o Código JAVA

### Entrada e Saída

### Saída de Dados

O Java possui diferentes métodos para exibir mensagens no console:
```
System.out.print("msg1"); // Imprime uma mensagem sem pular linha
System.out.println("msg2"); // Imprime uma mensagem e pula para a próxima linha
System.out.printf("msg3 %d", 10); // Imprime uma mensagem formatada, %d será substituido pelo número 10
```
### Entrada de Dados

Para leitura de dados, é necessário importar a biblioteca java.util.Scanner e utilizar métodos específicos para cada tipo de entrada:

```
package com.empresa;
import java.util.Scanner; // Importação necessária. 1*

public class ExemploLeitura {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in); // Declaração do Scanner. 2*
        System.out.println("Digite sua idade:");
        int idade = teclado.nextInt(); // Lê um número inteiro
    }
}
```
*1 - java.util.Scanner possui as definições da classe Scanner necessárias para a leitura)
*2 - o nome do objeto pode ser qualquer um, aqui foi utilizado "teclado".

---

### Comandos de Desvio

Como outras principais linguagens de programação, utilizamos o comando ```if()``` para desvios no fluxo de execução, ```else if``` e ```else``` também são utilizados no JAVA.
```
if (idade < 10) {
    System.out.println("Criança");
} else if (idade < 18) {
    System.out.println("Adolescente");
} else {
    System.out.println("Adulto");
}
```

O Comando ```switch case``` também está presente, ele permite desviar o fluxo baseado em diferentes casos. Inicialmente a expressão dentro do ```switch``` é avaliada, e depois temos o desvio do código para o ```case``` pertinente ou ```defaut```:
```
switch (expressao) {
    case constante1:
        // Código do caso 1
        break;
    case constante2:
        // Código do caso 2
        break;
    default:
        // Código padrão
}
```

---

### Comandos de Repetição

As estrutura ```while```, ```do-while``` e ```for``` estão presentes também.

Estrutura ```while```
Executa o bloco enquanto a condição for verdadeira:
```
while (condição) {
    // Bloco de código executado
}
```

Estrutura ```do-while```
Executa pelo menos uma vez antes de avaliar a condição:
```
do {
    // Bloco de código executado
} while (condição);
```

Estrutura ```for```
Possui três partes: inicialização, condição e iteração:
```
for (inicialização; condição; iteração) {
    // Bloco de código executado
}
```

### Tipos de Dados

No Java, é necessário declarar uma variável especificando seu tipo antes de utilizá-la. Esse tipo pode ser primitivo, como em outras linguagens de programação, ou não primitivo, como `String`, arrays e classes.

### Primitivos

No Java, os tipos de dados básicos incluem:

| Tipo     | Tamanho   | Descrição                                                                 |
|----------|-----------|---------------------------------------------------------------------------|
| `byte`   | 1 byte    | Números inteiros (-128 até 127)                                           |
| `short`  | 2 bytes   | Números inteiros (-32.768 até 32.767)                                     |
| `int`    | 4 bytes   | Números inteiros (-2.147.483.648 até 2.147.483.647)                       |
| `long`   | 8 bytes   | Números inteiros (-9.223.372.036.854.775.808 até 9.223.372.036.854.775.807) |
| `float`  | 4 bytes   | Armazena números inteiros e fracionários até 6 e 7 dígitos decimais       |
| `double` | 8 bytes   | Armazena números inteiros e fracionários até 15 dígitos decimais          |
| `boolean`| 1 bit     | Armazena apenas 0 ou 1 (false ou true)                                    |
| `char`   | 2 bytes   | Armazena um único caractere, letra ou valores ASCII                       |

---

### Strings

As strings (sequência de caracteres) no Java são representadas pela classe String e oferecem diversos métodos úteis:
```
String msg = "Mario"; // Declaração
msg = "Super " + msg; // Concatenação
int tamanho = msg.length(); // Comprimento da string
msg = msg.toUpperCase(); // Conversão para letras maiúsculas
System.out.println(msg); // Impressão
```

### Arrays

Os arrays são estruturas indexadas semelhantes às listas do Python. São declarados entre ```[]``` e acessados com colchetes indexados por meio do valor zero. Exemplo:
```
String[] nomes = {"Mario", "Luigi", "Peach", "Yoshi"};
nomes[0] = "Bowser"; // Modifica o valor na posição 0
System.out.println(nomes[0]); // Imprime "Bowser"
```
O método length retorna o tamanho do array:
```
System.out.println(nomes.length()); // Retorna 4
```

---

## 06. Classes e Atributos

São os dois conceitos mais importantes da POO (Programação Orientada a Objetos)

### Introdução à Programação Orientada a Objetos (POO)

A Programação Orientada a Objetos (POO) foca em modelar o mundo real dentro do contexto específico de um problema. O principal objetivo é criar uma estrutura simples, com os elementos que realmente importam para a solução. Dentro dessa abordagem, trabalhamos com **objetos** e **classes**.

- **Objetos** representam instâncias de entidades do mundo real ou abstrações. No contexto de um sistema, um objeto pode ser um "carro", "aluno" ou qualquer outra coisa relevante.
- **Classes** são os "planos" que descrevem as características e comportamentos dos objetos. Em outras palavras, uma classe define os atributos e métodos que serão compartilhados por todos os objetos daquela classe.

---

### Exemplo de Corrida de Carros
Vamos imaginar a criação de um jogo de corrida de carros, onde temos várias instâncias de carros competindo. Cada carro, como um objeto, terá características próprias (como cor, velocidade máxima, nível de combustível e localização), mas todos compartilham o mesmo conjunto de atributos definidos pela classe `Carro`. Nesse caso:

- **Classe**: Carro (define atributos como cor, velocidade, etc.)
- **Objeto**: Carro vermelho que está liderando a corrida (um exemplo específico de carro com valores concretos para os atributos).

---

### Aspectos de um Objeto
Cada objeto tem três aspectos principais:
1. **Atributos**: São as variáveis que descrevem as características do objeto.
2. **Métodos**: Funções que descrevem o comportamento do objeto, ou seja, o que ele pode fazer.
3. **Estado**: O valor atual dos atributos que representam o estado do objeto.

---

### A Diferença entre Classes e Objetos
Para simplificar, podemos pensar em **classe** como uma categoria (ex.: Carro) e **objeto** como uma instância dessa categoria (ex.: Carro vermelho, Carro azul). Os métodos de uma classe podem modificar os atributos dos objetos, alterando seu estado.

---

### Classe em Java
Java é uma linguagem orientada a objetos, o que significa que todo código deve estar dentro de uma classe, e as interações entre objetos são feitas por meio de métodos. A convenção é criar um arquivo para cada classe Java.

- **Visibilidade das Classes**: O modificador `public` define que a classe será acessível de fora, enquanto o `class` indica a definição da classe.
- **Método `main`**: Todo programa Java tem um método `main`, onde a execução do código começa.

---

### Exemplo de Código

Considerando um exemplo de um programa com duas classes: `Principal` e `Aluno`, onde a classe `Aluno` possui atributos como `nome`, `matricula`, e `cpf`. O código abaixo exemplifica a criação de objetos e manipulação de seus atributos:

```
public class Principal {
    public static void main(String[] args) {
        Aluno auyber = new Aluno();
        auyber.cpf = "111.111.111-1";
        auyber.nome = "Auyber";
        auyber.matricula = 1001;

        Aluno ash = new Aluno();
        ash.cpf = "222.222.222-2";
        ash.nome = "Ash";
        ash.matricula = 1002;

        Aluno antigo;
        if(auyber.matricula < ash.matricula) {
            antigo = auyber;
        } else {
            antigo = ash;
        }
        System.out.println("Aluno mais antigo: " + antigo.nome);
    }
}
```
---

### Explicação detalhada de como criar o código:

#### Explicação Passo a Passo do Código no Eclipse

Este código simula a criação de dois objetos `Aluno`, atribui valores para as suas propriedades e determina qual aluno tem a matrícula mais antiga. Vamos dividir isso em etapas.

---

### Criar o Projeto no Eclipse

- **Passo 1:** Abra o Eclipse.
- **Passo 2:** Clique em `File > New > Java Project`.
- **Passo 3:** Dê um nome ao projeto, por exemplo, "ProjetoAluno", e clique em `Finish`.

Isso cria um novo projeto Java.

---

### Criar a Classe Principal

- **Passo 1:** No painel esquerdo (Package Explorer), dentro do seu projeto, clique com o botão direito na pasta `src` e selecione `New > Class`.
- **Passo 2:** Dê o nome da classe como `Principal`, marque a opção `public static void main(String[] args)` (isso cria automaticamente o método `main`, onde o código vai rodar), e clique em `Finish`.

Agora você tem uma classe `Principal` com o método `main`.

---

### Criar a Classe `Aluno`

Antes de usarmos a classe `Aluno`, precisamos criá-la.

- **Passo 1:** Clique com o botão direito novamente na pasta `src`, selecione `New > Class`.
- **Passo 2:** Nomeie a classe como `Aluno` e clique em `Finish`.

Agora temos uma classe `Aluno` em que podemos definir propriedades como `cpf`, `nome` e `matricula`.

---

###  Adicionar Propriedades na Classe `Aluno`

Dentro da classe `Aluno`, precisamos definir as variáveis que cada aluno terá:

```
public class Aluno {
    String cpf;
    String nome;
    int matricula;
}
```

Aqui, estamos criando três atributos:

cpf e nome são do tipo String (para armazenar textos).
matricula é do tipo int (para armazenar números inteiros).

---

### Adicionar Código à Classe Principal

Agora que a classe Aluno está pronta, podemos voltar para a classe Principal e escrever o código fornecido.
```
public class Principal {
    public static void main(String[] args) {
        Aluno auyber = new Aluno();
        auyber.cpf = "111.111.111-1";
        auyber.nome = "Auyber";
        auyber.matricula = 1001;

        Aluno ash = new Aluno();
        ash.cpf = "222.222.222-2";
        ash.nome = "Ash";
        ash.matricula = 1002;

        Aluno antigo;
        if(auyber.matricula < ash.matricula) {
            antigo = auyber;
        } else {
            antigo = ash;
        }
        System.out.println("Aluno mais antigo: " + antigo.nome);
    }
}
```

### Passo a Passo:

Criação de objetos Aluno:
```
Aluno auyber = new Aluno();
Aluno ash = new Aluno();
```

Aqui, criamos dois objetos do tipo Aluno: um chamado auyber e outro chamado ash. Cada um desses objetos representa um aluno.

---

Atribuição de valores aos objetos:
```
auyber.cpf = "111.111.111-1";
auyber.nome = "Auyber";
auyber.matricula = 1001;
```

Aqui, estamos atribuindo valores para os atributos de auyber. O cpf recebe um número fictício, o nome recebe "Auyber", e a matricula recebe 1001.

A mesma coisa acontece para o ash, onde são atribuídos os valores "Ash" e 1002.

---

Comparação entre as matrículas:
```
if(auyber.matricula < ash.matricula) {
    antigo = auyber;
} else {
    antigo = ash;
}
```

Aqui, comparamos as matrículas de auyber e ash. Se a matrícula de auyber for menor que a de ash, isso significa que ele é o aluno mais antigo, então o objeto antigo recebe auyber. Caso contrário, antigo recebe ash.

---

Impressão do aluno mais antigo:
```
System.out.println("Aluno mais antigo: " + antigo.nome);
```

Finalmente, o nome do aluno mais antigo é impresso na tela. Como a matrícula de Auyber (1001) é menor que a de Ash (1002), a mensagem será:
```
Aluno mais antigo: Auyber
```

---

### Executar o Código

Passo 1: Após digitar o código, clique com o botão direito na classe Principal no painel esquerdo.
Passo 2: Selecione Run As > Java Application.
Isso fará o Eclipse compilar e executar o código. Você verá a saída no console do Eclipse, que será:
```
Aluno mais antigo: Auyber
```

---

## 07. Métodos

Em Programação Orientada a Objetos (POO), os **métodos** representam as ações ou comportamentos que podem ser executados por objetos de uma determinada classe. Eles são fundamentais para que os objetos interajam com outros objetos ou com o próprio sistema. De forma similar às funções na programação estruturada, métodos são blocos de código que são executados apenas quando são chamados.

### Diferença entre Métodos e Funções

A principal diferença entre métodos e funções é que os **métodos** estão sempre associados a um objeto e, portanto, podem acessar diretamente os dados internos desse objeto. Já as funções são independentes de objetos e, normalmente, não acessam atributos de objetos, a não ser que explicitamente fornecidos como parâmetros.

### Exemplo de Implementação de Métodos

Vamos usar a classe **Aluno** como exemplo. A classe pode ter um método chamado `info()`, que imprime as informações do aluno:

```
public class Aluno {
    String nome;
    int matricula;
    String cpf;

    public void info() {
        System.out.println("nome: " + nome);
        System.out.println("matricula: " + matricula);
        System.out.println("cpf: " + cpf);
    }
}
```
No código acima, o método info() acessa os atributos da classe Aluno e imprime suas informações. O que define qual aluno terá os atributos acessados é o objeto que chama o método. Por exemplo, se o objeto mario chamar info(), ele acessará os atributos de Mario; já se for o objeto luigi, o método acessará os dados de Luigi.

---

### Exemplo Prático

No código abaixo, instanciamos dois objetos da classe Aluno:
```
Aluno auyber = new Aluno();
auyber.cpf = "111.111.111-1";
auyber.nome = "Auyber";
auyber.matricula = 1001;

Aluno ash = new Aluno();
ash.cpf = "222.222.222-2";
ash.nome = "Ash";
ash.matricula = 1002;

auyber.info();
ash.info();
```
Aqui, o método info() acessa e imprime as informações específicas de cada objeto (auyber ou ash) quando chamado.

---

### Exercícios

### Classe Nota

A classe `Nota` deve conter três atributos representando as notas de um aluno: `nota1`, `nota2` e `nota3`, do tipo real. Além disso, ela precisa ter dois métodos:

- **Média Aritmética**: Calcula e retorna a média simples das três notas.
- **Média Ponderada**: Calcula e retorna a média ponderada, levando em consideração os pesos 2, 3 e 4 para as respectivas notas.

Resolução:
```
public class Media {
    float n1, n2, n3;

    float aritmetica() {
        return (n1 + n2 + n3) / 3;
    }

    float ponderada() {
        // na media ponderada cada nota é multiplicada
        // pelo peso e depois dividida pela soma dos pesos.
        return (n1 * 2 + n2 * 3 + n3 * 4) / 9;
    }
}
```
E na classe com o método main para testar:
```
public static void main(String[] args) {
    Media mario = new Media();
    // letra f garante que o número será interpretado
    // como float
    mario.n1 = 9f;
    mario.n2 = 7f;
    mario.n3 = 8.5f;

    float resultado = mario.aritmetica();
    System.out.println("Aritmetica: " + resultado);
    resultado = mario.ponderada();
    System.out.println("Ponderada: " + resultado);
}
```

### Classe Conta

A classe `Conta` deve representar uma conta bancária e possuir os seguintes atributos:

- **String correntista**: Nome do titular da conta.
- **float saldo**: Saldo disponível na conta.
- **float limiteSaque**: Limite para saques.

A classe também deve ter os seguintes métodos:

- **sacar(float valor)**: Realiza o saque do valor especificado, desde que seja possível realizar a operação (saldo suficiente e dentro do limite de saque).
- **depositar(float valor)**: Realiza o depósito do valor especificado.
- **info()**: Exibe as informações da conta, como nome do correntista, saldo e limite de saque.

### Método de Transferência

Para completar a classe `Conta`, é necessário implementar o método `transferir(Conta destino, float valor)`. Esse método realiza a transferência de um valor especificado de uma conta para outra. A operação só é realizada se a conta de origem tiver saldo suficiente para a transferência.

Resolução abaixo serve para Classe Conta e Médoto de Transferência
```
public class Conta {
    String correntista;
    float saldo;
    float limiteSaque;

    void sacar(float valor) {
        // verificação do saque
        if (valor > saldo || valor > limiteSaque) {
            System.out.println("Saque não permitido");
        }
        saldo -= valor;
    }

    void depositar(float valor) {
        saldo += valor;
    }

    void info() {
        System.out.println("Nome: " + correntista);
        System.out.println("Saldo: " + saldo);
        System.out.println("Limite: " + limiteSaque);
    }

    void transferir(Conta outra, float valor) {
        if (valor > saldo || valor > limiteSaque) {
            System.out.println("Transferência não permitida");
        }
        saldo -= valor;
        outra.saldo += valor;
    }
}
```
Na main para testar o código:
```
Conta auyber = new Conta();
Conta tioPatinhas = new Conta();

auyber.correntista = "Auyber";
auyber.saldo = 1000;
auyber.limiteSaque = 200;

tioPatinhas.correntista = "Tio Patinhas";
tioPatinhas.saldo = 2000;
tioPatinhas.limiteSaque = 200;

auyber.transferir(tioPatinhas, 150);
auyber.info();
tioPatinhas.info();
```
---

## 08. Padrões e Modificadores Static em Java

### Padrões de Nomenclatura

Embora o Java não imponha um padrão de nomenclatura específico, a comunidade de desenvolvedores adota algumas convenções amplamente aceitas. Essas convenções garantem maior clareza e consistência no código, facilitando a leitura e colaboração entre diferentes programadores e equipes.

---

### Camel Case

O principal padrão de nomenclatura utilizado é o **Camel Case**, onde palavras compostas são escritas sem espaços ou underscores, e a primeira letra de cada palavra, exceto a primeira, é maiúscula. Esse padrão é amplamente usado para variáveis, métodos e classes. A nomenclatura Camel Case ajuda a distinguir as palavras em um identificador, assemelhando-se às corcovas de um camelo.

Exemplos:
- Variáveis: `nomeCompleto`
- Métodos: `calcularTotal`
- Classes: `Aluno`
- Pacotes: `com.empresa`
- Constantes: `VALOR_PI` (letras maiúsculas com underscores)

---

### Modificador Static

O modificador `static` em Java é usado para declarar métodos ou atributos que podem ser acessados de forma independente das instâncias da classe. Ou seja, eles não dependem da criação de objetos para serem chamados, podendo ser acessados diretamente pela classe.

---

### Atributos Estáticos

Quando um atributo é declarado como `static`, ele se torna comum a todas as instâncias da classe, funcionando como uma variável global para todos os objetos. Esse tipo de atributo mantém o mesmo valor independentemente do número de instâncias criadas. No exemplo de incremento, o atributo `numeroEstatico` é compartilhado entre todas as instâncias, enquanto `numeroComum` é exclusivo de cada instância.
```
public class Exemplo {
    static int numeroEstatico = 0;
    int numeroComum = 0;

    public void incremento() {
        numeroComum++;
        numeroEstatico++;
        System.out.println("numeroComum: " + numeroComum);
        System.out.println("numeroEstatico: " + numeroEstatico);
    }
}
```

---

### Métodos Estáticos

Métodos estáticos, assim como atributos, não dependem de uma instância da classe para serem acessados. Eles podem ser chamados diretamente pela classe, sem a necessidade de instanciar um objeto. O método `main` que inicia a execução de um programa Java é um exemplo de método estático.

Exemplo de método estático:
```
public class Aritmetica {
    static public int somar(int a, int b) {
        return a + b;
    }
}
```
---

## 09. Interação entre Objetos

Neste tema, o foco é a interação entre objetos no contexto da Programação Orientada a Objetos (POO), onde as classes representam entidades do mundo real e suas interações são fundamentais para a solução de problemas.

### UML e Representação Gráfica

A **Unified Modeling Language (UML)** é uma ferramenta essencial para representar graficamente as classes e suas relações. A UML facilita a documentação de projetos, principalmente os de grande escala, e é crucial na etapa de projeto, permitindo visualizar a estrutura do sistema sem a necessidade de implementação imediata.

Na UML, o **diagrama de classes** é uma das representações mais comuns. Ele exibe as classes como retângulos divididos em três áreas: o nome da classe, os atributos e os métodos. Abaixo está um exemplo de como uma classe `Aluno` poderia ser representada:

+---------------+ | Aluno | +---------------+ | - nome | | - idade | +---------------+ | + info() | +---------------+

---

### Relação entre Classes: Exemplo de `Turma`

Para exemplificar a interação entre objetos, consideramos a classe `Turma`, que contém atributos como uma lista de alunos e um orientador, além de um método para adicionar alunos à turma.

```
package com.empresa;
import java.util.ArrayList;

public class Turma {
    ArrayList<Aluno> listaAlunos = new ArrayList();
    Professor orientador;
    String sala;

    void adicionarAluno(Aluno aluno) {
        listaAlunos.add(aluno);
    }
}
```

---

### Atributos da Classe Turma:

- ```ArrayList<Aluno>``` listaAlunos: Representa a lista de alunos, utilizando a classe ```ArrayList```, que facilita a manipulação dinâmica de elementos.
- ```Professor orientador```: Um objeto da classe ```Professor```, representando o professor responsável pela turma.
- ```String sala```: Representa a sala onde a turma ocorre.
A classe ```Turma``` interage com outras classes, como a Aluno e a Professor, utilizando objetos desses tipos como atributos.

---

### Classe Professor

A classe Professor possui informações como nome, formação e número de cadastro. Um exemplo simples desta classe seria:
```
public class Professor {
    String nome;
    String formacao;
    int cadastro;

    void info() {
        // Exibe informações do professor
    }
}
```
---

### Método `adicionarAluno`

O método `adicionarAluno` da classe `Turma` é utilizado para adicionar um aluno à lista de alunos. Ele faz uso do método `add()` da classe `ArrayList`, o qual é uma maneira eficiente de manipular listas em Java. Esse método automaticamente gerencia a alocação de memória conforme necessário, o que facilita a expansão da lista sem necessidade de intervenção manual do programador.

### Relacionamento entre as Classes

A UML é uma ferramenta essencial para entender como as classes estão relacionadas. No contexto da classe `Turma`, ela possui um relacionamento de **composição** com as classes `Aluno` e `Professor`. A composição é uma relação onde a vida útil dos objetos `Aluno` e `Professor` depende diretamente da classe `Turma`.

- **0..1**: Significa que uma turma pode ter no máximo um orientador, ou seja, um único professor pode ser designado para a turma.
- **0..***: Indica que uma turma pode ter múltiplos alunos, permitindo uma quantidade variável de estudantes matriculados.

Esse tipo de relacionamento reflete uma organização natural do mundo real, onde uma turma é composta por vários alunos e, no máximo, um orientador. Esse modelo facilita a compreensão e organização dos dados dentro do sistema.

---

## 10. Construtores em Java

No Java, quando instanciamos um objeto, um bloco de código chamado **construtor** é executado automaticamente. Esse bloco é usado para inicializar os atributos do objeto e garantir que ele esteja pronto para ser utilizado. Em geral, o objetivo principal de um construtor é atribuir valores iniciais aos atributos da classe no momento em que o objeto é criado.

---

```
public class Aluno {
    String nome;
    int matricula;
    String cpf;

    // Construtor com 3 parâmetros
    Aluno(String nome, int matricula, String cpf) {
        this.nome = nome;
        this.matricula = matricula;
        this.cpf = cpf;
    }

    // Construtor com 1 parâmetro (nome)
    Aluno(String nome) {
        this.nome = nome;
    }

    // Construtor sem parâmetros
    Aluno() {
        System.out.println("Construtor sem parâmetro");
    }
}
```

### Explicação dos Construtores

### Construtor com 3 parâmetros

O primeiro construtor é responsável por inicializar os atributos `nome`, `matricula` e `cpf` da classe `Aluno`. Esse construtor recebe três valores e os atribui diretamente aos atributos da classe. A palavra-chave `this` é usada para referir-se aos atributos da classe, diferenciando-os dos parâmetros do construtor.

Exemplo de instância:
```
Aluno mario = new Aluno("Super Mario", 1001, "111.111.111-1");
```
Nesse exemplo, os atributos do objeto ```mario``` são inicializados com os valores fornecidos diretamente no momento da criação do objeto.

---

### Construtor com 1 parâmetro (nome)

O segundo construtor recebe apenas um parâmetro, ```nome```, e inicializa apenas o atributo ```nome``` da classe. Os atributos ```matricula``` e ```cpf``` são ignorados e ficam com seus valores padrão (```0``` para ```int``` e ```null``` para ```String```).

Exemplo de instância:
```
Aluno luigi = new Aluno("Super Luigi");
```
Neste caso, apenas o atributo ```nome``` é atribuído com o valor ```"Super Luigi"```, e os outros atributos permanecem inalterados.

---

### Construtor sem parâmetros

O terceiro construtor não recebe nenhum parâmetro e simplesmente imprime uma mensagem indicando que foi chamado. Esse tipo de construtor pode ser útil para criar objetos sem a necessidade de fornecer valores iniciais para os atributos.

Exemplo de instância:
```
Aluno yoshi = new Aluno();
```
Aqui, o construtor sem parâmetros é invocado, e a mensagem ```"Construtor sem parâmetro"``` é exibida. Esse tipo de construtor é útil quando queremos criar um objeto sem especificar dados iniciais.

---

### Construtores Implícitos e Explícitos

Ao criar qualquer tipo de construtor na classe, o construtor padrão (sem parâmetros) é substituído. Isso significa que, se você definir um construtor com parâmetros e tentar instanciar um objeto sem parâmetros, ocorrerá um erro. Porém, se todos os construtores definidos forem removidos, o Java criará automaticamente o construtor vazio (sem parâmetros).

---

### Exercício: Classe Horario

Agora, crie uma classe ```Horario```, que tem os atributos ```hora```, ```minuto``` e ```segundo```. A classe deve ter três construtores: um que recebe três parâmetros, outro que recebe apenas a hora e um construtor vazio. Também será realizada a validação dos valores para garantir que hora, minuto e segundo estejam dentro de intervalos válidos (hora entre 0 e 23, minutos e segundos entre 0 e 59). Se os valores forem inválidos, eles são ajustados para zero, e uma mensagem de erro é exibida.

Resolução:

```
public class Horario {
    int hora, minuto, segundo;

    public Horario(int hora, int minuto, int segundo) {
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }

    public Horario(int hora) {
        this.hora = hora;
    }

    public Horario() {
    }
}

```

---




