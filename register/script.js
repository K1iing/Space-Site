const botao = document.getElementById('inputRegis');

// Adiciona um listener para o evento de clique no botão
botao.addEventListener('click', function() {
    // Seleciona o parágrafo
    const paragrafo = document.getElementById('meuParagrafo');

    // Altera o conteúdo do parágrafo
    paragrafo.textContent = 'Registrado com sucesso';

    // Você pode fazer outras manipulações de HTML aqui dentro desta função
});