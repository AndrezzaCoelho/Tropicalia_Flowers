    // Variáveis para armazenar o carrinho e a quantidade de produtos
    let cart = [];
    let cartCount = 0;

    // Função para adicionar produtos ao carrinho
    function addToCart(productName, productPrice) {
        // Adiciona o produto ao carrinho
        cart.push({ name: productName, price: productPrice });
        cartCount++;
        
        // Exibe uma mensagem no console
        console.log(`${productName} adicionado ao carrinho. Preço: R$ ${productPrice.toFixed(2)}`);
        console.log(`Total de itens no carrinho: ${cartCount}`);
        
        // Atualiza a contagem de itens no carrinho na interface
        updateCartCount();
    }

    // Função para atualizar a contagem de itens no carrinho
    function updateCartCount() {
        const cartIcon = document.querySelector('.menu-carrinho a i'); // Seleciona o ícone do carrinho
        if (cartCount > 0) {
            cartIcon.setAttribute('data-count', cartCount); // Define o atributo de contagem
        } else {
            cartIcon.removeAttribute('data-count'); // Remove o atributo se não houver itens
        }
    }

// Modo Daltonismo
const daltonismoBtn = document.getElementById('daltonismo-btn');

// Verifica a preferência armazenada e aplica o modo daltonismo se ativado
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('modoDaltonismo') === 'true') {
        ativarModoDaltonismo();
    }
});

// Função para ativar o modo daltonismo
function ativarModoDaltonismo() {
    document.body.classList.add('daltonismo');

    // Caso precise alterar estilos específicos de elementos
    const imagens = document.querySelectorAll('img');
    imagens.forEach(img => img.style.filter = 'grayscale(100%)');

    const textos = document.querySelectorAll('*');
    textos.forEach(el => el.style.color = el.tagName === 'A' ? '#1a73e8' : '#333');
}

// Função para desativar o modo daltonismo
function desativarModoDaltonismo() {
    document.body.classList.remove('daltonismo');

    const imagens = document.querySelectorAll('img');
    imagens.forEach(img => img.style.filter = 'none');

    const textos = document.querySelectorAll('*');
    textos.forEach(el => el.style.color = '');
}

// Alterna o modo ao clicar no botão
daltonismoBtn.addEventListener('click', () => {
    const modoAtivo = document.body.classList.toggle('daltonismo');
    localStorage.setItem('modoDaltonismo', modoAtivo);

    if (modoAtivo) {
        ativarModoDaltonismo();
    } else {
        desativarModoDaltonismo();
    }
});

// Menu Hambúrguer
function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
  }
  
  const menuToggle = document.querySelector('.menu-toggle');
  
  menuToggle.addEventListener('click', toggleMenu);

// Banco de dados de flores
const flores = [
    { id: 1, nome: "Rosa Vermelha", valor: 15.0 },
    { id: 2, nome: "Girassol", valor: 12.5 },
    { id: 3, nome: "Orquídea", valor: 25.0 }
];

// Carrinho de compras
const carrinho = [];

// Função para carregar a lista de flores na página
function carregarFlores() {
    const flowerListDiv = document.getElementById('flower-list');
    flowerListDiv.innerHTML = ""; // Limpa a lista antes de carregar

    flores.forEach(flor => {
        const florDiv = document.createElement('div');
        florDiv.className = 'flower-card';
        florDiv.innerHTML = `
            <strong>${flor.nome}</strong><br>
            Preço: R$${flor.valor.toFixed(2)}<br>
            <button onclick="adicionarAoCarrinho(${flor.id})">Adicionar ao Carrinho</button>
        `;
        flowerListDiv.appendChild(florDiv);
    });
}

// Função para adicionar uma flor ao carrinho
function adicionarAoCarrinho(id) {
    const flor = flores.find(flor => flor.id === id);
    if (flor) {
        carrinho.push(flor);
        atualizarCarrinho();
    } else {
        alert("Flor não encontrada!");
    }
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
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