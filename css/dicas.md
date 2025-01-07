# Anotações

## Abaixo temos algumas anotações, a qual eu fiz conforme estudava.

- Caso queira alguma cor de uma página web, pode usar a extensão  (no meu caso uso no Chrome) ColorZilla.
- Também pode utilizar a extensão Fonts Ninja, para achar alguma fonte utilizada, ou alguma próxima.
- “.” serve para selecionar classe e “#” serve para selecionar ID no CSS
- padding é o espaço interno da borda (caixa)
- margin é o espaço externo da borda (caixa)
- sempre zerar os estilos do navegador com o seletor universal   “ * “ no CSS
- para pegar elementos aninhados (qualquer posição) podemos utilizar: ex:  “ nav  a”
- para selecionar o filho (imediatamente dentro) de algum elemento utilizamos   “nav  > a”
- Dica artistica, sempre ter espaço entre elementos,
- Dica de cor, quando escolher uma cor, mude para hsl clicando nela, e mude o ultimo elemento (brilho): cor 1: #1c1a1d  =  280, 5%, 10%   mude o 10% para o valor que queira
- utilizando o nth-child, podemos utilizar formas matemáticas, tbm podemos usar odd (impar) e even (par).
- **`n`**: Representa uma variável que funciona como um contador ou índice sequencial
- **`th`**: Vem de "ordinal numbers" em inglês, onde `st`, `nd`, `rd`, e `th` são sufixos que indicam posições (como "1st", "2nd", "3rd", "4th" e assim por diante). Então, `nth` indica um número ordinal qualquer (não específico),

Juntos, `nth-child` significa selecionar o "enésimo filho" de um elemento, permitindo estilos com base na posição relativa do elemento no contêiner.
- criar várivavel - se cria dentro da pasta raiz (root) ex:

```
:root {
    --cor-principal: #3c59e7;
    --cor-claro: #cfc9c9;
    --cor-escuro: #232323;
    --preenchimento-pq: .25rem 1rem;
    --preenchimento-md: 2rem;
    --preenchimento-gd: 4rem;
}

```

- quando você clica no link do menu, ele faz rolagem devagar até a parte da página

```
html {
  scroll-behavior: smooth;
}
```
