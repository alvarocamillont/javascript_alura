/* global Paciente */

var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault()
  var form = document.querySelector('#form-adiciona')

  var paciente = obtemPacienteDoFormulario(form)

  // Adição aqui
  var erros = validaPaciente(paciente)

  if (erros.length > 0) {
    exibeMensagensDeErro(erros)
    return
  }

  adicionaPacienteNaTabela(paciente)

  form.reset()
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

function montaTd (dado, classe) {
  var td = document.createElement('td')
  td.classList.add(classe)
  td.textContent = dado
  return td
}

function montaTr (paciente) {
  // Cria TR
  var pacienteTr = document.createElement('tr')
  pacienteTr.classList.add('paciente')
  // Cria as TD's e a adiciona dentro da TR
  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
  pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
  pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))
  // retorna a TR
  return pacienteTr
}

function exibeMensagensDeErro (erros) {
  var ul = document.querySelector('#mensagens-erro')
  ul.innerHTML = ''

  erros.forEach(function (erro) {
    var li = document.createElement('li')
    li.textContent = erro
    ul.appendChild(li)
  })
}

function adicionaPacienteNaTabela (paciente) {
  var pacienteTr = montaTr(paciente)
  var tabela = document.querySelector('#tabela-pacientes')
  tabela.appendChild(pacienteTr)
}
