
var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault()
  var form = document.querySelector('#form-adiciona')

  var nome = form.nome.value
  var peso = form.peso.value
  var altura = form.altura.value
  var gordura = form.gordura.value

  peso = parseFloat(peso.replace(',', '.'))
  altura = parseFloat(altura.replace(',', '.'))
  gordura = parseFloat(gordura.replace(',', '.'))

  var pacientTr = document.createElement('tr')

  var nomeTD = document.createElement('td')
  var pesoTD = document.createElement('td')
  var alturaTD = document.createElement('td')
  var gorduraTD = document.createElement('td')
  var imcTD = document.createElement('td')

  nomeTD.textContent = nome
  pesoTD.textContent = peso
  alturaTD.textContent = altura
  gorduraTD.textContent = gordura
  imcTD.textContent = calculaIMC(peso, altura)

  pacientTr.appendChild(nomeTD)
  pacientTr.appendChild(pesoTD)
  pacientTr.appendChild(alturaTD)
  pacientTr.appendChild(gorduraTD)
  pacientTr.appendChild(imcTD)

  var table = document.querySelector('#tabela-pacientes')

  table.appendChild(pacientTr)
})
