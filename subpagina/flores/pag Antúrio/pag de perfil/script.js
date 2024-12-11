// Função para abrir a janela modal de ajuda
function abrirJanelaAjuda() {
    document.getElementById('janela-ajuda').style.display = 'flex';
}

// Função para abrir a janela modal de edição de endereço
function abrirJanelaEndereco() {
    document.getElementById('janela-endereco').style.display = 'flex';
}

// Função para fechar uma janela modal específica
function fecharJanela(id) {
    document.getElementById(id).style.display = 'none';
}

// Função para simular a abertura do perfil
function openProfile() {
    alert('Abrindo perfil do usuário...');
}

// Função para salvar o novo endereço
document.querySelector('#janela-endereco form').addEventListener('submit', function (e) {
    e.preventDefault(); // Previne o envio do formulário

    // Obtendo os valores dos campos
    const endereco = document.getElementById('endereco').value;
    const cidade = document.getElementById('cidade').value;
    const cep = document.getElementById('cep').value;

    // Validação básica
    if (endereco && cidade && cep) {
        // Atualiza o texto do endereço exibido
        document.getElementById('endereco-completo').textContent = `${endereco}, ${cidade}, CEP: ${cep}`;
        alert('Endereço atualizado com sucesso!');
        fecharJanela('janela-endereco'); // Fecha a janela modal
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});

// Função para envio do formulário de ajuda
document.querySelector('#janela-ajuda form').addEventListener('submit', function (e) {
    e.preventDefault(); // Previne o envio do formulário
    const resposta = document.getElementById('resposta-ajuda');
    
    // Exibindo mensagem na área de resposta
    function exibirResposta() {
        alert("Você clicou no botão Enviar!");
    }
    
    // Limpa o texto do formulário
    document.querySelector('#janela-ajuda form').reset();
});

// Função para voltar à página anterior
document.getElementById('backToPreviousPage').addEventListener('click', function () {
    window.history.back();
})

// Configuração inicial para ocultar todas as janelas modais
document.addEventListener('DOMContentLoaded', function () {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none'; // Esconde todas as janelas modais ao carregar
    });
});
