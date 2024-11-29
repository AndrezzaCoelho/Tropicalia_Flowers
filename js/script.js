document.addEventListener("DOMContentLoaded", () => {
    // Elementos principais
    const searchInput = document.getElementById('searchInput');
    const productList = document.getElementById('productList');
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const backToTopBtn = document.getElementById("backToTop");
    const daltonismoBtn = document.getElementById("daltonismo-btn");
    const carrinho = document.getElementById('carrinho');
    const carrinhoItems = document.getElementById('carrinhoItems'); // Lista de itens no carrinho
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Lista de produtos (exemplo)
    const products = [
        "Antúrio",
        "Bromélias",
        "Orquídea Oncidium",
        "Bougainvillea",
        "Bastão do Imperador"
    ];

    // Carrinho
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Função para exibir os produtos
    function displayProducts(productsToDisplay) {
        productList.innerHTML = ''; // Limpa a lista anterior
        productsToDisplay.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.textContent = product;
            productDiv.onclick = () => selectProduct(product); // Seleciona o produto ao clicar
            productList.appendChild(productDiv);
        });
    }

    // Filtrar e exibir produtos com base na pesquisa
    function searchProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.toLowerCase().includes(searchTerm)
        );
        displayProducts(filteredProducts);
    }

    // Selecionar produto
    function selectProduct(product) {
        searchInput.value = product; // Define o valor da pesquisa
        productList.innerHTML = ''; // Limpa a lista
    }

    // Evento para pesquisa dinâmica
    searchInput.addEventListener('input', searchProducts);

    // Inicializa a lista de produtos vazia
    productList.innerHTML = '';

    // Função para adicionar itens ao carrinho
    function addToCart(productName, productPrice) {
        cart.push({ name: productName, price: productPrice });
        localStorage.setItem('cart', JSON.stringify(cart)); // Atualiza o carrinho no LocalStorage
        alert(`${productName} foi adicionado ao carrinho!`);
        updateCartCounter();
    }

    // Atualizar contador do carrinho
    function updateCartCounter() {
        const itemCount = cart.length;
        carrinho.innerHTML = `<li><a href="carrinho"><i class="fas fa-shopping-cart"></i> (${itemCount})</a></li>`;
    }

    // Inicializa o contador do carrinho
    updateCartCounter();

    // Função para o menu hambúrguer
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Voltar ao topo da página
    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    backToTopBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Alternar modo para daltônicos
    daltonismoBtn.addEventListener("click", () => {
        document.body.classList.toggle("daltonismo");
        daltonismoBtn.textContent = document.body.classList.contains("daltonismo") ? 
            "Modo Padrão" : "Modo Daltônico";
        daltonismoBtn.setAttribute(
            "aria-label",
            document.body.classList.contains("daltonismo") ? 
                "Desativar modo para daltônicos" : 
                "Ativar modo para daltônicos"
        );
    });

    // Adicionar ao carrinho (botões dinâmicos)
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.product');
            const productName = productElement.getAttribute('data-name');
            const productPrice = parseFloat(productElement.getAttribute('data-price'));

            addToCart(productName, productPrice);
        });
    });

    // Atualiza contador do carrinho ao carregar a página
    updateCartCounter();

    // Adiciona produtos ao carrinho na lista visual
    function adicionarAoCarrinho(event) {
        const produto = event.target.parentElement;
        const nomeProduto = produto.getAttribute('data-name');

        // Cria novo item na lista
        const li = document.createElement('li');
        li.textContent = nomeProduto;

        // Adiciona na lista do carrinho
        carrinhoItems.appendChild(li);
    }

    // Adiciona eventos aos botões de adicionar ao carrinho
    addToCartButtons.forEach(botao => {
        botao.addEventListener('click', adicionarAoCarrinho);
    });
});
let cart = [];

function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice
    };
    cart.push(product);
    updateCart();
}

function updateCart() {
    const carrinho = document.getElementById('carrinho');
    carrinho.innerHTML = `<li><a href="subpagina/pag carrinho/index.html"><i class="fas fa-shopping-cart"></i></a> (${cart.length} itens)</li>`;
    // Aqui você pode adicionar lógica para mostrar o valor total, etc.
}

function toggleMenu() {
    const menu = document.getElementById('nav');
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Para fechar o menu ao clicar fora dele
window.onclick = function(event) {
    const menu = document.getElementById('nav');
    if (!event.target.matches('.menu-hamburguer') && menu.style.display === "block") {
        menu.style.display = "none";
    }
}
