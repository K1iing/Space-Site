// Função para limpar os campos do formulário
function limparCampos(emailValido, senhaValida) {
    const emailInput = document.getElementById('emaill');
    const senhaInput = document.getElementById('password');
    const senhaConfirmacaoInput = document.getElementById('passwordConfirmation');

    if (!emailValido) {
        emailInput.value = ''; // Limpa apenas o campo de email
    }

    if (!senhaValida) {
        senhaInput.value = ''; // Limpa apenas o campo de senha
        senhaConfirmacaoInput.value = ''; // Limpa o campo de confirmação de senha
    }

    if (emailValido && senhaValida) {
        // Limpa todos os campos se ambos email e senha estiverem corretos
        emailInput.value = '';
        senhaInput.value = '';
        senhaConfirmacaoInput.value = '';
    }
}

// Função para validar o email
function validarEmail(email) {
    // Expressão regular para verificar o formato do email
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
}

// Função para validar o formulário
function validarFormulario() {
    const email = document.getElementById('emaill').value;
    const senha = document.getElementById('password').value;
    const senhaConfirmacao = document.getElementById('passwordConfirmation').value;
    const h1 = document.getElementById('meuParagrafo');

    // Verificar se o email é válido e foi preenchido
    if (!email) {
        h1.textContent = 'Por favor, coloque um email.';
        limparCampos(false, true); // Limpa apenas o campo de email
        return false;
    } else if (!validarEmail(email)) {
        h1.textContent = 'O email não é válido.';
        limparCampos(false, true); // Limpa apenas o campo de email
        return false;
    }

    // Verificar se a senha foi preenchida
    if (!senha) {
        h1.textContent = 'Por favor, insira uma senha.';
        limparCampos(true, false); // Limpa apenas o campo de senha
        return false;
    }

    // Verificar se as senhas coincidem
    if (senha !== senhaConfirmacao) {
        h1.textContent = 'A senha não confere.';
        limparCampos(true, false); // Limpa apenas o campo de senha
        return false;
    }

    // Se todas as verificações passarem, o formulário é válido
    h1.textContent = 'Registrado com sucesso!';
    limparCampos(true, true); // Limpa todos os campos
    return true;
}

// Adicionando um event listener para chamar a função validarFormulario() quando o formulário for submetido
document.getElementById('inputRegis').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o envio automático do formulário
    validarFormulario();
});
