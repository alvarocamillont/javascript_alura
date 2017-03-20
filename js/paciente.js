// Classe que representa o paciente

function Paciente(nome, peso, altura, gordura) {
  this.nome = nome
  this.peso = peso
  this.altura = altura
  this.gordura = gordura
  this.imc = calculaIMC(peso, altura)
}

function calculaIMC(peso, altura) {
  var imc = peso / (altura * altura)
  imc = imc.toFixed(2)
  return imc
}

function validaPaciente(paciente) {
  var pesoValido = validaPeso(paciente.peso)
  var alturaValida = validaAltura(paciente.altura)

  if (pesoValido && alturaValida) {
    return true
  } else {
    return false
  }
}

function validaPeso(peso) {
  if (peso <= 0 || peso >= 1000) {
    return false
  } else {
    return true
  }
}

function validaAltura(altura) {
  if (altura <= 0 || altura >= 4) {
    return false
  } else {
    return true
  }
}

function validaPaciente(paciente) {
  var erros = []

  if (paciente.nome.length === 0) {
    erros.push('O nome não pode ser em branco')
  }

  if (paciente.gordura.length === 0) {
    erros.push('A gordura não pode ser em branco')
  }

  if (paciente.peso.length === 0) {
    erros.push('O peso não pode ser em branco')
  }

  if (paciente.altura.length === 0) {
    erros.push('A altura não pode ser em branco')
  }

  if (!validaPeso(paciente.peso)) {
    erros.push('Peso é inválido')
  }

  if (!validaAltura(paciente.altura)) {
    erros.push('Altura é inválida')
  }

  return erros
}
