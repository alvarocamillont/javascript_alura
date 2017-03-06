var titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'

var paciente = document.querySelector('#primeiro-paciente')

var peso = paciente.querySelector('.info-peso').textContent
var altura = paciente.querySelector('.info-altura').textContent


var tdIMC = paciente.querySelector('.info-imc')

var pesoValido = true
var alturaValida = true

if (peso <= 0 || peso >= 1000) {
  pesoValido = false
  tdIMC.textContent = 'Peso Inválido'
}

if (altura <= 0 || altura >= 4) {
  alturaValida = false
  tdIMC.textContent = 'Altura Inválida'
}

if (pesoValido && alturaValida) {
  var imc = peso / (altura * altura)
  tdIMC.textContent = imc
}

