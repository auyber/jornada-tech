//TOTAL = 15 exercícios
// OPERADORES LÓGICOS
//1. Verificação de maioridade

let idade = 23;
if (idade > 18) {
    console.log("Você é de maior")
} 

console.log(); 

//2. Checagem de número par
let numero = 13;
if (numero % 2 === 0) {
    console.log(true)
} else {
    console.log(false);
}

console.log();


//3. Verificação de número positivo
let numero = -4;
if (numero >= 0) {
    console.log(true)
} else {
    console.log(false)
};

console.log()

//4. Verificação de dois valores iguais
let numerox = 56;
let numeroy = 5;
if (numerox === numeroy){
    console.log(true)
} else {
    console.log(false)
};

console.log();

//5. Checagem de voto
let idade = 6;
if (idade >= 16) {
    console.log("Você pode votar!!!")
} else {
    console.log("Você não pode votar!!!")
};

console.log();

//6. Verificação de Permissões
let usuario = "Logado"; //""""Logado" ou "Deslogado"
let idade = 17;
if (usuario === "Logado" && idade >= 18) {
    console.log("Permissão concedida")
} else {
    console.log("Permissão Negada")
};

console.log();

// 7. Checagem de idade para categorias de jogo
let idade = 11;
if (idade >= 18) {
    console.log("Categoria A")
} else if (idade >= 12){
    console.log("Categoria B")
} else {
    console.log("Não pode participar")
};

console.log();

//8. Verificação de Acesso com múltiplos critérios
let usuario = "Deslogado"; // "Logado" ou "Deslogado"
let conta = "admin"; // "admin" ou "editor"
//lembrar de agrupar as verificações,ex: (&&(||)), tentei (&&,||) sem agrupar e dava errado a lógica
if (usuario === "Logado" && (conta === "admin" || "editor")) {
    console.log("Acesso concedido")
} else {
    console.log("Acesso negado")
};

console.log();

//9. Checagem de dados de fomulário
let usuario = "Auyber";
senha = "Vemcarre1r@dev";
if (usuario !== "" && senha.length > 7 && /\d/.test(senha) && /\W/.test(senha)) {
    console.log("Registro Efetuado");
} else {
    console.log("Preencha corretamente o Formulário");
};

console.log();

/*
Essas expressões regulares são usadas para testar padrões em uma string (como a variável senha). Aqui está uma breve explicação de cada uma:

/\d/.test(senha)

A expressão regular \d corresponde a qualquer dígito (número de 0 a 9).
O método .test(senha) retorna true se a string senha contiver pelo menos um dígito e false caso contrário.
Exemplo:

/\d/.test("abc123") // Retorna true
/\d/.test("abcdef") // Retorna false
/\W/.test(senha)

A expressão regular \W corresponde a qualquer caractere que não seja uma letra, número ou underline (_).
Ou seja, ela verifica se há caracteres especiais (como !, @, #, etc.) na string.
Exemplo:

/\W/.test("senha@123") // Retorna true (tem o caractere especial '@')
/\W/.test("senha123")  // Retorna false (não tem caracteres especiais)
Essas expressões são úteis para validar senhas, garantindo que atendam a certos requisitos de segurança, como a inclusão de números ou caracteres especiais.*/

//10. Verificação de entrada para um evento
let idade = 18;
let acompanhada = "não"; // "sim" ou "não"
if (idade > 18 || (idade <= 18 && acompanhada == "sim")) {
    console.log("Entrada Permitida")
} else {
    console.log("Entrada Negada")
};

console.log();

//11. Controle de Acesso de múltiplas permissões
let idade = 22;
let conta = "admin";
let situacao = "banido";
if (idade > 21 && conta == "admin" && situacao == "") {
    console.log("Acesso Permitido!!!")
} else {
    console.log("Acesso Negado!!!")
};

console.log();

//12. Verificação de elegibilidade para promoção
let compras = 399;
let cliente = "VIP";
let fraude = "não"; // "sim" ou "não"
if (compras > 500 || cliente == "VIP" && (fraude == "não")) {
    console.log("Promoção Elegível")
} else {
    console.log("Promoção não Elegível")
};

console.log();
 
//13. Validação de dados complexos
let idade = 18;
let nome = "Auyber";
let senha = "Vemcarre1r@dev";
if (idade >= 18 && idade <= 30 && nome !== "" && senha.length >= 7 && /\d/.test(senha) && /\W/.test(senha)) {
    console.log("Usuário Registrado")
} else {
    console.log("Usuário Não Registrado")
};

console.log();

//14. Checagem de permissões avançadas
let idade = 19;
let usuario = "admin";
let conta = "";
let compraRealizada = 0;
if (idade > 18 && usuario === "admin" && conta !== "Banido" && compraRealizada >= 1) {
    console.log("Acesso permitido")
} else {
    console.log("Acesso Negado")
};
*/
console.log();

//15. Multiplos Intervalos
function intervalo(n) {
    return (n >= 10 && n <= 20) || (n >= 30 && n <= 40);
};

console.log(intervalo(20));




