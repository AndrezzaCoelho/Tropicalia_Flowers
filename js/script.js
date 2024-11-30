// Função para alternar o menu hambúrguer
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Função para ativar/desativar o modo daltônico
const daltonismoButton = document.getElementById('daltonismo-btn');
daltonismoButton.addEventListener('click', () => {
    document.body.classList.toggle('daltonismo');
});

// Função de busca (filtrar produtos)
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const productList = document.querySelectorAll('.product-card');

searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    productList.forEach((product) => {
        const title = product.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// Função de adicionar ao carrinho e atualizar o contador
let cartCount = 0;

function addToCart(productName, productPrice) {
    cartCount++; // Incrementa o contador
    const cartCountElement = document.getElementById('cart-count');

    // Verifica se o elemento existe antes de tentar atualizar o texto
    if (cartCountElement) {
        cartCountElement.textContent = cartCount; // Atualiza o número no botão do carrinho
    } else {
        console.error("Elemento com ID 'cart-count' não encontrado.");
    }

    alert(`${productName} foi adicionado ao carrinho por R$ ${productPrice.toFixed(2)}.`);
}

// Exemplo de uso (você pode chamar essa função a partir de um evento, como um clique)
document.getElementById('add-to-cart-button').addEventListener('click', function() {
    addToCart('Produto Exemplo', 99.99);
});

// Função para fechar o menu ao clicar fora dele
document.addEventListener('click', (e) => {
    const menu = document.getElementById('menu');
    const hamburger = document.querySelector('.menu-hamburguer');
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('active');
    }
});
