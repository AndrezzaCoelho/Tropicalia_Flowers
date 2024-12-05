// Seleciona o botão "Voltar"
const botaoVoltar = document.getElementById('continue-shopping');

// Adiciona evento para voltar à página anterior
botaoVoltar.addEventListener('click', () => {
    window.history.back();
});

// Seleciona o carrinho e atualiza o número de itens dinamicamente (simulado)
const carrinho = document.getElementById('item-count');
let numeroDeItens = 0;

// Função para adicionar item ao carrinho
function adicionarAoCarrinho() {
    numeroDeItens++;
    carrinho.textContent = numeroDeItens; // Atualiza o contador de itens no carrinho
}

// Simula a adição de itens ao carrinho (pode ser expandido para páginas de produtos)
document.addEventListener('DOMContentLoaded', () => {
    console.log("Página carregada. Pronta para interações.");
});

// Menu hambúrguer responsivo
const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuOpcoes = document.getElementById('menu');

// Alterna a exibição do menu ao clicar no hambúrguer
function toggleMenu() {
    menuOpcoes.classList.toggle('active'); // Adiciona ou remove a classe "active"
}

// Adiciona o evento ao ícone do menu
menuHamburguer.addEventListener('click', toggleMenu);

// Configuração para Modo Daltônico
const botaoDaltonismo = document.getElementById('daltonismo-btn');
let modoDaltonicoAtivado = false;

// Alterna o modo daltônico ao clicar no botão
botaoDaltonismo.addEventListener('click', () => {
    modoDaltonicoAtivado = !modoDaltonicoAtivado;

    if (modoDaltonicoAtivado) {
        document.body.classList.add('modo-daltonico'); // Adiciona classe CSS
        alert('Modo para daltônicos ativado.');
    } else {
        document.body.classList.remove('modo-daltonico'); // Remove classe CSS
        alert('Modo para daltônicos desativado.');
    }
});

