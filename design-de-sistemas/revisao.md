# Fundamentos de Design de Sistemas

## Introdução
Aqui temos os princípios básicos sobre sistemas operacionais baseados em Linux, explorando seu histórico, distribuições, serviços e ferramentas essenciais. Também veremos sobre a estrutura de diretórios linux e comando essenciais do temrinal.
O objetivo é capacitar o estudante a se sentir confortável e confiante ao trabalhar com esse sistema operacional poderoso.


---

### Estrutura
1. [Linux: Histórico, Filosofia e Aplicações](#1-linux)
2. [Licenças de Software](#2-licenças-de-software)
3. [Distribuições Linux](#3-distribuições-linux)
4. [Terminologia Linux](#4-terminologia-linux)
5. [Serviços, Jogos e Certificações no Linux](#5-serviços-jogos-e-certificações-no-linux)
6. [Estrutura de Diretórios do Linux](#6-estrutura-de-diretórios-do-linux)
7. [Comandos Essenciais do Terminal](#7-comandos-essenciais-do-terminal)
8. [Gerenciamento de Pacotes](#8-gerenciamento-de-pacotes)
9. [Permissões de Acesso](#9-permissões-de-acesso)

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

