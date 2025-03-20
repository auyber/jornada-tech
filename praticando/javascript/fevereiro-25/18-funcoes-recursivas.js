//Estou focando apenas nos primeiros exercicios de cada tópico, para continuar meus estudos.
//vou resolvendo mais exercicios todos os dias

/*
//TOTAL =

//Exercícios de Funções Recursivas
//1. soma de números
function somaAll(n) {
    if (n === 1) return 1
    return n + somaAll(n - 1)
    
}

console.log(somaAll(5))
/*
// forma clara de entender:
📌 O que a função faz?
A função somaAll(n) recebe um número n e soma todos os números de 1 até n usando recursão.

Se n for 1, ela para e retorna 1.
Caso contrário, ela chama a si mesma com n - 1 e soma com n.

📌 Chamadas e retornos passo a passo
Se chamarmos somaAll(5), a função executa assim:

1️⃣ Primeira chamada: somaAll(5)

Como n não é 1, faz:
5 + somaAll(4)
2️⃣ Segunda chamada: somaAll(4)

Como n não é 1, faz:
4 + somaAll(3)
3️⃣ Terceira chamada: somaAll(3)

Como n não é 1, faz:
3 + somaAll(2)
4️⃣ Quarta chamada: somaAll(2)

Como n não é 1, faz:
2 + somaAll(1)
5️⃣ Quinta chamada: somaAll(1)

Aqui a função para (caso base) e retorna 1.
*/
/*
//2.fatorial de um número
function fatorial(n){
    if (n === 1) return 1
    return n * fatorial(n - 1)
}

console.log(fatorial(5))
*/
//FALTA EX: DO 3. ao 15