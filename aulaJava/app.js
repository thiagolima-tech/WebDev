//Extensão Quokka

//alert("Hello World") ou /* e fecha  */

console.log("Teste")
console.error("ps")

let idade = prompt("Idade: ");
let resultado = confirm("Maior?")

alert(idade);
alert(resultado);

//Variáveis  (var menos usada)
var chave;

let nome = "Thiago";  //Pode mudar 
const apiKey = 234234; //fixas

console.log(typeof nome);

//É possivel caracter especial na variavel $ e _
//str, number, boolean, object, null e undefined (Tipagem dinâmica)

let nome1 = prompt("QUal seu nome: ")
let idade1 = prompt("Idade")
let profissao = prompt("Profissão")

alert(`Olá ${nome1}, tudo bem? Sua profissão é ${profissao} e sua idade ${idade1}`);  //crase não aspas para essa formataçao

//Livro MODERN JAVASCRIPT


/* Operadores:
Artiméticos: Igual Python

Number(prompt())  ,  parseFloat ,  parseInt ou String
*/