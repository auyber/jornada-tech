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


