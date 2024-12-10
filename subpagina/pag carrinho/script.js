// Seleciona os elementos
const checkoutButton = document.getElementById('checkout');
const paymentModal = document.getElementById('payment-modal');
const closeModalButton = document.getElementById('close-modal');
const paymentOptions = document.querySelectorAll('.payment-option');
const selectedMethodParagraph = document.getElementById('selected-method');

// Exibe o modal ao clicar em "Finalizar Compra"
checkoutButton.addEventListener('click', () => {
    paymentModal.style.display = 'flex';
});

// Fecha o modal ao clicar no botão "X"
closeModalButton.addEventListener('click', () => {
    paymentModal.style.display = 'none';
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target === paymentModal) {
        paymentModal.style.display = 'none';
    }
});

// Atualiza o método de pagamento selecionado
paymentOptions.forEach((option) => {
    option.addEventListener('click', () => {
        const method = option.getAttribute('data-method');
        selectedMethodParagraph.textContent = `Método selecionado: ${method}`;
        paymentModal.style.display = 'none'; // Fecha o modal após a seleção
    });
});

 // Seleciona o botão usando seu ID
 const backToTopButton = document.getElementById('backToTop');

 // Adiciona um evento de clique ao botão
 backToTopButton.addEventListener('click', function() {
     // Função para voltar à página anterior
     window.history.back();
 });

// Seleciona o botão de Modo Daltonismo
const daltonismoBtn = document.getElementById('daltonismo-btn');

// Adiciona um evento de clique ao botão
daltonismoBtn.addEventListener('click', () => {
    // Alterna a classe "daltonismo" no elemento <body>
    document.body.classList.toggle('daltonismo');
});




// Seleciona o elemento onde os itens do carrinho serão exibidos
const cartItemsContainer = document.getElementById('cart-items');

// Obtem os itens do carrinho do Local Storage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Exibe os itens do carrinho
function renderCartItems() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        return;
    }

    // Gera o HTML para os produtos do carrinho
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <h3>${item.name}</h3>
            <p>Preço: R$ ${item.price}</p>
        </div>
    `).join('');
}

// Chama a função para exibir os itens ao carregar a página
const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function carregarCarrinho() {
    const cartListDiv = document.getElementById('cart-list');
    cartListDiv.innerHTML = ""; // Limpa o carrinho antes de atualizar

    if (carrinho.length === 0) {
        cartListDiv.innerHTML = "<p>Seu carrinho está vazio.</p>";
        return;
    }

    carrinho.forEach((flor, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-card';
        cartItemDiv.innerHTML = `
            ${index + 1}. <strong>${flor.nome}</strong> - R$${flor.valor.toFixed(2)}
        `;
        cartListDiv.appendChild(cartItemDiv);
    });
}

// Carregar o carrinho ao carregar a página
window.onload = carregarCarrinho;