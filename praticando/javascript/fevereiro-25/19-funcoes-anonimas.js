//Estou focando apenas nos primeiros exercicios de cada tópico, para continuar meus estudos.
//vou resolvendo mais exercicios todos os dias


//TOTAL =
/*
//Exercícios sobre Funções Anônimas e Callback
//1.somar 2 numeros
function somar(n, n2){
    return function(){
        return n + n2
    } 
}

/*
console.log(somar(1, 2)())
Chamamos somar(1, 2)
A função somar retorna outra função, mas não executa nada ainda.
O retorno de somar(1, 2) é esta função anônima:
function() {
    return n + n2;
}
Só que somar(1, 2) não retorna o valor da soma ainda, apenas a função que faz a soma.
2️⃣ Precisamos chamar essa função anônima

Para executar a função que foi retornada, usamos ():
js
Copiar
somar(1, 2)()  
O primeiro () chama somar(1, 2), que retorna a função anônima.
O segundo () chama essa função anônima, que agora executa return n + n2.

//2.filtrar numertos pares
array = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]

function filtrarPares(array){
    return array.filter(function(n){
        return n % 2 === 0
    })
}

console.log(filtrarPares(array))
*/
//FALTA EX 3. ao 6.