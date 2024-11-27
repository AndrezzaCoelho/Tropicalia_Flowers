document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Simula uma validação de pagamento
    const name = document.getElementById('first-name').value;

    if (name) {
        document.getElementById('message').innerText = `Pagamento realizado com sucesso para ${name}!`;
        document.getElementById('message').classList.remove('hidden');
        document.getElementById('message').classList.add('success');
    } else {
        document.getElementById('message').innerText = 'Por favor, preencha todos os campos!';
        document.getElementById('message').classList.remove('hidden');
        document.getElementById('message').classList.add('error');
    }
});

function goBack() {
    window.history.back();
}

function continueShopping() {
    document.getElementById('payment-form').reset(); // Reseta o formulário
    document.getElementById('message').classList.add('hidden'); // Esconde a mensagem
    // Aqui você pode redirecionar o usuário para outra página ou seção
    alert('Agora você pode continuar comprando!');
}
