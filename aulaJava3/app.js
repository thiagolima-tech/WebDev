// function addNumbers(a, b) {
//     let qualquer= "UQ"
//     return `${a + b} e variavel ${qualquer}`; 
// }

// console.log(addNumbers(3, 5))

// function sumNumbers(a,b = 0){  //se não tiver b 
//     return a+b
// }

// function multSum() {
//     let resultado = sumNumbers(4+5);
//     console.log(resultado)
// }

// // ARROW FUNCTION

// const divNumbers = (num1, num2) => num1 + num2

// function getName() {
//     let nome = prompt("Nome");
//     confirm(`${nome} é o nome?`)
//     return nome
// }

// function getIdade() {
//     let idade = prompt("idade");
//     return idade
// }

// function mensagem(idade, nome) {
//     if (idade != null && nome != null) {
//         alert(`sua idade é ${idade} seu nome é ${nome}`)
//     }
    
// }

// function start() {
//     let idade = getIdade() 
//     let nome = getName() 
//     mensagem(idade, nome)
// }

// start()


let name = "Qça"

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.includes("ça"))
console.log(name.trim())     //cortar espaços


let numero = 5

console.log(numero.toFixed(2))  //quantas casas decimais
console.log(isNaN(numero))    //se é um numero
// .toLocaleString()  

console.log(Math.random())  //Math para operações matematicas
console.log(Math.floor(Math.random()*11)) // arredondar para baixo e gerar um numero aleatorio de 0 a 10
console.log(Math.ceil(Math.random()*11))
console.log(Math.round(Math.random()*11))

let dataAtual = new Date()
console.log(dataAtual.getHours())