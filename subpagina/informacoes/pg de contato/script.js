// Seleciona o formulário e a mensagem de resposta
const form = document.querySelector('form');
const responseMessage = document.createElement('div'); // Cria dinamicamente o elemento de resposta
responseMessage.id = 'response-message';
responseMessage.style.display = 'none'; // Inicialmente escondido
responseMessage.style.marginTop = '20px';
responseMessage.style.fontSize = '16px';
form.parentElement.appendChild(responseMessage); // Adiciona após o formulário

// Adiciona evento ao formulário
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    // Valida se todos os campos obrigatórios estão preenchidos
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

  

    // Opcional: limpa os campos do formulário
    form.reset();
});

// Seleciona o botão pelo ID
const continueShoppingButton = document.getElementById('continue-shopping');

// Adiciona um evento de clique ao botão
continueShoppingButton.addEventListener('click', () => {
    // Verifica se há uma página anterior no histórico do navegador
    if (document.referrer) {
        window.history.back(); // Volta para a página anterior
    } else {
        // Caso não haja uma página anterior, redireciona para uma URL padrão
        window.location.href = '/'; // Substitua '/' pela URL desejada
    }
});
