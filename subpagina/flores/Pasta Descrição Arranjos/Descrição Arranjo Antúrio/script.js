// script.js

// Função para atualizar o valor da quantidade
function updateQuantity(change) {
    const quantityInput = document.getElementById('item-quantity');
    let currentQuantity = parseInt(quantityInput.value);
    
    currentQuantity += change;
    
    // Garantir que a quantidade não fique abaixo de 1
    if (currentQuantity < 1) {
        currentQuantity = 1;
    }
    
    quantityInput.value = currentQuantity;
}

// Função para adicionar o item ao carrinho
function addToCart() {
    const quantityInput = document.getElementById('item-quantity');
    const quantity = parseInt(quantityInput.value);
    const price = 50.00; // Preço fixo do arranjo
    const totalPrice = (price * quantity).toFixed(2);
    
    alert(`Você adicionou ${quantity} item(s) ao carrinho. Total: R$${totalPrice}`);
}

// Função para calcular o frete
function calculateFreight() {
    const cepInput = document.getElementById('cep');
    const cep = cepInput.value;

    if (cep) {
        // Aqui você pode adicionar a lógica para calcular o frete baseado no CEP
        // Por exemplo, um valor fixo só para fins de demonstração
        const freightCost = 15.00; // Custo de frete fixo
        alert(`O frete para o CEP ${cep} é R$${freightCost.toFixed(2)}`);
    } else {
        alert('Por favor, insira um CEP válido.');
    }
}

// Função para continuar comprando (navegar para outra página, por exemplo)
function continuarComprando() {
    // Aqui você pode redirecionar para outra página, por exemplo:
    window.location.href = 'index.html'; // Mudar para a URL desejada
}

// Adiciona eventos aos botões
document.getElementById('add-item').addEventListener('click', () => updateQuantity(1));
document.getElementById('remove-item').addEventListener('click', () => updateQuantity(-1));
document.getElementById('add-to-cart').addEventListener('click', addToCart);
document.getElementById('calculate-freight').addEventListener('click', calculateFreight);
//botão voltar//
document.getElementById("backToTop").addEventListener("click", function() {
    window.history.back();
});


// Função para adicionar item ao carrinho
function adicionarAoCarrinho() {
    // Aqui você pode adicionar a lógica para adicionar o item ao carrinho
    alert("Item adicionado ao carrinho!");
}

// Função para continuar comprando
function continuarComprando() {
    // Substitua 'sua-url-aqui' pela URL da página desejada
    window.location.href = '../../../';
}

// Adiciona os eventos aos botões quando o documento estiver pronto
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("add-to-cart").addEventListener("click", adicionarAoCarrinho);
});