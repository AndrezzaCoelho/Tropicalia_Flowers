document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    // Aqui você pode adicionar lógica para enviar os dados do formulário para o servidor
    // Por enquanto, apenas exibimos uma mensagem de confirmação

    document.getElementById('confirmationMessage').style.display = 'block';

    // Limpa os campos do formulário após o envio
    document.getElementById('contactForm').reset();
});

// Voltar à página anterior
document.getElementById('backButton').addEventListener('click', function() {
    window.history.back();
})