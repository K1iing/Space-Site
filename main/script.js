document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('.entraremail');
    const passwordInput = document.querySelector('.entrarsenha');
    const loginButton = document.querySelector('.logar');
    const h1Element = document.querySelector('.nomePrincipal');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const email = emailInput.value;
        const password = passwordInput.value;

        if (!isValidEmail(email)) {
            h1Element.textContent = 'Email inválido!';
            emailInput.value = ''; // Limpa o campo de email
            passwordInput.value = ''; // Limpa o campo de senha
        } else if (!password) {
            h1Element.textContent = 'Por favor, coloque uma senha.';
        } else {
            // Aqui você faria a lógica de verificação da senha
            // Supondo que a verificação da senha seja bem-sucedida
            h1Element.textContent = 'Login bem-sucedido!';

            // Limpar os campos após um login bem-sucedido
            emailInput.value = '';
            passwordInput.value = '';
            //h1Element.textContent = 'Login'; // Não redefinir o texto aqui para manter a confirmação de login
        }
    });
});

function isValidEmail(email) {
    // Esta é uma validação de email simples para o exemplo
    // Você pode usar expressões regulares ou uma lógica mais robusta
    return email.includes('@') && email.includes('.');
}
