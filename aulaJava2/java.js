// === e !== igual a valor e tipo ou diferente em valor e tipo

"uva" > "banana"; //True
"Uva" > "banana"; //False  ordem lexical

nome = prompt("Escreva seu nome");

if (nome === "Caio" || nome === "quwe") {
    console.log("É você")
}

else if (nome === "Thiago" && nome !== "Caio") {
    console.log("Quem é")
}

else if (!nome === "Caio" && !nome == "Thiago") {

}

else {
    console.log("Não é você");
}

nome === "Caio" ? console.log("É você?") : console.log("Não é você")  // ? = se sim  , : = se não

//&& e    || ou    ! não


login = prompt("Digite seu nome")
senha = prompt("Digite sua senha")

if ((login === "1234" && senha === "1234") || (login === "123" && senha === "123") || (login === "12" && senha === "12")) {
    alert("login efetuado")
} else {
    alert("Usuário e senha incorretos")
}

let nome = "Thiago"
let sobrenome = ""

let nomeFinal = sobrenome || nome  //se não tiver sobrenome coloca nome

let height = 0;

alert(height || 100); //manda 100
alert(height ?? 100) //manda 0

switch (nome) {
    case "fulano":
    case "Caio":
        alert("sim")
        break;
    case "Thiago":
        alert("sim")
        break;
    default:
        alert("nenhum")
}