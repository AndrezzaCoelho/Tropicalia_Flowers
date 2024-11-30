// Seleção de elementos
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const menu = document.getElementById("menu");
const menuHamburguer = document.querySelector(".menu-hamburguer");
const daltonismoBtn = document.getElementById("daltonismo-btn");

// Função para alternar o menu hambúrguer
function toggleMenu() {
  menu.classList.toggle("active");
}

// Ativar/desativar modo para daltônicos
daltonismoBtn.addEventListener("click", () => {
  document.body.classList.toggle("modo-daltonico");
});

// Pesquisa
searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    alert(`Você pesquisou por: ${query}`);
  } else {
    alert("Digite algo para pesquisar!");
  }
});

// Adicionar itens ao carrinho
function addToCart(produto, preco) {
    alert(`${produto} foi adicionado ao carrinho por R$ ${preco.toFixed(2)}.`);
}

// Configurar evento de clique no menu hambúrguer
menuHamburguer.addEventListener("click", toggleMenu);