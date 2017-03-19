// Classe que representa o paciente

function Paciente (nome, peso, altura, gordura) {
  this.nome = nome
  this.peso = peso
  this.altura = altura
  this.gordura = gordura
  this.imc = calculaIMC(peso, altura)
}

function calculaIMC (peso, altura) {
  var imc = peso / (altura * altura)
  imc = imc.toFixed(2)
  return imc
}

