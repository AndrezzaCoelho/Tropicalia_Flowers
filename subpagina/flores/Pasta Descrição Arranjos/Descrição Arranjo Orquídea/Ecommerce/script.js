// Array para armazenar os itens do carrinho
let cart = [];

// Função para adicionar um item ao carrinho
function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push();
    alert(${productName} foi adicionado ao carrinho!);
    console.log(cart); // Você pode ver o conteúdo do carrinho no console
}

// Função para atualizar a contagem de itens no carrinho
function updateCartCount() {
    const itemCount = cart.length; // Conta a quantidade de itens no carrinho
    cartCountElement.textContent = itemCount; // Atualiza o texto no botão do carrinho
}
 // Função para alternar o menu hambúrguer
 function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

// Função para alternar a visibilidade do menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Adicione um evento ao botão de pesquisa
const searchButton = document.querySelector('.search-bar button');
const searchInput = document.querySelector('.search-bar input');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    if (searchTerm) {
        alert(Você pesquisou por: ${searchTerm});
        // Implementar a lógica de pesquisa aqui
    } else {
        alert('Por favor, insira um termo de pesquisa.');
    }
});

// Lógica de seleção de idioma (opcional)
const languageLinks = document.querySelectorAll('.language-selector a');

languageLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que o link siga o href
        const language = link.getAttribute('title');
        alert(Idioma selecionado: ${language});
    });
});

document.getElementById('hamburger').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
});

 // Objeto para armazenar as traduções