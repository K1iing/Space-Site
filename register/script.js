const botao = document.getElementById('inputRegis');
const email = document.getElementById('emaill');
const passwordField = document.getElementsByClassName('entrarsenha')[0];
const passwordConfirmationField = document.getElementsByClassName('confirmarsenha')[0];

botao.addEventListener('click', function() {
    const password = passwordField.value;
    const passwordConfirmation = passwordConfirmationField.value;
    const userEmail = email.value.trim(); // Remove espaços em branco antes e depois do email

    const paragrafo = document.getElementById('meuParagrafo');
    const emailValido = /\S+@\S+\.\S+/.test(userEmail); // Expressão regular para verificar o formato de email

    if (password && passwordConfirmation && userEmail !== '') {
        if (emailValido) {
            paragrafo.textContent = 'Registrado com sucesso';

            // Limpa os valores dos campos após o registro bem-sucedido
            passwordField.value = '';
            passwordConfirmationField.value = '';
            email.value = ''; // Limpa o campo de e-mail
        } else {
            paragrafo.textContent = 'Por favor, insira um e-mail válido';
        }
    } else if (!password) {
        paragrafo.textContent = 'Por favor, insira uma senha';
    } else if (userEmail === '') {
        paragrafo.textContent = 'Por favor, insira um e-mail';
    } else {
        paragrafo.textContent = 'Senha Não Confere';
    }
});
