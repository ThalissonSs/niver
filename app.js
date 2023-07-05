let btnEntrar = document.getElementById("entrar")
let senha = document.getElementById("senha")
let NvSenha = 0

btnEntrar.onclick = function() {
  senha = document.getElementById("senha")
  let main = document.getElementById("main")
  let acesso = document.getElementById("acesso")
  let avisoErro = document.getElementById("avisoErro")

  if (senha.value.toLowerCase() == 'spider-man') {
    main.style.display = 'block'
    acesso.style.display = 'none'
    avisoErro.style.display = 'none'
  } else {
    avisoErro.style.display = 'flex'
  }
}

function viewpass() {
  NvSenha++
  if (NvSenha % 2 == 0) {
    senha.type = 'password'
  } else {
    senha.type = 'text'
  }
}