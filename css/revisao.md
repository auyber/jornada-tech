# 2. CSS

## **O que é CSS e como usá-lo**

CSS (Cascading Style Sheets) é uma linguagem de estilo usada para definir a apresentação visual de documentos HTML. Ela permite separar o conteúdo da apresentação, tornando o desenvolvimento web mais eficiente e organizado.Para usar CSS, você pode:

1. Incorporar estilos diretamente no HTML usando a tag **`<style>`**.
2. Criar um arquivo CSS externo e vinculá-lo ao HTML usando a tag **`<link>`**.
3. Aplicar estilos inline usando o atributo **`style`** em elementos HTML.

A sintaxe básica do CSS consiste em:

`cssseletor {
  propriedade: valor;
}`

Por exemplo:

`cssp {
  color: blue;
  font-size: 16px;
}`

## **DevTools para CSS**

O DevTools é uma ferramenta essencial para desenvolvedores web trabalharem com CSS. Ele permite:

1. Inspecionar e modificar estilos em tempo real.
2. Ver o CSS aplicado a elementos específicos.
3. Adicionar ou remover classes CSS de elementos.
4. Aplicar pseudoestados como :hover ou :focus para testar estilos.

Para acessar o DevTools:

- No Windows/Linux: Pressione F12 ou Ctrl+Shift+I
- No macOS: Pressione Cmd+Option+I

## **Cores**

CSS oferece várias maneiras de definir cores:

1. Nomes de cores: Por exemplo, **`red`**, **`blue`**, **`green`**.
2. Valores hexadecimais: Por exemplo, **`#FF0000`** para vermelho.
3. Valores RGB: Por exemplo, **`rgb(255, 0, 0)`** para vermelho.
4. Valores HSL: Por exemplo, **`hsl(0, 100%, 50%)`** para vermelho.
5. Valores RGBA e HSLA: Incluem um canal alfa para transparência.
6. Palavras-chave de sistema: Como **`Canvas`** para o fundo do conteúdo.

Exemplo de uso de cores em CSS:
```
cssbody {
  background-color: #f0f0f0;
  color: rgb(50, 50, 50);
}

a {
  color: hsl(200, 100%, 50%);
}

.transparent-box {
  background-color: rgba(255, 0, 0, 0.5);
}
```

O CSS3 introduziu uma gama mais ampla de cores, incluindo funções como rgb(), rgba(), hsl(), e hsla(), permitindo maior flexibilidade na definição de cores e transparência

## **Background e Border**

## **Background**

O CSS permite definir várias propriedades de background para elementos HTML:

1. **`background-color`**: Define a cor de fundo
    
    `cssdiv {
      background-color: #f0f0f0;
    }`
    
2. **`background-image`**: Define uma imagem de fundo
    
    `cssdiv {
      background-image: url("imagem.jpg");
    }`
    
3. **`background-repeat`**: Controla a repetição da imagem de fundo
    
    `cssdiv {
      background-repeat: no-repeat;
    }`
    
4. **`background-position`**: Define a posição inicial da imagem de fundo
    
    `cssdiv {
      background-position: center top;
    }`
    
5. **`background-attachment`**: Determina se a imagem de fundo rola com o conteúdo
    
    `cssdiv {
      background-attachment: fixed;
    }`
    

A propriedade shorthand background permite definir todas essas propriedades em uma única declaração:

`cssdiv {
  background: #f0f0f0 url("imagem.jpg") no-repeat center top fixed;
}`

## **Border**

As propriedades de borda permitem estilizar os contornos dos elementos:

1. **`border-width`**: Define a largura da borda
2. **`border-style`**: Define o estilo da borda (solid, dashed, dotted, etc.)
3. **`border-color`**: Define a cor da borda

A propriedade shorthand border combina essas três:

`cssdiv {
  border: 2px solid #000000;
}`

Você também pode estilizar bordas individuais:
```
cssdiv {
  border-top: 1px dashed red;
  border-right: 2px solid blue;
  border-bottom: 3px dotted green;
  border-left: 4px double yellow;
}
```
## **Box Model: margin e padding**

O Box Model do CSS define como os elementos são dimensionados e posicionados. Ele consiste em:

1. Conteúdo: A área onde o texto e imagens aparecem
2. Padding: Espaço transparente ao redor do conteúdo
3. Border: Uma borda que circunda o padding e o conteúdo
4. Margin: Espaço transparente fora da borda

## **Padding**

O padding adiciona espaço interno entre o conteúdo e a borda:
```
cssdiv {
  padding: 10px; /* Aplica 10px de padding em todos os lados */
  padding: 10px 20px; /* 10px no topo/base, 20px nas laterais */
  padding: 10px 20px 15px 25px; /* Topo, direita, base, esquerda */
}
```
## **Margin**

A margin adiciona espaço externo ao redor do elemento:
```
cssdiv {
  margin: 10px; /* Aplica 10px de margin em todos os lados */
  margin: 10px auto; /* Centraliza horizontalmente com 10px no topo/base */
  margin: 10px 20px 15px 25px; /* Topo, direita, base, esquerda */
}
```
## **Display: none, inline, block e inline-block**

A propriedade display controla como um elemento é renderizado no layout:

1. **`display: none`**: Remove o elemento do fluxo do documento
    ```
    css.hidden {
      display: none;
    }
    ```
2. **`display: inline`**: Elementos ficam na mesma linha, não aceitam width/height
    ```
    cssspan {
      display: inline;
    }
    ```
3. **`display: block`**: Elementos ocupam toda a largura disponível, começam em nova linha
    ```
    cssdiv {
      display: block;
    }
    ```
4. **`display: inline-block`**: Combina características de inline e block
    ```
    css.inline-block {
      display: inline-block;
      width: 100px;
      height: 100px;
    }
    ```

O inline-block permite definir width e height, mas mantém os elementos na mesma linha, sendo útil para criar layouts horizontais como menus de navegação

## **Seletores básicos**

Os seletores básicos do CSS são fundamentais para estilizar elementos HTML. Aqui estão os principais tipos, listados do mais utilizado para o menos:

1. Seletor de tag: Seleciona todos os elementos de um tipo específico.
    ```
    cssp {
      color: blue;
    }
    ```
2. Seletor de classe: Seleciona elementos com uma classe específica.
    ```
    css.destaque {
      font-weight: bold;
    }
    ```
3. Seletor de ID: Seleciona um elemento único com um ID específico.
    ```
    css#cabecalho {
      background-color: #f0f0f0;
    }
    ```
4. Seletor universal: Seleciona todos os elementos.
    ```
    css* {
      margin: 0;
      padding: 0;
    }
    ```
5. Seletor de atributo: Seleciona elementos com um atributo específico.
    ```
    cssinput[type="text"] {
      border: 1px solid #ccc;
    }
    ```

## **Textos e fontes**

Para estilizar textos e fontes em CSS, usamos várias propriedades:

1. font-family: Define a família da fonte.
    ```
    cssbody {
      font-family: Arial, Helvetica, sans-serif;
    }
    ```
2. font-size: Define o tamanho da fonte.
    ```
    cssp {
      font-size: 16px;
    }
    ```
3. font-weight: Define a espessura da fonte.
    ```
    cssh1 {
      font-weight: bold;
    }
    ```
4. font-style: Define o estilo da fonte (normal, itálico, oblíquo).
    ```
    cssem {
      font-style: italic;
    }
    ```
5. color: Define a cor do texto.
    ```
    cssa {
      color: #0000FF;
    }
    ```
6. text-align: Define o alinhamento do texto.
    ```
    css.centro {
      text-align: center;
    }
    ```
7. text-decoration: Define decorações de texto como sublinhado.
    ```
    cssa {
      text-decoration: none;
    }
    ```

## **Usando o Google Fonts**

Para usar fontes do Google Fonts em seu projeto:

1. Visite o site do Google Fonts e selecione a fonte desejada.
2. Copie o link fornecido e adicione-o ao **`<head>`** do seu HTML:
    ```
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    ```
3. Use a fonte em seu CSS:
    ```
    cssbody {
      font-family: 'Roboto', sans-serif;
    }
    ```

Você pode combinar múltiplas fontes em uma única requisição:
```
<link href="https://fonts.googleapis.com/css2?family=Roboto&family=Open+Sans&display=swap" rel="stylesheet">
```
Para melhor performance, considere carregar apenas os pesos e estilos necessários:
```
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```
Lembre-se de que o uso excessivo de fontes externas pode impactar o tempo de carregamento da página, então use com moderação

## **Unidades de medida**

O CSS oferece uma variedade de unidades de medida para definir tamanhos, espaçamentos e outras propriedades dimensionais. Essas unidades podem ser divididas em dois grupos principais: unidades absolutas e unidades relativas.

## **Unidades absolutas**

As unidades absolutas têm um tamanho fixo e não mudam com base no contexto. As principais unidades absolutas são:

1. px (pixels): A unidade mais comum para telas. Um pixel é o menor ponto que a tela pode exibir.
2. cm (centímetros): Raramente usado para web, mais comum em CSS para impressão.
3. mm (milímetros): Também mais usado para CSS de impressão.
4. in (polegadas): 1 polegada = 2.54 centímetros.
5. pt (pontos): 1 ponto = 1/72 de polegada.
6. pc (picas): 1 pica = 12 pontos.

## **Unidades relativas**

As unidades relativas são mais flexíveis e se ajustam com base em outros fatores. As principais unidades relativas são:

1. em: Relativa ao tamanho da fonte do elemento pai.
2. rem: Relativa ao tamanho da fonte do elemento raiz (geralmente <html>).
3. %: Porcentagem relativa ao elemento pai.
4. vw: 1% da largura da viewport.
5. vh: 1% da altura da viewport.
6. vmin: 1% da menor dimensão da viewport.
7. vmax: 1% da maior dimensão da viewport.
8. ch: Largura do caractere "0" da fonte atual.

Exemplo de uso:
```
cssbody {
  font-size: 16px;
}

.container {
  width: 80%;
  max-width: 1200px;
  padding: 1em;
}

.texto {
  font-size: 1.2rem;
  line-height: 1.5;
}

.banner {
  height: 50vh;
  width: 100vw;
}
```
É importante notar que as unidades relativas oferecem maior flexibilidade e são geralmente preferidas para layouts responsivos. Por exemplo, usar 'em' ou 'rem' para tamanhos de fonte permite que o texto se ajuste proporcionalmente quando o usuário altera o tamanho da fonte do navegador.

## **Herança**

A herança em CSS é um mecanismo fundamental que permite que propriedades de estilo sejam passadas de elementos pais para elementos filhos na árvore do documento HTML. Isso ajuda a manter a consistência no design e reduz a quantidade de código CSS necessário.

## **Como funciona a herança**

Quando uma propriedade é aplicada a um elemento, ela pode ser herdada por seus descendentes, a menos que seja explicitamente sobrescrita. Nem todas as propriedades são herdadas por padrão. Algumas propriedades comumente herdadas incluem:

- color
- font-family
- font-size
- font-weight
- line-height
- text-align
- letter-spacing

Exemplo de herança:
```
<div class="container">
  <p>Este parágrafo herdará estilos do container.</p>
  <span>Este span também herdará estilos.</span>
</div>

css.container {
  color: #333;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}
```
Neste exemplo, o texto dentro do ```<p>``` e do ```<span>``` herdará a cor, a família da fonte e a altura da linha definidas no ``` .container```.

## **Controlando a herança**

O CSS fornece palavras-chave especiais para controlar explicitamente a herança:

1. inherit: Força a herança de uma propriedade do elemento pai.
2. initial: Define a propriedade para seu valor inicial padrão.
3. unset: Comporta-se como 'inherit' para propriedades herdadas e como 'initial' para propriedades não herdadas.
4. revert: Reverte o valor da propriedade para o estilo que teria sido aplicado se não houvesse estilos do autor.

Exemplo de uso:
```
css.no-inherit {
  color: initial; */* Volta para a cor padrão do navegador */*
}

.force-inherit {
  border: inherit; */* Força a herança da borda do elemento pai */*
}

.reset-all {
  all: unset; */* Reseta todas as propriedades para seus valores iniciais ou herdados */*
}
```
A herança é particularmente útil para manter a consistência em elementos como texto, onde você pode definir estilos base em um elemento pai (como ```<body>```) e ter esses estilos aplicados em toda a página, a menos que sejam sobrescritos.

## **Especificidade**

A especificidade em CSS é um conjunto de regras que determina qual estilo será aplicado a um elemento quando há múltiplas regras conflitantes. É um conceito crucial para entender como o CSS resolve conflitos e aplica estilos.

## **Como a especificidade é calculada**

A especificidade é calculada como um valor de quatro partes, geralmente representado como quatro números separados por vírgulas. Da esquerda para a direita, esses números representam:

1. Estilos inline
2. IDs
3. Classes, atributos e pseudo-classes
4. Elementos e pseudo-elementos

Quanto maior o número em uma posição mais à esquerda, maior a especificidade.

## **Hierarquia de especificidade (do mais específico para o menos)**

1. Estilos inline: **`style="color: red;"`**
2. IDs: **`#header`**
3. Classes, atributos e pseudo-classes: **`.button`**, **`[type="text"]`**, **`:hover`**
4. Elementos e pseudo-elementos: **`p`**, **`::before`**

## **Exemplos de cálculo de especificidade**

1. **`p`** - Especificidade: 0,0,0,1
2. **`p.classe`** - Especificidade: 0,0,1,1
3. **`#id`** - Especificidade: 0,1,0,0
4. **`style="color: red;"`** - Especificidade: 1,0,0,0
5. **`p.classe1.classe2`** - Especificidade: 0,0,2,1
6. **`#id .classe`** - Especificidade: 0,1,1,0
7. **`body #conteudo .titulo`** - Especificidade: 0,1,1,1

## **Regras importantes sobre especificidade**

1. A especificidade supera a ordem de cascata. Um seletor mais específico sempre terá prioridade, mesmo que apareça antes no CSS.
2. O seletor universal (*) e os combinadores (+, >, ~, ) não afetam a especificidade.
3. Pseudo-classes têm a mesma especificidade que classes, enquanto pseudo-elementos têm a mesma especificidade que elementos.
4. A regra **`!important`** supera todas as outras declarações, independentemente da especificidade. Deve ser usada com cautela.

Exemplo prático:
```
<div id="container">
  <p class="texto">Este é um parágrafo.</p>
</div>
```
```
css#container p {
  color: blue;
} */* Especificidade: 0,1,0,1 */*

p.texto {
  color: red;
} */* Especificidade: 0,0,1,1 */*

div p {
  color: green;
} */* Especificidade: 0,0,0,2 */*
```
Neste exemplo, o texto será azul porque ```#container p``` tem a maior especificidade.

## **Boas práticas**

1. Evite usar **`!important`** sempre que possível.
2. Use seletores mais específicos em vez de **`!important`**.
3. Mantenha a especificidade dos seletores o mais baixa possível para facilitar a manutenção.
4. Use classes em vez de IDs quando possível para manter a flexibilidade.
5. Agrupe estilos relacionados para reduzir a necessidade de seletores altamente específicos.

Entender a especificidade é crucial para escrever CSS eficiente e previsível, evitando conflitos inesperados e facilitando a manutenção do código.

## **Seletores avançados**

Os seletores avançados em CSS permitem uma seleção mais precisa e poderosa de elementos HTML. Aqui estão alguns dos seletores avançados mais úteis, listados do mais utilizado para o menos:

1. Seletor de filho direto (>)Seleciona todos os elementos **`<p>`** que são filhos diretos de **`<div>`**.
    ```
    cssdiv > p {
      color: blue;
    }
    ```
2. Seletor de irmão adjacente (+)Seleciona o primeiro elemento **`<p>`** que vem imediatamente após um **`<h1>`**.
    ```
    cssh1 + p {
      font-weight: bold;
    }
    ```
3. Seletor de atributo ([attr])Seleciona todos os elementos **`<input>`** com o atributo type="text".
    ```
    cssinput[type="text"] {
      border: 1px solid gray;
    }
    ```
4. Seletor de pseudo-classe (:)Seleciona links quando o mouse está sobre eles.
    ```
    cssa:hover {
      text-decoration: underline;
    }
    ```
5. Seletor de pseudo-elemento (::)Seleciona a primeira linha de todos os elementos **`<p>`**.
    ```
    cssp::first-line {
      font-weight: bold;
    }
    ```
6. Seletor de irmãos gerais (~)Seleciona todos os elementos **`<p>`** que são irmãos de **`<h1>`**.
    ```
    cssh1 ~ p {
      margin-left: 20px;
    }
    ```
7. Seletor :nth-child()Seleciona os elementos **`<li>`** ímpares em uma lista.
    ```
    cssli:nth-child(odd) {
      background-color: #f2f2f2;
    }
    ```
8. Seletor :not()Seleciona todos os **`<input>`** exceto os do tipo "submit".
    ```
    cssinput:not([type="submit"]) {
      border: 1px solid #ccc;
    }
    ```

## **Variáveis**

As variáveis CSS, também conhecidas como propriedades personalizadas, permitem armazenar valores específicos para reutilização em todo o documento. Elas são definidas usando dois hífens (--) seguidos pelo nome da variável.Definindo variáveis:
```
css:root {
  --cor-primaria: #3498db;
  --cor-secundaria: #2ecc71;
  --fonte-principal: 'Arial', sans-serif;
}
```
Usando variáveis:
```
cssbody {
  background-color: var(--cor-primaria);
  font-family: var(--fonte-principal);
}

button {
  background-color: var(--cor-secundaria);
}
```
Vantagens das variáveis CSS:

1. Manutenção simplificada: Altere um valor em um único lugar para atualizar em todo o site.
2. Consistência: Garante o uso consistente de cores, fontes e outros valores em todo o projeto.
3. Legibilidade: Torna o código mais legível e semântico.
4. Responsividade: Pode ser combinado com media queries para criar designs responsivos.

Exemplo de uso com media queries:
```
css:root {
  --tamanho-fonte: 16px;
}

@media (min-width: 768px) {
  :root {
    --tamanho-fonte: 18px;
  }
}

body {
  font-size: var(--tamanho-fonte);
}
```
As variáveis CSS também podem ser manipuladas com JavaScript:
```
javascriptdocument.documentElement.style.setProperty('--cor-primaria', '#ff0000');
```
Isso permite criar temas dinâmicos ou ajustar estilos com base em interações do usuário
