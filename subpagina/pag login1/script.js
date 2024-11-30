document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Aqui você pode adicionar lógica para autenticar o usuário
        console.log('E-mail:', email);
        console.log('Senha:', password);

        // Simulando um redirecionamento após "autenticação"
        // window.location.href = 'dashboard.html';
    });
});
