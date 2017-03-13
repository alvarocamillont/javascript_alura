var titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'

var pacientes = document.querySelectorAll('.paciente')

for (var index = 0; index < pacientes.length; index++) {
  var paciente = pacientes[index]
  CalculaIMC(paciente)
}

function CalculaIMC (paciente) {
  var peso = paciente.querySelector('.info-peso').textContent
  var altura = paciente.querySelector('.info-altura').textContent

  var tdIMC = paciente.querySelector('.info-imc')

  var pesoValido = true
  var alturaValida = true

  var errorMessage = ''

  if (peso <= 0 || peso >= 1000) {
    pesoValido = false
    errorMessage = 'Peso Inválido'
  }

  if (altura <= 0 || altura >= 4) {
    alturaValida = false
    errorMessage = 'Altura Inválida'
  }

  if (pesoValido && alturaValida) {
    var imc = peso / (altura * altura)
    tdIMC.textContent = imc.toFixed(2)
  } else {
    tdIMC.textContent = errorMessage
    paciente.classList.add('paciente-invalido')
  }
}

var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault()
  var form = document.querySelector('#form-adiciona')

  var nome = form.nome.value
  var peso = form.peso.value
  var altura = form.altura.value
  var gordura = form.gordura.value

  var pacientTr = document.createElement('tr')

  var nomeTD = document.createElement('td')
  var pesoTD = document.createElement('td')
  var alturaTD = document.createElement('td')
  var gorduraTD = document.createElement('td')

  nomeTD.textContent = nome
  pesoTD.textContent = peso
  alturaTD.textContent = altura
  gorduraTD.textContent = gordura

  pacientTr.appendChild(nomeTD)
  pacientTr.appendChild(pesoTD)
  pacientTr.appendChild(alturaTD)
  pacientTr.appendChild(gorduraTD)

  var table = document.querySelector('#tabela-pacientes')

  table.appendChild(pacientTr)
})

