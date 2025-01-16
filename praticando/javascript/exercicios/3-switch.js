//TOTAL = 
//ESTRUTURAS CONDICIONAIS SWITCH
//1. Dia da semana
function diaDaSemana(number){
    switch (number){
        case 1:
            return "Domingo"
        case 2:
            return "Segunda-feira"
        case 3:
            return "Terça-feira"
        case 4:
            return "Quarta-feira"
        case 5:
            return "Quinta-feira"
        case 6:
            return "Sexta-feira"
        case 7:
            return "Sábado"
        default:
            return "Número inválido"
    }
};

console.log(diaDaSemana(8));

//2. Verificação de Nota
function nota(number){
    switch(true){ //Isso permite avaliar cada case como uma expressão booleana (true ou false).
        case (number === 9 || number === 10):
            return "A"
        case (number === 7 || number === 8):
            return "B"
        case (number === 5 || number === 6):
            return "C"
        case (number <= 5):
            return "D"
        default:
            return "Nota inválida"
           
    }
};

console.log(nota(9));

//3. Escolha de Fruta
function fruta(s){
    switch(s){
        case "maçã":
            return "doce"
        case "laranja":
            return "ácida"
        case "melão":
            return "neutra"
        default:
            return "fruta não encontrada"
    }
};

console.log(fruta("melão"));

//4. tipo de número
function numero(n){
    switch(true){
        case (n > 0):
            return "positivo"
        case (n == 0):
            return "zero"
        case (n < 0):
            return "negativo"
        default:
            return "Sei lá o que tu digitou"
    }
};

console.log(numero(-10));

//5. Escolha de Cor
function cor(s){
    switch(true){
        case (s == "vermelho" || s == "azul" || s== "amarelo"):
            return "primária"
        case (s == "verde" || s == "laranja" || s== "roxo"):
            return "secundária"
        default:
            return "Não é primária nem secundária"
    }
};

console.log(cor("roxo"));

//Médios
//1. faixa etária
function faixaEtaria(number){
    switch (true){
        case (number >= 60):
            return "Idoso"
        case (number >= 18):
            return "Adulto"
        case (number >= 13):
            return "Adolescente"
        case (number < 13):
            return "Criança"
        default:
            return "Idade inválida"
    }
};

console.log(faixaEtaria(70));

//2. Gênero Musical
function genero(number){
    switch(number){
        case 1:
            return "Pop"
        case 2:
            return "Rock"
        case 3:
            return "Jazz"
        case 4:
            return "Blues"
        case 5:
            return "Hip-hop"
        default:
            return "Genêro inexistente"
    }
};

console.log(genero(5));

//3. comida
function comida(s){
    switch(s){
        case "café":
            return "café da manhã"
        case "almôndega":
            return "almoço"
        case "sopa":
            return "jantar"
        default:
            return "Otô tipo"
    }
};

console.log(comida("carne"));

//4. Placa de trânsito
function sinalizacao(number){
    switch(number){
        case 1:
            return "Pare"
        case 2:
            return "Atenção"
        case 3:
            return "Proibido"
        case 4:
            return "Liberação"
        default:
            return "Sinalização inválida"
    }
};

console.log(sinalizacao(3));

//5. Tamanho da Camisa
function Tamanho(number){
    switch(number){
        case 1:
            return "P"
        case 2:
            return "M"
        case 3:
            return "G"
        case 4:
            return "GG"
        default:
            return "Tamanho inválido"
    }
};

console.log(Tamanho(3));

//Difícil
//1. Classificação de carro
function classificacao(s){
    switch(s){
        case 1:
        case 2:
            return "eficiente"
        case 3:
            return "não eficiente"
        case 4:
            return "altamente eficiente"
        default:
            return "Inventou um novo tipo de combustivel?"
    }
};

console.log(classificacao(8));

//2. redimento
function rendimento(number){
    switch(true){
        case (number > 0 && number < 4):
            return "baixo"
        case (number >= 4 && number < 7):
            return "médio"
        case (number >= 7 && number < 10):
            return "bom"
        case (number == 10):
            return "excelente"
        default:
            return "número inválido"
    }
};

console.log(rendimento(10));

//3. País
function pais(s){
    switch(s){
        case "Brasil":
            return "América do Sul"
        case "EUA":
            return "América do Norte"
        case "China":
            return "Ásia"
        case "França":
            return "Europa"
        default:
            return "País fora da lista"
    }
};

console.log(pais("Brasil"));

//4. Gestão de estoque
function estoque(number){
    switch(number){
        case 1:
            return "vender"
        case 2:
            return "reposicionar estoque"
        case 3:
            return "destacar no site"
        default:
            return "Opção inválida"
    }
};

console.log(estoque(2));

//5. mês do ano
function mesAno(number){
    switch(number){
        case 1:
            return "Janeiro"
        case 2:
            return "Fevereiro"
        case 3:
            return "Março"
        case 4:
            return "Abril"
        case 5:
            return "Maio"
        case 6:
            return "Junho"
        case 7:
            return "Julho"
        case 8:
            return "Agosto"
        case 9:
            return "Setembro"
        case 10:
            return "Outubro"
        case 11:
            return "Novembro"
        case 12:
            return "Dezembro"
        default:
            return "De que planeta que tu veio, que tem outros meses?"
    }
};

console.log(mesAno(15));
