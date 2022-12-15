
//console.log() --> mostra no console do navegador ao aperta o F12
//alert() --> aparece aquele alerta estilo popup na tela do navegador 
//prompt() --> abre uma caixa de dialogo para inserir uma informação


     // ===> Trabalhando com function <===

/*     
var n1 = prompt("1º Valor");
n1 = parseInt(n1); // Transforma o valor do prompt em inteiro, visto que os valores gerados no prompt são Strings
alert("1º Valor = " + n1);
var n2 = prompt("2º Valor");
n2 = parseInt(n2); // Transforma o valor do prompt em inteiro, visto que os valores gerados no prompt são Strings
alert("2º Valor = " + n2);

alert(n1 + " + " + n2 + " = " + soma(n1, n2));
alert(n1 + " - " + n2 + " = " + subtracao(n1, n2));
alert(n1 + " * " + n2 + " = " + multiplicacao(n1, n2));
alert(n1 + " / " + n2 + " = " + divisao(n1, n2));

function soma(n1, n2){
    return n1 + n2;
};

function subtracao(n1, n2){
    return n1 - n2;
};

function multiplicacao(n1, n2){
    return n1 * n2;
};

function divisao(n1, n2){
    return n1 / n2;
};
*/

/*
var idade = prompt("Qual a sua idade?");

console.log(validaIdade(idade));

function validaIdade(idade){
    
    var validar;

    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    };
    return validar;
};
*/

/*
function clicou(){
    alert("Obrigado por clicar!");
};//essa função roda quando clica no botão gerado no html e mostra a mensagem definida aqui no JavaScript

function clicou(){
    document.getElementById("agradecimento").innerHTML="Valeu por clicar!"; //innerHTML injeta o que for definido no parâmetro e aparece no body do HTML
    console.log(document.getElementById("agradecimento"));
    
};//essa função roda quando clica no botão gerado no html e mostra a mensagem na tela do navegador

function redirecionar(){
    window.open("https://github.com/"); //aqui você clica na mensagem gerada na tela do html e abre uma guia nova para o site de destino
    window.location.href = "https://github.com/";//aqui você clica na mensagem gerada na tela do html e é redirecionado, na mesma guia, para o site de destino
};

function trocar(elemento){
//    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse!";
//  alert("trocar texto"); // ao passar o mouse sobre o texto do HTML, vai aparecer o alert no navegador
};

function voltar(elemento){
//    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
};

function load(){
    alert("Página carregada!");
};

function funcaoChange(elemento){
    console.log(elemento.value);
};
*/

     // ===> Trabalhando com condionais, laços de repetição e Date <===

     // Condicionais
/*
var idade = 0;
idade = prompt("Qual a sua idade?"); // Abre uma caixa de dialogo para inserir uma informação
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

     // Laços de repetição
//var count;

//while
/*
while(count <= 5){
    alert(count);
    console.log(count);
    count++;
};*/

//for
/*
for(count = 0; count <= 5; count++){
    alert(count);
    console.log(count);
};
*/

     // Date
/*
var d = new Date();
console.log("Hoje é " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()); // getDate para pegar o dia, (getMonth + 1) para pegar o mês " o + 1 porque o mês começa a conta em zero"
console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
//alert("Dia: " + d.getDay());
//alert("Mês: " + (d.getMonth()+1));
//alert("Ano: " + (d.getYear()));
*/

//===========================================================================================================
//===========================================================================================================

     // ===> Trabalhando com dicionário <===
    
     // Dicionário simples
//var fruta = {nome: "maçã", cor:"vermelha"}; //Note que o dicionário é entre chaves
//console.log(fruta);
//console.log(fruta.cor);
//console.log(fruta.nome);

    // Array de dicionários
//var frutas = [{nome: "maçã", cor:"vermelha"}, {nome: "uva", cor: "roxa"}];
//console.log(frutas);
//console.log(frutas.length);
//console.log(frutas[1].nome);
//console.log(frutas[0].cor);
//frutas.pop();
//console.log(frutas);
//frutas.push({nome: "abacate", cor: "verde"});
//console.log(frutas);


    // Dicionário de Arrays 
//var frutas = {array1: [1, 2, 3], array2: ["uva", "maçã", "banana"]};
//console.log(frutas);
//console.log(frutas.array1.length);
//console.log(frutas.array1.reverse());
//console.log(frutas.array2.toString());
//console.log(frutas.array2[1]);
//frutas.array2.pop(); // Removendo o último elemento do array2
//console.log(frutas);
//frutas.array1.push(15); // Adicionando o número 15 no array1
//console.log(frutas);

//===========================================================================================================
//===========================================================================================================

     // ===> Trabalhando com Array de Strings <===
//var lista = ["maçã", "pêra", "laranja"]; // Array de Strings
//console.log(lista); // Mostra no console do navegador ao aperta o F12
//console.log(lista[1]); // Aqui vai imprimir apenas a posição 1 do Array
//lista.pop(); // Remove o último item do Array
//lista.push("uva"); // Adiciona um item ao Array
//console.log(lista);
//console.log(lista.length); // Mostra o tamanho do Array
//console.log(lista.reverse()); // Mostra o Array inverso
//console.log(lista.toString()); // Converte o Array para String.
//console.log(lista.join(" - ")); /* Também converte para String, 
//                               mas você pode definir o separador que no padrão do toString é a vírgula */ 

     // ===> Trabalhando com variáveis de Strings e números <===                           
//var nome = "Rafael Galdino";
//var idade = 33;
//var idade2 = "10";
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toLowerCase());
//console.log(frase.toUpperCase());

const monthNumber = prompt("mês");

//TODO: Complete o JSON "months" com os meses faltantes.
const months = {
  "1": "January",
  "2": "February",
  "3": "March",
  "4": "April",
  "5": "May",
  "6": "June",
  "7": "July",
  "8": "August",
  "9": "September",
  "10": "October",
  "11": "November",
  "12": "December",
};

alert(months[monthNumber]);