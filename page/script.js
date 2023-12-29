
const titulo = document.getElementById('text');

titulo.addEventListener('mouseenter', function() {
  titulo.style.color = 'DarkSlateBlue'; // Altera a cor para azul quando o mouse passa por cima
});

titulo.addEventListener('mouseleave', function() {
  titulo.style.color = ''; // Volta à cor original quando o mouse sai
});
