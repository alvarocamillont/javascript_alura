var tabela = document.querySelector('#tabela-pacientes')
tabela.addEventListener('dblclick', function (event) {
  // Executa somente nas linhas
  var elementoAlvo = event.target
  var elementoPai = elementoAlvo.parentNode
  if (elementoAlvo.tagName === 'TD') {
    elementoPai.classList.add('fadeOut')
    setTimeout(function () {
      elementoPai.remove()
    }, 500)
  }
})

