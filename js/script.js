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

    // Função para ativar/desativar o modo daltonico
  // Seleciona o botão
const daltonismoBtn = document.getElementById('daltonismo-btn');

// Verifica a preferência salva no localStorage e aplica na inicialização
if (localStorage.getItem('modoDaltonismo') === 'true') {
    document.body.classList.add('daltonismo');
}

// Adiciona o evento de clique para alternar o modo
daltonismoBtn.addEventListener('click', () => {
    document.body.classList.toggle('daltonismo');

    // Salva a preferência no localStorage
    const modoAtivo = document.body.classList.contains('daltonismo');
    localStorage.setItem('modoDaltonismo', modoAtivo);
});
