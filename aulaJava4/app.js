const teste = () => {
   
    let i = 0
    while (i<10){
        console.log(i)
        i++ //temos o -- para diminuir 1 ou +=2 para somar de 2
    } 

    do {
        console.log(i)
        i++
    } while (i < 10);

    let resposta

    do {
        resposta = prompt("Digite um numero")    
    } while (isNaN(resposta));
}

// teste()

const contagem = (num) => { 
    while (num>0) {
        alert(num)
        num--
    } 
    
}

// contagem(10)

const forFunc = (num) => {
    for (i=1;i<=3;i++){
        let tab = num * i
        alert(tab)
    }
    return 23
}

// forFunc(2)

let alunos = [forFunc(1), 'as', 3]

console.log(alunos[0])

if (alunos.includes(alunos.length)) {
    alert('boa')
}

let numeroAleatorio = Math.floor(Math.random() * alunos.length)

alunos[1] = "Outra" //atualizar posição

alunos.push('novo', 'novonov') //botar no final
alunos.unshift('no começo') // adiciona no começo
alunos.pop() //remove o ultimo item
alunos.shift() //remover o primeiro elemento
alunos.splice(0,2) //remover a partir do primeiro até outro indice do array
alunos.concat(['aluno 2, aluno 3']) //concatena arrays

alunos.indexOf(novo) //sempre q n acha retorna -1
alunos.includes(alunos.length)

alunos.forEach(function(item, index){
    alert(item, index)
}) 

const arrayMod = alunos.map(function(item,index){
    alert(item.toUpperCase())
}) //guarda em outro array


