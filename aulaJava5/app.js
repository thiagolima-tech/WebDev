const btnClicar = document.getElementById('btnClick')
const paragraph = document.getElementById('paragraph')

btnClicar.addEventListener("click",()=>{
    paragraph.textContent = "Texto Alterado"
})

const form = document.getElementById('form')
const inputNome = document.getElementById('nome')
const inputEmail = document.getElementById('email')
const inputAssunto = document.getElementById('assunto')
const inputMensagem = document.getElementById('mensagem')
const btnEnviar = document.getElementById('bntEnviar')
const erro = document.getElementById('mensagemErro')
const inputSuges = document.getElementById('assunto')
const cadastroUsuarios = document.getElementById('cadastroUsuarios')    

const usuarios = [
    {
        nome: 'Thiago',
        sobrenome: 'Lima'
    },
    {
        nome: 'asd',
        sobrenome: 'adf'
    }
]

const usuariosModificado = usuarios.map(function (usuario){
    cadastroUsuarios.append(usuario.nome)
})

btnEnviar.addEventListener('click', function (event){
    event.preventDefault() //impedir que mande as infos dos campos do form
    const nome = inputNome.value
    const email = inputEmail.value
    const suges = inputSuges.value
    if (nome === "" || email === ""){
        erro.textContent = "Erro"
        erro.style.color = '#ff0000'
        // erro.classList.add('mensagemAlerta') //pode mexer com essa classe nova no css
        // erro.classList.toggle('mensagmeAlerta')
        //erro.src = "" //colocar imagem
        return
    }
    alert(`Nome: ${nome}\nEmail: ${email} ${suges}`)
    
    let cardUsuario = document.createElement('div')
    cardUsuario.innerHTML = `
    <h3> Nome: ${nome} </h3>
    <p> E-mail: ${email} </p>
    `
    cadastroUsuarios.append(cardUsuario)
    
    form.reset()
})

//criando objeto

// const usuario = {
//     nome: 'Thiago',
//     idade: '18'
// }

//alert(usuario.idade)