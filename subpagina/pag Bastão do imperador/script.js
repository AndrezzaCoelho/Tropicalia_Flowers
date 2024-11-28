const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');

// Lista de produtos
const products = [
    'Flor Rosa',
    'Arranjo de Margaridas',
    'Buquê de Lírios',
    'Flor de Girassol',
    'Arranjo de Orquídeas',
    'Buquê de Tulipas',
    'Arranjo de Ramos',
    'Flor de Jasmim'
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

//menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show'); // Alterna a visibilidade do menu
}

let quantidade = 0; // Variável para controlar a quantidade do item

function alterarQuantidade(valor) {
    const inputQuantidade = document.getElementById('item-quantity');
    let quantidadeAtual = parseInt(inputQuantidade.value) || 0; // Inicializa como 0 se o valor não for um número
    quantidadeAtual += valor;

    if (quantidadeAtual < 1) {
        quantidadeAtual = 1; // A quantidade não pode ser menor que 1
    }

    inputQuantidade.value = quantidadeAtual; // Atualiza o valor no input
}

function aumentarQuantidade() {
    alterarQuantidade(1);
}

function diminuirQuantidade() {
    alterarQuantidade(-1);
}

let itemCount = 0; // Contador de itens no carrinho

function adicionarAoCarrinho() {
    const cor = document.getElementById('flower-color').value; // Obtém a cor do item
    quantidade = parseInt(document.getElementById('item-quantity').value) || 0; // Obtém a quantidade atual

    if (quantidade > 0) {
        itemCount += quantidade; // Incrementa o contador de itens no carrinho pela quantidade selecionada
        updateCartDisplay(); // Atualiza a contagem no carrinho
        alert(`Adicionado ao carrinho: ${quantidade} Antúrio(s) na cor ${cor}.`); // Mensagem de confirmação
    } else {
        alert('Por favor, selecione uma quantidade maior que zero.'); // Mensagem de erro se a quantidade é zero
    }
}

function continuarComprando() {
    alert("Você está retornando à página de compras.");
    const paginaCompras = 'file:///C:/Users/andre/Flores/index.html'; // URL da página de compras

    if (document.referrer) {
        setTimeout(function () {
            window.history.back(); // Volta à página anterior
        }, 1000);
    } else {
        window.location.href = paginaCompras; // Redireciona à página de compras
    }
}

// Controle de quantidade
const removeItemButton = document.getElementById('remove-item');
const addItemButton = document.getElementById('add-item');
const itemQuantityInput = document.getElementById('item-quantity');

removeItemButton.addEventListener('click', () => {
    alterarQuantidade(-1);
});

addItemButton.addEventListener('click', () => {
    alterarQuantidade(1);
});

// Adicionar ao carrinho
const addToCartButton = document.getElementById('add-to-cart');
const itemCountDisplay = document.getElementById('item-count'); // Evitar conflito de nomes com a variável itemCount

addToCartButton.addEventListener('click', () => {
    let quantity = parseInt(itemQuantityInput.value) || 0;
    let currentCount = parseInt(itemCountDisplay.textContent) || 0; // Garantir que seja número
    itemCountDisplay.textContent = currentCount + quantity;
    alert('Item adicionado ao carrinho!');
});

// Seleção de cor
const flowerColorSelect = document.getElementById('flower-color');
flowerColorSelect.addEventListener('change', () => {
    const selectedColor = flowerColorSelect.value;
    console.log(`Cor escolhida: ${selectedColor}`); // Corrigido para usar template string
});

// Cálculo de frete
const calculateFreightButton = document.getElementById('calculate-freight');
const cepInput = document.getElementById('cep');

calculateFreightButton.addEventListener('click', () => {
    const cep = cepInput.value.trim();
    if (cep) {
        alert(`Frete calculado para o CEP: ${cep}`); // Corrigido para usar template string
    } else {
        alert('Por favor, insira um CEP válido.');
    }
});
