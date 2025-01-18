//TOTAL = 24 exercícios
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

//4. dobrar valores
let numbers = [5, 10, 15, 20];

let dobrar = numbers.map(numbers => numbers * 2);

console.log(dobrar)

//DIFÍCIL
//5. Extrair preços
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

//FILTER
//FÁCIL
//1. filtrar maior que 10
let numbers = [5, 12, 8, 130, 44];

let maior = numbers.filter(function(number){
    return number > 10;
});

console.log(maior);

//2. filtras palavras > 4
let words = ["apple", "banana", "kiwi", "pear"];

let grandePalavras = words.filter(words => words.length > 4); // como usamos o filter (ele percorre o array), e o length percorre os itens

console.log(grandePalavras);

//3. produtos baratos
let products = [{ name: "Camiseta", price: 25 }, { name: "Calça", price: 50 }, { name: "Tênis", price: 100 }];

let barateza = products.filter(products => products.price < 50);

console.log(barateza);

//4. negativos
let numbers = [-10, 5, -3, 7, -1];

let negativos = numbers.filter(numbers => numbers < 0);

console.log(negativos);

//5. maior de 18
let people = [{ name: "Alice", age: 30 }, { name: "Bob", age: 17 }, { name: "Charlie", age: 25 }];

let maior = people.filter(people => people.age > 18);

console.log(maior);

//6.não concluidas
let tasks = [{ task: "Estudar", done: true }, { task: "Comprar leite", done: false }, { task: "Ir ao médico", done: true }];

let tarefas = tasks.filter(tasks => tasks.done == false);

console.log(tarefas);

//REDUCE()
//1.somar
let numbers = [5, 10, 15, 20];

let soma = numbers.reduce((acc, numbers)=> acc + numbers, 0);

console.log(soma);

//2. concatenar
let words = ["Hello", "world", "from", "JavaScript"];

let saudacao = words.reduce((acc, words) => acc + " " + words );

console.log(saudacao);

//3. multiplicar elementos
let numbers = [1, 2, 3, 4];

let multipicacao = numbers.reduce((acc, numbers) => acc * numbers);

console.log(multipicacao);

//4. contar ocorrencias
let words = ["apple", "banana", "cherry", "date"];

let ocorrencia = words.reduce((acc, words) => acc + (words.split("a").length - 1), 0); //

console.log(ocorrencia);

//5. media
let numbers = [1, 2, 3, 4, 5];

let media = numbers.reduce((acc, numbers, index, array) => acc + numbers / array.length, 0); //index é o indice atual no array, não está sendo utilizado, mas foi declarado por padrão

console.log(media);

//6. agrupar objetos
let products = [
    { name: "Camiseta", category: "Roupas" },
    { name: "Calça", category: "Roupas" },
    { name: "Tênis", category: "Calçados" }
  ];
  
  let groupedByCategory = products.reduce(function (acc, product) {
    if (!acc[product.category]) {
      acc[product.category] = []; // Cria uma nova chave no objeto para a categoria, se não existir.
    }
    acc[product.category].push(product); // Adiciona o produto atual à categoria correspondente.
    return acc; // Retorna o acumulador atualizado.
  }, {}); // O acumulador inicia como um objeto vazio.
  
  console.log(groupedByCategory);
  
