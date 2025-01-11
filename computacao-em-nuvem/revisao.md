# Computação em Nuvem

## Introdução


A computação em nuvem revolucionou a forma como empresas e desenvolvedores gerenciam e escalam seus sistemas, oferecendo soluções flexíveis, escaláveis e de alto desempenho. A Amazon Web Services (AWS) se destaca nesse cenário, proporcionando uma ampla gama de serviços para atender às necessidades de infraestrutura, segurança, armazenamento, processamento e redes. Este guia explora os principais serviços da AWS, desde o gerenciamento de identidade e acesso, até soluções de computação sem servidor e contêineres, passando por ferramentas para criação de APIs, bancos de dados e microsserviços. Cada tópico será abordado de forma a fornecer uma visão clara e objetiva das funcionalidades e benefícios dos serviços AWS, auxiliando na adoção e otimização dessas tecnologias.

## Índice

1. [Conceitos e Aspectos Gerais](#1-conceitos-e-aspectos-gerais)  
2. [Benefícios da Utilização da Computação em Nuvem](#2-benefícios-da-utilização-da-computação-em-nuvem)  
3. [Modelos de Serviços de Computação em Nuvem](#3-modelos-de-serviços-de-computação-em-nuvem)  
4. [Modelo de Implantação](#4-modelo-de-implantação)  
5. [Arquitetura](#5-arquitetura)  
6. [Componentes da Arquitetura](#6-componentes-da-arquitetura)  
7. [Áreas de Foco Crítico](#7-áreas-de-foco-crítico)  
8. [Problemas de Segurança da Informação na Nuvem](#8-problemas-de-segurança-da-informação-na-nuvem)
9. [Modelo AWS](#9-modelo-aws)  
10. [Práticas Recomendadas em Nuvem](#10-práticas-recomendadas-em-nuvem)  
11. [Infraestrutura](#11-infraestrutura)  
12. [Identidade e Acesso](#12-identidade-e-acesso)  
13. [Precificação e Faturamento](#13-precificação-e-faturamento)  
14. [Máquina Virtual e Container](#14-máquina-virtual-e-container)  
15. [AWS Identity and Access Management (IAM)](#15-aws-identity-and-access-management-iam)  
16. [Identidades do IAM](#16-identidades-do-iam)  
17. [Gerenciamento de Acesso](#17-gerenciamento-de-acesso)  
18. [Amazon Elastic Compute Cloud (EC2)](#18-amazon-elastic-compute-cloud-ec2)  
19. [Amazon Elastic Block Store (EBS)](#19-amazon-elastic-block-store-ebs)  
20. [Amazon Simple Storage Service (S3)](#20-amazon-simple-storage-service-s3)  
21. [Amazon Relational Database Service (RDS)](#21-amazon-relational-database-service-rds)  
22. [Instâncias](#22-instâncias)  
23. [Amazon Elasticache](#23-amazon-elasticache)  
24. [Amazon Cloudfront](#24-amazon-cloudfront)  
25. [Amazon DynamoDB](#25-amazon-dynamodb)  
26. [Amazon Glacier e Amazon Virtual Private Cloud (VPC)](#26-amazon-glacier-e-amazon-virtual-private-cloud-vpc)  
27. [Amazon API Gateway](#27-amazon-api-gateway)  
28. [Amazon Lambda](#28-amazon-lambda)  
29. [Docker e Microsserviços](#29-docker-e-microsserviços)  
30. [Amazon Elastic Container Registry (ECR) e Amazon Elastic Container Service (ECS)](#30-amazon-elastic-container-registry-e-amazon-elastic-container-service-ecs)  
31. [Amazon Elastic Kubernetes Services (EKS)](#31-amazon-elastic-kubernetes-services-eks)

## 1. Conceitos e Aspectos Gerais

Antes de adentrarmos em aspectos mais complexos, é importante entender as definições principais e características essenciais para a implementação da computação em nuvem.

### Definição

A computação em nuvem, ou cloud computing, refere-se ao modelo que oferece a tecnologia como serviço (ITaaS), onde são fornecidos recursos como servidores, armazenamento, bancos de dados, redes, software, análise e inteligência através da internet. O principal objetivo desse modelo é otimizar o uso de recursos sem sacrificar a flexibilidade. Em termos simples, "é um conjunto de recursos como capacidade de processamento, armazenamento, conectividade, plataformas, aplicações e serviços disponíveis via internet" (Taurion, 2009, p. 2).

---

### Exemplo de Utilização de Recursos de TI

- **Infraestrutura Local:** Acesso aos recursos de TI através de sistemas locais.
- **Infraestrutura em Nuvem:** Acesso a recursos de TI através da nuvem via internet.

A abordagem ITaaS implica na terceirização da gestão da infraestrutura de TI para parceiros ou empresas externas (outsourcing), facilitando o gerenciamento e proporcionando mais agilidade e redução de custos.

Ao adotar a computação em nuvem, as organizações podem delegar responsabilidades, como segurança, manutenção e atualização de hardware, enquanto desfrutam da flexibilidade de expandir a capacidade de processamento e armazenamento conforme a demanda.

---

### Modelo de Referência NIST

O modelo de computação em nuvem do NIST define as características essenciais, os modelos de serviços e de implantação, sendo atualmente a definição mais aceita na área.

### Características Essenciais

O NIST descreve cinco características essenciais para a efetiva entrega de serviços de TI em nuvem:

1. **Autoatendimento sob demanda:** Permite que os usuários acessem e utilizem os recursos conforme a necessidade, de forma fácil e rápida.
2. **Amplo acesso à rede:** Recursos disponíveis em rede, com padrões que permitem o acesso por diversos dispositivos.
3. **Compartilhamento de recursos:** Alocação e liberação de recursos (como armazenamento, processamento e memória) conforme a demanda, de forma compartilhada entre usuários.
4. **Elasticidade:** Capacidade de expandir ou reduzir recursos automaticamente, com a sensação de recursos ilimitados conforme a demanda cresce.
5. **Serviços mensuráveis:** Otimização e controle automáticos do uso de recursos, com monitoramento e relatórios que garantem transparência para consumidores e fornecedores de serviços.
   
---

## 2. Benefícios da Utilização da Computação em Nuvem

A computação em nuvem proporciona várias vantagens, especialmente no que diz respeito à otimização de recursos e redução de custos em larga escala.

### Economias de Escala

1. **Fornecimento (Grandes Centros de Dados)**: A utilização de grandes centros de dados resulta em:
   - Redução dos custos com energia e pessoal.
   - Aumento da segurança e confiabilidade.
   - Potencial para negociar com melhores condições devido ao poder de compra elevado.

2. **Demanda (Agregação de Demanda)**: A agregação de várias demandas de diferentes usuários permite:
   - Minimizar a variabilidade de custos.
   - Estabelecer padrões de uso eficientes.
   - Gerenciar a incerteza no crescimento do uso, oferecendo flexibilidade e controlando os recursos de maneira mais eficiente.

3. **Arquitetura Multilocatário (Multitenancy)**: Quando um único aplicativo é usado por múltiplos clientes, os custos são compartilhados entre os inquilinos, o que leva à:
   - Amortização dos custos de software e servidores, tornando o serviço mais acessível e eficiente.

Esses modelos de economia tornam a computação em nuvem uma solução vantajosa para empresas que buscam reduzir custos e aumentar a eficiência.

---

## 3. Modelos de Serviços de Computação em Nuvem

A computação em nuvem é organizada em três modelos principais de serviço, que variam conforme o nível de controle e recursos fornecidos.

### 1. **Software como Serviço (SaaS)**

Neste modelo, os aplicativos são fornecidos diretamente na nuvem e acessados via navegador de internet, eliminando a necessidade de processamento local. O provedor gerencia toda a infraestrutura necessária, como redes, servidores e sistemas operacionais, e o cliente usa apenas o serviço. Exemplos populares incluem Google Drive e Salesforce.

### 2. **Plataforma como Serviço (PaaS)**

O PaaS oferece um ambiente completo para o desenvolvimento e execução de aplicativos na nuvem. Fornecendo ferramentas, recursos de computação e armazenamento, o PaaS facilita o desenvolvimento de aplicativos, sem que o desenvolvedor precise gerenciar a infraestrutura subjacente. Ele também suporta o SaaS, permitindo que os aplicativos SaaS sejam desenvolvidos e executados. Exemplos incluem Google AppEngine e Microsoft Azure.

### 3. **Infraestrutura como Serviço (IaaS)**

Com o IaaS, os usuários podem alugar recursos de computação, como servidores e armazenamento, de forma flexível e escalável. A infraestrutura física é gerenciada pelo provedor, enquanto o usuário tem controle sobre as máquinas virtuais. O modelo IaaS oferece total transparência da infraestrutura, sendo essencial para empresas que precisam de flexibilidade e escalabilidade para suas operações. Um exemplo amplamente utilizado é o Amazon Web Services (AWS) e Amazon EC2.

---

### Atores nos Modelos de Serviços

Nos modelos de serviços em nuvem, os provedores são responsáveis por desenvolver e fornecer os serviços através das interfaces de nuvem. Os consumidores podem assumir diferentes papéis conforme suas necessidades e interesses.

### Gerenciamento e Segurança nos Modelos de Serviços

Cada modelo de serviço em nuvem envolve responsabilidades específicas:

- **SaaS (Software as a Service)**: O provedor é totalmente responsável pela gestão e segurança do serviço.
- **PaaS (Platform as a Service)**: O cliente gerencia as aplicações, enquanto o provedor é responsável pela segurança.
- **IaaS (Infrastructure as a Service)**: O provedor cuida da infraestrutura, e o cliente gerencia as aplicações, bancos de dados e segurança.

---

## 4. Modelo de Implantação

De acordo com o modelo NIST (2011b), existem quatro tipos de modelos de implantação em nuvem: **privada**, **pública**, **comunitária** e **híbrida**.

### Nuvem Privada

A nuvem privada pode ser gerenciada pela organização ou por terceiros, oferecendo serviços exclusivos para uso interno. Não há compartilhamento de infraestrutura com outros usuários. Existem duas variantes de nuvem privada: **hospedada localmente** (na organização) ou **hospedada por um provedor** (virtual).

### Nuvem Pública

Neste modelo, várias empresas compartilham recursos físicos disponibilizados por um provedor, podendo ser oferecidos por organizações públicas ou grandes grupos industriais. O serviço é entregue através de uma rede aberta e de uso público.

### Nuvem Comunitária

A nuvem comunitária é compartilhada por várias organizações com interesses comuns, que contratam uma infraestrutura privada para uso coletivo. A gestão e a localização podem ser feitas pelas próprias organizações ou por terceiros.

### Nuvem Híbrida

A nuvem híbrida combina dois ou mais modelos de implantação (privada, pública, comunitária) conectados por tecnologias próprias ou padronizadas, permitindo a portabilidade de dados e aplicativos. A Figura 11 ilustra esse modelo.

---

### Vantagens e Desvantagens dos Modelos de Implantação

Cada tipo de nuvem oferece benefícios distintos. Veja os principais pontos de cada modelo:

1. **Nuvens privadas e públicas**:
   - Proporcionam alta eficiência e disponibilidade.
   - Oferecem elasticidade e podem ser rapidamente implantadas.

2. **Nuvem pública**:
   - Possui custos mais baixos e aproveita a economia de escala.
   - O gerenciamento é mais simples e os pagamentos ocorrem como despesas operacionais.
   - No entanto, há um risco maior quanto à privacidade dos dados.

3. **Nuvem privada**:
   - Facilitam a integração com sistemas existentes.
   - São mais econômicas a longo prazo, com maior controle sobre segurança, conformidade e qualidade dos serviços.
   - Os custos podem ser divididos entre despesas de capital e operacionais.

---

## 5. Arquitetura

### Arquitetura de Referência NIST

O NIST (2011a) propôs um modelo de referência que é amplamente aceito como o mais conceitual para discutir requisitos, estruturar arquiteturas e analisar soluções baseadas em computação em nuvem. Este modelo define os atores, atividades, responsabilidades e funções envolvidas. O modelo de referência é composto por cinco principais atores:

1. **Provedor (Cloud Provider)**: Fornece os serviços.
2. **Consumidor (Cloud Consumer)**: Utiliza ou contrata os serviços.
3. **Agente (Cloud Broker)**: Intermediário entre consumidores e provedores.
4. **Auditor (Cloud Auditor)**: Monitora desempenho e segurança, realizando auditorias independentes.
5. **Operador (Cloud Carrier)**: Gerencia as comunicações entre consumidores e provedores, operando a infraestrutura de telecomunicações.

---

### Consumidor e Provedor da Nuvem

Cada modelo de serviço tem atividades distintas tanto para os consumidores quanto para os provedores:

- **SaaS**: O consumidor utiliza o aplicativo enquanto o provedor gerencia e mantém a aplicação.
- **PaaS**: O consumidor desenvolve e gerencia aplicativos, enquanto o provedor oferece as ferramentas e a infraestrutura para desenvolvimento.
- **IaaS**: O consumidor cria e gerencia a infraestrutura, enquanto o provedor fornece o ambiente de hospedagem, processamento e armazenamento.

Essas atividades podem ser analisadas sob quatro perspectivas: orquestração de serviços, gerenciamento de serviços, segurança e privacidade.

---

### Agente de Nuvem
O agente de nuvem atua como intermediário entre consumidores e provedores, simplificando a integração de serviços complexos. Ele oferece uma interface única para acessar diversos serviços de nuvem. Suas funções incluem:
- **Intermediação de serviços**: Aperfeiçoamento de serviços existentes.
- **Agregação de serviços**: Combinação de diferentes serviços em uma solução única.
- **Arbitragem de serviços**: Flexibilidade para escolher entre serviços de vários provedores.

---

### Auditor de Nuvem
Auditores de nuvem realizam verificações para garantir que os provedores estejam em conformidade com os padrões de segurança, privacidade e desempenho. Eles desempenham um papel crucial na manutenção da confiança no ambiente de nuvem.

---

### Modelo de Segurança CSA
A Cloud Security Alliance (CSA) desenvolveu um guia de segurança para a nuvem, focando em 14 domínios de melhores práticas. A arquitetura de segurança envolve o conceito de **multilocatário** (multitenancy), onde múltiplos consumidores compartilham os mesmos recursos ou aplicações. Dependendo do modelo de serviço, a responsabilidade pela segurança pode variar:

- **IaaS**: O consumidor gerencia recursos de infraestrutura, APIs e conectividade.
- **PaaS**: O provedor oferece recursos de middleware e frameworks, e o consumidor gerencia os aplicativos.
- **SaaS**: O provedor cuida de todos os aspectos, incluindo entrega de aplicativos e recursos de gerenciamento.

---

# 6. Componentes da arquitetura

### Orquestração de Serviços

A orquestração de serviços refere-se ao gerenciamento e coordenação da infraestrutura necessária para fornecer recursos na nuvem. O modelo NIST define três camadas principais:

- **Camada de serviço**: Define e fornece os três tipos de serviços.
- **Camada intermediária**: Contém os componentes utilizados pelo provedor, como software e máquinas virtuais.
- **Camada de recursos físicos**: Abrange os recursos físicos de computação, como CPU, memória, redes e armazenamento.

### Gerenciamento de Serviços

Este componente abrange a gestão dos serviços na nuvem, que envolve:

- **Suporte a negócios**: Gerenciamento de contratos e preços.
- **Fornecimento e configuração**: Cuida da instalação, operação, manutenção e medição dos serviços.
- **Portabilidade e interoperabilidade**: Envolve a capacidade de migrar e integrar dados, sistemas e serviços.

### Segurança e Privacidade

A segurança na nuvem envolve a proteção de dados e serviços. As áreas críticas de segurança são divididas em dois domínios:

- **Domínio de governança**: Relacionado à gestão de riscos e políticas.
- **Domínio operacional**: Focado na implantação, segurança e recuperação de incidentes.

## 7. Áreas de Foco Crítico

A segurança na computação em nuvem envolve controles em diversas camadas, como segurança física, de rede, de sistemas e de aplicativos. A responsabilidade pela segurança varia conforme o modelo de serviço (SaaS, PaaS, IaaS).

| **Domínio**                            | **Conteúdo**                                                                 |
|----------------------------------------|-------------------------------------------------------------------------------|
| **Segurança tradicional**              | Gestão de riscos e continuidade dos negócios.                                |
| **Operações de Centro de Dados**       | Análise da arquitetura para identificar problemas e garantir estabilidade.    |
| **Resposta a incidentes**              | Processos de detecção, resposta e correção de incidentes.                    |
| **Segurança de aplicações**            | Proteção no desenvolvimento e execução de aplicações na nuvem.              |
| **Criptografia e gerenciamento de chaves** | Proteção dos dados através de criptografia e gerenciamento de chaves.       |
| **Gerenciamento de identidade e acesso**| Controle sobre identidades e acessos na nuvem.                              |
| **Virtualização**                      | Gestão de riscos em ambientes multilocatários e de virtualização.            |
| **Segurança como serviço**             | Delegação da responsabilidade de segurança a terceiros.                      |

## 8. Problemas de Segurança da Informação na Nuvem

A computação em nuvem introduz novos riscos que precisam ser compreendidos. As principais preocupações incluem:

| **Preocupação**                        | **Descrição**                                                                 |
|----------------------------------------|-------------------------------------------------------------------------------|
| **Disponibilidade da rede**            | A alta disponibilidade da rede e largura de banda é crucial para o funcionamento dos serviços. |
| **Viabilidade do provedor**            | A dependência de tecnologia proprietária pode dificultar a migração entre provedores. |
| **Recuperação de desastres**           | Necessidade de planos para garantir a continuidade dos serviços em caso de falhas. |
| **Incidentes de segurança**            | A resposta e a notificação rápida a incidentes de segurança são essenciais.  |
| **Transparência**                      | A verificação das políticas de segurança do provedor deve ser clara.          |
| **Perda de controle físico dos dados** | Garantir que os dados sejam adequadamente tratados em termos de armazenamento, processamento e exclusão. |
| **Aspectos legais e regulatórios**     | Observar a conformidade com regulamentos aplicáveis aos provedores de serviços. |

---

## 9. Modelo AWS

### NIST e AWS

A Amazon Web Services (AWS) é uma plataforma de computação em nuvem que oferece serviços de infraestrutura sob demanda. Classificada principalmente como IaaS, com opções de PaaS, a AWS segue de perto o modelo de referência NIST, utilizando a nuvem pública em grande parte.

### Benefícios Comerciais da Computação em Nuvem

A computação em nuvem traz diversos benefícios para as empresas, como:

- **Baixo custo inicial**: não há necessidade de investimentos em infraestrutura fixa.
- **Infraestrutura autoprovisionável**: recursos dimensionados conforme a demanda, com pagamento por uso.
- **Recursos eficientes**: fácil escalabilidade de acordo com as necessidades do aplicativo.
- **Custo baseado no uso**: você paga apenas pelos recursos que utiliza, sem custos adicionais.
- **Redução no tempo de entrega**: a infraestrutura elástica permite maior agilidade e paralelização no processamento.

---

### Benefícios Técnicos da Computação em Nuvem

Entre os benefícios técnicos da nuvem, destacam-se:
- **Infraestrutura programável**: possibilita a criação de sistemas replicáveis.
- **Dimensionamento automático**: os aplicativos se ajustam automaticamente à demanda.
- **Dimensionamento proativo**: o sistema pode antecipar a demanda com base no tráfego.
- **Eficiência no desenvolvimento**: permite criar ambientes de teste rapidamente.
- **Recuperação de desastres**: fácil replicação de ambientes em outro local.
- **Gestão de tráfego**: balanceamento de carga para lidar com picos de tráfego.

---

### Noções Básicas sobre AWS

A AWS oferece uma infraestrutura escalável e confiável, com flexibilidade na escolha de:

- Modelos de programação, linguagens e sistemas operacionais.
- Produtos AWS específicos, conforme a necessidade do projeto.
- Recursos ajustáveis, pagando apenas pelo que é efetivamente utilizado.
Além disso, permite a utilização de ferramentas já existentes no gerenciamento de sistemas, facilitando a migração de centros de dados para a nuvem.

---

### Estrutura da AWS

A estrutura da AWS é composta por três principais partes:

1. **Infraestrutura Global**: abrange zonas de disponibilidade, regiões, pontos de presença e DNS.
2. **Serviços de Infraestrutura**: inclui processamento, armazenamento, redes, banco de dados e gerenciamento.
3. **Serviços Básicos de Plataforma**: oferece mensageria, workflows e gerenciamento de aplicativos.

## 10. Práticas Recomendadas em Nuvem

### Preparação para Falhas

Ao criar um aplicativo na nuvem, é essencial planejar a recuperação de falhas de maneira automatizada. Algumas estratégias incluem:

- Backup e restauração automatizados.
- Processos que podem ser reiniciados automaticamente.
- Ressincronização de filas de mensagens.
- Uso de imagens pré-configuradas e otimização.
- Armazenamento de dados em nuvem.

---

### Separação de Componentes

Manter os componentes isolados, sem dependências diretas entre eles, facilita a recuperação em caso de falhas. Isso garante que a aplicação continue funcionando, mesmo que um dos componentes tenha problemas. A separação é crucial para permitir modelos híbridos, onde o tráfego adicional pode ser direcionado para a nuvem.

---

### Elasticidade

A elasticidade permite ajustar automaticamente a infraestrutura conforme a demanda, o que reduz custos e aumenta a eficiência. Existem três formas de implementação de elasticidade:

- **Proativo cíclico**: dimensionamento em intervalos fixos.
- **Proativo baseado em evento**: aumento de recursos em eventos específicos, como campanhas.
- **Auto-Scaling baseado em demanda**: ajustes automáticos conforme métricas.

---

## Paralelização

A distribuição de solicitações em múltiplos servidores web usando balanceamento de carga é uma prática eficaz. Juntamente com a elasticidade, a paralelização permite a execução de tarefas de forma simultânea, otimizando o processamento e armazenamento de dados.

---

### Dados Dinâmicos e Dados Estáticos

Para reduzir a latência, dados dinâmicos devem ser mantidos próximos ao ponto de utilização. Dados estáticos, como vídeos e imagens, devem ser armazenados em cache local, próximo ao usuário, para otimizar a transferência.

---

### Segurança

Embora a segurança física seja responsabilidade do provedor de nuvem, a segurança da rede e dos aplicativos é responsabilidade do usuário. Medidas de segurança incluem:
- Uso de SSL para dados confidenciais.
- Criptografia de dados antes de enviá-los para a nuvem.
- Proteção contra perda de dados através de snapshots periódicos.

---

## 11. Infraestrutura

### Infraestrutura Global

A AWS é composta por recursos hospedados em várias regiões globais, com zonas de disponibilidade para alta redundância e escalabilidade. A infraestrutura global é formada por:

- **Regiões**: Locais físicos com várias zonas de disponibilidade, separados por áreas geográficas. Em 2020, a AWS possuía 22 regiões.
- **Zonas de Disponibilidade (AZ)**: Zonas independentes com centros de dados redundantes. A AWS tinha 70 zonas de disponibilidade em 2020.
- **Pontos de Presença**: Infraestruturas para melhorar a usabilidade dos serviços. A AWS possuía 216 pontos de presença, com 4 na América do Sul.
- **DNS (Route53)**: Serviço que conecta as solicitações dos usuários à infraestrutura da AWS.

---

### Serviços de Infraestrutura

A AWS oferece diversos serviços para suportar a infraestrutura de nuvem. Alguns dos principais serviços incluem:

- **Computação**:
  - **Amazon EC2**: Serviço de servidores virtuais com capacidade de redimensionamento.
  - **Amazon EMR**: Plataforma para processamento de big data.
- **Armazenamento**:
  - **Amazon S3**: Armazenamento de objetos em grande escala.
  - **Amazon EBS**: Armazenamento em volumes com diferentes tipos.
  - **Amazon Glacier**: Armazenamento de longo prazo.
- **Rede**:
  - **Amazon VPC**: Criação de redes privadas virtuais.
  - **Amazon Route53**: Serviço DNS utilizado por operadoras de telecomunicações.
- **Banco de Dados**:
  - **Amazon RDS**: Banco de dados relacional com suporte a seis mecanismos.
  - **Amazon ElasticCache**: Armazenamento em memória cache.
  - **Amazon DynamoDB**: Banco de dados NoSQL escalável.

---

### Serviços Básicos da Plataforma

A AWS também oferece serviços para facilitar o gerenciamento de aplicativos, conteúdos e fluxos de trabalho:
- **Gerenciamento de Aplicativos**:
  - **Amazon Elastic Beanstalk**: Gerenciamento de implantação, escalonamento e monitoramento de aplicativos.
  - **AWS CloudFormation**: Criação e gerenciamento de recursos em grupo.
  - **Amazon CloudSearch**: Integração de busca rápida e escalável.
- **Gerenciamento de Conteúdo**:
  - **Amazon Cloudfront**: Distribuição de conteúdos estáticos e em streaming.
- **Mensageria**:
  - **Amazon SQS**: Serviço de mensageria.
  - **Amazon SES**: Envio de e-mails.
  - **Amazon SNS**: Notificações simples.
- **Workflow**:
  - **Amazon SWF**: Gerenciamento de fluxos de trabalho.

---

## 12. Identidade e Acesso

O controle de acesso seguro na AWS é essencial e envolve a verificação de identidades. O **Identity and Access Management (IAM)** é o serviço responsável por gerenciar usuários e permissões, sendo fundamental para organizações que utilizam EC2 e S3 (Veras, 2013).

### Conceitos

1. **Usuário**: Pessoa utilizando o serviço de um provedor, que precisa de uma identidade.
2. **Identidade**: Representação do usuário no contexto, incluindo identificadores e credenciais.
3. **Credencial**: Garantia emitida por uma autoridade para validar a identidade.
4. **Autenticação**: Verificação da identidade por meio de credenciais.
5. **Autorização**: Verificação das permissões de acesso do usuário autenticado.
6. **Federação**: Acordo entre organizações para simplificar a autenticação e autorização de usuários.
7. **Single Sign-On (SSO)**: Uso de uma única credencial para autenticação em múltiplos serviços.

---

### Identidade de Acesso na AWS

Implementar um sistema de gerenciamento de identidade (SGI) melhora a segurança e reduz custos. O **IAM**, como SGI, garante a privacidade e segurança na nuvem, evitando a necessidade de segurança redundante em várias aplicações. Ele também:

- Impede a execução de serviços não autorizados.
- Oferece diversas opções de autenticação, como:
  - ID de usuário + senha.
  - Certificados digitais.
  - Tokens.
  - Biometria.
  - Combinações de métodos.
- Permite criar trilhas de auditoria para rastrear acessos.

### Credenciais de Segurança

Existem três tipos principais de credenciais de segurança:

1. **Credenciais de Acesso**:
   - **Chave de acesso**: Usada para REST e QUERY de forma segura.
   - **Certificados X.509**: Usados em protocolos SOAP.
   - **Pares de chave**: Aplicáveis ao Amazon CloudFront e Amazon EC2.

2. **Credenciais de Conexão**:
   - E-mail e senha cadastrados.
   - Autenticação multifatorial (**MFA**) para aumentar a segurança.

3. **Identificadores de Conta**:
   - **ID de usuário canônico**: Exclusivo para S3.
   - **ID da conta**: Usado para outros serviços da AWS.
   - 
---

### Identity and Access Management (IAM)

O IAM permite gerenciar recursos da AWS de forma centralizada. Algumas boas práticas incluem:

1. Criar usuários individuais.
2. Gerenciar permissões em grupo.
3. Conceder o menor privilégio possível.
4. Ativar o **AWS CloudTrail** para auditoria.
5. Configurar políticas de senha forte.
6. Habilitar **MFA** para usuários com altos privilégios.
7. Usar funções IAM em instâncias do **Amazon EC2**.
8. Realizar rodízios frequentes de credenciais.
9. Restringir acessos privilegiados.
10. Reduzir ou evitar o uso do usuário **root**.

---

## 13. Precificação e Faturamento

A AWS adota um modelo de pagamento conforme o uso, permitindo o pagamento por serviços individuais e pelo tempo de uso, sem contratos de longo prazo.

### Formas de Pagamento

1. **Conforme Uso**:
   - Flexibilidade para adaptar a capacidade conforme a necessidade.
2. **Reserva de Serviço**:
   - Pagamento único por serviços como EC2 e RDS.
3. **Descontos por Volume**:
   - Descontos baseados no volume de uso.

---

### Precificação Amazon EC2

O EC2 pode ser pago de cinco maneiras:

1. **Por Demanda**:
   - Pagamento por hora ou segundos.
   - Sem compromisso de longo prazo.
   - Recomendado para:
     - Custos baixos e flexibilidade.
     - Cargas de trabalho breves.
     - Aplicativos em desenvolvimento ou teste.

2. **Savings Plans**:
   - Preços reduzidos com compromisso de uso por 1 ou 3 anos.

3. **Reservadas**:
   - Descontos de até 75%.
   - Ideal para uso contínuo e compromissos de longo prazo.

4. **Spot**:
   - Capacidade extra com desconto de até 90%.
   - Para aplicações com início e término definidos.

5. **Host Dedicados**:
   - Servidor físico dedicado.
   - Pagamento sob demanda ou com reserva (desconto de 75%).

---

### Precificação Amazon S3

O S3 cobra por:

1. **Armazenamento**:
   - Baseado no tamanho, tempo e classe de armazenamento (e.g., Standard, Intelligent Tiering, Glacier).

2. **Solicitações e Recuperação de Dados**:
   - Taxa por solicitações como **GET** e **LIST**.
   - Solicitações **DELETE** são gratuitas.

3. **Transferência de Dados**:
   - Cobrança por largura de banda de entrada e saída.

4. **Gerenciamento e Replicação**:
   - Cobrança por recursos gerenciados, como inventário e análise.

---

### Uso Gratuito

- **Amazon EC2**:
  - 750 horas de instância gratuita por mês durante um ano (apenas microinstâncias).
- **Amazon S3**:
  - 5GB de armazenamento gratuito na classe Standard por um ano.

---

### Suporte AWS

Inclui suporte básico para todos os clientes:
- Atendimento ao cliente e comunidade 24/7.
- **AWS Trusted Advisor**: Verificações e instruções para provisionamento.
- **AWS Personal Health Dashboard**: Monitoramento da integridade dos serviços.

---

### Planos de Suporte

A AWS oferece planos adicionais:
1. **Desenvolvedor**.
2. **Business**.
3. **Empresarial**.

---

### Faturamento

O serviço **Billing and Cost Management** permite:
1. Estimar e planejar custos.
2. Receber alertas sobre limites de custo.
3. Avaliar investimentos.
4. Simplificar o controle de múltiplas contas AWS.

---

## 14. Máquina Virtual e Container

### Máquina Virtual

As máquinas virtuais (VMs) emulam tanto o sistema operacional quanto o hardware, consumindo mais recursos. Segundo Veras (2016), a virtualização cria uma camada entre o hardware e o software, isolando as aplicações do hardware físico. Isso protege os recursos e permite o uso eficiente através de softwares especializados.

---

### Container

Os containers empacotam aplicações junto com suas dependências, tornando-os mais leves e integrados ao sistema operacional do servidor. Diferentemente das VMs, os containers emulam apenas as aplicações, aumentando a portabilidade e reduzindo o consumo de recursos. Eles oferecem benefícios como:

- **Execução em qualquer ambiente.**
- **Melhoria no uso de recursos.**
- **Alta escalabilidade.**

---

### Docker

O Docker é uma plataforma como serviço (PaaS) criada em 2008, que funciona de forma independente de linguagens de programação. É um projeto open source, com suporte a Linux, Windows e MacOS, além de integrar com a AWS para facilitar a implantação de containers.

---

### Microsserviços
Enquanto aplicações monolíticas concentram todos os serviços em um único container, microsserviços dividem os componentes em partes independentes que se comunicam via APIs. Isso facilita manutenção, escalabilidade e uso de diferentes linguagens.

---

### Containers na AWS

A AWS fornece serviços para gerenciar containers, agrupados em três categorias principais:

1. **Registro:**
   - *Amazon Elastic Container Registry (ECR)*: Gerencia, armazena e implementa imagens de containers.

2. **Orquestração:**
   - *Amazon Elastic Container Service (ECS)*: Gerencia a execução de aplicativos em containers.
   - *Amazon Elastic Kubernetes Services (EKS)*: Usa Kubernetes para orquestrar aplicativos.

3. **Computação:**
   - *AWS Fargate*: Oferece computação sem servidor para containers.
   - *Amazon EC2*: Executa containers em máquinas virtuais, permitindo controle total do servidor.

---

## 15. AWS Identity and Access Management (IAM)

### O que é o IAM?

O IAM é uma ferramenta gratuita da AWS para gerenciar quem pode acessar serviços e recursos, controlando autenticação e autorização de maneira segura. Embora o IAM seja gratuito, os serviços usados com ele podem ter custos. Ele organiza o acesso a recursos como usuários, grupos, funções e provedores de identidade.

---

### Elementos Principais do IAM

1. **Principal:** É quem faz solicitações à AWS (pessoa ou aplicativo). A conta raiz é criada no início e deve ser usada apenas para tarefas administrativas. Para operações do dia a dia, é recomendado criar entidades específicas no IAM.
2. **Solicitação:** Qualquer ação realizada pelo console, API ou CLI envia uma solicitação com informações como IP, contexto e recurso alvo.
3. **Autenticação:** Requer login com e-mail e senha (usuário raiz), usuário IAM ou chaves de acesso para API/CLI.
4. **Autorização:** Após a autenticação, a solicitação é validada por políticas que determinam permissões.
5. **Ações/Operações:** São atividades permitidas nos recursos, como criar, editar ou excluir.
6. **Recursos:** Itens gerenciados na AWS, como instâncias EC2, buckets S3 ou usuários do IAM.

---

### Gerenciamento de Identidades

É possível criar usuários e atribuir permissões específicas para maior controle e segurança. Caso a organização já tenha um sistema de autenticação, identidades externas podem ser federadas com o IAM. Aplicativos também podem usar federação via OpenID Connect (OIDC).

---

### Gerenciamento de Acesso

Permissões definem o que cada identidade pode fazer. Essas permissões são controladas por políticas anexadas a identidades ou recursos. As políticas podem permitir ou negar ações com base em regras definidas.

---

### Políticas no IAM

- **Usuários:** Por padrão, novos usuários não têm acesso e precisam de políticas anexadas. 
- **Grupos:** Organizam usuários, permitindo anexar políticas coletivas enquanto mantêm credenciais individuais.
- **Funções:** São úteis para acessar múltiplas contas ou permitir que identidades externas realizem ações específicas.

---

## Usuários, Federados e Funções
Usuários federados não têm identidades permanentes na AWS. Para eles, são criadas funções com permissões específicas, atribuídas no momento do login. Assim, a autorização é baseada na associação com a função configurada.

---

## 16. Identidades do IAM

As identidades do IAM são criadas para autenticar pessoas e processos nas contas da AWS. Elas permitem o gerenciamento de usuários, agrupando-os e associando políticas que definem permissões específicas.

### Usuários

- **Definição**: Representam uma pessoa ou aplicativo com nome e credenciais para interação com a AWS.
- **Usuário raiz**: Possui acesso total à conta. Para acesso de administrador, recomenda-se criar um usuário IAM, incluí-lo no grupo "Administradores" e anexar a política gerenciada `AdministratorAccess`.

#### Identificadores de Usuários no IAM

1. **Nome amigável**: Exibido no Console AWS (ex.: Bob, TestApp).
2. **ARN (Amazon Resource Name)**: Identificação exclusiva no formato: arn:partition:service:region:account:resource
- **Exemplo**: `arn:aws:iam::123456789012:root`
3. **ID exclusivo**: Retornado via API, usado para identificar entidades como usuários (prefixo AIDA), grupos (AGPA), entre outros.

---

### Grupos

- **Definição**: Conjuntos de usuários com permissões especificadas.
- **Características**:
1. Podem conter vários usuários (um usuário pode participar de múltiplos grupos).
2. Não podem conter outros grupos.
3. Não há grupo padrão; é necessário criar e incluir usuários manualmente.
4. Há limites para a quantidade de grupos e participações de usuários.

#### Ferramentas de Gerenciamento

- Listagem de grupos.
- Inclusão e remoção de usuários.
- Anexar políticas.
- Renomear ou excluir grupos.

---

### Funções

- **Definição**: Identidade com permissões específicas, que pode ser assumida por qualquer entidade quando necessário.
- **Características**:
- Não possuem credenciais de longo prazo.
- Geram credenciais temporárias para quem assume a função.

#### Tipos de Funções

1. **Função de serviço**: Serviços AWS assumem a função para ações específicas na conta.
2. **Função para instância EC2**: Permite que aplicativos recuperem credenciais temporárias.
3. **Função vinculada ao serviço**: Vinculada diretamente a um serviço AWS, com permissões predefinidas.

---

## 17. Gerenciamento de Acesso

O gerenciamento de acesso é realizado criando políticas e anexando-as a identidades e recursos. Isso define as permissões avaliadas pela AWS para permitir ou negar ações.

### Tipos de Políticas

1. **Baseada em identidade**: Concede permissões a usuários, grupos e funções.
2. **Baseada em recursos**: Define permissões para entidades principais.
3. **Lista de permissões**: Limita permissões máximas sem concedê-las.
4. **SCPs de organizações**: Limita permissões máximas dentro de contas.
5. **ACLs (Listas de Controle de Acessos)**: Concedem permissões entre contas.
6. **Políticas de sessão**: Limitam permissões concedidas a sessões criadas.

---

### Políticas Baseadas em Identidades

- **Formato**: Documentos JSON anexados a identidades.
- **Categorias**:
1. **Gerenciadas**:
  - Criadas pela AWS ou pelo cliente.
  - Podem ser anexadas a várias identidades.
2. **Em linha**:
  - Incorporadas diretamente a usuários, grupos ou funções.

---

### Políticas Baseadas em Recursos

- **Definição**: Documentos JSON anexados a recursos. Não possuem versões gerenciadas.
- **Política de confiança**: Define entidades principais que podem assumir uma função.
- **Exemplos de serviços com suporte**: 
- Buckets do Amazon S3.
- Tópicos do Amazon SNS.
- Filas do Amazon SQS.

---

### Noções Básicas sobre Permissões

- **Resumo de políticas**: Tabelas disponíveis no Console IAM que descrevem:
1. Nível de acesso.
2. Recursos envolvidos.
3. Permissões e negações para cada serviço.
- **Utilização**:
- Selecionar um serviço para visualizar ações permitidas.
- Verificar os recursos e condições aplicáveis a essas ações.

---

## 18. Amazon Elastic Compute Cloud (EC2)

A Amazon EC2 é um serviço web que permite às organizações operarem em um ambiente computacional virtual, com interface para criação de instâncias e escolha de sistemas operacionais.

### Conceitos básicos

A Amazon EC2 pode ser utilizada de diferentes formas:
- Console de gerenciamento da AWS.
- Linha de comando (ILC).
- SDKs.

### Recursos da Amazon EC2

1. Criar instâncias sem servidores.
2. Otimizar performance e custos com tipos variados de instâncias.
3. Hibernar e retomar instâncias.
4. Usar instâncias de GPU para computação geral e alta capacidade gráfica.
5. Instâncias com taxas de E/S acima de 3 milhões IOPS.
6. Instâncias com armazenamento denso.
7. Configurações flexíveis de CPU e multithread.
8. Opções de armazenamento (Amazon EBS e Amazon EFS).
9. Pagamento por uso.
10. Localizar instâncias em regiões e zonas de disponibilidade.
11. Usar IPs elásticos para computação em nuvem dinâmica.
12. Amazon EC2 AutoScaling para ajuste automático de capacidade.
13. Clusters HPC com alta performance.
14. Redes avançadas para performance de pacotes por segundo (PPS).
15. Elastic Fabric Adapter (EFA) para aplicativos HPC.
16. AWS PrivateLink para alta disponibilidade e segurança.
17. Amazon Time SyncService para sincronização precisa de horário.

---

### Instâncias de uso geral

Essas instâncias combinam CPU, memória, armazenamento e rede. São 9 tipos principais:

- **A1**: Baseadas em AWS Graviton Custom, econômicas para cargas baseadas em Arm.
- **T3**: Equilíbrio entre computação, memória e rede para usos moderados.
- **T3a**: Semelhante à T3, com economia adicional de 10%.
- **T2**: Performance intermitente para sites e aplicações web.
- **M6g**: Baseadas em AWS Graviton2, até 40% melhores que M5.
- **M5**: Para bancos de dados de pequeno e médio porte, SAP e SharePoint.
- **M5a**: Similar à M5, com economia de 10%.
- **M5n**: Ideal para alta transferência de rede e taxa de pacotes.
- **M4**: Versátil para aplicativos de pequeno e médio porte.

---

### Instâncias otimizadas para computação

Projetadas para alto desempenho em processadores:

- **C5**: Intel Xeon de alta performance a baixo custo.
- **C5n**: Alta transferência de rede.
- **C4**: Alto desempenho e economia.

---

### Instâncias otimizadas para memória

Para trabalhos intensivos em memória:

- **R5**: Alta capacidade de memória por vCPU.
- **R5a**: Menor custo comparado a R5.
- **R5n**: Alta transferência de rede.
- **R4**: Melhor preço por GiB de RAM.
- **X1e**: Menor preço por GiB entre as instâncias.
- **X1**: Para grandes aplicativos corporativos.
- **Mais memória**: Ideal para SAP HANA com até 24 TB.
- **z1d**: Alta frequência, ideal para instâncias rápidas.

---

### Instâncias para computação acelerada

Utilizam aceleradores de hardware:

- **P3**: Com GPUs NVIDIA Tesla V100 para uso geral.
- **P2**: GPUs NVIDIA K80 para alta performance.
- **Inf1**: Inferência de Machine Learning.
- **G4**: Inferências de ML e cargas gráficas.
- **G3**: Altas demandas gráficas.
- **F1**: Arranjos programáveis de portas (FPGA).

---

### Instâncias otimizadas para armazenamento

Para grandes volumes de leitura e gravação:

- **I3**: Baseadas em SSD NVMe com alto IOPS.
- **I3zen**: Menor custo por GB de armazenamento.
- **D2**: Armazenamento local baseado em HDD com até 48 TB.
- **H1**: Armazenamento HDD de até 16 TB.

---

### Imagens de Máquina da Amazon (AMIs)

As AMIs contêm as informações necessárias para inicializar uma instância.

### Componentes de uma AMI

1. Snapshots do EBS ou modelo de volume raiz.
2. Permissões de execução.
3. Volumes a serem anexados.

### Critérios para seleção de uma AMI

- Região.
- Sistema operacional.
- Arquitetura (32 ou 64 bits).
- Permissões de execução (públicas, explícitas ou implícitas).
- Armazenamento para dispositivo raiz: EBS ou armazenamento de instância.

---

### Diferenças entre tipos de armazenamento de AMI

| Característica                | Amazon EBS                     | Armazenamento de instâncias Amazon S3 |
|-------------------------------|--------------------------------|---------------------------------------|
| Tempo de inicialização        | < 1 minuto                     | < 5 minutos                          |
| Limite de tamanho do dispositivo raiz | 16 TiB                        | 10 GiB                               |
| Volume do dispositivo raiz    | Volume do Amazon EBS           | Volumes de armazenamento de instâncias |
| Persistência de dados         | Dados persistem após encerramento | Dados persistem apenas durante a instância |
| Modificações                  | Alterações possíveis           | Atributos fixos                      |
| Cobranças                     | Uso de instância e volumes     | Instância e armazenamento no S3      |
| Estado parado                 | Disponível                     | Não disponível                       |

---

## 19. Amazon Elastic Block Store (EBS)

A Amazon EBS oferece armazenamento de blocos com alta performance e integração com EC2. Permite ajustar o desempenho e o tamanho dos volumes sem interrupções. Seus principais benefícios incluem performance, escalabilidade, segurança e economia.

---

### Tipos de Volumes

Os volumes EBS são classificados em:

### SSD (Solid State Drive)
- Para operações frequentes de leitura e gravação.
- Recomendado para bancos de dados e volumes de inicialização.
- Desempenho baseado em IOPS.

### HDD (Hard Disk Drive)
- Para cargas intensivas de streaming e processamento.
- Recomendado para MapReduce e logs.
- Desempenho medido em MiB/s.

| Tipo   | Uso Principal            | Tamanho      | Máximo IOPS | Throughput Máximo | Preço Base         |
|--------|--------------------------|--------------|-------------|-------------------|--------------------|
| IO1    | Bancos de dados críticos | 4 GB a 16 TB | 64.000      | 1.000 MB/s        | $0,125/GB + $0,065/IOPS |
| GP2    | Inicialização, testes    | 1 GB a 16 TB | 16.000      | 250 MB/s          | $0,10/GB           |
| ST1    | Big Data, logs           | 500 GB a 16 TB | 500         | 500 MB/s          | $0,045/GB          |
| SC1    | Dados frios              | 500 GB a 16 TB | 250         | 250 MB/s          | $0,025/GB          |

---

### Snapshots (Backups)

- **Backup Incremental:** Armazena apenas alterações desde o último backup.
- **Automatização:** Uso do **Data Lifecycle Manager** para criar backups regulares e organizar snapshots.
- **Criptografia:** Snapshots de volumes criptografados são protegidos automaticamente.

---

### Serviços de Dados

1. **Volumes Elásticos:** Ajuste dinâmico de tamanho e performance sem interrupções.
2. **Criptografia:** Uso de chaves gerenciadas pelo AWS KMS para proteger volumes.
3. **Restauração Rápida:** Criação de volumes a partir de snapshots prontos para uso.

---

## 20. Amazon Simple Storage Service (S3)

O Amazon S3 é um serviço de armazenamento na nuvem voltado para arquivos, diferentemente do Amazon EBS, que é mais focado em volumes de armazenamento conectados ao EC2. O S3 oferece armazenamento remoto e é estruturado em **buckets** (containers de objetos) e **objetos** (dados e metadados armazenados).

---

### Classes de Armazenamento

O S3 possui diferentes opções de armazenamento para atender a diferentes necessidades:

1. **S3 Standard**: Armazenamento de baixo custo e alta disponibilidade. É o padrão para uploads.
2. **S3 Intelligent-Tiering**: Otimiza custos movendo dados entre níveis de armazenamento com base no acesso.
3. **S3 Standard-IA e S3 One Zone-IA**: Para dados acessados infrequentemente, com custos mais baixos, mas taxas para recuperação e penalidades para acesso antecipado.
4. **S3 Glacier e S3 Glacier Deep Archive**: Armazenamento de longo prazo, com custos baixos, mas acesso demorado (requere restauração).

---

### Hospedagem de Sites

O S3 permite hospedar diferentes tipos de sites, como:

1. **Sites Simples**: Utilizam CMS como WordPress e Joomla para sites de marketing e blogs com tráfego médio.
2. **Aplicativos de Página Única**: Sites que carregam conteúdo via HTML, JavaScript e CSS no navegador.
3. **Sites Estáticos**: Sites econômicos que oferecem arquivos simples como HTML, JavaScript, imagens, e vídeos.

Esses sites podem ser iniciados com apenas dois arquivos essenciais: `index.html` e `error.html`.

---

## 21. Amazon Relational Database Service (RDS)

O Amazon RDS é um serviço de banco de dados relacional gerenciado na AWS, utilizado para configurar, gerenciar e dimensionar bancos de dados relacionais. Ele oferece suporte para MySQL, MariaDB, PostgreSQL, Oracle e SQL Server. O serviço possibilita backups, detecção de falhas, patches e recuperação, mas não fornece acesso Shell, restringindo algumas operações.

---

## 22. Instâncias

As instâncias RDS são ambientes separados na nuvem, que podem armazenar múltiplos bancos de dados. O serviço permite criar até 40 instâncias de banco de dados dependendo do tipo de banco e licença.

---

### Classes de Instâncias

As instâncias RDS possuem diferentes classes, com base na capacidade de computação e memória:

- **Padrão**: Para uso geral, como as instâncias M5 e M4.
- **Memória otimizada**: Para workloads intensivos em memória, como as instâncias R5 e R4.
- **Desempenho ampliado**: Para alto uso de CPU, como as instâncias T3 e T2.

---

### Instâncias T3 e T2
As instâncias **T3** são ideais para trabalhos com picos temporários de utilização, enquanto as **T2** são voltadas para microsserviços e testes.

---

### Instâncias M4 e M5
As instâncias **M4** e **M5** oferecem equilíbrio entre computação, memória e rede, com a M5 sendo mais eficiente em termos de desempenho.

---

### Instâncias R5 e R4
As instâncias **R5** oferecem 20% mais desempenho que as **R4**, sendo ideais para workloads de alta memória.

---

### Instâncias X1e e X1
As instâncias **X1e** são otimizadas para alta performance de banco de dados, enquanto as **X1** são voltadas para aplicativos empresariais de grande escala.

---

### Instâncias Z1d
Instâncias **Z1d** oferecem alta frequência de CPU (até 4.0GHz) e são ideais para bancos de dados de alto custo de licenciamento.

---

###Armazenamento da Instância

O Amazon RDS oferece três tipos de armazenamento:

1. **SSD Geral**: Econômico, com desempenho crescente conforme o armazenamento aumenta.
2. **SSD IOPS**: Para cargas intensivas de E/S, com desempenho previsível e latência baixa.
3. **Magnético**: Para retrocompatibilidade, mas com limitações de escalabilidade.

O RDS suporta até 64TiB de armazenamento para a maioria dos bancos de dados, e até 16TiB para SQL Server.

---

## 23. Amazon Elasticache

A utilização de armazenamento em cache pode melhorar significativamente o desempenho de servidores de aplicativos. O Amazon ElastiCache é uma plataforma gerenciada que facilita o armazenamento de dados diretamente na memória. Ele possibilita configurar, gerenciar e expandir a memória de maneira eficiente, oferecendo alto desempenho de leitura e baixa latência.

Armazenar dados em cache na memória permite acessos muito mais rápidos. O Amazon ElastiCache oferece duas opções principais: Redis, ideal para aplicações em tempo real, e Memcached, voltado para aplicativos com grande volume de dados.

### Vantagens do ElastiCache

- Alta performance
- Gerenciamento simplificado
- Facilidade de escalabilidade

---

### ElastiCache para Redis

O Redis, ou Remote Dictionary Server, é uma das opções mais populares para cache devido à sua combinação de velocidade e flexibilidade. Ele é amplamente utilizado em aplicações que exigem resposta em tempo real, como jogos, e-commerce, serviços financeiros, saúde e Internet das Coisas (IoT). Com o Redis, os dados ficam na memória principal, o que elimina a necessidade de acessar discos, garantindo maior eficiência.

Além disso, o Redis oferece várias estruturas de dados, como Strings, Listas, Conjuntos, Conjuntos Ordenados, Hashes, Bitmaps e HyperLogLogs, tornando o desenvolvimento mais simples e o código mais limpo.

### Casos comuns de uso do ElastiCache para Redis:

1. Cache de dados
2. Sistemas de mensagens e chat
3. Classificações e placares de jogos
4. Armazenamento de sessões de usuário
5. Streaming de mídia avançada
6. Processamento de dados geoespaciais
7. Aplicações de aprendizado de máquina

O Redis é compatível com diversas linguagens de programação, como Python, Java, PHP, Perl, Go, Ruby, C/C#/C++, JavaScript e Node.js.

---

### ElastiCache para Memcached

Memcached é um sistema de armazenamento em memória baseado em valores-chave, ideal para funcionar como cache ou DataStore. Ele é conhecido pela alta performance e é amplamente utilizado em aplicativos em tempo real, como sites, aplicativos móveis, jogos e plataformas de e-commerce. Os principais casos de uso incluem cache e armazenamento de sessões de usuários.

### Benefícios de usar ElastiCache com Memcached:

1. **Desempenho elevado**: tempos de resposta extremamente rápidos, inferiores a um milissegundo.
2. **Segurança aprimorada**: suporte a Amazon VPC, permitindo isolar clusters conforme necessário.
3. **Compatibilidade com Memcached**: um sistema amplamente utilizado para armazenamento de dados.
4. **Escalabilidade fácil**: pode ser expandido para até 20 nós e 12,7 TiB por cluster.
5. **Gerenciamento automatizado**: ElastiCache gerencia os recursos, eliminando a necessidade de manutenção manual.
6. **Conexão simplificada**: com o recurso de Auto Discovery, a integração do aplicativo ao cluster do Memcached é facilitada.

Memcached é compatível com várias linguagens e protocolos, como Python, Java, PHP, C/C#/C++, Perl, Go, Ruby, JavaScript, Node.js, além de suportar protocolos como ASCII, binário, TCP e UDP.

---

### Comparação entre Redis e Memcached

Enquanto o Memcached foca na simplicidade, o Redis oferece um conjunto de recursos mais avançados. A tabela abaixo compara os dois mecanismos, ajudando a escolher a solução mais adequada conforme os requisitos de cada aplicação.

---

### Comparação entre Memcached e Redis

| Requisito | Memcached | Redis |
|-----------|-----------|-------|
| **Latência baixa** | Sim | Sim |
| **Facilidade de integração** | Sim | Sim |
| **Particionamento de dados** | Sim | Sim |
| **Suporte a múltiplas linguagens** | Sim | Sim |
| **Estruturas de dados avançadas** | Não | Sim |
| **Arquitetura multithread** | Sim | Não |
| **Armazenamento de snapshots** | Não | Sim |
| **Replicação** | Não | Sim |
| **Execução de transações** | Não | Sim |
| **Pub/Sub (Publicação/Assinatura)** | Não | Sim |
| **Suporte a Lua scripting** | Não | Sim |
| **Suporte geoespacial** | Não | Sim |

Fonte: AWS Brasil, 2020.

---

## 24. Amazon Cloudfront

O Amazon CloudFront é um serviço de rede de entrega de conteúdo (CDN) que permite distribuir dados de forma rápida, segura e com alta performance. Ele acelera a entrega de conteúdo aproveitando pontos de presença distribuídos globalmente. Esses pontos de presença armazenam em cache os conteúdos próximos aos usuários finais.

### Configuração Básica

Para configurar o Amazon CloudFront de maneira simples, é necessário realizar alguns passos:

1. Armazenar os objetos originais em um bucket do Amazon S3.
2. Distribuir conteúdos como texto ou imagens.
3. Garantir que os objetos sejam acessíveis por qualquer usuário.
4. Definir um nome de domínio, por exemplo, `http://d111111abcdef8.cloudfront.net/image.jpg`.
5. Manter os objetos em cache nos pontos de presença por um período padrão de 24 horas.

---

### Distribuição

Para utilizar o CloudFront na distribuição de conteúdo, é necessário configurar uma distribuição e definir as opções desejadas:

1. **Origem de conteúdo**: escolher de onde o CloudFront irá buscar os arquivos.
2. **Acesso**: decidir se o conteúdo será acessível a todos ou restrito a alguns.
3. **Segurança**: configurar se será usado HTTPS para proteger o acesso.
4. **Encaminhamento de cookies ou strings de consulta**: personalizar o comportamento da distribuição.
5. **Restrição geográfica**: limitar o acesso a partir de determinadas localizações.
6. **Logs de acesso**: registrar atividades de quem acessou o conteúdo.

---

### Segurança

O CloudFront pode ser utilizado para proteger dados críticos e a infraestrutura do seu aplicativo. Ele oferece criptografia SSL/TLS para conexões seguras e permite o uso de certificados personalizados, com suporte ao AWS Certificate Manager (ACM). Além disso, fornece recursos como conexões HTTPS, criptografia de ponta a ponta, e diversas camadas de segurança para proteger os dados.

O serviço é compatível com normas de segurança rigorosas, como PCI-DSS, ISO 9001, ISO 27001 e SOC, garantindo a proteção de dados sensíveis durante a entrega.

---

### Disponibilidade

Em caso de tráfego elevado, o CloudFront pode ser utilizado para armazenar conteúdo em cache nos pontos de presença ao redor do mundo, diminuindo a carga nas origens e aumentando a disponibilidade do sistema. Também é possível configurar múltiplas origens para redundância e garantir que o conteúdo seja entregue de uma origem de backup, se necessário, através do recurso de failover.

---

## 25. Amazon DynamoDB

O Amazon DynamoDB é um serviço de banco de dados NoSQL totalmente gerenciado, projetado para oferecer desempenho rápido e escalabilidade flexível. Diferente de bancos relacionais tradicionais, o DynamoDB não exige redimensionamento manual, pois é baseado em um modelo chave-valor, o que facilita a administração e elimina a necessidade de configuração de hardware. Além disso, ele oferece criptografia em repouso e permite backup sob demanda, com recuperação point-in-time, o que protege os dados contra exclusões ou gravações acidentais. Também é possível definir uma vida útil para os itens, eliminando dados desnecessários automaticamente.

---

### Visão geral

Os bancos de dados NoSQL, como o DynamoDB, não utilizam garantias ACID (Atomicidade, Consistência, Isolamento e Durabilidade) como os bancos relacionais. O DynamoDB é baseado em chave-valor, e sua flexibilidade permite a criação de bancos de dados de documentos ou outros tipos, com a opção de usar instâncias em EC2, como no caso do MongoDB.

---

### Componentes principais

1. **Tabelas**: Armazenam os dados em coleções organizadas. Exemplo: uma tabela "Pessoa" pode armazenar informações sobre indivíduos, enquanto uma tabela "Contas" pode conter dados sobre contas bancárias.
   
2. **Itens**: Representam registros dentro das tabelas, como uma pessoa ou uma conta bancária. Não há limite de itens, o que permite escalabilidade.
   
3. **Atributos**: São os dados armazenados em cada item, como nome, CPF, etc. Eles podem ser de tipos diferentes (escalares, listas, mapas).
   
4. **Chave primária**: Cada tabela deve ter uma chave primária para garantir a unicidade dos itens. Pode ser simples (um único atributo) ou composta (dois atributos).
   
5. **Índices secundários**: Permitem consultas eficientes usando chaves alternativas. Podem ser globais (com chaves diferentes das da tabela) ou locais (com chave de partição igual à da tabela).

---

### Regras de nomeação

Os componentes do DynamoDB devem seguir regras específicas de nomeação, como usar codificação UTF-8 e respeitar um comprimento mínimo e máximo de caracteres. Palavras reservadas e certos caracteres especiais, como "#" e ":", não são permitidos.

---

### Tipos de dados

O DynamoDB oferece diversos tipos de dados, incluindo:

1. **Escalares**: Tipos simples como números, strings, binários, booleanos e nulos.
2. **Documentos**: Estruturas com atributos aninhados, como listas e mapas.
3. **Conjuntos**: Vários valores escalares, como conjuntos de strings, números ou binários.

---

## 26. Amazon Glacier e Amazon Virtual Private Cloud (VPC)

### Amazon Glacier

O Amazon Glacier é um serviço de armazenamento de baixo custo para arquivamento e backup de longa duração, com dois tipos principais:  
- **Amazon S3 Glacier**: Usado para armazenamento de baixo custo, sem a necessidade de acesso rápido aos dados. O custo é de cerca de $0,004 por GB-mês.
- **Amazon S3 Glacier Deep Archive**: Usado para armazenamento de dados raramente acessados, com o custo mais baixo da nuvem, cerca de $1 por TB-mês.

---

### Formas de Armazenamento
Os dados são armazenados como arquivos individuais ou agrupados em formatos como TAR/ZIP, com tamanhos variando de 1 byte a 40 terabytes. O armazenamento é imutável, ou seja, não permite edição ou substituição de arquivos após o upload. Arquivos grandes podem ser enviados por meio de **Multipart Upload**.

---

### Recuperação
Existem três tipos de recuperação de dados:
- **Recuperação Expressa**: Disponível em 1-5 minutos.
- **Recuperação Padrão**: Disponível em 3-5 horas.
- **Recuperação em Massa**: Disponível em 5-12 horas para grandes volumes de dados.

O custo das recuperações expressas é fixo: $0,03 por GB mais $0,01 por solicitação.

---

### Amazon Virtual Private Cloud (VPC)

A Amazon VPC permite a criação de redes isoladas dentro da AWS, dando controle sobre endereços IP, sub-redes e tabelas de rotas. Quando uma conta AWS é criada, é provisionada uma VPC padrão, mas é possível criar outras VPCs com configurações personalizadas.

### Arquiteturas de Rede
A VPC oferece quatro opções de arquitetura:
1. Sub-rede pública única.
2. Sub-redes públicas e privadas.
3. Sub-redes públicas e privadas com acesso ao AWS site-to-site VPC.
4. Sub-rede privada com acesso ao AWS site-to-site VPC.

### Componentes da VPC
- **Rede virtual**: Permite selecionar um intervalo de endereços IP.
- **Sub-rede**: Agrupamento de recursos isolados.
- **Internet Gateway**: Conexão com a internet pública.
- **NAT Gateway**: Acesso à internet de forma segura.
- **Virtual Private Gateway**: Conexão VPN.
- **VPC Endpoints**: Conectividade privada entre a VPC e outros serviços AWS sem uso de internet.

Por padrão, as instâncias em uma VPC padrão têm um IP público e um privado. Instâncias em sub-redes não padrão têm apenas IP privado e precisam de uma configuração adicional para acessar a internet.


---

## 27. Amazon API Gateway

O **Amazon API Gateway** é um serviço da AWS para criação, publicação, monitoramento e proteção de APIs REST e WebSocket. Ele facilita a integração de aplicações com back-ends, como funções Lambda e outros serviços AWS, permitindo a comunicação entre sistemas via HTTP.

### Conceitos

- **API REST**: Integra recursos e métodos aos endpoints HTTP de back-end, permitindo a comunicação cliente-servidor por meio de princípios REST, com métodos como GET, POST, PUT, PATCH e DELETE.
- **HTTP API**: Oferece uma opção de baixo custo e latência para criação de aplicativos RESTful, com integração de rotas e métodos.
- **API WebSocket**: Permite comunicação bidirecional entre cliente e servidor, ideal para aplicativos em tempo real, como chats ou jogos multiplayer.

---

### Arquitetura

O API Gateway funciona como a "porta de entrada" para aplicativos acessarem dados e serviços de back-end, utilizando a configuração de CORS para definir permissões de acesso entre domínios. Além disso, o **Amazon Cognito** pode ser integrado para controle de acesso seguro e autenticação de usuários via provedores como Facebook ou Google.

---

### Comparação entre HTTP APIs e REST APIs

- **REST APIs** oferecem mais controle sobre as solicitações e respostas.
- **HTTP APIs** são mais simples e de baixo custo, ideais para proxies HTTP ou Lambda.

### Integração para HTTP APIs

- **Proxy Lambda**: Integra uma rota de API com uma função Lambda, enviando e recebendo dados entre a API e o Lambda.
- **Proxy HTTP**: Conecta a rota da API com um endpoint HTTP público, passando solicitações e respostas entre front-end e back-end.

---

## 28. Amazon Lambda

O **Amazon Lambda** é um serviço da AWS que permite a execução de código sem a necessidade de gerenciar servidores. A cobrança ocorre apenas pelo tempo de computação, não pelo tempo em que o código está ocioso. Este modelo de computação sem servidor permite criar e executar aplicativos sem se preocupar com a infraestrutura de servidores, que é gerenciada pela AWS.

O serviço oferece suporte a várias linguagens de programação, como Java, Go, PowerShell, Node.js, C#, Python e Ruby. Além disso, a API de tempo de execução do Lambda permite a utilização de outras linguagens. O código é armazenado no **Amazon S3** e, quando inativo, é criptografado para proteção.

---

### Funções do Amazon Lambda

As **funções Lambda** são códigos que podem ser executados a qualquer momento após o upload. Elas são *stateless*, ou seja, não mantêm estado entre execuções e podem ser escaladas automaticamente conforme o volume de eventos. Essas funções podem ser associadas a diversos serviços da AWS para manipulação de dados, como o **Amazon DynamoDB** e o **Amazon S3**.

---

### Criação de Aplicações Sem Servidor

Aplicações sem servidor no AWS são compostas por funções acionadas por eventos. Para implementar essas aplicações, pode-se usar o **AWS Serverless Application Model (AWS SAM)**, uma especificação alinhada com o **AWS CloudFormation** que facilita a implantação e configuração.

Há também um repositório de **aplicações sem servidor** compartilhadas por desenvolvedores, empresas e a comunidade AWS.

---

### Implementação de um Aplicativo Web Sem Servidor

Ao combinar o **AWS Lambda** com outros serviços da AWS, é possível criar aplicativos web que escalonam automaticamente e operam de forma eficiente em vários datacenters, sem a necessidade de servidores dedicados. Essa arquitetura pode ser integrada ao **Amazon API Gateway** para criar soluções escaláveis e eficientes.

---

### Integração de Proxy do Lambda com o API Gateway

A integração de proxy do **Amazon API Gateway Lambda** permite que uma única função Lambda seja chamada para acessar recursos de diferentes serviços da AWS. Quando o cliente envia uma solicitação, o **API Gateway** repassa a requisição para a função Lambda de forma simples e direta. Esse modelo é eficiente e ideal para métodos de API que envolvem recursos genéricos de proxy.

---

## 29. Docker e Microsserviços

### Docker

O **Docker** é uma plataforma que facilita a criação, teste e implantação rápida de softwares. Ele utiliza contêineres, que são pacotes que incluem todos os recursos necessários para a execução de um aplicativo, como bibliotecas, ferramentas e runtime. Esses contêineres podem ser executados em diferentes ambientes de forma padronizada.

Existem duas versões principais do Docker na AWS: o **Docker Community Edition (CE)**, gratuito, e o **Docker Enterprise Edition (EE)**, pago, que oferece recursos adicionais de segurança e gerenciamento. O Docker padroniza a execução de código por meio de contêineres, virtualizando o sistema operacional de um servidor.

Entre os benefícios do Docker estão:

- Execução de software de forma rápida e isolada.
- Padronização de operações.
- Agilidade na transferência de máquinas.
- Economia de recursos e otimização da utilização de servidores.

Na AWS, os contêineres podem ser executados através de serviços como o **Amazon Elastic Container Service (ECS)**, **AWS Fargate** (contêineres sem servidor), **Amazon Elastic Container Service for Kubernetes (EKS)**, e **Amazon Elastic Container Registry (ECR)**.

---

### Microsserviços

**Microsserviços** são uma arquitetura baseada em serviços pequenos e independentes, que se comunicam por meio de APIs. Essa abordagem facilita a escalabilidade e o desenvolvimento ágil de aplicativos. As solicitações de serviços são feitas através de **APIs REST**, que permitem a interação direta com os microsserviços ou por meio de um **API Gateway**.

Diferente das arquiteturas monolíticas, onde os processos são fortemente acoplados e operam como um único serviço, a arquitetura de microsserviços permite criar componentes independentes que podem ser implantados, atualizados e escalados de forma isolada. Isso oferece vantagens em termos de flexibilidade e adaptabilidade para atender às necessidades individuais de cada serviço.

Comparando a arquitetura monolítica com a de microsserviços, os microsserviços têm a vantagem de permitir maior facilidade na adição de novos recursos e na evolução dos aplicativos, além de proporcionar um melhor gerenciamento do crescimento do código.

---

## 30. Amazon Elastic Container Registry (ECR) e Amazon Elastic Container Service (ECS)

### Amazon Elastic Container Registry (ECR)

O Amazon ECR é um serviço gerenciado de registro de contêineres Docker, permitindo armazenamento e gerenciamento de imagens com alta disponibilidade e escalabilidade. Ele integra-se com o Amazon ECS, facilitando a implantação de contêineres na AWS. O ECR elimina a necessidade de gerenciar repositórios locais, utilizando o Amazon S3 para armazenar as imagens.

### Componentes:
1. **Registro**: Cada conta AWS possui um único registro.
2. **Token de Autorização**: Necessário para autenticação nas operações.
3. **Repositório**: Armazena as imagens Docker.
4. **Política de Repositórios**: Controla o acesso aos repositórios.
5. **Imagem**: Permite enviar e extrair imagens de contêiner.

---

### Registros:
Cada conta AWS tem um registro padrão, acessado por URL com token de 12 horas de validade.

---

### Amazon Elastic Container Service (ECS)

O Amazon ECS é um serviço para orquestrar contêineres Docker na AWS. Ele pode ser executado usando **Amazon EC2** ou **AWS Fargate**. Fargate é uma opção sem servidor, que elimina a necessidade de gerenciar infraestrutura. O ECS oferece alta disponibilidade, segurança e escalabilidade, integrando-se com outros serviços da AWS.

### Benefícios:
1. **Sem servidor**: AWS Fargate elimina a necessidade de gerenciamento de servidores.
2. **Provedor de capacidade**: Determina a capacidade com base nas demandas do aplicativo.
3. **Desempenho em escala**: Facilita o lançamento rápido de vários serviços.
4. **Segurança e confiabilidade**: Contêineres executados em Amazon VPC, sem compartilhamento de recursos.
5. **Custo otimizado**: Mistura instâncias spot, sob demanda e reservadas para descontos.

### Componentes:
1. **Definição de Tarefas**: Especificação das tarefas ECS, incluindo parâmetros como CPU, memória e volume de dados.
2. **Serviço**: Gerencia a execução de tarefas, substituindo instâncias com falha.
3. **Cluster**: Agrupamento lógico de serviços e tarefas.

### Inicialização:
O ECS permite dois tipos de inicialização:
- **AWS Fargate**: Gerenciamento automático da infraestrutura, ideal para quem não quer se preocupar com servidores.
- **Amazon EC2**: Maior controle e flexibilidade, mas requer monitoramento constante.

### Amazon Resource Name (ARN):
Cada recurso no ECS recebe um ARN único, necessário para operações com ferramentas de linha de comando.

---

## 31. Amazon Elastic Kubernetes Services (EKS)

O Amazon EKS é um serviço Kubernetes gerenciado oferecido pela AWS, facilitando a implementação e gestão de aplicações conteinerizadas em grande escala. O Kubernetes, por sua vez, é um software de código aberto que permite gerenciar esses aplicativos de maneira eficiente. A AWS fornece uma infraestrutura escalável e disponível, além de integração com diversos serviços, enquanto o EKS cuida do provisionamento e escalabilidade do plano de controle do Kubernetes.

### Funcionamento

Com o Amazon EKS, o usuário precisa apenas provisionar os nós operacionais, enquanto a AWS gerencia o provisionamento, escalabilidade e a operação do Plano de Controle do Kubernetes de maneira segura e com alta disponibilidade.

---

### Componentes do Kubernetes

O Kubernetes gerencia um cluster de instâncias de computação, e cada contêiner é programado para ser executado de acordo com os recursos disponíveis e suas necessidades. Um cluster Kubernetes é formado por instâncias EC2 que executam contêineres. O cluster é composto por dois planos:

- **Plano de Controle**: Contém os componentes responsáveis pela administração do cluster e pela gestão do estado e configuração dos contêineres.
- **Plano de Dados**: São as instâncias onde os contêineres realmente são executados.

Os contêineres são organizados em **pods**, que podem conter um ou múltiplos contêineres em conjunto. Cada pod representa uma instância de uma aplicação.

### Componentes do Plano de Controle

Os componentes do plano de controle são responsáveis pela administração global do cluster e respondem a eventos de execução. São eles:

1. **Kube-apiserver**: Valida e configura dados para os objetos da API, como pods, serviços e controladores.
2. **Cloud-controller-manager**: Executa tarefas específicas de nuvem no Kubernetes.
3. **Kube-controllermanager**: Executa os loops de controle principais do Kubernetes.
4. **Etcd**: Armazenamento de dados chave-valor, utilizado para armazenar os dados do cluster de maneira consistente e com alta disponibilidade.
5. **Kube-scheduler**: Observa os pods sem nó atribuído e seleciona o nó adequado para a execução.

---

### Componentes do Nó

Os componentes do nó são responsáveis por manter os pods em execução e fornecer o ambiente de execução do Kubernetes. Eles incluem:

1. **Kubelet**: Executa em cada nó, realizando o registro do nó com o apiserver.
2. **Kube-proxy**: Reflete os serviços definidos na API Kubernetes e possibilita o encaminhamento de tráfego TCP, UDP e SCTP.
3. **Container runtime**: Responsável pela execução dos contêineres dentro dos pods.

---

# 32. Amazon Fargate

O AWS Fargate é uma plataforma de computação sem servidor para contêineres, conhecida como a versão *serverless* do ECS, permitindo que os desenvolvedores se concentrem no desenvolvimento de aplicações sem a necessidade de provisionamento ou gerenciamento de servidores. Ele funciona em conjunto com o Amazon Elastic Container Service (ECS) e o Amazon Elastic Kubernetes Service (EKS), eliminando a necessidade de escolher instâncias ou ajustar a capacidade de escalabilidade do cluster.

---

### Funcionamento

O AWS Fargate é uma funcionalidade do Amazon ECS que automatiza o gerenciamento dos contêineres, deixando para o usuário apenas a tarefa de implementar o serviço. Se for necessário mais controle sobre as instâncias do EC2, ou se houver requisitos específicos de conformidade ou governança, é recomendada a utilização do Amazon ECS ou Amazon EKS sem o Fargate.

Com o AWS Fargate, o usuário apenas fornece a imagem do contêiner e a implanta como um serviço ou tarefa no ECS. Em contrapartida, quando não se utiliza o Fargate, há a necessidade de provisionar e dimensionar manualmente o cluster de instâncias EC2.

---

### Componentes

No AWS Fargate, o gerenciamento de recursos e a escalabilidade são automatizados, o que simplifica a configuração para o usuário. No entanto, algumas configurações no Fargate são distintas em relação ao uso tradicional do EC2, como:

1. **Modo de rede**: somente `awsvpc` está disponível.
2. **Gestão de volumes**: com opções para driver e volumes voláteis.
3. **Disponibilidade**: não está disponível em todas as regiões.
4. **Suporte**: somente contêineres Linux são suportados.








