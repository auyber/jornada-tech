/*
//TOTAL = 
//ARRAYS DE ITERAÇÃO
//FOR EACH()
//1. imprimir elementos
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(numbers){
    console.log(numbers);
});

//2. Soma de números
let numbers = [10, 20, 30, 40];
let result = 0
numbers.forEach(function(numbers){
    result += numbers;
});

console.log(result);

//3.Alterar elementos
let names = ["Alice", "Bob", "Charlie"];
let newNames = ""
names.forEach(function(names){
    newNames += names + "! ";
});

console.log(newNames);

//4. Contar quantidade
let numbers = [-1, 2, -3, 4, -5];
let negativos = [];

numbers.forEach(function(numbers){
    if (numbers < 0){
        negativos++;
    }
});

console.log(negativos);

//DIFÍCIL
//5. Média
let students = [{ name: "Alice", score: 85 }, { name: "Bob", score: 92 }, { name: "Charlie", score: 78 }];
let media = 0;

students.forEach(function(students){
    media += students.score
});

media /= students.length;

console.log(media);

//6. formatar
let products = [{ name: "Camiseta", price: 25 }, { name: "Calça", price: 50 }, { name: "Tênis", price: 100 }];
let newProducts = [];

products.forEach(function(products){
    newProducts.push(products.name + ": R$" + products.price);
}); // estava utilizando newProducts += ao invés de push, porém isso concatena todos resultados em um único array.

console.log(newProducts);

//MAP()
//FÁCIL
//1. novo array com ²
let numbers = [1, 2, 3, 4];

let newNumber = numbers.map(function(numbers){
    return numbers** 2;
});

console.log(newNumber);

//2. converter temperatura
let celsius = [0, 20, 30, 40];

let fahrenheit = celsius.map(celsius => (celsius * 9 / 5) + 32);

console.log(fahrenheit);

//MÉDIO
//3. Adicionar sufixo
let names = ["Maria", "João", "Lucas", "Ana"];

let sufixo = names.map(names => names += " Filho");

console.log(sufixo);

//DIFÍCIL
//1. Extrair preços
let products = [{ name: "Camiseta", price: 25 }, { name: "Calça", price: 50 }, { name: "Tênis", price: 100 }];

let desconto = products.map(function(products){
    products.price = products.price - (products.price * 0.10);
    return products;
});

console.log(desconto);

//6. converter uma lista
let people = [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }];

let nome = people.map(function(people){
    return people.name;
});

console.log(nome);
*/
//FILTER
//FÁCIL


