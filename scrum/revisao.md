# Scrum: Planejamento e Desenvolvimento Ágeis

## Introdução
O **Scrum** é uma metodologia ágil amplamente utilizada no desenvolvimento de software e em outros contextos organizacionais. Ele promove a colaboração, a flexibilidade e a entrega contínua de valor ao cliente, dividindo projetos em ciclos menores e gerenciáveis chamados **sprints**.  

Com foco em equipes auto-organizadas, transparência e adaptação, o Scrum ajuda empresas a responderem rapidamente às mudanças e a manterem o cliente no centro do processo.    


## Estrutura

1. [Introdução à Agilidade e Princípios](#1-introdução-à-agilidade-e-princípios)
2. [Agilidade](#2-agilidade)
3. [Scrum](#3-scrum)
4. [Papéis no Scrum](#4-papéis-no-scrum)  
5. [Cerimônias do Scrum](#5-cerimônias-do-scrum)
6. [Artefatos do Scrum](#6-artefatos-do-scrum)
7. [Ferramentas do Scrum](#7-ferramentas-do-scrum)
8. [Gestão de Liberações (Release Management)](#8-gestão-de-liberações-release-management)


## 1. Introdução à Agilidade e Princípios

### Scrum
**O que é?**  
Scrum é um framework ágil projetado para gerenciar projetos complexos e adaptativos. Ele se baseia na colaboração entre equipes multifuncionais, auto-organizadas e na entrega incremental de valor. A abordagem é altamente iterativa, com ciclos curtos chamados **sprints**, que garantem revisões frequentes e ajustes necessários ao longo do desenvolvimento.  
Seu nome vem de uma jogada do rugby, simbolizando trabalho em equipe para alcançar um objetivo.

---

### Gestão de Projetos
Historicamente, a humanidade tem se deparado com projetos que demandam soluções únicas, sejam grandes construções, desenvolvimento de produtos ou implementações tecnológicas. Cada projeto envolve um objetivo específico e recursos limitados.

Segundo o Project Management Institute (PMI), **projeto** é "um esforço temporário realizado para criar um produto, serviço ou resultado exclusivo". Essa definição destaca a singularidade de cada projeto e sua natureza temporária, em contraste com atividades rotineiras.  

Para estruturar e unificar o conhecimento na área, o PMI criou o **Project Management Body of Knowledge (PMBOK)**, um guia que organiza processos, ferramentas e melhores práticas para gestão de projetos.

#### As 10 Áreas de Conhecimento do PMBOK
O PMBOK aborda os 49 processos de gestão de projetos, distribuídos em 10 áreas de conhecimento e 5 grupos de processos. Essas áreas são:
1. **Integração**: Coordenação dos elementos do projeto.  
2. **Escopo**: Garantir que o trabalho necessário seja concluído.  
3. **Cronograma**: Planejamento e controle de prazos.  
4. **Custos**: Gestão de orçamento e controle de gastos.  
5. **Qualidade**: Entrega de resultados que atendam aos padrões esperados.  
6. **Recursos**: Gerenciamento de equipe e alocação de recursos.  
7. **Comunicações**: Fluxo de informações entre stakeholders.  
8. **Riscos**: Identificação e mitigação de incertezas.  
9. **Aquisições**: Gerenciamento de contratos e fornecedores.  
10. **Partes Interessadas**: Gerir expectativas e influências dos envolvidos.

---

### Diferenças entre PMI, PMBOK e PMP
- **PMI (Project Management Institute)**: Instituição responsável por estabelecer padrões globais de gestão de projetos.  
- **PMBOK (Project Management Body of Knowledge)**: Guia com melhores práticas para gestão de projetos.  
- **PMP (Project Management Professional)**: Certificação que valida conhecimento e experiência em gestão de projetos, baseada no PMBOK.

---

### Quando o Scrum Pode nos Ajudar?
Scrum é mais eficaz em projetos com alta incerteza ou complexidade, onde mudanças são esperadas. Para compreender isso, é essencial conhecer o **Modelo Cynefin**, que categoriza problemas e ambientes em quatro domínios:  

1. **Simples**: Soluções evidentes baseadas em boas práticas.  
   - Exemplo: Montagem de móveis seguindo um manual.  
2. **Complicados**: Exigem análise e experiência técnica.  
   - Exemplo: Planejamento de uma viagem internacional.  
3. **Complexos**: Soluções emergem através de experimentação.  
   - Exemplo: Desenvolvimento de um novo software.  
4. **Caóticos**: Demandam ações imediatas para estabilizar a situação.  
   - Exemplo: Gerenciamento de crises em segurança cibernética.

O Scrum se destaca no **domínio complexo**, onde mudanças rápidas e colaboração constante são indispensáveis.

---

## 2. Agilidade

### O Que é? Onde Vive?
Agilidade é uma mentalidade que privilegia flexibilidade, adaptação e a entrega contínua de valor. Mais do que um conjunto de práticas, é um mindset que prioriza as pessoas e a colaboração em detrimento de processos rígidos.

#### Manifesto Ágil
Criado em 2001, o **Manifesto Ágil** é um marco na história do desenvolvimento de software. Ele afirma que:  
1. Indivíduos e interações são mais importantes que processos e ferramentas.  
2. Software funcional vale mais do que documentação extensiva.  
3. Colaboração com o cliente é superior à negociação de contratos.  
4. Responder às mudanças é mais eficaz do que seguir um plano.

#### Os 12 Princípios da Agilidade
1. Satisfazer o cliente com entregas contínuas e rápidas.  
2. Aceitar mudanças, mesmo no final do projeto.  
3. Entregar software funcionando frequentemente.  
4. Colaboração diária entre negócios e desenvolvimento.  
5. Confiar em equipes motivadas, fornecendo suporte e autonomia.  
6. Comunicação face a face como a mais eficaz.  
7. Software funcional é a medida principal de progresso.  
8. Ritmos sustentáveis para patrocinadores e equipes.  
9. Excelência técnica aumenta a agilidade.  
10. Simplicidade é essencial.  
11. Times auto-organizáveis criam melhores soluções.  
12. Reflexão contínua para ajustar e melhorar.

---

### Práticas Ágeis

#### Kanban
Método visual para gerenciamento de fluxo de trabalho. Usando colunas como "A Fazer", "Em Progresso" e "Concluído", o Kanban facilita a priorização e identificação de gargalos.

#### Desenvolvimento Interativo e Incremental
- **Interativo**: Entregas em ciclos fixos e curtos, como sprints.  
  - Exemplo: Revisão semanal de progresso com stakeholders.  
- **Incremental**: Entregas de partes funcionais do software, crescendo progressivamente.  
  - Exemplo: Primeiro ciclo entrega login; segundo, perfil do usuário.

Esses modelos são complementares e frequentemente usados juntos.

---

## 3. Scrum

### A Origem do Scrum
Inspirado nos estudos de Hirotaka Takeuchi e Ikujiro Nonaka sobre equipes de alta performance no desenvolvimento de produtos, o Scrum foi formalizado por Jeff Sutherland e Ken Schwaber na década de 1990.

---

### Definições e Valores
O Scrum é guiado por três pilares:
1. **Transparência**: Todos os aspectos significativos devem ser visíveis.  
2. **Inspeção**: Revisões frequentes para detectar problemas.  
3. **Adaptação**: Ajustes baseados em feedback e inspeção.  

Os cinco valores do Scrum são:  
- **Coragem**: Enfrentar desafios sem medo.  
- **Foco**: Concentração no que é importante.  
- **Compromisso**: Entregar o que foi prometido.  
- **Respeito**: Valorizar pessoas e suas contribuições.  
- **Abertura**: Aceitar feedback e mudanças.

---

## 4. Papéis no Scrum
1. **Scrum Master**: Líder servidor que garante o funcionamento do Scrum.  
2. **Product Owner**: Representa os interesses dos stakeholders e define prioridades.  
3. **Time de Desenvolvimento**: Construtores do produto, auto-organizados e multidisciplinares.  

Características do Time Scrum:
- **Comunicação**: Frequente e transparente.  
- **Tamanho Ideal**: 3 a 9 membros.  
- **Autonomia**: Decide como o trabalho será realizado.  

---

### Cerimônias do Scrum
As cerimônias se alinham ao ciclo PDCA:
1. **Planejamento da Sprint (Plan)**: Definir backlog e metas.  
2. **Daily Scrum (Do)**: Reuniões diárias de alinhamento.  
3. **Revisão da Sprint (Check)**: Apresentação do incremento ao cliente.  
4. **Retrospectiva da Sprint (Act)**: Analisar lições aprendidas e melhorar processos.

---

## 5. Cerimônias do Scrum

###  Sprint Planning
A **Sprint Planning** é a primeira cerimônia do Scrum, realizada no início de cada Sprint. Seu objetivo é determinar:  
- **O que será feito**: definição das histórias ou requisitos a serem desenvolvidos.  
- **Como será feito**: planejamento técnico e organização das tarefas.  

#### Detalhes:
- **Time-box**: 8 horas para Sprints de 4 semanas ou 4 horas para Sprints de 2 semanas.  
- Dividida em duas partes:  
  - **Parte 1 - O que iremos fazer?**  
    O Product Owner apresenta os itens priorizados do backlog do produto e o time seleciona o que será entregue.  
  - **Parte 2 - Como iremos fazer?**  
    O time de desenvolvimento detalha as tarefas necessárias para concluir os itens escolhidos.  

---

###  Planning Poker
O **Planning Poker** é uma técnica para estimar o esforço necessário para cada funcionalidade, utilizando a sequência de Fibonacci (1, 2, 3, 5, 8, 13, etc.).  
- **Quem participa?** Apenas os desenvolvedores fazem as estimativas.  
  - **Por quê?** Eles possuem o conhecimento técnico e prático para avaliar a complexidade, esforço e tempo necessários para cada funcionalidade.  

#### Exemplo de estimativa:
- Funcionalidade de 1 ponto: simples e rápida.  
- Funcionalidade de 13 pontos: complexa, demandando mais tempo e esforço.  

---

###  Reunião Diária (Daily Scrum)
A **Daily Scrum** ou **Daily Meeting** é uma cerimônia rápida para alinhamento da equipe.  
- **Duração**: Máximo de 15 minutos.  
- **Perguntas principais**:  
  - O que foi feito nas últimas 24 horas?  
  - O que será feito nas próximas 24 horas?  
  - Quais são os impedimentos?  

#### Participação:
- Idealmente, apenas o time de desenvolvimento.  
- O Scrum Master pode estar presente para facilitar a reunião e ajudar a remover impedimentos.  

---

###  Revisão da Sprint (Sprint Review)
A **Revisão da Sprint** é a penúltima cerimônia do Scrum, onde o time de desenvolvimento apresenta o incremento ao Product Owner e demais stakeholders.  
- **Objetivo**: Validar os critérios de aceitação e receber feedback sobre o trabalho realizado.  
- **Time-box**: 4 horas para Sprints de 4 semanas.  

---

###  Retrospectiva da Sprint (Sprint Retrospective)
A **Retrospectiva** é a última cerimônia do Scrum, voltada à melhoria contínua.  
- **Objetivo**: Refletir sobre a Sprint e identificar pontos de melhoria.  
- Perguntas importantes:  
  - O que foi benéfico e deve ser mantido?  
  - O que foi prejudicial e precisa ser melhorado?  
  - Quais planos de ação serão implementados?  

---

## 6. Artefatos do Scrum

###  Backlog do Produto (Product Backlog)
Lista ordenada de tudo que é necessário para o produto.  
- **Responsável**: Product Owner.  
- **Conteúdo**: Requisitos funcionais, não funcionais e histórias de usuários.  

---

###  Backlog da Sprint (Sprint Backlog)
Lista de requisitos priorizados pelo Product Owner e selecionados para a Sprint.  
- **Formalizado**: Durante a Sprint Planning.  
- **Conteúdo**: Divisão detalhada das tarefas técnicas que o time irá realizar.  

---

###  Incremento
É o conjunto de itens concluídos na Sprint e considerados "prontos" de acordo com a **definição de pronto (Definition of Done)**.  
- **Exemplo básico**: Um formulário de login funcional e validado com todos os critérios implementados.  

---

###  História de Usuário (User Stories)
Forma de descrever requisitos ou funcionalidades do produto.  
- Estruturada em:  
  - **Ator**: Quem realiza a ação.  
  - **Ação**: O que o ator deseja fazer.  
  - **Objetivo**: O motivo da ação.  

#### INVEST
Uma boa história de usuário segue o acrônimo **INVEST**:
- **I**: Independente (não depende de outras histórias).  
- **N**: Negociável (pode ser alterada).  
- **V**: Valiosa (agrega valor ao usuário ou cliente).  
- **E**: Estimável (pode ser estimada).  
- **S**: Pequena (divisível em tarefas menores).  
- **T**: Testável (tem critérios claros de aceitação).  

---

## 7. Ferramentas do Scrum
O Scrum conta com ferramentas que auxiliam na organização e no acompanhamento do trabalho:  
- **Kanban**: Quadro visual para gerenciar o fluxo de trabalho.  
- **Burndown Chart**: Gráfico que monitora o progresso do trabalho em relação ao tempo.  
- **Backlog Refinement**: Revisão contínua dos itens do backlog para mantê-los claros e priorizados.  

---

## 8. Gestão de Liberações (Release Management)

### O Que é uma Release?
**Release** significa liberação. É o momento em que um incremento "pronto" é disponibilizado para o cliente.  
- Nem todo incremento pronto precisa ser liberado imediatamente em produção.  

#### Tipos de Liberação:
1. **Baseado na entrega**: Liberação após conclusão de todas as funcionalidades planejadas.  
2. **Entregas regulares**: Lançamentos em intervalos fixos (ex.: a cada 2 semanas).  
3. **Entrega em valor**: Priorização de itens de maior impacto para o cliente.  

---

### Planejamento de Release
Passos para planejar uma release:  
1. **Tamanho da Sprint**: Definir a duração das Sprints (ex.: 2 semanas).  
2. **Velocidade do Time**: Medir o número médio de histórias concluídas por Sprint.  
3. **Estratégia de Release**: Escolher o tipo de liberação.  
4. **Objetivos da Release**: Identificar os resultados esperados.  
5. **Quantidade de Sprints**: Calcular o número necessário para atender os objetivos.  
6. **Histórias a serem entregues**: Selecionar requisitos priorizados.  

---

### Gráficos de Progresso
1. **Burndown da Liberação (Release Burndown)**: Monitora o progresso do trabalho restante até a conclusão da release.  
2. **Burndown da Sprint**: Indica o trabalho restante dentro de uma Sprint.  

---



