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


// Seleciona o botão de Modo Daltonismo
const daltonismoBtn = document.getElementById('daltonismo-btn');

// Adiciona um evento de clique ao botão
daltonismoBtn.addEventListener('click', () => {
    // Alterna a classe "daltonismo" no elemento <body>
    document.body.classList.toggle('daltonismo');
});

// Lógica para aplicar um esquema de cores específico no modo daltonismo
// Adicione o seguinte CSS para complementar a funcionalidade:



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
renderCartItems();
