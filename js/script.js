document.addEventListener("DOMContentLoaded", () => {
    // Seletores principais
    const searchInput = document.getElementById("searchInput");
    const productList = document.getElementById("productList");
    const cartCounter = document.getElementById("carrinho");
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");
    const backToTopBtn = document.getElementById("backToTop");
    const daltonismoBtn = document.getElementById("daltonismo-btn");
    const menu = document.getElementById("menu");

    // Array de produtos (exemplo)
    const products = [
        "Antúrio",
        "Bromélias",
        "Orquídea Oncidium",
        "Bougainvillea",
        "Bastão do Imperador",
    ];

    // Carrinho (persistência com LocalStorage)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Exibir produtos filtrados
    function displayProducts(filteredProducts) {
        productList.innerHTML = "";
        filteredProducts.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product-item");
            productDiv.textContent = product;
            productDiv.addEventListener("click", () => selectProduct(product));
            productList.appendChild(productDiv);
        });
    }

    // Filtrar produtos
    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.toLowerCase().includes(searchTerm)
        );
        displayProducts(filteredProducts);
    }

    // Selecionar produto
    function selectProduct(product) {
        searchInput.value = product;
        productList.innerHTML = ""; // Limpar a lista de sugestões
    }

    // Adicionar produto ao carrinho
    function addToCart(productName, productPrice) {
        cart.push({ name: productName, price: productPrice });
        localStorage.setItem("cart", JSON.stringify(cart)); // Atualizar LocalStorage
        alert(`${productName} foi adicionado ao carrinho!`);
        updateCartCounter();
    }

    // Atualizar contador do carrinho
    function updateCartCounter() {
        const itemCount = cart.length;
        cartCounter.innerHTML = `<li><a href="subpagina/pag carrinho/index.html">
            <i class="fas fa-shopping-cart"></i> (${itemCount})
        </a></li>`;
    }

    // Ativar/desativar menu hambúrguer
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Função para voltar ao topo
    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    backToTopBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Alternar modo daltônico
    daltonismoBtn.addEventListener("click", () => {
        document.body.classList.toggle("daltonismo");
        const isDaltonismo = document.body.classList.contains("daltonismo");
        daltonismoBtn.textContent = isDaltonismo ? "Modo Padrão" : "Modo Daltônico";
        daltonismoBtn.setAttribute(
            "aria-label",
            isDaltonismo ? "Desativar modo para daltônicos" : "Ativar modo para daltônicos"
        );
    });

    // Adicionar eventos aos botões "Adicionar ao Carrinho"
    document.querySelectorAll(".product-card button").forEach(button => {
        button.addEventListener("click", event => {
            const productElement = event.target.closest(".product-card");
            const productName = productElement.querySelector("h3").textContent;
            const productPrice = parseFloat(productElement.querySelector("p").textContent.replace("R$", ""));
            addToCart(productName, productPrice);
        });
    });

    // Inicializar funcionalidades
    searchInput.addEventListener("input", filterProducts);
    updateCartCounter();
});
