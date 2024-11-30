const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');

// Lista de produtos
const products = [
    
];

// Função para mostrar os produtos
function displayProducts(productsToDisplay) {
    // Limpa a lista anterior
    productList.innerHTML = ''; 
    productsToDisplay.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.textContent = product;
        productDiv.onclick = () => selectProduct(product); // Seleciona o produto ao clicar
        productList.appendChild(productDiv);
    });
}

// Função para filtrar e exibir os produtos com base na pesquisa
function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

// Função chamada quando um produto é selecionado
function selectProduct(product) {
    searchInput.value = product; // Define o valor da pesquisa
    productList.innerHTML = ''; // Limpa a lista após a seleção
}

// Adiciona o evento de entrada no campo de pesquisa
searchInput.addEventListener('input', searchProducts); // Chama a função ao digitar

// Limpa a lista de produtos inicialmente
productList.innerHTML = '';

// Seleciona o hamburger e nav
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// Adiciona um evento de clique ao hamburger
hamburger.addEventListener('click', () => {
    // Alterna a classe 'active' no nav
    nav.classList.toggle('active');
});





// Array para armazenar os itens do carrinho
let cart = [];

// Função para adicionar itens ao carrinho
function addToCart(productName, productPrice) {
    // Adiciona o produto ao carrinho
    cart.push({ name: productName, price: productPrice });
    alert(`${productName} foi adicionado ao carrinho!`);
    updateCartCounter();
}

// Atualiza a contagem de itens no carrinho
function updateCartCounter() {
    const carrinho = document.getElementById('carrinho');
    const itemCount = cart.length;
    
    // Atualiza o conteúdo do carrinho (pode ser mudado com um badge, etc.)
    carrinho.innerHTML = `<li><a href="carrinho"><i class="fas fa-shopping-cart"></i> (${itemCount})</a></li>`;
}

// Funcionalidade do menu hambúrguer
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active'); // Alterna a classe 'active'

    // Adiciona uma animação quando o menu é aberto/fechado
    if (menu.classList.contains('active')) {
        menu.style.display = 'block'; // Mostra o menu
    } else {
        menu.style.display = 'none'; // Esconde o menu
    }
}

// Função para voltar ao topo da página
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const toggleButton = document.getElementById("language-toggle");
const languageLabel = document.getElementById("language-label");




  
  
  document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('li a[href="#acessibilidade"]');
    
    // Garantir foco no botão
    button.setAttribute("tabindex", "0"); // Tornar navegável por teclado
    
    // Alternativa para leitores de tela
    button.setAttribute("aria-label", "Ir para opções de acessibilidade");
    
    // Reagir à tecla Enter
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        button.click(); // Simula clique ao pressionar Enter
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("daltonismo-btn");
    const body = document.body;
  
    // Alternar o modo daltônico
    // Seleciona o botão usando seu ID
 const backToTopButton = document.getElementById('backToTop');

 // Adiciona um evento de clique ao botão
 backToTopButton.addEventListener('click', function() {
     // Função para voltar à página anterior
     window.history.back();
 });
  
      // Alterar texto do botão dinamicamente
      if (body.classList.contains("daltonismo")) {
        button.textContent = "Modo Padrão";
        button.setAttribute("aria-label", "Desativar modo para daltônicos");
      } else {
        button.textContent = "Modo Daltônico";
        button.setAttribute("aria-label", "Ativar modo para daltônicos");
      }
    });

  // Seleciona todos os botões de adicionar ao carrinho
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Adiciona evento de clique em cada botão
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.closest('.product');
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.getAttribute('data-name');
        const productPrice = productElement.getAttribute('data-price');

        // Obtem o carrinho atual do Local Storage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Adiciona o produto ao carrinho
        cart.push({ id: productId, name: productName, price: productPrice });
        localStorage.setItem('cart', JSON.stringify(cart));

        // Atualiza o contador do carrinho
        updateCartCount();
    });
});

// Atualiza o contador do carrinho no cabeçalho
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').textContent = cart.length;
}

// Atualiza o contador ao carregar a página
updateCartCount();


        // Função para adicionar produtos ao carrinho
        function adicionarAoCarrinho(event) {
            const produto = event.target.parentElement;
            const nomeProduto = produto.getAttribute('data-name');

            // Cria um novo item na lista do carrinho
            const carrinhoItems = document.getElementById('carrinhoItems');
            const li = document.createElement('li');
            li.textContent = nomeProduto;

            // Adiciona o item à lista do carrinho
            carrinhoItems.appendChild(li);
        }

        // Adiciona escutadores de eventos aos botões
        const botoesAdicionar = document.querySelectorAll('.add-to-cart');
        botoesAdicionar.forEach(botao => {
            botao.addEventListener('click', adicionarAoCarrinho);
        });