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





function atualizarContadorCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  document.getElementById('cart-count').textContent = carrinho.length;
}

// Função para adicionar ao carrinho
function adicionarAoCarrinho(florId) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(florId);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(`A flor foi adicionada ao carrinho!`);
  atualizarContadorCarrinho(); // Atualiza o contador do carrinho
}



  
  
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
    button.addEventListener("click", () => {
      body.classList.toggle("daltonismo");
  
      // Alterar texto do botão dinamicamente
      if (body.classList.contains("daltonismo")) {
        button.textContent = "Modo Padrão";
        button.setAttribute("aria-label", "Desativar modo para daltônicos");
      } else {
        button.textContent = "Modo Daltônico";
        button.setAttribute("aria-label", "Ativar modo para daltônicos");
      }
    });
  });