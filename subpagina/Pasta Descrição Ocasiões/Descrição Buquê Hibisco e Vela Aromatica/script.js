// Variáveis globais
let cartQuantity = 0; // Quantidade total no carrinho

// Função para alternar a visibilidade do menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Função para adicionar item ao carrinho
document.getElementById("add-to-cart").addEventListener("click", function() {
    const quantity = document.getElementById("item-quantity").value;
    cartQuantity += parseInt(quantity);
    alert("Item adicionado ao carrinho. Total de itens: " + cartQuantity);
});

// Função para continuar comprando (pode ser ajustada para redirecionar para a página inicial ou produtos)
function continuarComprando() {
    alert("Continuando a compra...");
}

// Funções para aumentar e diminuir a quantidade do item
document.getElementById("add-item").addEventListener("click", function() {
    const quantityInput = document.getElementById("item-quantity");
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

document.getElementById("remove-item").addEventListener("click", function() {
    const quantityInput = document.getElementById("item-quantity");
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});

// Função para calcular o frete (exemplo básico)
document.getElementById("calculate-freight").addEventListener("click", function() {
    const cep = document.getElementById("cep").value;
    if (cep) {
        alert("Calculando frete para o CEP: " + cep);
        // Aqui você pode adicionar uma lógica para calcular o frete baseado no CEP
    } else {
        alert("Por favor, digite um CEP válido.");
    }
});