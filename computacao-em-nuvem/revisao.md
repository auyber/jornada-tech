## Índice

1. [Conceitos e Aspectos Gerais](#1-conceitos-e-aspectos-gerais)  
2. [Benefícios da Utilização da Computação em Nuvem](#2-benefícios-da-utilização-da-computação-em-nuvem)  
3. [Modelos de Serviços de Computação em Nuvem](#3-modelos-de-serviços-de-computação-em-nuvem)  
4. [Modelo de Implantação](#4-modelo-de-implantação)  
5. [Arquitetura](#5-arquitetura)  
6. [Componentes da Arquitetura](#6-componentes-da-arquitetura)  
7. [Áreas de Foco Crítico](#7-áreas-de-foco-crítico)  
8. [Problemas de Segurança da Informação na Nuvem](#8-problemas-de-segurança-da-informação-na-nuvem)  


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


