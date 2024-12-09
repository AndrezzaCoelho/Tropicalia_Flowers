document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", function (event) {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validação de e-mail
        if (!validateEmail(email)) {
            event.preventDefault();
            alert("Por favor, insira um e-mail válido.");
            emailInput.focus();
            return;
        }

        // Validação de senha
        if (password.length < 6) {
            event.preventDefault();
            alert("A senha deve ter pelo menos 6 caracteres.");
            passwordInput.focus();
            return;
        }

        alert("Login enviado com sucesso!");
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});


    document.querySelector('a[href="index.html"]').addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link (navegação para a URL)
        window.location.href = 'index.html'; // Redireciona para a página desejada
    });

    document.getElementById('login-form').addEventListener('submit', function(event) {
        // Impede o envio padrão do formulário
        event.preventDefault();

        // Obtendo os valores dos campos
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validando os campos
        if (validateEmail(email) && validatePassword(password)) {
            // Simula um envio bem-sucedido
            console.log('Login bem-sucedido!');
            console.log('E-mail:', email);
            console.log('Senha:', password);
            // Aqui você pode adicionar a lógica para enviar os dados para o servidor
        } else {
            console.log('Por favor, preencha os campos corretamente.');
        }
    });

    function validateEmail(email) {
        // Regex simples para validação de e-mail
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        // Valida se a senha possui pelo menos 6 caracteres
        return password.length >= 6;
    }