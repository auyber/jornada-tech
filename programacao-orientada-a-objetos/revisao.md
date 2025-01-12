# Programação Orientada a Objetos (POO)

## Introdução

Este resumo aborda conceitos essenciais da programação orientada a objetos em Java, incluindo métodos especiais como toString() e o padrão Singleton. Explora tópicos como encapsulamento, herança, polimorfismo, exceções e coleções, oferecendo uma visão prática das melhores práticas para desenvolver sistemas eficientes e bem estruturados em Java.

---

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
- [11. Encapsulamento](#11-encapsulamento)
- [12. Collections](#12-collections)
- [13. Iterator](#13-iterator)
- [14. Classe LocalDate](#14-classe-localdate)
- [15. Herança](#15-herança)
- [16. Herança na Linguagem JAVA](#16-herança-na-linguagem-java)
- [17. Construtores e Herança](#17-construtores-e-herança)
- [18. Polimorfismo](#18-polimorfismo)
- [19. Polimorfismo na Linguagem Java](#19-polimorfismo-na-linguagem-java)
- [20. Classe Abstrata](#20-classe-abstrata)
- [21. Interface](#21-interface)
- [22. Enum](#22-enum)
- [23. Tratamento de Exceções em Java](#23-tratamento-de-exceções-em-java)
- [24. Criando as Próprias Exceções](#24-criando-as-próprias-exceções)
- [25. Métodos Especiais: Tostring](#25-métodos-especiais-tostring)
- [26. Modificadores JAVA (SINGLETON)](#26-modificadores-java-singleton)


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

## 10. Visibilidade

A visibilidade em Orientação a Objetos define quais classes podem acessar atributos e métodos de outras classes, utilizando modificadores como `public`, `protected` e `private`. Essa prática organiza e protege o acesso aos dados, além de simplificar o uso das classes, escondendo informações irrelevantes ou sensíveis.

---

### Modificadores de Visibilidade

1. **`public`**: Permite acesso irrestrito de qualquer classe.
2. **`private`**: Restringe o acesso somente à classe em que foi definido.
3. **`protected`**: Disponibiliza acesso para classes no mesmo pacote e suas subclasses.
4. **Default (sem modificador)**: Permite acesso apenas dentro do mesmo pacote.

---

### Tabela de Acessos

| Visibilidade        | Mesma Classe | Mesmo Pacote | Subclasses no Mesmo Pacote | Subclasses em Outros Pacotes | Outros Pacotes |
|---------------------|--------------|--------------|----------------------------|------------------------------|----------------|
| **Public**          | ✅           | ✅           | ✅                         | ✅                           | ✅             |
| **Protected**       | ✅           | ✅           | ✅                         | ✅                           | ❌             |
| **Default**         | ✅           | ✅           | ✅                         | ❌                           | ❌             |
| **Private**         | ✅           | ❌           | ❌                         | ❌                           | ❌             |

---

## Exemplo de Código

```
public class Aluno {
    private int matricula;         // Apenas a classe Aluno pode acessar
    protected int notas[];         // Classes no mesmo pacote ou subclasses podem acessar
    public String cpf;             // Acessível por qualquer classe
    public String nome;            // Acessível por qualquer classe

    // Construtor para inicializar atributos
    public Aluno(String nome, String cpf) {
        this.nome = nome;
        this.cpf = cpf;
        this.matricula = Cadastro.gerarNovaMatricula();
    }

    // Método para cadastrar notas
    public void cadastrarNotas() {
        // Código de cadastro
    }

    // Método para calcular a média das notas
    public int mediaNotas() {
        // Código para cálculo da média
        return 0; // Exemplo
    }
}
```

---

Explicação do Código

### Atributos:

- **`matricula`**:  
  Definido como `private` para uso interno, como no gerenciamento em um banco de dados.

- **`notas`**:  
  Definido como `protected`, permitindo acesso por classes relacionadas.

- **`cpf` e `nome`**:  
  Definidos como `public` para interação direta com outras classes.

### Construtor:
Inicializa os atributos `nome` e `cpf` e gera uma nova matrícula utilizando um método externo.

---

### Visibilidade no Diagrama UML

No diagrama UML, a visibilidade é representada por símbolos:

- `+`: Público (`public`)
- `-`: Privado (`private`)
- `#`: Protegido (`protected`)

### Representação UML

### Classe `Aluno`

+---------------------+
|        Aluno        |
+---------------------+
| - matricula: int    |
| # notas: int[]      |
| + cpf: String       |
| + nome: String      |
+---------------------+
| + Aluno(nome, cpf)  |
| + cadastrarNotas()  |
| + mediaNotas(): int |
+---------------------+

---

## 11. Encapsulamento

O paradigma da programação orientada a objetos baseia-se em três pilares fundamentais: herança, polimorfismo e encapsulamento. Alguns autores consideram a abstração como um quarto pilar, mas ela também pode ser vista como parte do conceito de encapsulamento. Neste tópico, exploraremos os benefícios e as boas práticas associadas a essa característica.

---

### Conceito de Encapsulamento

Encapsulamento consiste em proteger os componentes internos de uma classe, restringindo seu acesso direto e expondo apenas os elementos essenciais por meio de modificadores de acesso (`public`, `private` e `protected`). Essa prática:

- Protege o conteúdo interno da classe contra manipulação inadequada.
- Simplifica a interação entre objetos, ocultando detalhes desnecessários para o programador que utiliza a classe.
- Oferece uma camada de segurança ao sistema.

#### Analogias do Mundo Real

Um exemplo prático é o monitor de um computador:
- Seus componentes internos são protegidos por uma estrutura externa que impede danos ou descargas elétricas, funcionando como uma barreira de encapsulamento.
- A conexão HDMI, por outro lado, representa a interface que possibilita a comunicação entre o monitor e outros dispositivos.

No contexto da programação, métodos e atributos de uma classe desempenham papéis equivalentes, expondo apenas o que é necessário enquanto mantêm os detalhes internos ocultos.

---

### Benefícios do Encapsulamento

1. **Abstração**: Oculta os detalhes internos da classe, expondo apenas o que é essencial.
2. **Flexibilidade para Atualizações**: Mudanças internas podem ser realizadas sem impactar o funcionamento do sistema, desde que a interface seja mantida.
3. **Simplificação do Uso**: Facilita a interação com objetos em níveis mais altos de abstração, acelerando o desenvolvimento.
4. **Robustez**: Permite a substituição de implementações internas, inclusive por equipes independentes, desde que a interface permaneça consistente.

---

## Exemplo Prático: Getters e Setters

### Descrição
Métodos do tipo *getter* e *setter* são amplamente utilizados para implementar o encapsulamento. Eles permitem acessar e modificar os atributos privados de uma classe de forma controlada, garantindo a integridade dos dados.

### Exemplo em Java

```
public class Horario {
    private int hora;
    private int minuto;
    private int segundo;

    // Setter com validação
    public void setHora(int h) {
        if (h < 0 || h > 23) {
            System.out.println("Valor inválido");
        } else {
            hora = h;
        }
    }

    // Getter
    public int getHora() {
        return hora;
    }
}
```
Explicação

### Privacidade

- Os atributos `hora`, `minuto` e `segundo` são declarados como **privados** para evitar acesso direto, garantindo que apenas métodos específicos possam interagir com eles.

### Validação

- O método `setHora` valida os valores recebidos, impedindo que números fora do intervalo permitido (0-23) sejam atribuídos ao atributo `hora`. Isso preserva a **consistência dos dados**.

### Nomenclatura Padrão

- Métodos como `getHora` e `setHora` seguem uma convenção amplamente reconhecida pela comunidade, o que facilita a leitura, manutenção e colaboração no desenvolvimento de sistemas.

---

### Comparação com o Mundo Real

- Assim como a troca de um monitor depende apenas de uma **interface compatível** (como um cabo HDMI), uma classe em um sistema pode ser substituída por outra, desde que mantenha a mesma interface. Isso garante flexibilidade e continuidade no funcionamento do sistema.

---

### Resumo

1. **Encapsulamento**:
   - Protege os dados internos das classes, expondo apenas o necessário para o funcionamento externo.
2. **Segurança e Flexibilidade**:
   - Implementações podem ser alteradas sem afetar outras partes do sistema, desde que a interface permaneça inalterada.
3. **Validação e Controle**:
   - Métodos como *getters* e *setters* permitem controlar o acesso aos dados e realizar validações necessárias.

---

## 12. Collections

A **API Collections** do Java oferece uma variedade de classes que implementam diferentes estruturas de dados, facilitando a organização de informações na memória. Essa API encapsula as estruturas por meio de interfaces, garantindo uniformidade e simplicidade no uso.

### Estruturas de Dados na Collections

Estruturas de dados são estratégias para organizar dados na memória. Além de arrays e matrizes, outras estruturas, como pilha, fila, hash e árvores, possuem implementações na API Collections. O uso correto dessas estruturas pode otimizar significativamente a eficiência dos algoritmos.

### Principais Grupos e Classes

1. **List**: Sequência ordenada de elementos.
   - **ArrayList**: Array dinâmico com ordem definida, ideal para buscas frequentes.
   - **LinkedList**: Implementação baseada em lista ligada, com inserções e remoções rápidas.

2. **Set**: Conjunto de elementos sem ordem.
   - **HashSet**: Estrutura baseada em hash para operações rápidas.
   - **LinkedHashSet**: Similar ao `HashSet`, mas mantém a ordem de inserção.

3. **Map**: Estrutura de chave-valor.
   - **HashMap**: Mapeia chaves para valores sem ordem definida.
   - **TreeMap**: Similar ao `HashMap`, mas mantém os elementos ordenados.
   - **LinkedHashMap**: Variante que preserva a ordem de inserção.

4. **Queue**: Representa filas com prioridades definidas.
   - **PriorityQueue**: Armazena elementos com base na prioridade.
   - **Stack**: Pilha onde o último elemento inserido é o primeiro a ser tratado.

---

### Exemplos de Uso

### ArrayList e LinkedList
```
ArrayList<String> pessoas = new ArrayList<>();
// LinkedList<String> pessoas = new LinkedList<>();
pessoas.add("Mario");
pessoas.add("Luigi");
pessoas.add("Peach");
System.out.println(pessoas); // Lista elementos
pessoas.remove(2); // Remove índice 2
pessoas.clear(); // Remove todos os elementos
```
---

### HashMap
```
HashMap<String, String> capitais = new HashMap<>();
capitais.put("Brasil", "Brasília");
System.out.println(capitais.get("Brasil")); // Retorna "Brasília"
```
---

### HashSet
```
HashSet<String> nomes = new HashSet<>();
nomes.add("Mario");
nomes.add("Luigi");
System.out.println(nomes.contains("Luigi")); // Verifica presença
```
---

### PriorityQueue
```
PriorityQueue<Integer> fila = new PriorityQueue<>();
fila.add(10);
fila.add(20);
System.out.println(fila.poll()); // Remove e retorna menor elemento
```
---

### Métodos Estáticos da Classe `Collections`

A classe `Collections` oferece métodos úteis para manipular coleções. Alguns exemplos:

- **`sort(List<> lista)`**: Ordena os elementos em ordem crescente.
- **`shuffle(List<> lista, Random rnd)`**: Embaralha os elementos da lista.
- **`max(Collection<> coll)`**: Retorna o maior elemento da coleção.
- **`reverse(List<> lista)`**: Inverte a ordem dos elementos da lista.

---

Exemplo de Uso

```
import java.util.ArrayList;
import java.util.Collections;

public class ExemploCollections {
    public static void main(String[] args) {
        ArrayList<String> lista = new ArrayList<>();
        lista.add("Mario");
        lista.add("Peach");

        //Imprime a lista na ordem original
        System.out.println(lista);

        //Coloca lista em uma ordem aleatória
        Collections.shuffle(lista);
        System.out.println(lista);

        //Coloca lista em uma ordem alfabética
        Collections.sort(lista);
        System.out.println(lista);

        //Inverte a ordem anterior da lista
        Collections.reverse(lista);
        System.out.println(lista);

        //Maior elemento alfabético
        System.out.println("Maior: "+ Collections.max(lista)); 

        //Menor elemento alfabético
        System.out.println("Menor: "+Collections.min(lista));

        // Embaralha a lista
        Collections.shuffle(lista);
        
        // Ordena a lista em ordem crescente
        Collections.sort(lista);
        
        // Retorna o maior elemento da lista
        System.out.println(Collections.max(lista));
    }
}
```

---

## 13. Iterator

## O que é um Iterator?

O **Iterator** é uma ferramenta poderosa do Java que permite percorrer elementos de coleções de dados de forma uniforme, independente do tipo de estrutura usada (List, Set, Map, etc.). Ele é especialmente útil quando queremos manipular dados em estruturas sem índices, como `Set`.

---

### Métodos Principais do Iterator

1. **`hasNext()`**:
   - Verifica se há mais elementos para percorrer.
   - Retorna `true` ou `false`.

2. **`next()`**:
   - Avança para o próximo elemento e o retorna.

3. **`remove()`**:
   - Remove o último elemento retornado pelo método `next()`.

---

### Comparação de Formas de Iteração

### Usando `for` Tradicional
```
int soma = 0;
for (int i = 0; i < lista.size(); i++) {
    soma += lista.get(i);
}
```
- Utiliza índices inteiros para acessar elementos.
- Não funciona com estruturas como ```Set``` ou ```Map```.

---

### Usando ```for-each```
```
int soma = 0;
for (int item : lista) {
    soma += item;
}
```
- Simplifica o código e funciona com várias coleções.
- Limitação: não permite operações como remoção durante a iteração.

---

Usando ```Iterator```
```
Iterator<Integer> it = lista.iterator();
int soma = 0;
while (it.hasNext()) {
    soma += it.next();
}
```
- Funciona com diferentes tipos de coleções (```List```, ```Set```, ```Map```).
- Permite manipulações avançadas, como remoção.

---

### ListIterator: Iteração Reversa

O ListIterator é uma extensão do Iterator e permite navegar pelos elementos de forma reversa. Ele funciona exclusivamente com listas, pois depende da ordem sequencial dos elementos.

Exemplo
```
ListIterator<String> it = lista.listIterator(lista.size());
while (it.hasPrevious()) {
    System.out.println(it.previous());
}
```
- ```hasPrevious()```: Verifica se há elementos anteriores.
- ```previous()```: Retorna o elemento anterior.

---

Exemplo: Removendo Elementos com Iterator
```
ArrayList<String> lista = new ArrayList<>();
lista.add("Maçã");
lista.add("Laranja");
lista.add("Pêssego");

Iterator<String> it = lista.iterator();
while (it.hasNext()) {
    String fruta = it.next();
    if (fruta.equals("Laranja")) {
        it.remove();
        System.out.println("Laranja removida");
    }
}
System.out.println(lista);
```
- O método ```remove()``` é usado para excluir o elemento que o ```Iterator``` está apontando.
- Isso evita erros como ```ConcurrentModificationException```, que ocorrem ao tentar remover elementos diretamente durante um loop.

---

## 14. Classe LocalDate

### Desafios no Tratamento de Datas e Horários em Java

Ao desenvolver projetos que envolvem a manipulação de datas e horários, especialmente em sistemas que se conectam a bancos de dados ou interfaces web, surge a necessidade de representar e trabalhar com essas informações de maneira precisa. O Java oferece diversas soluções internas para esse problema. Este tema foca nas soluções de datas a partir da versão 8, com a introdução da classe `LocalDate`.

---

### A Evolução da Classe `Date`

Nas primeiras versões do Java, o tratamento de datas era feito pela classe `java.util.Date`, que possuía várias limitações, dificultando seu uso em muitas situações. Para contornar essas falhas, foi criada a classe `java.util.Calendar`, mas essa também não conseguiu resolver todos os problemas. Como resultado, a biblioteca externa **Joda-Time** se tornou muito popular. A Oracle, percebendo a popularidade do Joda-Time, incorporou uma versão melhorada dessa biblioteca no Java 8, resultando na classe `java.time.LocalDate` (e suas variantes).

A recomendação para projetos em Java 8 e versões posteriores é utilizar `LocalDate`, enquanto, para versões anteriores, pode-se recorrer ao Joda-Time.

---

### Exemplo de Uso da Classe `LocalDate`

A classe `LocalDate` facilita a manipulação de datas de maneira simples. Abaixo está um exemplo básico de como capturar e formatar a data atual:

```
public static void main(String[] args) {
    // Captura a data de hoje
    LocalDate dataHoje = LocalDate.now();
    System.out.println("Original: " + dataHoje);
    
    DateTimeFormatter formatador = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    String dataFormatada = dataHoje.format(formatador);
    System.out.println("Formatado : " + dataFormatada);
}
```
Neste código, o método LocalDate.now() obtém a data atual. Quando imprimimos a data, o formato padrão é o americano (YYYY-MM-DD). Para formatá-la de maneira mais comum no Brasil (DD/MM/YYYY), utilizamos a classe DateTimeFormatter com o padrão "dd/MM/yyyy".

A estrutura de formatação de datas pode incluir vários símbolos, cada um com um significado específico:

- dd: dia do mês (dois dígitos);
- MM: mês (dois dígitos);
- yyyy: ano (quatro dígitos);
- HH: hora (24h, dois dígitos);
- mm: minutos (dois dígitos);
- ss: segundos (dois dígitos);

Outros padrões como d, M, yy, H, h, etc., são usados para representar valores em formatos mais flexíveis.

---

### Trabalhando com Horários

O processo de formatação de horários segue uma lógica similar ao de datas, mas com algumas diferenças nos padrões de formatação. O exemplo a seguir mostra como capturar e formatar o horário atual:
```
public static void main(String[] args) {
    // Obtém LocalDateTime com o horário atual
    LocalDateTime horario = LocalDateTime.now();
    System.out.println("LocalDateTime antes: " + horario);
    
    DateTimeFormatter formatador = DateTimeFormatter.ofPattern("HH:mm:ss");
    String horarioFormatado = horario.format(formatador);
    System.out.println("LocalDateTime depois: " + horarioFormatado);
}
```
Aqui, ```LocalDateTime.now()``` captura a data e o horário atuais, e o formato ```"HH:mm:ss"``` é utilizado para mostrar o horário no formato de 24 horas.

---

## 15. Herança

Exploraremos o princípio da herança, um dos pilares fundamentais do paradigma de programação orientada a objetos.

É comum enfrentarmos situações onde precisamos modelar classes com características semelhantes, e uma dessas classes pode ser considerada uma extensão de outra. A herança facilita essa representação, permitindo que uma classe (filha) herde comportamentos (métodos) e atributos (características) de outra classe (mãe). Um exemplo do mundo real seria a herança genética: de nossos pais, herdamos características que influenciam quem somos e o que conseguimos fazer, mas também possuímos traços únicos. A herança na programação segue essa mesma lógica, possibilitando que uma classe filha tenha suas próprias particularidades, além dos atributos herdados da classe mãe.

Em termos práticos, a classe herdeira pode expandir as funcionalidades da classe original e até modificar algumas dessas funcionalidades, adaptando-as conforme necessário. Esse mecanismo nos permite organizar as classes de forma hierárquica, como ilustrado no exemplo a seguir:

### Exemplo de Hierarquia de Classes

Na parte superior da hierarquia, encontramos classes mais genéricas, enquanto as classes mais específicas ficam abaixo, herdando características, comportamentos e até o tipo da classe superior. Por exemplo, um celular é um tipo específico de telefone, que por sua vez, é um tipo de dispositivo eletrônico.

### Termos Usados para Descrever a Relação entre Classes

Na literatura, diversos termos são utilizados para se referir às classes envolvidas na herança. Embora esses termos possam ter significados contextuais diferentes, eles representam a mesma relação hierárquica. Confira algumas das nomenclaturas comuns:

| **Classe Herdada**   | **Classe Herdeira**   |
|----------------------|-----------------------|
| Classe mãe           | Classe filha          |
| Superclasse          | Subclasse             |
| Classe base          | Classe específica     |
| Classe original      | Classe derivada       |

Cada um desses termos pode ser utilizado para dar uma nuance diferente ao contexto de uma aplicação, mas o conceito de herança e sua estrutura hierárquica permanecem consistentes.

---

## 16. Herança na Linguagem JAVA

Neste tópico, vamos explorar como a herança é implementada na linguagem Java, analisando exemplos práticos.

### Exemplo Inicial de Classe `Livro`

Imaginemos que estamos criando um sistema para registrar livros em um site de vendas. Para isso, temos a classe `Livro`, que possui atributos como autor, custo de produção, preço de venda, título e número de páginas. Além disso, a classe possui três métodos:

- **lucro()**: Calcula o lucro do livro, subtraindo o custo de produção do preço de venda.
- **imposto()**: Calcula o imposto de 20% sobre o lucro.
- **imprimirTitulo()**: Imprime o título do livro.

```
public class Livro {
    public String autor;
    public float custoProducao;
    public float precoVenda;
    public String titulo;
    public int paginas;

    public float lucro() {
        return (precoVenda - custoProducao);
    }

    public float imposto() {
        return (0.2f * this.lucro());
    }

    public void imprimirTitulo() {
        System.out.print("O titulo: " + titulo);
    }
}
```

---

### A Necessidade de Extensão: Livro Físico e Digital

Agora, imagine que nossa loja virtual começa a vender dois tipos de livros: físicos e digitais. Ambos os livros compartilham atributos comuns, mas os livros digitais têm características exclusivas, como um link para download e o tamanho do arquivo. Para lidar com isso, criamos uma nova classe ```LivroDigital```, que possui todos os atributos da classe ```Livro```, além de atributos exclusivos, como ```linkDownload``` e ```tamanhoMB```. A classe também redefine o método ```imposto()``` e adiciona um novo método, ```tamanhoPorPagina()```.
```
public class LivroDigital {
    public String autor;
    public float custoProducao;
    public float precoVenda;
    public String titulo;
    public int paginas;
    public String linkDownload;
    public int tamanhoMB;

    public float lucro() {
        return (precoVenda - custoProducao);
    }

    public float tamanhoPorPagina() {
        return ((float)tamanhoMB / (float)paginas);
    }

    public void imprimirTitulo() {
        System.out.print("O titulo: " + titulo);
    }

    public float imposto() {
        return (0.2f * this.lucro() + 2);
    }
}
```
Problema de Redundância

Observe que muitos dos atributos e métodos da classe ```LivroDigital``` são repetidos da classe ```Livro```, o que pode gerar redundância e aumentar a chance de erros, caso seja necessário modificar o comportamento de ambos os tipos de livro. Por exemplo, se decidirmos alterar o formato de como o autor é armazenado (como um array de autores), precisaríamos fazer essa alteração em ambas as classes, o que gera retrabalho e aumenta a chance de inconsistências.

---

### Solução com Herança

A herança resolve esse problema ao permitir que a classe ```LivroDigital``` herde os atributos e métodos da classe ```Livro```. Para isso, utilizamos a palavra-chave ```extends```, indicando que a classe ```LivroDigital``` é uma extensão de ```Livro```. Isso elimina a duplicação de código e facilita futuras modificações.
```
public class LivroDigital extends Livro {
    public String linkDownload;
    public int tamanhoMB;

    public float tamanhoPorPagina() {
        return ((float)tamanhoMB / (float)paginas);
    }

    public float imposto() {
        return (0.2f * this.lucro() + 2);
    }
}
```
Detalhamento das Situações

Na implementação com herança, temos dois casos distintos:

Método Exclusivo: O método ```tamanhoPorPagina()``` é exclusivo da classe ```LivroDigital```, ou seja, foi adicionado e não existe na classe ```Livro```. Ele é declarado e utilizado sem problemas.

Sobrescrita de Método: O método ```imposto()``` já existia na classe ```Livro```. Ao sobrescrever esse método na classe ```LivroDigital```, o comportamento do método é alterado para atender às necessidades específicas dos livros digitais. Quando um objeto do tipo ```LivroDigital``` invoca o método ```imposto()```, a versão sobrescrita é executada, substituindo a implementação original.

---

### Vantagens da Herança

A principal vantagem da herança neste cenário é a reutilização de código. A classe ```LivroDigital``` herda todos os atributos e métodos comuns de ```Livro```, mas pode adicionar ou modificar características específicas. Com isso, alterações no comportamento comum (como modificar o atributo ```autor```) precisam ser feitas apenas na classe base (```Livro```), e todas as subclasses, como ```LivroDigital```, automaticamente herdarão essas mudanças.

---

### Exemplo de Uso das Classes com Herança

Agora, vamos analisar um exemplo de código que utiliza as classes `Livro` e `LivroDigital`, demonstrando a criação e manipulação de objetos dessas classes.

### Código de Exemplo com `Livro` e `LivroDigital`

```
01. package empresa.com;
02. public class Teste {
03.     //Método principal, execução começa aqui.
04.     public static void main(String[] args){
05.         //Criação do livro e definição de atributos
06.         Livro livro1 = new Livro();
07.         livro1.autor = "Ignacio de Loyola";
08.         livro1.custoProducao= 9.5f;
09.         livro1.precoVenda= 19.99f;
10.         livro1.titulo ="O homem que odiava segunda-feira";
11.         livro1.paginas=100;
12.         
13.         //Impressão na tela dos atributos
14.         System.out.println("Autor: " + livro1.autor +
                               " Custo de produção: "+ livro1.custoProducao +
                               " Preço: " + livro1.precoVenda +
                               " Quantidade de páginas: " + livro1.paginas +
                               " Título: " + livro1.titulo + "\n");
         
15.         //Lucro e imposto
16.         System.out.println("O livro " + livro1.titulo +
                               " lucra por venda R$" + livro1.lucro() +
                               " e paga em imposto R$" + livro1.imposto());
         
17.         //Criação do Livro digital e definição de atributos
18.         LivroDigital livro2 = new LivroDigital();
19.         livro2.autor = "Pierre Bayard";
20.         livro2.custoProducao= 15.0f;
21.         livro2.precoVenda= 34.99f;
22.         livro2.titulo ="Como falar dos livros que não lemos";
23.         livro2.paginas=200;
24.         livro2.linkDownload="googleLivros";
25.         livro2.tamanhoMB=4;
26.         
27.         //Impressão na tela dos atributos
28.         System.out.println("Autor: " + livro2.autor +
                               " Custo de produção: "+ livro2.custoProducao +
                               " Preço: " + livro2.precoVenda +
                               " Quantidade de páginas: " + livro2.paginas +
                               " Título: " + livro2.titulo + "\n");
         
29.         //Lucro e imposto
30.         System.out.println("O livro " + livro1.titulo +
                               " lucra por venda R$" + livro1.lucro() +
                               " e paga em imposto R$" + livro1.imposto());
         
31.         //Tamanho da página
32.         System.out.println("O livro " + livro2.titulo +
                               " possui tamanho médio de página de " + livro2.tamanhoPorPagina() + " MB\n");
        }
34. }

```
---

### Análise do Código

O código começa com a criação de um objeto ```Livro``` e a atribuição de valores aos seus atributos (linhas 6-11). Em seguida, ele imprime os valores dos atributos e chama os métodos ```lucro()``` e ```imposto()``` para exibir o lucro e o imposto do livro.
```
System.out.println("Autor: " + livro1.autor + 
    " Custo de produção: " + livro1.custoProducao + 
    " Preço: " + livro1.precoVenda + 
    " Quantidade de páginas: " + livro1.paginas + 
    " Título: " + livro1.titulo + "\n");
```
A seguir, o código cria um objeto ```LivroDigital```, define seus atributos (linhas 18-25) e chama os métodos ```lucro()```, ```imposto()``` e ```tamanhoPorPagina()```.
```
System.out.println("Autor: " + livro2.autor + 
    " Custo de produção: " + livro2.custoProducao + 
    " Preço: " + livro2.precoVenda + 
    " Quantidade de páginas: " + livro2.paginas + 
    " Título: " + livro2.titulo + "\n");

System.out.println("O livro " + livro2.titulo + 
    " possui tamanho médio de página de " + livro2.tamanhoPorPagina() + " MB\n");
```
---

### Sobrescrita do Método ```imposto()```

Note que, ao chamar o método ```imposto()``` no objeto ```livro2``` (do tipo ```LivroDigital```), o código executa a versão sobrescrita desse método, definida na classe LivroDigital. Isso acontece porque, apesar de o método ```imposto()``` também existir na classe ```Livro```, ele foi redefinido na classe filha para atender a necessidades específicas dos livros digitais, incluindo um valor adicional de R$ 2,00 no imposto.
```
System.out.println("O livro " + livro1.titulo + 
    " lucra por venda R$" + livro1.lucro() + 
    " e paga em imposto R$" + livro1.imposto());
```
---

### Conclusões

- **Reutilização de Código**: A utilização de herança permite a reutilização de atributos e métodos da classe `Livro` na classe `LivroDigital`, eliminando a necessidade de duplicação de código.

- **Sobrescrita de Métodos**: A sobrescrita do método `imposto()` na classe `LivroDigital` demonstra como métodos de classes filhas podem substituir o comportamento de métodos das classes pais.

- **Flexibilidade e Manutenção**: A herança oferece maior flexibilidade e facilita a manutenção do código, pois alterações na classe base (como no caso de atributos comuns) são automaticamente propagadas para as classes filhas.

---

## 17. Construtores e Herança

Abordaremos como trabalhar com construtores e seu comportamento quando utilizados com herança.

Os construtores, de forma similar aos métodos, são códigos executados no momento da criação de um objeto. A função mais comum dos construtores é atribuir valores aos atributos de um objeto assim que ele é instanciado. Para criar um construtor, devemos segui-lo da mesma forma que um método, mas sem um tipo de retorno e com o nome igual ao da classe.

Ao contrário de métodos e atributos, os construtores não são herdados pelas classes filhas, embora possam ser invocados por elas. A seguir, vamos analisar um exemplo que demonstra esse comportamento.

### Exemplo 1: Herança com Construtores

```
class Base {
    int x;

    // Construtor sem parâmetros
    Base() {
        System.out.println("Construtor Base");
    }

    // Construtor com parâmetro
    Base(int x) {
        this.x = x;
    }
}

class Derivada extends Base {
    int y;

    // Construtor sem parâmetros
    Derivada() {
        System.out.println("Construtor Derivada");
    }

    // Construtor com parâmetros
    Derivada(int x, int y) {
        super(x);  // Chamada ao construtor da classe Base
        this.y = y;
    }

    void exibir() {
        System.out.println("x = " + x + ", y = " + y);
    }
}

public class Teste {
    public static void main(String[] args) {
        Derivada obj1 = new Derivada();  // Chama o construtor Derivada() sem parâmetros
        Derivada obj2 = new Derivada(10, 50);  // Chama o construtor Derivada(int, int)
        obj2.exibir();  // Exibe os valores de x e y
    }
}
```
No código acima, temos três classes:``` Base```, ```Derivada```, e ```Teste```. A classe ```Base``` define dois construtores: um sem parâmetros que imprime uma mensagem e outro que inicializa o atributo ```x```. Já a classe ```Derivada```, que estende ```Base```, também possui dois construtores. O construtor sem parâmetros apenas imprime uma mensagem, enquanto o construtor com parâmetros chama o construtor da classe Base usando a palavra-chave ```super(x)``` e inicializa o atributo ```y```.

Explicação:

Construtores na Classe Base: A classe **Base** tem dois construtores:

- `Base()`: Construtor sem parâmetros, que apenas imprime a mensagem "Construtor Base".
- `Base(int x)`: Construtor com um parâmetro que inicializa o atributo `x`.

Construtores na Classe Derivada: A classe **Derivada**, filha da classe **Base**, tem dois construtores:

- `Derivada()`: Construtor sem parâmetros que imprime a mensagem "Construtor Derivada".
- `Derivada(int x, int y)`: Construtor com dois parâmetros. Ele chama o construtor da classe **Base** utilizando `super(x)` para inicializar o atributo `x` e depois inicializa o atributo `y`.

A palavra-chave `super()` é usada para invocar o construtor da classe pai, permitindo que os atributos da classe base sejam corretamente inicializados antes da classe derivada configurar seus próprios atributos.

---

### Exemplo 2: Construtores em Livro e LivroDigital
```
public class Livro {
    String autor;
    float custoProducao;
    float precoVenda;
    String titulo;
    int paginas;

    public Livro(String autor, float custoProducao, float precoVenda, String titulo, int paginas) {
        this.autor = autor;
        this.custoProducao = custoProducao;
        this.precoVenda = precoVenda;
        this.titulo = titulo;
        this.paginas = paginas;
    }
}

public class LivroDigital extends Livro {
    String linkDownload;
    int tamanhoMB;

    public LivroDigital(String autor, float custoProducao, float precoVenda, String titulo, int paginas, String linkDownload, int tamanhoMB) {
        super(autor, custoProducao, precoVenda, titulo, paginas);  // Chama o construtor da classe Livro
        this.linkDownload = linkDownload;
        this.tamanhoMB = tamanhoMB;
    }
}
```

Na classe **Livro**, o construtor recebe todos os parâmetros necessários para inicializar os atributos da classe. Já na classe **LivroDigital**, o construtor começa chamando o construtor da classe **Livro** com `super(autor, custoProducao, precoVenda, titulo, paginas)` e, em seguida, inicializa os atributos adicionais `linkDownload` e `tamanhoMB` específicos para a classe **LivroDigital**.

---

### Conclusão
- **Reutilização de Código**: A herança permite reutilizar o código da classe pai. No exemplo, a classe **LivroDigital** herda os atributos e métodos da classe **Livro**, evitando a duplicação de código.
- **Uso de super()**: A palavra-chave `super()` é crucial para chamar o construtor da classe pai. Isso garante que os atributos da classe base sejam inicializados corretamente antes de inicializar os atributos da classe derivada.
- **Construtores e Flexibilidade**: Com a utilização de construtores em classes pai e filho, conseguimos gerenciar a inicialização dos atributos de forma controlada e flexível, facilitando a manutenção do código e a adaptação a novas funcionalidades.

Esse conceito de herança e construção de objetos com `super()` ajuda a garantir que o código seja modular, reutilizável e fácil de manter.

---

## 18. Polimorfismo

Abordaremos o conceito de polimorfismo na programação orientada a objetos e como ele contribui para a flexibilidade e organização do código. O termo "polimorfismo" tem origem no grego (polýs = muitas; morphé = formas) e se refere à capacidade de objetos de diferentes subclasses possuírem métodos e comportamentos distintos, mas ainda assim sendo tratados como instâncias da mesma superclasse.

Existem algumas categorias principais de polimorfismo, que veremos a seguir:

### Categorias de Polimorfismo

### Polimorfismo Universal

Esse tipo de polimorfismo ocorre quando um único algoritmo ou comportamento pode ser aplicado a diversos tipos de dados ou classes. Ou seja, um mesmo comportamento pode ser executado de forma geral em diferentes contextos, aumentando a reutilização de código e flexibilidade.

### Polimorfismo Ad Hoc

Já o polimorfismo ad hoc refere-se a um comportamento mais específico, em que uma mesma chamada de método pode se comportar de maneira distinta dependendo do tipo de dado ou da classe em questão. Esse tipo de polimorfismo é utilizado quando se deseja aplicar um comportamento específico para diferentes subclasses dentro de uma hierarquia.

A partir dessas categorias, podemos classificar o polimorfismo em quatro tipos principais:

1. **Subtipagem**
2. **Paramétrico**
3. **Coerção**
4. **Overloading**

### Tipos de Polimorfismo

### Subtipagem

A subtipagem é o tipo de polimorfismo mais comum e amplamente associado ao conceito de polimorfismo. Ela ocorre quando uma superclasse define um método e as suas subclasses oferecem implementações específicas desse método, modificando seu comportamento. Em termos práticos, uma subclasse herda o comportamento da superclasse e pode alterá-lo ou estendê-lo conforme a necessidade.

Além de herdar atributos e métodos, uma subclasse também herda a tipagem da superclasse, o que permite que ela seja instanciada e tratada como um objeto da superclasse. No próximo tema, veremos exemplos de código em Java para ilustrar esse conceito.

### olimorfismo Paramétrico

No polimorfismo paramétrico, uma função é escrita de forma genérica, permitindo que ela seja usada com diferentes tipos de dados sem a necessidade de reescrever o código para cada tipo. Isso é particularmente útil quando a lógica da função permanece a mesma, mas ela pode operar com diferentes tipos de dados de entrada.

Linguagens como Java e C# implementam esse conceito através de **Generics**, enquanto C++ utiliza o conceito de **Template**. Um exemplo seria uma função matemática que aceita tanto inteiros (int) quanto números de ponto flutuante (float ou double) como parâmetros, realizando o mesmo cálculo independentemente do tipo.

### Coerção

A coerção envolve a conversão automática ou manual de tipos de dados. Quando ocorre uma conversão implícita, o compilador lida com a transformação sem que o programador precise especificar, enquanto a conversão explícita é realizada através de um **type cast**, onde o programador define como a conversão deve ocorrer.

A coerção pode ocorrer em tipos primitivos, como quando um número inteiro é atribuído a uma variável do tipo `float`. Além disso, é possível realizar conversões entre tipos de dados diferentes, como de `double` para `int`, o que pode ser feito implicitamente ou explicitamente.

Um exemplo comum de erro é a divisão de inteiros em linguagens que tratam a divisão de forma inteira por padrão. Por exemplo, se dois números inteiros são divididos (como `3/2`), o resultado será um número inteiro, ou seja, `1`, e não `1.5` como seria esperado em uma divisão de ponto flutuante. Para evitar isso, seria necessário indicar explicitamente o tipo de dado (`float` ou `double`), ou forçar a conversão de tipos.

### Overloading (Sobrecarga)

O overloading, ou sobrecarga, permite que várias funções ou métodos compartilhem o mesmo nome, mas com diferentes parâmetros. Isso significa que, dependendo da quantidade ou tipo de parâmetros passados, a função ou método irá executar comportamentos distintos.

Por exemplo:

```
int maior(int a, int b);
int maior(int a, int b, int c);
```
Ambas as funções têm o mesmo nome, mas uma aceita dois parâmetros e a outra três. Dependendo do número de argumentos passados, a função apropriada será chamada.

Praticamente todas as linguagens modernas de programação, como **Java**, **C#** e **C++**, oferecem suporte à sobrecarga de métodos, permitindo que o mesmo nome de método seja usado para diferentes operações, o que melhora a legibilidade e a reutilização de código.

---

## 19. Polimorfismo na Linguagem Java

### Referência e Instanciação

Em Java, quando criamos uma variável de uma classe, ela se comporta como uma referência, apontando para um local de memória onde o objeto está armazenado. A palavra-chave `new` é usada para instanciar um objeto na memória. O exemplo abaixo ilustra como variáveis podem se referir ao mesmo objeto na memória:

```
Aluno mario = new Aluno();
Aluno luigi = mario;
Aluno yoshi = mario;
mario.nome = "super mario";
System.out.println(mario.nome); // Imprime "Super Mario"
System.out.println(luigi.nome); // Imprime "Super Mario"
System.out.println(yoshi.nome); // Imprime "Super Mario"

luigi.nome = "Super luigi";
System.out.println(mario.nome); // Imprime "Super Luigi"
System.out.println(luigi.nome); // Imprime "Super Luigi"
System.out.println(yoshi.nome); // Imprime "Super Luigi"
```
Neste exemplo, as variáveis ```luigi``` e``` yoshi``` referenciam o mesmo objeto que ```mario```. Portanto, qualquer alteração feita em um afeta todos, já que compartilham o mesmo espaço de memória.

---

### Exemplo Prático de Polimorfismo

### Conceito de Polimorfismo

O polimorfismo em Java é frequentemente utilizado em cenários que envolvem herança, permitindo que subclasses substituam ou modifiquem os comportamentos definidos em uma superclasse. A seguir, veremos um exemplo prático de como o polimorfismo pode ser utilizado para representar diferentes tipos de funcionários em uma empresa, com cálculos de pagamento distintos para cada tipo de funcionário.

### Definição das Classes

Vamos começar com uma superclasse chamada `Funcionario` e três subclasses que representam diferentes tipos de funcionários: `Assalariado`, `Comissionado` e `Horista`. Cada uma dessas subclasses terá um comportamento específico para o cálculo do pagamento.
```
public class Funcionario {
    String nome;

    public Funcionario(String nome) {
        this.nome = nome;
    }

    public float pagamento() {
        System.out.println("Cálculo de pagamento");
        return 0;
    }
}

public class Assalariado extends Funcionario {
    float salario;

    public Assalariado(String nome, float salario) {
        super(nome);
        this.salario = salario;
    }

    public float pagamento() {
        return salario;
    }
}

public class Comissionado extends Funcionario {
    float vendas;
    float comissao;

    public Comissionado(String nome, float vendas, float comissao) {
        super(nome);
        this.vendas = vendas;
        this.comissao = comissao;
    }

    public float pagamento() {
        return comissao * vendas;
    }
}

public class Horista extends Funcionario {
    int horasTrabalhadas;
    float precoHora;

    public Horista(String nome, int horasTrabalhadas, float precoHora) {
        super(nome);
        this.horasTrabalhadas = horasTrabalhadas;
        this.precoHora = precoHora;
    }

    public float pagamento() {
        return precoHora * horasTrabalhadas;
    }
}
```
Cada subclasse tem seu próprio método ```pagamento```, calculando o pagamento de acordo com o tipo de funcionário (salário fixo, comissões ou horas trabalhadas).

---

### Polimorfismo em Ação
```
O polimorfismo é demonstrado ao declarar uma variável da superclasse `Funcionario` e instanciá-la com objetos das subclasses `Assalariado`, `Comissionado` ou `Horista`. Ao chamar o método `pagamento()`, o método da subclasse correspondente é executado, não o da superclasse.
Funcionario f;
f = new Horista("Mario", 100, 40.5f);
System.out.println("Horista: " + f.pagamento()); // Chama o pagamento de Horista

f = new Comissionado("Luigi", 50000, 0.05f);
System.out.println("Comissionado: " + f.pagamento()); // Chama o pagamento de Comissionado

f = new Assalariado("Yoshi", 3500);
System.out.println("Assalariado: " + f.pagamento()); // Chama o pagamento de Assalariado
```

---

### Vantagens do Polimorfismo

Uma das principais vantagens do polimorfismo é a possibilidade de armazenar objetos de diferentes subclasses em uma única coleção, como um ```ArrayList```. Isso facilita a gestão e manipulação de diferentes tipos de funcionários sem a necessidade de criar listas separadas para cada tipo. Veja o exemplo a seguir:
```
ArrayList<Funcionario> listaFuncionarios = new ArrayList<Funcionario>();
listaFuncionarios.add(new Horista("Mario", 100, 40.5f));
listaFuncionarios.add(new Comissionado("Luigi", 50000, 0.05f));
listaFuncionarios.add(new Assalariado("Yoshi", 3500));

float totalPagamento = 0;
for (Funcionario f : listaFuncionarios) {
    totalPagamento += f.pagamento(); // Calcula o pagamento de todos os funcionários
}
System.out.println("Total pagamento: " + totalPagamento);
```
Neste código, criamos um único ```ArrayList<Funcionario>```, mas ele armazena objetos das três subclasses. O método ```pagamento()``` é chamado para cada funcionário, executando a implementação correta dependendo do tipo de funcionário.

---

## 20. Classe Abstrata

No contexto de programação orientada a objetos, às vezes é necessário criar classes que não devem ser instanciadas diretamente, mas que servem como base para outras classes. Um exemplo disso são as classes abstratas. Assim como no mundo real, onde conceitos abstratos como "forma geométrica" não têm uma instância concreta até que se especifique que tipo de forma estamos nos referindo, uma classe abstrata define um modelo, mas não possui implementação suficiente para ser instanciada por si só.

### Propriedades das Classes Abstratas

1. **Referenciamento Polimórfico**: A classe abstrata pode referenciar objetos de suas subclasses, aproveitando os benefícios do polimorfismo.
2. **Métodos Abstratos**: A classe abstrata pode ter métodos sem implementação, mas as subclasses devem fornecer essa implementação.
3. **Não Instanciáveis**: Tentativas de instanciar uma classe abstrata resultam em erro de compilação. Erros de compilação são vantajosos, pois são facilmente identificados e corrigidos, ao contrário dos bugs de execução, que podem ser mais difíceis de localizar.

### Exemplo Prático de Classe Abstrata

Suponha que temos uma classe `FormaGeometrica`, com um método `calculaArea`, que será abstrato. As subclasses como `Quadrado` e `Circulo` deverão implementar esse método.

```
public abstract class FormaGeometrica {
    public double area;
    public abstract void calculaArea();
}

class Quadrado extends FormaGeometrica {
    public void calculaArea() {
        Scanner teclado = new Scanner(System.in);
        System.out.println("Digite a medida do lado");
        double lado = teclado.nextDouble();
        area = lado * lado;
    }
}

class Circulo extends FormaGeometrica {
    public void calculaArea() {
        Scanner teclado = new Scanner(System.in);
        System.out.println("Digite o raio");
        double raio = teclado.nextDouble();
        area = raio * raio * Math.PI;
    }
}

public class Main {
    public static void main(String[] args) {
        FormaGeometrica forma;
        
        // Forma é um circulo
        forma = new Circulo();
        forma.calculaArea();
        System.out.println(forma.area);
        
        // Forma agora é um quadrado
        forma = new Quadrado();
        forma.calculaArea();
        System.out.println(forma.area);
    }
}
```
Explicação do Código

A classe `FormaGeometrica` é abstrata, o que impede que ela seja instanciada diretamente.  
O método `calculaArea` é declarado como abstrato, o que significa que as subclasses devem implementá-lo.  
A classe `Quadrado` e a classe `Circulo` são concretas e fornecem a implementação do método `calculaArea`.  
No método `main`, criamos um objeto `FormaGeometrica`, que pode ser um `Quadrado` ou um `Circulo`, demonstrando como o polimorfismo permite chamar o método `calculaArea` de forma diferente dependendo da instância.

---

#### Vantagens de Utilizar Classes Abstratas

Ao usar uma classe abstrata como modelo, fica mais fácil garantir que todas as subclasses sigam a estrutura necessária. Isso é especialmente útil em projetos grandes com muitos desenvolvedores, onde a consistência no código é fundamental. Se a implementação do método abstrato não for fornecida, a IDE (ambiente de desenvolvimento integrado) apontará um erro, ajudando a evitar falhas e mantendo o código organizado e sem erros semânticos.

---

  ## 21. Interface

Em Java, uma interface é um conceito semelhante a uma classe abstrata, mas com algumas diferenças fundamentais. Ao contrário de uma classe abstrata, que pode ter métodos com implementações, uma interface define apenas a assinatura dos métodos, sem fornecer nenhuma implementação. Isso permite que diferentes classes implementem esses métodos de maneiras distintas, mas com a mesma estrutura de chamada.

### Definição e Comparação com Classes Abstratas

Uma interface é comparada a um protocolo de comunicação, onde ela define como os métodos devem ser estruturados, mas não diz como serão executados. Um exemplo disso seria a interface HDMI, que define o protocolo de comunicação entre dispositivos, mas não dita como a TV ou o computador devem processar a informação.

Em termos de programação, uma interface pode ser vista como uma "promessa" de que as classes que a implementam terão métodos específicos. Isso resolve problemas como a troca de implementações de classes sem alterar a forma como elas são acessadas.

### Exemplo de Interface em Java

```java
interface Animal {
    public void emitirSom(); // Método sem corpo
    public void dormir();    // Método sem corpo
}

class Gato implements Animal {
    public void emitirSom() {
        System.out.println("O gato fala: miau miau");
    }

    public void dormir() {
        System.out.println("Zzz");
    }
}

public class Principal {
    public static void main(String[] args) {
        Gato tom = new Gato();
        tom.emitirSom();
        tom.dormir();

        Animal obj = tom; // Referência de Animal
        obj.emitirSom();
        obj.dormir();
    }
}
```
Explicação do Código

A interface `Animal` define dois métodos, `emitirSom` e `dormir`, sem fornecer uma implementação.  
A classe `Gato` implementa a interface `Animal`, o que significa que ela precisa fornecer implementações para os métodos definidos na interface.  
No método `main`, um objeto da classe `Gato` é criado e usado tanto diretamente quanto referenciado como `Animal`, demonstrando o uso de polimorfismo.

---

# Diferenças Entre Interface e Classe Abstrata

| Propriedade      | Interface                                      | Classe Abstrata                                |
|------------------|------------------------------------------------|------------------------------------------------|
| **Herança**      | Pode implementar várias interfaces.            | Pode herdar de apenas uma superclasse.         |
| **Métodos**      | Somente assinaturas, sem implementação.        | Pode ter métodos com implementação.           |
| **Atributos**    | Só pode ter atributos estáticos.               | Pode ter atributos estáticos e não estáticos. |
| **Adaptação**    | Fácil de adaptar, basta implementar os métodos. | Adaptação pode ser mais difícil devido à hierarquia de herança. |
| **Quando usar?** | Quando classes compartilham o mesmo comportamento e assinatura. | Quando classes compartilham atributos e precisam de uma avaliação de estado compatível. |
| **Modificações** | Adicionar um método exige que todas as classes implementem o novo método. | Adicionar um novo método pode incluir uma implementação padrão para todas as classes filhas. |

---

## 22. Enum

Em Java, o conceito de *enum* é utilizado para representar um conjunto de constantes de forma mais legível e eficiente do que as abordagens tradicionais. O *enum* é uma classe especial, muito usada para descrever valores fixos e imutáveis, como estações do ano ou meses, tornando o código mais claro e fácil de manter.

### Criação de um Enum

Para criar um *enum* em Java, usamos a palavra-chave `enum` em vez de `class` ou `interface`. As constantes dentro do *enum* devem ser nomeadas em letras maiúsculas, seguindo a convenção da linguagem.

Exemplo de *enum* para as estações do ano:

```
enum Estacao {
    VERAO,
    OUTONO,
    INVERNO,
    PRIMAVERA
}
```
Nesse exemplo, o enum chamado ```Estacao``` representa as quatro estações do ano. As constantes ```VERAO```, ```OUTONO```, ```INVERNO``` e ```PRIMAVERA``` são os valores fixos que o enum irá armazenar.

### Uso do Enum  

Uma das formas mais comuns de utilizar o enum é dentro de estruturas condicionais, como o ```switch```. No código abaixo, comparamos a variável ```estacaoRoupa```, do tipo ```Estacao```, com as diferentes estações:
```
public class Principal {
    public static void main(String[] args) {
        Estacao estacaoRoupa = Estacao.INVERNO;
        switch(estacaoRoupa) {
            case VERAO:
                System.out.println("Arrase na praia");
                break;
            case OUTONO:
                System.out.println("Passe o outono com elegância");
                break;
            case INVERNO:
                System.out.println("Se agasalhe bem e com estilo");
                break;
            case PRIMAVERA:
                System.out.println("Se vista bem na estação das flores");
                break;
        }
    }
}
```
Neste exemplo, a estação do ano é verificada e, dependendo de qual estação está armazenada na variável ```estacaoRoupa```, uma mensagem correspondente é impressa no console.

---

### Iterando sobre os Valores do Enum

O enum também permite que você itere sobre suas constantes usando o método ```values()```, que retorna um array com todas as constantes definidas. Exemplo:

```
for (Estacao est : Estacao.values()) {
    System.out.println(est);
}
```
Esse código irá imprimir todas as estações definidas no enum ```Estacao``` uma por uma.

---

### Características do Enum

No Java, o enum é tratado como uma classe, o que significa que ele pode ter métodos e atributos. No entanto, suas constantes são sempre consideradas ```public```, ```static``` e ```final```:

public: As constantes do enum são acessíveis por qualquer classe que tenha visibilidade sobre o enum.
static: Existe uma única instância de cada constante para a classe inteira, e não uma instância por objeto.
final: As constantes não podem ser alteradas em tempo de execução, garantindo que os valores sejam imutáveis.

---

### Quando Utilizar Enum?

O enum é recomendado principalmente em situações onde você tem um conjunto fixo e imutável de valores. Alguns exemplos incluem:

- Meses do ano.
- Cores.
- Estações do ano.
- Cartas de um baralho.

---

### Exemplos de Enum no Contexto de um Sistema de Vendas

Se estivermos implementando um sistema para uma loja de roupas, onde as roupas são associadas a uma estação do ano, podemos usar um enum para representar as estações:
```
enum Estacao {
    VERAO,
    OUTONO,
    INVERNO,
    PRIMAVERA
}

public class Loja {
    public static void main(String[] args) {
        Estacao estacaoRoupa = Estacao.INVERNO;
        System.out.println("A estação escolhida foi: " + estacaoRoupa);
    }
}
```
Nesse exemplo, o código fica mais claro e conciso, ao invés de usar inteiros ou strings para representar as estações, usando diretamente o enum para a variável ```estacaoRoupa```.

---

## 23. Tratamento de Exceções em Java

O tratamento de exceções em Java é um mecanismo fundamental para garantir que os programas possam lidar com erros de maneira controlada, evitando falhas inesperadas. Este tema explora os conceitos de erros e exceções, como gerenciá-los e usar os comandos `try`, `catch` e `finally`.

---

### Definição de Erros e Exceções

- **Erro (Error):**
  - Refere-se a problemas sérios e irreparáveis que ocorrem em tempo de execução, geralmente relacionados à plataforma de execução do programa.
  - Exemplos incluem falta de memória ou falhas no sistema operacional.
  - O *Java* não oferece maneiras de tratar esses erros diretamente. Quando ocorrem, o programa geralmente é interrompido.
  - Exemplo: `java.lang.OutOfMemoryError`.

- **Exceção (Exception):**
  - São problemas detectados em tempo de execução, mas que podem ser tratados dentro do próprio código.
  - Exemplo: Ao tentar acessar um arquivo inexistente, o Java lança uma `FileNotFoundException`.
  - O tratamento de exceções evita que o programa termine abruptamente e permite que o usuário seja informado do erro.

---

### Hierarquia de Exceções

Ambos os erros e exceções são subclasses da classe `Throwable` no Java, e a estrutura de hierarquia facilita o tratamento de exceções. Quando uma exceção é gerada, ela carrega informações como o nome da exceção, sua descrição e o estado do programa no momento do erro, sendo adicionada à *call stack*.

---

### Fluxo de Tratamento de Exceções

1. Quando ocorre uma exceção, o método que a gerou cria um objeto de exceção específico.
2. A JVM (Java Virtual Machine) começa a busca por um método na call stack que tenha um bloco `catch` capaz de tratar a exceção gerada.
3. Se um bloco adequado for encontrado, o controle do programa é transferido para ele.
4. Caso contrário, a exceção é tratada pelo manipulador padrão da JVM, que interrompe o programa e imprime uma mensagem de erro.

### Comandos `try`, `catch` e `finally`

O bloco `try` é utilizado para envolver o código onde a exceção pode ocorrer. Caso uma exceção seja gerada, o fluxo de execução é transferido para o bloco `catch`, onde é possível capturar e tratar o erro.

O bloco `finally` é opcional e contém o código que sempre será executado, independentemente de a exceção ter sido gerada ou não. Ele é útil para recursos que precisam ser liberados ou outras operações que devem ser realizadas após a execução do bloco `try`.

#### Exemplo de Código

```
public class MinhaClasse {
    public static void main(String[] args) {
        try {
            int[] meusNumeros = {1, 2, 3};
            System.out.println(meusNumeros[10]);
        } catch (Exception e) {
            System.out.println("Problema = " + e);
        } finally {
            System.out.println("Terminado o try catch.");
        }
    }
}
```
Explicação do Exemplo

### Bloco try:
O bloco try contém o código onde a exceção pode ocorrer. No exemplo, tentamos acessar o índice 10 de um array com apenas 3 elementos, o que geraria uma `ArrayIndexOutOfBoundsException`.

### Bloco catch:
Quando a exceção ocorre, o controle é transferido para o bloco catch, que captura a exceção do tipo `Exception` e exibe uma mensagem com o nome e a descrição da exceção. A variável `e` contém a exceção gerada, e ao chamarmos `System.out.println("Problema = " + e);`, o Java imprime a mensagem de erro.

### Bloco finally:
O bloco finally é executado sempre, independentemente de uma exceção ser lançada ou não. No exemplo, ele imprime "Terminado o try catch." no final da execução.

---

## 24. Criando as Próprias Exceções

No Java, é possível tratar não apenas as exceções padrão lançadas pelo sistema, mas também criar e lançar as próprias exceções. O objetivo de lançar exceções é evitar que o programa continue em execução quando uma situação anormal ocorre, redirecionando o controle para um método de tratamento adequado.

### Exemplo de Lançamento de Exceção

No exemplo a seguir, uma exceção é explicitamente lançada usando o comando `throw`:

```
class Principal {
    static void funcao() {
        try {
            throw new NullPointerException("Problema!");
        } catch (NullPointerException e) {
            System.out.println("funcao() :" + e);
            throw e; // Lançando a exceção novamente
        }
    }

    public static void main(String args[]) {
        try {
            funcao();
        } catch (NullPointerException e) {
            System.out.println("main() :" + e);
        }
    }
}
```
### Explicação do Código:

- **Linha 4**: A exceção `NullPointerException` é criada explicitamente utilizando o comando `throw`. A mensagem "Problema!" é passada como parâmetro no construtor da exceção, o que significa que essa mensagem será associada ao erro gerado.
  
- **Linha 6**: A exceção é capturada dentro do bloco `catch` e a mensagem associada à exceção é impressa no console, precedida de `funcao() :`. Isso permite que o erro seja tratado de forma específica naquele ponto do código.

- **Linha 8**: Após capturar a exceção, ela é lançada novamente com o comando `throw e;`. Esse comportamento permite que a exceção seja propagada para o método que chamou o método `funcao()`, ou seja, para o método `main()`. Como a exceção não é tratada novamente no bloco `catch` do método `funcao()`, ela sobe na pilha de chamadas para ser tratada em um nível superior.

- **Linha 15**: O método `main()` chama o método `funcao()`. Quando a exceção é lançada novamente e chega ao `main()`, o bloco `catch` do `main()` captura a exceção e imprime a mensagem associada à exceção com o prefixo `main() :`. Isso permite que o erro seja tratado também no nível do método principal.

---

# Tipos de Exceções

Existem dois tipos principais de exceções em Java: checked e unchecked.

## Exceções Checked
São verificadas em tempo de compilação. Ao lançar uma exceção desse tipo, o método que a gera deve tratá-la com um bloco try/catch ou declarar explicitamente que pode lançá-la usando a palavra-chave `throws`.

### Exemplo:
```
class Principal {
    public static void main(String[] args) throws IOException {
        FileReader arquivo = new FileReader("teste.txt");
        BufferedReader entrada = new BufferedReader(arquivo);
        // Ler e imprimir 3 linhas de teste.txt
        for (int i = 0; i < 3; i++) {
            System.out.println(entrada.readLine());
        }
        arquivo.close();
    }
}
```
---

### Tipos de Exceções

### Exceções Checked
São verificadas em tempo de compilação. Ao lançar uma exceção desse tipo, o método que a gera deve tratá-la com um bloco try/catch ou declarar explicitamente que pode lançá-la usando a palavra-chave `throws`.

Exemplo:

O código lança uma exceção `IOException` ao tentar abrir e ler o arquivo `teste.txt`. O método `main` declara que pode lançar essa exceção, permitindo que o compilador saiba que o erro pode ocorrer e deve ser tratado.

### Exceção Unchecked
Não são verificadas em tempo de compilação. O programador decide se deve tratá-las ou não.

Exemplo:

Uma exceção `Unchecked` comum é a `ArithmeticException`, que ocorre ao tentar dividir um número por zero.
```
class Principal {
    public static void main(String args[]) {
        int dividendo = 0;
        int divisor = 10;
        int resultado = dividendo / divisor; // Gerará ArithmeticException
    }
}
```

---

### Desenvolvendo Sua Própria Exceção

É possível criar exceções personalizadas, que podem ser do tipo checked ou unchecked, dependendo de sua herança.

### Exceção Checked

Para criar uma exceção checked, a classe deve estender `Exception`.
```
public class UsuarioInexistenteException extends Exception {
    public UsuarioInexistenteException(String mensagem) {
        super(mensagem);
    }
}
```
---

### Exceção Unchecked

Para criar uma exceção unchecked, a classe deve estender `RuntimeException`.

Exemplo de Uso de Exceção Personalizada
Aqui está um exemplo de uma exceção personalizada usada para lidar com um usuário inexistente:
```
public class Gerenciador {
    public Usuario buscar(String usuarioID) throws UsuarioInexistenteException {
        if (usuarioID.equals("123456")) {
            return new Usuario();
        } else {
            throw new UsuarioInexistenteException("Não existe usuário " + usuarioID);
        }
    }
}
```

---

### Tratando Exceção no Método Principal
O tratamento da exceção personalizada é feito com um bloco ```try/catch```:
```
public class Teste {
    public static void main(String[] args) {
        Gerenciador gerenciador = new Gerenciador();
        try {
            Usuario usr = gerenciador.buscar("0000001");
        } catch (UsuarioInexistenteException ex) {
            System.err.print(ex);
        }
    }
}
```
### Explicação do Exemplo:
A classe `Gerenciador` contém um método `buscar`, que lança a exceção `UsuarioInexistenteException` quando o usuário não é encontrado.  
No método `main()`, o erro é tratado, e a mensagem da exceção personalizada é impressa no console.

---

## 25. Igualdade no Java

Quando trabalhamos com comparações no Java, é importante entender a diferença entre comparar primitivas e objetos. O operador `==` funciona bem para tipos primitivos, como `int`, `char`, `float`, etc., mas tem um comportamento diferente quando usado para comparar objetos. 

### Comparação de Objetos com `==`

O operador `==` compara o **endereço de memória** dos objetos, ou seja, verifica se as duas variáveis apontam para a mesma instância. Para ilustrar isso, considere o seguinte código:

```
public class Teste {
    public static void main(String[] args) {
        String s1 = new String("Ola");
        String s2 = new String("Ola");
        String s3 = s1;
        System.out.println(s1 == s2); // falso
        System.out.println(s1.equals(s2)); // verdadeiro
        System.out.println(s1 == s3); // verdadeiro
    }
}
```
Explicação:

- `s1 == s2` retorna falso, pois apesar de ambos conterem o mesmo valor "Ola", são instâncias diferentes.
- `s1.equals(s2)` retorna verdadeiro, pois o método `equals` compara o conteúdo das strings.
- `s1 == s3` retorna verdadeiro, pois `s3` é uma referência que aponta para o mesmo objeto que `s1`.

---

### Método equals e Comparação de Conteúdos

No Java, o método `equals` é utilizado para comparar o conteúdo de objetos, como no exemplo anterior com as Strings. Para implementá-lo em uma classe personalizada, como `Usuario`, podemos fazer da seguinte forma:
```
public class Usuario {
    int id;
    String nome;
    String cpf;

    public Usuario(int id, String nome, String cpf) {
        super();
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
    }

    public boolean equals(Object outro) {
        // Compara consigo mesmo
        if (outro == this) {
            return true;
        }

        // Verifica se o objeto é uma instância de Usuario
        if (!(outro instanceof Usuario)) {
            return false;
        }

        // Realiza o cast para Usuario
        Usuario o = (Usuario) outro;

        // Compara os atributos
        if (this.id == o.id && this.nome.equals(o.nome) && this.cpf.equals(o.cpf)) {
            return true;
        }
        return false;
    }
}
```
Explicação do código equals:

1. **Verificação de Identidade**: A comparação começa verificando se o objeto que está sendo comparado é o mesmo, com `this == obj`. Se forem o mesmo objeto, retorna `true`.

2. **Verificação do Tipo**: Em seguida, verificamos se o objeto `obj` é uma instância de `Usuario` utilizando `instanceof`. Se não for, o método retorna `false`.

3. **Type Casting**: O objeto `obj` é convertido para `Usuario` usando o type cast `(Usuario) obj`, permitindo que possamos acessar os atributos específicos dessa classe.

4. **Comparação dos Atributos**: Finalmente, o método compara os atributos `nome` e `idade` dos dois objetos para determinar se são iguais. Se ambos os atributos forem iguais, o método retorna `true`; caso contrário, retorna `false`.

---

### Exemplo de Comparação entre Instâncias de ```Usuario```
```
public class Principal {
    public static void main(String[] args) {
        Usuario m1 = new Usuario(1, "Mario", "111.222.333-44");
        Usuario m2 = new Usuario(1, "Mario", "111.222.333-44");
        Usuario m3 = new Usuario(2, "Luigi", "555.666.777-88");

        // verdadeiro
        System.out.println(m1.equals(m2)); 
        // falso
        System.out.println(m1 == m2); 
        // falso
        System.out.println(m1.equals(m3)); 
    }
}
```
---

### Resultado:

- `m1.equals(m2)` retorna **verdadeiro**, pois ambos têm os mesmos valores de atributos.
- `m1 == m2` retorna **falso**, pois são objetos diferentes em memória.
- `m1.equals(m3)` retorna **falso**, pois os valores dos atributos são diferentes.

### Considerações sobre o equals:

- O método `equals` recebe um parâmetro do tipo `Object`, pois todas as classes em Java herdam de `Object`, permitindo a comparação de objetos de qualquer tipo com o objeto `Usuario.
- A utilização de **type casting** na linha 21 permite que o código funcione corretamente ao comparar instâncias de diferentes tipos de objetos.

---

### Ferramenta Eclipse:

Algumas IDEs, como o Eclipse, oferecem recursos para gerar automaticamente o código do `equals` e `hashCode()`, o que pode ser útil para classes que precisem de uma comparação padrão de objetos.

**Dica**: No Eclipse, é possível gerar o código de `equals` e `hashCode()` automaticamente via o menu **Source > Generate hashCode() and equals()**.

---

## 25. Métodos Especiais: Tostring

O método `toString()` é uma funcionalidade importante no Java, permitindo que objetos sejam representados como strings. Por padrão, todos os objetos em Java são subclasses da classe `Object`, que implementa o método `toString()` para retornar uma string com o endereço de memória do objeto. No entanto, é possível sobrescrever esse método para personalizar a representação textual de um objeto.

### Exemplo de Uso do `toString()`

Quando tentamos imprimir um objeto diretamente, o método `toString()` da classe `Object` é chamado implicitamente. Sem sobrescrever, o retorno será algo como:

```
Usuario usr = new Usuario();
System.out.println(usr); // Resultado: Usuario@232204a1
```
Para exibir informações específicas do objeto, podemos sobrescrever o método ```toString()```:
```
public class Usuario {
    int id;
    String nome;
    String cpf;

    @Override
    public String toString() {
        return "Usuario [id=" + id + ", nome=" + nome + ", cpf=" + cpf + "]";
    }
}
```
---

### No código de execução:
```
Usuario m1 = new Usuario(1, "Mario", "111.222.333-44");
System.out.println(m1); // Resultado: Usuario [id=1, nome=Mario, cpf=111.222.333-44]
```
---

### Anotação @Override e Método toString()

A anotação `@Override` indica que estamos sobrescrevendo o método `toString()` da classe `Object`. Embora não seja obrigatória, ela facilita a leitura e permite ao compilador verificar a compatibilidade da assinatura do método.

Em IDEs como o Eclipse, é possível gerar automaticamente o método `toString()` por meio da opção **Source > Generate toString()**.

---

## 26. Modificadores JAVA (SINGLETON)

O padrão Singleton é utilizado para garantir que uma classe tenha apenas uma instância e fornecer um ponto de acesso global a essa instância. É comum em cenários onde um recurso compartilhado, como um banco de dados ou impressora, precisa ser acessado de maneira centralizada.

---

### Implementação do Singleton

O padrão Singleton é implementado com dois requisitos principais:
1. O construtor da classe é privado, impedindo a criação de múltiplas instâncias de fora da classe.
2. Um método estático é usado para retornar a instância única da classe, utilizando a técnica de "Lazy Initialization", onde a instância é criada apenas quando é necessária.

Exemplo de Código do Singleton
```
class Singleton {
    // Variável estática que mantém a única instância
    private static Singleton instancia = null;
    
    // Atributo de exemplo
    public int numero;
    
    // Construtor privado
    private Singleton() {
        numero = 20;
    }

    // Método estático para obter a instância
    public static Singleton getInstance() {
        if (instancia == null) {
            instancia = new Singleton();
        }
        return instancia;
    }
}
```

---

### Uso do Singleton:
```
class Principal {
    public static void main(String args[]) {
        // Obtendo a instância do Singleton
        Singleton x = Singleton.getInstance();
        Singleton y = Singleton.getInstance();
        Singleton z = Singleton.getInstance();

        // Modificando a variável de x
        x.numero += 10;

        System.out.println("x: " + x.numero); // 30
        System.out.println("y: " + y.numero); // 30
        System.out.println("z: " + z.numero); // 30

        z.numero -= 5;

        System.out.println("x: " + x.numero); // 25
        System.out.println("y: " + y.numero); // 25
        System.out.println("z: " + z.numero); // 25
    }
}
```
Explicação:

O método `getInstance()` verifica se a instância já foi criada. Se não, ele cria a instância e a retorna. Isso garante que as variáveis `x`, `y`, e `z` apontem para a mesma instância, compartilhando o mesmo estado (valor de `numero`), como mostrado na execução do código.

Esse padrão é útil para gerenciar recursos compartilhados de forma eficiente, evitando conflitos entre múltiplas instâncias.




























