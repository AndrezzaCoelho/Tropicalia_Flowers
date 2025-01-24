// Carrinho e contagem
let cart = [], cartCount = 0;

// Adiciona produto ao carrinho
function addToCart(name, price) {
    cart.push({ name, price });
    cartCount++;
    console.log(`${name} adicionado. Preço: R$ ${price.toFixed(2)}`);
    console.log(`Total: ${cartCount}`);
    updateCartCount();
}

// Atualiza contador do carrinho
function updateCartCount() {
    const icon = document.querySelector('.menu-carrinho a i');
    cartCount > 0 ? icon.setAttribute('data-count', cartCount) : icon.removeAttribute('data-count');
}

// Modo Daltonismo
const daltonismoBtn = document.getElementById('daltonismo-btn');

document.addEventListener('DOMContentLoaded', () => {
    localStorage.getItem('modoDaltonismo') === 'true' && ativarModoDaltonismo();
});

function ativarModoDaltonismo() {
    document.body.classList.add('daltonismo');
    document.querySelectorAll('img').forEach(img => img.style.filter = 'grayscale(100%)');
    document.querySelectorAll('*').forEach(el => el.style.color = el.tagName === 'A' ? '#1a73e8' : '#333');
}

function desativarModoDaltonismo() {
    document.body.classList.remove('daltonismo');
    document.querySelectorAll('img').forEach(img => img.style.filter = 'none');
    document.querySelectorAll('*').forEach(el => el.style.color = '');
}

daltonismoBtn.addEventListener('click', () => {
    const modoAtivo = document.body.classList.toggle('daltonismo');
    localStorage.setItem('modoDaltonismo', modoAtivo);
    modoAtivo ? ativarModoDaltonismo() : desativarModoDaltonismo();
});

// Menu Hambúrguer
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Banco de dados e carrinho
const flores = [
    { id: 1, nome: "Rosa Vermelha", valor: 15.0 },
    { id: 2, nome: "Girassol", valor: 12.5 }, 
    { id: 3, nome: "Orquídea", valor: 25.0 }
];

const carrinho = [];

function carregarFlores() {
    const list = document.getElementById('flower-list');
    list.innerHTML = flores.map(f => `
        <div class="flower-card">
            <strong>${f.nome}</strong><br>
            Preço: R$${f.valor.toFixed(2)}<br>
            <button onclick="adicionarAoCarrinho(${f.id})">Adicionar ao Carrinho</button>
        </div>
    `).join('');
}

function adicionarAoCarrinho(id) {
    const flor = flores.find(f => f.id === id);
    flor ? (carrinho.push(flor), atualizarCarrinho()) : alert("Flor não encontrada!");
}

function atualizarCarrinho() {
    const list = document.getElementById('cart-list');
    list.innerHTML = carrinho.length ? carrinho.map((f, i) => `
        <div class="cart-card">
            ${i + 1}. <strong>${f.nome}</strong> - R$${f.valor.toFixed(2)}
        </div>
    `).join('') : "<p>Seu carrinho está vazio.</p>";
}