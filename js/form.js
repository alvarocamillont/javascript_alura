
var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault()
  var form = document.querySelector('#form-adiciona')

  var paciente = obtemPacienteDoFormulario(form)

  var pacientTr = document.createElement('tr')

  var nomeTD = document.createElement('td')
  var pesoTD = document.createElement('td')
  var alturaTD = document.createElement('td')
  var gorduraTD = document.createElement('td')
  var imcTD = document.createElement('td')

  nomeTD.textContent = paciente.nome
  pesoTD.textContent = paciente.peso
  alturaTD.textContent = paciente.altura
  gorduraTD.textContent = paciente.gordura
  imcTD.textContent = paciente.imc

  pacientTr.appendChild(nomeTD)
  pacientTr.appendChild(pesoTD)
  pacientTr.appendChild(alturaTD)
  pacientTr.appendChild(gorduraTD)
  pacientTr.appendChild(imcTD)

  var table = document.querySelector('#tabela-pacientes')

  table.appendChild(pacientTr)
})

function obtemPacienteDoFormulario (form) {
  var nome = form.nome.value
  var peso = form.peso.value
  var altura = form.altura.value
  var gordura = form.gordura.value

  peso = parseFloat(peso.replace(',', '.'))
  altura = parseFloat(altura.replace(',', '.'))
  gordura = parseFloat(gordura.replace(',', '.'))

  var paciente = new Paciente(nome, peso, altura, gordura)

  return paciente
}
