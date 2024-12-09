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
    document.getElementById('daltonismo-btn').addEventListener('click', function() {
        // Alternar a classe 'daltonismo' no elemento body
        document.body.classList.toggle('daltonismo');
        
        // Alterar o ícone ou o texto do botão, se desejado
        if (document.body.classList.contains('daltonismo')) {
            this.setAttribute('aria-label', 'Desativar modo para daltônicos');
            this.innerHTML = '<i class="fas fa-eye-slash"></i>'; // Ícone de olho cortado
        } else {
            this.setAttribute('aria-label', 'Ativar modo para daltônicos');
            this.innerHTML = '<i class="fas fa-eye"></i>'; // Ícone de olho
        }
    });
    