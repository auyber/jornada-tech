# Fundamentos de Design de Sistemas

## Introdução
# Introdução  

Aqui temos os princípios básicos sobre sistemas operacionais baseados em **Linux**, explorando seu histórico, distribuições, serviços e ferramentas essenciais. Também veremos a estrutura de diretórios do Linux e comandos essenciais do terminal, com o objetivo de capacitar o estudante a se sentir confortável e confiante ao trabalhar com esse sistema operacional poderoso.  

Além disso, abordaremos o **Git**, uma das ferramentas mais populares para controle de versão de software. Veremos conceitos fundamentais como repositórios, terminologia e comandos básicos, ajudando o estudante a dominar essa tecnologia indispensável para trabalho em equipe e gerenciamento de projetos.   



---

### Estrutura

#### Linux
1. [Linux: Histórico, Filosofia e Aplicações](#1-linux)
2. [Licenças de Software](#2-licenças-de-software)
3. [Distribuições Linux](#3-distribuições-linux)
4. [Terminologia Linux](#4-terminologia-linux)
5. [Serviços, Jogos e Certificações no Linux](#5-serviços-jogos-e-certificações-no-linux)
6. [Estrutura de Diretórios do Linux](#6-estrutura-de-diretórios-do-linux)
7. [Comandos Essenciais do Terminal](#7-comandos-essenciais-do-terminal)
8. [Gerenciamento de Pacotes](#8-gerenciamento-de-pacotes)
9. [Permissões de Acesso](#9-permissões-de-acesso)
#### GIT
10. [O que é Git e Controle de Versionamento](#10-o-que-é-git-e-controle-de-versionamento)
11. [Repositório Git](#11-repositório-git)
12. [Comandos Básicos do Git](#12-comandos-básicos-do-git)  
13. [Terminologia do Git](#13-terminologia-do-git)    
14. [Outros Comandos Essenciais](#14-outros-comandos-essenciais)   
15. [Trabalhando com Branches](#15-trabalhando-com-branches)
#### Arquitetura de Software  
16. [Fundamentos de Arquitetura de Software](#16-fundamentos-de-arquitetura-de-software)   
17. [Estilo Arquitetural](#17-estilo-arquitetural)  
18. [Documentação da Arquitetura de Software](#18-documentação-da-arquitetura-de-software)   
19. [Modelos Arquiteturais](#19-modelos-arquiteturais)    
20. [O Futuro da Arquitetura de Software](#20-o-futuro-da-arquitetura-de-software)
#### Design de Sistemas
21. [Fundamentos de Design de Sistemas](#21-fundamentos-de-design-de-sistemas)  
22. [Experiência do Usuário (UX)](#22-experiência-do-usuário-ux)    
23. [Interface do Usuário (UI)](#23-interface-do-usuário-ui)   
24. [Pesquisa com Usuários](#24-pesquisa-com-usuários)  
25. [Ideação e Brainstorming](#25-ideação-e-brainstorming)    
26. [Prototipação](#26-prototipação)  



---

## 1: Linux

###  Histórico e Origem
- **Linux**: Criado por Linus Torvalds em 1991, inspirado no Unix.
- **Diferenciais**:
  - Código aberto sob a licença GPL (General Public License).
  - Flexibilidade e personalização.
- **Mascote**: O pinguim Tux, criado em 1996, é o símbolo icônico do Linux.

###  Kernel
O kernel é o núcleo do sistema operacional, responsável por:
- Gerenciamento de memória.
- Gerenciamento de processos e arquivos.
- Controle de dispositivos conectados.

###  Projeto GNU
Criado por Richard Stallman em 1983, o projeto GNU:
- Desenvolve softwares livres com código aberto.
- Foi essencial para o desenvolvimento do Linux.

###  Filosofia Linux
- **Colaboração e comunidade**: Código aberto permite contribuições de diversos desenvolvedores.
- **Liberdade**: Usuários podem estudar, modificar e distribuir o software.

###  Aplicações do Linux
- **Servidores**: Estabilidade e segurança para aplicações como web hosting e banco de dados.
- **Dispositivos móveis**: Base do Android.
- **Sistemas industriais e IoT**: Adaptação a diferentes necessidades.

###  Fundações Relacionadas
- **Linux Foundation**: Promove e protege o Linux como projeto colaborativo.
- **Free Software Foundation (FSF)**: Criada por Stallman, promove a liberdade do software.

---

## 2: Licenças de Software

###  Software Livre
- Código-fonte aberto para uso, modificação e distribuição.
- Exemplos: Linux, Firefox, LibreOffice.

###  Open Source
- Código aberto para colaboração, mas nem sempre livre.

###  Copyleft
- Exige que modificações do software sejam distribuídas sob os mesmos termos da licença original.
- Exemplo: GPL.

###  Freeware e Shareware
- **Freeware**: Gratuito, mas sem acesso ao código-fonte.
- **Shareware**: Gratuito para teste, mas exige pagamento para uso contínuo.

###  Software Proprietário
- Código-fonte fechado, com uso restrito.
- Exemplos: Windows, Microsoft Office.

###  Software as a Service (SaaS)
- Software acessado via internet, oferecido por assinatura.
- Exemplos: Dropbox, Spotify, Google Apps.

---

## 3: Distribuições Linux

### O que são?
Conjuntos de ferramentas e programas baseados no kernel Linux, adaptados a diferentes necessidades.

### Principais Distribuições
1. **Debian**: Foco em estabilidade; base para outras distribuições como Ubuntu.
2. **Ubuntu**: Fácil de usar, ideal para iniciantes.
3. **Mint**: Experiência similar ao Windows.
4. **Red Hat**: Focado em soluções empresariais, com suporte comercial.

---

## 4: Terminologia Linux

###  Processo de Boot
- Etapas de inicialização do sistema operacional, do BIOS ao carregamento do kernel.

###  Sistema de Arquivos
- Estruturas como Ext4, XFS e Btrfs para gerenciar arquivos.

###  Interface Gráfica (GUI)
- **X Window System**: Base para ambientes gráficos como Gnome e KDE.

###  Linha de Comando (Terminal)
- Ferramenta poderosa para comandos avançados e automação.

###  Shell
- Interpretador de comandos; exemplos incluem Bash e Zsh.

---

## 5: Serviços, Jogos e Certificações no Linux

###  Serviços no Linux
- Ferramentas como LibreOffice, Firefox, GIMP e VLC.

###  Jogos no Linux
- Compatibilidade com jogos via Wine ou Proton (Steam).

###  Certificações Linux
- **LPI (Linux Professional Institute)**:
  - Certificações: Linux Essentials, LPIC-1, LPIC-2 e LPIC-3.

---

## 6: Estrutura de Diretórios do Linux

O Linux utiliza uma estrutura de diretórios hierárquica baseada em uma raiz única, representada pelo símbolo `/`. Cada diretório tem uma função específica:

### Diretórios Principais
- **/bin**: Armazena executáveis essenciais do sistema.  
- **/boot**: Contém arquivos necessários para a inicialização do sistema.  
- **/dev**: Representa dispositivos de hardware como arquivos especiais.  
- **/etc**: Guarda arquivos de configuração do sistema e programas.  
- **/home**: Diretório pessoal dos usuários.  
- **/root**: Diretório do usuário administrador (root).  
- **/usr**: Armazena aplicativos e arquivos compartilhados.  
- **/var**: Contém dados variáveis como logs e e-mails.  

---

## 7: Comandos Essenciais do Terminal

### Manipulação de Diretórios e Arquivos
- **ls**: Lista conteúdo de diretórios.  
  - Opções:  
    - `-l`: Mostra detalhes.  
    - `-a`: Inclui arquivos ocultos.  
    - `-h`: Exibe tamanhos em formato legível.  
- **cd**: Muda o diretório atual.  
  - Uso: `cd [caminho]`  
- **mkdir**: Cria novos diretórios.  
  - Opção:  
    - `-p`: Cria diretórios aninhados.  
- **rmdir**: Remove diretórios vazios.  
- **rm**: Remove arquivos e diretórios.  
  - Opções:  
    - `-r`: Recursivo.  
    - `-f`: Força a remoção.  
    - `-v`: Exibe detalhes das remoções.  
- **pwd**: Mostra o caminho completo do diretório atual.  

---

## 8: Gerenciamento de Pacotes
- **apt**: Gerenciador de pacotes principal do Ubuntu.  
  - Comandos comuns: `update`, `upgrade`, `install`, `remove`, `list`, `search`.  
- **dpkg**: Gerenciador de pacotes para sistemas Debian.  
  - Útil para instalar pacotes fora do repositório padrão.  

---

### Comandos de Processos
- **ps**: Exibe informações sobre processos ativos.  
- **top**: Monitora processos em tempo real.  
- **jobs**: Lista jobs em segundo plano na sessão atual.  
- **fg** e **bg**: Controlam processos em foreground e background.  
- **kill**: Encerra ou interrompe processos.  

---

## 9: Permissões de Acesso

### Tipos de Permissões
- **Leitura (r)**, **Escrita (w)**, **Execução (x)**.  
- Atribuídas a:  
  - Dono.  
  - Grupo.  
  - Outros.  

### O Usuário Root
- Possui permissões totais sobre o sistema.  
- Deve ser usado com cautela para evitar danos ao sistema.  

### Comando chmod
- Altera permissões de acesso de arquivos e diretórios.  
  - **Sintaxe**: `chmod [OPÇÕES] MODO ARQUIVO/DIRETÓRIO`.  

---

## 10: O que é Git e Controle de Versionamento  

O Git é uma das ferramentas mais populares para controle de versões, essencial para o desenvolvimento de software.  
Ele permite:  
- **Rastreabilidade**: Acompanhe e reverta alterações no código.  
- **Colaboração**: Trabalhe com múltiplos desenvolvedores sem conflitos.  
- **Backup**: Armazene todas as versões do código para evitar perdas.  
- **Integração contínua**: Automatize processos como testes e deploy.  

Links úteis:  
- [Download do Git SCM](https://git-scm.com/)  
- [Guia prático](https://rogerdudler.github.io/git-guide/index.pt_BR.html)  

---

## 11: Repositório Git  

Um **repositório Git** é onde todos os arquivos e suas versões são armazenados e gerenciados.  
Ele permite:  
- Reverter alterações.  
- Comparar versões.  
- Analisar a evolução do projeto ao longo do tempo.  

---

## 12: Comandos Básicos do Git  

### Configuração com `git config`  
O comando `git config` configura informações essenciais do usuário.  

Exemplos:  

### Configurar o nome do usuário
```
git config --global user.name "Seu Nome"
```
### Configurar o e-mail do usuário
```
git config --global user.email "seu.email@exemplo.com"
```
### Exibir configurações do Git
```
git config --list
```
### Inicialização com git init
Use o comando git init para transformar um diretório em repositório Git.

Exemplo:
```
mkdir meu-projeto
cd meu-projeto
git init
```
## 13: Terminologia do Git

### Branches e Fluxo de Trabalho
- Branches: Permitem trabalhar em linhas separadas de desenvolvimento sem afetar o código principal.
- Fluxo de Trabalho:
 -- Add (git add): Prepara as alterações para um commit.
 -- Commit (git commit): Registra as alterações no repositório local.
 -- Push (git push): Envia alterações para o repositório remoto.
  
## 14: Outros Comandos Essenciais
```git log```Exibe o histórico de commits.
```
# Exibir o histórico completo
git log

# Histórico de commits de um arquivo específico
git log <file>
```

```git status```Mostra o estado atual do repositório.
```
git status
```
```git reset```Desfaz alterações no repositório.
```
# Desfazer o último commit
git reset --soft HEAD^

# Remover arquivo do índice
git reset <nome-do-arquivo>
```
```git diff```Compara diferenças entre versões.
```
# Diferença entre dois commits
git diff <commit1> <commit2>
```

## 15: Trabalhando com Branches
Comando ```git branch```Gerencia ramificações do projeto.

```
# Listar branches existentes
git branch

# Criar nova branch
git branch nova-branch
```
Comando ```git checkout```Altera o contexto do repositório.

```
# Trocar de branch
git checkout nome-da-branch

# Criar e mudar para uma nova branch
git checkout -b nova-branch
```

---

## 16. Fundamentos de Arquitetura de Software  

A arquitetura de software é uma estrutura fundamental que orienta decisões sobre tecnologias, desempenho, escalabilidade, interoperabilidade, compatibilidade e desempenho de um sistema ou aplicativo. Ela define a organização do sistema e sua evolução ao longo do tempo.  

###  O que é um padrão na Arquitetura de Software?  
Um padrão arquitetural orienta uma visão alinhada aos negócios, servindo como uma bússola para decisões relacionadas ao projeto de software.  

###  O Surgimento da Arquitetura de Software  
- **Início das discussões**: Final dos anos 1960.  
- **Formalização**: Década de 1990, com o livro *Software Architecture: Perspectives on an Emerging Discipline* por Mary Shaw e David Garlan.  
- **Evolução**: Influenciada pela transição para a computação em nuvem e tecnologias emergentes.  

###  O Profissional em Arquitetura de Software  
O arquiteto de software vai além da programação, sendo responsável por:  
- Oferecer soluções para corporações.  
- Compreender os negócios da organização.  
- Dominar tecnologias, serviços, normas, legislações e cloud computing.  

---

## 17. Estilo Arquitetural  

###  Importância do Estilo Arquitetural  
- Proporciona níveis mais altos de abstração.  
- Ajuda a entender a estrutura geral do sistema.  
- Facilita a comunicação efetiva sobre o sistema.  

###  Vantagens do Estilo Arquitetural  
- Suporte a atributos de qualidade.  
- Reuso de arquitetura e conhecimento em novos projetos.  
- Planejamento e gerência da manutenção.  
- Diferenciação entre arquiteturas, simplificando o entendimento do projeto.  

---

## 18. Documentação da Arquitetura de Software  

A documentação da arquitetura de software é essencial para o desenvolvimento de sistemas, servindo como registro duradouro das decisões e estruturas que moldam um sistema de software.  

###  Princípios de uma boa documentação de software  
- Documentar do ponto de vista do usuário.  
- Evitar ambiguidades e repetições desnecessárias.  
- Usar modelos ou templates.  
- Manter a documentação atualizada e revisada.  
- Tornar acessível a todos os participantes do projeto.  

###  ISO/IEC/IEEE 42010:2011  
- Estabelece um padrão para a descrição da arquitetura de sistemas e softwares.  
- Proporciona um modelo conceitual para descrever e comunicar a arquitetura de forma eficaz.  

###  As Views da ISO/IEC/IEEE 42010:2011  
- **Visão Lógica**: Funcionalidade do sistema.  
- **Visão de Desenvolvimento**: Estrutura do software.  
- **Visão do Processo**: Aspecto dinâmico do sistema.  
- **Visão Física**: Infraestrutura necessária para o sistema.  

---

## 19. Modelos Arquiteturais  

###  Arquitetura em camadas (Layered pattern)  
Organiza o sistema em camadas, onde cada camada fornece serviços para a camada acima dela.  

###  Arquitetura cliente-servidor (Client-server pattern)  
Um modelo em que o servidor fornece serviços, e um ou mais clientes consomem esses serviços.  

###  Arquitetura MVC (Model-View-Controller pattern)  
Divide a aplicação em três partes interconectadas: Modelo, Visão e Controlador.  

###  Arquitetura de microserviços (Microservices pattern)  
Estrutura a aplicação como uma coleção de serviços independentes, altamente manuteníveis e testáveis.  

---

## 20. O Futuro da Arquitetura de Software  

###  Computação em Nuvem  
Permite que as empresas movam suas operações para servidores virtuais hospedados na Internet.  

###  Inteligência Artificial  
Automatiza tarefas complexas, analisa grandes volumes de dados e melhora a eficiência operacional.  

###  Microserviços  
Divide um aplicativo em pequenos serviços independentes que podem ser desenvolvidos, implantados e escalados individualmente.  

---

## 21. Fundamentos de Design de Sistemas  

O design de sistemas é uma abordagem multidisciplinar que visa criar soluções eficazes e satisfatórias para os usuários.  
Ele envolve:  
- Compreensão das necessidades dos clientes.  
- Geração de ideias inovadoras.  
- Criação de protótipos para testar e refinar soluções.  

---

## 22. Experiência do Usuário (UX)  

###  O que é UX?  
A **UX** refere-se à experiência geral que um usuário tem ao interagir com um produto ou serviço, abrangendo:  
- Descoberta inicial.  
- Uso cotidiano.  
- Suporte pós-venda.  

###  Criação da UX  
- **Origem**: Termo cunhado por Don Norman na década de 1990.  
- **Evolução**: Exemplificada pela jornada da Apple na criação de dispositivos intuitivos e centrados no usuário.  

###  Importância da UX  
Uma boa UX pode ser a diferença entre o sucesso e o fracasso de um produto, como demonstrado pelo sucesso do Netflix.  

---

## 23. Interface do Usuário (UI)  

###  Diferenças entre UX e UI  
- **UX**: Foca na experiência geral do usuário.  
- **UI**: Concentra-se especificamente na interface com a qual o usuário interage.  

###  Equilíbrio entre UX e UI  
É crucial encontrar um equilíbrio entre:  
- **Necessidades do usuário (UX)**.  
- **Demandas do negócio, oferecendo uma interface agradável e prática (UI)**.  

---

## 24. Pesquisa com Usuários  

###  Entrevistas com Usuários  
**Importância**: Entender as necessidades reais dos usuários.  

#### Processo:  
1. **Preparação**: Definir público-alvo e criar roteiro de perguntas.  
2. **Condução**: Criar um ambiente acolhedor e evitar vieses.  

###  Análise de Dados  
Utilizar os insights obtidos para informar decisões de design e desenvolvimento.  

---

## 25. Ideação e Brainstorming  

###  Técnicas de Ideação  
- **Brainstorming**: Geração livre de ideias em grupo.  
- **Crazy 8's**: Método rápido para gerar múltiplas soluções.  
- **MESCRAI**: Técnica para diversificar e desenvolver ideias existentes.  

###  Processo de Brainstorming  
1. Definir o problema.  
2. Montar um grupo multidisciplinar.  
3. Estabelecer regras.  
4. Gerar ideias.  
5. Analisar e selecionar as melhores soluções.  

---

## 26. Prototipação  

###  Importância da Prototipação  
Permite visualizar e testar ideias antes da implementação final, reduzindo custos e riscos.  

###  Tipos de Protótipos  
- **Baixa Fidelidade**: Esboços simples para demonstrar funcionalidade básica.  
- **Média Fidelidade**: Mais detalhes e interações simples.  
- **Alta Fidelidade**: Representação próxima ao produto final, com elementos visuais refinados.  

###  Processo de Prototipação  
1. Criar protótipos baseados nas ideias geradas.  
2. Testar com usuários.  
3. Coletar feedback.  
4. Iterar e refinar o design.  

---


