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

