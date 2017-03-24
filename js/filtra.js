var campoFiltro = document.querySelector('#filtrar-tabela')
var pacientes = document.querySelectorAll('.paciente')

campoFiltro.addEventListener('input', function () {
  var expressao = new RegExp(this.value, 'i')

  if (this.value.length > 0) {
    for (let i = 0; i < pacientes.length; i++) {
      let paciente = pacientes[i]
      let tdNome = paciente.querySelector('.info-nome')
      let nome = tdNome.textContent
      if (expressao.test(nome)) {
        paciente.classList.remove('invisivel')
      } else {
        paciente.classList.add('invisivel')
      }
    }
  } else {
    for (let i = 0; i < pacientes.length; i++) {
      let paciente = pacientes[i]
      paciente.classList.remove('invisivel')
    }
  }
})