
// function nome(argumento) {
//   conteudo da função
// }

var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida. forEach(function(duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})
